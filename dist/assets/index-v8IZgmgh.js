(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Qd="/assets/rapier_wasm3d_bg-bb0TTxsO.wasm",tu=async(i={},t)=>{let e;if(t.startsWith("data:")){const n=t.replace(/^data:.*?base64,/,"");let r;if(typeof Buffer=="function"&&typeof Buffer.from=="function")r=Buffer.from(n,"base64");else if(typeof atob=="function"){const s=atob(n);r=new Uint8Array(s.length);for(let a=0;a<s.length;a++)r[a]=s.charCodeAt(a)}else throw new Error("Cannot decode base64-encoded data URL");e=await WebAssembly.instantiate(r,i)}else{const n=await fetch(t),r=n.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&r.startsWith("application/wasm"))e=await WebAssembly.instantiateStreaming(n,i);else{const s=await n.arrayBuffer();e=await WebAssembly.instantiate(s,i)}}return e.instance.exports};let h;function eu(i){h=i}const Kt=new Array(128).fill(void 0);Kt.push(void 0,null,!0,!1);function Yt(i){return Kt[i]}let pr=Kt.length;function le(i){pr===Kt.length&&Kt.push(Kt.length+1);const t=pr;return pr=Kt[t],Kt[t]=i,t}function Ls(i,t){try{return i.apply(this,t)}catch(e){h.__wbindgen_export_0(le(e))}}const nu=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let yh=new nu("utf-8",{ignoreBOM:!0,fatal:!0});yh.decode();let Fr=null;function iu(){return(Fr===null||Fr.byteLength===0)&&(Fr=new Uint8Array(h.memory.buffer)),Fr}function Sh(i,t){return i=i>>>0,yh.decode(iu().subarray(i,i+t))}function It(i){return i==null}let Ri=null;function Ne(){return(Ri===null||Ri.buffer.detached===!0||Ri.buffer.detached===void 0&&Ri.buffer!==h.memory.buffer)&&(Ri=new DataView(h.memory.buffer)),Ri}function ru(i){i<132||(Kt[i]=pr,pr=i)}function mr(i){const t=Yt(i);return ru(i),t}function R(i,t){if(!(i instanceof t))throw new Error(`expected instance of ${t.name}`)}let ce=128;function me(i){if(ce==1)throw new Error("out of js stack");return Kt[--ce]=i,ce}let Ur=null;function su(){return(Ur===null||Ur.byteLength===0)&&(Ur=new Int32Array(h.memory.buffer)),Ur}function au(i,t){return i=i>>>0,su().subarray(i/4,i/4+t)}let Nr=null;function Mh(){return(Nr===null||Nr.byteLength===0)&&(Nr=new Float32Array(h.memory.buffer)),Nr}function qc(i,t){return i=i>>>0,Mh().subarray(i/4,i/4+t)}let Or=null;function Eh(){return(Or===null||Or.byteLength===0)&&(Or=new Uint32Array(h.memory.buffer)),Or}function ou(i,t){return i=i>>>0,Eh().subarray(i/4,i/4+t)}let Xe=0;function ir(i,t){const e=t(i.length*4,4)>>>0;return Eh().set(i,e/4),Xe=i.length,e}function Kn(i,t){const e=t(i.length*4,4)>>>0;return Mh().set(i,e/4),Xe=i.length,e}const Fs=Object.freeze({LinX:0,0:"LinX",LinY:1,1:"LinY",LinZ:2,2:"LinZ",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"}),un=Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Rope:3,3:"Rope",Spring:4,4:"Spring",Spherical:5,5:"Spherical",Generic:6,6:"Generic"}),Fe=Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron",HalfSpace:17,17:"HalfSpace",Voxels:18,18:"Voxels"}),Ks=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawbroadphase_free(i>>>0,1));class Gn{static __wrap(t){t=t>>>0;const e=Object.create(Gn.prototype);return e.__wbg_ptr=t,Ks.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ks.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawbroadphase_free(t,0)}constructor(){const t=h.rawbroadphase_new();return this.__wbg_ptr=t>>>0,Ks.register(this,this.__wbg_ptr,this),this}castRay(t,e,n,r,s,a,o,c,l,u,f,d){try{R(t,Re),R(e,fe),R(n,we),R(r,F),R(s,F);const p=h.rawbroadphase_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o,c,It(l)?4294967297:l>>>0,!It(u),It(u)?0:u,!It(f),It(f)?0:f,me(d));return p===0?void 0:Qo.__wrap(p)}finally{Kt[ce++]=void 0}}castRayAndGetNormal(t,e,n,r,s,a,o,c,l,u,f,d){try{R(t,Re),R(e,fe),R(n,we),R(r,F),R(s,F);const p=h.rawbroadphase_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o,c,It(l)?4294967297:l>>>0,!It(u),It(u)?0:u,!It(f),It(f)?0:f,me(d));return p===0?void 0:Os.__wrap(p)}finally{Kt[ce++]=void 0}}intersectionsWithRay(t,e,n,r,s,a,o,c,l,u,f,d,p){try{R(t,Re),R(e,fe),R(n,we),R(r,F),R(s,F),h.rawbroadphase_intersectionsWithRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o,me(c),l,It(u)?4294967297:u>>>0,!It(f),It(f)?0:f,!It(d),It(d)?0:d,me(p))}finally{Kt[ce++]=void 0,Kt[ce++]=void 0}}intersectionWithShape(t,e,n,r,s,a,o,c,l,u,f){try{const w=h.__wbindgen_add_to_stack_pointer(-16);R(t,Re),R(e,fe),R(n,we),R(r,F),R(s,kt),R(a,Ct),h.rawbroadphase_intersectionWithShape(w,this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,It(c)?4294967297:c>>>0,!It(l),It(l)?0:l,!It(u),It(u)?0:u,me(f));var d=Ne().getInt32(w+0,!0),p=Ne().getFloat64(w+8,!0);return d===0?void 0:p}finally{h.__wbindgen_add_to_stack_pointer(16),Kt[ce++]=void 0}}projectPoint(t,e,n,r,s,a,o,c,l,u){try{R(t,Re),R(e,fe),R(n,we),R(r,F);const f=h.rawbroadphase_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,It(o)?4294967297:o>>>0,!It(c),It(c)?0:c,!It(l),It(l)?0:l,me(u));return f===0?void 0:xs.__wrap(f)}finally{Kt[ce++]=void 0}}projectPointAndGetFeature(t,e,n,r,s,a,o,c,l){try{R(t,Re),R(e,fe),R(n,we),R(r,F);const u=h.rawbroadphase_projectPointAndGetFeature(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,It(a)?4294967297:a>>>0,!It(o),It(o)?0:o,!It(c),It(c)?0:c,me(l));return u===0?void 0:xs.__wrap(u)}finally{Kt[ce++]=void 0}}intersectionsWithPoint(t,e,n,r,s,a,o,c,l,u){try{R(t,Re),R(e,fe),R(n,we),R(r,F),h.rawbroadphase_intersectionsWithPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,me(s),a,It(o)?4294967297:o>>>0,!It(c),It(c)?0:c,!It(l),It(l)?0:l,me(u))}finally{Kt[ce++]=void 0,Kt[ce++]=void 0}}castShape(t,e,n,r,s,a,o,c,l,u,f,d,p,w,S){try{R(t,Re),R(e,fe),R(n,we),R(r,F),R(s,kt),R(a,F),R(o,Ct);const g=h.rawbroadphase_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c,l,u,f,It(d)?4294967297:d>>>0,!It(p),It(p)?0:p,!It(w),It(w)?0:w,me(S));return g===0?void 0:Us.__wrap(g)}finally{Kt[ce++]=void 0}}intersectionsWithShape(t,e,n,r,s,a,o,c,l,u,f,d){try{R(t,Re),R(e,fe),R(n,we),R(r,F),R(s,kt),R(a,Ct),h.rawbroadphase_intersectionsWithShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,me(o),c,It(l)?4294967297:l>>>0,!It(u),It(u)?0:u,!It(f),It(f)?0:f,me(d))}finally{Kt[ce++]=void 0,Kt[ce++]=void 0}}collidersWithAabbIntersectingAabb(t,e,n,r,s,a){try{R(t,Re),R(e,fe),R(n,we),R(r,F),R(s,F),h.rawbroadphase_collidersWithAabbIntersectingAabb(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,me(a))}finally{Kt[ce++]=void 0}}}const Yc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawccdsolver_free(i>>>0,1));class Ha{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Yc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawccdsolver_free(t,0)}constructor(){const t=h.rawccdsolver_new();return this.__wbg_ptr=t>>>0,Yc.register(this,this.__wbg_ptr,this),this}}const Kc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcharactercollision_free(i>>>0,1));class Th{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Kc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcharactercollision_free(t,0)}constructor(){const t=h.rawcharactercollision_new();return this.__wbg_ptr=t>>>0,Kc.register(this,this.__wbg_ptr,this),this}handle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}translationDeltaApplied(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(t)}translationDeltaRemaining(){const t=h.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return F.__wrap(t)}toi(){return h.rawcharactercollision_toi(this.__wbg_ptr)}worldWitness1(){const t=h.rawcharactercollision_worldWitness1(this.__wbg_ptr);return F.__wrap(t)}worldWitness2(){const t=h.rawcharactercollision_worldWitness2(this.__wbg_ptr);return F.__wrap(t)}worldNormal1(){const t=h.rawcharactercollision_worldNormal1(this.__wbg_ptr);return F.__wrap(t)}worldNormal2(){const t=h.rawcharactercollision_worldNormal2(this.__wbg_ptr);return F.__wrap(t)}}const Js=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcolliderset_free(i>>>0,1));class we{static __wrap(t){t=t>>>0;const e=Object.create(we.prototype);return e.__wbg_ptr=t,Js.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Js.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcolliderset_free(t,0)}coTranslation(t){const e=h.rawcolliderset_coTranslation(this.__wbg_ptr,t);return F.__wrap(e)}coRotation(t){const e=h.rawcolliderset_coRotation(this.__wbg_ptr,t);return kt.__wrap(e)}coTranslationWrtParent(t){const e=h.rawcolliderset_coTranslationWrtParent(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coRotationWrtParent(t){const e=h.rawcolliderset_coRotationWrtParent(this.__wbg_ptr,t);return e===0?void 0:kt.__wrap(e)}coSetTranslation(t,e,n,r){h.rawcolliderset_coSetTranslation(this.__wbg_ptr,t,e,n,r)}coSetTranslationWrtParent(t,e,n,r){h.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr,t,e,n,r)}coSetRotation(t,e,n,r,s){h.rawcolliderset_coSetRotation(this.__wbg_ptr,t,e,n,r,s)}coSetRotationWrtParent(t,e,n,r,s){h.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr,t,e,n,r,s)}coIsSensor(t){return h.rawcolliderset_coIsSensor(this.__wbg_ptr,t)!==0}coShapeType(t){return h.rawcolliderset_coShapeType(this.__wbg_ptr,t)}coHalfspaceNormal(t){const e=h.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coHalfExtents(t){const e=h.rawcolliderset_coHalfExtents(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coSetHalfExtents(t,e){R(e,F),h.rawcolliderset_coSetHalfExtents(this.__wbg_ptr,t,e.__wbg_ptr)}coRadius(t){const e=h.rawcolliderset_coRadius(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetRadius(t,e){h.rawcolliderset_coSetRadius(this.__wbg_ptr,t,e)}coHalfHeight(t){const e=h.rawcolliderset_coHalfHeight(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetHalfHeight(t,e){h.rawcolliderset_coSetHalfHeight(this.__wbg_ptr,t,e)}coRoundRadius(t){const e=h.rawcolliderset_coRoundRadius(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetRoundRadius(t,e){h.rawcolliderset_coSetRoundRadius(this.__wbg_ptr,t,e)}coVoxelData(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coVoxelData(r,this.__wbg_ptr,t);var e=Ne().getInt32(r+0,!0),n=Ne().getInt32(r+4,!0);let s;return e!==0&&(s=au(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coVoxelSize(t){const e=h.rawcolliderset_coVoxelSize(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coSetVoxel(t,e,n,r,s){h.rawcolliderset_coSetVoxel(this.__wbg_ptr,t,e,n,r,s)}coPropagateVoxelChange(t,e,n,r,s,a,o,c){h.rawcolliderset_coPropagateVoxelChange(this.__wbg_ptr,t,e,n,r,s,a,o,c)}coCombineVoxelStates(t,e,n,r,s){h.rawcolliderset_coCombineVoxelStates(this.__wbg_ptr,t,e,n,r,s)}coVertices(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coVertices(r,this.__wbg_ptr,t);var e=Ne().getInt32(r+0,!0),n=Ne().getInt32(r+4,!0);let s;return e!==0&&(s=qc(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coIndices(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coIndices(r,this.__wbg_ptr,t);var e=Ne().getInt32(r+0,!0),n=Ne().getInt32(r+4,!0);let s;return e!==0&&(s=ou(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coTriMeshFlags(t){const e=h.rawcolliderset_coTriMeshFlags(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightFieldFlags(t){const e=h.rawcolliderset_coHeightFieldFlags(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightfieldHeights(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coHeightfieldHeights(r,this.__wbg_ptr,t);var e=Ne().getInt32(r+0,!0),n=Ne().getInt32(r+4,!0);let s;return e!==0&&(s=qc(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(t){const e=h.rawcolliderset_coHeightfieldScale(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coHeightfieldNRows(t){const e=h.rawcolliderset_coHeightfieldNRows(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightfieldNCols(t){const e=h.rawcolliderset_coHeightfieldNCols(this.__wbg_ptr,t);return e===4294967297?void 0:e}coParent(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coParent(r,this.__wbg_ptr,t);var e=Ne().getInt32(r+0,!0),n=Ne().getFloat64(r+8,!0);return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}coSetEnabled(t,e){h.rawcolliderset_coSetEnabled(this.__wbg_ptr,t,e)}coIsEnabled(t){return h.rawcolliderset_coIsEnabled(this.__wbg_ptr,t)!==0}coSetContactSkin(t,e){h.rawcolliderset_coSetContactSkin(this.__wbg_ptr,t,e)}coContactSkin(t){return h.rawcolliderset_coContactSkin(this.__wbg_ptr,t)}coFriction(t){return h.rawcolliderset_coFriction(this.__wbg_ptr,t)}coRestitution(t){return h.rawcolliderset_coRestitution(this.__wbg_ptr,t)}coDensity(t){return h.rawcolliderset_coDensity(this.__wbg_ptr,t)}coMass(t){return h.rawcolliderset_coMass(this.__wbg_ptr,t)}coVolume(t){return h.rawcolliderset_coVolume(this.__wbg_ptr,t)}coCollisionGroups(t){return h.rawcolliderset_coCollisionGroups(this.__wbg_ptr,t)>>>0}coSolverGroups(t){return h.rawcolliderset_coSolverGroups(this.__wbg_ptr,t)>>>0}coActiveHooks(t){return h.rawcolliderset_coActiveHooks(this.__wbg_ptr,t)>>>0}coActiveCollisionTypes(t){return h.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr,t)}coActiveEvents(t){return h.rawcolliderset_coActiveEvents(this.__wbg_ptr,t)>>>0}coContactForceEventThreshold(t){return h.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr,t)}coContainsPoint(t,e){return R(e,F),h.rawcolliderset_coContainsPoint(this.__wbg_ptr,t,e.__wbg_ptr)!==0}coCastShape(t,e,n,r,s,a,o,c,l){R(e,F),R(n,Ct),R(r,F),R(s,kt),R(a,F);const u=h.rawcolliderset_coCastShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,c,l);return u===0?void 0:zs.__wrap(u)}coCastCollider(t,e,n,r,s,a,o){R(e,F),R(r,F);const c=h.rawcolliderset_coCastCollider(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s,a,o);return c===0?void 0:Us.__wrap(c)}coIntersectsShape(t,e,n,r){return R(e,Ct),R(n,F),R(r,kt),h.rawcolliderset_coIntersectsShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr)!==0}coContactShape(t,e,n,r,s){R(e,Ct),R(n,F),R(r,kt);const a=h.rawcolliderset_coContactShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s);return a===0?void 0:gr.__wrap(a)}coContactCollider(t,e,n){const r=h.rawcolliderset_coContactCollider(this.__wbg_ptr,t,e,n);return r===0?void 0:gr.__wrap(r)}coProjectPoint(t,e,n){R(e,F);const r=h.rawcolliderset_coProjectPoint(this.__wbg_ptr,t,e.__wbg_ptr,n);return Ns.__wrap(r)}coIntersectsRay(t,e,n,r){return R(e,F),R(n,F),h.rawcolliderset_coIntersectsRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)!==0}coCastRay(t,e,n,r,s){return R(e,F),R(n,F),h.rawcolliderset_coCastRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s)}coCastRayAndGetNormal(t,e,n,r,s){R(e,F),R(n,F);const a=h.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s);return a===0?void 0:Bs.__wrap(a)}coSetSensor(t,e){h.rawcolliderset_coSetSensor(this.__wbg_ptr,t,e)}coSetRestitution(t,e){h.rawcolliderset_coSetRestitution(this.__wbg_ptr,t,e)}coSetFriction(t,e){h.rawcolliderset_coSetFriction(this.__wbg_ptr,t,e)}coFrictionCombineRule(t){return h.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr,t)>>>0}coSetFrictionCombineRule(t,e){h.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr,t,e)}coRestitutionCombineRule(t){return h.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr,t)>>>0}coSetRestitutionCombineRule(t,e){h.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr,t,e)}coSetCollisionGroups(t,e){h.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr,t,e)}coSetSolverGroups(t,e){h.rawcolliderset_coSetSolverGroups(this.__wbg_ptr,t,e)}coSetActiveHooks(t,e){h.rawcolliderset_coSetActiveHooks(this.__wbg_ptr,t,e)}coSetActiveEvents(t,e){h.rawcolliderset_coSetActiveEvents(this.__wbg_ptr,t,e)}coSetActiveCollisionTypes(t,e){h.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr,t,e)}coSetShape(t,e){R(e,Ct),h.rawcolliderset_coSetShape(this.__wbg_ptr,t,e.__wbg_ptr)}coSetContactForceEventThreshold(t,e){h.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr,t,e)}coSetDensity(t,e){h.rawcolliderset_coSetDensity(this.__wbg_ptr,t,e)}coSetMass(t,e){h.rawcolliderset_coSetMass(this.__wbg_ptr,t,e)}coSetMassProperties(t,e,n,r,s){R(n,F),R(r,F),R(s,kt),h.rawcolliderset_coSetMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}constructor(){const t=h.rawcolliderset_new();return this.__wbg_ptr=t>>>0,Js.register(this,this.__wbg_ptr,this),this}len(){return h.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawcolliderset_contains(this.__wbg_ptr,t)!==0}createCollider(t,e,n,r,s,a,o,c,l,u,f,d,p,w,S,g,m,y,T,E,P,C,L,v,M){try{const V=h.__wbindgen_add_to_stack_pointer(-16);R(e,Ct),R(n,F),R(r,kt),R(o,F),R(c,F),R(l,kt),R(M,fe),h.rawcolliderset_createCollider(V,this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,u,f,d,p,w,S,g,m,y,T,E,P,C,L,v,M.__wbg_ptr);var X=Ne().getInt32(V+0,!0),I=Ne().getFloat64(V+8,!0);return X===0?void 0:I}finally{h.__wbindgen_add_to_stack_pointer(16)}}remove(t,e,n,r){R(e,kn),R(n,fe),h.rawcolliderset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}isHandleValid(t){return h.rawcolliderset_contains(this.__wbg_ptr,t)!==0}forEachColliderHandle(t){try{h.rawcolliderset_forEachColliderHandle(this.__wbg_ptr,me(t))}finally{Kt[ce++]=void 0}}}const Jc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcollidershapecasthit_free(i>>>0,1));class Us{static __wrap(t){t=t>>>0;const e=Object.create(Us.prototype);return e.__wbg_ptr=t,Jc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Jc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcollidershapecasthit_free(t,0)}colliderHandle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}witness1(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}witness2(){const t=h.rawcollidershapecasthit_witness2(this.__wbg_ptr);return F.__wrap(t)}normal1(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(t)}normal2(){const t=h.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return F.__wrap(t)}}const $c=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactforceevent_free(i>>>0,1));class Ko{static __wrap(t){t=t>>>0;const e=Object.create(Ko.prototype);return e.__wbg_ptr=t,$c.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,$c.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactforceevent_free(t,0)}collider1(){return h.rawcharactercollision_handle(this.__wbg_ptr)}collider2(){return h.rawcontactforceevent_collider2(this.__wbg_ptr)}total_force(){const t=h.rawcontactforceevent_total_force(this.__wbg_ptr);return F.__wrap(t)}total_force_magnitude(){return h.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}max_force_direction(){const t=h.rawcontactforceevent_max_force_direction(this.__wbg_ptr);return F.__wrap(t)}max_force_magnitude(){return h.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}}const Zc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactmanifold_free(i>>>0,1));class Jo{static __wrap(t){t=t>>>0;const e=Object.create(Jo.prototype);return e.__wbg_ptr=t,Zc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Zc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactmanifold_free(t,0)}normal(){const t=h.rawcontactmanifold_normal(this.__wbg_ptr);return F.__wrap(t)}local_n1(){const t=h.rawcontactmanifold_local_n1(this.__wbg_ptr);return F.__wrap(t)}local_n2(){const t=h.rawcontactmanifold_local_n2(this.__wbg_ptr);return F.__wrap(t)}subshape1(){return h.rawcontactmanifold_subshape1(this.__wbg_ptr)>>>0}subshape2(){return h.rawcontactmanifold_subshape2(this.__wbg_ptr)>>>0}num_contacts(){return h.rawcontactmanifold_num_contacts(this.__wbg_ptr)>>>0}contact_local_p1(t){const e=h.rawcontactmanifold_contact_local_p1(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}contact_local_p2(t){const e=h.rawcontactmanifold_contact_local_p2(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}contact_dist(t){return h.rawcontactmanifold_contact_dist(this.__wbg_ptr,t)}contact_fid1(t){return h.rawcontactmanifold_contact_fid1(this.__wbg_ptr,t)>>>0}contact_fid2(t){return h.rawcontactmanifold_contact_fid2(this.__wbg_ptr,t)>>>0}contact_impulse(t){return h.rawcontactmanifold_contact_impulse(this.__wbg_ptr,t)}contact_tangent_impulse_x(t){return h.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr,t)}contact_tangent_impulse_y(t){return h.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr,t)}num_solver_contacts(){return h.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr)>>>0}solver_contact_point(t){const e=h.rawcontactmanifold_solver_contact_point(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}solver_contact_dist(t){return h.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr,t)}solver_contact_friction(t){return h.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr,t)}solver_contact_restitution(t){return h.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr,t)}solver_contact_tangent_velocity(t){const e=h.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr,t);return F.__wrap(e)}}const Qc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactpair_free(i>>>0,1));class $o{static __wrap(t){t=t>>>0;const e=Object.create($o.prototype);return e.__wbg_ptr=t,Qc.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Qc.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactpair_free(t,0)}collider1(){return h.rawcontactpair_collider1(this.__wbg_ptr)}collider2(){return h.rawcontactpair_collider2(this.__wbg_ptr)}numContactManifolds(){return h.rawcontactpair_numContactManifolds(this.__wbg_ptr)>>>0}contactManifold(t){const e=h.rawcontactpair_contactManifold(this.__wbg_ptr,t);return e===0?void 0:Jo.__wrap(e)}}const tl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdebugrenderpipeline_free(i>>>0,1));class cu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,tl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdebugrenderpipeline_free(t,0)}constructor(){const t=h.rawdebugrenderpipeline_new();return this.__wbg_ptr=t>>>0,tl.register(this,this.__wbg_ptr,this),this}vertices(){const t=h.rawdebugrenderpipeline_vertices(this.__wbg_ptr);return mr(t)}colors(){const t=h.rawdebugrenderpipeline_colors(this.__wbg_ptr);return mr(t)}render(t,e,n,r,s,a,o){try{R(t,fe),R(e,we),R(n,Vn),R(r,Wn),R(s,Re),h.rawdebugrenderpipeline_render(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,me(o))}finally{Kt[ce++]=void 0}}}const el=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdeserializedworld_free(i>>>0,1));class Zo{static __wrap(t){t=t>>>0;const e=Object.create(Zo.prototype);return e.__wbg_ptr=t,el.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,el.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdeserializedworld_free(t,0)}takeGravity(){const t=h.rawdeserializedworld_takeGravity(this.__wbg_ptr);return t===0?void 0:F.__wrap(t)}takeIntegrationParameters(){const t=h.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);return t===0?void 0:Si.__wrap(t)}takeIslandManager(){const t=h.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);return t===0?void 0:kn.__wrap(t)}takeBroadPhase(){const t=h.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);return t===0?void 0:Gn.__wrap(t)}takeNarrowPhase(){const t=h.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);return t===0?void 0:Re.__wrap(t)}takeBodies(){const t=h.rawdeserializedworld_takeBodies(this.__wbg_ptr);return t===0?void 0:fe.__wrap(t)}takeColliders(){const t=h.rawdeserializedworld_takeColliders(this.__wbg_ptr);return t===0?void 0:we.__wrap(t)}takeImpulseJoints(){const t=h.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);return t===0?void 0:Vn.__wrap(t)}takeMultibodyJoints(){const t=h.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);return t===0?void 0:Wn.__wrap(t)}}const nl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdynamicraycastvehiclecontroller_free(i>>>0,1));class lu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,nl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdynamicraycastvehiclecontroller_free(t,0)}constructor(t){const e=h.rawdynamicraycastvehiclecontroller_new(t);return this.__wbg_ptr=e>>>0,nl.register(this,this.__wbg_ptr,this),this}current_vehicle_speed(){return h.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}chassis(){return h.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr)}index_up_axis(){return h.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}set_index_up_axis(t){h.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}index_forward_axis(){return h.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}set_index_forward_axis(t){h.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,t)}add_wheel(t,e,n,r,s){R(t,F),R(e,F),R(n,F),h.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s)}num_wheels(){return h.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr)>>>0}update_vehicle(t,e,n,r,s,a,o,c){try{R(e,Gn),R(n,Re),R(r,fe),R(s,we),h.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,It(o)?4294967297:o>>>0,me(c))}finally{Kt[ce++]=void 0}}wheel_chassis_connection_point_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}set_wheel_chassis_connection_point_cs(t,e){R(e,F),h.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_suspension_rest_length(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_rest_length(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr,t,e)}wheel_max_suspension_travel(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_max_suspension_travel(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr,t,e)}wheel_radius(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_radius(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_radius(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr,t,e)}wheel_suspension_stiffness(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_stiffness(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr,t,e)}wheel_suspension_compression(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_compression(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr,t,e)}wheel_suspension_relaxation(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_relaxation(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr,t,e)}wheel_max_suspension_force(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_max_suspension_force(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr,t,e)}wheel_brake(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_brake(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_brake(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr,t,e)}wheel_steering(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_steering(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_steering(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr,t,e)}wheel_engine_force(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_engine_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_engine_force(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr,t,e)}wheel_direction_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}set_wheel_direction_cs(t,e){R(e,F),h.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_axle_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}set_wheel_axle_cs(t,e){R(e,F),h.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_friction_slip(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_friction_slip(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_friction_slip(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr,t,e)}wheel_side_friction_stiffness(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_side_friction_stiffness(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr,t,e)}wheel_rotation(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_rotation(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_forward_impulse(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_side_impulse(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_side_impulse(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_suspension_force(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_contact_normal_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}wheel_contact_point_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}wheel_suspension_length(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_length(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_hard_point_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}wheel_is_in_contact(t){return h.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr,t)!==0}wheel_ground_object(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_ground_object(r,this.__wbg_ptr,t);var e=Ne().getInt32(r+0,!0),n=Ne().getFloat64(r+8,!0);return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}}const il=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_raweventqueue_free(i>>>0,1));class hu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,il.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_raweventqueue_free(t,0)}constructor(t){const e=h.raweventqueue_new(t);return this.__wbg_ptr=e>>>0,il.register(this,this.__wbg_ptr,this),this}drainCollisionEvents(t){try{h.raweventqueue_drainCollisionEvents(this.__wbg_ptr,me(t))}finally{Kt[ce++]=void 0}}drainContactForceEvents(t){try{h.raweventqueue_drainContactForceEvents(this.__wbg_ptr,me(t))}finally{Kt[ce++]=void 0}}clear(){h.raweventqueue_clear(this.__wbg_ptr)}}const rl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawgenericjoint_free(i>>>0,1));class hn{static __wrap(t){t=t>>>0;const e=Object.create(hn.prototype);return e.__wbg_ptr=t,rl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,rl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawgenericjoint_free(t,0)}static generic(t,e,n,r){R(t,F),R(e,F),R(n,F);const s=h.rawgenericjoint_generic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return s===0?void 0:hn.__wrap(s)}static spring(t,e,n,r,s){R(r,F),R(s,F);const a=h.rawgenericjoint_spring(t,e,n,r.__wbg_ptr,s.__wbg_ptr);return hn.__wrap(a)}static rope(t,e,n){R(e,F),R(n,F);const r=h.rawgenericjoint_rope(t,e.__wbg_ptr,n.__wbg_ptr);return hn.__wrap(r)}static spherical(t,e){R(t,F),R(e,F);const n=h.rawgenericjoint_spherical(t.__wbg_ptr,e.__wbg_ptr);return hn.__wrap(n)}static prismatic(t,e,n,r,s,a){R(t,F),R(e,F),R(n,F);const o=h.rawgenericjoint_prismatic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s,a);return o===0?void 0:hn.__wrap(o)}static fixed(t,e,n,r){R(t,F),R(e,kt),R(n,F),R(r,kt);const s=h.rawgenericjoint_fixed(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr);return hn.__wrap(s)}static revolute(t,e,n){R(t,F),R(e,F),R(n,F);const r=h.rawgenericjoint_revolute(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return r===0?void 0:hn.__wrap(r)}}const $s=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawimpulsejointset_free(i>>>0,1));class Vn{static __wrap(t){t=t>>>0;const e=Object.create(Vn.prototype);return e.__wbg_ptr=t,$s.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,$s.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawimpulsejointset_free(t,0)}jointType(t){return h.rawimpulsejointset_jointType(this.__wbg_ptr,t)}jointBodyHandle1(t){return h.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr,t)}jointBodyHandle2(t){return h.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr,t)}jointFrameX1(t){const e=h.rawimpulsejointset_jointFrameX1(this.__wbg_ptr,t);return kt.__wrap(e)}jointFrameX2(t){const e=h.rawimpulsejointset_jointFrameX2(this.__wbg_ptr,t);return kt.__wrap(e)}jointAnchor1(t){const e=h.rawimpulsejointset_jointAnchor1(this.__wbg_ptr,t);return F.__wrap(e)}jointAnchor2(t){const e=h.rawimpulsejointset_jointAnchor2(this.__wbg_ptr,t);return F.__wrap(e)}jointSetAnchor1(t,e){R(e,F),h.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetAnchor2(t,e){R(e,F),h.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr,t,e.__wbg_ptr)}jointContactsEnabled(t){return h.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){h.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return h.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return h.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return h.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr,t,e)}jointSetLimits(t,e,n,r){h.rawimpulsejointset_jointSetLimits(this.__wbg_ptr,t,e,n,r)}jointConfigureMotorModel(t,e,n){h.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr,t,e,n)}jointConfigureMotorVelocity(t,e,n,r){h.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr,t,e,n,r)}jointConfigureMotorPosition(t,e,n,r,s){h.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr,t,e,n,r,s)}jointConfigureMotor(t,e,n,r,s,a){h.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr,t,e,n,r,s,a)}constructor(){const t=h.rawimpulsejointset_new();return this.__wbg_ptr=t>>>0,$s.register(this,this.__wbg_ptr,this),this}createJoint(t,e,n,r){return R(t,hn),h.rawimpulsejointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}remove(t,e){h.rawimpulsejointset_remove(this.__wbg_ptr,t,e)}len(){return h.rawimpulsejointset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawimpulsejointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{h.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr,me(t))}finally{Kt[ce++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{h.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,me(e))}finally{Kt[ce++]=void 0}}}const Zs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawintegrationparameters_free(i>>>0,1));class Si{static __wrap(t){t=t>>>0;const e=Object.create(Si.prototype);return e.__wbg_ptr=t,Zs.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Zs.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawintegrationparameters_free(t,0)}constructor(){const t=h.rawintegrationparameters_new();return this.__wbg_ptr=t>>>0,Zs.register(this,this.__wbg_ptr,this),this}get dt(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}get contact_erp(){return h.rawintegrationparameters_contact_erp(this.__wbg_ptr)}get normalizedAllowedLinearError(){return h.rawintegrationparameters_normalizedAllowedLinearError(this.__wbg_ptr)}get normalizedPredictionDistance(){return h.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr)}get numSolverIterations(){return h.rawintegrationparameters_numSolverIterations(this.__wbg_ptr)>>>0}get numInternalPgsIterations(){return h.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}get minIslandSize(){return h.rawintegrationparameters_minIslandSize(this.__wbg_ptr)>>>0}get maxCcdSubsteps(){return h.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr)>>>0}get lengthUnit(){return h.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}set dt(t){h.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}set contact_natural_frequency(t){h.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr,t)}set normalizedAllowedLinearError(t){h.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr,t)}set normalizedPredictionDistance(t){h.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr,t)}set numSolverIterations(t){h.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr,t)}set numInternalPgsIterations(t){h.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}set minIslandSize(t){h.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr,t)}set maxCcdSubsteps(t){h.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr,t)}set lengthUnit(t){h.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr,t)}}const Qs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawislandmanager_free(i>>>0,1));class kn{static __wrap(t){t=t>>>0;const e=Object.create(kn.prototype);return e.__wbg_ptr=t,Qs.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Qs.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawislandmanager_free(t,0)}constructor(){const t=h.rawislandmanager_new();return this.__wbg_ptr=t>>>0,Qs.register(this,this.__wbg_ptr,this),this}forEachActiveRigidBodyHandle(t){try{h.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr,me(t))}finally{Kt[ce++]=void 0}}}const sl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawkinematiccharactercontroller_free(i>>>0,1));class du{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,sl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawkinematiccharactercontroller_free(t,0)}constructor(t){const e=h.rawkinematiccharactercontroller_new(t);return this.__wbg_ptr=e>>>0,sl.register(this,this.__wbg_ptr,this),this}up(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(t)}setUp(t){R(t,F),h.rawkinematiccharactercontroller_setUp(this.__wbg_ptr,t.__wbg_ptr)}normalNudgeFactor(){return h.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr)}setNormalNudgeFactor(t){h.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr,t)}offset(){return h.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}setOffset(t){h.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr,t)}slideEnabled(){return h.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr)!==0}setSlideEnabled(t){h.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr,t)}autostepMaxHeight(){const t=h.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);return t===4294967297?void 0:t}autostepMinWidth(){const t=h.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);return t===4294967297?void 0:t}autostepIncludesDynamicBodies(){const t=h.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);return t===16777215?void 0:t!==0}autostepEnabled(){return h.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr)!==0}enableAutostep(t,e,n){h.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr,t,e,n)}disableAutostep(){h.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr)}maxSlopeClimbAngle(){return h.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}setMaxSlopeClimbAngle(t){h.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr,t)}minSlopeSlideAngle(){return h.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr)}setMinSlopeSlideAngle(t){h.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr,t)}snapToGroundDistance(){const t=h.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);return t===4294967297?void 0:t}enableSnapToGround(t){h.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr,t)}disableSnapToGround(){h.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr)}snapToGroundEnabled(){return h.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr)!==0}computeColliderMovement(t,e,n,r,s,a,o,c,l,u,f,d){try{R(e,Gn),R(n,Re),R(r,fe),R(s,we),R(o,F),h.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o.__wbg_ptr,c,It(l)?4294967297:Math.fround(l),u,It(f)?4294967297:f>>>0,me(d))}finally{Kt[ce++]=void 0}}computedMovement(){const t=h.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);return F.__wrap(t)}computedGrounded(){return h.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr)!==0}numComputedCollisions(){return h.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr)>>>0}computedCollision(t,e){return R(e,Th),h.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr,t,e.__wbg_ptr)!==0}}const ta=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawmultibodyjointset_free(i>>>0,1));class Wn{static __wrap(t){t=t>>>0;const e=Object.create(Wn.prototype);return e.__wbg_ptr=t,ta.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ta.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawmultibodyjointset_free(t,0)}jointType(t){return h.rawmultibodyjointset_jointType(this.__wbg_ptr,t)}jointFrameX1(t){const e=h.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr,t);return kt.__wrap(e)}jointFrameX2(t){const e=h.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr,t);return kt.__wrap(e)}jointAnchor1(t){const e=h.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr,t);return F.__wrap(e)}jointAnchor2(t){const e=h.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr,t);return F.__wrap(e)}jointContactsEnabled(t){return h.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){h.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return h.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return h.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return h.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr,t,e)}constructor(){const t=h.rawmultibodyjointset_new();return this.__wbg_ptr=t>>>0,ta.register(this,this.__wbg_ptr,this),this}createJoint(t,e,n,r){return R(t,hn),h.rawmultibodyjointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}remove(t,e){h.rawmultibodyjointset_remove(this.__wbg_ptr,t,e)}contains(t){return h.rawmultibodyjointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{h.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr,me(t))}finally{Kt[ce++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{h.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,me(e))}finally{Kt[ce++]=void 0}}}const ea=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawnarrowphase_free(i>>>0,1));class Re{static __wrap(t){t=t>>>0;const e=Object.create(Re.prototype);return e.__wbg_ptr=t,ea.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ea.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawnarrowphase_free(t,0)}constructor(){const t=h.rawnarrowphase_new();return this.__wbg_ptr=t>>>0,ea.register(this,this.__wbg_ptr,this),this}contact_pairs_with(t,e){h.rawnarrowphase_contact_pairs_with(this.__wbg_ptr,t,le(e))}contact_pair(t,e){const n=h.rawnarrowphase_contact_pair(this.__wbg_ptr,t,e);return n===0?void 0:$o.__wrap(n)}intersection_pairs_with(t,e){h.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr,t,le(e))}intersection_pair(t,e){return h.rawnarrowphase_intersection_pair(this.__wbg_ptr,t,e)!==0}}const al=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawphysicspipeline_free(i>>>0,1));class uu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,al.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawphysicspipeline_free(t,0)}constructor(){const t=h.rawphysicspipeline_new();return this.__wbg_ptr=t>>>0,al.register(this,this.__wbg_ptr,this),this}set_profiler_enabled(t){h.rawphysicspipeline_set_profiler_enabled(this.__wbg_ptr,t)}is_profiler_enabled(){return h.rawphysicspipeline_is_profiler_enabled(this.__wbg_ptr)!==0}timing_step(){return h.rawphysicspipeline_timing_step(this.__wbg_ptr)}timing_collision_detection(){return h.rawphysicspipeline_timing_collision_detection(this.__wbg_ptr)}timing_broad_phase(){return h.rawphysicspipeline_timing_broad_phase(this.__wbg_ptr)}timing_narrow_phase(){return h.rawphysicspipeline_timing_narrow_phase(this.__wbg_ptr)}timing_solver(){return h.rawphysicspipeline_timing_solver(this.__wbg_ptr)}timing_velocity_assembly(){return h.rawphysicspipeline_timing_velocity_assembly(this.__wbg_ptr)}timing_velocity_resolution(){return h.rawphysicspipeline_timing_velocity_resolution(this.__wbg_ptr)}timing_velocity_update(){return h.rawphysicspipeline_timing_velocity_update(this.__wbg_ptr)}timing_velocity_writeback(){return h.rawphysicspipeline_timing_velocity_writeback(this.__wbg_ptr)}timing_ccd(){return h.rawphysicspipeline_timing_ccd(this.__wbg_ptr)}timing_ccd_toi_computation(){return h.rawphysicspipeline_timing_ccd_toi_computation(this.__wbg_ptr)}timing_ccd_broad_phase(){return h.rawphysicspipeline_timing_ccd_broad_phase(this.__wbg_ptr)}timing_ccd_narrow_phase(){return h.rawphysicspipeline_timing_ccd_narrow_phase(this.__wbg_ptr)}timing_ccd_solver(){return h.rawphysicspipeline_timing_ccd_solver(this.__wbg_ptr)}timing_island_construction(){return h.rawphysicspipeline_timing_island_construction(this.__wbg_ptr)}timing_user_changes(){return h.rawphysicspipeline_timing_user_changes(this.__wbg_ptr)}step(t,e,n,r,s,a,o,c,l,u){R(t,F),R(e,Si),R(n,kn),R(r,Gn),R(s,Re),R(a,fe),R(o,we),R(c,Vn),R(l,Wn),R(u,Ha),h.rawphysicspipeline_step(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,u.__wbg_ptr)}stepWithEvents(t,e,n,r,s,a,o,c,l,u,f,d,p,w){R(t,F),R(e,Si),R(n,kn),R(r,Gn),R(s,Re),R(a,fe),R(o,we),R(c,Vn),R(l,Wn),R(u,Ha),R(f,hu),h.rawphysicspipeline_stepWithEvents(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,u.__wbg_ptr,f.__wbg_ptr,le(d),le(p),le(w))}}const ol=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpidcontroller_free(i>>>0,1));class _u{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ol.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpidcontroller_free(t,0)}constructor(t,e,n,r){const s=h.rawpidcontroller_new(t,e,n,r);return this.__wbg_ptr=s>>>0,ol.register(this,this.__wbg_ptr,this),this}set_kp(t,e){h.rawpidcontroller_set_kp(this.__wbg_ptr,t,e)}set_ki(t,e){h.rawpidcontroller_set_ki(this.__wbg_ptr,t,e)}set_kd(t,e){h.rawpidcontroller_set_kd(this.__wbg_ptr,t,e)}set_axes_mask(t){h.rawpidcontroller_set_axes_mask(this.__wbg_ptr,t)}reset_integrals(){h.rawpidcontroller_reset_integrals(this.__wbg_ptr)}apply_linear_correction(t,e,n,r,s){R(e,fe),R(r,F),R(s,F),h.rawpidcontroller_apply_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr)}apply_angular_correction(t,e,n,r,s){R(e,fe),R(r,kt),R(s,F),h.rawpidcontroller_apply_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr)}linear_correction(t,e,n,r,s){R(e,fe),R(r,F),R(s,F);const a=h.rawpidcontroller_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr);return F.__wrap(a)}angular_correction(t,e,n,r,s){R(e,fe),R(r,kt),R(s,F);const a=h.rawpidcontroller_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr);return F.__wrap(a)}}const cl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpointcolliderprojection_free(i>>>0,1));class xs{static __wrap(t){t=t>>>0;const e=Object.create(xs.prototype);return e.__wbg_ptr=t,cl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,cl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpointcolliderprojection_free(t,0)}colliderHandle(){return h.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}point(){const t=h.rawpointcolliderprojection_point(this.__wbg_ptr);return F.__wrap(t)}isInside(){return h.rawpointcolliderprojection_isInside(this.__wbg_ptr)!==0}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=h.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const ll=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpointprojection_free(i>>>0,1));class Ns{static __wrap(t){t=t>>>0;const e=Object.create(Ns.prototype);return e.__wbg_ptr=t,ll.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ll.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpointprojection_free(t,0)}point(){const t=h.rawpointprojection_point(this.__wbg_ptr);return F.__wrap(t)}isInside(){return h.rawpointprojection_isInside(this.__wbg_ptr)!==0}}const hl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawraycolliderhit_free(i>>>0,1));class Qo{static __wrap(t){t=t>>>0;const e=Object.create(Qo.prototype);return e.__wbg_ptr=t,hl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,hl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawraycolliderhit_free(t,0)}colliderHandle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}timeOfImpact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}}const dl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawraycolliderintersection_free(i>>>0,1));class Os{static __wrap(t){t=t>>>0;const e=Object.create(Os.prototype);return e.__wbg_ptr=t,dl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,dl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawraycolliderintersection_free(t,0)}colliderHandle(){return h.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}normal(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=h.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const ul=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrayintersection_free(i>>>0,1));class Bs{static __wrap(t){t=t>>>0;const e=Object.create(Bs.prototype);return e.__wbg_ptr=t,ul.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ul.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrayintersection_free(t,0)}normal(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=h.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const na=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrigidbodyset_free(i>>>0,1));class fe{static __wrap(t){t=t>>>0;const e=Object.create(fe.prototype);return e.__wbg_ptr=t,na.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,na.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrigidbodyset_free(t,0)}rbTranslation(t){const e=h.rawrigidbodyset_rbTranslation(this.__wbg_ptr,t);return F.__wrap(e)}rbRotation(t){const e=h.rawrigidbodyset_rbRotation(this.__wbg_ptr,t);return kt.__wrap(e)}rbSleep(t){h.rawrigidbodyset_rbSleep(this.__wbg_ptr,t)}rbIsSleeping(t){return h.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr,t)!==0}rbIsMoving(t){return h.rawrigidbodyset_rbIsMoving(this.__wbg_ptr,t)!==0}rbNextTranslation(t){const e=h.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr,t);return F.__wrap(e)}rbNextRotation(t){const e=h.rawrigidbodyset_rbNextRotation(this.__wbg_ptr,t);return kt.__wrap(e)}rbSetTranslation(t,e,n,r,s){h.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr,t,e,n,r,s)}rbSetRotation(t,e,n,r,s,a){h.rawrigidbodyset_rbSetRotation(this.__wbg_ptr,t,e,n,r,s,a)}rbSetLinvel(t,e,n){R(e,F),h.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetAngvel(t,e,n){R(e,F),h.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetNextKinematicTranslation(t,e,n,r){h.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr,t,e,n,r)}rbSetNextKinematicRotation(t,e,n,r,s){h.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr,t,e,n,r,s)}rbRecomputeMassPropertiesFromColliders(t,e){R(e,we),h.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr,t,e.__wbg_ptr)}rbSetAdditionalMass(t,e,n){h.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr,t,e,n)}rbSetAdditionalMassProperties(t,e,n,r,s,a){R(n,F),R(r,F),R(s,kt),h.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a)}rbLinvel(t){const e=h.rawrigidbodyset_rbLinvel(this.__wbg_ptr,t);return F.__wrap(e)}rbAngvel(t){const e=h.rawrigidbodyset_rbAngvel(this.__wbg_ptr,t);return F.__wrap(e)}rbVelocityAtPoint(t,e){R(e,F);const n=h.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr,t,e.__wbg_ptr);return F.__wrap(n)}rbLockTranslations(t,e,n){h.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr,t,e,n)}rbSetEnabledTranslations(t,e,n,r,s){h.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr,t,e,n,r,s)}rbLockRotations(t,e,n){h.rawrigidbodyset_rbLockRotations(this.__wbg_ptr,t,e,n)}rbSetEnabledRotations(t,e,n,r,s){h.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr,t,e,n,r,s)}rbDominanceGroup(t){return h.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr,t)}rbSetDominanceGroup(t,e){h.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr,t,e)}rbEnableCcd(t,e){h.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr,t,e)}rbSetSoftCcdPrediction(t,e){h.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr,t,e)}rbMass(t){return h.rawrigidbodyset_rbMass(this.__wbg_ptr,t)}rbInvMass(t){return h.rawrigidbodyset_rbInvMass(this.__wbg_ptr,t)}rbEffectiveInvMass(t){const e=h.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr,t);return F.__wrap(e)}rbLocalCom(t){const e=h.rawrigidbodyset_rbLocalCom(this.__wbg_ptr,t);return F.__wrap(e)}rbWorldCom(t){const e=h.rawrigidbodyset_rbWorldCom(this.__wbg_ptr,t);return F.__wrap(e)}rbInvPrincipalInertia(t){const e=h.rawrigidbodyset_rbInvPrincipalInertia(this.__wbg_ptr,t);return F.__wrap(e)}rbPrincipalInertiaLocalFrame(t){const e=h.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr,t);return kt.__wrap(e)}rbPrincipalInertia(t){const e=h.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr,t);return F.__wrap(e)}rbEffectiveWorldInvInertia(t){const e=h.rawrigidbodyset_rbEffectiveWorldInvInertia(this.__wbg_ptr,t);return ys.__wrap(e)}rbEffectiveAngularInertia(t){const e=h.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr,t);return ys.__wrap(e)}rbWakeUp(t){h.rawrigidbodyset_rbWakeUp(this.__wbg_ptr,t)}rbIsCcdEnabled(t){return h.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr,t)!==0}rbSoftCcdPrediction(t){return h.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr,t)}rbNumColliders(t){return h.rawrigidbodyset_rbNumColliders(this.__wbg_ptr,t)>>>0}rbCollider(t,e){return h.rawrigidbodyset_rbCollider(this.__wbg_ptr,t,e)}rbBodyType(t){return h.rawrigidbodyset_rbBodyType(this.__wbg_ptr,t)}rbSetBodyType(t,e,n){h.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr,t,e,n)}rbIsFixed(t){return h.rawrigidbodyset_rbIsFixed(this.__wbg_ptr,t)!==0}rbIsKinematic(t){return h.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr,t)!==0}rbIsDynamic(t){return h.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr,t)!==0}rbLinearDamping(t){return h.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr,t)}rbAngularDamping(t){return h.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr,t)}rbSetLinearDamping(t,e){h.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr,t,e)}rbSetAngularDamping(t,e){h.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr,t,e)}rbSetEnabled(t,e){h.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr,t,e)}rbIsEnabled(t){return h.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr,t)!==0}rbGravityScale(t){return h.rawrigidbodyset_rbGravityScale(this.__wbg_ptr,t)}rbSetGravityScale(t,e,n){h.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr,t,e,n)}rbResetForces(t,e){h.rawrigidbodyset_rbResetForces(this.__wbg_ptr,t,e)}rbResetTorques(t,e){h.rawrigidbodyset_rbResetTorques(this.__wbg_ptr,t,e)}rbAddForce(t,e,n){R(e,F),h.rawrigidbodyset_rbAddForce(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbApplyImpulse(t,e,n){R(e,F),h.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAddTorque(t,e,n){R(e,F),h.rawrigidbodyset_rbAddTorque(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbApplyTorqueImpulse(t,e,n){R(e,F),h.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAddForceAtPoint(t,e,n,r){R(e,F),R(n,F),h.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbApplyImpulseAtPoint(t,e,n,r){R(e,F),R(n,F),h.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbAdditionalSolverIterations(t){return h.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr,t)>>>0}rbSetAdditionalSolverIterations(t,e){h.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr,t,e)}rbUserData(t){return h.rawrigidbodyset_rbUserData(this.__wbg_ptr,t)>>>0}rbSetUserData(t,e){h.rawrigidbodyset_rbSetUserData(this.__wbg_ptr,t,e)}rbUserForce(t){const e=h.rawrigidbodyset_rbUserForce(this.__wbg_ptr,t);return F.__wrap(e)}rbUserTorque(t){const e=h.rawrigidbodyset_rbUserTorque(this.__wbg_ptr,t);return F.__wrap(e)}constructor(){const t=h.rawrigidbodyset_new();return this.__wbg_ptr=t>>>0,na.register(this,this.__wbg_ptr,this),this}createRigidBody(t,e,n,r,s,a,o,c,l,u,f,d,p,w,S,g,m,y,T,E,P,C,L,v,M,X){return R(e,F),R(n,kt),R(o,F),R(c,F),R(l,F),R(u,F),R(f,kt),h.rawrigidbodyset_createRigidBody(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s,a,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,u.__wbg_ptr,f.__wbg_ptr,d,p,w,S,g,m,y,T,E,P,C,L,v,M,X)}remove(t,e,n,r,s){R(e,kn),R(n,we),R(r,Vn),R(s,Wn),h.rawrigidbodyset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}len(){return h.rawrigidbodyset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawrigidbodyset_contains(this.__wbg_ptr,t)!==0}forEachRigidBodyHandle(t){try{h.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr,me(t))}finally{Kt[ce++]=void 0}}propagateModifiedBodyPositionsToColliders(t){R(t,we),h.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr,t.__wbg_ptr)}}const ia=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrotation_free(i>>>0,1));class kt{static __wrap(t){t=t>>>0;const e=Object.create(kt.prototype);return e.__wbg_ptr=t,ia.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ia.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrotation_free(t,0)}constructor(t,e,n,r){const s=h.rawrotation_new(t,e,n,r);return this.__wbg_ptr=s>>>0,ia.register(this,this.__wbg_ptr,this),this}static identity(){const t=h.rawrotation_identity();return kt.__wrap(t)}get x(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}get y(){return h.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}get z(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}get w(){return h.rawrotation_w(this.__wbg_ptr)}}const _l=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawsdpmatrix3_free(i>>>0,1));class ys{static __wrap(t){t=t>>>0;const e=Object.create(ys.prototype);return e.__wbg_ptr=t,_l.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,_l.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawsdpmatrix3_free(t,0)}elements(){const t=h.rawsdpmatrix3_elements(this.__wbg_ptr);return mr(t)}}const fl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawserializationpipeline_free(i>>>0,1));class fu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,fl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawserializationpipeline_free(t,0)}constructor(){const t=h.rawccdsolver_new();return this.__wbg_ptr=t>>>0,fl.register(this,this.__wbg_ptr,this),this}serializeAll(t,e,n,r,s,a,o,c,l){R(t,F),R(e,Si),R(n,kn),R(r,Gn),R(s,Re),R(a,fe),R(o,we),R(c,Vn),R(l,Wn);const u=h.rawserializationpipeline_serializeAll(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr);return mr(u)}deserializeAll(t){const e=h.rawserializationpipeline_deserializeAll(this.__wbg_ptr,le(t));return e===0?void 0:Zo.__wrap(e)}}const pl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshape_free(i>>>0,1));class Ct{static __wrap(t){t=t>>>0;const e=Object.create(Ct.prototype);return e.__wbg_ptr=t,pl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,pl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshape_free(t,0)}static cuboid(t,e,n){const r=h.rawshape_cuboid(t,e,n);return Ct.__wrap(r)}static roundCuboid(t,e,n,r){const s=h.rawshape_roundCuboid(t,e,n,r);return Ct.__wrap(s)}static ball(t){const e=h.rawshape_ball(t);return Ct.__wrap(e)}static halfspace(t){R(t,F);const e=h.rawshape_halfspace(t.__wbg_ptr);return Ct.__wrap(e)}static capsule(t,e){const n=h.rawshape_capsule(t,e);return Ct.__wrap(n)}static cylinder(t,e){const n=h.rawshape_cylinder(t,e);return Ct.__wrap(n)}static roundCylinder(t,e,n){const r=h.rawshape_roundCylinder(t,e,n);return Ct.__wrap(r)}static cone(t,e){const n=h.rawshape_cone(t,e);return Ct.__wrap(n)}static roundCone(t,e,n){const r=h.rawshape_roundCone(t,e,n);return Ct.__wrap(r)}static voxels(t,e){R(t,F);const n=ir(e,h.__wbindgen_export_2),r=Xe,s=h.rawshape_voxels(t.__wbg_ptr,n,r);return Ct.__wrap(s)}static voxelsFromPoints(t,e){R(t,F);const n=Kn(e,h.__wbindgen_export_2),r=Xe,s=h.rawshape_voxelsFromPoints(t.__wbg_ptr,n,r);return Ct.__wrap(s)}static polyline(t,e){const n=Kn(t,h.__wbindgen_export_2),r=Xe,s=ir(e,h.__wbindgen_export_2),a=Xe,o=h.rawshape_polyline(n,r,s,a);return Ct.__wrap(o)}static trimesh(t,e,n){const r=Kn(t,h.__wbindgen_export_2),s=Xe,a=ir(e,h.__wbindgen_export_2),o=Xe,c=h.rawshape_trimesh(r,s,a,o,n);return c===0?void 0:Ct.__wrap(c)}static heightfield(t,e,n,r,s){const a=Kn(n,h.__wbindgen_export_2),o=Xe;R(r,F);const c=h.rawshape_heightfield(t,e,a,o,r.__wbg_ptr,s);return Ct.__wrap(c)}static segment(t,e){R(t,F),R(e,F);const n=h.rawshape_segment(t.__wbg_ptr,e.__wbg_ptr);return Ct.__wrap(n)}static triangle(t,e,n){R(t,F),R(e,F),R(n,F);const r=h.rawshape_triangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return Ct.__wrap(r)}static roundTriangle(t,e,n,r){R(t,F),R(e,F),R(n,F);const s=h.rawshape_roundTriangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return Ct.__wrap(s)}static convexHull(t){const e=Kn(t,h.__wbindgen_export_2),n=Xe,r=h.rawshape_convexHull(e,n);return r===0?void 0:Ct.__wrap(r)}static roundConvexHull(t,e){const n=Kn(t,h.__wbindgen_export_2),r=Xe,s=h.rawshape_roundConvexHull(n,r,e);return s===0?void 0:Ct.__wrap(s)}static convexMesh(t,e){const n=Kn(t,h.__wbindgen_export_2),r=Xe,s=ir(e,h.__wbindgen_export_2),a=Xe,o=h.rawshape_convexMesh(n,r,s,a);return o===0?void 0:Ct.__wrap(o)}static roundConvexMesh(t,e,n){const r=Kn(t,h.__wbindgen_export_2),s=Xe,a=ir(e,h.__wbindgen_export_2),o=Xe,c=h.rawshape_roundConvexMesh(r,s,a,o,n);return c===0?void 0:Ct.__wrap(c)}castShape(t,e,n,r,s,a,o,c,l,u){R(t,F),R(e,kt),R(n,F),R(r,Ct),R(s,F),R(a,kt),R(o,F);const f=h.rawshape_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c,l,u);return f===0?void 0:zs.__wrap(f)}intersectsShape(t,e,n,r,s){return R(t,F),R(e,kt),R(n,Ct),R(r,F),R(s,kt),h.rawshape_intersectsShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)!==0}contactShape(t,e,n,r,s,a){R(t,F),R(e,kt),R(n,Ct),R(r,F),R(s,kt);const o=h.rawshape_contactShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a);return o===0?void 0:gr.__wrap(o)}containsPoint(t,e,n){return R(t,F),R(e,kt),R(n,F),h.rawshape_containsPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr)!==0}projectPoint(t,e,n,r){R(t,F),R(e,kt),R(n,F);const s=h.rawshape_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return Ns.__wrap(s)}intersectsRay(t,e,n,r,s){return R(t,F),R(e,kt),R(n,F),R(r,F),h.rawshape_intersectsRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s)!==0}castRay(t,e,n,r,s,a){return R(t,F),R(e,kt),R(n,F),R(r,F),h.rawshape_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a)}castRayAndGetNormal(t,e,n,r,s,a){R(t,F),R(e,kt),R(n,F),R(r,F);const o=h.rawshape_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a);return o===0?void 0:Bs.__wrap(o)}}const ml=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshapecasthit_free(i>>>0,1));class zs{static __wrap(t){t=t>>>0;const e=Object.create(zs.prototype);return e.__wbg_ptr=t,ml.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ml.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshapecasthit_free(t,0)}time_of_impact(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}witness1(){const t=h.rawshapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}witness2(){const t=h.rawcontactforceevent_total_force(this.__wbg_ptr);return F.__wrap(t)}normal1(){const t=h.rawshapecasthit_normal1(this.__wbg_ptr);return F.__wrap(t)}normal2(){const t=h.rawshapecasthit_normal2(this.__wbg_ptr);return F.__wrap(t)}}const gl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshapecontact_free(i>>>0,1));class gr{static __wrap(t){t=t>>>0;const e=Object.create(gr.prototype);return e.__wbg_ptr=t,gl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,gl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshapecontact_free(t,0)}distance(){return h.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}point1(){const t=h.rawpointprojection_point(this.__wbg_ptr);return F.__wrap(t)}point2(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}normal1(){const t=h.rawcollidershapecasthit_witness2(this.__wbg_ptr);return F.__wrap(t)}normal2(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(t)}}const ra=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawvector_free(i>>>0,1));class F{static __wrap(t){t=t>>>0;const e=Object.create(F.prototype);return e.__wbg_ptr=t,ra.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ra.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawvector_free(t,0)}static zero(){const t=h.rawvector_zero();return F.__wrap(t)}constructor(t,e,n){const r=h.rawvector_new(t,e,n);return this.__wbg_ptr=r>>>0,ra.register(this,this.__wbg_ptr,this),this}get x(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}set x(t){h.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}get y(){return h.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}set y(t){h.rawvector_set_y(this.__wbg_ptr,t)}get z(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}set z(t){h.rawvector_set_z(this.__wbg_ptr,t)}xyz(){const t=h.rawvector_xyz(this.__wbg_ptr);return F.__wrap(t)}yxz(){const t=h.rawvector_yxz(this.__wbg_ptr);return F.__wrap(t)}zxy(){const t=h.rawvector_zxy(this.__wbg_ptr);return F.__wrap(t)}xzy(){const t=h.rawvector_xzy(this.__wbg_ptr);return F.__wrap(t)}yzx(){const t=h.rawvector_yzx(this.__wbg_ptr);return F.__wrap(t)}zyx(){const t=h.rawvector_zyx(this.__wbg_ptr);return F.__wrap(t)}}function pu(i,t,e,n){const r=Yt(i).bind(Yt(t),Yt(e),Yt(n));return le(r)}function mu(i){const t=Yt(i).buffer;return le(t)}function gu(){return Ls(function(i,t){const e=Yt(i).call(Yt(t));return le(e)},arguments)}function wu(){return Ls(function(i,t,e){const n=Yt(i).call(Yt(t),Yt(e));return le(n)},arguments)}function bu(){return Ls(function(i,t,e,n){const r=Yt(i).call(Yt(t),Yt(e),Yt(n));return le(r)},arguments)}function vu(){return Ls(function(i,t,e,n,r){const s=Yt(i).call(Yt(t),Yt(e),Yt(n),Yt(r));return le(s)},arguments)}function xu(i){return Yt(i).length}function yu(i){return Yt(i).length}function Su(i){const t=new Uint8Array(Yt(i));return le(t)}function Mu(i,t){const e=new Function(Sh(i,t));return le(e)}function Eu(i,t,e){const n=new Uint8Array(Yt(i),t>>>0,e>>>0);return le(n)}function Tu(i,t,e){const n=new Float32Array(Yt(i),t>>>0,e>>>0);return le(n)}function Au(i){const t=new Float32Array(i>>>0);return le(t)}function Ru(i){return Yt(i).now()}function Cu(i){const t=Yt(i).performance;return le(t)}function Pu(i){const t=Ko.__wrap(i);return le(t)}function Iu(i){const t=Os.__wrap(i);return le(t)}function Du(i,t,e){Yt(i).set(Yt(t),e>>>0)}function Lu(i,t,e){Yt(i).set(Yt(t),e>>>0)}function Fu(){const i=typeof global>"u"?null:global;return It(i)?0:le(i)}function Uu(){const i=typeof globalThis>"u"?null:globalThis;return It(i)?0:le(i)}function Nu(){const i=typeof self>"u"?null:self;return It(i)?0:le(i)}function Ou(){const i=typeof window>"u"?null:window;return It(i)?0:le(i)}function Bu(i){const t=Yt(i);return typeof t=="boolean"?t?1:0:2}function zu(i){return typeof Yt(i)=="function"}function Hu(i){return Yt(i)===void 0}function Gu(){const i=h.memory;return le(i)}function Vu(i,t){const e=Yt(t),n=typeof e=="number"?e:void 0;Ne().setFloat64(i+8,It(n)?0:n,!0),Ne().setInt32(i+0,!It(n),!0)}function ku(i){return le(i)}function Wu(i){const t=Yt(i);return le(t)}function ju(i){mr(i)}function Xu(i,t){throw new Error(Sh(i,t))}URL=globalThis.URL;const _=await tu({"./rapier_wasm3d_bg.js":{__wbindgen_number_new:ku,__wbindgen_boolean_get:Bu,__wbindgen_object_drop_ref:ju,__wbindgen_number_get:Vu,__wbindgen_is_function:zu,__wbg_rawraycolliderintersection_new:Iu,__wbg_rawcontactforceevent_new:Pu,__wbg_performance_7a3ffd0b17f663ad:Cu,__wbindgen_is_undefined:Hu,__wbg_now_2c95c9de01293173:Ru,__wbindgen_object_clone_ref:Wu,__wbg_newnoargs_105ed471475aaf50:Mu,__wbg_call_672a4d21634d4a24:gu,__wbg_call_7cccdd69e0791ae2:wu,__wbg_call_833bed5770ea2041:bu,__wbg_call_b8adc8b1d0a0d8eb:vu,__wbg_bind_c8359b1cba058168:pu,__wbg_buffer_609cc3eee51ed158:mu,__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0:Uu,__wbg_static_accessor_SELF_37c5d418e4bf5819:Nu,__wbg_static_accessor_WINDOW_5de37043a91a9c40:Ou,__wbg_static_accessor_GLOBAL_88a902d13a557d07:Fu,__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a:Eu,__wbg_new_a12002a7f91c75be:Su,__wbg_set_65595bdd868b3009:Lu,__wbg_length_a446193dc22c12f8:yu,__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354:Tu,__wbg_set_10bad9bee0e9c58b:Du,__wbg_length_3b4f022188ae8db6:xu,__wbg_newwithlength_5a5efe313cfd59f1:Au,__wbindgen_throw:Xu,__wbindgen_memory:Gu}},Qd),qu=_.memory,Yu=_.version,Ku=_.__wbg_rawkinematiccharactercontroller_free,Ju=_.rawkinematiccharactercontroller_new,$u=_.rawkinematiccharactercontroller_setUp,Zu=_.rawkinematiccharactercontroller_normalNudgeFactor,Qu=_.rawkinematiccharactercontroller_setNormalNudgeFactor,t_=_.rawkinematiccharactercontroller_offset,e_=_.rawkinematiccharactercontroller_setOffset,n_=_.rawkinematiccharactercontroller_slideEnabled,i_=_.rawkinematiccharactercontroller_setSlideEnabled,r_=_.rawkinematiccharactercontroller_autostepMaxHeight,s_=_.rawkinematiccharactercontroller_autostepMinWidth,a_=_.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,o_=_.rawkinematiccharactercontroller_autostepEnabled,c_=_.rawkinematiccharactercontroller_enableAutostep,l_=_.rawkinematiccharactercontroller_disableAutostep,h_=_.rawkinematiccharactercontroller_maxSlopeClimbAngle,d_=_.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,u_=_.rawkinematiccharactercontroller_minSlopeSlideAngle,__=_.rawkinematiccharactercontroller_setMinSlopeSlideAngle,f_=_.rawkinematiccharactercontroller_snapToGroundDistance,p_=_.rawkinematiccharactercontroller_enableSnapToGround,m_=_.rawkinematiccharactercontroller_disableSnapToGround,g_=_.rawkinematiccharactercontroller_snapToGroundEnabled,w_=_.rawkinematiccharactercontroller_computeColliderMovement,b_=_.rawkinematiccharactercontroller_computedMovement,v_=_.rawkinematiccharactercontroller_computedGrounded,x_=_.rawkinematiccharactercontroller_numComputedCollisions,y_=_.rawkinematiccharactercontroller_computedCollision,S_=_.__wbg_rawcharactercollision_free,M_=_.rawcharactercollision_new,E_=_.rawcharactercollision_handle,T_=_.rawcharactercollision_translationDeltaApplied,A_=_.rawcharactercollision_translationDeltaRemaining,R_=_.rawcharactercollision_toi,C_=_.rawcharactercollision_worldWitness1,P_=_.rawcharactercollision_worldWitness2,I_=_.rawcharactercollision_worldNormal1,D_=_.rawcharactercollision_worldNormal2,L_=_.__wbg_rawpidcontroller_free,F_=_.rawpidcontroller_new,U_=_.rawpidcontroller_set_kp,N_=_.rawpidcontroller_set_ki,O_=_.rawpidcontroller_set_kd,B_=_.rawpidcontroller_set_axes_mask,z_=_.rawpidcontroller_reset_integrals,H_=_.rawpidcontroller_apply_linear_correction,G_=_.rawpidcontroller_apply_angular_correction,V_=_.rawpidcontroller_linear_correction,k_=_.rawpidcontroller_angular_correction,W_=_.__wbg_rawdynamicraycastvehiclecontroller_free,j_=_.rawdynamicraycastvehiclecontroller_new,X_=_.rawdynamicraycastvehiclecontroller_current_vehicle_speed,q_=_.rawdynamicraycastvehiclecontroller_chassis,Y_=_.rawdynamicraycastvehiclecontroller_index_up_axis,K_=_.rawdynamicraycastvehiclecontroller_set_index_up_axis,J_=_.rawdynamicraycastvehiclecontroller_index_forward_axis,$_=_.rawdynamicraycastvehiclecontroller_set_index_forward_axis,Z_=_.rawdynamicraycastvehiclecontroller_add_wheel,Q_=_.rawdynamicraycastvehiclecontroller_num_wheels,tf=_.rawdynamicraycastvehiclecontroller_update_vehicle,ef=_.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs,nf=_.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs,rf=_.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length,sf=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length,af=_.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel,of=_.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel,cf=_.rawdynamicraycastvehiclecontroller_wheel_radius,lf=_.rawdynamicraycastvehiclecontroller_set_wheel_radius,hf=_.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness,df=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness,uf=_.rawdynamicraycastvehiclecontroller_wheel_suspension_compression,_f=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression,ff=_.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation,pf=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation,mf=_.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force,gf=_.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force,wf=_.rawdynamicraycastvehiclecontroller_wheel_brake,bf=_.rawdynamicraycastvehiclecontroller_set_wheel_brake,vf=_.rawdynamicraycastvehiclecontroller_wheel_steering,xf=_.rawdynamicraycastvehiclecontroller_set_wheel_steering,yf=_.rawdynamicraycastvehiclecontroller_wheel_engine_force,Sf=_.rawdynamicraycastvehiclecontroller_set_wheel_engine_force,Mf=_.rawdynamicraycastvehiclecontroller_wheel_direction_cs,Ef=_.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs,Tf=_.rawdynamicraycastvehiclecontroller_wheel_axle_cs,Af=_.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs,Rf=_.rawdynamicraycastvehiclecontroller_wheel_friction_slip,Cf=_.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip,Pf=_.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness,If=_.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness,Df=_.rawdynamicraycastvehiclecontroller_wheel_rotation,Lf=_.rawdynamicraycastvehiclecontroller_wheel_forward_impulse,Ff=_.rawdynamicraycastvehiclecontroller_wheel_side_impulse,Uf=_.rawdynamicraycastvehiclecontroller_wheel_suspension_force,Nf=_.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws,Of=_.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws,Bf=_.rawdynamicraycastvehiclecontroller_wheel_suspension_length,zf=_.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws,Hf=_.rawdynamicraycastvehiclecontroller_wheel_is_in_contact,Gf=_.rawdynamicraycastvehiclecontroller_wheel_ground_object,Vf=_.__wbg_rawccdsolver_free,kf=_.rawimpulsejointset_jointType,Wf=_.rawimpulsejointset_jointBodyHandle1,jf=_.rawimpulsejointset_jointBodyHandle2,Xf=_.rawimpulsejointset_jointFrameX1,qf=_.rawimpulsejointset_jointFrameX2,Yf=_.rawimpulsejointset_jointAnchor1,Kf=_.rawimpulsejointset_jointAnchor2,Jf=_.rawimpulsejointset_jointSetAnchor1,$f=_.rawimpulsejointset_jointSetAnchor2,Zf=_.rawimpulsejointset_jointContactsEnabled,Qf=_.rawimpulsejointset_jointSetContactsEnabled,tp=_.rawimpulsejointset_jointLimitsEnabled,ep=_.rawimpulsejointset_jointLimitsMin,np=_.rawimpulsejointset_jointLimitsMax,ip=_.rawimpulsejointset_jointSetLimits,rp=_.rawimpulsejointset_jointConfigureMotorModel,sp=_.rawimpulsejointset_jointConfigureMotorVelocity,ap=_.rawimpulsejointset_jointConfigureMotorPosition,op=_.rawimpulsejointset_jointConfigureMotor,cp=_.__wbg_rawimpulsejointset_free,lp=_.rawimpulsejointset_new,hp=_.rawimpulsejointset_createJoint,dp=_.rawimpulsejointset_remove,up=_.rawimpulsejointset_len,_p=_.rawimpulsejointset_contains,fp=_.rawimpulsejointset_forEachJointHandle,pp=_.rawimpulsejointset_forEachJointAttachedToRigidBody,mp=_.__wbg_rawintegrationparameters_free,gp=_.rawintegrationparameters_new,wp=_.rawintegrationparameters_dt,bp=_.rawintegrationparameters_contact_erp,vp=_.rawintegrationparameters_normalizedAllowedLinearError,xp=_.rawintegrationparameters_normalizedPredictionDistance,yp=_.rawintegrationparameters_numSolverIterations,Sp=_.rawintegrationparameters_minIslandSize,Mp=_.rawintegrationparameters_maxCcdSubsteps,Ep=_.rawintegrationparameters_set_dt,Tp=_.rawintegrationparameters_set_contact_natural_frequency,Ap=_.rawintegrationparameters_set_normalizedAllowedLinearError,Rp=_.rawintegrationparameters_set_normalizedPredictionDistance,Cp=_.rawintegrationparameters_set_numSolverIterations,Pp=_.rawintegrationparameters_set_minIslandSize,Ip=_.rawintegrationparameters_set_maxCcdSubsteps,Dp=_.rawintegrationparameters_set_lengthUnit,Lp=_.__wbg_rawislandmanager_free,Fp=_.rawislandmanager_new,Up=_.rawislandmanager_forEachActiveRigidBodyHandle,Np=_.__wbg_rawgenericjoint_free,Op=_.rawgenericjoint_generic,Bp=_.rawgenericjoint_spring,zp=_.rawgenericjoint_rope,Hp=_.rawgenericjoint_spherical,Gp=_.rawgenericjoint_prismatic,Vp=_.rawgenericjoint_fixed,kp=_.rawgenericjoint_revolute,Wp=_.rawmultibodyjointset_jointType,jp=_.rawmultibodyjointset_jointFrameX1,Xp=_.rawmultibodyjointset_jointFrameX2,qp=_.rawmultibodyjointset_jointAnchor1,Yp=_.rawmultibodyjointset_jointAnchor2,Kp=_.rawmultibodyjointset_jointContactsEnabled,Jp=_.rawmultibodyjointset_jointSetContactsEnabled,$p=_.rawmultibodyjointset_jointLimitsEnabled,Zp=_.rawmultibodyjointset_jointLimitsMin,Qp=_.rawmultibodyjointset_jointLimitsMax,tm=_.__wbg_rawmultibodyjointset_free,em=_.rawmultibodyjointset_new,nm=_.rawmultibodyjointset_createJoint,im=_.rawmultibodyjointset_remove,rm=_.rawmultibodyjointset_contains,sm=_.rawmultibodyjointset_forEachJointHandle,am=_.rawmultibodyjointset_forEachJointAttachedToRigidBody,om=_.rawrigidbodyset_rbTranslation,cm=_.rawrigidbodyset_rbRotation,lm=_.rawrigidbodyset_rbSleep,hm=_.rawrigidbodyset_rbIsSleeping,dm=_.rawrigidbodyset_rbIsMoving,um=_.rawrigidbodyset_rbNextTranslation,_m=_.rawrigidbodyset_rbNextRotation,fm=_.rawrigidbodyset_rbSetTranslation,pm=_.rawrigidbodyset_rbSetRotation,mm=_.rawrigidbodyset_rbSetLinvel,gm=_.rawrigidbodyset_rbSetAngvel,wm=_.rawrigidbodyset_rbSetNextKinematicTranslation,bm=_.rawrigidbodyset_rbSetNextKinematicRotation,vm=_.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,xm=_.rawrigidbodyset_rbSetAdditionalMass,ym=_.rawrigidbodyset_rbSetAdditionalMassProperties,Sm=_.rawrigidbodyset_rbLinvel,Mm=_.rawrigidbodyset_rbAngvel,Em=_.rawrigidbodyset_rbVelocityAtPoint,Tm=_.rawrigidbodyset_rbLockTranslations,Am=_.rawrigidbodyset_rbSetEnabledTranslations,Rm=_.rawrigidbodyset_rbLockRotations,Cm=_.rawrigidbodyset_rbSetEnabledRotations,Pm=_.rawrigidbodyset_rbDominanceGroup,Im=_.rawrigidbodyset_rbSetDominanceGroup,Dm=_.rawrigidbodyset_rbEnableCcd,Lm=_.rawrigidbodyset_rbSetSoftCcdPrediction,Fm=_.rawrigidbodyset_rbMass,Um=_.rawrigidbodyset_rbInvMass,Nm=_.rawrigidbodyset_rbEffectiveInvMass,Om=_.rawrigidbodyset_rbLocalCom,Bm=_.rawrigidbodyset_rbWorldCom,zm=_.rawrigidbodyset_rbInvPrincipalInertia,Hm=_.rawrigidbodyset_rbPrincipalInertiaLocalFrame,Gm=_.rawrigidbodyset_rbPrincipalInertia,Vm=_.rawrigidbodyset_rbEffectiveWorldInvInertia,km=_.rawrigidbodyset_rbEffectiveAngularInertia,Wm=_.rawrigidbodyset_rbWakeUp,jm=_.rawrigidbodyset_rbIsCcdEnabled,Xm=_.rawrigidbodyset_rbSoftCcdPrediction,qm=_.rawrigidbodyset_rbNumColliders,Ym=_.rawrigidbodyset_rbCollider,Km=_.rawrigidbodyset_rbBodyType,Jm=_.rawrigidbodyset_rbSetBodyType,$m=_.rawrigidbodyset_rbIsFixed,Zm=_.rawrigidbodyset_rbIsKinematic,Qm=_.rawrigidbodyset_rbIsDynamic,tg=_.rawrigidbodyset_rbLinearDamping,eg=_.rawrigidbodyset_rbAngularDamping,ng=_.rawrigidbodyset_rbSetLinearDamping,ig=_.rawrigidbodyset_rbSetAngularDamping,rg=_.rawrigidbodyset_rbSetEnabled,sg=_.rawrigidbodyset_rbIsEnabled,ag=_.rawrigidbodyset_rbGravityScale,og=_.rawrigidbodyset_rbSetGravityScale,cg=_.rawrigidbodyset_rbResetForces,lg=_.rawrigidbodyset_rbResetTorques,hg=_.rawrigidbodyset_rbAddForce,dg=_.rawrigidbodyset_rbApplyImpulse,ug=_.rawrigidbodyset_rbAddTorque,_g=_.rawrigidbodyset_rbApplyTorqueImpulse,fg=_.rawrigidbodyset_rbAddForceAtPoint,pg=_.rawrigidbodyset_rbApplyImpulseAtPoint,mg=_.rawrigidbodyset_rbAdditionalSolverIterations,gg=_.rawrigidbodyset_rbSetAdditionalSolverIterations,wg=_.rawrigidbodyset_rbUserData,bg=_.rawrigidbodyset_rbSetUserData,vg=_.rawrigidbodyset_rbUserForce,xg=_.rawrigidbodyset_rbUserTorque,yg=_.__wbg_rawrigidbodyset_free,Sg=_.rawrigidbodyset_new,Mg=_.rawrigidbodyset_createRigidBody,Eg=_.rawrigidbodyset_remove,Tg=_.rawrigidbodyset_len,Ag=_.rawrigidbodyset_contains,Rg=_.rawrigidbodyset_forEachRigidBodyHandle,Cg=_.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,Pg=_.__wbg_rawbroadphase_free,Ig=_.rawbroadphase_new,Dg=_.rawbroadphase_castRay,Lg=_.rawbroadphase_castRayAndGetNormal,Fg=_.rawbroadphase_intersectionsWithRay,Ug=_.rawbroadphase_intersectionWithShape,Ng=_.rawbroadphase_projectPoint,Og=_.rawbroadphase_projectPointAndGetFeature,Bg=_.rawbroadphase_intersectionsWithPoint,zg=_.rawbroadphase_castShape,Hg=_.rawbroadphase_intersectionsWithShape,Gg=_.rawbroadphase_collidersWithAabbIntersectingAabb,Vg=_.rawcolliderset_coTranslation,kg=_.rawcolliderset_coRotation,Wg=_.rawcolliderset_coTranslationWrtParent,jg=_.rawcolliderset_coRotationWrtParent,Xg=_.rawcolliderset_coSetTranslation,qg=_.rawcolliderset_coSetTranslationWrtParent,Yg=_.rawcolliderset_coSetRotation,Kg=_.rawcolliderset_coSetRotationWrtParent,Jg=_.rawcolliderset_coIsSensor,$g=_.rawcolliderset_coShapeType,Zg=_.rawcolliderset_coHalfspaceNormal,Qg=_.rawcolliderset_coHalfExtents,tw=_.rawcolliderset_coSetHalfExtents,ew=_.rawcolliderset_coRadius,nw=_.rawcolliderset_coSetRadius,iw=_.rawcolliderset_coHalfHeight,rw=_.rawcolliderset_coSetHalfHeight,sw=_.rawcolliderset_coRoundRadius,aw=_.rawcolliderset_coSetRoundRadius,ow=_.rawcolliderset_coVoxelData,cw=_.rawcolliderset_coVoxelSize,lw=_.rawcolliderset_coSetVoxel,hw=_.rawcolliderset_coPropagateVoxelChange,dw=_.rawcolliderset_coCombineVoxelStates,uw=_.rawcolliderset_coVertices,_w=_.rawcolliderset_coIndices,fw=_.rawcolliderset_coTriMeshFlags,pw=_.rawcolliderset_coHeightFieldFlags,mw=_.rawcolliderset_coHeightfieldHeights,gw=_.rawcolliderset_coHeightfieldScale,ww=_.rawcolliderset_coHeightfieldNRows,bw=_.rawcolliderset_coHeightfieldNCols,vw=_.rawcolliderset_coParent,xw=_.rawcolliderset_coSetEnabled,yw=_.rawcolliderset_coIsEnabled,Sw=_.rawcolliderset_coSetContactSkin,Mw=_.rawcolliderset_coContactSkin,Ew=_.rawcolliderset_coFriction,Tw=_.rawcolliderset_coRestitution,Aw=_.rawcolliderset_coDensity,Rw=_.rawcolliderset_coMass,Cw=_.rawcolliderset_coVolume,Pw=_.rawcolliderset_coCollisionGroups,Iw=_.rawcolliderset_coSolverGroups,Dw=_.rawcolliderset_coActiveHooks,Lw=_.rawcolliderset_coActiveCollisionTypes,Fw=_.rawcolliderset_coActiveEvents,Uw=_.rawcolliderset_coContactForceEventThreshold,Nw=_.rawcolliderset_coContainsPoint,Ow=_.rawcolliderset_coCastShape,Bw=_.rawcolliderset_coCastCollider,zw=_.rawcolliderset_coIntersectsShape,Hw=_.rawcolliderset_coContactShape,Gw=_.rawcolliderset_coContactCollider,Vw=_.rawcolliderset_coProjectPoint,kw=_.rawcolliderset_coIntersectsRay,Ww=_.rawcolliderset_coCastRay,jw=_.rawcolliderset_coCastRayAndGetNormal,Xw=_.rawcolliderset_coSetSensor,qw=_.rawcolliderset_coSetRestitution,Yw=_.rawcolliderset_coSetFriction,Kw=_.rawcolliderset_coFrictionCombineRule,Jw=_.rawcolliderset_coSetFrictionCombineRule,$w=_.rawcolliderset_coRestitutionCombineRule,Zw=_.rawcolliderset_coSetRestitutionCombineRule,Qw=_.rawcolliderset_coSetCollisionGroups,t0=_.rawcolliderset_coSetSolverGroups,e0=_.rawcolliderset_coSetActiveHooks,n0=_.rawcolliderset_coSetActiveEvents,i0=_.rawcolliderset_coSetActiveCollisionTypes,r0=_.rawcolliderset_coSetShape,s0=_.rawcolliderset_coSetContactForceEventThreshold,a0=_.rawcolliderset_coSetDensity,o0=_.rawcolliderset_coSetMass,c0=_.rawcolliderset_coSetMassProperties,l0=_.__wbg_rawcolliderset_free,h0=_.rawcolliderset_new,d0=_.rawcolliderset_len,u0=_.rawcolliderset_contains,_0=_.rawcolliderset_createCollider,f0=_.rawcolliderset_remove,p0=_.rawcolliderset_forEachColliderHandle,m0=_.__wbg_rawshapecontact_free,g0=_.__wbg_rawnarrowphase_free,w0=_.rawnarrowphase_new,b0=_.rawnarrowphase_contact_pairs_with,v0=_.rawnarrowphase_contact_pair,x0=_.rawnarrowphase_intersection_pairs_with,y0=_.rawnarrowphase_intersection_pair,S0=_.__wbg_rawcontactmanifold_free,M0=_.rawcontactpair_collider1,E0=_.rawcontactpair_collider2,T0=_.rawcontactpair_numContactManifolds,A0=_.rawcontactpair_contactManifold,R0=_.rawcontactmanifold_normal,C0=_.rawcontactmanifold_local_n1,P0=_.rawcontactmanifold_local_n2,I0=_.rawcontactmanifold_subshape1,D0=_.rawcontactmanifold_subshape2,L0=_.rawcontactmanifold_num_contacts,F0=_.rawcontactmanifold_contact_local_p1,U0=_.rawcontactmanifold_contact_local_p2,N0=_.rawcontactmanifold_contact_dist,O0=_.rawcontactmanifold_contact_fid1,B0=_.rawcontactmanifold_contact_fid2,z0=_.rawcontactmanifold_contact_impulse,H0=_.rawcontactmanifold_contact_tangent_impulse_x,G0=_.rawcontactmanifold_contact_tangent_impulse_y,V0=_.rawcontactmanifold_num_solver_contacts,k0=_.rawcontactmanifold_solver_contact_point,W0=_.rawcontactmanifold_solver_contact_dist,j0=_.rawcontactmanifold_solver_contact_friction,X0=_.rawcontactmanifold_solver_contact_restitution,q0=_.rawcontactmanifold_solver_contact_tangent_velocity,Y0=_.__wbg_rawpointprojection_free,K0=_.rawpointprojection_point,J0=_.rawpointprojection_isInside,$0=_.__wbg_rawpointcolliderprojection_free,Z0=_.rawpointcolliderprojection_colliderHandle,Q0=_.rawpointcolliderprojection_point,tb=_.rawpointcolliderprojection_isInside,eb=_.rawpointcolliderprojection_featureType,nb=_.rawpointcolliderprojection_featureId,ib=_.__wbg_rawrayintersection_free,rb=_.__wbg_rawraycolliderhit_free,sb=_.__wbg_rawshape_free,ab=_.rawshape_cuboid,ob=_.rawshape_roundCuboid,cb=_.rawshape_ball,lb=_.rawshape_halfspace,hb=_.rawshape_capsule,db=_.rawshape_cylinder,ub=_.rawshape_roundCylinder,_b=_.rawshape_cone,fb=_.rawshape_roundCone,pb=_.rawshape_voxels,mb=_.rawshape_voxelsFromPoints,gb=_.rawshape_polyline,wb=_.rawshape_trimesh,bb=_.rawshape_heightfield,vb=_.rawshape_segment,xb=_.rawshape_triangle,yb=_.rawshape_roundTriangle,Sb=_.rawshape_convexHull,Mb=_.rawshape_roundConvexHull,Eb=_.rawshape_convexMesh,Tb=_.rawshape_roundConvexMesh,Ab=_.rawshape_castShape,Rb=_.rawshape_intersectsShape,Cb=_.rawshape_contactShape,Pb=_.rawshape_containsPoint,Ib=_.rawshape_projectPoint,Db=_.rawshape_intersectsRay,Lb=_.rawshape_castRay,Fb=_.rawshape_castRayAndGetNormal,Ub=_.__wbg_rawshapecasthit_free,Nb=_.rawshapecasthit_witness1,Ob=_.rawshapecasthit_normal1,Bb=_.rawshapecasthit_normal2,zb=_.__wbg_rawcollidershapecasthit_free,Hb=_.rawcollidershapecasthit_time_of_impact,Gb=_.rawcollidershapecasthit_witness1,Vb=_.rawcollidershapecasthit_witness2,kb=_.rawrotation_new,Wb=_.rawrotation_identity,jb=_.rawrotation_w,Xb=_.rawvector_zero,qb=_.rawvector_new,Yb=_.rawvector_set_y,Kb=_.rawvector_set_z,Jb=_.rawvector_xyz,$b=_.rawvector_yxz,Zb=_.rawvector_zxy,Qb=_.rawvector_xzy,tv=_.rawvector_yzx,ev=_.rawvector_zyx,nv=_.rawsdpmatrix3_elements,iv=_.__wbg_rawdebugrenderpipeline_free,rv=_.rawdebugrenderpipeline_new,sv=_.rawdebugrenderpipeline_vertices,av=_.rawdebugrenderpipeline_colors,ov=_.rawdebugrenderpipeline_render,cv=_.__wbg_raweventqueue_free,lv=_.__wbg_rawcontactforceevent_free,hv=_.rawcontactforceevent_collider2,dv=_.rawcontactforceevent_total_force,uv=_.rawcontactforceevent_total_force_magnitude,_v=_.rawcontactforceevent_max_force_direction,fv=_.rawcontactforceevent_max_force_magnitude,pv=_.raweventqueue_new,mv=_.raweventqueue_drainCollisionEvents,gv=_.raweventqueue_drainContactForceEvents,wv=_.raweventqueue_clear,bv=_.__wbg_rawphysicspipeline_free,vv=_.rawphysicspipeline_new,xv=_.rawphysicspipeline_set_profiler_enabled,yv=_.rawphysicspipeline_is_profiler_enabled,Sv=_.rawphysicspipeline_timing_step,Mv=_.rawphysicspipeline_timing_collision_detection,Ev=_.rawphysicspipeline_timing_broad_phase,Tv=_.rawphysicspipeline_timing_narrow_phase,Av=_.rawphysicspipeline_timing_solver,Rv=_.rawphysicspipeline_timing_velocity_assembly,Cv=_.rawphysicspipeline_timing_velocity_resolution,Pv=_.rawphysicspipeline_timing_velocity_update,Iv=_.rawphysicspipeline_timing_velocity_writeback,Dv=_.rawphysicspipeline_timing_ccd,Lv=_.rawphysicspipeline_timing_ccd_toi_computation,Fv=_.rawphysicspipeline_timing_ccd_broad_phase,Uv=_.rawphysicspipeline_timing_ccd_narrow_phase,Nv=_.rawphysicspipeline_timing_ccd_solver,Ov=_.rawphysicspipeline_timing_island_construction,Bv=_.rawphysicspipeline_timing_user_changes,zv=_.rawphysicspipeline_step,Hv=_.rawphysicspipeline_stepWithEvents,Gv=_.__wbg_rawdeserializedworld_free,Vv=_.rawdeserializedworld_takeGravity,kv=_.rawdeserializedworld_takeIntegrationParameters,Wv=_.rawdeserializedworld_takeIslandManager,jv=_.rawdeserializedworld_takeBroadPhase,Xv=_.rawdeserializedworld_takeNarrowPhase,qv=_.rawdeserializedworld_takeBodies,Yv=_.rawdeserializedworld_takeColliders,Kv=_.rawdeserializedworld_takeImpulseJoints,Jv=_.rawdeserializedworld_takeMultibodyJoints,$v=_.rawserializationpipeline_serializeAll,Zv=_.rawserializationpipeline_deserializeAll,Qv=_.rawcolliderset_isHandleValid,tx=_.rawrayintersection_featureId,ex=_.rawraycolliderintersection_featureId,nx=_.rawintegrationparameters_set_numInternalPgsIterations,ix=_.rawvector_set_x,rx=_.reserve_memory,sx=_.rawkinematiccharactercontroller_up,ax=_.rawshapecontact_normal2,ox=_.rawshapecontact_point1,cx=_.rawshapecontact_point2,lx=_.rawrayintersection_normal,hx=_.rawraycolliderintersection_normal,dx=_.rawshapecontact_normal1,ux=_.rawcollidershapecasthit_normal1,_x=_.rawcollidershapecasthit_normal2,fx=_.rawshapecasthit_witness2,px=_.rawintegrationparameters_numInternalPgsIterations,mx=_.rawshapecontact_distance,gx=_.rawrayintersection_featureType,wx=_.rawraycolliderintersection_colliderHandle,bx=_.rawrayintersection_time_of_impact,vx=_.rawraycolliderintersection_featureType,xx=_.rawraycolliderhit_colliderHandle,yx=_.rawraycolliderintersection_time_of_impact,Sx=_.rawshapecasthit_time_of_impact,Mx=_.rawcollidershapecasthit_colliderHandle,Ex=_.rawraycolliderhit_timeOfImpact,Tx=_.rawrotation_x,Ax=_.rawrotation_y,Rx=_.rawrotation_z,Cx=_.rawvector_x,Px=_.rawvector_y,Ix=_.rawvector_z,Dx=_.rawcontactforceevent_collider1,Lx=_.rawintegrationparameters_lengthUnit,Fx=_.__wbg_rawcontactpair_free,Ux=_.__wbg_rawraycolliderintersection_free,Nx=_.__wbg_rawrotation_free,Ox=_.__wbg_rawvector_free,Bx=_.__wbg_rawsdpmatrix3_free,zx=_.__wbg_rawserializationpipeline_free,Hx=_.rawccdsolver_new,Gx=_.rawserializationpipeline_new,Vx=_.__wbindgen_export_0,kx=_.__wbindgen_add_to_stack_pointer,Wx=_.__wbindgen_export_1,jx=_.__wbindgen_export_2,Xx=Object.freeze(Object.defineProperty({__proto__:null,__wbg_rawbroadphase_free:Pg,__wbg_rawccdsolver_free:Vf,__wbg_rawcharactercollision_free:S_,__wbg_rawcolliderset_free:l0,__wbg_rawcollidershapecasthit_free:zb,__wbg_rawcontactforceevent_free:lv,__wbg_rawcontactmanifold_free:S0,__wbg_rawcontactpair_free:Fx,__wbg_rawdebugrenderpipeline_free:iv,__wbg_rawdeserializedworld_free:Gv,__wbg_rawdynamicraycastvehiclecontroller_free:W_,__wbg_raweventqueue_free:cv,__wbg_rawgenericjoint_free:Np,__wbg_rawimpulsejointset_free:cp,__wbg_rawintegrationparameters_free:mp,__wbg_rawislandmanager_free:Lp,__wbg_rawkinematiccharactercontroller_free:Ku,__wbg_rawmultibodyjointset_free:tm,__wbg_rawnarrowphase_free:g0,__wbg_rawphysicspipeline_free:bv,__wbg_rawpidcontroller_free:L_,__wbg_rawpointcolliderprojection_free:$0,__wbg_rawpointprojection_free:Y0,__wbg_rawraycolliderhit_free:rb,__wbg_rawraycolliderintersection_free:Ux,__wbg_rawrayintersection_free:ib,__wbg_rawrigidbodyset_free:yg,__wbg_rawrotation_free:Nx,__wbg_rawsdpmatrix3_free:Bx,__wbg_rawserializationpipeline_free:zx,__wbg_rawshape_free:sb,__wbg_rawshapecasthit_free:Ub,__wbg_rawshapecontact_free:m0,__wbg_rawvector_free:Ox,__wbindgen_add_to_stack_pointer:kx,__wbindgen_export_0:Vx,__wbindgen_export_1:Wx,__wbindgen_export_2:jx,memory:qu,rawbroadphase_castRay:Dg,rawbroadphase_castRayAndGetNormal:Lg,rawbroadphase_castShape:zg,rawbroadphase_collidersWithAabbIntersectingAabb:Gg,rawbroadphase_intersectionWithShape:Ug,rawbroadphase_intersectionsWithPoint:Bg,rawbroadphase_intersectionsWithRay:Fg,rawbroadphase_intersectionsWithShape:Hg,rawbroadphase_new:Ig,rawbroadphase_projectPoint:Ng,rawbroadphase_projectPointAndGetFeature:Og,rawccdsolver_new:Hx,rawcharactercollision_handle:E_,rawcharactercollision_new:M_,rawcharactercollision_toi:R_,rawcharactercollision_translationDeltaApplied:T_,rawcharactercollision_translationDeltaRemaining:A_,rawcharactercollision_worldNormal1:I_,rawcharactercollision_worldNormal2:D_,rawcharactercollision_worldWitness1:C_,rawcharactercollision_worldWitness2:P_,rawcolliderset_coActiveCollisionTypes:Lw,rawcolliderset_coActiveEvents:Fw,rawcolliderset_coActiveHooks:Dw,rawcolliderset_coCastCollider:Bw,rawcolliderset_coCastRay:Ww,rawcolliderset_coCastRayAndGetNormal:jw,rawcolliderset_coCastShape:Ow,rawcolliderset_coCollisionGroups:Pw,rawcolliderset_coCombineVoxelStates:dw,rawcolliderset_coContactCollider:Gw,rawcolliderset_coContactForceEventThreshold:Uw,rawcolliderset_coContactShape:Hw,rawcolliderset_coContactSkin:Mw,rawcolliderset_coContainsPoint:Nw,rawcolliderset_coDensity:Aw,rawcolliderset_coFriction:Ew,rawcolliderset_coFrictionCombineRule:Kw,rawcolliderset_coHalfExtents:Qg,rawcolliderset_coHalfHeight:iw,rawcolliderset_coHalfspaceNormal:Zg,rawcolliderset_coHeightFieldFlags:pw,rawcolliderset_coHeightfieldHeights:mw,rawcolliderset_coHeightfieldNCols:bw,rawcolliderset_coHeightfieldNRows:ww,rawcolliderset_coHeightfieldScale:gw,rawcolliderset_coIndices:_w,rawcolliderset_coIntersectsRay:kw,rawcolliderset_coIntersectsShape:zw,rawcolliderset_coIsEnabled:yw,rawcolliderset_coIsSensor:Jg,rawcolliderset_coMass:Rw,rawcolliderset_coParent:vw,rawcolliderset_coProjectPoint:Vw,rawcolliderset_coPropagateVoxelChange:hw,rawcolliderset_coRadius:ew,rawcolliderset_coRestitution:Tw,rawcolliderset_coRestitutionCombineRule:$w,rawcolliderset_coRotation:kg,rawcolliderset_coRotationWrtParent:jg,rawcolliderset_coRoundRadius:sw,rawcolliderset_coSetActiveCollisionTypes:i0,rawcolliderset_coSetActiveEvents:n0,rawcolliderset_coSetActiveHooks:e0,rawcolliderset_coSetCollisionGroups:Qw,rawcolliderset_coSetContactForceEventThreshold:s0,rawcolliderset_coSetContactSkin:Sw,rawcolliderset_coSetDensity:a0,rawcolliderset_coSetEnabled:xw,rawcolliderset_coSetFriction:Yw,rawcolliderset_coSetFrictionCombineRule:Jw,rawcolliderset_coSetHalfExtents:tw,rawcolliderset_coSetHalfHeight:rw,rawcolliderset_coSetMass:o0,rawcolliderset_coSetMassProperties:c0,rawcolliderset_coSetRadius:nw,rawcolliderset_coSetRestitution:qw,rawcolliderset_coSetRestitutionCombineRule:Zw,rawcolliderset_coSetRotation:Yg,rawcolliderset_coSetRotationWrtParent:Kg,rawcolliderset_coSetRoundRadius:aw,rawcolliderset_coSetSensor:Xw,rawcolliderset_coSetShape:r0,rawcolliderset_coSetSolverGroups:t0,rawcolliderset_coSetTranslation:Xg,rawcolliderset_coSetTranslationWrtParent:qg,rawcolliderset_coSetVoxel:lw,rawcolliderset_coShapeType:$g,rawcolliderset_coSolverGroups:Iw,rawcolliderset_coTranslation:Vg,rawcolliderset_coTranslationWrtParent:Wg,rawcolliderset_coTriMeshFlags:fw,rawcolliderset_coVertices:uw,rawcolliderset_coVolume:Cw,rawcolliderset_coVoxelData:ow,rawcolliderset_coVoxelSize:cw,rawcolliderset_contains:u0,rawcolliderset_createCollider:_0,rawcolliderset_forEachColliderHandle:p0,rawcolliderset_isHandleValid:Qv,rawcolliderset_len:d0,rawcolliderset_new:h0,rawcolliderset_remove:f0,rawcollidershapecasthit_colliderHandle:Mx,rawcollidershapecasthit_normal1:ux,rawcollidershapecasthit_normal2:_x,rawcollidershapecasthit_time_of_impact:Hb,rawcollidershapecasthit_witness1:Gb,rawcollidershapecasthit_witness2:Vb,rawcontactforceevent_collider1:Dx,rawcontactforceevent_collider2:hv,rawcontactforceevent_max_force_direction:_v,rawcontactforceevent_max_force_magnitude:fv,rawcontactforceevent_total_force:dv,rawcontactforceevent_total_force_magnitude:uv,rawcontactmanifold_contact_dist:N0,rawcontactmanifold_contact_fid1:O0,rawcontactmanifold_contact_fid2:B0,rawcontactmanifold_contact_impulse:z0,rawcontactmanifold_contact_local_p1:F0,rawcontactmanifold_contact_local_p2:U0,rawcontactmanifold_contact_tangent_impulse_x:H0,rawcontactmanifold_contact_tangent_impulse_y:G0,rawcontactmanifold_local_n1:C0,rawcontactmanifold_local_n2:P0,rawcontactmanifold_normal:R0,rawcontactmanifold_num_contacts:L0,rawcontactmanifold_num_solver_contacts:V0,rawcontactmanifold_solver_contact_dist:W0,rawcontactmanifold_solver_contact_friction:j0,rawcontactmanifold_solver_contact_point:k0,rawcontactmanifold_solver_contact_restitution:X0,rawcontactmanifold_solver_contact_tangent_velocity:q0,rawcontactmanifold_subshape1:I0,rawcontactmanifold_subshape2:D0,rawcontactpair_collider1:M0,rawcontactpair_collider2:E0,rawcontactpair_contactManifold:A0,rawcontactpair_numContactManifolds:T0,rawdebugrenderpipeline_colors:av,rawdebugrenderpipeline_new:rv,rawdebugrenderpipeline_render:ov,rawdebugrenderpipeline_vertices:sv,rawdeserializedworld_takeBodies:qv,rawdeserializedworld_takeBroadPhase:jv,rawdeserializedworld_takeColliders:Yv,rawdeserializedworld_takeGravity:Vv,rawdeserializedworld_takeImpulseJoints:Kv,rawdeserializedworld_takeIntegrationParameters:kv,rawdeserializedworld_takeIslandManager:Wv,rawdeserializedworld_takeMultibodyJoints:Jv,rawdeserializedworld_takeNarrowPhase:Xv,rawdynamicraycastvehiclecontroller_add_wheel:Z_,rawdynamicraycastvehiclecontroller_chassis:q_,rawdynamicraycastvehiclecontroller_current_vehicle_speed:X_,rawdynamicraycastvehiclecontroller_index_forward_axis:J_,rawdynamicraycastvehiclecontroller_index_up_axis:Y_,rawdynamicraycastvehiclecontroller_new:j_,rawdynamicraycastvehiclecontroller_num_wheels:Q_,rawdynamicraycastvehiclecontroller_set_index_forward_axis:$_,rawdynamicraycastvehiclecontroller_set_index_up_axis:K_,rawdynamicraycastvehiclecontroller_set_wheel_axle_cs:Af,rawdynamicraycastvehiclecontroller_set_wheel_brake:bf,rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs:nf,rawdynamicraycastvehiclecontroller_set_wheel_direction_cs:Ef,rawdynamicraycastvehiclecontroller_set_wheel_engine_force:Sf,rawdynamicraycastvehiclecontroller_set_wheel_friction_slip:Cf,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force:gf,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel:of,rawdynamicraycastvehiclecontroller_set_wheel_radius:lf,rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness:If,rawdynamicraycastvehiclecontroller_set_wheel_steering:xf,rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression:_f,rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation:pf,rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length:sf,rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness:df,rawdynamicraycastvehiclecontroller_update_vehicle:tf,rawdynamicraycastvehiclecontroller_wheel_axle_cs:Tf,rawdynamicraycastvehiclecontroller_wheel_brake:wf,rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs:ef,rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws:Nf,rawdynamicraycastvehiclecontroller_wheel_contact_point_ws:Of,rawdynamicraycastvehiclecontroller_wheel_direction_cs:Mf,rawdynamicraycastvehiclecontroller_wheel_engine_force:yf,rawdynamicraycastvehiclecontroller_wheel_forward_impulse:Lf,rawdynamicraycastvehiclecontroller_wheel_friction_slip:Rf,rawdynamicraycastvehiclecontroller_wheel_ground_object:Gf,rawdynamicraycastvehiclecontroller_wheel_hard_point_ws:zf,rawdynamicraycastvehiclecontroller_wheel_is_in_contact:Hf,rawdynamicraycastvehiclecontroller_wheel_max_suspension_force:mf,rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel:af,rawdynamicraycastvehiclecontroller_wheel_radius:cf,rawdynamicraycastvehiclecontroller_wheel_rotation:Df,rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness:Pf,rawdynamicraycastvehiclecontroller_wheel_side_impulse:Ff,rawdynamicraycastvehiclecontroller_wheel_steering:vf,rawdynamicraycastvehiclecontroller_wheel_suspension_compression:uf,rawdynamicraycastvehiclecontroller_wheel_suspension_force:Uf,rawdynamicraycastvehiclecontroller_wheel_suspension_length:Bf,rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation:ff,rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length:rf,rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness:hf,raweventqueue_clear:wv,raweventqueue_drainCollisionEvents:mv,raweventqueue_drainContactForceEvents:gv,raweventqueue_new:pv,rawgenericjoint_fixed:Vp,rawgenericjoint_generic:Op,rawgenericjoint_prismatic:Gp,rawgenericjoint_revolute:kp,rawgenericjoint_rope:zp,rawgenericjoint_spherical:Hp,rawgenericjoint_spring:Bp,rawimpulsejointset_contains:_p,rawimpulsejointset_createJoint:hp,rawimpulsejointset_forEachJointAttachedToRigidBody:pp,rawimpulsejointset_forEachJointHandle:fp,rawimpulsejointset_jointAnchor1:Yf,rawimpulsejointset_jointAnchor2:Kf,rawimpulsejointset_jointBodyHandle1:Wf,rawimpulsejointset_jointBodyHandle2:jf,rawimpulsejointset_jointConfigureMotor:op,rawimpulsejointset_jointConfigureMotorModel:rp,rawimpulsejointset_jointConfigureMotorPosition:ap,rawimpulsejointset_jointConfigureMotorVelocity:sp,rawimpulsejointset_jointContactsEnabled:Zf,rawimpulsejointset_jointFrameX1:Xf,rawimpulsejointset_jointFrameX2:qf,rawimpulsejointset_jointLimitsEnabled:tp,rawimpulsejointset_jointLimitsMax:np,rawimpulsejointset_jointLimitsMin:ep,rawimpulsejointset_jointSetAnchor1:Jf,rawimpulsejointset_jointSetAnchor2:$f,rawimpulsejointset_jointSetContactsEnabled:Qf,rawimpulsejointset_jointSetLimits:ip,rawimpulsejointset_jointType:kf,rawimpulsejointset_len:up,rawimpulsejointset_new:lp,rawimpulsejointset_remove:dp,rawintegrationparameters_contact_erp:bp,rawintegrationparameters_dt:wp,rawintegrationparameters_lengthUnit:Lx,rawintegrationparameters_maxCcdSubsteps:Mp,rawintegrationparameters_minIslandSize:Sp,rawintegrationparameters_new:gp,rawintegrationparameters_normalizedAllowedLinearError:vp,rawintegrationparameters_normalizedPredictionDistance:xp,rawintegrationparameters_numInternalPgsIterations:px,rawintegrationparameters_numSolverIterations:yp,rawintegrationparameters_set_contact_natural_frequency:Tp,rawintegrationparameters_set_dt:Ep,rawintegrationparameters_set_lengthUnit:Dp,rawintegrationparameters_set_maxCcdSubsteps:Ip,rawintegrationparameters_set_minIslandSize:Pp,rawintegrationparameters_set_normalizedAllowedLinearError:Ap,rawintegrationparameters_set_normalizedPredictionDistance:Rp,rawintegrationparameters_set_numInternalPgsIterations:nx,rawintegrationparameters_set_numSolverIterations:Cp,rawislandmanager_forEachActiveRigidBodyHandle:Up,rawislandmanager_new:Fp,rawkinematiccharactercontroller_autostepEnabled:o_,rawkinematiccharactercontroller_autostepIncludesDynamicBodies:a_,rawkinematiccharactercontroller_autostepMaxHeight:r_,rawkinematiccharactercontroller_autostepMinWidth:s_,rawkinematiccharactercontroller_computeColliderMovement:w_,rawkinematiccharactercontroller_computedCollision:y_,rawkinematiccharactercontroller_computedGrounded:v_,rawkinematiccharactercontroller_computedMovement:b_,rawkinematiccharactercontroller_disableAutostep:l_,rawkinematiccharactercontroller_disableSnapToGround:m_,rawkinematiccharactercontroller_enableAutostep:c_,rawkinematiccharactercontroller_enableSnapToGround:p_,rawkinematiccharactercontroller_maxSlopeClimbAngle:h_,rawkinematiccharactercontroller_minSlopeSlideAngle:u_,rawkinematiccharactercontroller_new:Ju,rawkinematiccharactercontroller_normalNudgeFactor:Zu,rawkinematiccharactercontroller_numComputedCollisions:x_,rawkinematiccharactercontroller_offset:t_,rawkinematiccharactercontroller_setMaxSlopeClimbAngle:d_,rawkinematiccharactercontroller_setMinSlopeSlideAngle:__,rawkinematiccharactercontroller_setNormalNudgeFactor:Qu,rawkinematiccharactercontroller_setOffset:e_,rawkinematiccharactercontroller_setSlideEnabled:i_,rawkinematiccharactercontroller_setUp:$u,rawkinematiccharactercontroller_slideEnabled:n_,rawkinematiccharactercontroller_snapToGroundDistance:f_,rawkinematiccharactercontroller_snapToGroundEnabled:g_,rawkinematiccharactercontroller_up:sx,rawmultibodyjointset_contains:rm,rawmultibodyjointset_createJoint:nm,rawmultibodyjointset_forEachJointAttachedToRigidBody:am,rawmultibodyjointset_forEachJointHandle:sm,rawmultibodyjointset_jointAnchor1:qp,rawmultibodyjointset_jointAnchor2:Yp,rawmultibodyjointset_jointContactsEnabled:Kp,rawmultibodyjointset_jointFrameX1:jp,rawmultibodyjointset_jointFrameX2:Xp,rawmultibodyjointset_jointLimitsEnabled:$p,rawmultibodyjointset_jointLimitsMax:Qp,rawmultibodyjointset_jointLimitsMin:Zp,rawmultibodyjointset_jointSetContactsEnabled:Jp,rawmultibodyjointset_jointType:Wp,rawmultibodyjointset_new:em,rawmultibodyjointset_remove:im,rawnarrowphase_contact_pair:v0,rawnarrowphase_contact_pairs_with:b0,rawnarrowphase_intersection_pair:y0,rawnarrowphase_intersection_pairs_with:x0,rawnarrowphase_new:w0,rawphysicspipeline_is_profiler_enabled:yv,rawphysicspipeline_new:vv,rawphysicspipeline_set_profiler_enabled:xv,rawphysicspipeline_step:zv,rawphysicspipeline_stepWithEvents:Hv,rawphysicspipeline_timing_broad_phase:Ev,rawphysicspipeline_timing_ccd:Dv,rawphysicspipeline_timing_ccd_broad_phase:Fv,rawphysicspipeline_timing_ccd_narrow_phase:Uv,rawphysicspipeline_timing_ccd_solver:Nv,rawphysicspipeline_timing_ccd_toi_computation:Lv,rawphysicspipeline_timing_collision_detection:Mv,rawphysicspipeline_timing_island_construction:Ov,rawphysicspipeline_timing_narrow_phase:Tv,rawphysicspipeline_timing_solver:Av,rawphysicspipeline_timing_step:Sv,rawphysicspipeline_timing_user_changes:Bv,rawphysicspipeline_timing_velocity_assembly:Rv,rawphysicspipeline_timing_velocity_resolution:Cv,rawphysicspipeline_timing_velocity_update:Pv,rawphysicspipeline_timing_velocity_writeback:Iv,rawpidcontroller_angular_correction:k_,rawpidcontroller_apply_angular_correction:G_,rawpidcontroller_apply_linear_correction:H_,rawpidcontroller_linear_correction:V_,rawpidcontroller_new:F_,rawpidcontroller_reset_integrals:z_,rawpidcontroller_set_axes_mask:B_,rawpidcontroller_set_kd:O_,rawpidcontroller_set_ki:N_,rawpidcontroller_set_kp:U_,rawpointcolliderprojection_colliderHandle:Z0,rawpointcolliderprojection_featureId:nb,rawpointcolliderprojection_featureType:eb,rawpointcolliderprojection_isInside:tb,rawpointcolliderprojection_point:Q0,rawpointprojection_isInside:J0,rawpointprojection_point:K0,rawraycolliderhit_colliderHandle:xx,rawraycolliderhit_timeOfImpact:Ex,rawraycolliderintersection_colliderHandle:wx,rawraycolliderintersection_featureId:ex,rawraycolliderintersection_featureType:vx,rawraycolliderintersection_normal:hx,rawraycolliderintersection_time_of_impact:yx,rawrayintersection_featureId:tx,rawrayintersection_featureType:gx,rawrayintersection_normal:lx,rawrayintersection_time_of_impact:bx,rawrigidbodyset_contains:Ag,rawrigidbodyset_createRigidBody:Mg,rawrigidbodyset_forEachRigidBodyHandle:Rg,rawrigidbodyset_len:Tg,rawrigidbodyset_new:Sg,rawrigidbodyset_propagateModifiedBodyPositionsToColliders:Cg,rawrigidbodyset_rbAddForce:hg,rawrigidbodyset_rbAddForceAtPoint:fg,rawrigidbodyset_rbAddTorque:ug,rawrigidbodyset_rbAdditionalSolverIterations:mg,rawrigidbodyset_rbAngularDamping:eg,rawrigidbodyset_rbAngvel:Mm,rawrigidbodyset_rbApplyImpulse:dg,rawrigidbodyset_rbApplyImpulseAtPoint:pg,rawrigidbodyset_rbApplyTorqueImpulse:_g,rawrigidbodyset_rbBodyType:Km,rawrigidbodyset_rbCollider:Ym,rawrigidbodyset_rbDominanceGroup:Pm,rawrigidbodyset_rbEffectiveAngularInertia:km,rawrigidbodyset_rbEffectiveInvMass:Nm,rawrigidbodyset_rbEffectiveWorldInvInertia:Vm,rawrigidbodyset_rbEnableCcd:Dm,rawrigidbodyset_rbGravityScale:ag,rawrigidbodyset_rbInvMass:Um,rawrigidbodyset_rbInvPrincipalInertia:zm,rawrigidbodyset_rbIsCcdEnabled:jm,rawrigidbodyset_rbIsDynamic:Qm,rawrigidbodyset_rbIsEnabled:sg,rawrigidbodyset_rbIsFixed:$m,rawrigidbodyset_rbIsKinematic:Zm,rawrigidbodyset_rbIsMoving:dm,rawrigidbodyset_rbIsSleeping:hm,rawrigidbodyset_rbLinearDamping:tg,rawrigidbodyset_rbLinvel:Sm,rawrigidbodyset_rbLocalCom:Om,rawrigidbodyset_rbLockRotations:Rm,rawrigidbodyset_rbLockTranslations:Tm,rawrigidbodyset_rbMass:Fm,rawrigidbodyset_rbNextRotation:_m,rawrigidbodyset_rbNextTranslation:um,rawrigidbodyset_rbNumColliders:qm,rawrigidbodyset_rbPrincipalInertia:Gm,rawrigidbodyset_rbPrincipalInertiaLocalFrame:Hm,rawrigidbodyset_rbRecomputeMassPropertiesFromColliders:vm,rawrigidbodyset_rbResetForces:cg,rawrigidbodyset_rbResetTorques:lg,rawrigidbodyset_rbRotation:cm,rawrigidbodyset_rbSetAdditionalMass:xm,rawrigidbodyset_rbSetAdditionalMassProperties:ym,rawrigidbodyset_rbSetAdditionalSolverIterations:gg,rawrigidbodyset_rbSetAngularDamping:ig,rawrigidbodyset_rbSetAngvel:gm,rawrigidbodyset_rbSetBodyType:Jm,rawrigidbodyset_rbSetDominanceGroup:Im,rawrigidbodyset_rbSetEnabled:rg,rawrigidbodyset_rbSetEnabledRotations:Cm,rawrigidbodyset_rbSetEnabledTranslations:Am,rawrigidbodyset_rbSetGravityScale:og,rawrigidbodyset_rbSetLinearDamping:ng,rawrigidbodyset_rbSetLinvel:mm,rawrigidbodyset_rbSetNextKinematicRotation:bm,rawrigidbodyset_rbSetNextKinematicTranslation:wm,rawrigidbodyset_rbSetRotation:pm,rawrigidbodyset_rbSetSoftCcdPrediction:Lm,rawrigidbodyset_rbSetTranslation:fm,rawrigidbodyset_rbSetUserData:bg,rawrigidbodyset_rbSleep:lm,rawrigidbodyset_rbSoftCcdPrediction:Xm,rawrigidbodyset_rbTranslation:om,rawrigidbodyset_rbUserData:wg,rawrigidbodyset_rbUserForce:vg,rawrigidbodyset_rbUserTorque:xg,rawrigidbodyset_rbVelocityAtPoint:Em,rawrigidbodyset_rbWakeUp:Wm,rawrigidbodyset_rbWorldCom:Bm,rawrigidbodyset_remove:Eg,rawrotation_identity:Wb,rawrotation_new:kb,rawrotation_w:jb,rawrotation_x:Tx,rawrotation_y:Ax,rawrotation_z:Rx,rawsdpmatrix3_elements:nv,rawserializationpipeline_deserializeAll:Zv,rawserializationpipeline_new:Gx,rawserializationpipeline_serializeAll:$v,rawshape_ball:cb,rawshape_capsule:hb,rawshape_castRay:Lb,rawshape_castRayAndGetNormal:Fb,rawshape_castShape:Ab,rawshape_cone:_b,rawshape_contactShape:Cb,rawshape_containsPoint:Pb,rawshape_convexHull:Sb,rawshape_convexMesh:Eb,rawshape_cuboid:ab,rawshape_cylinder:db,rawshape_halfspace:lb,rawshape_heightfield:bb,rawshape_intersectsRay:Db,rawshape_intersectsShape:Rb,rawshape_polyline:gb,rawshape_projectPoint:Ib,rawshape_roundCone:fb,rawshape_roundConvexHull:Mb,rawshape_roundConvexMesh:Tb,rawshape_roundCuboid:ob,rawshape_roundCylinder:ub,rawshape_roundTriangle:yb,rawshape_segment:vb,rawshape_triangle:xb,rawshape_trimesh:wb,rawshape_voxels:pb,rawshape_voxelsFromPoints:mb,rawshapecasthit_normal1:Ob,rawshapecasthit_normal2:Bb,rawshapecasthit_time_of_impact:Sx,rawshapecasthit_witness1:Nb,rawshapecasthit_witness2:fx,rawshapecontact_distance:mx,rawshapecontact_normal1:dx,rawshapecontact_normal2:ax,rawshapecontact_point1:ox,rawshapecontact_point2:cx,rawvector_new:qb,rawvector_set_x:ix,rawvector_set_y:Yb,rawvector_set_z:Kb,rawvector_x:Cx,rawvector_xyz:Jb,rawvector_xzy:Qb,rawvector_y:Px,rawvector_yxz:$b,rawvector_yzx:tv,rawvector_z:Ix,rawvector_zero:Xb,rawvector_zxy:Zb,rawvector_zyx:ev,reserve_memory:rx,version:Yu},Symbol.toStringTag,{value:"Module"}));eu(Xx);let Ah=class{constructor(t,e,n){this.x=t,this.y=e,this.z=n}};class N{static new(t,e,n){return new Ah(t,e,n)}static intoRaw(t){return new F(t.x,t.y,t.z)}static zeros(){return N.new(0,0,0)}static fromRaw(t){if(!t)return null;let e=N.new(t.x,t.y,t.z);return t.free(),e}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z}}let Ga=class{constructor(t,e,n,r){this.x=t,this.y=e,this.z=n,this.w=r}};class Ht{static identity(){return new Ga(0,0,0,1)}static fromRaw(t){if(!t)return null;let e=new Ga(t.x,t.y,t.z,t.w);return t.free(),e}static intoRaw(t){return new kt(t.x,t.y,t.z,t.w)}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w}}class Rh{get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}constructor(t){this.elements=t}}class Va{static fromRaw(t){const e=new Rh(t.elements());return t.free(),e}}var dn;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased"})(dn||(dn={}));class ka{constructor(t,e,n){this.rawSet=t,this.colliderSet=e,this.handle=n}finalizeDeserialization(t){this.colliderSet=t}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(t,e){return this.rawSet.rbLockTranslations(this.handle,t,e)}lockRotations(t,e){return this.rawSet.rbLockRotations(this.handle,t,e)}setEnabledTranslations(t,e,n,r){return this.rawSet.rbSetEnabledTranslations(this.handle,t,e,n,r)}restrictTranslations(t,e,n,r){this.setEnabledTranslations(t,e,n,r)}setEnabledRotations(t,e,n,r){return this.rawSet.rbSetEnabledRotations(this.handle,t,e,n,r)}restrictRotations(t,e,n,r){this.setEnabledRotations(t,e,n,r)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(t){this.rawSet.rbSetDominanceGroup(this.handle,t)}additionalSolverIterations(){return this.rawSet.rbAdditionalSolverIterations(this.handle)}setAdditionalSolverIterations(t){this.rawSet.rbSetAdditionalSolverIterations(this.handle,t)}enableCcd(t){this.rawSet.rbEnableCcd(this.handle,t)}setSoftCcdPrediction(t){this.rawSet.rbSetSoftCcdPrediction(this.handle,t)}softCcdPrediction(){return this.rawSet.rbSoftCcdPrediction(this.handle)}translation(){let t=this.rawSet.rbTranslation(this.handle);return N.fromRaw(t)}rotation(){let t=this.rawSet.rbRotation(this.handle);return Ht.fromRaw(t)}nextTranslation(){let t=this.rawSet.rbNextTranslation(this.handle);return N.fromRaw(t)}nextRotation(){let t=this.rawSet.rbNextRotation(this.handle);return Ht.fromRaw(t)}setTranslation(t,e){this.rawSet.rbSetTranslation(this.handle,t.x,t.y,t.z,e)}setLinvel(t,e){let n=N.intoRaw(t);this.rawSet.rbSetLinvel(this.handle,n,e),n.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(t,e){this.rawSet.rbSetGravityScale(this.handle,t,e)}setRotation(t,e){this.rawSet.rbSetRotation(this.handle,t.x,t.y,t.z,t.w,e)}setAngvel(t,e){let n=N.intoRaw(t);this.rawSet.rbSetAngvel(this.handle,n,e),n.free()}setNextKinematicTranslation(t){this.rawSet.rbSetNextKinematicTranslation(this.handle,t.x,t.y,t.z)}setNextKinematicRotation(t){this.rawSet.rbSetNextKinematicRotation(this.handle,t.x,t.y,t.z,t.w)}linvel(){return N.fromRaw(this.rawSet.rbLinvel(this.handle))}velocityAtPoint(t){const e=N.intoRaw(t);let n=N.fromRaw(this.rawSet.rbVelocityAtPoint(this.handle,e));return e.free(),n}angvel(){return N.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return N.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return N.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return N.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertia(){return N.fromRaw(this.rawSet.rbInvPrincipalInertia(this.handle))}principalInertia(){return N.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return Ht.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertia(){return Va.fromRaw(this.rawSet.rbEffectiveWorldInvInertia(this.handle))}effectiveAngularInertia(){return Va.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(t){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,t))}setEnabled(t){this.rawSet.rbSetEnabled(this.handle,t)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(t,e){return this.rawSet.rbSetBodyType(this.handle,t,e)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(t){this.rawSet.rbSetLinearDamping(this.handle,t)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(t,e){this.rawSet.rbSetAdditionalMass(this.handle,t,e)}setAdditionalMassProperties(t,e,n,r,s){let a=N.intoRaw(e),o=N.intoRaw(n),c=Ht.intoRaw(r);this.rawSet.rbSetAdditionalMassProperties(this.handle,t,a,o,c,s),a.free(),o.free(),c.free()}setAngularDamping(t){this.rawSet.rbSetAngularDamping(this.handle,t)}resetForces(t){this.rawSet.rbResetForces(this.handle,t)}resetTorques(t){this.rawSet.rbResetTorques(this.handle,t)}addForce(t,e){const n=N.intoRaw(t);this.rawSet.rbAddForce(this.handle,n,e),n.free()}applyImpulse(t,e){const n=N.intoRaw(t);this.rawSet.rbApplyImpulse(this.handle,n,e),n.free()}addTorque(t,e){const n=N.intoRaw(t);this.rawSet.rbAddTorque(this.handle,n,e),n.free()}applyTorqueImpulse(t,e){const n=N.intoRaw(t);this.rawSet.rbApplyTorqueImpulse(this.handle,n,e),n.free()}addForceAtPoint(t,e,n){const r=N.intoRaw(t),s=N.intoRaw(e);this.rawSet.rbAddForceAtPoint(this.handle,r,s,n),r.free(),s.free()}applyImpulseAtPoint(t,e,n){const r=N.intoRaw(t),s=N.intoRaw(e);this.rawSet.rbApplyImpulseAtPoint(this.handle,r,s,n),r.free(),s.free()}userForce(){return N.fromRaw(this.rawSet.rbUserForce(this.handle))}userTorque(){return N.fromRaw(this.rawSet.rbUserTorque(this.handle))}}class vn{constructor(t){this.enabled=!0,this.status=t,this.translation=N.zeros(),this.rotation=Ht.identity(),this.gravityScale=1,this.linvel=N.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=N.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=N.zeros(),this.principalAngularInertia=N.zeros(),this.angularInertiaLocalFrame=Ht.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.softCcdPrediction=0,this.dominanceGroup=0,this.additionalSolverIterations=0}static dynamic(){return new vn(dn.Dynamic)}static kinematicPositionBased(){return new vn(dn.KinematicPositionBased)}static kinematicVelocityBased(){return new vn(dn.KinematicVelocityBased)}static fixed(){return new vn(dn.Fixed)}static newDynamic(){return new vn(dn.Dynamic)}static newKinematicPositionBased(){return new vn(dn.KinematicPositionBased)}static newKinematicVelocityBased(){return new vn(dn.KinematicVelocityBased)}static newStatic(){return new vn(dn.Fixed)}setDominanceGroup(t){return this.dominanceGroup=t,this}setAdditionalSolverIterations(t){return this.additionalSolverIterations=t,this}setEnabled(t){return this.enabled=t,this}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return Ht.copy(this.rotation,t),this}setGravityScale(t){return this.gravityScale=t,this}setAdditionalMass(t){return this.mass=t,this.massOnly=!0,this}setLinvel(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:t,y:e,z:n},this}setAngvel(t){return N.copy(this.angvel,t),this}setAdditionalMassProperties(t,e,n,r){return this.mass=t,N.copy(this.centerOfMass,e),N.copy(this.principalAngularInertia,n),Ht.copy(this.angularInertiaLocalFrame,r),this.massOnly=!1,this}enabledTranslations(t,e,n){return this.translationsEnabledX=t,this.translationsEnabledY=e,this.translationsEnabledZ=n,this}restrictTranslations(t,e,n){return this.enabledTranslations(t,e,n)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(t,e,n){return this.rotationsEnabledX=t,this.rotationsEnabledY=e,this.rotationsEnabledZ=n,this}restrictRotations(t,e,n){return this.enabledRotations(t,e,n)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(t){return this.linearDamping=t,this}setAngularDamping(t){return this.angularDamping=t,this}setCanSleep(t){return this.canSleep=t,this}setSleeping(t){return this.sleeping=t,this}setCcdEnabled(t){return this.ccdEnabled=t,this}setSoftCcdPrediction(t){return this.softCcdPrediction=t,this}setUserData(t){return this.userData=t,this}}class Hs{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(t,e){let n=this.index(t);for(;this.data.length<=n;)this.data.push(null);this.data[n]==null&&(this.size+=1),this.data[n]=e}len(){return this.size}delete(t){let e=this.index(t);e<this.data.length&&(this.data[e]!=null&&(this.size-=1),this.data[e]=null)}clear(){this.data=new Array}get(t){let e=this.index(t);return e<this.data.length?this.data[e]:null}forEach(t){for(const e of this.data)e!=null&&t(e)}getAll(){return this.data.filter(t=>t!=null)}index(t){return this.fconv[0]=t,this.uconv[0]}}class Ch{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new fe,this.map=new Hs,t&&t.forEachRigidBodyHandle(e=>{this.map.set(e,new ka(t,null,e))})}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createRigidBody(t,e){let n=N.intoRaw(e.translation),r=Ht.intoRaw(e.rotation),s=N.intoRaw(e.linvel),a=N.intoRaw(e.centerOfMass),o=N.intoRaw(e.angvel),c=N.intoRaw(e.principalAngularInertia),l=Ht.intoRaw(e.angularInertiaLocalFrame),u=this.raw.createRigidBody(e.enabled,n,r,e.gravityScale,e.mass,e.massOnly,a,s,o,c,l,e.translationsEnabledX,e.translationsEnabledY,e.translationsEnabledZ,e.rotationsEnabledX,e.rotationsEnabledY,e.rotationsEnabledZ,e.linearDamping,e.angularDamping,e.status,e.canSleep,e.sleeping,e.softCcdPrediction,e.ccdEnabled,e.dominanceGroup,e.additionalSolverIterations);n.free(),r.free(),s.free(),a.free(),o.free(),c.free(),l.free();const f=new ka(this.raw,t,u);return f.userData=e.userData,this.map.set(u,f),f}remove(t,e,n,r,s){for(let a=0;a<this.raw.rbNumColliders(t);a+=1)n.unmap(this.raw.rbCollider(t,a));r.forEachJointHandleAttachedToRigidBody(t,a=>r.unmap(a)),s.forEachJointHandleAttachedToRigidBody(t,a=>s.unmap(a)),this.raw.remove(t,e.raw,n.raw,r.raw,s.raw),this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachActiveRigidBody(t,e){t.forEachActiveRigidBodyHandle(n=>{e(this.get(n))})}getAll(){return this.map.getAll()}}class Ph{constructor(t){this.raw=t||new Si}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get contact_erp(){return this.raw.contact_erp}get lengthUnit(){return this.raw.lengthUnit}get normalizedAllowedLinearError(){return this.raw.normalizedAllowedLinearError}get normalizedPredictionDistance(){return this.raw.normalizedPredictionDistance}get numSolverIterations(){return this.raw.numSolverIterations}get numInternalPgsIterations(){return this.raw.numInternalPgsIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(t){this.raw.dt=t}set contact_natural_frequency(t){this.raw.contact_natural_frequency=t}set lengthUnit(t){this.raw.lengthUnit=t}set normalizedAllowedLinearError(t){this.raw.normalizedAllowedLinearError=t}set normalizedPredictionDistance(t){this.raw.normalizedPredictionDistance=t}set numSolverIterations(t){this.raw.numSolverIterations=t}set numInternalPgsIterations(t){this.raw.numInternalPgsIterations=t}set minIslandSize(t){this.raw.minIslandSize=t}set maxCcdSubsteps(t){this.raw.maxCcdSubsteps=t}}var Wa;(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Rope=3]="Rope",i[i.Spring=4]="Spring",i[i.Spherical=5]="Spherical",i[i.Generic=6]="Generic"})(Wa||(Wa={}));var ja;(function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"})(ja||(ja={}));var Xa;(function(i){i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ"})(Xa||(Xa={}));class pn{constructor(t,e,n){this.rawSet=t,this.bodySet=e,this.handle=n}static newTyped(t,e,n){switch(t.jointType(n)){case un.Revolute:return new Uh(t,e,n);case un.Prismatic:return new Fh(t,e,n);case un.Fixed:return new Ih(t,e,n);case un.Spring:return new Lh(t,e,n);case un.Rope:return new Dh(t,e,n);case un.Spherical:return new Oh(t,e,n);case un.Generic:return new Nh(t,e,n);default:return new pn(t,e,n)}}finalizeDeserialization(t){this.bodySet=t}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return Ht.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return Ht.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return N.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return N.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(t){const e=N.intoRaw(t);this.rawSet.jointSetAnchor1(this.handle,e),e.free()}setAnchor2(t){const e=N.intoRaw(t);this.rawSet.jointSetAnchor2(this.handle,e),e.free()}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class tc extends pn{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(t,e){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),t,e)}configureMotorModel(t){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),t)}configureMotorVelocity(t,e){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),t,e)}configureMotorPosition(t,e,n){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),t,e,n)}configureMotor(t,e,n,r){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),t,e,n,r)}}class Ih extends pn{}class Dh extends pn{}class Lh extends pn{}class Fh extends tc{rawAxis(){return Fs.LinX}}class Uh extends tc{rawAxis(){return Fs.AngX}}class Nh extends pn{}class Oh extends pn{}class Bh{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new Vn,this.map=new Hs,t&&t.forEachJointHandle(e=>{this.map.set(e,pn.newTyped(t,null,e))})}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createJoint(t,e,n,r,s){const a=e.intoRaw(),o=this.raw.createJoint(a,n,r,s);a.free();let c=pn.newTyped(this.raw,t,o);return this.map.set(o,c),c}remove(t,e){this.raw.remove(t,e),this.unmap(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}class si{constructor(t,e){this.rawSet=t,this.handle=e}static newTyped(t,e){switch(t.jointType(e)){case un.Revolute:return new Gh(t,e);case un.Prismatic:return new Hh(t,e);case un.Fixed:return new zh(t,e);case un.Spherical:return new Vh(t,e);default:return new si(t,e)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class ec extends si{}class zh extends si{}class Hh extends ec{rawAxis(){return Fs.LinX}}class Gh extends ec{rawAxis(){return Fs.AngX}}class Vh extends si{}class kh{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new Wn,this.map=new Hs,t&&t.forEachJointHandle(e=>{this.map.set(e,si.newTyped(this.raw,e))})}createJoint(t,e,n,r){const s=t.intoRaw(),a=this.raw.createJoint(s,e,n,r);s.free();let o=si.newTyped(this.raw,a);return this.map.set(a,o),o}remove(t,e){this.raw.remove(t,e),this.map.delete(t)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}getAll(){return this.map.getAll()}}var wr;(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(wr||(wr={}));class Wh{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Ha}}class jh{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new kn}forEachActiveRigidBodyHandle(t){this.raw.forEachActiveRigidBodyHandle(t)}}var ji;(function(i){i[i.Vertex=0]="Vertex",i[i.Edge=1]="Edge",i[i.Face=2]="Face",i[i.Unknown=3]="Unknown"})(ji||(ji={}));class Tr{constructor(t,e,n,r){this.featureType=ji.Unknown,this.featureId=void 0,this.timeOfImpact=t,this.normal=e,r!==void 0&&(this.featureId=r),n!==void 0&&(this.featureType=n)}static fromRaw(t){if(!t)return null;const e=new Tr(t.time_of_impact(),N.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),e}}class br{constructor(t,e,n,r,s){this.featureType=ji.Unknown,this.featureId=void 0,this.collider=t,this.timeOfImpact=e,this.normal=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(t,e){if(!e)return null;const n=new br(t.get(e.colliderHandle()),e.time_of_impact(),N.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),n}}class Gs{constructor(t,e){this.collider=t,this.timeOfImpact=e}static fromRaw(t,e){if(!e)return null;const n=new Gs(t.get(e.colliderHandle()),e.timeOfImpact());return e.free(),n}}class Ar{constructor(t,e){this.point=t,this.isInside=e}static fromRaw(t){if(!t)return null;const e=new Ar(N.fromRaw(t.point()),t.isInside());return t.free(),e}}class vr{constructor(t,e,n,r,s){this.featureType=ji.Unknown,this.featureId=void 0,this.collider=t,this.point=e,this.isInside=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(t,e){if(!e)return null;const n=new vr(t.get(e.colliderHandle()),N.fromRaw(e.point()),e.isInside(),e.featureType(),e.featureId());return e.free(),n}}class Zi{constructor(t,e,n,r,s){this.time_of_impact=t,this.witness1=e,this.witness2=n,this.normal1=r,this.normal2=s}static fromRaw(t,e){if(!e)return null;const n=new Zi(e.time_of_impact(),N.fromRaw(e.witness1()),N.fromRaw(e.witness2()),N.fromRaw(e.normal1()),N.fromRaw(e.normal2()));return e.free(),n}}class Rr extends Zi{constructor(t,e,n,r,s,a){super(e,n,r,s,a),this.collider=t}static fromRaw(t,e){if(!e)return null;const n=new Rr(t.get(e.colliderHandle()),e.time_of_impact(),N.fromRaw(e.witness1()),N.fromRaw(e.witness2()),N.fromRaw(e.normal1()),N.fromRaw(e.normal2()));return e.free(),n}}class Xh{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Gn}castRay(t,e,n,r,s,a,o,c,l,u,f){let d=N.intoRaw(r.origin),p=N.intoRaw(r.dir),w=Gs.fromRaw(n,this.raw.castRay(t.raw,e.raw,n.raw,d,p,s,a,o,c,l,u,f));return d.free(),p.free(),w}castRayAndGetNormal(t,e,n,r,s,a,o,c,l,u,f){let d=N.intoRaw(r.origin),p=N.intoRaw(r.dir),w=br.fromRaw(n,this.raw.castRayAndGetNormal(t.raw,e.raw,n.raw,d,p,s,a,o,c,l,u,f));return d.free(),p.free(),w}intersectionsWithRay(t,e,n,r,s,a,o,c,l,u,f,d){let p=N.intoRaw(r.origin),w=N.intoRaw(r.dir),S=g=>o(br.fromRaw(n,g));this.raw.intersectionsWithRay(t.raw,e.raw,n.raw,p,w,s,a,S,c,l,u,f,d),p.free(),w.free()}intersectionWithShape(t,e,n,r,s,a,o,c,l,u,f){let d=N.intoRaw(r),p=Ht.intoRaw(s),w=a.intoRaw(),S=this.raw.intersectionWithShape(t.raw,e.raw,n.raw,d,p,w,o,c,l,u,f);return d.free(),p.free(),w.free(),S}projectPoint(t,e,n,r,s,a,o,c,l,u){let f=N.intoRaw(r),d=vr.fromRaw(n,this.raw.projectPoint(t.raw,e.raw,n.raw,f,s,a,o,c,l,u));return f.free(),d}projectPointAndGetFeature(t,e,n,r,s,a,o,c,l){let u=N.intoRaw(r),f=vr.fromRaw(n,this.raw.projectPointAndGetFeature(t.raw,e.raw,n.raw,u,s,a,o,c,l));return u.free(),f}intersectionsWithPoint(t,e,n,r,s,a,o,c,l,u){let f=N.intoRaw(r);this.raw.intersectionsWithPoint(t.raw,e.raw,n.raw,f,s,a,o,c,l,u),f.free()}castShape(t,e,n,r,s,a,o,c,l,u,f,d,p,w,S){let g=N.intoRaw(r),m=Ht.intoRaw(s),y=N.intoRaw(a),T=o.intoRaw(),E=Rr.fromRaw(n,this.raw.castShape(t.raw,e.raw,n.raw,g,m,y,T,c,l,u,f,d,p,w,S));return g.free(),m.free(),y.free(),T.free(),E}intersectionsWithShape(t,e,n,r,s,a,o,c,l,u,f,d){let p=N.intoRaw(r),w=Ht.intoRaw(s),S=a.intoRaw();this.raw.intersectionsWithShape(t.raw,e.raw,n.raw,p,w,S,o,c,l,u,f,d),p.free(),w.free(),S.free()}collidersWithAabbIntersectingAabb(t,e,n,r,s,a){let o=N.intoRaw(r),c=N.intoRaw(s);this.raw.collidersWithAabbIntersectingAabb(t.raw,e.raw,n.raw,o,c,a),o.free(),c.free()}}class qh{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Re,this.tempManifold=new Yh(null)}contactPairsWith(t,e){this.raw.contact_pairs_with(t,e)}intersectionPairsWith(t,e){this.raw.intersection_pairs_with(t,e)}contactPair(t,e,n){const r=this.raw.contact_pair(t,e);if(r){const s=r.collider1()!=t;let a;for(a=0;a<r.numContactManifolds();++a)this.tempManifold.raw=r.contactManifold(a),this.tempManifold.raw&&n(this.tempManifold,s),this.tempManifold.free();r.free()}}intersectionPair(t,e){return this.raw.intersection_pair(t,e)}}class Yh{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t}normal(){return N.fromRaw(this.raw.normal())}localNormal1(){return N.fromRaw(this.raw.local_n1())}localNormal2(){return N.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(t){return N.fromRaw(this.raw.contact_local_p1(t))}localContactPoint2(t){return N.fromRaw(this.raw.contact_local_p2(t))}contactDist(t){return this.raw.contact_dist(t)}contactFid1(t){return this.raw.contact_fid1(t)}contactFid2(t){return this.raw.contact_fid2(t)}contactImpulse(t){return this.raw.contact_impulse(t)}contactTangentImpulseX(t){return this.raw.contact_tangent_impulse_x(t)}contactTangentImpulseY(t){return this.raw.contact_tangent_impulse_y(t)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(t){return N.fromRaw(this.raw.solver_contact_point(t))}solverContactDist(t){return this.raw.solver_contact_dist(t)}solverContactFriction(t){return this.raw.solver_contact_friction(t)}solverContactRestitution(t){return this.raw.solver_contact_restitution(t)}solverContactTangentVelocity(t){return N.fromRaw(this.raw.solver_contact_tangent_velocity(t))}}class Xi{constructor(t,e,n,r,s){this.distance=t,this.point1=e,this.point2=n,this.normal1=r,this.normal2=s}static fromRaw(t){if(!t)return null;const e=new Xi(t.distance(),N.fromRaw(t.point1()),N.fromRaw(t.point2()),N.fromRaw(t.normal1()),N.fromRaw(t.normal2()));return t.free(),e}}class Ce{static fromRaw(t,e){const n=t.coShapeType(e);let r,s,a,o,c,l,u;switch(n){case Fe.Ball:return new nc(t.coRadius(e));case Fe.Cuboid:return r=t.coHalfExtents(e),new ic(r.x,r.y,r.z);case Fe.RoundCuboid:return r=t.coHalfExtents(e),s=t.coRoundRadius(e),new rc(r.x,r.y,r.z,s);case Fe.Capsule:return c=t.coHalfHeight(e),l=t.coRadius(e),new sc(c,l);case Fe.Segment:return a=t.coVertices(e),new ac(N.new(a[0],a[1],a[2]),N.new(a[3],a[4],a[5]));case Fe.Polyline:return a=t.coVertices(e),o=t.coIndices(e),new lc(a,o);case Fe.Triangle:return a=t.coVertices(e),new oc(N.new(a[0],a[1],a[2]),N.new(a[3],a[4],a[5]),N.new(a[6],a[7],a[8]));case Fe.RoundTriangle:return a=t.coVertices(e),s=t.coRoundRadius(e),new cc(N.new(a[0],a[1],a[2]),N.new(a[3],a[4],a[5]),N.new(a[6],a[7],a[8]),s);case Fe.HalfSpace:return u=N.fromRaw(t.coHalfspaceNormal(e)),new Kh(u);case Fe.Voxels:const f=t.coVoxelData(e),d=t.coVoxelSize(e);return new hc(f,d);case Fe.TriMesh:a=t.coVertices(e),o=t.coIndices(e);const p=t.coTriMeshFlags(e);return new dc(a,o,p);case Fe.HeightField:const w=t.coHeightfieldScale(e),S=t.coHeightfieldHeights(e),g=t.coHeightfieldNRows(e),m=t.coHeightfieldNCols(e),y=t.coHeightFieldFlags(e);return new uc(g,m,S,w,y);case Fe.ConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),new Ss(a,o);case Fe.RoundConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),s=t.coRoundRadius(e),new Ms(a,o,s);case Fe.Cylinder:return c=t.coHalfHeight(e),l=t.coRadius(e),new _c(c,l);case Fe.RoundCylinder:return c=t.coHalfHeight(e),l=t.coRadius(e),s=t.coRoundRadius(e),new fc(c,l,s);case Fe.Cone:return c=t.coHalfHeight(e),l=t.coRadius(e),new pc(c,l);case Fe.RoundCone:return c=t.coHalfHeight(e),l=t.coRadius(e),s=t.coRoundRadius(e),new mc(c,l,s);default:throw new Error("unknown shape type: "+n)}}castShape(t,e,n,r,s,a,o,c,l,u){let f=N.intoRaw(t),d=Ht.intoRaw(e),p=N.intoRaw(n),w=N.intoRaw(s),S=Ht.intoRaw(a),g=N.intoRaw(o),m=this.intoRaw(),y=r.intoRaw(),T=Zi.fromRaw(null,m.castShape(f,d,p,y,w,S,g,c,l,u));return f.free(),d.free(),p.free(),w.free(),S.free(),g.free(),m.free(),y.free(),T}intersectsShape(t,e,n,r,s){let a=N.intoRaw(t),o=Ht.intoRaw(e),c=N.intoRaw(r),l=Ht.intoRaw(s),u=this.intoRaw(),f=n.intoRaw(),d=u.intersectsShape(a,o,f,c,l);return a.free(),o.free(),c.free(),l.free(),u.free(),f.free(),d}contactShape(t,e,n,r,s,a){let o=N.intoRaw(t),c=Ht.intoRaw(e),l=N.intoRaw(r),u=Ht.intoRaw(s),f=this.intoRaw(),d=n.intoRaw(),p=Xi.fromRaw(f.contactShape(o,c,d,l,u,a));return o.free(),c.free(),l.free(),u.free(),f.free(),d.free(),p}containsPoint(t,e,n){let r=N.intoRaw(t),s=Ht.intoRaw(e),a=N.intoRaw(n),o=this.intoRaw(),c=o.containsPoint(r,s,a);return r.free(),s.free(),a.free(),o.free(),c}projectPoint(t,e,n,r){let s=N.intoRaw(t),a=Ht.intoRaw(e),o=N.intoRaw(n),c=this.intoRaw(),l=Ar.fromRaw(c.projectPoint(s,a,o,r));return s.free(),a.free(),o.free(),c.free(),l}intersectsRay(t,e,n,r){let s=N.intoRaw(e),a=Ht.intoRaw(n),o=N.intoRaw(t.origin),c=N.intoRaw(t.dir),l=this.intoRaw(),u=l.intersectsRay(s,a,o,c,r);return s.free(),a.free(),o.free(),c.free(),l.free(),u}castRay(t,e,n,r,s){let a=N.intoRaw(e),o=Ht.intoRaw(n),c=N.intoRaw(t.origin),l=N.intoRaw(t.dir),u=this.intoRaw(),f=u.castRay(a,o,c,l,r,s);return a.free(),o.free(),c.free(),l.free(),u.free(),f}castRayAndGetNormal(t,e,n,r,s){let a=N.intoRaw(e),o=Ht.intoRaw(n),c=N.intoRaw(t.origin),l=N.intoRaw(t.dir),u=this.intoRaw(),f=Tr.fromRaw(u.castRayAndGetNormal(a,o,c,l,r,s));return a.free(),o.free(),c.free(),l.free(),u.free(),f}}var Ee;(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.ConvexPolyhedron=9]="ConvexPolyhedron",i[i.Cylinder=10]="Cylinder",i[i.Cone=11]="Cone",i[i.RoundCuboid=12]="RoundCuboid",i[i.RoundTriangle=13]="RoundTriangle",i[i.RoundCylinder=14]="RoundCylinder",i[i.RoundCone=15]="RoundCone",i[i.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",i[i.HalfSpace=17]="HalfSpace",i[i.Voxels=18]="Voxels"})(Ee||(Ee={}));var qa;(function(i){i[i.FIX_INTERNAL_EDGES=1]="FIX_INTERNAL_EDGES"})(qa||(qa={}));var Ya;(function(i){i[i.DELETE_BAD_TOPOLOGY_TRIANGLES=4]="DELETE_BAD_TOPOLOGY_TRIANGLES",i[i.ORIENTED=8]="ORIENTED",i[i.MERGE_DUPLICATE_VERTICES=16]="MERGE_DUPLICATE_VERTICES",i[i.DELETE_DEGENERATE_TRIANGLES=32]="DELETE_DEGENERATE_TRIANGLES",i[i.DELETE_DUPLICATE_TRIANGLES=64]="DELETE_DUPLICATE_TRIANGLES",i[i.FIX_INTERNAL_EDGES=144]="FIX_INTERNAL_EDGES"})(Ya||(Ya={}));class nc extends Ce{constructor(t){super(),this.type=Ee.Ball,this.radius=t}intoRaw(){return Ct.ball(this.radius)}}class Kh extends Ce{constructor(t){super(),this.type=Ee.HalfSpace,this.normal=t}intoRaw(){let t=N.intoRaw(this.normal),e=Ct.halfspace(t);return t.free(),e}}class ic extends Ce{constructor(t,e,n){super(),this.type=Ee.Cuboid,this.halfExtents=N.new(t,e,n)}intoRaw(){return Ct.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class rc extends Ce{constructor(t,e,n,r){super(),this.type=Ee.RoundCuboid,this.halfExtents=N.new(t,e,n),this.borderRadius=r}intoRaw(){return Ct.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class sc extends Ce{constructor(t,e){super(),this.type=Ee.Capsule,this.halfHeight=t,this.radius=e}intoRaw(){return Ct.capsule(this.halfHeight,this.radius)}}class ac extends Ce{constructor(t,e){super(),this.type=Ee.Segment,this.a=t,this.b=e}intoRaw(){let t=N.intoRaw(this.a),e=N.intoRaw(this.b),n=Ct.segment(t,e);return t.free(),e.free(),n}}let oc=class extends Ce{constructor(t,e,n){super(),this.type=Ee.Triangle,this.a=t,this.b=e,this.c=n}intoRaw(){let t=N.intoRaw(this.a),e=N.intoRaw(this.b),n=N.intoRaw(this.c),r=Ct.triangle(t,e,n);return t.free(),e.free(),n.free(),r}};class cc extends Ce{constructor(t,e,n,r){super(),this.type=Ee.RoundTriangle,this.a=t,this.b=e,this.c=n,this.borderRadius=r}intoRaw(){let t=N.intoRaw(this.a),e=N.intoRaw(this.b),n=N.intoRaw(this.c),r=Ct.roundTriangle(t,e,n,this.borderRadius);return t.free(),e.free(),n.free(),r}}class lc extends Ce{constructor(t,e){super(),this.type=Ee.Polyline,this.vertices=t,this.indices=e??new Uint32Array(0)}intoRaw(){return Ct.polyline(this.vertices,this.indices)}}class hc extends Ce{constructor(t,e){super(),this.type=Ee.Voxels,this.data=t,this.voxelSize=e}intoRaw(){let t=N.intoRaw(this.voxelSize),e;return this.data instanceof Int32Array?e=Ct.voxels(t,this.data):e=Ct.voxelsFromPoints(t,this.data),t.free(),e}}class dc extends Ce{constructor(t,e,n){super(),this.type=Ee.TriMesh,this.vertices=t,this.indices=e,this.flags=n}intoRaw(){return Ct.trimesh(this.vertices,this.indices,this.flags)}}class Ss extends Ce{constructor(t,e){super(),this.type=Ee.ConvexPolyhedron,this.vertices=t,this.indices=e}intoRaw(){return this.indices?Ct.convexMesh(this.vertices,this.indices):Ct.convexHull(this.vertices)}}class Ms extends Ce{constructor(t,e,n){super(),this.type=Ee.RoundConvexPolyhedron,this.vertices=t,this.indices=e,this.borderRadius=n}intoRaw(){return this.indices?Ct.roundConvexMesh(this.vertices,this.indices,this.borderRadius):Ct.roundConvexHull(this.vertices,this.borderRadius)}}class uc extends Ce{constructor(t,e,n,r,s){super(),this.type=Ee.HeightField,this.nrows=t,this.ncols=e,this.heights=n,this.scale=r,this.flags=s}intoRaw(){let t=N.intoRaw(this.scale),e=Ct.heightfield(this.nrows,this.ncols,this.heights,t,this.flags);return t.free(),e}}class _c extends Ce{constructor(t,e){super(),this.type=Ee.Cylinder,this.halfHeight=t,this.radius=e}intoRaw(){return Ct.cylinder(this.halfHeight,this.radius)}}class fc extends Ce{constructor(t,e,n){super(),this.type=Ee.RoundCylinder,this.borderRadius=n,this.halfHeight=t,this.radius=e}intoRaw(){return Ct.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class pc extends Ce{constructor(t,e){super(),this.type=Ee.Cone,this.halfHeight=t,this.radius=e}intoRaw(){return Ct.cone(this.halfHeight,this.radius)}}class mc extends Ce{constructor(t,e,n){super(),this.type=Ee.RoundCone,this.halfHeight=t,this.radius=e,this.borderRadius=n}intoRaw(){return Ct.roundCone(this.halfHeight,this.radius,this.borderRadius)}}class Jh{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new uu}step(t,e,n,r,s,a,o,c,l,u,f,d){let p=N.intoRaw(t);f?this.raw.stepWithEvents(p,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,c.raw,l.raw,u.raw,f.raw,d,d?d.filterContactPair:null,d?d.filterIntersectionPair:null):this.raw.step(p,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,c.raw,l.raw,u.raw),p.free()}}class Ka{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new fu}serializeAll(t,e,n,r,s,a,o,c,l){let u=N.intoRaw(t);const f=this.raw.serializeAll(u,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,c.raw,l.raw);return u.free(),f}deserializeAll(t){return Vs.fromRaw(this.raw.deserializeAll(t))}}class $h{constructor(t,e){this.vertices=t,this.colors=e}}class Zh{free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}constructor(t){this.raw=t||new cu}render(t,e,n,r,s,a,o){this.raw.render(t.raw,e.raw,n.raw,r.raw,s.raw,a,e.castClosure(o)),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class Qh{}class td{constructor(t,e,n,r,s,a){this.params=e,this.bodies=s,this.colliders=a,this.broadPhase=n,this.narrowPhase=r,this.raw=new du(t),this.rawCharacterCollision=new Th,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(t){let e=N.intoRaw(t);return this.raw.setUp(e)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(t){this._applyImpulsesToDynamicBodies=t}characterMass(){return this._characterMass}setCharacterMass(t){this._characterMass=t}offset(){return this.raw.offset()}setOffset(t){this.raw.setOffset(t)}normalNudgeFactor(){return this.raw.normalNudgeFactor()}setNormalNudgeFactor(t){this.raw.setNormalNudgeFactor(t)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(t){this.raw.setSlideEnabled(t)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(t,e,n){this.raw.enableAutostep(t,e,n)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(t){this.raw.setMaxSlopeClimbAngle(t)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(t){this.raw.setMinSlopeSlideAngle(t)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(t){this.raw.enableSnapToGround(t)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(t,e,n,r,s){let a=N.intoRaw(e);this.raw.computeColliderMovement(this.params.dt,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,t.handle,a,this._applyImpulsesToDynamicBodies,this._characterMass,n,r,this.colliders.castClosure(s)),a.free()}computedMovement(){return N.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(t,e){if(this.raw.computedCollision(t,this.rawCharacterCollision)){let n=this.rawCharacterCollision;return e=e??new Qh,e.translationDeltaApplied=N.fromRaw(n.translationDeltaApplied()),e.translationDeltaRemaining=N.fromRaw(n.translationDeltaRemaining()),e.toi=n.toi(),e.witness1=N.fromRaw(n.worldWitness1()),e.witness2=N.fromRaw(n.worldWitness2()),e.normal1=N.fromRaw(n.worldNormal1()),e.normal2=N.fromRaw(n.worldNormal2()),e.collider=this.colliders.get(n.handle()),e}else return null}}var Ja;(function(i){i[i.None=0]="None",i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ",i[i.AllLin=7]="AllLin",i[i.AllAng=56]="AllAng",i[i.All=63]="All"})(Ja||(Ja={}));class ed{constructor(t,e,n,r,s,a){this.params=t,this.bodies=e,this.raw=new _u(n,r,s,a)}free(){this.raw&&this.raw.free(),this.raw=void 0}setKp(t,e){this.raw.set_kp(t,e)}setKi(t,e){this.raw.set_kp(t,e)}setKd(t,e){this.raw.set_kp(t,e)}setAxes(t){this.raw.set_axes_mask(t)}resetIntegrals(){this.raw.reset_integrals()}applyLinearCorrection(t,e,n){let r=N.intoRaw(e),s=N.intoRaw(n);this.raw.apply_linear_correction(this.params.dt,this.bodies.raw,t.handle,r,s),r.free(),s.free()}applyAngularCorrection(t,e,n){let r=Ht.intoRaw(e),s=N.intoRaw(n);this.raw.apply_angular_correction(this.params.dt,this.bodies.raw,t.handle,r,s),r.free(),s.free()}linearCorrection(t,e,n){let r=N.intoRaw(e),s=N.intoRaw(n),a=this.raw.linear_correction(this.params.dt,this.bodies.raw,t.handle,r,s);return r.free(),s.free(),N.fromRaw(a)}angularCorrection(t,e,n){let r=Ht.intoRaw(e),s=N.intoRaw(n),a=this.raw.angular_correction(this.params.dt,this.bodies.raw,t.handle,r,s);return r.free(),s.free(),N.fromRaw(a)}}class nd{constructor(t,e,n,r,s){this.raw=new lu(t.handle),this.broadPhase=e,this.narrowPhase=n,this.bodies=r,this.colliders=s,this._chassis=t}free(){this.raw&&this.raw.free(),this.raw=void 0}updateVehicle(t,e,n,r){this.raw.update_vehicle(t,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,e,n,this.colliders.castClosure(r))}currentVehicleSpeed(){return this.raw.current_vehicle_speed()}chassis(){return this._chassis}get indexUpAxis(){return this.raw.index_up_axis()}set indexUpAxis(t){this.raw.set_index_up_axis(t)}get indexForwardAxis(){return this.raw.index_forward_axis()}set setIndexForwardAxis(t){this.raw.set_index_forward_axis(t)}addWheel(t,e,n,r,s){let a=N.intoRaw(t),o=N.intoRaw(e),c=N.intoRaw(n);this.raw.add_wheel(a,o,c,r,s),a.free(),o.free(),c.free()}numWheels(){return this.raw.num_wheels()}wheelChassisConnectionPointCs(t){return N.fromRaw(this.raw.wheel_chassis_connection_point_cs(t))}setWheelChassisConnectionPointCs(t,e){let n=N.intoRaw(e);this.raw.set_wheel_chassis_connection_point_cs(t,n),n.free()}wheelSuspensionRestLength(t){return this.raw.wheel_suspension_rest_length(t)}setWheelSuspensionRestLength(t,e){this.raw.set_wheel_suspension_rest_length(t,e)}wheelMaxSuspensionTravel(t){return this.raw.wheel_max_suspension_travel(t)}setWheelMaxSuspensionTravel(t,e){this.raw.set_wheel_max_suspension_travel(t,e)}wheelRadius(t){return this.raw.wheel_radius(t)}setWheelRadius(t,e){this.raw.set_wheel_radius(t,e)}wheelSuspensionStiffness(t){return this.raw.wheel_suspension_stiffness(t)}setWheelSuspensionStiffness(t,e){this.raw.set_wheel_suspension_stiffness(t,e)}wheelSuspensionCompression(t){return this.raw.wheel_suspension_compression(t)}setWheelSuspensionCompression(t,e){this.raw.set_wheel_suspension_compression(t,e)}wheelSuspensionRelaxation(t){return this.raw.wheel_suspension_relaxation(t)}setWheelSuspensionRelaxation(t,e){this.raw.set_wheel_suspension_relaxation(t,e)}wheelMaxSuspensionForce(t){return this.raw.wheel_max_suspension_force(t)}setWheelMaxSuspensionForce(t,e){this.raw.set_wheel_max_suspension_force(t,e)}wheelBrake(t){return this.raw.wheel_brake(t)}setWheelBrake(t,e){this.raw.set_wheel_brake(t,e)}wheelSteering(t){return this.raw.wheel_steering(t)}setWheelSteering(t,e){this.raw.set_wheel_steering(t,e)}wheelEngineForce(t){return this.raw.wheel_engine_force(t)}setWheelEngineForce(t,e){this.raw.set_wheel_engine_force(t,e)}wheelDirectionCs(t){return N.fromRaw(this.raw.wheel_direction_cs(t))}setWheelDirectionCs(t,e){let n=N.intoRaw(e);this.raw.set_wheel_direction_cs(t,n),n.free()}wheelAxleCs(t){return N.fromRaw(this.raw.wheel_axle_cs(t))}setWheelAxleCs(t,e){let n=N.intoRaw(e);this.raw.set_wheel_axle_cs(t,n),n.free()}wheelFrictionSlip(t){return this.raw.wheel_friction_slip(t)}setWheelFrictionSlip(t,e){this.raw.set_wheel_friction_slip(t,e)}wheelSideFrictionStiffness(t){return this.raw.wheel_side_friction_stiffness(t)}setWheelSideFrictionStiffness(t,e){this.raw.set_wheel_side_friction_stiffness(t,e)}wheelRotation(t){return this.raw.wheel_rotation(t)}wheelForwardImpulse(t){return this.raw.wheel_forward_impulse(t)}wheelSideImpulse(t){return this.raw.wheel_side_impulse(t)}wheelSuspensionForce(t){return this.raw.wheel_suspension_force(t)}wheelContactNormal(t){return N.fromRaw(this.raw.wheel_contact_normal_ws(t))}wheelContactPoint(t){return N.fromRaw(this.raw.wheel_contact_point_ws(t))}wheelSuspensionLength(t){return this.raw.wheel_suspension_length(t)}wheelHardPoint(t){return N.fromRaw(this.raw.wheel_hard_point_ws(t))}wheelIsInContact(t){return this.raw.wheel_is_in_contact(t)}wheelGroundObject(t){return this.colliders.get(this.raw.wheel_ground_object(t))}}class Vs{free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(t=>t.free()),this.pidControllers.forEach(t=>t.free()),this.vehicleControllers.forEach(t=>t.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0,this.pidControllers=void 0,this.vehicleControllers=void 0}constructor(t,e,n,r,s,a,o,c,l,u,f,d,p){this.gravity=t,this.integrationParameters=new Ph(e),this.islands=new jh(n),this.broadPhase=new Xh(r),this.narrowPhase=new qh(s),this.bodies=new Ch(a),this.colliders=new id(o),this.impulseJoints=new Bh(c),this.multibodyJoints=new kh(l),this.ccdSolver=new Wh(u),this.physicsPipeline=new Jh(f),this.serializationPipeline=new Ka(d),this.debugRenderPipeline=new Zh(p),this.characterControllers=new Set,this.pidControllers=new Set,this.vehicleControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}static fromRaw(t){return t?new Vs(N.fromRaw(t.takeGravity()),t.takeIntegrationParameters(),t.takeIslandManager(),t.takeBroadPhase(),t.takeNarrowPhase(),t.takeBodies(),t.takeColliders(),t.takeImpulseJoints(),t.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(t){return new Ka().deserializeAll(t)}debugRender(t,e){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase,t,e),new $h(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(t,e){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,t,e)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}get timestep(){return this.integrationParameters.dt}set timestep(t){this.integrationParameters.dt=t}get lengthUnit(){return this.integrationParameters.lengthUnit}set lengthUnit(t){this.integrationParameters.lengthUnit=t}get numSolverIterations(){return this.integrationParameters.numSolverIterations}set numSolverIterations(t){this.integrationParameters.numSolverIterations=t}get numInternalPgsIterations(){return this.integrationParameters.numInternalPgsIterations}set numInternalPgsIterations(t){this.integrationParameters.numInternalPgsIterations=t}get maxCcdSubsteps(){return this.integrationParameters.maxCcdSubsteps}set maxCcdSubsteps(t){this.integrationParameters.maxCcdSubsteps=t}createRigidBody(t){return this.bodies.createRigidBody(this.colliders,t)}createCharacterController(t){let e=new td(t,this.integrationParameters,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.characterControllers.add(e),e}removeCharacterController(t){this.characterControllers.delete(t),t.free()}createPidController(t,e,n,r){let s=new ed(this.integrationParameters,this.bodies,t,e,n,r);return this.pidControllers.add(s),s}removePidController(t){this.pidControllers.delete(t),t.free()}createVehicleController(t){let e=new nd(t,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.vehicleControllers.add(e),e}removeVehicleController(t){this.vehicleControllers.delete(t),t.free()}createCollider(t,e){let n=e?e.handle:void 0;return this.colliders.createCollider(this.bodies,t,n)}createImpulseJoint(t,e,n,r){return this.impulseJoints.createJoint(this.bodies,t,e.handle,n.handle,r)}createMultibodyJoint(t,e,n,r){return this.multibodyJoints.createJoint(t,e.handle,n.handle,r)}getRigidBody(t){return this.bodies.get(t)}getCollider(t){return this.colliders.get(t)}getImpulseJoint(t){return this.impulseJoints.get(t)}getMultibodyJoint(t){return this.multibodyJoints.get(t)}removeRigidBody(t){this.bodies&&this.bodies.remove(t.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(t,e){this.colliders&&this.colliders.remove(t.handle,this.islands,this.bodies,e)}removeImpulseJoint(t,e){this.impulseJoints&&this.impulseJoints.remove(t.handle,e)}removeMultibodyJoint(t,e){this.impulseJoints&&this.multibodyJoints.remove(t.handle,e)}forEachCollider(t){this.colliders.forEach(t)}forEachRigidBody(t){this.bodies.forEach(t)}forEachActiveRigidBody(t){this.bodies.forEachActiveRigidBody(this.islands,t)}castRay(t,e,n,r,s,a,o,c){return this.broadPhase.castRay(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(c))}castRayAndGetNormal(t,e,n,r,s,a,o,c){return this.broadPhase.castRayAndGetNormal(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(c))}intersectionsWithRay(t,e,n,r,s,a,o,c,l){this.broadPhase.intersectionsWithRay(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a,o?o.handle:null,c?c.handle:null,this.colliders.castClosure(l))}intersectionWithShape(t,e,n,r,s,a,o,c){let l=this.broadPhase.intersectionWithShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(c));return l!=null?this.colliders.get(l):null}projectPoint(t,e,n,r,s,a,o){return this.broadPhase.projectPoint(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}projectPointAndGetFeature(t,e,n,r,s,a){return this.broadPhase.projectPointAndGetFeature(this.narrowPhase,this.bodies,this.colliders,t,e,n,r?r.handle:null,s?s.handle:null,this.colliders.castClosure(a))}intersectionsWithPoint(t,e,n,r,s,a,o){this.broadPhase.intersectionsWithPoint(this.narrowPhase,this.bodies,this.colliders,t,this.colliders.castClosure(e),n,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}castShape(t,e,n,r,s,a,o,c,l,u,f,d){return this.broadPhase.castShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a,o,c,l,u?u.handle:null,f?f.handle:null,this.colliders.castClosure(d))}intersectionsWithShape(t,e,n,r,s,a,o,c,l){this.broadPhase.intersectionsWithShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,this.colliders.castClosure(r),s,a,o?o.handle:null,c?c.handle:null,this.colliders.castClosure(l))}collidersWithAabbIntersectingAabb(t,e,n){this.broadPhase.collidersWithAabbIntersectingAabb(this.narrowPhase,this.bodies,this.colliders,t,e,this.colliders.castClosure(n))}contactPairsWith(t,e){this.narrowPhase.contactPairsWith(t.handle,this.colliders.castClosure(e))}intersectionPairsWith(t,e){this.narrowPhase.intersectionPairsWith(t.handle,this.colliders.castClosure(e))}contactPair(t,e,n){this.narrowPhase.contactPair(t.handle,e.handle,n)}intersectionPair(t,e){return this.narrowPhase.intersectionPair(t.handle,e.handle)}set profilerEnabled(t){this.physicsPipeline.raw.set_profiler_enabled(t)}get profilerEnabled(){return this.physicsPipeline.raw.is_profiler_enabled()}timingStep(){return this.physicsPipeline.raw.timing_step()}timingCollisionDetection(){return this.physicsPipeline.raw.timing_collision_detection()}timingBroadPhase(){return this.physicsPipeline.raw.timing_broad_phase()}timingNarrowPhase(){return this.physicsPipeline.raw.timing_narrow_phase()}timingSolver(){return this.physicsPipeline.raw.timing_solver()}timingVelocityAssembly(){return this.physicsPipeline.raw.timing_velocity_assembly()}timingVelocityResolution(){return this.physicsPipeline.raw.timing_velocity_resolution()}timingVelocityUpdate(){return this.physicsPipeline.raw.timing_velocity_update()}timingVelocityWriteback(){return this.physicsPipeline.raw.timing_velocity_writeback()}timingCcd(){return this.physicsPipeline.raw.timing_ccd()}timingCcdToiComputation(){return this.physicsPipeline.raw.timing_ccd_toi_computation()}timingCcdBroadPhase(){return this.physicsPipeline.raw.timing_ccd_broad_phase()}timingCcdNarrowPhase(){return this.physicsPipeline.raw.timing_ccd_narrow_phase()}timingCcdSolver(){return this.physicsPipeline.raw.timing_ccd_solver()}timingIslandConstruction(){return this.physicsPipeline.raw.timing_island_construction()}timingUserChanges(){return this.physicsPipeline.raw.timing_user_changes()}}var Es;(function(i){i[i.NONE=0]="NONE",i[i.COLLISION_EVENTS=1]="COLLISION_EVENTS",i[i.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(Es||(Es={}));var Ts;(function(i){i[i.NONE=0]="NONE",i[i.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",i[i.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(Ts||(Ts={}));var $a;(function(i){i[i.EMPTY=0]="EMPTY",i[i.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})($a||($a={}));var As;(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(As||(As={}));class Za{constructor(t,e,n,r){this.colliderSet=t,this.handle=e,this._parent=n,this._shape=r}finalizeDeserialization(t){this.handle!=null&&(this._parent=t.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=Ce.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}clearShapeCache(){this._shape=null}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return N.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}translationWrtParent(){return N.fromRaw(this.colliderSet.raw.coTranslationWrtParent(this.handle))}rotation(){return Ht.fromRaw(this.colliderSet.raw.coRotation(this.handle))}rotationWrtParent(){return Ht.fromRaw(this.colliderSet.raw.coRotationWrtParent(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(t){this.colliderSet.raw.coSetSensor(this.handle,t)}setShape(t){let e=t.intoRaw();this.colliderSet.raw.coSetShape(this.handle,e),e.free(),this._shape=t}setEnabled(t){this.colliderSet.raw.coSetEnabled(this.handle,t)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(t){this.colliderSet.raw.coSetRestitution(this.handle,t)}setFriction(t){this.colliderSet.raw.coSetFriction(this.handle,t)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(t){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,t)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(t){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,t)}setCollisionGroups(t){this.colliderSet.raw.coSetCollisionGroups(this.handle,t)}setSolverGroups(t){this.colliderSet.raw.coSetSolverGroups(this.handle,t)}contactSkin(){return this.colliderSet.raw.coContactSkin(this.handle)}setContactSkin(t){return this.colliderSet.raw.coSetContactSkin(this.handle,t)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(t){this.colliderSet.raw.coSetActiveHooks(this.handle,t)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(t){this.colliderSet.raw.coSetActiveEvents(this.handle,t)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(t){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,t)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(t){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,t)}setDensity(t){this.colliderSet.raw.coSetDensity(this.handle,t)}setMass(t){this.colliderSet.raw.coSetMass(this.handle,t)}setMassProperties(t,e,n,r){let s=N.intoRaw(e),a=N.intoRaw(n),o=Ht.intoRaw(r);this.colliderSet.raw.coSetMassProperties(this.handle,t,s,a,o),s.free(),a.free(),o.free()}setTranslation(t){this.colliderSet.raw.coSetTranslation(this.handle,t.x,t.y,t.z)}setTranslationWrtParent(t){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,t.x,t.y,t.z)}setRotation(t){this.colliderSet.raw.coSetRotation(this.handle,t.x,t.y,t.z,t.w)}setRotationWrtParent(t){this.colliderSet.raw.coSetRotationWrtParent(this.handle,t.x,t.y,t.z,t.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return N.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(t){const e=N.intoRaw(t);this.colliderSet.raw.coSetHalfExtents(this.handle,e)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(t){this.colliderSet.raw.coSetRadius(this.handle,t)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(t){this.colliderSet.raw.coSetRoundRadius(this.handle,t)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(t){this.colliderSet.raw.coSetHalfHeight(this.handle,t)}setVoxel(t,e,n,r){this.colliderSet.raw.coSetVoxel(this.handle,t,e,n,r),this._shape=null}propagateVoxelChange(t,e,n,r,s,a,o){this.colliderSet.raw.coPropagateVoxelChange(this.handle,t.handle,e,n,r,s,a,o),this._shape=null}combineVoxelStates(t,e,n,r){this.colliderSet.raw.coCombineVoxelStates(this.handle,t.handle,e,n,r),this._shape=null}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let t=this.colliderSet.raw.coHeightfieldScale(this.handle);return N.fromRaw(t)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(t){let e=N.intoRaw(t),n=this.colliderSet.raw.coContainsPoint(this.handle,e);return e.free(),n}projectPoint(t,e){let n=N.intoRaw(t),r=Ar.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,n,e));return n.free(),r}intersectsRay(t,e){let n=N.intoRaw(t.origin),r=N.intoRaw(t.dir),s=this.colliderSet.raw.coIntersectsRay(this.handle,n,r,e);return n.free(),r.free(),s}castShape(t,e,n,r,s,a,o,c){let l=N.intoRaw(t),u=N.intoRaw(n),f=Ht.intoRaw(r),d=N.intoRaw(s),p=e.intoRaw(),w=Zi.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,l,p,u,f,d,a,o,c));return l.free(),u.free(),f.free(),d.free(),p.free(),w}castCollider(t,e,n,r,s,a){let o=N.intoRaw(t),c=N.intoRaw(n),l=Rr.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,o,e.handle,c,r,s,a));return o.free(),c.free(),l}intersectsShape(t,e,n){let r=N.intoRaw(e),s=Ht.intoRaw(n),a=t.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,a,r,s);return r.free(),s.free(),a.free(),o}contactShape(t,e,n,r){let s=N.intoRaw(e),a=Ht.intoRaw(n),o=t.intoRaw(),c=Xi.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,s,a,r));return s.free(),a.free(),o.free(),c}contactCollider(t,e){return Xi.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,t.handle,e))}castRay(t,e,n){let r=N.intoRaw(t.origin),s=N.intoRaw(t.dir),a=this.colliderSet.raw.coCastRay(this.handle,r,s,e,n);return r.free(),s.free(),a}castRayAndGetNormal(t,e,n){let r=N.intoRaw(t.origin),s=N.intoRaw(t.dir),a=Tr.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,r,s,e,n));return r.free(),s.free(),a}}var vi;(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(vi||(vi={}));class Me{constructor(t){this.enabled=!0,this.shape=t,this.massPropsMode=vi.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=Ht.identity(),this.translation=N.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=wr.Average,this.restitutionCombineRule=wr.Average,this.activeCollisionTypes=As.DEFAULT,this.activeEvents=Es.NONE,this.activeHooks=Ts.NONE,this.mass=0,this.centerOfMass=N.zeros(),this.contactForceEventThreshold=0,this.contactSkin=0,this.principalAngularInertia=N.zeros(),this.angularInertiaLocalFrame=Ht.identity()}static ball(t){const e=new nc(t);return new Me(e)}static capsule(t,e){const n=new sc(t,e);return new Me(n)}static segment(t,e){const n=new ac(t,e);return new Me(n)}static triangle(t,e,n){const r=new oc(t,e,n);return new Me(r)}static roundTriangle(t,e,n,r){const s=new cc(t,e,n,r);return new Me(s)}static polyline(t,e){const n=new lc(t,e);return new Me(n)}static voxels(t,e){const n=new hc(t,e);return new Me(n)}static trimesh(t,e,n){const r=new dc(t,e,n);return new Me(r)}static cuboid(t,e,n){const r=new ic(t,e,n);return new Me(r)}static roundCuboid(t,e,n,r){const s=new rc(t,e,n,r);return new Me(s)}static heightfield(t,e,n,r,s){const a=new uc(t,e,n,r,s);return new Me(a)}static cylinder(t,e){const n=new _c(t,e);return new Me(n)}static roundCylinder(t,e,n){const r=new fc(t,e,n);return new Me(r)}static cone(t,e){const n=new pc(t,e);return new Me(n)}static roundCone(t,e,n){const r=new mc(t,e,n);return new Me(r)}static convexHull(t){const e=new Ss(t,null);return new Me(e)}static convexMesh(t,e){const n=new Ss(t,e);return new Me(n)}static roundConvexHull(t,e){const n=new Ms(t,null,e);return new Me(n)}static roundConvexMesh(t,e,n){const r=new Ms(t,e,n);return new Me(r)}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return Ht.copy(this.rotation,t),this}setSensor(t){return this.isSensor=t,this}setEnabled(t){return this.enabled=t,this}setContactSkin(t){return this.contactSkin=t,this}setDensity(t){return this.massPropsMode=vi.Density,this.density=t,this}setMass(t){return this.massPropsMode=vi.Mass,this.mass=t,this}setMassProperties(t,e,n,r){return this.massPropsMode=vi.MassProps,this.mass=t,N.copy(this.centerOfMass,e),N.copy(this.principalAngularInertia,n),Ht.copy(this.angularInertiaLocalFrame,r),this}setRestitution(t){return this.restitution=t,this}setFriction(t){return this.friction=t,this}setFrictionCombineRule(t){return this.frictionCombineRule=t,this}setRestitutionCombineRule(t){return this.restitutionCombineRule=t,this}setCollisionGroups(t){return this.collisionGroups=t,this}setSolverGroups(t){return this.solverGroups=t,this}setActiveHooks(t){return this.activeHooks=t,this}setActiveEvents(t){return this.activeEvents=t,this}setActiveCollisionTypes(t){return this.activeCollisionTypes=t,this}setContactForceEventThreshold(t){return this.contactForceEventThreshold=t,this}}class id{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new we,this.map=new Hs,t&&t.forEachColliderHandle(e=>{this.map.set(e,new Za(this,e,null))})}castClosure(t){return e=>{if(t)return t(this.get(e))}}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createCollider(t,e,n){let r=n!=null&&n!=null;if(r&&isNaN(n))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let s=e.shape.intoRaw(),a=N.intoRaw(e.translation),o=Ht.intoRaw(e.rotation),c=N.intoRaw(e.centerOfMass),l=N.intoRaw(e.principalAngularInertia),u=Ht.intoRaw(e.angularInertiaLocalFrame),f=this.raw.createCollider(e.enabled,s,a,o,e.massPropsMode,e.mass,c,l,u,e.density,e.friction,e.restitution,e.frictionCombineRule,e.restitutionCombineRule,e.isSensor,e.collisionGroups,e.solverGroups,e.activeCollisionTypes,e.activeHooks,e.activeEvents,e.contactForceEventThreshold,e.contactSkin,r,r?n:0,t.raw);s.free(),a.free(),o.free(),c.free(),l.free(),u.free();let d=r?t.get(n):null,p=new Za(this,f,d,e.shape);return this.map.set(f,p),p}remove(t,e,n,r){this.raw.remove(t,e.raw,n.raw,r),this.unmap(t)}unmap(t){this.map.delete(t)}get(t){return this.map.get(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}const _n=Object.freeze(Object.defineProperty({__proto__:null,get ActiveCollisionTypes(){return As},get ActiveEvents(){return Es},get ActiveHooks(){return Ts},Ball:nc,BroadPhase:Xh,CCDSolver:Wh,Capsule:sc,CharacterCollision:Qh,get CoefficientCombineRule(){return wr},Collider:Za,ColliderDesc:Me,ColliderSet:id,ColliderShapeCastHit:Rr,Cone:pc,ConvexPolyhedron:Ss,Cuboid:ic,Cylinder:_c,DebugRenderBuffers:$h,DebugRenderPipeline:Zh,DynamicRayCastVehicleController:nd,get FeatureType(){return ji},FixedImpulseJoint:Ih,FixedMultibodyJoint:zh,GenericImpulseJoint:Nh,HalfSpace:Kh,get HeightFieldFlags(){return qa},Heightfield:uc,ImpulseJoint:pn,ImpulseJointSet:Bh,IntegrationParameters:Ph,IslandManager:jh,get JointAxesMask(){return Xa},get JointType(){return Wa},KinematicCharacterController:td,get MassPropsMode(){return vi},get MotorModel(){return ja},MultibodyJoint:si,MultibodyJointSet:kh,NarrowPhase:qh,PhysicsPipeline:Jh,get PidAxesMask(){return Ja},PidController:ed,PointColliderProjection:vr,PointProjection:Ar,Polyline:lc,PrismaticImpulseJoint:Fh,PrismaticMultibodyJoint:Hh,Quaternion:Ga,RayColliderHit:Gs,RayColliderIntersection:br,RayIntersection:Tr,RevoluteImpulseJoint:Uh,RevoluteMultibodyJoint:Gh,RigidBody:ka,RigidBodyDesc:vn,RigidBodySet:Ch,get RigidBodyType(){return dn},RopeImpulseJoint:Dh,RotationOps:Ht,RoundCone:mc,RoundConvexPolyhedron:Ms,RoundCuboid:rc,RoundCylinder:fc,RoundTriangle:cc,SdpMatrix3:Rh,SdpMatrix3Ops:Va,Segment:ac,SerializationPipeline:Ka,Shape:Ce,ShapeCastHit:Zi,ShapeContact:Xi,get ShapeType(){return Ee},get SolverFlags(){return $a},SphericalImpulseJoint:Oh,SphericalMultibodyJoint:Vh,SpringImpulseJoint:Lh,TempContactManifold:Yh,TriMesh:dc,get TriMeshFlags(){return Ya},Triangle:oc,UnitImpulseJoint:tc,UnitMultibodyJoint:ec,Vector3:Ah,VectorOps:N,Voxels:hc,World:Vs},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="183",qx=0,wl=1,Yx=2,us=1,rd=2,_r=3,ai=0,Je=1,On=2,zn=0,ki=1,bl=2,vl=3,xl=4,Kx=5,gi=100,Jx=101,$x=102,Zx=103,Qx=104,ty=200,ey=201,ny=202,iy=203,Qa=204,to=205,ry=206,sy=207,ay=208,oy=209,cy=210,ly=211,hy=212,dy=213,uy=214,eo=0,no=1,io=2,qi=3,ro=4,so=5,ao=6,oo=7,sd=0,_y=1,fy=2,Mn=0,ad=1,od=2,cd=3,wc=4,ld=5,hd=6,dd=7,ud=300,Mi=301,Yi=302,sa=303,aa=304,ks=306,co=1e3,Bn=1001,lo=1002,Be=1003,py=1004,Br=1005,We=1006,oa=1007,xi=1008,en=1009,_d=1010,fd=1011,xr=1012,bc=1013,An=1014,yn=1015,jn=1016,vc=1017,xc=1018,yr=1020,pd=35902,md=35899,gd=1021,wd=1022,fn=1023,Xn=1026,yi=1027,bd=1028,yc=1029,Ki=1030,Sc=1031,Mc=1033,_s=33776,fs=33777,ps=33778,ms=33779,ho=35840,uo=35841,_o=35842,fo=35843,po=36196,mo=37492,go=37496,wo=37488,bo=37489,vo=37490,xo=37491,yo=37808,So=37809,Mo=37810,Eo=37811,To=37812,Ao=37813,Ro=37814,Co=37815,Po=37816,Io=37817,Do=37818,Lo=37819,Fo=37820,Uo=37821,No=36492,Oo=36494,Bo=36495,zo=36283,Ho=36284,Go=36285,Vo=36286,my=3200,vd=0,gy=1,ni="",Ke="srgb",Ji="srgb-linear",Rs="linear",se="srgb",Ci=7680,yl=519,wy=512,by=513,vy=514,Ec=515,xy=516,yy=517,Tc=518,Sy=519,Sl=35044,Ml="300 es",Sn=2e3,Sr=2001;function My(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ey(){const i=Cs("canvas");return i.style.display="block",i}const El={};function Tl(...i){const t="THREE."+i.shift();console.log(t,...i)}function xd(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ft(...i){i=xd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=xd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ps(...i){const t=i.join(" ");t in El||(El[t]=!0,Ft(...i))}function Ty(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Ay={[eo]:no,[io]:ao,[ro]:oo,[qi]:so,[no]:eo,[ao]:io,[oo]:ro,[so]:qi};class Qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gs=Math.PI/180,ko=180/Math.PI;function Cr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function Ry(i,t){return(i%t+t)%t}function ca(i,t,e){return(1-e)*i+e*t}function rr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3],d=s[a+0],p=s[a+1],w=s[a+2],S=s[a+3];if(f!==S||c!==d||l!==p||u!==w){let g=c*d+l*p+u*w+f*S;g<0&&(d=-d,p=-p,w=-w,S=-S,g=-g);let m=1-o;if(g<.9995){const y=Math.acos(g),T=Math.sin(y);m=Math.sin(m*y)/T,o=Math.sin(o*y)/T,c=c*m+d*o,l=l*m+p*o,u=u*m+w*o,f=f*m+S*o}else{c=c*m+d*o,l=l*m+p*o,u=u*m+w*o,f=f*m+S*o;const y=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=y,l*=y,u*=y,f*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],d=s[a+1],p=s[a+2],w=s[a+3];return t[e]=o*w+u*f+c*p-l*d,t[e+1]=c*w+u*d+l*f-o*p,t[e+2]=l*w+u*p+o*d-c*f,t[e+3]=u*w-o*f-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),d=c(n/2),p=c(r/2),w=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*p*w,this._y=l*p*f-d*u*w,this._z=l*u*w+d*p*f,this._w=l*u*f-d*p*w;break;case"YXZ":this._x=d*u*f+l*p*w,this._y=l*p*f-d*u*w,this._z=l*u*w-d*p*f,this._w=l*u*f+d*p*w;break;case"ZXY":this._x=d*u*f-l*p*w,this._y=l*p*f+d*u*w,this._z=l*u*w+d*p*f,this._w=l*u*f-d*p*w;break;case"ZYX":this._x=d*u*f-l*p*w,this._y=l*p*f+d*u*w,this._z=l*u*w-d*p*f,this._w=l*u*f+d*p*w;break;case"YZX":this._x=d*u*f+l*p*w,this._y=l*p*f+d*u*w,this._z=l*u*w-d*p*f,this._w=l*u*f-d*p*w;break;case"XZY":this._x=d*u*f-l*p*w,this._y=l*p*f-d*u*w,this._z=l*u*w+d*p*f,this._w=l*u*f+d*p*w;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new z,Al=new oi;class zt{constructor(t,e,n,r,s,a,o,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],p=n[5],w=n[8],S=r[0],g=r[3],m=r[6],y=r[1],T=r[4],E=r[7],P=r[2],C=r[5],L=r[8];return s[0]=a*S+o*y+c*P,s[3]=a*g+o*T+c*C,s[6]=a*m+o*E+c*L,s[1]=l*S+u*y+f*P,s[4]=l*g+u*T+f*C,s[7]=l*m+u*E+f*L,s[2]=d*S+p*y+w*P,s[5]=d*g+p*T+w*C,s[8]=d*m+p*E+w*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,d=o*c-u*s,p=l*s-a*c,w=e*f+n*d+r*p;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/w;return t[0]=f*S,t[1]=(r*l-u*n)*S,t[2]=(o*n-r*a)*S,t[3]=d*S,t[4]=(u*e-r*c)*S,t[5]=(r*s-o*e)*S,t[6]=p*S,t[7]=(n*c-l*e)*S,t[8]=(a*e-n*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new zt,Rl=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cl=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cy(){const i={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===se&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ni?Rs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ji]:{primaries:t,whitePoint:n,transfer:Rs,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:se,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}const Qt=Cy();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class Py{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Pi===void 0&&(Pi=Cs("canvas")),Pi.width=t.width,Pi.height=t.height;const r=Pi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Pi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Iy=0;class Ac{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Cr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(da(r[a].image)):s.push(da(r[a]))}else s=da(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Py.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let Dy=0;const ua=new z;class je extends Qi{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=Bn,r=Bn,s=We,a=xi,o=fn,c=en,l=je.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Cr(),this.name="",this.source=new Ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ud)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case co:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case co:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=ud;je.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,r=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],w=c[9],S=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(w-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(w+g)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,E=(p+1)/2,P=(m+1)/2,C=(u+d)/4,L=(f+S)/4,v=(w+g)/4;return T>E&&T>P?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=C/n,s=L/n):E>P?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=C/r,s=v/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=L/s,r=v/s),this.set(n,r,s,e),this}let y=Math.sqrt((g-w)*(g-w)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-w)/y,this.y=(f-S)/y,this.z=(d-u)/y,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ly extends Qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new je(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ac(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends Ly{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yd extends je{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Be,this.minFilter=Be,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fy extends je{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Be,this.minFilter=Be,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class be{constructor(t,e,n,r,s,a,o,c,l,u,f,d,p,w,S,g){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,u,f,d,p,w,S,g)}set(t,e,n,r,s,a,o,c,l,u,f,d,p,w,S,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=d,m[3]=p,m[7]=w,m[11]=S,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Ii.setFromMatrixColumn(t,0).length(),s=1/Ii.setFromMatrixColumn(t,1).length(),a=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*u,p=a*f,w=o*u,S=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+w*l,e[5]=d-S*l,e[9]=-o*c,e[2]=S-d*l,e[6]=w+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*f,w=l*u,S=l*f;e[0]=d+S*o,e[4]=w*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-w,e[6]=S+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*f,w=l*u,S=l*f;e[0]=d-S*o,e[4]=-a*f,e[8]=w+p*o,e[1]=p+w*o,e[5]=a*u,e[9]=S-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*f,w=o*u,S=o*f;e[0]=c*u,e[4]=w*l-p,e[8]=d*l+S,e[1]=c*f,e[5]=S*l+d,e[9]=p*l-w,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,w=o*c,S=o*l;e[0]=c*u,e[4]=S-d*f,e[8]=w*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*f+w,e[10]=d-S*f}else if(t.order==="XZY"){const d=a*c,p=a*l,w=o*c,S=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+S,e[5]=a*u,e[9]=p*f-w,e[2]=w*f-p,e[6]=o*u,e[10]=S*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uy,t,Ny)}lookAt(t,e,n){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Jn.crossVectors(n,Ze),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Jn.crossVectors(n,Ze)),Jn.normalize(),zr.crossVectors(Ze,Jn),r[0]=Jn.x,r[4]=zr.x,r[8]=Ze.x,r[1]=Jn.y,r[5]=zr.y,r[9]=Ze.y,r[2]=Jn.z,r[6]=zr.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],p=n[13],w=n[2],S=n[6],g=n[10],m=n[14],y=n[3],T=n[7],E=n[11],P=n[15],C=r[0],L=r[4],v=r[8],M=r[12],X=r[1],I=r[5],V=r[9],j=r[13],K=r[2],Y=r[6],W=r[10],k=r[14],rt=r[3],et=r[7],ft=r[11],bt=r[15];return s[0]=a*C+o*X+c*K+l*rt,s[4]=a*L+o*I+c*Y+l*et,s[8]=a*v+o*V+c*W+l*ft,s[12]=a*M+o*j+c*k+l*bt,s[1]=u*C+f*X+d*K+p*rt,s[5]=u*L+f*I+d*Y+p*et,s[9]=u*v+f*V+d*W+p*ft,s[13]=u*M+f*j+d*k+p*bt,s[2]=w*C+S*X+g*K+m*rt,s[6]=w*L+S*I+g*Y+m*et,s[10]=w*v+S*V+g*W+m*ft,s[14]=w*M+S*j+g*k+m*bt,s[3]=y*C+T*X+E*K+P*rt,s[7]=y*L+T*I+E*Y+P*et,s[11]=y*v+T*V+E*W+P*ft,s[15]=y*M+T*j+E*k+P*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],p=t[14],w=t[3],S=t[7],g=t[11],m=t[15],y=c*p-l*d,T=o*p-l*f,E=o*d-c*f,P=a*p-l*u,C=a*d-c*u,L=a*f-o*u;return e*(S*y-g*T+m*E)-n*(w*y-g*P+m*C)+r*(w*T-S*P+m*L)-s*(w*E-S*C+g*L)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],p=t[11],w=t[12],S=t[13],g=t[14],m=t[15],y=e*o-n*a,T=e*c-r*a,E=e*l-s*a,P=n*c-r*o,C=n*l-s*o,L=r*l-s*c,v=u*S-f*w,M=u*g-d*w,X=u*m-p*w,I=f*g-d*S,V=f*m-p*S,j=d*m-p*g,K=y*j-T*V+E*I+P*X-C*M+L*v;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/K;return t[0]=(o*j-c*V+l*I)*Y,t[1]=(r*V-n*j-s*I)*Y,t[2]=(S*L-g*C+m*P)*Y,t[3]=(d*C-f*L-p*P)*Y,t[4]=(c*X-a*j-l*M)*Y,t[5]=(e*j-r*X+s*M)*Y,t[6]=(g*E-w*L-m*T)*Y,t[7]=(u*L-d*E+p*T)*Y,t[8]=(a*V-o*X+l*v)*Y,t[9]=(n*X-e*V-s*v)*Y,t[10]=(w*C-S*E+m*y)*Y,t[11]=(f*E-u*C-p*y)*Y,t[12]=(o*M-a*I-c*v)*Y,t[13]=(e*I-n*M+r*v)*Y,t[14]=(S*T-w*P-g*y)*Y,t[15]=(u*P-f*T+d*y)*Y,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,f=o+o,d=s*l,p=s*u,w=s*f,S=a*u,g=a*f,m=o*f,y=c*l,T=c*u,E=c*f,P=n.x,C=n.y,L=n.z;return r[0]=(1-(S+m))*P,r[1]=(p+E)*P,r[2]=(w-T)*P,r[3]=0,r[4]=(p-E)*C,r[5]=(1-(d+m))*C,r[6]=(g+y)*C,r[7]=0,r[8]=(w+T)*L,r[9]=(g-y)*L,r[10]=(1-(d+S))*L,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Ii.set(r[0],r[1],r[2]).length();const o=Ii.set(r[4],r[5],r[6]).length(),c=Ii.set(r[8],r[9],r[10]).length();s<0&&(a=-a),on.copy(this);const l=1/a,u=1/o,f=1/c;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,e.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,r,s,a,o=Sn,c=!1){const l=this.elements,u=2*s/(e-t),f=2*s/(n-r),d=(e+t)/(e-t),p=(n+r)/(n-r);let w,S;if(c)w=s/(a-s),S=a*s/(a-s);else if(o===Sn)w=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Sr)w=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=w,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Sn,c=!1){const l=this.elements,u=2/(e-t),f=2/(n-r),d=-(e+t)/(e-t),p=-(n+r)/(n-r);let w,S;if(c)w=1/(a-s),S=a/(a-s);else if(o===Sn)w=-2/(a-s),S=-(a+s)/(a-s);else if(o===Sr)w=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=w,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ii=new z,on=new be,Uy=new z(0,0,0),Ny=new z(1,1,1),Jn=new z,zr=new z,Ze=new z,Pl=new be,Il=new oi;class Rn{constructor(t=0,e=0,n=0,r=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Il.setFromEuler(this),this.setFromQuaternion(Il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Sd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Oy=0;const Dl=new z,Di=new oi,Dn=new be,Hr=new z,sr=new z,By=new z,zy=new oi,Ll=new z(1,0,0),Fl=new z(0,1,0),Ul=new z(0,0,1),Nl={type:"added"},Hy={type:"removed"},Li={type:"childadded",child:null},_a={type:"childremoved",child:null};class ze extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new z,e=new Rn,n=new oi,r=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new zt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(Ll,t)}rotateY(t){return this.rotateOnAxis(Fl,t)}rotateZ(t){return this.rotateOnAxis(Ul,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ll,t)}translateY(t){return this.translateOnAxis(Fl,t)}translateZ(t){return this.translateOnAxis(Ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(sr,Hr,this.up):Dn.lookAt(Hr,sr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Di.setFromRotationMatrix(Dn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nl),Li.child=t,this.dispatchEvent(Li),Li.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hy),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nl),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,By),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,zy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),w=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),w.length>0&&(n.nodes=w)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ze.DEFAULT_UP=new z(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gr extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gy={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const S of t.hand.values()){const g=e.getJointPose(S,n),m=this._getHandJoint(l,S);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,w=.005;l.inputState.pinching&&d>p+w?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-w&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gy)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=Ry(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=pa(a,s,t+1/3),this.g=pa(a,s,t),this.b=pa(a,s,t-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(t,e=Ke){function n(s){s!==void 0&&parseFloat(s)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=Md[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Qt.workingToColorSpace(ke.copy(this),t),Math.round(Jt(ke.r*255,0,255))*65536+Math.round(Jt(ke.g*255,0,255))*256+Math.round(Jt(ke.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(ke.copy(this),e);const n=ke.r,r=ke.g,s=ke.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ke){Qt.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,r=ke.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(Vr);const n=ca($n.h,Vr.h,e),r=ca($n.s,Vr.s,e),s=ca($n.l,Vr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new qt;qt.NAMES=Md;class Rc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new Rc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vy extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const cn=new z,Ln=new z,ma=new z,Fn=new z,Fi=new z,Ui=new z,Ol=new z,ga=new z,wa=new z,ba=new z,va=new xe,xa=new xe,ya=new xe;class sn{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),cn.subVectors(t,e),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){cn.subVectors(r,e),Ln.subVectors(n,e),ma.subVectors(t,e);const a=cn.dot(cn),o=cn.dot(Ln),c=cn.dot(ma),l=Ln.dot(Ln),u=Ln.dot(ma),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-o*u)*d,w=(a*u-o*c)*d;return s.set(1-p-w,w,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Fn.x),c.addScaledVector(a,Fn.y),c.addScaledVector(o,Fn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return va.setScalar(0),xa.setScalar(0),ya.setScalar(0),va.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,n),ya.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(va,s.x),a.addScaledVector(xa,s.y),a.addScaledVector(ya,s.z),a}static isFrontFacing(t,e,n,r){return cn.subVectors(n,e),Ln.subVectors(t,e),cn.cross(Ln).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),cn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Fi.subVectors(r,n),Ui.subVectors(s,n),ga.subVectors(t,n);const c=Fi.dot(ga),l=Ui.dot(ga);if(c<=0&&l<=0)return e.copy(n);wa.subVectors(t,r);const u=Fi.dot(wa),f=Ui.dot(wa);if(u>=0&&f<=u)return e.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Fi,a);ba.subVectors(t,s);const p=Fi.dot(ba),w=Ui.dot(ba);if(w>=0&&p<=w)return e.copy(s);const S=p*l-c*w;if(S<=0&&l>=0&&w<=0)return o=l/(l-w),e.copy(n).addScaledVector(Ui,o);const g=u*w-p*f;if(g<=0&&f-u>=0&&p-w>=0)return Ol.subVectors(s,r),o=(f-u)/(f-u+(p-w)),e.copy(r).addScaledVector(Ol,o);const m=1/(g+S+d);return a=S*m,o=d*m,e.copy(n).addScaledVector(Fi,a).addScaledVector(Ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Pr{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Wr.subVectors(this.max,ar),Ni.subVectors(t.a,ar),Oi.subVectors(t.b,ar),Bi.subVectors(t.c,ar),Zn.subVectors(Oi,Ni),Qn.subVectors(Bi,Oi),hi.subVectors(Ni,Bi);let e=[0,-Zn.z,Zn.y,0,-Qn.z,Qn.y,0,-hi.z,hi.y,Zn.z,0,-Zn.x,Qn.z,0,-Qn.x,hi.z,0,-hi.x,-Zn.y,Zn.x,0,-Qn.y,Qn.x,0,-hi.y,hi.x,0];return!Sa(e,Ni,Oi,Bi,Wr)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,Ni,Oi,Bi,Wr))?!1:(jr.crossVectors(Zn,Qn),e=[jr.x,jr.y,jr.z],Sa(e,Ni,Oi,Bi,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Un=[new z,new z,new z,new z,new z,new z,new z,new z],ln=new z,kr=new Pr,Ni=new z,Oi=new z,Bi=new z,Zn=new z,Qn=new z,hi=new z,ar=new z,Wr=new z,jr=new z,di=new z;function Sa(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){di.fromArray(i,s);const o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),c=t.dot(di),l=e.dot(di),u=n.dot(di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ae=new z,Xr=new $t;let ky=0;class Tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ky++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sl,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sl&&(t.usage=this.usage),t}}class Ed extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Td extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class He extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Wy=new Pr,or=new z,Ma=new z;class Ws{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wy.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(or,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(Ma)),this.expandByPoint(or.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let jy=0;const rn=new be,Ea=new ze,zi=new z,Qe=new Pr,cr=new Pr,Ue=new z;class nn extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(My(t)?Td:Ed)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return Ea.lookAt(t),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new He(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(Qe.min,cr.min),Qe.expandByPoint(Ue),Ue.addVectors(Qe.max,cr.max),Qe.expandByPoint(Ue)):(Qe.expandByPoint(cr.min),Qe.expandByPoint(cr.max))}Qe.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ue.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ue));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ue.fromBufferAttribute(o,l),c&&(zi.fromBufferAttribute(t,l),Ue.add(zi)),r=Math.max(r,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new z,c[v]=new z;const l=new z,u=new z,f=new z,d=new $t,p=new $t,w=new $t,S=new z,g=new z;function m(v,M,X){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,X),d.fromBufferAttribute(s,v),p.fromBufferAttribute(s,M),w.fromBufferAttribute(s,X),u.sub(l),f.sub(l),p.sub(d),w.sub(d);const I=1/(p.x*w.y-w.x*p.y);isFinite(I)&&(S.copy(u).multiplyScalar(w.y).addScaledVector(f,-p.y).multiplyScalar(I),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-w.x).multiplyScalar(I),o[v].add(S),o[M].add(S),o[X].add(S),c[v].add(g),c[M].add(g),c[X].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,M=y.length;v<M;++v){const X=y[v],I=X.start,V=X.count;for(let j=I,K=I+V;j<K;j+=3)m(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const T=new z,E=new z,P=new z,C=new z;function L(v){P.fromBufferAttribute(r,v),C.copy(P);const M=o[v];T.copy(M),T.sub(P.multiplyScalar(P.dot(M))).normalize(),E.crossVectors(C,M);const I=E.dot(c[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,I)}for(let v=0,M=y.length;v<M;++v){const X=y[v],I=X.start,V=X.count;for(let j=I,K=I+V;j<K;j+=3)L(t.getX(j+0)),L(t.getX(j+1)),L(t.getX(j+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,c=new z,l=new z,u=new z,f=new z;if(t)for(let d=0,p=t.count;d<p;d+=3){const w=t.getX(d+0),S=t.getX(d+1),g=t.getX(d+2);r.fromBufferAttribute(e,w),s.fromBufferAttribute(e,S),a.fromBufferAttribute(e,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,w),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(w,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let p=0,w=0;for(let S=0,g=c.length;S<g;S++){o.isInterleavedBufferAttribute?p=c[S]*o.data.stride+o.offset:p=c[S]*u;for(let m=0;m<u;m++)d[w++]=l[p++]}return new Tn(d,u,f)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new nn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Xy=0;class tr extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=ki,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=to,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qa&&(n.blendSrc=this.blendSrc),this.blendDst!==to&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Nn=new z,Ta=new z,qr=new z,ti=new z,Aa=new z,Yr=new z,Ra=new z;class Ad{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ta.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Ta);const s=t.distanceTo(e)*.5,a=-this.direction.dot(qr),o=ti.dot(this.direction),c=-ti.dot(qr),l=ti.lengthSq(),u=Math.abs(1-a*a);let f,d,p,w;if(u>0)if(f=a*c-o,d=a*o-c,w=s*u,f>=0)if(d>=-w)if(d<=w){const S=1/u;f*=S,d*=S,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d<=-w?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=w?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ta).addScaledVector(qr,d),p}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,r,s){Aa.subVectors(e,t),Yr.subVectors(n,t),Ra.crossVectors(Aa,Yr);let a=this.direction.dot(Ra),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,t);const c=o*this.direction.dot(Yr.crossVectors(ti,Yr));if(c<0)return null;const l=o*this.direction.dot(Aa.cross(ti));if(l<0||c+l>a)return null;const u=-o*ti.dot(Ra);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rd extends tr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Bl=new be,ui=new Ad,Kr=new Ws,zl=new z,Jr=new z,$r=new z,Zr=new z,Ca=new z,Qr=new z,Hl=new z,ts=new z;class mn extends ze{constructor(t=new nn,e=new Rd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Qr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Ca.fromBufferAttribute(f,t),a?Qr.addScaledVector(Ca,u):Qr.addScaledVector(Ca.sub(e),u))}e.add(Qr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),ui.copy(t.ray).recast(t.near),!(Kr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Kr,zl)===null||ui.origin.distanceToSquared(zl)>(t.far-t.near)**2))&&(Bl.copy(s).invert(),ui.copy(t.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let w=0,S=d.length;w<S;w++){const g=d[w],m=a[g.materialIndex],y=Math.max(g.start,p.start),T=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let E=y,P=T;E<P;E+=3){const C=o.getX(E),L=o.getX(E+1),v=o.getX(E+2);r=es(this,m,t,n,l,u,f,C,L,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const w=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=w,m=S;g<m;g+=3){const y=o.getX(g),T=o.getX(g+1),E=o.getX(g+2);r=es(this,a,t,n,l,u,f,y,T,E),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let w=0,S=d.length;w<S;w++){const g=d[w],m=a[g.materialIndex],y=Math.max(g.start,p.start),T=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let E=y,P=T;E<P;E+=3){const C=E,L=E+1,v=E+2;r=es(this,m,t,n,l,u,f,C,L,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const w=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let g=w,m=S;g<m;g+=3){const y=g,T=g+1,E=g+2;r=es(this,a,t,n,l,u,f,y,T,E),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function qy(i,t,e,n,r,s,a,o){let c;if(t.side===Je?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===ai,o),c===null)return null;ts.copy(o),ts.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ts);return l<e.near||l>e.far?null:{distance:l,point:ts.clone(),object:i}}function es(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Jr),i.getVertexPosition(c,$r),i.getVertexPosition(l,Zr);const u=qy(i,t,e,n,Jr,$r,Zr,Hl);if(u){const f=new z;sn.getBarycoord(Hl,Jr,$r,Zr,f),r&&(u.uv=sn.getInterpolatedAttribute(r,o,c,l,f,new $t)),s&&(u.uv1=sn.getInterpolatedAttribute(s,o,c,l,f,new $t)),a&&(u.normal=sn.getInterpolatedAttribute(a,o,c,l,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new z,materialIndex:0};sn.getNormal(Jr,$r,Zr,d.normal),u.face=d,u.barycoord=f}return u}class Yy extends je{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Be,u=Be,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pa=new z,Ky=new z,Jy=new zt;class mi{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Pa.subVectors(n,e).cross(Ky.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jy.getNormalMatrix(t),r=this.coplanarPoint(Pa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Ws,$y=new $t(.5,.5),ns=new z;class Cc{constructor(t=new mi,e=new mi,n=new mi,r=new mi,s=new mi,a=new mi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],p=s[7],w=s[8],S=s[9],g=s[10],m=s[11],y=s[12],T=s[13],E=s[14],P=s[15];if(r[0].setComponents(l-a,p-u,m-w,P-y).normalize(),r[1].setComponents(l+a,p+u,m+w,P+y).normalize(),r[2].setComponents(l+o,p+f,m+S,P+T).normalize(),r[3].setComponents(l-o,p-f,m-S,P-T).normalize(),n)r[4].setComponents(c,d,g,E).normalize(),r[5].setComponents(l-c,p-d,m-g,P-E).normalize();else if(r[4].setComponents(l-c,p-d,m-g,P-E).normalize(),e===Sn)r[5].setComponents(l+c,p+d,m+g,P+E).normalize();else if(e===Sr)r[5].setComponents(c,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){_i.center.set(0,0,0);const e=$y.distanceTo(t.center);return _i.radius=.7071067811865476+e,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ns.x=r.normal.x>0?t.max.x:t.min.x,ns.y=r.normal.y>0?t.max.y:t.min.y,ns.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pc extends tr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Is=new z,Ds=new z,Gl=new be,lr=new Ad,is=new Ws,Ia=new z,Vl=new z;class Zy extends ze{constructor(t=new nn,e=new Pc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Is.fromBufferAttribute(e,r-1),Ds.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Is.distanceTo(Ds);t.setAttribute("lineDistance",new He(n,1))}else Ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),is.radius+=s,t.ray.intersectsSphere(is)===!1)return;Gl.copy(r).invert(),lr.copy(t.ray).applyMatrix4(Gl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),w=Math.min(u.count,a.start+a.count);for(let S=p,g=w-1;S<g;S+=l){const m=u.getX(S),y=u.getX(S+1),T=rs(this,t,lr,c,m,y,S);T&&e.push(T)}if(this.isLineLoop){const S=u.getX(w-1),g=u.getX(p),m=rs(this,t,lr,c,S,g,w-1);m&&e.push(m)}}else{const p=Math.max(0,a.start),w=Math.min(d.count,a.start+a.count);for(let S=p,g=w-1;S<g;S+=l){const m=rs(this,t,lr,c,S,S+1,S);m&&e.push(m)}if(this.isLineLoop){const S=rs(this,t,lr,c,w-1,p,w-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function rs(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(Is.fromBufferAttribute(o,r),Ds.fromBufferAttribute(o,s),e.distanceSqToSegment(Is,Ds,Ia,Vl)>n)return;Ia.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ia);if(!(l<t.near||l>t.far))return{distance:l,point:Vl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const kl=new z,Wl=new z;class Cd extends Zy{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)kl.fromBufferAttribute(e,r),Wl.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+kl.distanceTo(Wl);t.setAttribute("lineDistance",new He(n,1))}else Ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pd extends je{constructor(t=[],e=Mi,n,r,s,a,o,c,l,u){super(t,e,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qy extends je{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mr extends je{constructor(t,e,n=An,r,s,a,o=Be,c=Be,l,u=Xn,f=1){if(u!==Xn&&u!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ac(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class tS extends Mr{constructor(t,e=An,n=Mi,r,s,a=Be,o=Be,c,l=Xn){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Id extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ei extends nn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,p=0;w("z","y","x",-1,-1,n,e,t,a,s,0),w("z","y","x",1,-1,n,e,-t,a,s,1),w("x","z","y",1,1,t,n,e,r,a,2),w("x","z","y",1,-1,t,n,-e,r,a,3),w("x","y","z",1,-1,t,e,n,r,s,4),w("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(f,2));function w(S,g,m,y,T,E,P,C,L,v,M){const X=E/L,I=P/v,V=E/2,j=P/2,K=C/2,Y=L+1,W=v+1;let k=0,rt=0;const et=new z;for(let ft=0;ft<W;ft++){const bt=ft*I-j;for(let mt=0;mt<Y;mt++){const Gt=mt*X-V;et[S]=Gt*y,et[g]=bt*T,et[m]=K,l.push(et.x,et.y,et.z),et[S]=0,et[g]=0,et[m]=C>0?1:-1,u.push(et.x,et.y,et.z),f.push(mt/L),f.push(1-ft/v),k+=1}}for(let ft=0;ft<v;ft++)for(let bt=0;bt<L;bt++){const mt=d+bt+Y*ft,Gt=d+bt+Y*(ft+1),ge=d+(bt+1)+Y*(ft+1),pe=d+(bt+1)+Y*ft;c.push(mt,Gt,pe),c.push(Gt,ge,pe),rt+=6}o.addGroup(p,rt,M),p+=rt,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class er extends nn{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new He(s,3)),this.setAttribute("normal",new He(s.slice(),3)),this.setAttribute("uv",new He(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const T=new z,E=new z,P=new z;for(let C=0;C<e.length;C+=3)p(e[C+0],T),p(e[C+1],E),p(e[C+2],P),c(T,E,P,y)}function c(y,T,E,P){const C=P+1,L=[];for(let v=0;v<=C;v++){L[v]=[];const M=y.clone().lerp(E,v/C),X=T.clone().lerp(E,v/C),I=C-v;for(let V=0;V<=I;V++)V===0&&v===C?L[v][V]=M:L[v][V]=M.clone().lerp(X,V/I)}for(let v=0;v<C;v++)for(let M=0;M<2*(C-v)-1;M++){const X=Math.floor(M/2);M%2===0?(d(L[v][X+1]),d(L[v+1][X]),d(L[v][X])):(d(L[v][X+1]),d(L[v+1][X+1]),d(L[v+1][X]))}}function l(y){const T=new z;for(let E=0;E<s.length;E+=3)T.x=s[E+0],T.y=s[E+1],T.z=s[E+2],T.normalize().multiplyScalar(y),s[E+0]=T.x,s[E+1]=T.y,s[E+2]=T.z}function u(){const y=new z;for(let T=0;T<s.length;T+=3){y.x=s[T+0],y.y=s[T+1],y.z=s[T+2];const E=g(y)/2/Math.PI+.5,P=m(y)/Math.PI+.5;a.push(E,1-P)}w(),f()}function f(){for(let y=0;y<a.length;y+=6){const T=a[y+0],E=a[y+2],P=a[y+4],C=Math.max(T,E,P),L=Math.min(T,E,P);C>.9&&L<.1&&(T<.2&&(a[y+0]+=1),E<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function p(y,T){const E=y*3;T.x=t[E+0],T.y=t[E+1],T.z=t[E+2]}function w(){const y=new z,T=new z,E=new z,P=new z,C=new $t,L=new $t,v=new $t;for(let M=0,X=0;M<s.length;M+=9,X+=6){y.set(s[M+0],s[M+1],s[M+2]),T.set(s[M+3],s[M+4],s[M+5]),E.set(s[M+6],s[M+7],s[M+8]),C.set(a[X+0],a[X+1]),L.set(a[X+2],a[X+3]),v.set(a[X+4],a[X+5]),P.copy(y).add(T).add(E).divideScalar(3);const I=g(P);S(C,X+0,y,I),S(L,X+2,T,I),S(v,X+4,E,I)}}function S(y,T,E,P){P<0&&y.x===1&&(a[T]=y.x-1),E.x===0&&E.z===0&&(a[T]=P/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.vertices,t.indices,t.radius,t.detail)}}class Ic extends er{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ic(t.radius,t.detail)}}const ss=new z,as=new z,Da=new z,os=new sn;class eS extends nn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(gs*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),d={},p=[];for(let w=0;w<c;w+=3){a?(l[0]=a.getX(w),l[1]=a.getX(w+1),l[2]=a.getX(w+2)):(l[0]=w,l[1]=w+1,l[2]=w+2);const{a:S,b:g,c:m}=os;if(S.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),os.getNormal(Da),f[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let y=0;y<3;y++){const T=(y+1)%3,E=f[y],P=f[T],C=os[u[y]],L=os[u[T]],v=`${E}_${P}`,M=`${P}_${E}`;M in d&&d[M]?(Da.dot(d[M].normal)<=s&&(p.push(C.x,C.y,C.z),p.push(L.x,L.y,L.z)),d[M]=null):v in d||(d[v]={index0:l[y],index1:l[T],normal:Da.clone()})}}for(const w in d)if(d[w]){const{index0:S,index1:g}=d[w];ss.fromBufferAttribute(o,S),as.fromBufferAttribute(o,g),p.push(ss.x,ss.y,ss.z),p.push(as.x,as.y,as.z)}this.setAttribute("position",new He(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Dc extends er{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Dc(t.radius,t.detail)}}class Lc extends er{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Lc(t.radius,t.detail)}}class Ir extends nn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=t/o,d=e/c,p=[],w=[],S=[],g=[];for(let m=0;m<u;m++){const y=m*d-a;for(let T=0;T<l;T++){const E=T*f-s;w.push(E,-y,0),S.push(0,0,1),g.push(T/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){const T=y+l*m,E=y+l*(m+1),P=y+1+l*(m+1),C=y+1+l*m;p.push(T,E,C),p.push(E,P,C)}this.setIndex(p),this.setAttribute("position",new He(w,3)),this.setAttribute("normal",new He(S,3)),this.setAttribute("uv",new He(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fc extends er{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fc(t.radius,t.detail)}}function $i(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=$i(i[e]);for(const r in n)t[r]=n[r]}return t}function nS(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const iS={clone:$i,merge:qe};var rS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends tr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rS,this.fragmentShader=sS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=nS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class aS extends Cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ld extends tr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vd,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oS extends tr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=my,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cS extends tr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Uc extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const La=new be,jl=new z,Xl=new z;class Fd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cc,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(jl),Xl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xl),e.updateMatrixWorld(),La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Sr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const cs=new z,ls=new oi,wn=new z;class Ud extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(cs,ls,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cs,ls,wn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(cs,ls,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cs,ls,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ei=new z,ql=new $t,Yl=new $t;class tn extends Ud{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ko*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,ql,Yl),e.subVectors(Yl,ql)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class lS extends Fd{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class Kl extends Uc{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new lS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Nc extends Ud{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hS extends Fd{constructor(){super(new Nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dS extends Uc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new hS}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class uS extends Uc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hi=-90,Gi=1;class _S extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Hi,Gi,t,e);r.layers=this.layers,this.add(r);const s=new tn(Hi,Gi,t,e);s.layers=this.layers,this.add(s);const a=new tn(Hi,Gi,t,e);a.layers=this.layers,this.add(a);const o=new tn(Hi,Gi,t,e);o.layers=this.layers,this.add(o);const c=new tn(Hi,Gi,t,e);c.layers=this.layers,this.add(c);const l=new tn(Hi,Gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}}class fS extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class pS extends Cd{constructor(t=10,e=10,n=4473924,r=8947848){n=new qt(n),r=new qt(r);const s=e/2,a=t/e,o=t/2,c=[],l=[];for(let d=0,p=0,w=-o;d<=e;d++,w+=a){c.push(-o,0,w,o,0,w),c.push(w,0,-o,w,0,o);const S=d===s?n:r;S.toArray(l,p),p+=3,S.toArray(l,p),p+=3,S.toArray(l,p),p+=3,S.toArray(l,p),p+=3}const u=new nn;u.setAttribute("position",new He(c,3)),u.setAttribute("color",new He(l,3));const f=new Pc({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Jl(i,t,e,n){const r=mS(n);switch(e){case gd:return i*t;case bd:return i*t/r.components*r.byteLength;case yc:return i*t/r.components*r.byteLength;case Ki:return i*t*2/r.components*r.byteLength;case Sc:return i*t*2/r.components*r.byteLength;case wd:return i*t*3/r.components*r.byteLength;case fn:return i*t*4/r.components*r.byteLength;case Mc:return i*t*4/r.components*r.byteLength;case _s:case fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:case fo:return Math.max(i,16)*Math.max(t,8)/4;case ho:case _o:return Math.max(i,8)*Math.max(t,8)/2;case po:case mo:case wo:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case go:case vo:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case No:case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zo:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Go:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mS(i){switch(i){case en:case _d:return{byteLength:1,components:1};case xr:case fd:case jn:return{byteLength:2,components:1};case vc:case xc:return{byteLength:2,components:4};case An:case bc:case yn:return{byteLength:4,components:1};case pd:case md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nd(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function gS(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((p,w)=>p.start-w.start);let d=0;for(let p=1;p<f.length;p++){const w=f[d],S=f[p];S.start<=w.start+w.count+1?w.count=Math.max(w.count,S.start+S.count-w.start):(++d,f[d]=S)}f.length=d+1;for(let p=0,w=f.length;p<w;p++){const S=f[p];i.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var wS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bS=`#ifdef USE_ALPHAHASH
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
#endif`,vS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MS=`#ifdef USE_AOMAP
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
#endif`,ES=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TS=`#ifdef USE_BATCHING
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
#endif`,AS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IS=`#ifdef USE_IRIDESCENCE
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
#endif`,DS=`#ifdef USE_BUMPMAP
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
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,HS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,GS=`#define PI 3.141592653589793
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
} // validated`,VS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kS=`vec3 transformedNormal = objectNormal;
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
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YS="gl_FragColor = linearToOutputTexel( gl_FragColor );",KS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JS=`#ifdef USE_ENVMAP
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
#endif`,$S=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
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
#endif`,QS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
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
}`,aM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lM=`uniform bool receiveShadow;
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
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,dM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pM=`PhysicalMaterial material;
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
#endif`,mM=`uniform sampler2D dfgLUT;
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
}`,gM=`
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
#endif`,wM=`#if defined( RE_IndirectDiffuse )
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
#endif`,bM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AM=`#if defined( USE_POINTS_UV )
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
#endif`,RM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LM=`#ifdef USE_MORPHTARGETS
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
#endif`,FM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HM=`#ifdef USE_NORMALMAP
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
#endif`,GM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$M=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nE=`float getShadowMask() {
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
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rE=`#ifdef USE_SKINNING
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
#endif`,sE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aE=`#ifdef USE_SKINNING
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
#endif`,oE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dE=`#ifdef USE_TRANSMISSION
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
#endif`,uE=`#ifdef USE_TRANSMISSION
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wE=`uniform sampler2D t2D;
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`#include <common>
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
}`,ME=`#if DEPTH_PACKING == 3200
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
}`,EE=`#define DISTANCE
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
}`,TE=`#define DISTANCE
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`uniform float scale;
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
}`,PE=`uniform vec3 diffuse;
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
}`,IE=`#include <common>
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
}`,DE=`uniform vec3 diffuse;
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
}`,LE=`#define LAMBERT
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
}`,FE=`#define LAMBERT
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
}`,UE=`#define MATCAP
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
}`,NE=`#define MATCAP
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
}`,OE=`#define NORMAL
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
}`,BE=`#define NORMAL
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
}`,zE=`#define PHONG
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
}`,HE=`#define PHONG
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
}`,GE=`#define STANDARD
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
}`,VE=`#define STANDARD
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
}`,kE=`#define TOON
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
}`,WE=`#define TOON
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
}`,jE=`uniform float size;
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
}`,XE=`uniform vec3 diffuse;
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
}`,qE=`#include <common>
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
}`,YE=`uniform vec3 color;
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
}`,KE=`uniform float rotation;
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
}`,JE=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:wS,alphahash_pars_fragment:bS,alphamap_fragment:vS,alphamap_pars_fragment:xS,alphatest_fragment:yS,alphatest_pars_fragment:SS,aomap_fragment:MS,aomap_pars_fragment:ES,batching_pars_vertex:TS,batching_vertex:AS,begin_vertex:RS,beginnormal_vertex:CS,bsdfs:PS,iridescence_fragment:IS,bumpmap_pars_fragment:DS,clipping_planes_fragment:LS,clipping_planes_pars_fragment:FS,clipping_planes_pars_vertex:US,clipping_planes_vertex:NS,color_fragment:OS,color_pars_fragment:BS,color_pars_vertex:zS,color_vertex:HS,common:GS,cube_uv_reflection_fragment:VS,defaultnormal_vertex:kS,displacementmap_pars_vertex:WS,displacementmap_vertex:jS,emissivemap_fragment:XS,emissivemap_pars_fragment:qS,colorspace_fragment:YS,colorspace_pars_fragment:KS,envmap_fragment:JS,envmap_common_pars_fragment:$S,envmap_pars_fragment:ZS,envmap_pars_vertex:QS,envmap_physical_pars_fragment:hM,envmap_vertex:tM,fog_vertex:eM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:rM,gradientmap_pars_fragment:sM,lightmap_pars_fragment:aM,lights_lambert_fragment:oM,lights_lambert_pars_fragment:cM,lights_pars_begin:lM,lights_toon_fragment:dM,lights_toon_pars_fragment:uM,lights_phong_fragment:_M,lights_phong_pars_fragment:fM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:wM,lights_fragment_end:bM,logdepthbuf_fragment:vM,logdepthbuf_pars_fragment:xM,logdepthbuf_pars_vertex:yM,logdepthbuf_vertex:SM,map_fragment:MM,map_pars_fragment:EM,map_particle_fragment:TM,map_particle_pars_fragment:AM,metalnessmap_fragment:RM,metalnessmap_pars_fragment:CM,morphinstance_vertex:PM,morphcolor_vertex:IM,morphnormal_vertex:DM,morphtarget_pars_vertex:LM,morphtarget_vertex:FM,normal_fragment_begin:UM,normal_fragment_maps:NM,normal_pars_fragment:OM,normal_pars_vertex:BM,normal_vertex:zM,normalmap_pars_fragment:HM,clearcoat_normal_fragment_begin:GM,clearcoat_normal_fragment_maps:VM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:WM,opaque_fragment:jM,packing:XM,premultiplied_alpha_fragment:qM,project_vertex:YM,dithering_fragment:KM,dithering_pars_fragment:JM,roughnessmap_fragment:$M,roughnessmap_pars_fragment:ZM,shadowmap_pars_fragment:QM,shadowmap_pars_vertex:tE,shadowmap_vertex:eE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:rE,skinning_vertex:sE,skinnormal_vertex:aE,specularmap_fragment:oE,specularmap_pars_fragment:cE,tonemapping_fragment:lE,tonemapping_pars_fragment:hE,transmission_fragment:dE,transmission_pars_fragment:uE,uv_pars_fragment:_E,uv_pars_vertex:fE,uv_vertex:pE,worldpos_vertex:mE,background_vert:gE,background_frag:wE,backgroundCube_vert:bE,backgroundCube_frag:vE,cube_vert:xE,cube_frag:yE,depth_vert:SE,depth_frag:ME,distance_vert:EE,distance_frag:TE,equirect_vert:AE,equirect_frag:RE,linedashed_vert:CE,linedashed_frag:PE,meshbasic_vert:IE,meshbasic_frag:DE,meshlambert_vert:LE,meshlambert_frag:FE,meshmatcap_vert:UE,meshmatcap_frag:NE,meshnormal_vert:OE,meshnormal_frag:BE,meshphong_vert:zE,meshphong_frag:HE,meshphysical_vert:GE,meshphysical_frag:VE,meshtoon_vert:kE,meshtoon_frag:WE,points_vert:jE,points_frag:XE,shadow_vert:qE,shadow_frag:YE,sprite_vert:KE,sprite_frag:JE},dt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},xn={basic:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:qe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:qe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:qe([dt.points,dt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:qe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:qe([dt.common,dt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:qe([dt.sprite,dt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:qe([dt.common,dt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:qe([dt.lights,dt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};xn.physical={uniforms:qe([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const hs={r:0,b:0,g:0},fi=new Rn,$E=new be;function ZE(i,t,e,n,r,s){const a=new qt(0);let o=r===!0?0:1,c,l,u=null,f=0,d=null;function p(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const E=y.backgroundBlurriness>0;T=t.get(T,E)}return T}function w(y){let T=!1;const E=p(y);E===null?g(a,o):E&&E.isColor&&(g(E,1),T=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(y,T){const E=p(T);E&&(E.isCubeTexture||E.mapping===ks)?(l===void 0&&(l=new mn(new Ei(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:$i(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),fi.copy(T.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($E.makeRotationFromEuler(fi)),l.material.toneMapped=Qt.getTransfer(E.colorSpace)!==se,(u!==E||f!==E.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new mn(new Ir(2,2),new Cn({name:"BackgroundMaterial",uniforms:$i(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(E.colorSpace)!==se,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,T){y.getRGB(hs,Dd(i)),e.buffers.color.setClear(hs.r,hs.g,hs.b,T,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:w,addToRenderList:S,dispose:m}}function QE(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(I,V,j,K,Y){let W=!1;const k=f(I,K,j,V);s!==k&&(s=k,l(s.object)),W=p(I,K,j,Y),W&&w(I,K,j,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,E(I,V,j,K),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,V,j,K){const Y=K.wireframe===!0;let W=n[V.id];W===void 0&&(W={},n[V.id]=W);const k=I.isInstancedMesh===!0?I.id:0;let rt=W[k];rt===void 0&&(rt={},W[k]=rt);let et=rt[j.id];et===void 0&&(et={},rt[j.id]=et);let ft=et[Y];return ft===void 0&&(ft=d(c()),et[Y]=ft),ft}function d(I){const V=[],j=[],K=[];for(let Y=0;Y<e;Y++)V[Y]=0,j[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:K,object:I,attributes:{},index:null}}function p(I,V,j,K){const Y=s.attributes,W=V.attributes;let k=0;const rt=j.getAttributes();for(const et in rt)if(rt[et].location>=0){const bt=Y[et];let mt=W[et];if(mt===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(mt=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(mt=I.instanceColor)),bt===void 0||bt.attribute!==mt||mt&&bt.data!==mt.data)return!0;k++}return s.attributesNum!==k||s.index!==K}function w(I,V,j,K){const Y={},W=V.attributes;let k=0;const rt=j.getAttributes();for(const et in rt)if(rt[et].location>=0){let bt=W[et];bt===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(bt=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(bt=I.instanceColor));const mt={};mt.attribute=bt,bt&&bt.data&&(mt.data=bt.data),Y[et]=mt,k++}s.attributes=Y,s.attributesNum=k,s.index=K}function S(){const I=s.newAttributes;for(let V=0,j=I.length;V<j;V++)I[V]=0}function g(I){m(I,0)}function m(I,V){const j=s.newAttributes,K=s.enabledAttributes,Y=s.attributeDivisors;j[I]=1,K[I]===0&&(i.enableVertexAttribArray(I),K[I]=1),Y[I]!==V&&(i.vertexAttribDivisor(I,V),Y[I]=V)}function y(){const I=s.newAttributes,V=s.enabledAttributes;for(let j=0,K=V.length;j<K;j++)V[j]!==I[j]&&(i.disableVertexAttribArray(j),V[j]=0)}function T(I,V,j,K,Y,W,k){k===!0?i.vertexAttribIPointer(I,V,j,Y,W):i.vertexAttribPointer(I,V,j,K,Y,W)}function E(I,V,j,K){S();const Y=K.attributes,W=j.getAttributes(),k=V.defaultAttributeValues;for(const rt in W){const et=W[rt];if(et.location>=0){let ft=Y[rt];if(ft===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(ft=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(ft=I.instanceColor)),ft!==void 0){const bt=ft.normalized,mt=ft.itemSize,Gt=t.get(ft);if(Gt===void 0)continue;const ge=Gt.buffer,pe=Gt.type,Q=Gt.bytesPerElement,ot=pe===i.INT||pe===i.UNSIGNED_INT||ft.gpuType===bc;if(ft.isInterleavedBufferAttribute){const ht=ft.data,Bt=ht.stride,Dt=ft.offset;if(ht.isInstancedInterleavedBuffer){for(let Ut=0;Ut<et.locationSize;Ut++)m(et.location+Ut,ht.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ut=0;Ut<et.locationSize;Ut++)g(et.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Ut=0;Ut<et.locationSize;Ut++)T(et.location+Ut,mt/et.locationSize,pe,bt,Bt*Q,(Dt+mt/et.locationSize*Ut)*Q,ot)}else{if(ft.isInstancedBufferAttribute){for(let ht=0;ht<et.locationSize;ht++)m(et.location+ht,ft.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ht=0;ht<et.locationSize;ht++)g(et.location+ht);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ht=0;ht<et.locationSize;ht++)T(et.location+ht,mt/et.locationSize,pe,bt,mt*Q,mt/et.locationSize*ht*Q,ot)}}else if(k!==void 0){const bt=k[rt];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(et.location,bt);break;case 3:i.vertexAttrib3fv(et.location,bt);break;case 4:i.vertexAttrib4fv(et.location,bt);break;default:i.vertexAttrib1fv(et.location,bt)}}}}y()}function P(){M();for(const I in n){const V=n[I];for(const j in V){const K=V[j];for(const Y in K){const W=K[Y];for(const k in W)u(W[k].object),delete W[k];delete K[Y]}}delete n[I]}}function C(I){if(n[I.id]===void 0)return;const V=n[I.id];for(const j in V){const K=V[j];for(const Y in K){const W=K[Y];for(const k in W)u(W[k].object),delete W[k];delete K[Y]}}delete n[I.id]}function L(I){for(const V in n){const j=n[V];for(const K in j){const Y=j[K];if(Y[I.id]===void 0)continue;const W=Y[I.id];for(const k in W)u(W[k].object),delete W[k];delete Y[I.id]}}}function v(I){for(const V in n){const j=n[V],K=I.isInstancedMesh===!0?I.id:0,Y=j[K];if(Y!==void 0){for(const W in Y){const k=Y[W];for(const rt in k)u(k[rt].object),delete k[rt];delete Y[W]}delete j[K],Object.keys(j).length===0&&delete n[V]}}}function M(){X(),a=!0,s!==r&&(s=r,l(s.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfObject:v,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:g,disableUnusedAttributes:y}}function tT(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function o(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let p=0;for(let w=0;w<f;w++)p+=u[w];e.update(p,n,1)}function c(l,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let w=0;w<l.length;w++)a(l[w],u[w],d[w]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let w=0;for(let S=0;S<f;S++)w+=u[S]*d[S];e.update(w,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function eT(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==fn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const v=L===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==en&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==yn&&!v)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Ft("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:w,maxTextureSize:S,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:E,maxSamples:P,samples:C}}function nT(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new mi,o=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const w=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!r||w===null||w.length===0||s&&!g)s?u(null):l();else{const y=s?0:n,T=y*4;let E=m.clippingState||null;c.value=E,E=u(w,d,T,p);for(let P=0;P!==T;++P)E[P]=e[P];m.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,p,w){const S=f!==null?f.length:0;let g=null;if(S!==0){if(g=c.value,w!==!0||g===null){const m=p+S*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,E=p;T!==S;++T,E+=4)a.copy(f[T]).applyMatrix4(y,o),a.normal.toArray(g,E),g[E+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}const ii=4,$l=[.125,.215,.35,.446,.526,.582],wi=20,iT=256,hr=new Nc,Zl=new qt;let Fa=null,Ua=0,Na=0,Oa=!1;const rT=new z;class Ql{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=rT}=s;Fa=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,Ua,Na),this._renderer.xr.enabled=Oa,t.scissorTest=!1,Vi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:jn,format:fn,colorSpace:Ji,depthBuffer:!1},r=th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sT(s)),this._blurMaterial=oT(s,t,e),this._ggxMaterial=aT(s,t,e)}return r}_compileMaterial(t){const e=new mn(new nn,t);this._renderer.compile(e,hr)}_sceneToCubeUV(t,e,n,r,s){const c=new tn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Zl),f.toneMapping=Mn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new Ei,new Rd({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let m=!1;const y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,m=!0):(g.color.copy(Zl),m=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const P=this._cubeSize;Vi(r,E*P,T>2?P:0,P,P),f.setRenderTarget(r),m&&f.render(S,c),f.render(t,c)}f.toneMapping=p,f.autoClear=d,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Mi||t.mapping===Yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Vi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,hr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=0+l*1.25,p=f*d,{_lodMax:w}=this,S=this._sizeLods[n],g=3*S*(n>w-ii?n-w+ii:0),m=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=w-e,Vi(s,g,m,3*S,2*S),r.setRenderTarget(s),r.render(o,hr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=w-n,Vi(t,g,m,3*S,2*S),r.setRenderTarget(t),r.render(o,hr)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ee("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const d=l.uniforms,p=this._sizeLods[n]-1,w=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*wi-1),S=s/w,g=isFinite(s)?1+Math.floor(u*S):wi;g>wi&&Ft(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${wi}`);const m=[];let y=0;for(let L=0;L<wi;++L){const v=L/S,M=Math.exp(-v*v/2);m.push(M),L===0?y+=M:L<g&&(y+=2*M)}for(let L=0;L<m.length;L++)m[L]=m[L]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=w,d.mipInt.value=T-n;const E=this._sizeLods[r],P=3*E*(r>T-ii?r-T+ii:0),C=4*(this._cubeSize-E);Vi(e,P,C,3*E,2*E),c.setRenderTarget(e),c.render(f,hr)}}function sT(i){const t=[],e=[],n=[];let r=i;const s=i-ii+1+$l.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-ii?c=$l[a-i+ii-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,w=6,S=3,g=2,m=1,y=new Float32Array(S*w*p),T=new Float32Array(g*w*p),E=new Float32Array(m*w*p);for(let C=0;C<p;C++){const L=C%3*2/3-1,v=C>2?0:-1,M=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];y.set(M,S*w*C),T.set(d,g*w*C);const X=[C,C,C,C,C,C];E.set(X,m*w*C)}const P=new nn;P.setAttribute("position",new Tn(y,S)),P.setAttribute("uv",new Tn(T,g)),P.setAttribute("faceIndex",new Tn(E,m)),n.push(new mn(P,null)),r>ii&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function th(i,t,e){const n=new En(i,t,e);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vi(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function aT(i,t,e){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:js(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function oT(i,t,e){const n=new Float32Array(wi),r=new z(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:js(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function eh(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:js(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function nh(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function js(){return`

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
	`}class Od extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Pd(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ei(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:zn});s.uniforms.tEquirect.value=e;const a=new mn(r,s),o=e.minFilter;return e.minFilter===xi&&(e.minFilter=We),new _S(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function cT(i){let t=new WeakMap,e=new WeakMap,n=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===sa||p===aa)if(t.has(d)){const w=t.get(d).texture;return o(w,d.mapping)}else{const w=d.image;if(w&&w.height>0){const S=new Od(w.height);return S.fromEquirectangularTexture(i,d),t.set(d,S),d.addEventListener("dispose",l),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,w=p===sa||p===aa,S=p===Mi||p===Yi;if(w||S){let g=e.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Ql(i)),g=w?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return w&&y&&y.height>0||S&&y&&c(y)?(n===null&&(n=new Ql(i)),g=w?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,p){return p===sa?d.mapping=Mi:p===aa&&(d.mapping=Yi),d}function c(d){let p=0;const w=6;for(let S=0;S<w;S++)d[S]!==void 0&&p++;return p===w}function l(d){const p=d.target;p.removeEventListener("dispose",l);const w=t.get(p);w!==void 0&&(t.delete(p),w.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const w=e.get(p);w!==void 0&&(e.delete(p),w.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function lT(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ps("WebGLRenderer: "+n+" extension not supported."),r}}}function hT(i,t,e,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const w in d.attributes)t.remove(d.attributes[w]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(f){const d=[],p=f.index,w=f.attributes.position;let S=0;if(w===void 0)return;if(p!==null){const y=p.array;S=p.version;for(let T=0,E=y.length;T<E;T+=3){const P=y[T+0],C=y[T+1],L=y[T+2];d.push(P,C,C,L,L,P)}}else{const y=w.array;S=w.version;for(let T=0,E=y.length/3-1;T<E;T+=3){const P=T+0,C=T+1,L=T+2;d.push(P,C,C,L,L,P)}}const g=new(w.count>=65535?Td:Ed)(d,1);g.version=S;const m=s.get(f);m&&t.remove(m),s.set(f,g)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function dT(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),e.update(p,n,1)}function l(d,p,w){w!==0&&(i.drawElementsInstanced(n,p,s,d*a,w),e.update(p,n,w))}function u(d,p,w){if(w===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,w);let g=0;for(let m=0;m<w;m++)g+=p[m];e.update(g,n,1)}function f(d,p,w,S){if(w===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/a,p[m],S[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,S,0,w);let m=0;for(let y=0;y<w;y++)m+=p[y]*S[y];e.update(m,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function uT(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:ee("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function _T(i,t,e){const n=new WeakMap,r=new xe;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let M=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,w=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),w===!0&&(T=2),S===!0&&(T=3);let E=o.attributes.position.count*T,P=1;E>t.maxTextureSize&&(P=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const C=new Float32Array(E*P*4*f),L=new yd(C,E,P,f);L.type=yn,L.needsUpdate=!0;const v=T*4;for(let X=0;X<f;X++){const I=g[X],V=m[X],j=y[X],K=E*P*4*X;for(let Y=0;Y<I.count;Y++){const W=Y*v;p===!0&&(r.fromBufferAttribute(I,Y),C[K+W+0]=r.x,C[K+W+1]=r.y,C[K+W+2]=r.z,C[K+W+3]=0),w===!0&&(r.fromBufferAttribute(V,Y),C[K+W+4]=r.x,C[K+W+5]=r.y,C[K+W+6]=r.z,C[K+W+7]=0),S===!0&&(r.fromBufferAttribute(j,Y),C[K+W+8]=r.x,C[K+W+9]=r.y,C[K+W+10]=r.z,C[K+W+11]=j.itemSize===4?r.w:1)}}d={count:f,texture:L,size:new $t(E,P)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let S=0;S<l.length;S++)p+=l[S];const w=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",w),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function fT(i,t,e,n,r){let s=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,d=t.get(l,f);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const pT={[ad]:"LINEAR_TONE_MAPPING",[od]:"REINHARD_TONE_MAPPING",[cd]:"CINEON_TONE_MAPPING",[wc]:"ACES_FILMIC_TONE_MAPPING",[hd]:"AGX_TONE_MAPPING",[dd]:"NEUTRAL_TONE_MAPPING",[ld]:"CUSTOM_TONE_MAPPING"};function mT(i,t,e,n,r){const s=new En(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),a=new En(t,e,{type:jn,depthBuffer:!1,stencilBuffer:!1}),o=new nn;o.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new He([0,2,0,0,2,0],2));const c=new aS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new mn(o,c),u=new Nc(-1,1,1,-1,0,1);let f=null,d=null,p=!1,w,S=null,g=[],m=!1;this.setSize=function(y,T){s.setSize(y,T),a.setSize(y,T);for(let E=0;E<g.length;E++){const P=g[E];P.setSize&&P.setSize(y,T)}},this.setEffects=function(y){g=y,m=g.length>0&&g[0].isRenderPass===!0;const T=s.width,E=s.height;for(let P=0;P<g.length;P++){const C=g[P];C.setSize&&C.setSize(T,E)}},this.begin=function(y,T){if(p||y.toneMapping===Mn&&g.length===0)return!1;if(S=T,T!==null){const E=T.width,P=T.height;(s.width!==E||s.height!==P)&&this.setSize(E,P)}return m===!1&&y.setRenderTarget(s),w=y.toneMapping,y.toneMapping=Mn,!0},this.hasRenderPass=function(){return m},this.end=function(y,T){y.toneMapping=w,p=!0;let E=s,P=a;for(let C=0;C<g.length;C++){const L=g[C];if(L.enabled!==!1&&(L.render(y,P,E,T),L.needsSwap!==!1)){const v=E;E=P,P=v}}if(f!==y.outputColorSpace||d!==y.toneMapping){f=y.outputColorSpace,d=y.toneMapping,c.defines={},Qt.getTransfer(f)===se&&(c.defines.SRGB_TRANSFER="");const C=pT[d];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(S),y.render(l,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Bd=new je,Wo=new Mr(1,1),zd=new yd,Hd=new Fy,Gd=new Pd,ih=[],rh=[],sh=new Float32Array(16),ah=new Float32Array(9),oh=new Float32Array(4);function nr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ih[r];if(s===void 0&&(s=new Float32Array(r),ih[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xs(i,t){let e=rh[t];e===void 0&&(e=new Int32Array(t),rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function bT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function vT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function xT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),Ie(e,n)}}function yT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;ah.set(n),i.uniformMatrix3fv(this.addr,!1,ah),Ie(e,n)}}function ST(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;sh.set(n),i.uniformMatrix4fv(this.addr,!1,sh),Ie(e,n)}}function MT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ET(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function TT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function AT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function RT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function CT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function PT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function IT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function DT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Wo.compareFunction=e.isReversedDepthBuffer()?Tc:Ec,s=Wo):s=Bd,e.setTexture2D(t||s,r)}function LT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Hd,r)}function FT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Gd,r)}function UT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||zd,r)}function NT(i){switch(i){case 5126:return gT;case 35664:return wT;case 35665:return bT;case 35666:return vT;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return RT;case 36294:return CT;case 36295:return PT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return UT}}function OT(i,t){i.uniform1fv(this.addr,t)}function BT(i,t){const e=nr(t,this.size,2);i.uniform2fv(this.addr,e)}function zT(i,t){const e=nr(t,this.size,3);i.uniform3fv(this.addr,e)}function HT(i,t){const e=nr(t,this.size,4);i.uniform4fv(this.addr,e)}function GT(i,t){const e=nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function VT(i,t){const e=nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kT(i,t){const e=nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function WT(i,t){i.uniform1iv(this.addr,t)}function jT(i,t){i.uniform2iv(this.addr,t)}function XT(i,t){i.uniform3iv(this.addr,t)}function qT(i,t){i.uniform4iv(this.addr,t)}function YT(i,t){i.uniform1uiv(this.addr,t)}function KT(i,t){i.uniform2uiv(this.addr,t)}function JT(i,t){i.uniform3uiv(this.addr,t)}function $T(i,t){i.uniform4uiv(this.addr,t)}function ZT(i,t,e){const n=this.cache,r=t.length,s=Xs(e,r);Pe(n,s)||(i.uniform1iv(this.addr,s),Ie(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Wo:a=Bd;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function QT(i,t,e){const n=this.cache,r=t.length,s=Xs(e,r);Pe(n,s)||(i.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Hd,s[a])}function tA(i,t,e){const n=this.cache,r=t.length,s=Xs(e,r);Pe(n,s)||(i.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Gd,s[a])}function eA(i,t,e){const n=this.cache,r=t.length,s=Xs(e,r);Pe(n,s)||(i.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||zd,s[a])}function nA(i){switch(i){case 5126:return OT;case 35664:return BT;case 35665:return zT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return kT;case 5124:case 35670:return WT;case 35667:case 35671:return jT;case 35668:case 35672:return XT;case 35669:case 35673:return qT;case 5125:return YT;case 36294:return KT;case 36295:return JT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return eA}}class iA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=NT(e.type)}}class rA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nA(e.type)}}class sA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function ch(i,t){i.seq.push(t),i.map[t.id]=t}function aA(i,t,e){const n=i.name,r=n.length;for(Ba.lastIndex=0;;){const s=Ba.exec(n),a=Ba.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ch(e,l===void 0?new iA(o,i,t):new rA(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new sA(o),ch(e,f)),e=f}}}class ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);aA(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function lh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const oA=37297;let cA=0;function lA(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const hh=new zt;function hA(i){Qt._getMatrix(hh,Qt.workingColorSpace,i);const t=`mat3( ${hh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Rs:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+lA(i.getShaderSource(t),o)}else return s}function dA(i,t){const e=hA(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const uA={[ad]:"Linear",[od]:"Reinhard",[cd]:"Cineon",[wc]:"ACESFilmic",[hd]:"AgX",[dd]:"Neutral",[ld]:"Custom"};function _A(i,t){const e=uA[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ds=new z;function fA(){Qt.getLuminanceCoefficients(ds);const i=ds.x.toFixed(4),t=ds.y.toFixed(4),e=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function mA(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gA(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fr(i){return i!==""}function uh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(i){return i.replace(wA,vA)}const bA=new Map;function vA(i,t){let e=Vt[t];if(e===void 0){const n=bA.get(t);if(n!==void 0)e=Vt[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jo(e)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(xA,yA)}function yA(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ph(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const SA={[us]:"SHADOWMAP_TYPE_PCF",[_r]:"SHADOWMAP_TYPE_VSM"};function MA(i){return SA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const EA={[Mi]:"ENVMAP_TYPE_CUBE",[Yi]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE_UV"};function TA(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":EA[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const AA={[Yi]:"ENVMAP_MODE_REFRACTION"};function RA(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":AA[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CA={[sd]:"ENVMAP_BLENDING_MULTIPLY",[_y]:"ENVMAP_BLENDING_MIX",[fy]:"ENVMAP_BLENDING_ADD"};function PA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":CA[i.combine]||"ENVMAP_BLENDING_NONE"}function IA(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function DA(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=MA(e),l=TA(e),u=RA(e),f=PA(e),d=IA(e),p=pA(e),w=mA(s),S=r.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(fr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(fr).join(`
`),m.length>0&&(m+=`
`)):(g=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),m=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Mn?_A("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,dA("linearToOutputTexel",e.outputColorSpace),fA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),a=jo(a),a=uh(a,e),a=_h(a,e),o=jo(o),o=uh(o,e),o=_h(o,e),a=fh(a),o=fh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=y+g+a,E=y+m+o,P=lh(r,r.VERTEX_SHADER,T),C=lh(r,r.FRAGMENT_SHADER,E);r.attachShader(S,P),r.attachShader(S,C),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function L(I){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(S)||"",j=r.getShaderInfoLog(P)||"",K=r.getShaderInfoLog(C)||"",Y=V.trim(),W=j.trim(),k=K.trim();let rt=!0,et=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,P,C);else{const ft=dh(r,P,"vertex"),bt=dh(r,C,"fragment");ee("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+ft+`
`+bt)}else Y!==""?Ft("WebGLProgram: Program Info Log:",Y):(W===""||k==="")&&(et=!1);et&&(I.diagnostics={runnable:rt,programLog:Y,vertexShader:{log:W,prefix:g},fragmentShader:{log:k,prefix:m}})}r.deleteShader(P),r.deleteShader(C),v=new ws(r,S),M=gA(r,S)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let X=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=r.getProgramParameter(S,oA)),X},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cA++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=C,this}let LA=0;class FA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new UA(t),e.set(t,n)),n}}class UA{constructor(t){this.id=LA++,this.code=t,this.usedTimes=0}}function NA(i,t,e,n,r,s){const a=new Sd,o=new FA,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(v){return c.add(v),v===0?"uv":`uv${v}`}function S(v,M,X,I,V){const j=I.fog,K=V.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=t.get(v.envMap||Y,W),rt=k&&k.mapping===ks?k.image.height:null,et=p[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Ft("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,bt=ft!==void 0?ft.length:0;let mt=0;K.morphAttributes.position!==void 0&&(mt=1),K.morphAttributes.normal!==void 0&&(mt=2),K.morphAttributes.color!==void 0&&(mt=3);let Gt,ge,pe,Q;if(et){const re=xn[et];Gt=re.vertexShader,ge=re.fragmentShader}else Gt=v.vertexShader,ge=v.fragmentShader,o.update(v),pe=o.getVertexShaderID(v),Q=o.getFragmentShaderID(v);const ot=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),Bt=V.isInstancedMesh===!0,Dt=V.isBatchedMesh===!0,Ut=!!v.map,De=!!v.matcap,Zt=!!k,ie=!!v.aoMap,he=!!v.lightMap,Wt=!!v.bumpMap,ye=!!v.normalMap,D=!!v.displacementMap,Te=!!v.emissiveMap,ne=!!v.metalnessMap,ue=!!v.roughnessMap,Et=v.anisotropy>0,A=v.clearcoat>0,b=v.dispersion>0,O=v.iridescence>0,Z=v.sheen>0,tt=v.transmission>0,$=Et&&!!v.anisotropyMap,vt=A&&!!v.clearcoatMap,ct=A&&!!v.clearcoatNormalMap,Pt=A&&!!v.clearcoatRoughnessMap,Lt=O&&!!v.iridescenceMap,nt=O&&!!v.iridescenceThicknessMap,st=Z&&!!v.sheenColorMap,xt=Z&&!!v.sheenRoughnessMap,St=!!v.specularMap,pt=!!v.specularColorMap,jt=!!v.specularIntensityMap,U=tt&&!!v.transmissionMap,lt=tt&&!!v.thicknessMap,at=!!v.gradientMap,wt=!!v.alphaMap,it=v.alphaTest>0,J=!!v.alphaHash,yt=!!v.extensions;let Nt=Mn;v.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Nt=i.toneMapping);const _e={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:Gt,fragmentShader:ge,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Dt,batchingColor:Dt&&V._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&V.instanceColor!==null,instancingMorph:Bt&&V.morphTexture!==null,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ji,alphaToCoverage:!!v.alphaToCoverage,map:Ut,matcap:De,envMap:Zt,envMapMode:Zt&&k.mapping,envMapCubeUVHeight:rt,aoMap:ie,lightMap:he,bumpMap:Wt,normalMap:ye,displacementMap:D,emissiveMap:Te,normalMapObjectSpace:ye&&v.normalMapType===gy,normalMapTangentSpace:ye&&v.normalMapType===vd,metalnessMap:ne,roughnessMap:ue,anisotropy:Et,anisotropyMap:$,clearcoat:A,clearcoatMap:vt,clearcoatNormalMap:ct,clearcoatRoughnessMap:Pt,dispersion:b,iridescence:O,iridescenceMap:Lt,iridescenceThicknessMap:nt,sheen:Z,sheenColorMap:st,sheenRoughnessMap:xt,specularMap:St,specularColorMap:pt,specularIntensityMap:jt,transmission:tt,transmissionMap:U,thicknessMap:lt,gradientMap:at,opaque:v.transparent===!1&&v.blending===ki&&v.alphaToCoverage===!1,alphaMap:wt,alphaTest:it,alphaHash:J,combine:v.combine,mapUv:Ut&&w(v.map.channel),aoMapUv:ie&&w(v.aoMap.channel),lightMapUv:he&&w(v.lightMap.channel),bumpMapUv:Wt&&w(v.bumpMap.channel),normalMapUv:ye&&w(v.normalMap.channel),displacementMapUv:D&&w(v.displacementMap.channel),emissiveMapUv:Te&&w(v.emissiveMap.channel),metalnessMapUv:ne&&w(v.metalnessMap.channel),roughnessMapUv:ue&&w(v.roughnessMap.channel),anisotropyMapUv:$&&w(v.anisotropyMap.channel),clearcoatMapUv:vt&&w(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&w(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&w(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&w(v.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&w(v.iridescenceThicknessMap.channel),sheenColorMapUv:st&&w(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&w(v.sheenRoughnessMap.channel),specularMapUv:St&&w(v.specularMap.channel),specularColorMapUv:pt&&w(v.specularColorMap.channel),specularIntensityMapUv:jt&&w(v.specularIntensityMap.channel),transmissionMapUv:U&&w(v.transmissionMap.channel),thicknessMapUv:lt&&w(v.thicknessMap.channel),alphaMapUv:wt&&w(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ye||Et),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(Ut||wt),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||K.attributes.normal===void 0&&ye===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ht,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:mt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Ut&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===se,decodeVideoTextureEmissive:Te&&v.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(v.emissiveMap.colorSpace)===se,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===On,flipSided:v.side===Je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:yt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&v.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function g(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const X in v.defines)M.push(X),M.push(v.defines[X]);return v.isRawShaderMaterial===!1&&(m(M,v),y(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function m(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function y(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function T(v){const M=p[v.type];let X;if(M){const I=xn[M];X=iS.clone(I.uniforms)}else X=v.uniforms;return X}function E(v,M){let X=u.get(M);return X!==void 0?++X.usedTimes:(X=new DA(i,M,v,r),l.push(X),u.set(M,X)),X}function P(v){if(--v.usedTimes===0){const M=l.indexOf(v);l[M]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function C(v){o.remove(v)}function L(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:T,acquireProgram:E,releaseProgram:P,releaseShaderCache:C,programs:l,dispose:L}}function OA(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function BA(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function mh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,w,S,g,m){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:p,material:w,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:g,group:m},i[t]=y):(y.id=d.id,y.object=d,y.geometry=p,y.material=w,y.materialVariant=a(d),y.groupOrder=S,y.renderOrder=d.renderOrder,y.z=g,y.group=m),t++,y}function c(d,p,w,S,g,m){const y=o(d,p,w,S,g,m);w.transmission>0?n.push(y):w.transparent===!0?r.push(y):e.push(y)}function l(d,p,w,S,g,m){const y=o(d,p,w,S,g,m);w.transmission>0?n.unshift(y):w.transparent===!0?r.unshift(y):e.unshift(y)}function u(d,p){e.length>1&&e.sort(d||BA),n.length>1&&n.sort(p||mh),r.length>1&&r.sort(p||mh)}function f(){for(let d=t,p=i.length;d<p;d++){const w=i[d];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function zA(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new gh,i.set(n,[a])):r>=s.length?(a=new gh,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function HA(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new qt};break;case"SpotLight":e={position:new z,direction:new z,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function GA(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let VA=0;function kA(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function WA(i){const t=new HA,e=GA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const r=new z,s=new be,a=new be;function o(l){let u=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,w=0,S=0,g=0,m=0,y=0,T=0,E=0,P=0,C=0,L=0;l.sort(kA);for(let M=0,X=l.length;M<X;M++){const I=l[M],V=I.color,j=I.intensity,K=I.distance;let Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ki?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=V.r*j,f+=V.g*j,d+=V.b*j;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],j);L++}else if(I.isDirectionalLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const k=I.shadow,rt=e.get(I);rt.shadowIntensity=k.intensity,rt.shadowBias=k.bias,rt.shadowNormalBias=k.normalBias,rt.shadowRadius=k.radius,rt.shadowMapSize=k.mapSize,n.directionalShadow[p]=rt,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=I.shadow.matrix,y++}n.directional[p]=W,p++}else if(I.isSpotLight){const W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(V).multiplyScalar(j),W.distance=K,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[S]=W;const k=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,k.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[S]=k.matrix,I.castShadow){const rt=e.get(I);rt.shadowIntensity=k.intensity,rt.shadowBias=k.bias,rt.shadowNormalBias=k.normalBias,rt.shadowRadius=k.radius,rt.shadowMapSize=k.mapSize,n.spotShadow[S]=rt,n.spotShadowMap[S]=Y,E++}S++}else if(I.isRectAreaLight){const W=t.get(I);W.color.copy(V).multiplyScalar(j),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=W,g++}else if(I.isPointLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const k=I.shadow,rt=e.get(I);rt.shadowIntensity=k.intensity,rt.shadowBias=k.bias,rt.shadowNormalBias=k.normalBias,rt.shadowRadius=k.radius,rt.shadowMapSize=k.mapSize,rt.shadowCameraNear=k.camera.near,rt.shadowCameraFar=k.camera.far,n.pointShadow[w]=rt,n.pointShadowMap[w]=Y,n.pointShadowMatrix[w]=I.shadow.matrix,T++}n.point[w]=W,w++}else if(I.isHemisphereLight){const W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(j),W.groundColor.copy(I.groundColor).multiplyScalar(j),n.hemi[m]=W,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const v=n.hash;(v.directionalLength!==p||v.pointLength!==w||v.spotLength!==S||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==y||v.numPointShadows!==T||v.numSpotShadows!==E||v.numSpotMaps!==P||v.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=g,n.point.length=w,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,v.directionalLength=p,v.pointLength=w,v.spotLength=S,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=y,v.numPointShadows=T,v.numSpotShadows=E,v.numSpotMaps=P,v.numLightProbes=L,n.version=VA++)}function c(l,u){let f=0,d=0,p=0,w=0,S=0;const g=u.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const T=l[m];if(T.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),f++}else if(T.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),p++}else if(T.isRectAreaLight){const E=n.rectArea[w];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),w++}else if(T.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),d++}else if(T.isHemisphereLight){const E=n.hemi[S];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(g),S++}}}return{setup:o,setupView:c,state:n}}function wh(i){const t=new WA(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function jA(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new wh(i),t.set(r,[o])):s>=a.length?(o=new wh(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const XA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qA=`uniform sampler2D shadow_pass;
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
}`,YA=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],KA=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],bh=new be,dr=new z,za=new z;function JA(i,t,e){let n=new Cc;const r=new $t,s=new $t,a=new xe,o=new oS,c=new cS,l={},u=e.maxTextureSize,f={[ai]:Je,[Je]:ai,[On]:On},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:XA,fragmentShader:qA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const w=new nn;w.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new mn(w,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let m=this.type;this.render=function(C,L,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===rd&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=us);const M=i.getRenderTarget(),X=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(zn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const j=m!==this.type;j&&L.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(Y=>Y.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,Y=C.length;K<Y;K++){const W=C[K],k=W.shadow;if(k===void 0){Ft("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const rt=k.getFrameExtents();r.multiply(rt),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/rt.x),r.x=s.x*rt.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/rt.y),r.y=s.y*rt.y,k.mapSize.y=s.y));const et=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=et,k.map===null||j===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===_r){if(W.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new En(r.x,r.y,{format:Ki,type:jn,minFilter:We,magFilter:We,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new Mr(r.x,r.y,yn),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=Xn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Be,k.map.depthTexture.magFilter=Be}else W.isPointLight?(k.map=new Od(r.x),k.map.depthTexture=new tS(r.x,An)):(k.map=new En(r.x,r.y),k.map.depthTexture=new Mr(r.x,r.y,An)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=Xn,this.type===us?(k.map.depthTexture.compareFunction=et?Tc:Ec,k.map.depthTexture.minFilter=We,k.map.depthTexture.magFilter=We):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Be,k.map.depthTexture.magFilter=Be);k.camera.updateProjectionMatrix()}const ft=k.map.isWebGLCubeRenderTarget?6:1;for(let bt=0;bt<ft;bt++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(k.map),i.clear());const mt=k.getViewport(bt);a.set(s.x*mt.x,s.y*mt.y,s.x*mt.z,s.y*mt.w),V.viewport(a)}if(W.isPointLight){const mt=k.camera,Gt=k.matrix,ge=W.distance||mt.far;ge!==mt.far&&(mt.far=ge,mt.updateProjectionMatrix()),dr.setFromMatrixPosition(W.matrixWorld),mt.position.copy(dr),za.copy(mt.position),za.add(YA[bt]),mt.up.copy(KA[bt]),mt.lookAt(za),mt.updateMatrixWorld(),Gt.makeTranslation(-dr.x,-dr.y,-dr.z),bh.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(bh,mt.coordinateSystem,mt.reversedDepth)}else k.updateMatrices(W);n=k.getFrustum(),E(L,v,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===_r&&y(k,v),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(M,X,I)};function y(C,L){const v=t.update(S);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new En(r.x,r.y,{format:Ki,type:jn})),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(L,null,v,d,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(L,null,v,p,S,null)}function T(C,L,v,M){let X=null;const I=v.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)X=I;else if(X=v.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const V=X.uuid,j=L.uuid;let K=l[V];K===void 0&&(K={},l[V]=K);let Y=K[j];Y===void 0&&(Y=X.clone(),K[j]=Y,L.addEventListener("dispose",P)),X=Y}if(X.visible=L.visible,X.wireframe=L.wireframe,M===_r?X.side=L.shadowSide!==null?L.shadowSide:L.side:X.side=L.shadowSide!==null?L.shadowSide:f[L.side],X.alphaMap=L.alphaMap,X.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,X.map=L.map,X.clipShadows=L.clipShadows,X.clippingPlanes=L.clippingPlanes,X.clipIntersection=L.clipIntersection,X.displacementMap=L.displacementMap,X.displacementScale=L.displacementScale,X.displacementBias=L.displacementBias,X.wireframeLinewidth=L.wireframeLinewidth,X.linewidth=L.linewidth,v.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const V=i.properties.get(X);V.light=v}return X}function E(C,L,v,M,X){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&X===_r)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,C.matrixWorld);const j=t.update(C),K=C.material;if(Array.isArray(K)){const Y=j.groups;for(let W=0,k=Y.length;W<k;W++){const rt=Y[W],et=K[rt.materialIndex];if(et&&et.visible){const ft=T(C,et,M,X);C.onBeforeShadow(i,C,L,v,j,ft,rt),i.renderBufferDirect(v,null,j,ft,C,rt),C.onAfterShadow(i,C,L,v,j,ft,rt)}}}else if(K.visible){const Y=T(C,K,M,X);C.onBeforeShadow(i,C,L,v,j,Y,null),i.renderBufferDirect(v,null,j,Y,C,null),C.onAfterShadow(i,C,L,v,j,Y,null)}}const V=C.children;for(let j=0,K=V.length;j<K;j++)E(V[j],L,v,M,X)}function P(C){C.target.removeEventListener("dispose",P);for(const v in l){const M=l[v],X=C.target.uuid;X in M&&(M[X].dispose(),delete M[X])}}}function $A(i,t){function e(){let U=!1;const lt=new xe;let at=null;const wt=new xe(0,0,0,0);return{setMask:function(it){at!==it&&!U&&(i.colorMask(it,it,it,it),at=it)},setLocked:function(it){U=it},setClear:function(it,J,yt,Nt,_e){_e===!0&&(it*=Nt,J*=Nt,yt*=Nt),lt.set(it,J,yt,Nt),wt.equals(lt)===!1&&(i.clearColor(it,J,yt,Nt),wt.copy(lt))},reset:function(){U=!1,at=null,wt.set(-1,0,0,0)}}}function n(){let U=!1,lt=!1,at=null,wt=null,it=null;return{setReversed:function(J){if(lt!==J){const yt=t.get("EXT_clip_control");J?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),lt=J;const Nt=it;it=null,this.setClear(Nt)}},getReversed:function(){return lt},setTest:function(J){J?ot(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(J){at!==J&&!U&&(i.depthMask(J),at=J)},setFunc:function(J){if(lt&&(J=Ay[J]),wt!==J){switch(J){case eo:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case ro:i.depthFunc(i.EQUAL);break;case so:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=J}},setLocked:function(J){U=J},setClear:function(J){it!==J&&(it=J,lt&&(J=1-J),i.clearDepth(J))},reset:function(){U=!1,at=null,wt=null,it=null,lt=!1}}}function r(){let U=!1,lt=null,at=null,wt=null,it=null,J=null,yt=null,Nt=null,_e=null;return{setTest:function(re){U||(re?ot(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(re){lt!==re&&!U&&(i.stencilMask(re),lt=re)},setFunc:function(re,Pn,In){(at!==re||wt!==Pn||it!==In)&&(i.stencilFunc(re,Pn,In),at=re,wt=Pn,it=In)},setOp:function(re,Pn,In){(J!==re||yt!==Pn||Nt!==In)&&(i.stencilOp(re,Pn,In),J=re,yt=Pn,Nt=In)},setLocked:function(re){U=re},setClear:function(re){_e!==re&&(i.clearStencil(re),_e=re)},reset:function(){U=!1,lt=null,at=null,wt=null,it=null,J=null,yt=null,Nt=null,_e=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,p=[],w=null,S=!1,g=null,m=null,y=null,T=null,E=null,P=null,C=null,L=new qt(0,0,0),v=0,M=!1,X=null,I=null,V=null,j=null,K=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,k=0;const rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(rt)[1]),W=k>=1):rt.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),W=k>=2);let et=null,ft={};const bt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Gt=new xe().fromArray(bt),ge=new xe().fromArray(mt);function pe(U,lt,at,wt){const it=new Uint8Array(4),J=i.createTexture();i.bindTexture(U,J),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<at;yt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(lt+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return J}const Q={};Q[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(qi),Wt(!1),ye(wl),ot(i.CULL_FACE),ie(zn);function ot(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function ht(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Bt(U,lt){return f[U]!==lt?(i.bindFramebuffer(U,lt),f[U]=lt,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=lt),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Dt(U,lt){let at=p,wt=!1;if(U){at=d.get(lt),at===void 0&&(at=[],d.set(lt,at));const it=U.textures;if(at.length!==it.length||at[0]!==i.COLOR_ATTACHMENT0){for(let J=0,yt=it.length;J<yt;J++)at[J]=i.COLOR_ATTACHMENT0+J;at.length=it.length,wt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,wt=!0);wt&&i.drawBuffers(at)}function Ut(U){return w!==U?(i.useProgram(U),w=U,!0):!1}const De={[gi]:i.FUNC_ADD,[Jx]:i.FUNC_SUBTRACT,[$x]:i.FUNC_REVERSE_SUBTRACT};De[Zx]=i.MIN,De[Qx]=i.MAX;const Zt={[ty]:i.ZERO,[ey]:i.ONE,[ny]:i.SRC_COLOR,[Qa]:i.SRC_ALPHA,[cy]:i.SRC_ALPHA_SATURATE,[ay]:i.DST_COLOR,[ry]:i.DST_ALPHA,[iy]:i.ONE_MINUS_SRC_COLOR,[to]:i.ONE_MINUS_SRC_ALPHA,[oy]:i.ONE_MINUS_DST_COLOR,[sy]:i.ONE_MINUS_DST_ALPHA,[ly]:i.CONSTANT_COLOR,[hy]:i.ONE_MINUS_CONSTANT_COLOR,[dy]:i.CONSTANT_ALPHA,[uy]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(U,lt,at,wt,it,J,yt,Nt,_e,re){if(U===zn){S===!0&&(ht(i.BLEND),S=!1);return}if(S===!1&&(ot(i.BLEND),S=!0),U!==Kx){if(U!==g||re!==M){if((m!==gi||E!==gi)&&(i.blendEquation(i.FUNC_ADD),m=gi,E=gi),re)switch(U){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFunc(i.ONE,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",U);break}else switch(U){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vl:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",U);break}y=null,T=null,P=null,C=null,L.set(0,0,0),v=0,g=U,M=re}return}it=it||lt,J=J||at,yt=yt||wt,(lt!==m||it!==E)&&(i.blendEquationSeparate(De[lt],De[it]),m=lt,E=it),(at!==y||wt!==T||J!==P||yt!==C)&&(i.blendFuncSeparate(Zt[at],Zt[wt],Zt[J],Zt[yt]),y=at,T=wt,P=J,C=yt),(Nt.equals(L)===!1||_e!==v)&&(i.blendColor(Nt.r,Nt.g,Nt.b,_e),L.copy(Nt),v=_e),g=U,M=!1}function he(U,lt){U.side===On?ht(i.CULL_FACE):ot(i.CULL_FACE);let at=U.side===Je;lt&&(at=!at),Wt(at),U.blending===ki&&U.transparent===!1?ie(zn):ie(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const wt=U.stencilWrite;o.setTest(wt),wt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(U){X!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),X=U)}function ye(U){U!==qx?(ot(i.CULL_FACE),U!==I&&(U===wl?i.cullFace(i.BACK):U===Yx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),I=U}function D(U){U!==V&&(W&&i.lineWidth(U),V=U)}function Te(U,lt,at){U?(ot(i.POLYGON_OFFSET_FILL),(j!==lt||K!==at)&&(j=lt,K=at,a.getReversed()&&(lt=-lt),i.polygonOffset(lt,at))):ht(i.POLYGON_OFFSET_FILL)}function ne(U){U?ot(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function ue(U){U===void 0&&(U=i.TEXTURE0+Y-1),et!==U&&(i.activeTexture(U),et=U)}function Et(U,lt,at){at===void 0&&(et===null?at=i.TEXTURE0+Y-1:at=et);let wt=ft[at];wt===void 0&&(wt={type:void 0,texture:void 0},ft[at]=wt),(wt.type!==U||wt.texture!==lt)&&(et!==at&&(i.activeTexture(at),et=at),i.bindTexture(U,lt||Q[U]),wt.type=U,wt.texture=lt)}function A(){const U=ft[et];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function Z(){try{i.texSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function tt(){try{i.texSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function vt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function ct(){try{i.texStorage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function Pt(){try{i.texStorage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function Lt(){try{i.texImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function nt(){try{i.texImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function st(U){Gt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Gt.copy(U))}function xt(U){ge.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ge.copy(U))}function St(U,lt){let at=l.get(lt);at===void 0&&(at=new WeakMap,l.set(lt,at));let wt=at.get(U);wt===void 0&&(wt=i.getUniformBlockIndex(lt,U.name),at.set(U,wt))}function pt(U,lt){const wt=l.get(lt).get(U);c.get(lt)!==wt&&(i.uniformBlockBinding(lt,wt,U.__bindingPointIndex),c.set(lt,wt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},et=null,ft={},f={},d=new WeakMap,p=[],w=null,S=!1,g=null,m=null,y=null,T=null,E=null,P=null,C=null,L=new qt(0,0,0),v=0,M=!1,X=null,I=null,V=null,j=null,K=null,Gt.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ot,disable:ht,bindFramebuffer:Bt,drawBuffers:Dt,useProgram:Ut,setBlending:ie,setMaterial:he,setFlipSided:Wt,setCullFace:ye,setLineWidth:D,setPolygonOffset:Te,setScissorTest:ne,activeTexture:ue,bindTexture:Et,unbindTexture:A,compressedTexImage2D:b,compressedTexImage3D:O,texImage2D:Lt,texImage3D:nt,updateUBOMapping:St,uniformBlockBinding:pt,texStorage2D:ct,texStorage3D:Pt,texSubImage2D:Z,texSubImage3D:tt,compressedTexSubImage2D:$,compressedTexSubImage3D:vt,scissor:st,viewport:xt,reset:jt}}function ZA(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $t,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(A,b){return p?new OffscreenCanvas(A,b):Cs("canvas")}function S(A,b,O){let Z=1;const tt=Et(A);if((tt.width>O||tt.height>O)&&(Z=O/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(Z*tt.width),vt=Math.floor(Z*tt.height);f===void 0&&(f=w($,vt));const ct=b?w($,vt):f;return ct.width=$,ct.height=vt,ct.getContext("2d").drawImage(A,0,0,$,vt),Ft("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+vt+")."),ct}else return"data"in A&&Ft("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function g(A){return A.generateMipmaps}function m(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,b,O,Z,tt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=b;if(b===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),b===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),b===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),b===i.RGBA){const vt=tt?Rs:Qt.getTransfer(Z);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=vt===se?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function E(A,b){let O;return A?b===null||b===An||b===yr?O=i.DEPTH24_STENCIL8:b===yn?O=i.DEPTH32F_STENCIL8:b===xr&&(O=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===An||b===yr?O=i.DEPTH_COMPONENT24:b===yn?O=i.DEPTH_COMPONENT32F:b===xr&&(O=i.DEPTH_COMPONENT16),O}function P(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==We?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function C(A){const b=A.target;b.removeEventListener("dispose",C),v(b),b.isVideoTexture&&u.delete(b)}function L(A){const b=A.target;b.removeEventListener("dispose",L),X(b)}function v(A){const b=n.get(A);if(b.__webglInit===void 0)return;const O=A.source,Z=d.get(O);if(Z){const tt=Z[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(A),Object.keys(Z).length===0&&d.delete(O)}n.remove(A)}function M(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const O=A.source,Z=d.get(O);delete Z[b.__cacheKey],a.memory.textures--}function X(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let tt=0;tt<b.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=A.textures;for(let Z=0,tt=O.length;Z<tt;Z++){const $=n.get(O[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[Z])}n.remove(A)}let I=0;function V(){I=0}function j(){const A=I;return A>=r.maxTextures&&Ft("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function K(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function Y(A,b){const O=n.get(A);if(A.isVideoTexture&&ne(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const Z=A.image;if(Z===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(O,A,b);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function W(A,b){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Q(O,A,b);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function k(A,b){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Q(O,A,b);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function rt(A,b){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){ot(O,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}const et={[co]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},ft={[Be]:i.NEAREST,[py]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},bt={[wy]:i.NEVER,[Sy]:i.ALWAYS,[by]:i.LESS,[Ec]:i.LEQUAL,[vy]:i.EQUAL,[Tc]:i.GEQUAL,[xy]:i.GREATER,[yy]:i.NOTEQUAL};function mt(A,b){if(b.type===yn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===We||b.magFilter===oa||b.magFilter===Br||b.magFilter===xi||b.minFilter===We||b.minFilter===oa||b.minFilter===Br||b.minFilter===xi)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,et[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,et[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,et[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ft[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ft[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,bt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Be||b.minFilter!==Br&&b.minFilter!==xi||b.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Gt(A,b){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",C));const Z=b.source;let tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));const $=K(b);if($!==A.__cacheKey){tt[$]===void 0&&(tt[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),tt[$].usedTimes++;const vt=tt[A.__cacheKey];vt!==void 0&&(tt[A.__cacheKey].usedTimes--,vt.usedTimes===0&&M(b)),A.__cacheKey=$,A.__webglTexture=tt[$].texture}return O}function ge(A,b,O){return Math.floor(Math.floor(A/O)/b)}function pe(A,b,O,Z){const $=A.updateRanges;if($.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,O,Z,b.data);else{$.sort((nt,st)=>nt.start-st.start);let vt=0;for(let nt=1;nt<$.length;nt++){const st=$[vt],xt=$[nt],St=st.start+st.count,pt=ge(xt.start,b.width,4),jt=ge(st.start,b.width,4);xt.start<=St+1&&pt===jt&&ge(xt.start+xt.count-1,b.width,4)===pt?st.count=Math.max(st.count,xt.start+xt.count-st.start):(++vt,$[vt]=xt)}$.length=vt+1;const ct=i.getParameter(i.UNPACK_ROW_LENGTH),Pt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let nt=0,st=$.length;nt<st;nt++){const xt=$[nt],St=Math.floor(xt.start/4),pt=Math.ceil(xt.count/4),jt=St%b.width,U=Math.floor(St/b.width),lt=pt,at=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,jt,U,lt,at,O,Z,b.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function Q(A,b,O){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=Gt(A,b),$=b.source;e.bindTexture(Z,A.__webglTexture,i.TEXTURE0+O);const vt=n.get($);if($.version!==vt.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);const ct=Qt.getPrimaries(Qt.workingColorSpace),Pt=b.colorSpace===ni?null:Qt.getPrimaries(b.colorSpace),Lt=b.colorSpace===ni||ct===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let nt=S(b.image,!1,r.maxTextureSize);nt=ue(b,nt);const st=s.convert(b.format,b.colorSpace),xt=s.convert(b.type);let St=T(b.internalFormat,st,xt,b.colorSpace,b.isVideoTexture);mt(Z,b);let pt;const jt=b.mipmaps,U=b.isVideoTexture!==!0,lt=vt.__version===void 0||tt===!0,at=$.dataReady,wt=P(b,nt);if(b.isDepthTexture)St=E(b.format===yi,b.type),lt&&(U?e.texStorage2D(i.TEXTURE_2D,1,St,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,St,nt.width,nt.height,0,st,xt,null));else if(b.isDataTexture)if(jt.length>0){U&&lt&&e.texStorage2D(i.TEXTURE_2D,wt,St,jt[0].width,jt[0].height);for(let it=0,J=jt.length;it<J;it++)pt=jt[it],U?at&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,pt.width,pt.height,st,xt,pt.data):e.texImage2D(i.TEXTURE_2D,it,St,pt.width,pt.height,0,st,xt,pt.data);b.generateMipmaps=!1}else U?(lt&&e.texStorage2D(i.TEXTURE_2D,wt,St,nt.width,nt.height),at&&pe(b,nt,st,xt)):e.texImage2D(i.TEXTURE_2D,0,St,nt.width,nt.height,0,st,xt,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){U&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,St,jt[0].width,jt[0].height,nt.depth);for(let it=0,J=jt.length;it<J;it++)if(pt=jt[it],b.format!==fn)if(st!==null)if(U){if(at)if(b.layerUpdates.size>0){const yt=Jl(pt.width,pt.height,b.format,b.type);for(const Nt of b.layerUpdates){const _e=pt.data.subarray(Nt*yt/pt.data.BYTES_PER_ELEMENT,(Nt+1)*yt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Nt,pt.width,pt.height,1,st,_e)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,pt.width,pt.height,nt.depth,st,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,St,pt.width,pt.height,nt.depth,0,pt.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,pt.width,pt.height,nt.depth,st,xt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,St,pt.width,pt.height,nt.depth,0,st,xt,pt.data)}else{U&&lt&&e.texStorage2D(i.TEXTURE_2D,wt,St,jt[0].width,jt[0].height);for(let it=0,J=jt.length;it<J;it++)pt=jt[it],b.format!==fn?st!==null?U?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,pt.width,pt.height,st,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,St,pt.width,pt.height,0,pt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?at&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,pt.width,pt.height,st,xt,pt.data):e.texImage2D(i.TEXTURE_2D,it,St,pt.width,pt.height,0,st,xt,pt.data)}else if(b.isDataArrayTexture)if(U){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,St,nt.width,nt.height,nt.depth),at)if(b.layerUpdates.size>0){const it=Jl(nt.width,nt.height,b.format,b.type);for(const J of b.layerUpdates){const yt=nt.data.subarray(J*it/nt.data.BYTES_PER_ELEMENT,(J+1)*it/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,st,xt,yt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,st,xt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,nt.width,nt.height,nt.depth,0,st,xt,nt.data);else if(b.isData3DTexture)U?(lt&&e.texStorage3D(i.TEXTURE_3D,wt,St,nt.width,nt.height,nt.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,st,xt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,St,nt.width,nt.height,nt.depth,0,st,xt,nt.data);else if(b.isFramebufferTexture){if(lt)if(U)e.texStorage2D(i.TEXTURE_2D,wt,St,nt.width,nt.height);else{let it=nt.width,J=nt.height;for(let yt=0;yt<wt;yt++)e.texImage2D(i.TEXTURE_2D,yt,St,it,J,0,st,xt,null),it>>=1,J>>=1}}else if(jt.length>0){if(U&&lt){const it=Et(jt[0]);e.texStorage2D(i.TEXTURE_2D,wt,St,it.width,it.height)}for(let it=0,J=jt.length;it<J;it++)pt=jt[it],U?at&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,st,xt,pt):e.texImage2D(i.TEXTURE_2D,it,St,st,xt,pt);b.generateMipmaps=!1}else if(U){if(lt){const it=Et(nt);e.texStorage2D(i.TEXTURE_2D,wt,St,it.width,it.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st,xt,nt)}else e.texImage2D(i.TEXTURE_2D,0,St,st,xt,nt);g(b)&&m(Z),vt.__version=$.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ot(A,b,O){if(b.image.length!==6)return;const Z=Gt(A,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const $=n.get(tt);if(tt.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);const vt=Qt.getPrimaries(Qt.workingColorSpace),ct=b.colorSpace===ni?null:Qt.getPrimaries(b.colorSpace),Pt=b.colorSpace===ni||vt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Lt=b.isCompressedTexture||b.image[0].isCompressedTexture,nt=b.image[0]&&b.image[0].isDataTexture,st=[];for(let J=0;J<6;J++)!Lt&&!nt?st[J]=S(b.image[J],!0,r.maxCubemapSize):st[J]=nt?b.image[J].image:b.image[J],st[J]=ue(b,st[J]);const xt=st[0],St=s.convert(b.format,b.colorSpace),pt=s.convert(b.type),jt=T(b.internalFormat,St,pt,b.colorSpace),U=b.isVideoTexture!==!0,lt=$.__version===void 0||Z===!0,at=tt.dataReady;let wt=P(b,xt);mt(i.TEXTURE_CUBE_MAP,b);let it;if(Lt){U&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,jt,xt.width,xt.height);for(let J=0;J<6;J++){it=st[J].mipmaps;for(let yt=0;yt<it.length;yt++){const Nt=it[yt];b.format!==fn?St!==null?U?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,0,0,Nt.width,Nt.height,St,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,jt,Nt.width,Nt.height,0,Nt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,0,0,Nt.width,Nt.height,St,pt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,jt,Nt.width,Nt.height,0,St,pt,Nt.data)}}}else{if(it=b.mipmaps,U&&lt){it.length>0&&wt++;const J=Et(st[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,jt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){U?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,st[J].width,st[J].height,St,pt,st[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,st[J].width,st[J].height,0,St,pt,st[J].data);for(let yt=0;yt<it.length;yt++){const _e=it[yt].image[J].image;U?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,0,0,_e.width,_e.height,St,pt,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,jt,_e.width,_e.height,0,St,pt,_e.data)}}else{U?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St,pt,st[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,St,pt,st[J]);for(let yt=0;yt<it.length;yt++){const Nt=it[yt];U?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,0,0,St,pt,Nt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,jt,St,pt,Nt.image[J])}}}g(b)&&m(i.TEXTURE_CUBE_MAP),$.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ht(A,b,O,Z,tt,$){const vt=s.convert(O.format,O.colorSpace),ct=s.convert(O.type),Pt=T(O.internalFormat,vt,ct,O.colorSpace),Lt=n.get(b),nt=n.get(O);if(nt.__renderTarget=b,!Lt.__hasExternalTextures){const st=Math.max(1,b.width>>$),xt=Math.max(1,b.height>>$);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,Pt,st,xt,b.depth,0,vt,ct,null):e.texImage2D(tt,$,Pt,st,xt,0,vt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Te(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,nt.__webglTexture,0,D(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,nt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(A,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const Z=b.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,$=E(b.stencilBuffer,tt),vt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Te(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(b),$,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(b),$,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,$,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,A)}else{const Z=b.textures;for(let tt=0;tt<Z.length;tt++){const $=Z[tt],vt=s.convert($.format,$.colorSpace),ct=s.convert($.type),Pt=T($.internalFormat,vt,ct,$.colorSpace);Te(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(b),Pt,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(b),Pt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(A,b,O){const Z=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(b.depthTexture);if(tt.__renderTarget=b,(!tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),mt(i.TEXTURE_CUBE_MAP,b.depthTexture);const Lt=s.convert(b.depthTexture.format),nt=s.convert(b.depthTexture.type);let st;b.depthTexture.format===Xn?st=i.DEPTH_COMPONENT24:b.depthTexture.format===yi&&(st=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,st,b.width,b.height,0,Lt,nt,null)}}else Y(b.depthTexture,0);const $=tt.__webglTexture,vt=D(b),ct=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Pt=b.depthTexture.format===yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Xn)Te(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pt,ct,$,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,Pt,ct,$,0);else if(b.depthTexture.format===yi)Te(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pt,ct,$,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,Pt,ct,$,0);else throw new Error("Unknown depthTexture format")}function Ut(A){const b=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=Z}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(O)for(let Z=0;Z<6;Z++)Dt(b.__webglFramebuffer[Z],A,Z);else{const Z=A.texture.mipmaps;Z&&Z.length>0?Dt(b.__webglFramebuffer[0],A,0):Dt(b.__webglFramebuffer,A,0)}else if(O){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),Bt(b.__webglDepthbuffer[Z],A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,$)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Bt(b.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,$)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function De(A,b,O){const Z=n.get(A);b!==void 0&&ht(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ut(A)}function Zt(A){const b=A.texture,O=n.get(A),Z=n.get(b);A.addEventListener("dispose",L);const tt=A.textures,$=A.isWebGLCubeRenderTarget===!0,vt=tt.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let Pt=0;Pt<b.mipmaps.length;Pt++)O.__webglFramebuffer[ct][Pt]=i.createFramebuffer()}else O.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<b.mipmaps.length;ct++)O.__webglFramebuffer[ct]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ct=0,Pt=tt.length;ct<Pt;ct++){const Lt=n.get(tt[ct]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Te(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const Pt=tt[ct];O.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);const Lt=s.convert(Pt.format,Pt.colorSpace),nt=s.convert(Pt.type),st=T(Pt.internalFormat,Lt,nt,Pt.colorSpace,A.isXRRenderTarget===!0),xt=D(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,st,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),mt(i.TEXTURE_CUBE_MAP,b);for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)ht(O.__webglFramebuffer[ct][Pt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt);else ht(O.__webglFramebuffer[ct],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(b)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ct=0,Pt=tt.length;ct<Pt;ct++){const Lt=tt[ct],nt=n.get(Lt);let st=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(st=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,nt.__webglTexture),mt(st,Lt),ht(O.__webglFramebuffer,A,Lt,i.COLOR_ATTACHMENT0+ct,st,0),g(Lt)&&m(st)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Z.__webglTexture),mt(ct,b),b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)ht(O.__webglFramebuffer[Pt],A,b,i.COLOR_ATTACHMENT0,ct,Pt);else ht(O.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ct,0);g(b)&&m(ct),e.unbindTexture()}A.depthBuffer&&Ut(A)}function ie(A){const b=A.textures;for(let O=0,Z=b.length;O<Z;O++){const tt=b[O];if(g(tt)){const $=y(A),vt=n.get(tt).__webglTexture;e.bindTexture($,vt),m($),e.unbindTexture()}}}const he=[],Wt=[];function ye(A){if(A.samples>0){if(Te(A)===!1){const b=A.textures,O=A.width,Z=A.height;let tt=i.COLOR_BUFFER_BIT;const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(A),ct=b.length>1;if(ct)for(let Lt=0;Lt<b.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);const Pt=A.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Lt=0;Lt<b.length;Lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Lt]);const nt=n.get(b[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,O,Z,0,0,O,Z,tt,i.NEAREST),c===!0&&(he.length=0,Wt.length=0,he.push(i.COLOR_ATTACHMENT0+Lt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(he.push($),Wt.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Lt=0;Lt<b.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Lt]);const nt=n.get(b[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function D(A){return Math.min(r.maxSamples,A.samples)}function Te(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ne(A){const b=a.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function ue(A,b){const O=A.colorSpace,Z=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ji&&O!==ni&&(Qt.getTransfer(O)===se?(Z!==fn||tt!==en)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",O)),b}function Et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=k,this.setTextureCube=rt,this.rebindTextures=De,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function QA(i,t){function e(n,r=ni){let s;const a=Qt.getTransfer(r);if(n===en)return i.UNSIGNED_BYTE;if(n===vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===md)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_d)return i.BYTE;if(n===fd)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===bc)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===gd)return i.ALPHA;if(n===wd)return i.RGB;if(n===fn)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===bd)return i.RED;if(n===yc)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===Sc)return i.RG_INTEGER;if(n===Mc)return i.RGBA_INTEGER;if(n===_s||n===fs||n===ps||n===ms)if(a===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ho||n===uo||n===_o||n===fo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ho)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go||n===wo||n===bo||n===vo||n===xo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===po||n===mo)return a===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===go)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===wo)return s.COMPRESSED_R11_EAC;if(n===bo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===vo)return s.COMPRESSED_RG11_EAC;if(n===xo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yo||n===So||n===Mo||n===Eo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Io||n===Do||n===Lo||n===Fo||n===Uo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===yo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ao)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ro)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Co)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Po)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Io)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Do)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===No||n===Oo||n===Bo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===No)return a===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zo||n===Ho||n===Go||n===Vo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===zo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Go)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const tR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eR=`
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

}`;class nR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Id(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:tR,fragmentShader:eR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mn(new Ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iR extends Qi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,w=null;const S=typeof XRWebGLBinding<"u",g=new nR,m={},y=e.getContextAttributes();let T=null,E=null;const P=[],C=[],L=new $t;let v=null;const M=new tn;M.viewport=new xe;const X=new tn;X.viewport=new xe;const I=[M,X],V=new fS;let j=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ot=P[Q];return ot===void 0&&(ot=new fa,P[Q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Q){let ot=P[Q];return ot===void 0&&(ot=new fa,P[Q]=ot),ot.getGripSpace()},this.getHand=function(Q){let ot=P[Q];return ot===void 0&&(ot=new fa,P[Q]=ot),ot.getHandSpace()};function Y(Q){const ot=C.indexOf(Q.inputSource);if(ot===-1)return;const ht=P[ot];ht!==void 0&&(ht.update(Q.inputSource,Q.frame,l||a),ht.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",k);for(let Q=0;Q<P.length;Q++){const ot=C[Q];ot!==null&&(C[Q]=null,P[Q].disconnect(ot))}j=null,K=null,g.reset();for(const Q in m)delete m[Q];t.setRenderTarget(T),p=null,d=null,f=null,r=null,E=null,pe.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",W),r.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(L),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Bt=null,Dt=null;y.depth&&(Dt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=y.stencil?yi:Xn,Bt=y.stencil?yr:An);const Ut={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ut),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new En(d.textureWidth,d.textureHeight,{format:fn,type:en,depthTexture:new Mr(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ht={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ht),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new En(p.framebufferWidth,p.framebufferHeight,{format:fn,type:en,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(Q){for(let ot=0;ot<Q.removed.length;ot++){const ht=Q.removed[ot],Bt=C.indexOf(ht);Bt>=0&&(C[Bt]=null,P[Bt].disconnect(ht))}for(let ot=0;ot<Q.added.length;ot++){const ht=Q.added[ot];let Bt=C.indexOf(ht);if(Bt===-1){for(let Ut=0;Ut<P.length;Ut++)if(Ut>=C.length){C.push(ht),Bt=Ut;break}else if(C[Ut]===null){C[Ut]=ht,Bt=Ut;break}if(Bt===-1)break}const Dt=P[Bt];Dt&&Dt.connect(ht)}}const rt=new z,et=new z;function ft(Q,ot,ht){rt.setFromMatrixPosition(ot.matrixWorld),et.setFromMatrixPosition(ht.matrixWorld);const Bt=rt.distanceTo(et),Dt=ot.projectionMatrix.elements,Ut=ht.projectionMatrix.elements,De=Dt[14]/(Dt[10]-1),Zt=Dt[14]/(Dt[10]+1),ie=(Dt[9]+1)/Dt[5],he=(Dt[9]-1)/Dt[5],Wt=(Dt[8]-1)/Dt[0],ye=(Ut[8]+1)/Ut[0],D=De*Wt,Te=De*ye,ne=Bt/(-Wt+ye),ue=ne*-Wt;if(ot.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ue),Q.translateZ(ne),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Dt[10]===-1)Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Et=De+ne,A=Zt+ne,b=D-ue,O=Te+(Bt-ue),Z=ie*Zt/A*Et,tt=he*Zt/A*Et;Q.projectionMatrix.makePerspective(b,O,Z,tt,Et,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function bt(Q,ot){ot===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ot.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ot=Q.near,ht=Q.far;g.texture!==null&&(g.depthNear>0&&(ot=g.depthNear),g.depthFar>0&&(ht=g.depthFar)),V.near=X.near=M.near=ot,V.far=X.far=M.far=ht,(j!==V.near||K!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),j=V.near,K=V.far),V.layers.mask=Q.layers.mask|6,M.layers.mask=V.layers.mask&-5,X.layers.mask=V.layers.mask&-3;const Bt=Q.parent,Dt=V.cameras;bt(V,Bt);for(let Ut=0;Ut<Dt.length;Ut++)bt(Dt[Ut],Bt);Dt.length===2?ft(V,M,X):V.projectionMatrix.copy(M.projectionMatrix),mt(Q,V,Bt)};function mt(Q,ot,ht){ht===null?Q.matrix.copy(ot.matrixWorld):(Q.matrix.copy(ht.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ot.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ko*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(Q){return m[Q]};let Gt=null;function ge(Q,ot){if(u=ot.getViewerPose(l||a),w=ot,u!==null){const ht=u.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let Bt=!1;ht.length!==V.cameras.length&&(V.cameras.length=0,Bt=!0);for(let Zt=0;Zt<ht.length;Zt++){const ie=ht[Zt];let he=null;if(p!==null)he=p.getViewport(ie);else{const ye=f.getViewSubImage(d,ie);he=ye.viewport,Zt===0&&(t.setRenderTargetTextures(E,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(E))}let Wt=I[Zt];Wt===void 0&&(Wt=new tn,Wt.layers.enable(Zt),Wt.viewport=new xe,I[Zt]=Wt),Wt.matrix.fromArray(ie.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(ie.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(he.x,he.y,he.width,he.height),Zt===0&&(V.matrix.copy(Wt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Bt===!0&&V.cameras.push(Wt)}const Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const Zt=f.getDepthInformation(ht[0]);Zt&&Zt.isValid&&Zt.texture&&g.init(Zt,r.renderState)}if(Dt&&Dt.includes("camera-access")&&S){t.state.unbindTexture(),f=n.getBinding();for(let Zt=0;Zt<ht.length;Zt++){const ie=ht[Zt].camera;if(ie){let he=m[ie];he||(he=new Id,m[ie]=he);const Wt=f.getCameraImage(ie);he.sourceTexture=Wt}}}}for(let ht=0;ht<P.length;ht++){const Bt=C[ht],Dt=P[ht];Bt!==null&&Dt!==void 0&&Dt.update(Bt,ot,l||a)}Gt&&Gt(Q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),w=null}const pe=new Nd;pe.setAnimationLoop(ge),this.setAnimationLoop=function(Q){Gt=Q},this.dispose=function(){}}}const pi=new Rn,rR=new be;function sR(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Dd(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,T,E){m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,E)):m.isMeshMatcapMaterial?(s(g,m),w(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),S(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,y,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Je&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Je&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=t.get(m),T=y.envMap,E=y.envMapRotation;T&&(g.envMap.value=T,pi.copy(E),pi.x*=-1,pi.y*=-1,pi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),g.envMapRotation.value.setFromMatrix4(rR.makeRotationFromEuler(pi)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Je&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,m){m.matcap&&(g.matcap.value=m.matcap)}function S(g,m){const y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function aR(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,T){const E=T.program;n.uniformBlockBinding(y,E)}function l(y,T){let E=r[y.id];E===void 0&&(w(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",g));const P=T.program;n.updateUBOMapping(y,P);const C=t.render.frame;s[y.id]!==C&&(d(y),s[y.id]=C)}function u(y){const T=f();y.__bindingPointIndex=T;const E=i.createBuffer(),P=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const T=r[y.id],E=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,L=E.length;C<L;C++){const v=Array.isArray(E[C])?E[C]:[E[C]];for(let M=0,X=v.length;M<X;M++){const I=v[M];if(p(I,C,M,P)===!0){const V=I.__offset,j=Array.isArray(I.value)?I.value:[I.value];let K=0;for(let Y=0;Y<j.length;Y++){const W=j[Y],k=S(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,V+K,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,K),K+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,T,E,P){const C=y.value,L=T+"_"+E;if(P[L]===void 0)return typeof C=="number"||typeof C=="boolean"?P[L]=C:P[L]=C.clone(),!0;{const v=P[L];if(typeof C=="number"||typeof C=="boolean"){if(v!==C)return P[L]=C,!0}else if(v.equals(C)===!1)return v.copy(C),!0}return!1}function w(y){const T=y.uniforms;let E=0;const P=16;for(let L=0,v=T.length;L<v;L++){const M=Array.isArray(T[L])?T[L]:[T[L]];for(let X=0,I=M.length;X<I;X++){const V=M[X],j=Array.isArray(V.value)?V.value:[V.value];for(let K=0,Y=j.length;K<Y;K++){const W=j[K],k=S(W),rt=E%P,et=rt%k.boundary,ft=rt+et;E+=et,ft!==0&&P-ft<k.storage&&(E+=P-ft),V.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=k.storage}}}const C=E%P;return C>0&&(E+=P-C),y.__size=E,y.__cache={},this}function S(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ft("WebGLRenderer: Unsupported uniform value type.",y),T}function g(y){const T=y.target;T.removeEventListener("dispose",g);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function m(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:m}}const oR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function cR(){return bn===null&&(bn=new Yy(oR,16,16,Ki,jn),bn.name="DFG_LUT",bn.minFilter=We,bn.magFilter=We,bn.wrapS=Bn,bn.wrapT=Bn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class lR{constructor(t={}){const{canvas:e=Ey(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=en}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=a;const S=p,g=new Set([Mc,Sc,yc]),m=new Set([en,An,xr,yr,vc,xc]),y=new Uint32Array(4),T=new Int32Array(4);let E=null,P=null;const C=[],L=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let X=!1;this._outputColorSpace=Ke;let I=0,V=0,j=null,K=-1,Y=null;const W=new xe,k=new xe;let rt=null;const et=new qt(0);let ft=0,bt=e.width,mt=e.height,Gt=1,ge=null,pe=null;const Q=new xe(0,0,bt,mt),ot=new xe(0,0,bt,mt);let ht=!1;const Bt=new Cc;let Dt=!1,Ut=!1;const De=new be,Zt=new z,ie=new xe,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ye(){return j===null?Gt:1}let D=n;function Te(x,B){return e.getContext(x,B)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gc}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",_e,!1),D===null){const B="webgl2";if(D=Te(B,x),D===null)throw Te(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw ee("WebGLRenderer: "+x.message),x}let ne,ue,Et,A,b,O,Z,tt,$,vt,ct,Pt,Lt,nt,st,xt,St,pt,jt,U,lt,at,wt;function it(){ne=new lT(D),ne.init(),lt=new QA(D,ne),ue=new eT(D,ne,t,lt),Et=new $A(D,ne),ue.reversedDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),A=new uT(D),b=new OA,O=new ZA(D,ne,Et,b,ue,lt,A),Z=new cT(M),tt=new gS(D),at=new QE(D,tt),$=new hT(D,tt,A,at),vt=new fT(D,$,tt,at,A),pt=new _T(D,ue,O),st=new nT(b),ct=new NA(M,Z,ne,ue,at,st),Pt=new sR(M,b),Lt=new zA,nt=new jA(ne),St=new ZE(M,Z,Et,vt,w,c),xt=new JA(M,vt,ue),wt=new aR(D,A,ue,Et),jt=new tT(D,ne,A),U=new dT(D,ne,A),A.programs=ct.programs,M.capabilities=ue,M.extensions=ne,M.properties=b,M.renderLists=Lt,M.shadowMap=xt,M.state=Et,M.info=A}it(),S!==en&&(v=new mT(S,e.width,e.height,r,s));const J=new iR(M,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=ne.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ne.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Gt},this.setPixelRatio=function(x){x!==void 0&&(Gt=x,this.setSize(bt,mt,!1))},this.getSize=function(x){return x.set(bt,mt)},this.setSize=function(x,B,q=!0){if(J.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=x,mt=B,e.width=Math.floor(x*Gt),e.height=Math.floor(B*Gt),q===!0&&(e.style.width=x+"px",e.style.height=B+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,x,B)},this.getDrawingBufferSize=function(x){return x.set(bt*Gt,mt*Gt).floor()},this.setDrawingBufferSize=function(x,B,q){bt=x,mt=B,Gt=q,e.width=Math.floor(x*q),e.height=Math.floor(B*q),this.setViewport(0,0,x,B)},this.setEffects=function(x){if(S===en){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let B=0;B<x.length;B++)if(x[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(W)},this.getViewport=function(x){return x.copy(Q)},this.setViewport=function(x,B,q,G){x.isVector4?Q.set(x.x,x.y,x.z,x.w):Q.set(x,B,q,G),Et.viewport(W.copy(Q).multiplyScalar(Gt).round())},this.getScissor=function(x){return x.copy(ot)},this.setScissor=function(x,B,q,G){x.isVector4?ot.set(x.x,x.y,x.z,x.w):ot.set(x,B,q,G),Et.scissor(k.copy(ot).multiplyScalar(Gt).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(x){Et.setScissorTest(ht=x)},this.setOpaqueSort=function(x){ge=x},this.setTransparentSort=function(x){pe=x},this.getClearColor=function(x){return x.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(x=!0,B=!0,q=!0){let G=0;if(x){let H=!1;if(j!==null){const ut=j.texture.format;H=g.has(ut)}if(H){const ut=j.texture.type,gt=m.has(ut),_t=St.getClearColor(),Mt=St.getClearAlpha(),At=_t.r,Ot=_t.g,Xt=_t.b;gt?(y[0]=At,y[1]=Ot,y[2]=Xt,y[3]=Mt,D.clearBufferuiv(D.COLOR,0,y)):(T[0]=At,T[1]=Ot,T[2]=Xt,T[3]=Mt,D.clearBufferiv(D.COLOR,0,T))}else G|=D.COLOR_BUFFER_BIT}B&&(G|=D.DEPTH_BUFFER_BIT),q&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",_e,!1),St.dispose(),Lt.dispose(),nt.dispose(),b.dispose(),Z.dispose(),vt.dispose(),at.dispose(),wt.dispose(),ct.dispose(),J.dispose(),J.removeEventListener("sessionstart",zc),J.removeEventListener("sessionend",Hc),ci.stop()};function yt(x){x.preventDefault(),Tl("WebGLRenderer: Context Lost."),X=!0}function Nt(){Tl("WebGLRenderer: Context Restored."),X=!1;const x=A.autoReset,B=xt.enabled,q=xt.autoUpdate,G=xt.needsUpdate,H=xt.type;it(),A.autoReset=x,xt.enabled=B,xt.autoUpdate=q,xt.needsUpdate=G,xt.type=H}function _e(x){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function re(x){const B=x.target;B.removeEventListener("dispose",re),Pn(B)}function Pn(x){In(x),b.remove(x)}function In(x){const B=b.get(x).programs;B!==void 0&&(B.forEach(function(q){ct.releaseProgram(q)}),x.isShaderMaterial&&ct.releaseShaderCache(x))}this.renderBufferDirect=function(x,B,q,G,H,ut){B===null&&(B=he);const gt=H.isMesh&&H.matrixWorld.determinant()<0,_t=qd(x,B,q,G,H);Et.setMaterial(G,gt);let Mt=q.index,At=1;if(G.wireframe===!0){if(Mt=$.getWireframeAttribute(q),Mt===void 0)return;At=2}const Ot=q.drawRange,Xt=q.attributes.position;let Rt=Ot.start*At,ae=(Ot.start+Ot.count)*At;ut!==null&&(Rt=Math.max(Rt,ut.start*At),ae=Math.min(ae,(ut.start+ut.count)*At)),Mt!==null?(Rt=Math.max(Rt,0),ae=Math.min(ae,Mt.count)):Xt!=null&&(Rt=Math.max(Rt,0),ae=Math.min(ae,Xt.count));const Se=ae-Rt;if(Se<0||Se===1/0)return;at.setup(H,G,_t,q,Mt);let ve,oe=jt;if(Mt!==null&&(ve=tt.get(Mt),oe=U,oe.setIndex(ve)),H.isMesh)G.wireframe===!0?(Et.setLineWidth(G.wireframeLinewidth*ye()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(H.isLine){let Ge=G.linewidth;Ge===void 0&&(Ge=1),Et.setLineWidth(Ge*ye()),H.isLineSegments?oe.setMode(D.LINES):H.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else H.isPoints?oe.setMode(D.POINTS):H.isSprite&&oe.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ps("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))oe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ge=H._multiDrawStarts,Tt=H._multiDrawCounts,$e=H._multiDrawCount,te=Mt?tt.get(Mt).bytesPerElement:1,an=b.get(G).currentProgram.getUniforms();for(let gn=0;gn<$e;gn++)an.setValue(D,"_gl_DrawID",gn),oe.render(Ge[gn]/te,Tt[gn])}else if(H.isInstancedMesh)oe.renderInstances(Rt,Se,H.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Tt=Math.min(q.instanceCount,Ge);oe.renderInstances(Rt,Se,Tt)}else oe.render(Rt,Se)};function Bc(x,B,q){x.transparent===!0&&x.side===On&&x.forceSinglePass===!1?(x.side=Je,x.needsUpdate=!0,Lr(x,B,q),x.side=ai,x.needsUpdate=!0,Lr(x,B,q),x.side=On):Lr(x,B,q)}this.compile=function(x,B,q=null){q===null&&(q=x),P=nt.get(q),P.init(B),L.push(P),q.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(P.pushLight(H),H.castShadow&&P.pushShadow(H))}),x!==q&&x.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(P.pushLight(H),H.castShadow&&P.pushShadow(H))}),P.setupLights();const G=new Set;return x.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ut=H.material;if(ut)if(Array.isArray(ut))for(let gt=0;gt<ut.length;gt++){const _t=ut[gt];Bc(_t,q,H),G.add(_t)}else Bc(ut,q,H),G.add(ut)}),P=L.pop(),G},this.compileAsync=function(x,B,q=null){const G=this.compile(x,B,q);return new Promise(H=>{function ut(){if(G.forEach(function(gt){b.get(gt).currentProgram.isReady()&&G.delete(gt)}),G.size===0){H(x);return}setTimeout(ut,10)}ne.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let qs=null;function Xd(x){qs&&qs(x)}function zc(){ci.stop()}function Hc(){ci.start()}const ci=new Nd;ci.setAnimationLoop(Xd),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(x){qs=x,J.setAnimationLoop(x),x===null?ci.stop():ci.start()},J.addEventListener("sessionstart",zc),J.addEventListener("sessionend",Hc),this.render=function(x,B){if(B!==void 0&&B.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;const q=J.enabled===!0&&J.isPresenting===!0,G=v!==null&&(j===null||q)&&v.begin(M,j);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(B),B=J.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,B,j),P=nt.get(x,L.length),P.init(B),L.push(P),De.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Bt.setFromProjectionMatrix(De,Sn,B.reversedDepth),Ut=this.localClippingEnabled,Dt=st.init(this.clippingPlanes,Ut),E=Lt.get(x,C.length),E.init(),C.push(E),J.enabled===!0&&J.isPresenting===!0){const gt=M.xr.getDepthSensingMesh();gt!==null&&Ys(gt,B,-1/0,M.sortObjects)}Ys(x,B,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(ge,pe),Wt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Wt&&St.addToRenderList(E,x),this.info.render.frame++,Dt===!0&&st.beginShadows();const H=P.state.shadowsArray;if(xt.render(H,x,B),Dt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&v.hasRenderPass())===!1){const gt=E.opaque,_t=E.transmissive;if(P.setupLights(),B.isArrayCamera){const Mt=B.cameras;if(_t.length>0)for(let At=0,Ot=Mt.length;At<Ot;At++){const Xt=Mt[At];Vc(gt,_t,x,Xt)}Wt&&St.render(x);for(let At=0,Ot=Mt.length;At<Ot;At++){const Xt=Mt[At];Gc(E,x,Xt,Xt.viewport)}}else _t.length>0&&Vc(gt,_t,x,B),Wt&&St.render(x),Gc(E,x,B)}j!==null&&V===0&&(O.updateMultisampleRenderTarget(j),O.updateRenderTargetMipmap(j)),G&&v.end(M),x.isScene===!0&&x.onAfterRender(M,x,B),at.resetDefaultState(),K=-1,Y=null,L.pop(),L.length>0?(P=L[L.length-1],Dt===!0&&st.setGlobalState(M.clippingPlanes,P.state.camera)):P=null,C.pop(),C.length>0?E=C[C.length-1]:E=null};function Ys(x,B,q,G){if(x.visible===!1)return;if(x.layers.test(B.layers)){if(x.isGroup)q=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(B);else if(x.isLight)P.pushLight(x),x.castShadow&&P.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Bt.intersectsSprite(x)){G&&ie.setFromMatrixPosition(x.matrixWorld).applyMatrix4(De);const gt=vt.update(x),_t=x.material;_t.visible&&E.push(x,gt,_t,q,ie.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Bt.intersectsObject(x))){const gt=vt.update(x),_t=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ie.copy(x.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),ie.copy(gt.boundingSphere.center)),ie.applyMatrix4(x.matrixWorld).applyMatrix4(De)),Array.isArray(_t)){const Mt=gt.groups;for(let At=0,Ot=Mt.length;At<Ot;At++){const Xt=Mt[At],Rt=_t[Xt.materialIndex];Rt&&Rt.visible&&E.push(x,gt,Rt,q,ie.z,Xt)}}else _t.visible&&E.push(x,gt,_t,q,ie.z,null)}}const ut=x.children;for(let gt=0,_t=ut.length;gt<_t;gt++)Ys(ut[gt],B,q,G)}function Gc(x,B,q,G){const{opaque:H,transmissive:ut,transparent:gt}=x;P.setupLightsView(q),Dt===!0&&st.setGlobalState(M.clippingPlanes,q),G&&Et.viewport(W.copy(G)),H.length>0&&Dr(H,B,q),ut.length>0&&Dr(ut,B,q),gt.length>0&&Dr(gt,B,q),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Vc(x,B,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[G.id]===void 0){const Rt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[G.id]=new En(1,1,{generateMipmaps:!0,type:Rt?jn:en,minFilter:xi,samples:Math.max(4,ue.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const ut=P.state.transmissionRenderTarget[G.id],gt=G.viewport||W;ut.setSize(gt.z*M.transmissionResolutionScale,gt.w*M.transmissionResolutionScale);const _t=M.getRenderTarget(),Mt=M.getActiveCubeFace(),At=M.getActiveMipmapLevel();M.setRenderTarget(ut),M.getClearColor(et),ft=M.getClearAlpha(),ft<1&&M.setClearColor(16777215,.5),M.clear(),Wt&&St.render(q);const Ot=M.toneMapping;M.toneMapping=Mn;const Xt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),P.setupLightsView(G),Dt===!0&&st.setGlobalState(M.clippingPlanes,G),Dr(x,q,G),O.updateMultisampleRenderTarget(ut),O.updateRenderTargetMipmap(ut),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ae=0,Se=B.length;ae<Se;ae++){const ve=B[ae],{object:oe,geometry:Ge,material:Tt,group:$e}=ve;if(Tt.side===On&&oe.layers.test(G.layers)){const te=Tt.side;Tt.side=Je,Tt.needsUpdate=!0,kc(oe,q,G,Ge,Tt,$e),Tt.side=te,Tt.needsUpdate=!0,Rt=!0}}Rt===!0&&(O.updateMultisampleRenderTarget(ut),O.updateRenderTargetMipmap(ut))}M.setRenderTarget(_t,Mt,At),M.setClearColor(et,ft),Xt!==void 0&&(G.viewport=Xt),M.toneMapping=Ot}function Dr(x,B,q){const G=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ut=x.length;H<ut;H++){const gt=x[H],{object:_t,geometry:Mt,group:At}=gt;let Ot=gt.material;Ot.allowOverride===!0&&G!==null&&(Ot=G),_t.layers.test(q.layers)&&kc(_t,B,q,Mt,Ot,At)}}function kc(x,B,q,G,H,ut){x.onBeforeRender(M,B,q,G,H,ut),x.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(M,B,q,G,x,ut),H.transparent===!0&&H.side===On&&H.forceSinglePass===!1?(H.side=Je,H.needsUpdate=!0,M.renderBufferDirect(q,B,G,H,x,ut),H.side=ai,H.needsUpdate=!0,M.renderBufferDirect(q,B,G,H,x,ut),H.side=On):M.renderBufferDirect(q,B,G,H,x,ut),x.onAfterRender(M,B,q,G,H,ut)}function Lr(x,B,q){B.isScene!==!0&&(B=he);const G=b.get(x),H=P.state.lights,ut=P.state.shadowsArray,gt=H.state.version,_t=ct.getParameters(x,H.state,ut,B,q),Mt=ct.getProgramCacheKey(_t);let At=G.programs;G.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?B.environment:null,G.fog=B.fog;const Ot=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;G.envMap=Z.get(x.envMap||G.environment,Ot),G.envMapRotation=G.environment!==null&&x.envMap===null?B.environmentRotation:x.envMapRotation,At===void 0&&(x.addEventListener("dispose",re),At=new Map,G.programs=At);let Xt=At.get(Mt);if(Xt!==void 0){if(G.currentProgram===Xt&&G.lightsStateVersion===gt)return jc(x,_t),Xt}else _t.uniforms=ct.getUniforms(x),x.onBeforeCompile(_t,M),Xt=ct.acquireProgram(_t,Mt),At.set(Mt,Xt),G.uniforms=_t.uniforms;const Rt=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Rt.clippingPlanes=st.uniform),jc(x,_t),G.needsLights=Kd(x),G.lightsStateVersion=gt,G.needsLights&&(Rt.ambientLightColor.value=H.state.ambient,Rt.lightProbe.value=H.state.probe,Rt.directionalLights.value=H.state.directional,Rt.directionalLightShadows.value=H.state.directionalShadow,Rt.spotLights.value=H.state.spot,Rt.spotLightShadows.value=H.state.spotShadow,Rt.rectAreaLights.value=H.state.rectArea,Rt.ltc_1.value=H.state.rectAreaLTC1,Rt.ltc_2.value=H.state.rectAreaLTC2,Rt.pointLights.value=H.state.point,Rt.pointLightShadows.value=H.state.pointShadow,Rt.hemisphereLights.value=H.state.hemi,Rt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Rt.spotLightMatrix.value=H.state.spotLightMatrix,Rt.spotLightMap.value=H.state.spotLightMap,Rt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.currentProgram=Xt,G.uniformsList=null,Xt}function Wc(x){if(x.uniformsList===null){const B=x.currentProgram.getUniforms();x.uniformsList=ws.seqWithValue(B.seq,x.uniforms)}return x.uniformsList}function jc(x,B){const q=b.get(x);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function qd(x,B,q,G,H){B.isScene!==!0&&(B=he),O.resetTextureUnits();const ut=B.fog,gt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?B.environment:null,_t=j===null?M.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ji,Mt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,At=Z.get(G.envMap||gt,Mt),Ot=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xt=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!q.morphAttributes.position,ae=!!q.morphAttributes.normal,Se=!!q.morphAttributes.color;let ve=Mn;G.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ve=M.toneMapping);const oe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ge=oe!==void 0?oe.length:0,Tt=b.get(G),$e=P.state.lights;if(Dt===!0&&(Ut===!0||x!==Y)){const Le=x===Y&&G.id===K;st.setState(G,x,Le)}let te=!1;G.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==$e.state.version||Tt.outputColorSpace!==_t||H.isBatchedMesh&&Tt.batching===!1||!H.isBatchedMesh&&Tt.batching===!0||H.isBatchedMesh&&Tt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Tt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Tt.instancing===!1||!H.isInstancedMesh&&Tt.instancing===!0||H.isSkinnedMesh&&Tt.skinning===!1||!H.isSkinnedMesh&&Tt.skinning===!0||H.isInstancedMesh&&Tt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Tt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Tt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Tt.instancingMorph===!1&&H.morphTexture!==null||Tt.envMap!==At||G.fog===!0&&Tt.fog!==ut||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==st.numPlanes||Tt.numIntersection!==st.numIntersection)||Tt.vertexAlphas!==Ot||Tt.vertexTangents!==Xt||Tt.morphTargets!==Rt||Tt.morphNormals!==ae||Tt.morphColors!==Se||Tt.toneMapping!==ve||Tt.morphTargetsCount!==Ge)&&(te=!0):(te=!0,Tt.__version=G.version);let an=Tt.currentProgram;te===!0&&(an=Lr(G,B,H));let gn=!1,li=!1,Ti=!1;const de=an.getUniforms(),Oe=Tt.uniforms;if(Et.useProgram(an.program)&&(gn=!0,li=!0,Ti=!0),G.id!==K&&(K=G.id,li=!0),gn||Y!==x){Et.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),de.setValue(D,"projectionMatrix",x.projectionMatrix),de.setValue(D,"viewMatrix",x.matrixWorldInverse);const Yn=de.map.cameraPosition;Yn!==void 0&&Yn.setValue(D,Zt.setFromMatrixPosition(x.matrixWorld)),ue.logarithmicDepthBuffer&&de.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&de.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),Y!==x&&(Y=x,li=!0,Ti=!0)}if(Tt.needsLights&&($e.state.directionalShadowMap.length>0&&de.setValue(D,"directionalShadowMap",$e.state.directionalShadowMap,O),$e.state.spotShadowMap.length>0&&de.setValue(D,"spotShadowMap",$e.state.spotShadowMap,O),$e.state.pointShadowMap.length>0&&de.setValue(D,"pointShadowMap",$e.state.pointShadowMap,O)),H.isSkinnedMesh){de.setOptional(D,H,"bindMatrix"),de.setOptional(D,H,"bindMatrixInverse");const Le=H.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),de.setValue(D,"boneTexture",Le.boneTexture,O))}H.isBatchedMesh&&(de.setOptional(D,H,"batchingTexture"),de.setValue(D,"batchingTexture",H._matricesTexture,O),de.setOptional(D,H,"batchingIdTexture"),de.setValue(D,"batchingIdTexture",H._indirectTexture,O),de.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&de.setValue(D,"batchingColorTexture",H._colorsTexture,O));const qn=q.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&pt.update(H,q,an),(li||Tt.receiveShadow!==H.receiveShadow)&&(Tt.receiveShadow=H.receiveShadow,de.setValue(D,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&B.environment!==null&&(Oe.envMapIntensity.value=B.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=cR()),li&&(de.setValue(D,"toneMappingExposure",M.toneMappingExposure),Tt.needsLights&&Yd(Oe,Ti),ut&&G.fog===!0&&Pt.refreshFogUniforms(Oe,ut),Pt.refreshMaterialUniforms(Oe,G,Gt,mt,P.state.transmissionRenderTarget[x.id]),ws.upload(D,Wc(Tt),Oe,O)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ws.upload(D,Wc(Tt),Oe,O),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&de.setValue(D,"center",H.center),de.setValue(D,"modelViewMatrix",H.modelViewMatrix),de.setValue(D,"normalMatrix",H.normalMatrix),de.setValue(D,"modelMatrix",H.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Le=G.uniformsGroups;for(let Yn=0,Ai=Le.length;Yn<Ai;Yn++){const Xc=Le[Yn];wt.update(Xc,an),wt.bind(Xc,an)}}return an}function Yd(x,B){x.ambientLightColor.needsUpdate=B,x.lightProbe.needsUpdate=B,x.directionalLights.needsUpdate=B,x.directionalLightShadows.needsUpdate=B,x.pointLights.needsUpdate=B,x.pointLightShadows.needsUpdate=B,x.spotLights.needsUpdate=B,x.spotLightShadows.needsUpdate=B,x.rectAreaLights.needsUpdate=B,x.hemisphereLights.needsUpdate=B}function Kd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(x,B,q){const G=b.get(x);G.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),b.get(x.texture).__webglTexture=B,b.get(x.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,B){const q=b.get(x);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const Jd=D.createFramebuffer();this.setRenderTarget=function(x,B=0,q=0){j=x,I=B,V=q;let G=null,H=!1,ut=!1;if(x){const _t=b.get(x);if(_t.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(D.FRAMEBUFFER,_t.__webglFramebuffer),W.copy(x.viewport),k.copy(x.scissor),rt=x.scissorTest,Et.viewport(W),Et.scissor(k),Et.setScissorTest(rt),K=-1;return}else if(_t.__webglFramebuffer===void 0)O.setupRenderTarget(x);else if(_t.__hasExternalTextures)O.rebindTextures(x,b.get(x.texture).__webglTexture,b.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ot=x.depthTexture;if(_t.__boundDepthTexture!==Ot){if(Ot!==null&&b.has(Ot)&&(x.width!==Ot.image.width||x.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(x)}}const Mt=x.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ut=!0);const At=b.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(At[B])?G=At[B][q]:G=At[B],H=!0):x.samples>0&&O.useMultisampledRTT(x)===!1?G=b.get(x).__webglMultisampledFramebuffer:Array.isArray(At)?G=At[q]:G=At,W.copy(x.viewport),k.copy(x.scissor),rt=x.scissorTest}else W.copy(Q).multiplyScalar(Gt).floor(),k.copy(ot).multiplyScalar(Gt).floor(),rt=ht;if(q!==0&&(G=Jd),Et.bindFramebuffer(D.FRAMEBUFFER,G)&&Et.drawBuffers(x,G),Et.viewport(W),Et.scissor(k),Et.setScissorTest(rt),H){const _t=b.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,_t.__webglTexture,q)}else if(ut){const _t=B;for(let Mt=0;Mt<x.textures.length;Mt++){const At=b.get(x.textures[Mt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Mt,At.__webglTexture,q,_t)}}else if(x!==null&&q!==0){const _t=b.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_t.__webglTexture,q)}K=-1},this.readRenderTargetPixels=function(x,B,q,G,H,ut,gt,_t=0){if(!(x&&x.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=b.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt){Et.bindFramebuffer(D.FRAMEBUFFER,Mt);try{const At=x.textures[_t],Ot=At.format,Xt=At.type;if(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_t),!ue.textureFormatReadable(Ot)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Xt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=x.width-G&&q>=0&&q<=x.height-H&&D.readPixels(B,q,G,H,lt.convert(Ot),lt.convert(Xt),ut)}finally{const At=j!==null?b.get(j).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(x,B,q,G,H,ut,gt,_t=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=b.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt)if(B>=0&&B<=x.width-G&&q>=0&&q<=x.height-H){Et.bindFramebuffer(D.FRAMEBUFFER,Mt);const At=x.textures[_t],Ot=At.format,Xt=At.type;if(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_t),!ue.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Rt),D.bufferData(D.PIXEL_PACK_BUFFER,ut.byteLength,D.STREAM_READ),D.readPixels(B,q,G,H,lt.convert(Ot),lt.convert(Xt),0);const ae=j!==null?b.get(j).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,ae);const Se=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ty(D,Se,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Rt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ut),D.deleteBuffer(Rt),D.deleteSync(Se),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,B=null,q=0){const G=Math.pow(2,-q),H=Math.floor(x.image.width*G),ut=Math.floor(x.image.height*G),gt=B!==null?B.x:0,_t=B!==null?B.y:0;O.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,gt,_t,H,ut),Et.unbindTexture()};const $d=D.createFramebuffer(),Zd=D.createFramebuffer();this.copyTextureToTexture=function(x,B,q=null,G=null,H=0,ut=0){let gt,_t,Mt,At,Ot,Xt,Rt,ae,Se;const ve=x.isCompressedTexture?x.mipmaps[ut]:x.image;if(q!==null)gt=q.max.x-q.min.x,_t=q.max.y-q.min.y,Mt=q.isBox3?q.max.z-q.min.z:1,At=q.min.x,Ot=q.min.y,Xt=q.isBox3?q.min.z:0;else{const Oe=Math.pow(2,-H);gt=Math.floor(ve.width*Oe),_t=Math.floor(ve.height*Oe),x.isDataArrayTexture?Mt=ve.depth:x.isData3DTexture?Mt=Math.floor(ve.depth*Oe):Mt=1,At=0,Ot=0,Xt=0}G!==null?(Rt=G.x,ae=G.y,Se=G.z):(Rt=0,ae=0,Se=0);const oe=lt.convert(B.format),Ge=lt.convert(B.type);let Tt;B.isData3DTexture?(O.setTexture3D(B,0),Tt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(O.setTexture2DArray(B,0),Tt=D.TEXTURE_2D_ARRAY):(O.setTexture2D(B,0),Tt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const $e=D.getParameter(D.UNPACK_ROW_LENGTH),te=D.getParameter(D.UNPACK_IMAGE_HEIGHT),an=D.getParameter(D.UNPACK_SKIP_PIXELS),gn=D.getParameter(D.UNPACK_SKIP_ROWS),li=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,At),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xt);const Ti=x.isDataArrayTexture||x.isData3DTexture,de=B.isDataArrayTexture||B.isData3DTexture;if(x.isDepthTexture){const Oe=b.get(x),qn=b.get(B),Le=b.get(Oe.__renderTarget),Yn=b.get(qn.__renderTarget);Et.bindFramebuffer(D.READ_FRAMEBUFFER,Le.__webglFramebuffer),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Ai=0;Ai<Mt;Ai++)Ti&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(x).__webglTexture,H,Xt+Ai),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(B).__webglTexture,ut,Se+Ai)),D.blitFramebuffer(At,Ot,gt,_t,Rt,ae,gt,_t,D.DEPTH_BUFFER_BIT,D.NEAREST);Et.bindFramebuffer(D.READ_FRAMEBUFFER,null),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||x.isRenderTargetTexture||b.has(x)){const Oe=b.get(x),qn=b.get(B);Et.bindFramebuffer(D.READ_FRAMEBUFFER,$d),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,Zd);for(let Le=0;Le<Mt;Le++)Ti?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Oe.__webglTexture,H,Xt+Le):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Oe.__webglTexture,H),de?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qn.__webglTexture,ut,Se+Le):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qn.__webglTexture,ut),H!==0?D.blitFramebuffer(At,Ot,gt,_t,Rt,ae,gt,_t,D.COLOR_BUFFER_BIT,D.NEAREST):de?D.copyTexSubImage3D(Tt,ut,Rt,ae,Se+Le,At,Ot,gt,_t):D.copyTexSubImage2D(Tt,ut,Rt,ae,At,Ot,gt,_t);Et.bindFramebuffer(D.READ_FRAMEBUFFER,null),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else de?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(Tt,ut,Rt,ae,Se,gt,_t,Mt,oe,Ge,ve.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,ut,Rt,ae,Se,gt,_t,Mt,oe,ve.data):D.texSubImage3D(Tt,ut,Rt,ae,Se,gt,_t,Mt,oe,Ge,ve):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ut,Rt,ae,gt,_t,oe,Ge,ve.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ut,Rt,ae,ve.width,ve.height,oe,ve.data):D.texSubImage2D(D.TEXTURE_2D,ut,Rt,ae,gt,_t,oe,Ge,ve);D.pixelStorei(D.UNPACK_ROW_LENGTH,$e),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,te),D.pixelStorei(D.UNPACK_SKIP_PIXELS,an),D.pixelStorei(D.UNPACK_SKIP_ROWS,gn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,li),ut===0&&B.generateMipmaps&&D.generateMipmap(Tt),Et.unbindTexture()},this.initRenderTarget=function(x){b.get(x).__webglFramebuffer===void 0&&O.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?O.setTextureCube(x,0):x.isData3DTexture?O.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?O.setTexture2DArray(x,0):O.setTexture2D(x,0),Et.unbindTexture()},this.resetState=function(){I=0,V=0,j=null,Et.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const vh=["#c0392b","#2980b9","#27ae60","#e67e22","#8e44ad","#16a085","#d35400","#2c3e50","#e91e63","#00897b","#5e35b1","#f9a825"],hR={4:4,6:6,8:8,12:12,20:20},dR={4:1,6:2,8:1,12:3,20:1},uR={4:.72,6:.68,8:.74,12:.7,20:.74};function _R(i,t){const n=document.createElement("canvas");n.width=256,n.height=256;const r=n.getContext("2d"),s=12;r.fillStyle=t,r.beginPath(),r.roundRect(s,s,256-s*2,256-s*2,32),r.fill();const a=r.createRadialGradient(256/2,256*.35,10,256/2,256/2,256*.65);a.addColorStop(0,"rgba(255,255,255,0.18)"),a.addColorStop(1,"rgba(0,0,0,0.18)"),r.fillStyle=a,r.beginPath(),r.roundRect(s,s,256-s*2,256-s*2,32),r.fill(),r.strokeStyle="rgba(255,255,255,0.30)",r.lineWidth=7,r.beginPath(),r.roundRect(s,s,256-s*2,256-s*2,32),r.stroke();const o=i>=10?116:140;r.font=`bold ${o}px Arial, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillStyle="rgba(0,0,0,0.45)",r.fillText(String(i),256/2+3,256/2+5),r.fillStyle="#ffffff",r.fillText(String(i),256/2,256/2);const c=new Qy(n);return c.colorSpace=Ke,c}function fR(i,t,e){const n=e*3;for(let r=0;r<t;r++)i.addGroup(r*n,n,r)}function pR(i,t,e){const n=i.attributes.position,r=e*3,s=[];for(let a=0;a<t;a++){const o=new z;for(let c=0;c<e;c++){const l=a*r+c*3,u=new z().fromBufferAttribute(n,l),f=new z().fromBufferAttribute(n,l+1),d=new z().fromBufferAttribute(n,l+2);o.add(new z().crossVectors(f.clone().sub(u),d.clone().sub(u)).normalize())}s.push(o.normalize())}return s}function mR(i,t){const e=hR[i],n=dR[i],r=uR[i],s=vh[t%vh.length];let a;i===4?a=new Fc(r):i===6?a=new Ei(r*1.72,r*1.72,r*1.72):i===8?a=new Lc(r*1.08):i===12?a=new Ic(r*1.06):a=new Dc(r*1.08,0);const o=new Float32Array(a.attributes.position.array),c=a.toNonIndexed();a.dispose(),c.groups.length===0&&fR(c,e,n),c.computeVertexNormals();const l=new Float32Array(c.attributes.position.array),u=pR(c,e,n),f=Array.from({length:e},(p,w)=>new Ld({map:_R(w+1,s),roughness:.28,metalness:.06,flatShading:!0})),d=new mn(c,f);return d.castShadow=!0,d.receiveShadow=!0,{mesh:d,faceNormals:u,physPositions:l,physHullPositions:o,sides:i,physRadius:r}}function gR(i,t){const e=new oi(t.x,t.y,t.z,t.w),n=new z(0,1,0);let r=-1/0,s=0;return i.forEach((a,o)=>{const c=a.clone().applyQuaternion(e).dot(n);c>r&&(r=c,s=o)}),s+1}function wR(i){const t=i.getBoundingClientRect(),e=t.width>10?t.width:window.innerWidth-304,n=t.height>10?t.height:window.innerHeight-52,r=new lR({antialias:!0});r.setSize(e,n),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.shadowMap.enabled=!0,r.shadowMap.type=rd,r.toneMapping=wc,r.toneMappingExposure=1.2,r.outputColorSpace=Ke,r.domElement.style.display="block",i.appendChild(r.domElement);const s=new Vy;s.background=new qt(662030),s.fog=new Rc(662030,.045);const a=new tn(52,e/n,.1,100);a.position.set(0,11,15),a.lookAt(0,1,0),s.add(new uS(11189196,1.6));const o=new dS(16774368,3.5);o.position.set(6,16,8),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.near=.5,o.shadow.camera.far=50,o.shadow.camera.left=o.shadow.camera.bottom=-10,o.shadow.camera.right=o.shadow.camera.top=10,o.shadow.bias=-.001,s.add(o);const c=new Kl(4491519,1.8,25);c.position.set(-6,6,-4),s.add(c);const l=new Kl(16742195,.9,20);l.position.set(6,4,-5),s.add(l);const u=new mn(new Ir(24,24),new Ld({color:1588512,roughness:.95,metalness:.02}));u.rotation.x=-Math.PI/2,u.position.y=0,u.receiveShadow=!0,s.add(u);const f=new pS(12,24,3040821,2049319);f.position.y=.002,f.material.opacity=.4,f.material.transparent=!0,s.add(f);const d=new Cd(new eS(new Ei(10.2,.12,10.2)),new Pc({color:4500053}));return d.position.y=.06,s.add(d),new ResizeObserver(()=>{const p=i.getBoundingClientRect(),w=p.width>10?p.width:window.innerWidth-304,S=p.height>10?p.height:window.innerHeight-52;r.setSize(w,S),a.aspect=w/S,a.updateProjectionMatrix()}).observe(i),{scene:s,camera:a,renderer:r}}const Oc=document.querySelector("#dice-count"),xh=document.querySelector("#dice-configs"),bR=document.querySelector("#set-all-d6"),vR=document.querySelector("#set-all-d20"),Er=document.querySelector("#roll-btn"),Xo=document.querySelector("#results-list"),Vd=document.querySelector("#total"),xR=document.querySelector("#canvas-container");for(let i=1;i<=12;i++){const t=document.createElement("option");t.value=String(i),t.textContent=String(i),i===3&&(t.selected=!0),Oc.appendChild(t)}function kd(){const i=Number(Oc.value);xh.innerHTML="";for(let t=0;t<i;t++){const e=document.createElement("div");e.className="die-config";const n=document.createElement("label");n.setAttribute("for",`die-type-${t}`),n.textContent=`Die ${t+1}`;const r=document.createElement("select");r.id=`die-type-${t}`,r.dataset.dieType="true",[6,20].forEach(s=>{const a=document.createElement("option");a.value=String(s),a.textContent=`d${s}`,s===20&&(a.selected=!0),r.appendChild(a)}),e.append(n,r),xh.appendChild(e)}}function Wd(i){document.querySelectorAll('select[data-die-type="true"]').forEach(e=>{e.value=String(i)})}Oc.addEventListener("change",kd);bR.addEventListener("click",()=>Wd(6));vR.addEventListener("click",()=>Wd(20));kd();const{scene:qo,camera:yR,renderer:SR}=wR(xR);let bi=null,ri=[],Yo=!1,bs=0,vs=0;const MR=480,ER=24,TR=70,AR=.08,RR=.18,CR=.07,PR=1.25,ur={linearDamping:0,angularDamping:0,friction:.82,restitution:.14,density:2.1};function IR(){const i=new _n.World({x:0,y:-9.81,z:0}),t=i.createRigidBody(_n.RigidBodyDesc.fixed().setTranslation(0,-.05,0));i.createCollider(_n.ColliderDesc.cuboid(5.5,.1,5.5).setRestitution(.12).setFriction(.82),t);const e=.45,n=8,r=4.95;[[r,n-.05,0,e,n,r],[-r,n-.05,0,e,n,r],[0,n-.05,r,r,n,e],[0,n-.05,-r,r,n,e]].forEach(([a,o,c,l,u,f])=>{const d=i.createRigidBody(_n.RigidBodyDesc.fixed().setTranslation(a,o,c));i.createCollider(_n.ColliderDesc.cuboid(l,u,f),d)});const s=i.createRigidBody(_n.RigidBodyDesc.fixed().setTranslation(0,14,0));return i.createCollider(_n.ColliderDesc.cuboid(r,.2,r),s),i}function DR(i,t,e,n){const r=Math.ceil(Math.sqrt(n)),s=Math.floor(e/r),o=(e%r-(r-1)/2)*1.3+(Math.random()-.5)*.4,c=(s-Math.floor(n/r)/2)*1.3+(Math.random()-.5)*.4,l=4.5+e*.55,u=_n.RigidBodyDesc.dynamic().setTranslation(o,l,c).setLinearDamping(ur.linearDamping).setAngularDamping(ur.angularDamping);typeof u.setCcdEnabled=="function"&&u.setCcdEnabled(!0);const f=i.createRigidBody(u);typeof f.enableCcd=="function"&&f.enableCcd(!0);let d;if(t.sides===6){const p=t.physRadius*.82;d=_n.ColliderDesc.cuboid(p,p,p)}else d=_n.ColliderDesc.convexHull(t.physHullPositions)??_n.ColliderDesc.ball(t.physRadius*.88);return d.setRestitution(ur.restitution).setFriction(ur.friction).setDensity(ur.density),i.createCollider(d,f),f.applyImpulse({x:(Math.random()-.5)*6.8,y:3.4+Math.random()*3,z:(Math.random()-.5)*6.8},!0),f.applyTorqueImpulse({x:(Math.random()-.5)*16,y:(Math.random()-.5)*16,z:(Math.random()-.5)*16},!0),f}function LR(){Xo.innerHTML="";let i=0;ri.forEach(({body:t,mesh:e,faceNormals:n,sides:r},s)=>{const a=gR(n,t.rotation());i+=a;const o=t.rotation(),c=new oi(o.x,o.y,o.z,o.w),l=new z(0,1,0);let u=0,f=-1/0;n.forEach((w,S)=>{const g=w.clone().applyQuaternion(c).dot(l);g>f&&(f=g,u=S)});const d=Array.isArray(e.material)?e.material:[e.material];d[u]&&(d[u].emissive=new qt(16766720),d[u].emissiveIntensity=.6);const p=document.createElement("li");p.textContent=`Die ${s+1} (d${r}): ${a}`,Xo.appendChild(p)}),Vd.textContent=`Total: ${i}`,Er.disabled=!1,Er.textContent="Roll Again"}function FR(){ri.forEach(t=>{qo.remove(t.mesh),t.mesh.geometry.dispose(),(Array.isArray(t.mesh.material)?t.mesh.material:[t.mesh.material]).forEach(e=>{e.map&&e.map.dispose(),e.dispose()})}),ri=[],Xo.innerHTML="",Vd.textContent="",bi&&(bi.free(),bi=null);const i=Array.from(document.querySelectorAll('select[data-die-type="true"]')).map(t=>Number(t.value));bi=IR(),bs=0,vs=0,Yo=!0,Er.disabled=!0,Er.textContent="Rolling…",i.forEach((t,e)=>{const n=mR(t,e),r=DR(bi,n,e,i.length);qo.add(n.mesh),ri.push({body:r,mesh:n.mesh,faceNormals:n.faceNormals,sides:t})})}Er.addEventListener("click",FR);function jd(){if(requestAnimationFrame(jd),Yo&&bi){bi.step(),bs++;for(const{body:r,mesh:s}of ri){const a=r.translation(),o=r.rotation();s.position.set(a.x,a.y,a.z),s.quaternion.set(o.x,o.y,o.z,o.w)}const i=ri.every(r=>r.body.isSleeping()),t=ri.every(({body:r})=>{const s=r.translation(),a=r.linvel();return s.y<=PR&&Math.abs(a.y)<CR}),e=ri.every(({body:r})=>{const s=r.linvel(),a=r.angvel(),o=Math.hypot(s.x,s.y,s.z),c=Math.hypot(a.x,a.y,a.z);return o<AR&&c<RR});vs=bs>=TR&&t&&e?vs+1:0,(i&&t||vs>=ER||bs>=MR)&&(Yo=!1,LR())}SR.render(qo,yR)}jd();
