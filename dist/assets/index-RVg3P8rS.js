(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const ju="/assets/rapier_wasm3d_bg-bb0TTxsO.wasm",Xu=async(i={},t)=>{let e;if(t.startsWith("data:")){const n=t.replace(/^data:.*?base64,/,"");let r;if(typeof Buffer=="function"&&typeof Buffer.from=="function")r=Buffer.from(n,"base64");else if(typeof atob=="function"){const s=atob(n);r=new Uint8Array(s.length);for(let a=0;a<s.length;a++)r[a]=s.charCodeAt(a)}else throw new Error("Cannot decode base64-encoded data URL");e=await WebAssembly.instantiate(r,i)}else{const n=await fetch(t),r=n.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&r.startsWith("application/wasm"))e=await WebAssembly.instantiateStreaming(n,i);else{const s=await n.arrayBuffer();e=await WebAssembly.instantiate(s,i)}}return e.instance.exports};let h;function qu(i){h=i}const Jt=new Array(128).fill(void 0);Jt.push(void 0,null,!0,!1);function Kt(i){return Jt[i]}let Lr=Jt.length;function ue(i){Lr===Jt.length&&Jt.push(Jt.length+1);const t=Lr;return Lr=Jt[t],Jt[t]=i,t}function $s(i,t){try{return i.apply(this,t)}catch(e){h.__wbindgen_export_0(ue(e))}}const Yu=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let id=new Yu("utf-8",{ignoreBOM:!0,fatal:!0});id.decode();let Zr=null;function Ku(){return(Zr===null||Zr.byteLength===0)&&(Zr=new Uint8Array(h.memory.buffer)),Zr}function rd(i,t){return i=i>>>0,id.decode(Ku().subarray(i,i+t))}function Dt(i){return i==null}let ki=null;function ze(){return(ki===null||ki.buffer.detached===!0||ki.buffer.detached===void 0&&ki.buffer!==h.memory.buffer)&&(ki=new DataView(h.memory.buffer)),ki}function Ju(i){i<132||(Jt[i]=Lr,Lr=i)}function Fr(i){const t=Kt(i);return Ju(i),t}function C(i,t){if(!(i instanceof t))throw new Error(`expected instance of ${t.name}`)}let he=128;function we(i){if(he==1)throw new Error("out of js stack");return Jt[--he]=i,he}let Qr=null;function $u(){return(Qr===null||Qr.byteLength===0)&&(Qr=new Int32Array(h.memory.buffer)),Qr}function Zu(i,t){return i=i>>>0,$u().subarray(i/4,i/4+t)}let ts=null;function sd(){return(ts===null||ts.byteLength===0)&&(ts=new Float32Array(h.memory.buffer)),ts}function vl(i,t){return i=i>>>0,sd().subarray(i/4,i/4+t)}let es=null;function ad(){return(es===null||es.byteLength===0)&&(es=new Uint32Array(h.memory.buffer)),es}function Qu(i,t){return i=i>>>0,ad().subarray(i/4,i/4+t)}let qe=0;function yr(i,t){const e=t(i.length*4,4)>>>0;return ad().set(i,e/4),qe=i.length,e}function ri(i,t){const e=t(i.length*4,4)>>>0;return sd().set(i,e/4),qe=i.length,e}const Zs=Object.freeze({LinX:0,0:"LinX",LinY:1,1:"LinY",LinZ:2,2:"LinZ",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"}),mn=Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Rope:3,3:"Rope",Spring:4,4:"Spring",Spherical:5,5:"Spherical",Generic:6,6:"Generic"}),Oe=Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron",HalfSpace:17,17:"HalfSpace",Voxels:18,18:"Voxels"}),ma=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawbroadphase_free(i>>>0,1));class Kn{static __wrap(t){t=t>>>0;const e=Object.create(Kn.prototype);return e.__wbg_ptr=t,ma.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ma.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawbroadphase_free(t,0)}constructor(){const t=h.rawbroadphase_new();return this.__wbg_ptr=t>>>0,ma.register(this,this.__wbg_ptr,this),this}castRay(t,e,n,r,s,a,o,c,l,u,f,d){try{C(t,Pe),C(e,ge),C(n,ve),C(r,U),C(s,U);const m=h.rawbroadphase_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o,c,Dt(l)?4294967297:l>>>0,!Dt(u),Dt(u)?0:u,!Dt(f),Dt(f)?0:f,we(d));return m===0?void 0:yc.__wrap(m)}finally{Jt[he++]=void 0}}castRayAndGetNormal(t,e,n,r,s,a,o,c,l,u,f,d){try{C(t,Pe),C(e,ge),C(n,ve),C(r,U),C(s,U);const m=h.rawbroadphase_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o,c,Dt(l)?4294967297:l>>>0,!Dt(u),Dt(u)?0:u,!Dt(f),Dt(f)?0:f,we(d));return m===0?void 0:ea.__wrap(m)}finally{Jt[he++]=void 0}}intersectionsWithRay(t,e,n,r,s,a,o,c,l,u,f,d,m){try{C(t,Pe),C(e,ge),C(n,ve),C(r,U),C(s,U),h.rawbroadphase_intersectionsWithRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o,we(c),l,Dt(u)?4294967297:u>>>0,!Dt(f),Dt(f)?0:f,!Dt(d),Dt(d)?0:d,we(m))}finally{Jt[he++]=void 0,Jt[he++]=void 0}}intersectionWithShape(t,e,n,r,s,a,o,c,l,u,f){try{const w=h.__wbindgen_add_to_stack_pointer(-16);C(t,Pe),C(e,ge),C(n,ve),C(r,U),C(s,kt),C(a,Pt),h.rawbroadphase_intersectionWithShape(w,this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,Dt(c)?4294967297:c>>>0,!Dt(l),Dt(l)?0:l,!Dt(u),Dt(u)?0:u,we(f));var d=ze().getInt32(w+0,!0),m=ze().getFloat64(w+8,!0);return d===0?void 0:m}finally{h.__wbindgen_add_to_stack_pointer(16),Jt[he++]=void 0}}projectPoint(t,e,n,r,s,a,o,c,l,u){try{C(t,Pe),C(e,ge),C(n,ve),C(r,U);const f=h.rawbroadphase_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,Dt(o)?4294967297:o>>>0,!Dt(c),Dt(c)?0:c,!Dt(l),Dt(l)?0:l,we(u));return f===0?void 0:Bs.__wrap(f)}finally{Jt[he++]=void 0}}projectPointAndGetFeature(t,e,n,r,s,a,o,c,l){try{C(t,Pe),C(e,ge),C(n,ve),C(r,U);const u=h.rawbroadphase_projectPointAndGetFeature(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,Dt(a)?4294967297:a>>>0,!Dt(o),Dt(o)?0:o,!Dt(c),Dt(c)?0:c,we(l));return u===0?void 0:Bs.__wrap(u)}finally{Jt[he++]=void 0}}intersectionsWithPoint(t,e,n,r,s,a,o,c,l,u){try{C(t,Pe),C(e,ge),C(n,ve),C(r,U),h.rawbroadphase_intersectionsWithPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,we(s),a,Dt(o)?4294967297:o>>>0,!Dt(c),Dt(c)?0:c,!Dt(l),Dt(l)?0:l,we(u))}finally{Jt[he++]=void 0,Jt[he++]=void 0}}castShape(t,e,n,r,s,a,o,c,l,u,f,d,m,w,y){try{C(t,Pe),C(e,ge),C(n,ve),C(r,U),C(s,kt),C(a,U),C(o,Pt);const g=h.rawbroadphase_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c,l,u,f,Dt(d)?4294967297:d>>>0,!Dt(m),Dt(m)?0:m,!Dt(w),Dt(w)?0:w,we(y));return g===0?void 0:Qs.__wrap(g)}finally{Jt[he++]=void 0}}intersectionsWithShape(t,e,n,r,s,a,o,c,l,u,f,d){try{C(t,Pe),C(e,ge),C(n,ve),C(r,U),C(s,kt),C(a,Pt),h.rawbroadphase_intersectionsWithShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,we(o),c,Dt(l)?4294967297:l>>>0,!Dt(u),Dt(u)?0:u,!Dt(f),Dt(f)?0:f,we(d))}finally{Jt[he++]=void 0,Jt[he++]=void 0}}collidersWithAabbIntersectingAabb(t,e,n,r,s,a){try{C(t,Pe),C(e,ge),C(n,ve),C(r,U),C(s,U),h.rawbroadphase_collidersWithAabbIntersectingAabb(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,we(a))}finally{Jt[he++]=void 0}}}const xl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawccdsolver_free(i>>>0,1));class oo{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,xl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawccdsolver_free(t,0)}constructor(){const t=h.rawccdsolver_new();return this.__wbg_ptr=t>>>0,xl.register(this,this.__wbg_ptr,this),this}}const yl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcharactercollision_free(i>>>0,1));class od{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,yl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcharactercollision_free(t,0)}constructor(){const t=h.rawcharactercollision_new();return this.__wbg_ptr=t>>>0,yl.register(this,this.__wbg_ptr,this),this}handle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}translationDeltaApplied(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return U.__wrap(t)}translationDeltaRemaining(){const t=h.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return U.__wrap(t)}toi(){return h.rawcharactercollision_toi(this.__wbg_ptr)}worldWitness1(){const t=h.rawcharactercollision_worldWitness1(this.__wbg_ptr);return U.__wrap(t)}worldWitness2(){const t=h.rawcharactercollision_worldWitness2(this.__wbg_ptr);return U.__wrap(t)}worldNormal1(){const t=h.rawcharactercollision_worldNormal1(this.__wbg_ptr);return U.__wrap(t)}worldNormal2(){const t=h.rawcharactercollision_worldNormal2(this.__wbg_ptr);return U.__wrap(t)}}const ga=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcolliderset_free(i>>>0,1));class ve{static __wrap(t){t=t>>>0;const e=Object.create(ve.prototype);return e.__wbg_ptr=t,ga.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ga.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcolliderset_free(t,0)}coTranslation(t){const e=h.rawcolliderset_coTranslation(this.__wbg_ptr,t);return U.__wrap(e)}coRotation(t){const e=h.rawcolliderset_coRotation(this.__wbg_ptr,t);return kt.__wrap(e)}coTranslationWrtParent(t){const e=h.rawcolliderset_coTranslationWrtParent(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}coRotationWrtParent(t){const e=h.rawcolliderset_coRotationWrtParent(this.__wbg_ptr,t);return e===0?void 0:kt.__wrap(e)}coSetTranslation(t,e,n,r){h.rawcolliderset_coSetTranslation(this.__wbg_ptr,t,e,n,r)}coSetTranslationWrtParent(t,e,n,r){h.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr,t,e,n,r)}coSetRotation(t,e,n,r,s){h.rawcolliderset_coSetRotation(this.__wbg_ptr,t,e,n,r,s)}coSetRotationWrtParent(t,e,n,r,s){h.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr,t,e,n,r,s)}coIsSensor(t){return h.rawcolliderset_coIsSensor(this.__wbg_ptr,t)!==0}coShapeType(t){return h.rawcolliderset_coShapeType(this.__wbg_ptr,t)}coHalfspaceNormal(t){const e=h.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}coHalfExtents(t){const e=h.rawcolliderset_coHalfExtents(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}coSetHalfExtents(t,e){C(e,U),h.rawcolliderset_coSetHalfExtents(this.__wbg_ptr,t,e.__wbg_ptr)}coRadius(t){const e=h.rawcolliderset_coRadius(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetRadius(t,e){h.rawcolliderset_coSetRadius(this.__wbg_ptr,t,e)}coHalfHeight(t){const e=h.rawcolliderset_coHalfHeight(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetHalfHeight(t,e){h.rawcolliderset_coSetHalfHeight(this.__wbg_ptr,t,e)}coRoundRadius(t){const e=h.rawcolliderset_coRoundRadius(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetRoundRadius(t,e){h.rawcolliderset_coSetRoundRadius(this.__wbg_ptr,t,e)}coVoxelData(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coVoxelData(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getInt32(r+4,!0);let s;return e!==0&&(s=Zu(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coVoxelSize(t){const e=h.rawcolliderset_coVoxelSize(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}coSetVoxel(t,e,n,r,s){h.rawcolliderset_coSetVoxel(this.__wbg_ptr,t,e,n,r,s)}coPropagateVoxelChange(t,e,n,r,s,a,o,c){h.rawcolliderset_coPropagateVoxelChange(this.__wbg_ptr,t,e,n,r,s,a,o,c)}coCombineVoxelStates(t,e,n,r,s){h.rawcolliderset_coCombineVoxelStates(this.__wbg_ptr,t,e,n,r,s)}coVertices(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coVertices(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getInt32(r+4,!0);let s;return e!==0&&(s=vl(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coIndices(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coIndices(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getInt32(r+4,!0);let s;return e!==0&&(s=Qu(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coTriMeshFlags(t){const e=h.rawcolliderset_coTriMeshFlags(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightFieldFlags(t){const e=h.rawcolliderset_coHeightFieldFlags(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightfieldHeights(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coHeightfieldHeights(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getInt32(r+4,!0);let s;return e!==0&&(s=vl(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(t){const e=h.rawcolliderset_coHeightfieldScale(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}coHeightfieldNRows(t){const e=h.rawcolliderset_coHeightfieldNRows(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightfieldNCols(t){const e=h.rawcolliderset_coHeightfieldNCols(this.__wbg_ptr,t);return e===4294967297?void 0:e}coParent(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coParent(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getFloat64(r+8,!0);return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}coSetEnabled(t,e){h.rawcolliderset_coSetEnabled(this.__wbg_ptr,t,e)}coIsEnabled(t){return h.rawcolliderset_coIsEnabled(this.__wbg_ptr,t)!==0}coSetContactSkin(t,e){h.rawcolliderset_coSetContactSkin(this.__wbg_ptr,t,e)}coContactSkin(t){return h.rawcolliderset_coContactSkin(this.__wbg_ptr,t)}coFriction(t){return h.rawcolliderset_coFriction(this.__wbg_ptr,t)}coRestitution(t){return h.rawcolliderset_coRestitution(this.__wbg_ptr,t)}coDensity(t){return h.rawcolliderset_coDensity(this.__wbg_ptr,t)}coMass(t){return h.rawcolliderset_coMass(this.__wbg_ptr,t)}coVolume(t){return h.rawcolliderset_coVolume(this.__wbg_ptr,t)}coCollisionGroups(t){return h.rawcolliderset_coCollisionGroups(this.__wbg_ptr,t)>>>0}coSolverGroups(t){return h.rawcolliderset_coSolverGroups(this.__wbg_ptr,t)>>>0}coActiveHooks(t){return h.rawcolliderset_coActiveHooks(this.__wbg_ptr,t)>>>0}coActiveCollisionTypes(t){return h.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr,t)}coActiveEvents(t){return h.rawcolliderset_coActiveEvents(this.__wbg_ptr,t)>>>0}coContactForceEventThreshold(t){return h.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr,t)}coContainsPoint(t,e){return C(e,U),h.rawcolliderset_coContainsPoint(this.__wbg_ptr,t,e.__wbg_ptr)!==0}coCastShape(t,e,n,r,s,a,o,c,l){C(e,U),C(n,Pt),C(r,U),C(s,kt),C(a,U);const u=h.rawcolliderset_coCastShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,c,l);return u===0?void 0:ia.__wrap(u)}coCastCollider(t,e,n,r,s,a,o){C(e,U),C(r,U);const c=h.rawcolliderset_coCastCollider(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s,a,o);return c===0?void 0:Qs.__wrap(c)}coIntersectsShape(t,e,n,r){return C(e,Pt),C(n,U),C(r,kt),h.rawcolliderset_coIntersectsShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr)!==0}coContactShape(t,e,n,r,s){C(e,Pt),C(n,U),C(r,kt);const a=h.rawcolliderset_coContactShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s);return a===0?void 0:Ur.__wrap(a)}coContactCollider(t,e,n){const r=h.rawcolliderset_coContactCollider(this.__wbg_ptr,t,e,n);return r===0?void 0:Ur.__wrap(r)}coProjectPoint(t,e,n){C(e,U);const r=h.rawcolliderset_coProjectPoint(this.__wbg_ptr,t,e.__wbg_ptr,n);return ta.__wrap(r)}coIntersectsRay(t,e,n,r){return C(e,U),C(n,U),h.rawcolliderset_coIntersectsRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)!==0}coCastRay(t,e,n,r,s){return C(e,U),C(n,U),h.rawcolliderset_coCastRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s)}coCastRayAndGetNormal(t,e,n,r,s){C(e,U),C(n,U);const a=h.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s);return a===0?void 0:na.__wrap(a)}coSetSensor(t,e){h.rawcolliderset_coSetSensor(this.__wbg_ptr,t,e)}coSetRestitution(t,e){h.rawcolliderset_coSetRestitution(this.__wbg_ptr,t,e)}coSetFriction(t,e){h.rawcolliderset_coSetFriction(this.__wbg_ptr,t,e)}coFrictionCombineRule(t){return h.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr,t)>>>0}coSetFrictionCombineRule(t,e){h.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr,t,e)}coRestitutionCombineRule(t){return h.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr,t)>>>0}coSetRestitutionCombineRule(t,e){h.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr,t,e)}coSetCollisionGroups(t,e){h.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr,t,e)}coSetSolverGroups(t,e){h.rawcolliderset_coSetSolverGroups(this.__wbg_ptr,t,e)}coSetActiveHooks(t,e){h.rawcolliderset_coSetActiveHooks(this.__wbg_ptr,t,e)}coSetActiveEvents(t,e){h.rawcolliderset_coSetActiveEvents(this.__wbg_ptr,t,e)}coSetActiveCollisionTypes(t,e){h.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr,t,e)}coSetShape(t,e){C(e,Pt),h.rawcolliderset_coSetShape(this.__wbg_ptr,t,e.__wbg_ptr)}coSetContactForceEventThreshold(t,e){h.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr,t,e)}coSetDensity(t,e){h.rawcolliderset_coSetDensity(this.__wbg_ptr,t,e)}coSetMass(t,e){h.rawcolliderset_coSetMass(this.__wbg_ptr,t,e)}coSetMassProperties(t,e,n,r,s){C(n,U),C(r,U),C(s,kt),h.rawcolliderset_coSetMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}constructor(){const t=h.rawcolliderset_new();return this.__wbg_ptr=t>>>0,ga.register(this,this.__wbg_ptr,this),this}len(){return h.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawcolliderset_contains(this.__wbg_ptr,t)!==0}createCollider(t,e,n,r,s,a,o,c,l,u,f,d,m,w,y,g,p,x,T,E,P,R,I,v,M){try{const H=h.__wbindgen_add_to_stack_pointer(-16);C(e,Pt),C(n,U),C(r,kt),C(o,U),C(c,U),C(l,kt),C(M,ge),h.rawcolliderset_createCollider(H,this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,u,f,d,m,w,y,g,p,x,T,E,P,R,I,v,M.__wbg_ptr);var V=ze().getInt32(H+0,!0),D=ze().getFloat64(H+8,!0);return V===0?void 0:D}finally{h.__wbindgen_add_to_stack_pointer(16)}}remove(t,e,n,r){C(e,$n),C(n,ge),h.rawcolliderset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}isHandleValid(t){return h.rawcolliderset_contains(this.__wbg_ptr,t)!==0}forEachColliderHandle(t){try{h.rawcolliderset_forEachColliderHandle(this.__wbg_ptr,we(t))}finally{Jt[he++]=void 0}}}const Sl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcollidershapecasthit_free(i>>>0,1));class Qs{static __wrap(t){t=t>>>0;const e=Object.create(Qs.prototype);return e.__wbg_ptr=t,Sl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Sl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcollidershapecasthit_free(t,0)}colliderHandle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}witness1(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return U.__wrap(t)}witness2(){const t=h.rawcollidershapecasthit_witness2(this.__wbg_ptr);return U.__wrap(t)}normal1(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return U.__wrap(t)}normal2(){const t=h.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return U.__wrap(t)}}const Ml=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactforceevent_free(i>>>0,1));class wc{static __wrap(t){t=t>>>0;const e=Object.create(wc.prototype);return e.__wbg_ptr=t,Ml.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ml.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactforceevent_free(t,0)}collider1(){return h.rawcharactercollision_handle(this.__wbg_ptr)}collider2(){return h.rawcontactforceevent_collider2(this.__wbg_ptr)}total_force(){const t=h.rawcontactforceevent_total_force(this.__wbg_ptr);return U.__wrap(t)}total_force_magnitude(){return h.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}max_force_direction(){const t=h.rawcontactforceevent_max_force_direction(this.__wbg_ptr);return U.__wrap(t)}max_force_magnitude(){return h.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}}const El=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactmanifold_free(i>>>0,1));class bc{static __wrap(t){t=t>>>0;const e=Object.create(bc.prototype);return e.__wbg_ptr=t,El.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,El.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactmanifold_free(t,0)}normal(){const t=h.rawcontactmanifold_normal(this.__wbg_ptr);return U.__wrap(t)}local_n1(){const t=h.rawcontactmanifold_local_n1(this.__wbg_ptr);return U.__wrap(t)}local_n2(){const t=h.rawcontactmanifold_local_n2(this.__wbg_ptr);return U.__wrap(t)}subshape1(){return h.rawcontactmanifold_subshape1(this.__wbg_ptr)>>>0}subshape2(){return h.rawcontactmanifold_subshape2(this.__wbg_ptr)>>>0}num_contacts(){return h.rawcontactmanifold_num_contacts(this.__wbg_ptr)>>>0}contact_local_p1(t){const e=h.rawcontactmanifold_contact_local_p1(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}contact_local_p2(t){const e=h.rawcontactmanifold_contact_local_p2(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}contact_dist(t){return h.rawcontactmanifold_contact_dist(this.__wbg_ptr,t)}contact_fid1(t){return h.rawcontactmanifold_contact_fid1(this.__wbg_ptr,t)>>>0}contact_fid2(t){return h.rawcontactmanifold_contact_fid2(this.__wbg_ptr,t)>>>0}contact_impulse(t){return h.rawcontactmanifold_contact_impulse(this.__wbg_ptr,t)}contact_tangent_impulse_x(t){return h.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr,t)}contact_tangent_impulse_y(t){return h.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr,t)}num_solver_contacts(){return h.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr)>>>0}solver_contact_point(t){const e=h.rawcontactmanifold_solver_contact_point(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}solver_contact_dist(t){return h.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr,t)}solver_contact_friction(t){return h.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr,t)}solver_contact_restitution(t){return h.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr,t)}solver_contact_tangent_velocity(t){const e=h.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr,t);return U.__wrap(e)}}const Tl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactpair_free(i>>>0,1));class vc{static __wrap(t){t=t>>>0;const e=Object.create(vc.prototype);return e.__wbg_ptr=t,Tl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Tl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactpair_free(t,0)}collider1(){return h.rawcontactpair_collider1(this.__wbg_ptr)}collider2(){return h.rawcontactpair_collider2(this.__wbg_ptr)}numContactManifolds(){return h.rawcontactpair_numContactManifolds(this.__wbg_ptr)>>>0}contactManifold(t){const e=h.rawcontactpair_contactManifold(this.__wbg_ptr,t);return e===0?void 0:bc.__wrap(e)}}const Al=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdebugrenderpipeline_free(i>>>0,1));class tf{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Al.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdebugrenderpipeline_free(t,0)}constructor(){const t=h.rawdebugrenderpipeline_new();return this.__wbg_ptr=t>>>0,Al.register(this,this.__wbg_ptr,this),this}vertices(){const t=h.rawdebugrenderpipeline_vertices(this.__wbg_ptr);return Fr(t)}colors(){const t=h.rawdebugrenderpipeline_colors(this.__wbg_ptr);return Fr(t)}render(t,e,n,r,s,a,o){try{C(t,ge),C(e,ve),C(n,Jn),C(r,Zn),C(s,Pe),h.rawdebugrenderpipeline_render(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,we(o))}finally{Jt[he++]=void 0}}}const Rl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdeserializedworld_free(i>>>0,1));class xc{static __wrap(t){t=t>>>0;const e=Object.create(xc.prototype);return e.__wbg_ptr=t,Rl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Rl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdeserializedworld_free(t,0)}takeGravity(){const t=h.rawdeserializedworld_takeGravity(this.__wbg_ptr);return t===0?void 0:U.__wrap(t)}takeIntegrationParameters(){const t=h.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);return t===0?void 0:Ui.__wrap(t)}takeIslandManager(){const t=h.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);return t===0?void 0:$n.__wrap(t)}takeBroadPhase(){const t=h.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);return t===0?void 0:Kn.__wrap(t)}takeNarrowPhase(){const t=h.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);return t===0?void 0:Pe.__wrap(t)}takeBodies(){const t=h.rawdeserializedworld_takeBodies(this.__wbg_ptr);return t===0?void 0:ge.__wrap(t)}takeColliders(){const t=h.rawdeserializedworld_takeColliders(this.__wbg_ptr);return t===0?void 0:ve.__wrap(t)}takeImpulseJoints(){const t=h.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);return t===0?void 0:Jn.__wrap(t)}takeMultibodyJoints(){const t=h.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);return t===0?void 0:Zn.__wrap(t)}}const Cl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdynamicraycastvehiclecontroller_free(i>>>0,1));class ef{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Cl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdynamicraycastvehiclecontroller_free(t,0)}constructor(t){const e=h.rawdynamicraycastvehiclecontroller_new(t);return this.__wbg_ptr=e>>>0,Cl.register(this,this.__wbg_ptr,this),this}current_vehicle_speed(){return h.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}chassis(){return h.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr)}index_up_axis(){return h.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}set_index_up_axis(t){h.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}index_forward_axis(){return h.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}set_index_forward_axis(t){h.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,t)}add_wheel(t,e,n,r,s){C(t,U),C(e,U),C(n,U),h.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s)}num_wheels(){return h.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr)>>>0}update_vehicle(t,e,n,r,s,a,o,c){try{C(e,Kn),C(n,Pe),C(r,ge),C(s,ve),h.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,Dt(o)?4294967297:o>>>0,we(c))}finally{Jt[he++]=void 0}}wheel_chassis_connection_point_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}set_wheel_chassis_connection_point_cs(t,e){C(e,U),h.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_suspension_rest_length(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_rest_length(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr,t,e)}wheel_max_suspension_travel(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_max_suspension_travel(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr,t,e)}wheel_radius(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_radius(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_radius(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr,t,e)}wheel_suspension_stiffness(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_stiffness(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr,t,e)}wheel_suspension_compression(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_compression(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr,t,e)}wheel_suspension_relaxation(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_relaxation(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr,t,e)}wheel_max_suspension_force(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_max_suspension_force(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr,t,e)}wheel_brake(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_brake(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_brake(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr,t,e)}wheel_steering(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_steering(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_steering(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr,t,e)}wheel_engine_force(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_engine_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_engine_force(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr,t,e)}wheel_direction_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}set_wheel_direction_cs(t,e){C(e,U),h.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_axle_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}set_wheel_axle_cs(t,e){C(e,U),h.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_friction_slip(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_friction_slip(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_friction_slip(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr,t,e)}wheel_side_friction_stiffness(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_side_friction_stiffness(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr,t,e)}wheel_rotation(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_rotation(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_forward_impulse(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_side_impulse(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_side_impulse(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_suspension_force(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_contact_normal_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}wheel_contact_point_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}wheel_suspension_length(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_length(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_hard_point_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr,t);return e===0?void 0:U.__wrap(e)}wheel_is_in_contact(t){return h.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr,t)!==0}wheel_ground_object(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_ground_object(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getFloat64(r+8,!0);return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}}const Pl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_raweventqueue_free(i>>>0,1));class nf{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Pl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_raweventqueue_free(t,0)}constructor(t){const e=h.raweventqueue_new(t);return this.__wbg_ptr=e>>>0,Pl.register(this,this.__wbg_ptr,this),this}drainCollisionEvents(t){try{h.raweventqueue_drainCollisionEvents(this.__wbg_ptr,we(t))}finally{Jt[he++]=void 0}}drainContactForceEvents(t){try{h.raweventqueue_drainContactForceEvents(this.__wbg_ptr,we(t))}finally{Jt[he++]=void 0}}clear(){h.raweventqueue_clear(this.__wbg_ptr)}}const Il=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawgenericjoint_free(i>>>0,1));class _n{static __wrap(t){t=t>>>0;const e=Object.create(_n.prototype);return e.__wbg_ptr=t,Il.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Il.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawgenericjoint_free(t,0)}static generic(t,e,n,r){C(t,U),C(e,U),C(n,U);const s=h.rawgenericjoint_generic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return s===0?void 0:_n.__wrap(s)}static spring(t,e,n,r,s){C(r,U),C(s,U);const a=h.rawgenericjoint_spring(t,e,n,r.__wbg_ptr,s.__wbg_ptr);return _n.__wrap(a)}static rope(t,e,n){C(e,U),C(n,U);const r=h.rawgenericjoint_rope(t,e.__wbg_ptr,n.__wbg_ptr);return _n.__wrap(r)}static spherical(t,e){C(t,U),C(e,U);const n=h.rawgenericjoint_spherical(t.__wbg_ptr,e.__wbg_ptr);return _n.__wrap(n)}static prismatic(t,e,n,r,s,a){C(t,U),C(e,U),C(n,U);const o=h.rawgenericjoint_prismatic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s,a);return o===0?void 0:_n.__wrap(o)}static fixed(t,e,n,r){C(t,U),C(e,kt),C(n,U),C(r,kt);const s=h.rawgenericjoint_fixed(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr);return _n.__wrap(s)}static revolute(t,e,n){C(t,U),C(e,U),C(n,U);const r=h.rawgenericjoint_revolute(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return r===0?void 0:_n.__wrap(r)}}const wa=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawimpulsejointset_free(i>>>0,1));class Jn{static __wrap(t){t=t>>>0;const e=Object.create(Jn.prototype);return e.__wbg_ptr=t,wa.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,wa.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawimpulsejointset_free(t,0)}jointType(t){return h.rawimpulsejointset_jointType(this.__wbg_ptr,t)}jointBodyHandle1(t){return h.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr,t)}jointBodyHandle2(t){return h.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr,t)}jointFrameX1(t){const e=h.rawimpulsejointset_jointFrameX1(this.__wbg_ptr,t);return kt.__wrap(e)}jointFrameX2(t){const e=h.rawimpulsejointset_jointFrameX2(this.__wbg_ptr,t);return kt.__wrap(e)}jointAnchor1(t){const e=h.rawimpulsejointset_jointAnchor1(this.__wbg_ptr,t);return U.__wrap(e)}jointAnchor2(t){const e=h.rawimpulsejointset_jointAnchor2(this.__wbg_ptr,t);return U.__wrap(e)}jointSetAnchor1(t,e){C(e,U),h.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetAnchor2(t,e){C(e,U),h.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr,t,e.__wbg_ptr)}jointContactsEnabled(t){return h.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){h.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return h.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return h.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return h.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr,t,e)}jointSetLimits(t,e,n,r){h.rawimpulsejointset_jointSetLimits(this.__wbg_ptr,t,e,n,r)}jointConfigureMotorModel(t,e,n){h.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr,t,e,n)}jointConfigureMotorVelocity(t,e,n,r){h.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr,t,e,n,r)}jointConfigureMotorPosition(t,e,n,r,s){h.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr,t,e,n,r,s)}jointConfigureMotor(t,e,n,r,s,a){h.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr,t,e,n,r,s,a)}constructor(){const t=h.rawimpulsejointset_new();return this.__wbg_ptr=t>>>0,wa.register(this,this.__wbg_ptr,this),this}createJoint(t,e,n,r){return C(t,_n),h.rawimpulsejointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}remove(t,e){h.rawimpulsejointset_remove(this.__wbg_ptr,t,e)}len(){return h.rawimpulsejointset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawimpulsejointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{h.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr,we(t))}finally{Jt[he++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{h.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,we(e))}finally{Jt[he++]=void 0}}}const ba=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawintegrationparameters_free(i>>>0,1));class Ui{static __wrap(t){t=t>>>0;const e=Object.create(Ui.prototype);return e.__wbg_ptr=t,ba.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ba.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawintegrationparameters_free(t,0)}constructor(){const t=h.rawintegrationparameters_new();return this.__wbg_ptr=t>>>0,ba.register(this,this.__wbg_ptr,this),this}get dt(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}get contact_erp(){return h.rawintegrationparameters_contact_erp(this.__wbg_ptr)}get normalizedAllowedLinearError(){return h.rawintegrationparameters_normalizedAllowedLinearError(this.__wbg_ptr)}get normalizedPredictionDistance(){return h.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr)}get numSolverIterations(){return h.rawintegrationparameters_numSolverIterations(this.__wbg_ptr)>>>0}get numInternalPgsIterations(){return h.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}get minIslandSize(){return h.rawintegrationparameters_minIslandSize(this.__wbg_ptr)>>>0}get maxCcdSubsteps(){return h.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr)>>>0}get lengthUnit(){return h.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}set dt(t){h.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}set contact_natural_frequency(t){h.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr,t)}set normalizedAllowedLinearError(t){h.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr,t)}set normalizedPredictionDistance(t){h.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr,t)}set numSolverIterations(t){h.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr,t)}set numInternalPgsIterations(t){h.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}set minIslandSize(t){h.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr,t)}set maxCcdSubsteps(t){h.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr,t)}set lengthUnit(t){h.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr,t)}}const va=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawislandmanager_free(i>>>0,1));class $n{static __wrap(t){t=t>>>0;const e=Object.create($n.prototype);return e.__wbg_ptr=t,va.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,va.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawislandmanager_free(t,0)}constructor(){const t=h.rawislandmanager_new();return this.__wbg_ptr=t>>>0,va.register(this,this.__wbg_ptr,this),this}forEachActiveRigidBodyHandle(t){try{h.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr,we(t))}finally{Jt[he++]=void 0}}}const Dl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawkinematiccharactercontroller_free(i>>>0,1));class rf{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Dl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawkinematiccharactercontroller_free(t,0)}constructor(t){const e=h.rawkinematiccharactercontroller_new(t);return this.__wbg_ptr=e>>>0,Dl.register(this,this.__wbg_ptr,this),this}up(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return U.__wrap(t)}setUp(t){C(t,U),h.rawkinematiccharactercontroller_setUp(this.__wbg_ptr,t.__wbg_ptr)}normalNudgeFactor(){return h.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr)}setNormalNudgeFactor(t){h.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr,t)}offset(){return h.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}setOffset(t){h.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr,t)}slideEnabled(){return h.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr)!==0}setSlideEnabled(t){h.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr,t)}autostepMaxHeight(){const t=h.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);return t===4294967297?void 0:t}autostepMinWidth(){const t=h.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);return t===4294967297?void 0:t}autostepIncludesDynamicBodies(){const t=h.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);return t===16777215?void 0:t!==0}autostepEnabled(){return h.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr)!==0}enableAutostep(t,e,n){h.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr,t,e,n)}disableAutostep(){h.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr)}maxSlopeClimbAngle(){return h.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}setMaxSlopeClimbAngle(t){h.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr,t)}minSlopeSlideAngle(){return h.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr)}setMinSlopeSlideAngle(t){h.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr,t)}snapToGroundDistance(){const t=h.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);return t===4294967297?void 0:t}enableSnapToGround(t){h.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr,t)}disableSnapToGround(){h.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr)}snapToGroundEnabled(){return h.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr)!==0}computeColliderMovement(t,e,n,r,s,a,o,c,l,u,f,d){try{C(e,Kn),C(n,Pe),C(r,ge),C(s,ve),C(o,U),h.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o.__wbg_ptr,c,Dt(l)?4294967297:Math.fround(l),u,Dt(f)?4294967297:f>>>0,we(d))}finally{Jt[he++]=void 0}}computedMovement(){const t=h.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);return U.__wrap(t)}computedGrounded(){return h.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr)!==0}numComputedCollisions(){return h.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr)>>>0}computedCollision(t,e){return C(e,od),h.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr,t,e.__wbg_ptr)!==0}}const xa=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawmultibodyjointset_free(i>>>0,1));class Zn{static __wrap(t){t=t>>>0;const e=Object.create(Zn.prototype);return e.__wbg_ptr=t,xa.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,xa.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawmultibodyjointset_free(t,0)}jointType(t){return h.rawmultibodyjointset_jointType(this.__wbg_ptr,t)}jointFrameX1(t){const e=h.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr,t);return kt.__wrap(e)}jointFrameX2(t){const e=h.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr,t);return kt.__wrap(e)}jointAnchor1(t){const e=h.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr,t);return U.__wrap(e)}jointAnchor2(t){const e=h.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr,t);return U.__wrap(e)}jointContactsEnabled(t){return h.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){h.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return h.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return h.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return h.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr,t,e)}constructor(){const t=h.rawmultibodyjointset_new();return this.__wbg_ptr=t>>>0,xa.register(this,this.__wbg_ptr,this),this}createJoint(t,e,n,r){return C(t,_n),h.rawmultibodyjointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}remove(t,e){h.rawmultibodyjointset_remove(this.__wbg_ptr,t,e)}contains(t){return h.rawmultibodyjointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{h.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr,we(t))}finally{Jt[he++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{h.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,we(e))}finally{Jt[he++]=void 0}}}const ya=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawnarrowphase_free(i>>>0,1));class Pe{static __wrap(t){t=t>>>0;const e=Object.create(Pe.prototype);return e.__wbg_ptr=t,ya.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ya.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawnarrowphase_free(t,0)}constructor(){const t=h.rawnarrowphase_new();return this.__wbg_ptr=t>>>0,ya.register(this,this.__wbg_ptr,this),this}contact_pairs_with(t,e){h.rawnarrowphase_contact_pairs_with(this.__wbg_ptr,t,ue(e))}contact_pair(t,e){const n=h.rawnarrowphase_contact_pair(this.__wbg_ptr,t,e);return n===0?void 0:vc.__wrap(n)}intersection_pairs_with(t,e){h.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr,t,ue(e))}intersection_pair(t,e){return h.rawnarrowphase_intersection_pair(this.__wbg_ptr,t,e)!==0}}const Ll=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawphysicspipeline_free(i>>>0,1));class sf{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ll.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawphysicspipeline_free(t,0)}constructor(){const t=h.rawphysicspipeline_new();return this.__wbg_ptr=t>>>0,Ll.register(this,this.__wbg_ptr,this),this}set_profiler_enabled(t){h.rawphysicspipeline_set_profiler_enabled(this.__wbg_ptr,t)}is_profiler_enabled(){return h.rawphysicspipeline_is_profiler_enabled(this.__wbg_ptr)!==0}timing_step(){return h.rawphysicspipeline_timing_step(this.__wbg_ptr)}timing_collision_detection(){return h.rawphysicspipeline_timing_collision_detection(this.__wbg_ptr)}timing_broad_phase(){return h.rawphysicspipeline_timing_broad_phase(this.__wbg_ptr)}timing_narrow_phase(){return h.rawphysicspipeline_timing_narrow_phase(this.__wbg_ptr)}timing_solver(){return h.rawphysicspipeline_timing_solver(this.__wbg_ptr)}timing_velocity_assembly(){return h.rawphysicspipeline_timing_velocity_assembly(this.__wbg_ptr)}timing_velocity_resolution(){return h.rawphysicspipeline_timing_velocity_resolution(this.__wbg_ptr)}timing_velocity_update(){return h.rawphysicspipeline_timing_velocity_update(this.__wbg_ptr)}timing_velocity_writeback(){return h.rawphysicspipeline_timing_velocity_writeback(this.__wbg_ptr)}timing_ccd(){return h.rawphysicspipeline_timing_ccd(this.__wbg_ptr)}timing_ccd_toi_computation(){return h.rawphysicspipeline_timing_ccd_toi_computation(this.__wbg_ptr)}timing_ccd_broad_phase(){return h.rawphysicspipeline_timing_ccd_broad_phase(this.__wbg_ptr)}timing_ccd_narrow_phase(){return h.rawphysicspipeline_timing_ccd_narrow_phase(this.__wbg_ptr)}timing_ccd_solver(){return h.rawphysicspipeline_timing_ccd_solver(this.__wbg_ptr)}timing_island_construction(){return h.rawphysicspipeline_timing_island_construction(this.__wbg_ptr)}timing_user_changes(){return h.rawphysicspipeline_timing_user_changes(this.__wbg_ptr)}step(t,e,n,r,s,a,o,c,l,u){C(t,U),C(e,Ui),C(n,$n),C(r,Kn),C(s,Pe),C(a,ge),C(o,ve),C(c,Jn),C(l,Zn),C(u,oo),h.rawphysicspipeline_step(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,u.__wbg_ptr)}stepWithEvents(t,e,n,r,s,a,o,c,l,u,f,d,m,w){C(t,U),C(e,Ui),C(n,$n),C(r,Kn),C(s,Pe),C(a,ge),C(o,ve),C(c,Jn),C(l,Zn),C(u,oo),C(f,nf),h.rawphysicspipeline_stepWithEvents(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,u.__wbg_ptr,f.__wbg_ptr,ue(d),ue(m),ue(w))}}const Fl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpidcontroller_free(i>>>0,1));class af{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Fl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpidcontroller_free(t,0)}constructor(t,e,n,r){const s=h.rawpidcontroller_new(t,e,n,r);return this.__wbg_ptr=s>>>0,Fl.register(this,this.__wbg_ptr,this),this}set_kp(t,e){h.rawpidcontroller_set_kp(this.__wbg_ptr,t,e)}set_ki(t,e){h.rawpidcontroller_set_ki(this.__wbg_ptr,t,e)}set_kd(t,e){h.rawpidcontroller_set_kd(this.__wbg_ptr,t,e)}set_axes_mask(t){h.rawpidcontroller_set_axes_mask(this.__wbg_ptr,t)}reset_integrals(){h.rawpidcontroller_reset_integrals(this.__wbg_ptr)}apply_linear_correction(t,e,n,r,s){C(e,ge),C(r,U),C(s,U),h.rawpidcontroller_apply_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr)}apply_angular_correction(t,e,n,r,s){C(e,ge),C(r,kt),C(s,U),h.rawpidcontroller_apply_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr)}linear_correction(t,e,n,r,s){C(e,ge),C(r,U),C(s,U);const a=h.rawpidcontroller_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr);return U.__wrap(a)}angular_correction(t,e,n,r,s){C(e,ge),C(r,kt),C(s,U);const a=h.rawpidcontroller_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr);return U.__wrap(a)}}const Ul=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpointcolliderprojection_free(i>>>0,1));class Bs{static __wrap(t){t=t>>>0;const e=Object.create(Bs.prototype);return e.__wbg_ptr=t,Ul.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ul.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpointcolliderprojection_free(t,0)}colliderHandle(){return h.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}point(){const t=h.rawpointcolliderprojection_point(this.__wbg_ptr);return U.__wrap(t)}isInside(){return h.rawpointcolliderprojection_isInside(this.__wbg_ptr)!==0}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=h.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const Nl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpointprojection_free(i>>>0,1));class ta{static __wrap(t){t=t>>>0;const e=Object.create(ta.prototype);return e.__wbg_ptr=t,Nl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Nl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpointprojection_free(t,0)}point(){const t=h.rawpointprojection_point(this.__wbg_ptr);return U.__wrap(t)}isInside(){return h.rawpointprojection_isInside(this.__wbg_ptr)!==0}}const Ol=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawraycolliderhit_free(i>>>0,1));class yc{static __wrap(t){t=t>>>0;const e=Object.create(yc.prototype);return e.__wbg_ptr=t,Ol.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ol.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawraycolliderhit_free(t,0)}colliderHandle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}timeOfImpact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}}const Bl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawraycolliderintersection_free(i>>>0,1));class ea{static __wrap(t){t=t>>>0;const e=Object.create(ea.prototype);return e.__wbg_ptr=t,Bl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Bl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawraycolliderintersection_free(t,0)}colliderHandle(){return h.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}normal(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return U.__wrap(t)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=h.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const zl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrayintersection_free(i>>>0,1));class na{static __wrap(t){t=t>>>0;const e=Object.create(na.prototype);return e.__wbg_ptr=t,zl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,zl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrayintersection_free(t,0)}normal(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return U.__wrap(t)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=h.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const Sa=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrigidbodyset_free(i>>>0,1));class ge{static __wrap(t){t=t>>>0;const e=Object.create(ge.prototype);return e.__wbg_ptr=t,Sa.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Sa.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrigidbodyset_free(t,0)}rbTranslation(t){const e=h.rawrigidbodyset_rbTranslation(this.__wbg_ptr,t);return U.__wrap(e)}rbRotation(t){const e=h.rawrigidbodyset_rbRotation(this.__wbg_ptr,t);return kt.__wrap(e)}rbSleep(t){h.rawrigidbodyset_rbSleep(this.__wbg_ptr,t)}rbIsSleeping(t){return h.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr,t)!==0}rbIsMoving(t){return h.rawrigidbodyset_rbIsMoving(this.__wbg_ptr,t)!==0}rbNextTranslation(t){const e=h.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr,t);return U.__wrap(e)}rbNextRotation(t){const e=h.rawrigidbodyset_rbNextRotation(this.__wbg_ptr,t);return kt.__wrap(e)}rbSetTranslation(t,e,n,r,s){h.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr,t,e,n,r,s)}rbSetRotation(t,e,n,r,s,a){h.rawrigidbodyset_rbSetRotation(this.__wbg_ptr,t,e,n,r,s,a)}rbSetLinvel(t,e,n){C(e,U),h.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetAngvel(t,e,n){C(e,U),h.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetNextKinematicTranslation(t,e,n,r){h.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr,t,e,n,r)}rbSetNextKinematicRotation(t,e,n,r,s){h.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr,t,e,n,r,s)}rbRecomputeMassPropertiesFromColliders(t,e){C(e,ve),h.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr,t,e.__wbg_ptr)}rbSetAdditionalMass(t,e,n){h.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr,t,e,n)}rbSetAdditionalMassProperties(t,e,n,r,s,a){C(n,U),C(r,U),C(s,kt),h.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a)}rbLinvel(t){const e=h.rawrigidbodyset_rbLinvel(this.__wbg_ptr,t);return U.__wrap(e)}rbAngvel(t){const e=h.rawrigidbodyset_rbAngvel(this.__wbg_ptr,t);return U.__wrap(e)}rbVelocityAtPoint(t,e){C(e,U);const n=h.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr,t,e.__wbg_ptr);return U.__wrap(n)}rbLockTranslations(t,e,n){h.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr,t,e,n)}rbSetEnabledTranslations(t,e,n,r,s){h.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr,t,e,n,r,s)}rbLockRotations(t,e,n){h.rawrigidbodyset_rbLockRotations(this.__wbg_ptr,t,e,n)}rbSetEnabledRotations(t,e,n,r,s){h.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr,t,e,n,r,s)}rbDominanceGroup(t){return h.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr,t)}rbSetDominanceGroup(t,e){h.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr,t,e)}rbEnableCcd(t,e){h.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr,t,e)}rbSetSoftCcdPrediction(t,e){h.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr,t,e)}rbMass(t){return h.rawrigidbodyset_rbMass(this.__wbg_ptr,t)}rbInvMass(t){return h.rawrigidbodyset_rbInvMass(this.__wbg_ptr,t)}rbEffectiveInvMass(t){const e=h.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr,t);return U.__wrap(e)}rbLocalCom(t){const e=h.rawrigidbodyset_rbLocalCom(this.__wbg_ptr,t);return U.__wrap(e)}rbWorldCom(t){const e=h.rawrigidbodyset_rbWorldCom(this.__wbg_ptr,t);return U.__wrap(e)}rbInvPrincipalInertia(t){const e=h.rawrigidbodyset_rbInvPrincipalInertia(this.__wbg_ptr,t);return U.__wrap(e)}rbPrincipalInertiaLocalFrame(t){const e=h.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr,t);return kt.__wrap(e)}rbPrincipalInertia(t){const e=h.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr,t);return U.__wrap(e)}rbEffectiveWorldInvInertia(t){const e=h.rawrigidbodyset_rbEffectiveWorldInvInertia(this.__wbg_ptr,t);return zs.__wrap(e)}rbEffectiveAngularInertia(t){const e=h.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr,t);return zs.__wrap(e)}rbWakeUp(t){h.rawrigidbodyset_rbWakeUp(this.__wbg_ptr,t)}rbIsCcdEnabled(t){return h.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr,t)!==0}rbSoftCcdPrediction(t){return h.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr,t)}rbNumColliders(t){return h.rawrigidbodyset_rbNumColliders(this.__wbg_ptr,t)>>>0}rbCollider(t,e){return h.rawrigidbodyset_rbCollider(this.__wbg_ptr,t,e)}rbBodyType(t){return h.rawrigidbodyset_rbBodyType(this.__wbg_ptr,t)}rbSetBodyType(t,e,n){h.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr,t,e,n)}rbIsFixed(t){return h.rawrigidbodyset_rbIsFixed(this.__wbg_ptr,t)!==0}rbIsKinematic(t){return h.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr,t)!==0}rbIsDynamic(t){return h.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr,t)!==0}rbLinearDamping(t){return h.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr,t)}rbAngularDamping(t){return h.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr,t)}rbSetLinearDamping(t,e){h.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr,t,e)}rbSetAngularDamping(t,e){h.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr,t,e)}rbSetEnabled(t,e){h.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr,t,e)}rbIsEnabled(t){return h.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr,t)!==0}rbGravityScale(t){return h.rawrigidbodyset_rbGravityScale(this.__wbg_ptr,t)}rbSetGravityScale(t,e,n){h.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr,t,e,n)}rbResetForces(t,e){h.rawrigidbodyset_rbResetForces(this.__wbg_ptr,t,e)}rbResetTorques(t,e){h.rawrigidbodyset_rbResetTorques(this.__wbg_ptr,t,e)}rbAddForce(t,e,n){C(e,U),h.rawrigidbodyset_rbAddForce(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbApplyImpulse(t,e,n){C(e,U),h.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAddTorque(t,e,n){C(e,U),h.rawrigidbodyset_rbAddTorque(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbApplyTorqueImpulse(t,e,n){C(e,U),h.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAddForceAtPoint(t,e,n,r){C(e,U),C(n,U),h.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbApplyImpulseAtPoint(t,e,n,r){C(e,U),C(n,U),h.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbAdditionalSolverIterations(t){return h.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr,t)>>>0}rbSetAdditionalSolverIterations(t,e){h.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr,t,e)}rbUserData(t){return h.rawrigidbodyset_rbUserData(this.__wbg_ptr,t)>>>0}rbSetUserData(t,e){h.rawrigidbodyset_rbSetUserData(this.__wbg_ptr,t,e)}rbUserForce(t){const e=h.rawrigidbodyset_rbUserForce(this.__wbg_ptr,t);return U.__wrap(e)}rbUserTorque(t){const e=h.rawrigidbodyset_rbUserTorque(this.__wbg_ptr,t);return U.__wrap(e)}constructor(){const t=h.rawrigidbodyset_new();return this.__wbg_ptr=t>>>0,Sa.register(this,this.__wbg_ptr,this),this}createRigidBody(t,e,n,r,s,a,o,c,l,u,f,d,m,w,y,g,p,x,T,E,P,R,I,v,M,V){return C(e,U),C(n,kt),C(o,U),C(c,U),C(l,U),C(u,U),C(f,kt),h.rawrigidbodyset_createRigidBody(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s,a,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,u.__wbg_ptr,f.__wbg_ptr,d,m,w,y,g,p,x,T,E,P,R,I,v,M,V)}remove(t,e,n,r,s){C(e,$n),C(n,ve),C(r,Jn),C(s,Zn),h.rawrigidbodyset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}len(){return h.rawrigidbodyset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawrigidbodyset_contains(this.__wbg_ptr,t)!==0}forEachRigidBodyHandle(t){try{h.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr,we(t))}finally{Jt[he++]=void 0}}propagateModifiedBodyPositionsToColliders(t){C(t,ve),h.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr,t.__wbg_ptr)}}const Ma=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrotation_free(i>>>0,1));class kt{static __wrap(t){t=t>>>0;const e=Object.create(kt.prototype);return e.__wbg_ptr=t,Ma.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ma.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrotation_free(t,0)}constructor(t,e,n,r){const s=h.rawrotation_new(t,e,n,r);return this.__wbg_ptr=s>>>0,Ma.register(this,this.__wbg_ptr,this),this}static identity(){const t=h.rawrotation_identity();return kt.__wrap(t)}get x(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}get y(){return h.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}get z(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}get w(){return h.rawrotation_w(this.__wbg_ptr)}}const Hl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawsdpmatrix3_free(i>>>0,1));class zs{static __wrap(t){t=t>>>0;const e=Object.create(zs.prototype);return e.__wbg_ptr=t,Hl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Hl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawsdpmatrix3_free(t,0)}elements(){const t=h.rawsdpmatrix3_elements(this.__wbg_ptr);return Fr(t)}}const Gl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawserializationpipeline_free(i>>>0,1));class of{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Gl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawserializationpipeline_free(t,0)}constructor(){const t=h.rawccdsolver_new();return this.__wbg_ptr=t>>>0,Gl.register(this,this.__wbg_ptr,this),this}serializeAll(t,e,n,r,s,a,o,c,l){C(t,U),C(e,Ui),C(n,$n),C(r,Kn),C(s,Pe),C(a,ge),C(o,ve),C(c,Jn),C(l,Zn);const u=h.rawserializationpipeline_serializeAll(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr);return Fr(u)}deserializeAll(t){const e=h.rawserializationpipeline_deserializeAll(this.__wbg_ptr,ue(t));return e===0?void 0:xc.__wrap(e)}}const Vl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshape_free(i>>>0,1));class Pt{static __wrap(t){t=t>>>0;const e=Object.create(Pt.prototype);return e.__wbg_ptr=t,Vl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Vl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshape_free(t,0)}static cuboid(t,e,n){const r=h.rawshape_cuboid(t,e,n);return Pt.__wrap(r)}static roundCuboid(t,e,n,r){const s=h.rawshape_roundCuboid(t,e,n,r);return Pt.__wrap(s)}static ball(t){const e=h.rawshape_ball(t);return Pt.__wrap(e)}static halfspace(t){C(t,U);const e=h.rawshape_halfspace(t.__wbg_ptr);return Pt.__wrap(e)}static capsule(t,e){const n=h.rawshape_capsule(t,e);return Pt.__wrap(n)}static cylinder(t,e){const n=h.rawshape_cylinder(t,e);return Pt.__wrap(n)}static roundCylinder(t,e,n){const r=h.rawshape_roundCylinder(t,e,n);return Pt.__wrap(r)}static cone(t,e){const n=h.rawshape_cone(t,e);return Pt.__wrap(n)}static roundCone(t,e,n){const r=h.rawshape_roundCone(t,e,n);return Pt.__wrap(r)}static voxels(t,e){C(t,U);const n=yr(e,h.__wbindgen_export_2),r=qe,s=h.rawshape_voxels(t.__wbg_ptr,n,r);return Pt.__wrap(s)}static voxelsFromPoints(t,e){C(t,U);const n=ri(e,h.__wbindgen_export_2),r=qe,s=h.rawshape_voxelsFromPoints(t.__wbg_ptr,n,r);return Pt.__wrap(s)}static polyline(t,e){const n=ri(t,h.__wbindgen_export_2),r=qe,s=yr(e,h.__wbindgen_export_2),a=qe,o=h.rawshape_polyline(n,r,s,a);return Pt.__wrap(o)}static trimesh(t,e,n){const r=ri(t,h.__wbindgen_export_2),s=qe,a=yr(e,h.__wbindgen_export_2),o=qe,c=h.rawshape_trimesh(r,s,a,o,n);return c===0?void 0:Pt.__wrap(c)}static heightfield(t,e,n,r,s){const a=ri(n,h.__wbindgen_export_2),o=qe;C(r,U);const c=h.rawshape_heightfield(t,e,a,o,r.__wbg_ptr,s);return Pt.__wrap(c)}static segment(t,e){C(t,U),C(e,U);const n=h.rawshape_segment(t.__wbg_ptr,e.__wbg_ptr);return Pt.__wrap(n)}static triangle(t,e,n){C(t,U),C(e,U),C(n,U);const r=h.rawshape_triangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return Pt.__wrap(r)}static roundTriangle(t,e,n,r){C(t,U),C(e,U),C(n,U);const s=h.rawshape_roundTriangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return Pt.__wrap(s)}static convexHull(t){const e=ri(t,h.__wbindgen_export_2),n=qe,r=h.rawshape_convexHull(e,n);return r===0?void 0:Pt.__wrap(r)}static roundConvexHull(t,e){const n=ri(t,h.__wbindgen_export_2),r=qe,s=h.rawshape_roundConvexHull(n,r,e);return s===0?void 0:Pt.__wrap(s)}static convexMesh(t,e){const n=ri(t,h.__wbindgen_export_2),r=qe,s=yr(e,h.__wbindgen_export_2),a=qe,o=h.rawshape_convexMesh(n,r,s,a);return o===0?void 0:Pt.__wrap(o)}static roundConvexMesh(t,e,n){const r=ri(t,h.__wbindgen_export_2),s=qe,a=yr(e,h.__wbindgen_export_2),o=qe,c=h.rawshape_roundConvexMesh(r,s,a,o,n);return c===0?void 0:Pt.__wrap(c)}castShape(t,e,n,r,s,a,o,c,l,u){C(t,U),C(e,kt),C(n,U),C(r,Pt),C(s,U),C(a,kt),C(o,U);const f=h.rawshape_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c,l,u);return f===0?void 0:ia.__wrap(f)}intersectsShape(t,e,n,r,s){return C(t,U),C(e,kt),C(n,Pt),C(r,U),C(s,kt),h.rawshape_intersectsShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)!==0}contactShape(t,e,n,r,s,a){C(t,U),C(e,kt),C(n,Pt),C(r,U),C(s,kt);const o=h.rawshape_contactShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a);return o===0?void 0:Ur.__wrap(o)}containsPoint(t,e,n){return C(t,U),C(e,kt),C(n,U),h.rawshape_containsPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr)!==0}projectPoint(t,e,n,r){C(t,U),C(e,kt),C(n,U);const s=h.rawshape_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return ta.__wrap(s)}intersectsRay(t,e,n,r,s){return C(t,U),C(e,kt),C(n,U),C(r,U),h.rawshape_intersectsRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s)!==0}castRay(t,e,n,r,s,a){return C(t,U),C(e,kt),C(n,U),C(r,U),h.rawshape_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a)}castRayAndGetNormal(t,e,n,r,s,a){C(t,U),C(e,kt),C(n,U),C(r,U);const o=h.rawshape_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a);return o===0?void 0:na.__wrap(o)}}const kl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshapecasthit_free(i>>>0,1));class ia{static __wrap(t){t=t>>>0;const e=Object.create(ia.prototype);return e.__wbg_ptr=t,kl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,kl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshapecasthit_free(t,0)}time_of_impact(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}witness1(){const t=h.rawshapecasthit_witness1(this.__wbg_ptr);return U.__wrap(t)}witness2(){const t=h.rawcontactforceevent_total_force(this.__wbg_ptr);return U.__wrap(t)}normal1(){const t=h.rawshapecasthit_normal1(this.__wbg_ptr);return U.__wrap(t)}normal2(){const t=h.rawshapecasthit_normal2(this.__wbg_ptr);return U.__wrap(t)}}const Wl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshapecontact_free(i>>>0,1));class Ur{static __wrap(t){t=t>>>0;const e=Object.create(Ur.prototype);return e.__wbg_ptr=t,Wl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Wl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshapecontact_free(t,0)}distance(){return h.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}point1(){const t=h.rawpointprojection_point(this.__wbg_ptr);return U.__wrap(t)}point2(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return U.__wrap(t)}normal1(){const t=h.rawcollidershapecasthit_witness2(this.__wbg_ptr);return U.__wrap(t)}normal2(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return U.__wrap(t)}}const Ea=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawvector_free(i>>>0,1));class U{static __wrap(t){t=t>>>0;const e=Object.create(U.prototype);return e.__wbg_ptr=t,Ea.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ea.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawvector_free(t,0)}static zero(){const t=h.rawvector_zero();return U.__wrap(t)}constructor(t,e,n){const r=h.rawvector_new(t,e,n);return this.__wbg_ptr=r>>>0,Ea.register(this,this.__wbg_ptr,this),this}get x(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}set x(t){h.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}get y(){return h.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}set y(t){h.rawvector_set_y(this.__wbg_ptr,t)}get z(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}set z(t){h.rawvector_set_z(this.__wbg_ptr,t)}xyz(){const t=h.rawvector_xyz(this.__wbg_ptr);return U.__wrap(t)}yxz(){const t=h.rawvector_yxz(this.__wbg_ptr);return U.__wrap(t)}zxy(){const t=h.rawvector_zxy(this.__wbg_ptr);return U.__wrap(t)}xzy(){const t=h.rawvector_xzy(this.__wbg_ptr);return U.__wrap(t)}yzx(){const t=h.rawvector_yzx(this.__wbg_ptr);return U.__wrap(t)}zyx(){const t=h.rawvector_zyx(this.__wbg_ptr);return U.__wrap(t)}}function cf(i,t,e,n){const r=Kt(i).bind(Kt(t),Kt(e),Kt(n));return ue(r)}function lf(i){const t=Kt(i).buffer;return ue(t)}function hf(){return $s(function(i,t){const e=Kt(i).call(Kt(t));return ue(e)},arguments)}function df(){return $s(function(i,t,e){const n=Kt(i).call(Kt(t),Kt(e));return ue(n)},arguments)}function uf(){return $s(function(i,t,e,n){const r=Kt(i).call(Kt(t),Kt(e),Kt(n));return ue(r)},arguments)}function ff(){return $s(function(i,t,e,n,r){const s=Kt(i).call(Kt(t),Kt(e),Kt(n),Kt(r));return ue(s)},arguments)}function _f(i){return Kt(i).length}function pf(i){return Kt(i).length}function mf(i){const t=new Uint8Array(Kt(i));return ue(t)}function gf(i,t){const e=new Function(rd(i,t));return ue(e)}function wf(i,t,e){const n=new Uint8Array(Kt(i),t>>>0,e>>>0);return ue(n)}function bf(i,t,e){const n=new Float32Array(Kt(i),t>>>0,e>>>0);return ue(n)}function vf(i){const t=new Float32Array(i>>>0);return ue(t)}function xf(i){return Kt(i).now()}function yf(i){const t=Kt(i).performance;return ue(t)}function Sf(i){const t=wc.__wrap(i);return ue(t)}function Mf(i){const t=ea.__wrap(i);return ue(t)}function Ef(i,t,e){Kt(i).set(Kt(t),e>>>0)}function Tf(i,t,e){Kt(i).set(Kt(t),e>>>0)}function Af(){const i=typeof global>"u"?null:global;return Dt(i)?0:ue(i)}function Rf(){const i=typeof globalThis>"u"?null:globalThis;return Dt(i)?0:ue(i)}function Cf(){const i=typeof self>"u"?null:self;return Dt(i)?0:ue(i)}function Pf(){const i=typeof window>"u"?null:window;return Dt(i)?0:ue(i)}function If(i){const t=Kt(i);return typeof t=="boolean"?t?1:0:2}function Df(i){return typeof Kt(i)=="function"}function Lf(i){return Kt(i)===void 0}function Ff(){const i=h.memory;return ue(i)}function Uf(i,t){const e=Kt(t),n=typeof e=="number"?e:void 0;ze().setFloat64(i+8,Dt(n)?0:n,!0),ze().setInt32(i+0,!Dt(n),!0)}function Nf(i){return ue(i)}function Of(i){const t=Kt(i);return ue(t)}function Bf(i){Fr(i)}function zf(i,t){throw new Error(rd(i,t))}URL=globalThis.URL;const _=await Xu({"./rapier_wasm3d_bg.js":{__wbindgen_number_new:Nf,__wbindgen_boolean_get:If,__wbindgen_object_drop_ref:Bf,__wbindgen_number_get:Uf,__wbindgen_is_function:Df,__wbg_rawraycolliderintersection_new:Mf,__wbg_rawcontactforceevent_new:Sf,__wbg_performance_7a3ffd0b17f663ad:yf,__wbindgen_is_undefined:Lf,__wbg_now_2c95c9de01293173:xf,__wbindgen_object_clone_ref:Of,__wbg_newnoargs_105ed471475aaf50:gf,__wbg_call_672a4d21634d4a24:hf,__wbg_call_7cccdd69e0791ae2:df,__wbg_call_833bed5770ea2041:uf,__wbg_call_b8adc8b1d0a0d8eb:ff,__wbg_bind_c8359b1cba058168:cf,__wbg_buffer_609cc3eee51ed158:lf,__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0:Rf,__wbg_static_accessor_SELF_37c5d418e4bf5819:Cf,__wbg_static_accessor_WINDOW_5de37043a91a9c40:Pf,__wbg_static_accessor_GLOBAL_88a902d13a557d07:Af,__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a:wf,__wbg_new_a12002a7f91c75be:mf,__wbg_set_65595bdd868b3009:Tf,__wbg_length_a446193dc22c12f8:pf,__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354:bf,__wbg_set_10bad9bee0e9c58b:Ef,__wbg_length_3b4f022188ae8db6:_f,__wbg_newwithlength_5a5efe313cfd59f1:vf,__wbindgen_throw:zf,__wbindgen_memory:Ff}},ju),Hf=_.memory,Gf=_.version,Vf=_.__wbg_rawkinematiccharactercontroller_free,kf=_.rawkinematiccharactercontroller_new,Wf=_.rawkinematiccharactercontroller_setUp,jf=_.rawkinematiccharactercontroller_normalNudgeFactor,Xf=_.rawkinematiccharactercontroller_setNormalNudgeFactor,qf=_.rawkinematiccharactercontroller_offset,Yf=_.rawkinematiccharactercontroller_setOffset,Kf=_.rawkinematiccharactercontroller_slideEnabled,Jf=_.rawkinematiccharactercontroller_setSlideEnabled,$f=_.rawkinematiccharactercontroller_autostepMaxHeight,Zf=_.rawkinematiccharactercontroller_autostepMinWidth,Qf=_.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,t_=_.rawkinematiccharactercontroller_autostepEnabled,e_=_.rawkinematiccharactercontroller_enableAutostep,n_=_.rawkinematiccharactercontroller_disableAutostep,i_=_.rawkinematiccharactercontroller_maxSlopeClimbAngle,r_=_.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,s_=_.rawkinematiccharactercontroller_minSlopeSlideAngle,a_=_.rawkinematiccharactercontroller_setMinSlopeSlideAngle,o_=_.rawkinematiccharactercontroller_snapToGroundDistance,c_=_.rawkinematiccharactercontroller_enableSnapToGround,l_=_.rawkinematiccharactercontroller_disableSnapToGround,h_=_.rawkinematiccharactercontroller_snapToGroundEnabled,d_=_.rawkinematiccharactercontroller_computeColliderMovement,u_=_.rawkinematiccharactercontroller_computedMovement,f_=_.rawkinematiccharactercontroller_computedGrounded,__=_.rawkinematiccharactercontroller_numComputedCollisions,p_=_.rawkinematiccharactercontroller_computedCollision,m_=_.__wbg_rawcharactercollision_free,g_=_.rawcharactercollision_new,w_=_.rawcharactercollision_handle,b_=_.rawcharactercollision_translationDeltaApplied,v_=_.rawcharactercollision_translationDeltaRemaining,x_=_.rawcharactercollision_toi,y_=_.rawcharactercollision_worldWitness1,S_=_.rawcharactercollision_worldWitness2,M_=_.rawcharactercollision_worldNormal1,E_=_.rawcharactercollision_worldNormal2,T_=_.__wbg_rawpidcontroller_free,A_=_.rawpidcontroller_new,R_=_.rawpidcontroller_set_kp,C_=_.rawpidcontroller_set_ki,P_=_.rawpidcontroller_set_kd,I_=_.rawpidcontroller_set_axes_mask,D_=_.rawpidcontroller_reset_integrals,L_=_.rawpidcontroller_apply_linear_correction,F_=_.rawpidcontroller_apply_angular_correction,U_=_.rawpidcontroller_linear_correction,N_=_.rawpidcontroller_angular_correction,O_=_.__wbg_rawdynamicraycastvehiclecontroller_free,B_=_.rawdynamicraycastvehiclecontroller_new,z_=_.rawdynamicraycastvehiclecontroller_current_vehicle_speed,H_=_.rawdynamicraycastvehiclecontroller_chassis,G_=_.rawdynamicraycastvehiclecontroller_index_up_axis,V_=_.rawdynamicraycastvehiclecontroller_set_index_up_axis,k_=_.rawdynamicraycastvehiclecontroller_index_forward_axis,W_=_.rawdynamicraycastvehiclecontroller_set_index_forward_axis,j_=_.rawdynamicraycastvehiclecontroller_add_wheel,X_=_.rawdynamicraycastvehiclecontroller_num_wheels,q_=_.rawdynamicraycastvehiclecontroller_update_vehicle,Y_=_.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs,K_=_.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs,J_=_.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length,$_=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length,Z_=_.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel,Q_=_.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel,tp=_.rawdynamicraycastvehiclecontroller_wheel_radius,ep=_.rawdynamicraycastvehiclecontroller_set_wheel_radius,np=_.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness,ip=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness,rp=_.rawdynamicraycastvehiclecontroller_wheel_suspension_compression,sp=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression,ap=_.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation,op=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation,cp=_.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force,lp=_.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force,hp=_.rawdynamicraycastvehiclecontroller_wheel_brake,dp=_.rawdynamicraycastvehiclecontroller_set_wheel_brake,up=_.rawdynamicraycastvehiclecontroller_wheel_steering,fp=_.rawdynamicraycastvehiclecontroller_set_wheel_steering,_p=_.rawdynamicraycastvehiclecontroller_wheel_engine_force,pp=_.rawdynamicraycastvehiclecontroller_set_wheel_engine_force,mp=_.rawdynamicraycastvehiclecontroller_wheel_direction_cs,gp=_.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs,wp=_.rawdynamicraycastvehiclecontroller_wheel_axle_cs,bp=_.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs,vp=_.rawdynamicraycastvehiclecontroller_wheel_friction_slip,xp=_.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip,yp=_.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness,Sp=_.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness,Mp=_.rawdynamicraycastvehiclecontroller_wheel_rotation,Ep=_.rawdynamicraycastvehiclecontroller_wheel_forward_impulse,Tp=_.rawdynamicraycastvehiclecontroller_wheel_side_impulse,Ap=_.rawdynamicraycastvehiclecontroller_wheel_suspension_force,Rp=_.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws,Cp=_.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws,Pp=_.rawdynamicraycastvehiclecontroller_wheel_suspension_length,Ip=_.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws,Dp=_.rawdynamicraycastvehiclecontroller_wheel_is_in_contact,Lp=_.rawdynamicraycastvehiclecontroller_wheel_ground_object,Fp=_.__wbg_rawccdsolver_free,Up=_.rawimpulsejointset_jointType,Np=_.rawimpulsejointset_jointBodyHandle1,Op=_.rawimpulsejointset_jointBodyHandle2,Bp=_.rawimpulsejointset_jointFrameX1,zp=_.rawimpulsejointset_jointFrameX2,Hp=_.rawimpulsejointset_jointAnchor1,Gp=_.rawimpulsejointset_jointAnchor2,Vp=_.rawimpulsejointset_jointSetAnchor1,kp=_.rawimpulsejointset_jointSetAnchor2,Wp=_.rawimpulsejointset_jointContactsEnabled,jp=_.rawimpulsejointset_jointSetContactsEnabled,Xp=_.rawimpulsejointset_jointLimitsEnabled,qp=_.rawimpulsejointset_jointLimitsMin,Yp=_.rawimpulsejointset_jointLimitsMax,Kp=_.rawimpulsejointset_jointSetLimits,Jp=_.rawimpulsejointset_jointConfigureMotorModel,$p=_.rawimpulsejointset_jointConfigureMotorVelocity,Zp=_.rawimpulsejointset_jointConfigureMotorPosition,Qp=_.rawimpulsejointset_jointConfigureMotor,tm=_.__wbg_rawimpulsejointset_free,em=_.rawimpulsejointset_new,nm=_.rawimpulsejointset_createJoint,im=_.rawimpulsejointset_remove,rm=_.rawimpulsejointset_len,sm=_.rawimpulsejointset_contains,am=_.rawimpulsejointset_forEachJointHandle,om=_.rawimpulsejointset_forEachJointAttachedToRigidBody,cm=_.__wbg_rawintegrationparameters_free,lm=_.rawintegrationparameters_new,hm=_.rawintegrationparameters_dt,dm=_.rawintegrationparameters_contact_erp,um=_.rawintegrationparameters_normalizedAllowedLinearError,fm=_.rawintegrationparameters_normalizedPredictionDistance,_m=_.rawintegrationparameters_numSolverIterations,pm=_.rawintegrationparameters_minIslandSize,mm=_.rawintegrationparameters_maxCcdSubsteps,gm=_.rawintegrationparameters_set_dt,wm=_.rawintegrationparameters_set_contact_natural_frequency,bm=_.rawintegrationparameters_set_normalizedAllowedLinearError,vm=_.rawintegrationparameters_set_normalizedPredictionDistance,xm=_.rawintegrationparameters_set_numSolverIterations,ym=_.rawintegrationparameters_set_minIslandSize,Sm=_.rawintegrationparameters_set_maxCcdSubsteps,Mm=_.rawintegrationparameters_set_lengthUnit,Em=_.__wbg_rawislandmanager_free,Tm=_.rawislandmanager_new,Am=_.rawislandmanager_forEachActiveRigidBodyHandle,Rm=_.__wbg_rawgenericjoint_free,Cm=_.rawgenericjoint_generic,Pm=_.rawgenericjoint_spring,Im=_.rawgenericjoint_rope,Dm=_.rawgenericjoint_spherical,Lm=_.rawgenericjoint_prismatic,Fm=_.rawgenericjoint_fixed,Um=_.rawgenericjoint_revolute,Nm=_.rawmultibodyjointset_jointType,Om=_.rawmultibodyjointset_jointFrameX1,Bm=_.rawmultibodyjointset_jointFrameX2,zm=_.rawmultibodyjointset_jointAnchor1,Hm=_.rawmultibodyjointset_jointAnchor2,Gm=_.rawmultibodyjointset_jointContactsEnabled,Vm=_.rawmultibodyjointset_jointSetContactsEnabled,km=_.rawmultibodyjointset_jointLimitsEnabled,Wm=_.rawmultibodyjointset_jointLimitsMin,jm=_.rawmultibodyjointset_jointLimitsMax,Xm=_.__wbg_rawmultibodyjointset_free,qm=_.rawmultibodyjointset_new,Ym=_.rawmultibodyjointset_createJoint,Km=_.rawmultibodyjointset_remove,Jm=_.rawmultibodyjointset_contains,$m=_.rawmultibodyjointset_forEachJointHandle,Zm=_.rawmultibodyjointset_forEachJointAttachedToRigidBody,Qm=_.rawrigidbodyset_rbTranslation,tg=_.rawrigidbodyset_rbRotation,eg=_.rawrigidbodyset_rbSleep,ng=_.rawrigidbodyset_rbIsSleeping,ig=_.rawrigidbodyset_rbIsMoving,rg=_.rawrigidbodyset_rbNextTranslation,sg=_.rawrigidbodyset_rbNextRotation,ag=_.rawrigidbodyset_rbSetTranslation,og=_.rawrigidbodyset_rbSetRotation,cg=_.rawrigidbodyset_rbSetLinvel,lg=_.rawrigidbodyset_rbSetAngvel,hg=_.rawrigidbodyset_rbSetNextKinematicTranslation,dg=_.rawrigidbodyset_rbSetNextKinematicRotation,ug=_.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,fg=_.rawrigidbodyset_rbSetAdditionalMass,_g=_.rawrigidbodyset_rbSetAdditionalMassProperties,pg=_.rawrigidbodyset_rbLinvel,mg=_.rawrigidbodyset_rbAngvel,gg=_.rawrigidbodyset_rbVelocityAtPoint,wg=_.rawrigidbodyset_rbLockTranslations,bg=_.rawrigidbodyset_rbSetEnabledTranslations,vg=_.rawrigidbodyset_rbLockRotations,xg=_.rawrigidbodyset_rbSetEnabledRotations,yg=_.rawrigidbodyset_rbDominanceGroup,Sg=_.rawrigidbodyset_rbSetDominanceGroup,Mg=_.rawrigidbodyset_rbEnableCcd,Eg=_.rawrigidbodyset_rbSetSoftCcdPrediction,Tg=_.rawrigidbodyset_rbMass,Ag=_.rawrigidbodyset_rbInvMass,Rg=_.rawrigidbodyset_rbEffectiveInvMass,Cg=_.rawrigidbodyset_rbLocalCom,Pg=_.rawrigidbodyset_rbWorldCom,Ig=_.rawrigidbodyset_rbInvPrincipalInertia,Dg=_.rawrigidbodyset_rbPrincipalInertiaLocalFrame,Lg=_.rawrigidbodyset_rbPrincipalInertia,Fg=_.rawrigidbodyset_rbEffectiveWorldInvInertia,Ug=_.rawrigidbodyset_rbEffectiveAngularInertia,Ng=_.rawrigidbodyset_rbWakeUp,Og=_.rawrigidbodyset_rbIsCcdEnabled,Bg=_.rawrigidbodyset_rbSoftCcdPrediction,zg=_.rawrigidbodyset_rbNumColliders,Hg=_.rawrigidbodyset_rbCollider,Gg=_.rawrigidbodyset_rbBodyType,Vg=_.rawrigidbodyset_rbSetBodyType,kg=_.rawrigidbodyset_rbIsFixed,Wg=_.rawrigidbodyset_rbIsKinematic,jg=_.rawrigidbodyset_rbIsDynamic,Xg=_.rawrigidbodyset_rbLinearDamping,qg=_.rawrigidbodyset_rbAngularDamping,Yg=_.rawrigidbodyset_rbSetLinearDamping,Kg=_.rawrigidbodyset_rbSetAngularDamping,Jg=_.rawrigidbodyset_rbSetEnabled,$g=_.rawrigidbodyset_rbIsEnabled,Zg=_.rawrigidbodyset_rbGravityScale,Qg=_.rawrigidbodyset_rbSetGravityScale,tw=_.rawrigidbodyset_rbResetForces,ew=_.rawrigidbodyset_rbResetTorques,nw=_.rawrigidbodyset_rbAddForce,iw=_.rawrigidbodyset_rbApplyImpulse,rw=_.rawrigidbodyset_rbAddTorque,sw=_.rawrigidbodyset_rbApplyTorqueImpulse,aw=_.rawrigidbodyset_rbAddForceAtPoint,ow=_.rawrigidbodyset_rbApplyImpulseAtPoint,cw=_.rawrigidbodyset_rbAdditionalSolverIterations,lw=_.rawrigidbodyset_rbSetAdditionalSolverIterations,hw=_.rawrigidbodyset_rbUserData,dw=_.rawrigidbodyset_rbSetUserData,uw=_.rawrigidbodyset_rbUserForce,fw=_.rawrigidbodyset_rbUserTorque,_w=_.__wbg_rawrigidbodyset_free,pw=_.rawrigidbodyset_new,mw=_.rawrigidbodyset_createRigidBody,gw=_.rawrigidbodyset_remove,ww=_.rawrigidbodyset_len,bw=_.rawrigidbodyset_contains,vw=_.rawrigidbodyset_forEachRigidBodyHandle,xw=_.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,yw=_.__wbg_rawbroadphase_free,Sw=_.rawbroadphase_new,Mw=_.rawbroadphase_castRay,Ew=_.rawbroadphase_castRayAndGetNormal,Tw=_.rawbroadphase_intersectionsWithRay,Aw=_.rawbroadphase_intersectionWithShape,Rw=_.rawbroadphase_projectPoint,Cw=_.rawbroadphase_projectPointAndGetFeature,Pw=_.rawbroadphase_intersectionsWithPoint,Iw=_.rawbroadphase_castShape,Dw=_.rawbroadphase_intersectionsWithShape,Lw=_.rawbroadphase_collidersWithAabbIntersectingAabb,Fw=_.rawcolliderset_coTranslation,Uw=_.rawcolliderset_coRotation,Nw=_.rawcolliderset_coTranslationWrtParent,Ow=_.rawcolliderset_coRotationWrtParent,Bw=_.rawcolliderset_coSetTranslation,zw=_.rawcolliderset_coSetTranslationWrtParent,Hw=_.rawcolliderset_coSetRotation,Gw=_.rawcolliderset_coSetRotationWrtParent,Vw=_.rawcolliderset_coIsSensor,kw=_.rawcolliderset_coShapeType,Ww=_.rawcolliderset_coHalfspaceNormal,jw=_.rawcolliderset_coHalfExtents,Xw=_.rawcolliderset_coSetHalfExtents,qw=_.rawcolliderset_coRadius,Yw=_.rawcolliderset_coSetRadius,Kw=_.rawcolliderset_coHalfHeight,Jw=_.rawcolliderset_coSetHalfHeight,$w=_.rawcolliderset_coRoundRadius,Zw=_.rawcolliderset_coSetRoundRadius,Qw=_.rawcolliderset_coVoxelData,t0=_.rawcolliderset_coVoxelSize,e0=_.rawcolliderset_coSetVoxel,n0=_.rawcolliderset_coPropagateVoxelChange,i0=_.rawcolliderset_coCombineVoxelStates,r0=_.rawcolliderset_coVertices,s0=_.rawcolliderset_coIndices,a0=_.rawcolliderset_coTriMeshFlags,o0=_.rawcolliderset_coHeightFieldFlags,c0=_.rawcolliderset_coHeightfieldHeights,l0=_.rawcolliderset_coHeightfieldScale,h0=_.rawcolliderset_coHeightfieldNRows,d0=_.rawcolliderset_coHeightfieldNCols,u0=_.rawcolliderset_coParent,f0=_.rawcolliderset_coSetEnabled,_0=_.rawcolliderset_coIsEnabled,p0=_.rawcolliderset_coSetContactSkin,m0=_.rawcolliderset_coContactSkin,g0=_.rawcolliderset_coFriction,w0=_.rawcolliderset_coRestitution,b0=_.rawcolliderset_coDensity,v0=_.rawcolliderset_coMass,x0=_.rawcolliderset_coVolume,y0=_.rawcolliderset_coCollisionGroups,S0=_.rawcolliderset_coSolverGroups,M0=_.rawcolliderset_coActiveHooks,E0=_.rawcolliderset_coActiveCollisionTypes,T0=_.rawcolliderset_coActiveEvents,A0=_.rawcolliderset_coContactForceEventThreshold,R0=_.rawcolliderset_coContainsPoint,C0=_.rawcolliderset_coCastShape,P0=_.rawcolliderset_coCastCollider,I0=_.rawcolliderset_coIntersectsShape,D0=_.rawcolliderset_coContactShape,L0=_.rawcolliderset_coContactCollider,F0=_.rawcolliderset_coProjectPoint,U0=_.rawcolliderset_coIntersectsRay,N0=_.rawcolliderset_coCastRay,O0=_.rawcolliderset_coCastRayAndGetNormal,B0=_.rawcolliderset_coSetSensor,z0=_.rawcolliderset_coSetRestitution,H0=_.rawcolliderset_coSetFriction,G0=_.rawcolliderset_coFrictionCombineRule,V0=_.rawcolliderset_coSetFrictionCombineRule,k0=_.rawcolliderset_coRestitutionCombineRule,W0=_.rawcolliderset_coSetRestitutionCombineRule,j0=_.rawcolliderset_coSetCollisionGroups,X0=_.rawcolliderset_coSetSolverGroups,q0=_.rawcolliderset_coSetActiveHooks,Y0=_.rawcolliderset_coSetActiveEvents,K0=_.rawcolliderset_coSetActiveCollisionTypes,J0=_.rawcolliderset_coSetShape,$0=_.rawcolliderset_coSetContactForceEventThreshold,Z0=_.rawcolliderset_coSetDensity,Q0=_.rawcolliderset_coSetMass,tb=_.rawcolliderset_coSetMassProperties,eb=_.__wbg_rawcolliderset_free,nb=_.rawcolliderset_new,ib=_.rawcolliderset_len,rb=_.rawcolliderset_contains,sb=_.rawcolliderset_createCollider,ab=_.rawcolliderset_remove,ob=_.rawcolliderset_forEachColliderHandle,cb=_.__wbg_rawshapecontact_free,lb=_.__wbg_rawnarrowphase_free,hb=_.rawnarrowphase_new,db=_.rawnarrowphase_contact_pairs_with,ub=_.rawnarrowphase_contact_pair,fb=_.rawnarrowphase_intersection_pairs_with,_b=_.rawnarrowphase_intersection_pair,pb=_.__wbg_rawcontactmanifold_free,mb=_.rawcontactpair_collider1,gb=_.rawcontactpair_collider2,wb=_.rawcontactpair_numContactManifolds,bb=_.rawcontactpair_contactManifold,vb=_.rawcontactmanifold_normal,xb=_.rawcontactmanifold_local_n1,yb=_.rawcontactmanifold_local_n2,Sb=_.rawcontactmanifold_subshape1,Mb=_.rawcontactmanifold_subshape2,Eb=_.rawcontactmanifold_num_contacts,Tb=_.rawcontactmanifold_contact_local_p1,Ab=_.rawcontactmanifold_contact_local_p2,Rb=_.rawcontactmanifold_contact_dist,Cb=_.rawcontactmanifold_contact_fid1,Pb=_.rawcontactmanifold_contact_fid2,Ib=_.rawcontactmanifold_contact_impulse,Db=_.rawcontactmanifold_contact_tangent_impulse_x,Lb=_.rawcontactmanifold_contact_tangent_impulse_y,Fb=_.rawcontactmanifold_num_solver_contacts,Ub=_.rawcontactmanifold_solver_contact_point,Nb=_.rawcontactmanifold_solver_contact_dist,Ob=_.rawcontactmanifold_solver_contact_friction,Bb=_.rawcontactmanifold_solver_contact_restitution,zb=_.rawcontactmanifold_solver_contact_tangent_velocity,Hb=_.__wbg_rawpointprojection_free,Gb=_.rawpointprojection_point,Vb=_.rawpointprojection_isInside,kb=_.__wbg_rawpointcolliderprojection_free,Wb=_.rawpointcolliderprojection_colliderHandle,jb=_.rawpointcolliderprojection_point,Xb=_.rawpointcolliderprojection_isInside,qb=_.rawpointcolliderprojection_featureType,Yb=_.rawpointcolliderprojection_featureId,Kb=_.__wbg_rawrayintersection_free,Jb=_.__wbg_rawraycolliderhit_free,$b=_.__wbg_rawshape_free,Zb=_.rawshape_cuboid,Qb=_.rawshape_roundCuboid,tv=_.rawshape_ball,ev=_.rawshape_halfspace,nv=_.rawshape_capsule,iv=_.rawshape_cylinder,rv=_.rawshape_roundCylinder,sv=_.rawshape_cone,av=_.rawshape_roundCone,ov=_.rawshape_voxels,cv=_.rawshape_voxelsFromPoints,lv=_.rawshape_polyline,hv=_.rawshape_trimesh,dv=_.rawshape_heightfield,uv=_.rawshape_segment,fv=_.rawshape_triangle,_v=_.rawshape_roundTriangle,pv=_.rawshape_convexHull,mv=_.rawshape_roundConvexHull,gv=_.rawshape_convexMesh,wv=_.rawshape_roundConvexMesh,bv=_.rawshape_castShape,vv=_.rawshape_intersectsShape,xv=_.rawshape_contactShape,yv=_.rawshape_containsPoint,Sv=_.rawshape_projectPoint,Mv=_.rawshape_intersectsRay,Ev=_.rawshape_castRay,Tv=_.rawshape_castRayAndGetNormal,Av=_.__wbg_rawshapecasthit_free,Rv=_.rawshapecasthit_witness1,Cv=_.rawshapecasthit_normal1,Pv=_.rawshapecasthit_normal2,Iv=_.__wbg_rawcollidershapecasthit_free,Dv=_.rawcollidershapecasthit_time_of_impact,Lv=_.rawcollidershapecasthit_witness1,Fv=_.rawcollidershapecasthit_witness2,Uv=_.rawrotation_new,Nv=_.rawrotation_identity,Ov=_.rawrotation_w,Bv=_.rawvector_zero,zv=_.rawvector_new,Hv=_.rawvector_set_y,Gv=_.rawvector_set_z,Vv=_.rawvector_xyz,kv=_.rawvector_yxz,Wv=_.rawvector_zxy,jv=_.rawvector_xzy,Xv=_.rawvector_yzx,qv=_.rawvector_zyx,Yv=_.rawsdpmatrix3_elements,Kv=_.__wbg_rawdebugrenderpipeline_free,Jv=_.rawdebugrenderpipeline_new,$v=_.rawdebugrenderpipeline_vertices,Zv=_.rawdebugrenderpipeline_colors,Qv=_.rawdebugrenderpipeline_render,tx=_.__wbg_raweventqueue_free,ex=_.__wbg_rawcontactforceevent_free,nx=_.rawcontactforceevent_collider2,ix=_.rawcontactforceevent_total_force,rx=_.rawcontactforceevent_total_force_magnitude,sx=_.rawcontactforceevent_max_force_direction,ax=_.rawcontactforceevent_max_force_magnitude,ox=_.raweventqueue_new,cx=_.raweventqueue_drainCollisionEvents,lx=_.raweventqueue_drainContactForceEvents,hx=_.raweventqueue_clear,dx=_.__wbg_rawphysicspipeline_free,ux=_.rawphysicspipeline_new,fx=_.rawphysicspipeline_set_profiler_enabled,_x=_.rawphysicspipeline_is_profiler_enabled,px=_.rawphysicspipeline_timing_step,mx=_.rawphysicspipeline_timing_collision_detection,gx=_.rawphysicspipeline_timing_broad_phase,wx=_.rawphysicspipeline_timing_narrow_phase,bx=_.rawphysicspipeline_timing_solver,vx=_.rawphysicspipeline_timing_velocity_assembly,xx=_.rawphysicspipeline_timing_velocity_resolution,yx=_.rawphysicspipeline_timing_velocity_update,Sx=_.rawphysicspipeline_timing_velocity_writeback,Mx=_.rawphysicspipeline_timing_ccd,Ex=_.rawphysicspipeline_timing_ccd_toi_computation,Tx=_.rawphysicspipeline_timing_ccd_broad_phase,Ax=_.rawphysicspipeline_timing_ccd_narrow_phase,Rx=_.rawphysicspipeline_timing_ccd_solver,Cx=_.rawphysicspipeline_timing_island_construction,Px=_.rawphysicspipeline_timing_user_changes,Ix=_.rawphysicspipeline_step,Dx=_.rawphysicspipeline_stepWithEvents,Lx=_.__wbg_rawdeserializedworld_free,Fx=_.rawdeserializedworld_takeGravity,Ux=_.rawdeserializedworld_takeIntegrationParameters,Nx=_.rawdeserializedworld_takeIslandManager,Ox=_.rawdeserializedworld_takeBroadPhase,Bx=_.rawdeserializedworld_takeNarrowPhase,zx=_.rawdeserializedworld_takeBodies,Hx=_.rawdeserializedworld_takeColliders,Gx=_.rawdeserializedworld_takeImpulseJoints,Vx=_.rawdeserializedworld_takeMultibodyJoints,kx=_.rawserializationpipeline_serializeAll,Wx=_.rawserializationpipeline_deserializeAll,jx=_.rawcolliderset_isHandleValid,Xx=_.rawrayintersection_featureId,qx=_.rawraycolliderintersection_featureId,Yx=_.rawintegrationparameters_set_numInternalPgsIterations,Kx=_.rawvector_set_x,Jx=_.reserve_memory,$x=_.rawkinematiccharactercontroller_up,Zx=_.rawshapecontact_normal2,Qx=_.rawshapecontact_point1,ty=_.rawshapecontact_point2,ey=_.rawrayintersection_normal,ny=_.rawraycolliderintersection_normal,iy=_.rawshapecontact_normal1,ry=_.rawcollidershapecasthit_normal1,sy=_.rawcollidershapecasthit_normal2,ay=_.rawshapecasthit_witness2,oy=_.rawintegrationparameters_numInternalPgsIterations,cy=_.rawshapecontact_distance,ly=_.rawrayintersection_featureType,hy=_.rawraycolliderintersection_colliderHandle,dy=_.rawrayintersection_time_of_impact,uy=_.rawraycolliderintersection_featureType,fy=_.rawraycolliderhit_colliderHandle,_y=_.rawraycolliderintersection_time_of_impact,py=_.rawshapecasthit_time_of_impact,my=_.rawcollidershapecasthit_colliderHandle,gy=_.rawraycolliderhit_timeOfImpact,wy=_.rawrotation_x,by=_.rawrotation_y,vy=_.rawrotation_z,xy=_.rawvector_x,yy=_.rawvector_y,Sy=_.rawvector_z,My=_.rawcontactforceevent_collider1,Ey=_.rawintegrationparameters_lengthUnit,Ty=_.__wbg_rawcontactpair_free,Ay=_.__wbg_rawraycolliderintersection_free,Ry=_.__wbg_rawrotation_free,Cy=_.__wbg_rawvector_free,Py=_.__wbg_rawsdpmatrix3_free,Iy=_.__wbg_rawserializationpipeline_free,Dy=_.rawccdsolver_new,Ly=_.rawserializationpipeline_new,Fy=_.__wbindgen_export_0,Uy=_.__wbindgen_add_to_stack_pointer,Ny=_.__wbindgen_export_1,Oy=_.__wbindgen_export_2,By=Object.freeze(Object.defineProperty({__proto__:null,__wbg_rawbroadphase_free:yw,__wbg_rawccdsolver_free:Fp,__wbg_rawcharactercollision_free:m_,__wbg_rawcolliderset_free:eb,__wbg_rawcollidershapecasthit_free:Iv,__wbg_rawcontactforceevent_free:ex,__wbg_rawcontactmanifold_free:pb,__wbg_rawcontactpair_free:Ty,__wbg_rawdebugrenderpipeline_free:Kv,__wbg_rawdeserializedworld_free:Lx,__wbg_rawdynamicraycastvehiclecontroller_free:O_,__wbg_raweventqueue_free:tx,__wbg_rawgenericjoint_free:Rm,__wbg_rawimpulsejointset_free:tm,__wbg_rawintegrationparameters_free:cm,__wbg_rawislandmanager_free:Em,__wbg_rawkinematiccharactercontroller_free:Vf,__wbg_rawmultibodyjointset_free:Xm,__wbg_rawnarrowphase_free:lb,__wbg_rawphysicspipeline_free:dx,__wbg_rawpidcontroller_free:T_,__wbg_rawpointcolliderprojection_free:kb,__wbg_rawpointprojection_free:Hb,__wbg_rawraycolliderhit_free:Jb,__wbg_rawraycolliderintersection_free:Ay,__wbg_rawrayintersection_free:Kb,__wbg_rawrigidbodyset_free:_w,__wbg_rawrotation_free:Ry,__wbg_rawsdpmatrix3_free:Py,__wbg_rawserializationpipeline_free:Iy,__wbg_rawshape_free:$b,__wbg_rawshapecasthit_free:Av,__wbg_rawshapecontact_free:cb,__wbg_rawvector_free:Cy,__wbindgen_add_to_stack_pointer:Uy,__wbindgen_export_0:Fy,__wbindgen_export_1:Ny,__wbindgen_export_2:Oy,memory:Hf,rawbroadphase_castRay:Mw,rawbroadphase_castRayAndGetNormal:Ew,rawbroadphase_castShape:Iw,rawbroadphase_collidersWithAabbIntersectingAabb:Lw,rawbroadphase_intersectionWithShape:Aw,rawbroadphase_intersectionsWithPoint:Pw,rawbroadphase_intersectionsWithRay:Tw,rawbroadphase_intersectionsWithShape:Dw,rawbroadphase_new:Sw,rawbroadphase_projectPoint:Rw,rawbroadphase_projectPointAndGetFeature:Cw,rawccdsolver_new:Dy,rawcharactercollision_handle:w_,rawcharactercollision_new:g_,rawcharactercollision_toi:x_,rawcharactercollision_translationDeltaApplied:b_,rawcharactercollision_translationDeltaRemaining:v_,rawcharactercollision_worldNormal1:M_,rawcharactercollision_worldNormal2:E_,rawcharactercollision_worldWitness1:y_,rawcharactercollision_worldWitness2:S_,rawcolliderset_coActiveCollisionTypes:E0,rawcolliderset_coActiveEvents:T0,rawcolliderset_coActiveHooks:M0,rawcolliderset_coCastCollider:P0,rawcolliderset_coCastRay:N0,rawcolliderset_coCastRayAndGetNormal:O0,rawcolliderset_coCastShape:C0,rawcolliderset_coCollisionGroups:y0,rawcolliderset_coCombineVoxelStates:i0,rawcolliderset_coContactCollider:L0,rawcolliderset_coContactForceEventThreshold:A0,rawcolliderset_coContactShape:D0,rawcolliderset_coContactSkin:m0,rawcolliderset_coContainsPoint:R0,rawcolliderset_coDensity:b0,rawcolliderset_coFriction:g0,rawcolliderset_coFrictionCombineRule:G0,rawcolliderset_coHalfExtents:jw,rawcolliderset_coHalfHeight:Kw,rawcolliderset_coHalfspaceNormal:Ww,rawcolliderset_coHeightFieldFlags:o0,rawcolliderset_coHeightfieldHeights:c0,rawcolliderset_coHeightfieldNCols:d0,rawcolliderset_coHeightfieldNRows:h0,rawcolliderset_coHeightfieldScale:l0,rawcolliderset_coIndices:s0,rawcolliderset_coIntersectsRay:U0,rawcolliderset_coIntersectsShape:I0,rawcolliderset_coIsEnabled:_0,rawcolliderset_coIsSensor:Vw,rawcolliderset_coMass:v0,rawcolliderset_coParent:u0,rawcolliderset_coProjectPoint:F0,rawcolliderset_coPropagateVoxelChange:n0,rawcolliderset_coRadius:qw,rawcolliderset_coRestitution:w0,rawcolliderset_coRestitutionCombineRule:k0,rawcolliderset_coRotation:Uw,rawcolliderset_coRotationWrtParent:Ow,rawcolliderset_coRoundRadius:$w,rawcolliderset_coSetActiveCollisionTypes:K0,rawcolliderset_coSetActiveEvents:Y0,rawcolliderset_coSetActiveHooks:q0,rawcolliderset_coSetCollisionGroups:j0,rawcolliderset_coSetContactForceEventThreshold:$0,rawcolliderset_coSetContactSkin:p0,rawcolliderset_coSetDensity:Z0,rawcolliderset_coSetEnabled:f0,rawcolliderset_coSetFriction:H0,rawcolliderset_coSetFrictionCombineRule:V0,rawcolliderset_coSetHalfExtents:Xw,rawcolliderset_coSetHalfHeight:Jw,rawcolliderset_coSetMass:Q0,rawcolliderset_coSetMassProperties:tb,rawcolliderset_coSetRadius:Yw,rawcolliderset_coSetRestitution:z0,rawcolliderset_coSetRestitutionCombineRule:W0,rawcolliderset_coSetRotation:Hw,rawcolliderset_coSetRotationWrtParent:Gw,rawcolliderset_coSetRoundRadius:Zw,rawcolliderset_coSetSensor:B0,rawcolliderset_coSetShape:J0,rawcolliderset_coSetSolverGroups:X0,rawcolliderset_coSetTranslation:Bw,rawcolliderset_coSetTranslationWrtParent:zw,rawcolliderset_coSetVoxel:e0,rawcolliderset_coShapeType:kw,rawcolliderset_coSolverGroups:S0,rawcolliderset_coTranslation:Fw,rawcolliderset_coTranslationWrtParent:Nw,rawcolliderset_coTriMeshFlags:a0,rawcolliderset_coVertices:r0,rawcolliderset_coVolume:x0,rawcolliderset_coVoxelData:Qw,rawcolliderset_coVoxelSize:t0,rawcolliderset_contains:rb,rawcolliderset_createCollider:sb,rawcolliderset_forEachColliderHandle:ob,rawcolliderset_isHandleValid:jx,rawcolliderset_len:ib,rawcolliderset_new:nb,rawcolliderset_remove:ab,rawcollidershapecasthit_colliderHandle:my,rawcollidershapecasthit_normal1:ry,rawcollidershapecasthit_normal2:sy,rawcollidershapecasthit_time_of_impact:Dv,rawcollidershapecasthit_witness1:Lv,rawcollidershapecasthit_witness2:Fv,rawcontactforceevent_collider1:My,rawcontactforceevent_collider2:nx,rawcontactforceevent_max_force_direction:sx,rawcontactforceevent_max_force_magnitude:ax,rawcontactforceevent_total_force:ix,rawcontactforceevent_total_force_magnitude:rx,rawcontactmanifold_contact_dist:Rb,rawcontactmanifold_contact_fid1:Cb,rawcontactmanifold_contact_fid2:Pb,rawcontactmanifold_contact_impulse:Ib,rawcontactmanifold_contact_local_p1:Tb,rawcontactmanifold_contact_local_p2:Ab,rawcontactmanifold_contact_tangent_impulse_x:Db,rawcontactmanifold_contact_tangent_impulse_y:Lb,rawcontactmanifold_local_n1:xb,rawcontactmanifold_local_n2:yb,rawcontactmanifold_normal:vb,rawcontactmanifold_num_contacts:Eb,rawcontactmanifold_num_solver_contacts:Fb,rawcontactmanifold_solver_contact_dist:Nb,rawcontactmanifold_solver_contact_friction:Ob,rawcontactmanifold_solver_contact_point:Ub,rawcontactmanifold_solver_contact_restitution:Bb,rawcontactmanifold_solver_contact_tangent_velocity:zb,rawcontactmanifold_subshape1:Sb,rawcontactmanifold_subshape2:Mb,rawcontactpair_collider1:mb,rawcontactpair_collider2:gb,rawcontactpair_contactManifold:bb,rawcontactpair_numContactManifolds:wb,rawdebugrenderpipeline_colors:Zv,rawdebugrenderpipeline_new:Jv,rawdebugrenderpipeline_render:Qv,rawdebugrenderpipeline_vertices:$v,rawdeserializedworld_takeBodies:zx,rawdeserializedworld_takeBroadPhase:Ox,rawdeserializedworld_takeColliders:Hx,rawdeserializedworld_takeGravity:Fx,rawdeserializedworld_takeImpulseJoints:Gx,rawdeserializedworld_takeIntegrationParameters:Ux,rawdeserializedworld_takeIslandManager:Nx,rawdeserializedworld_takeMultibodyJoints:Vx,rawdeserializedworld_takeNarrowPhase:Bx,rawdynamicraycastvehiclecontroller_add_wheel:j_,rawdynamicraycastvehiclecontroller_chassis:H_,rawdynamicraycastvehiclecontroller_current_vehicle_speed:z_,rawdynamicraycastvehiclecontroller_index_forward_axis:k_,rawdynamicraycastvehiclecontroller_index_up_axis:G_,rawdynamicraycastvehiclecontroller_new:B_,rawdynamicraycastvehiclecontroller_num_wheels:X_,rawdynamicraycastvehiclecontroller_set_index_forward_axis:W_,rawdynamicraycastvehiclecontroller_set_index_up_axis:V_,rawdynamicraycastvehiclecontroller_set_wheel_axle_cs:bp,rawdynamicraycastvehiclecontroller_set_wheel_brake:dp,rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs:K_,rawdynamicraycastvehiclecontroller_set_wheel_direction_cs:gp,rawdynamicraycastvehiclecontroller_set_wheel_engine_force:pp,rawdynamicraycastvehiclecontroller_set_wheel_friction_slip:xp,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force:lp,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel:Q_,rawdynamicraycastvehiclecontroller_set_wheel_radius:ep,rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness:Sp,rawdynamicraycastvehiclecontroller_set_wheel_steering:fp,rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression:sp,rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation:op,rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length:$_,rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness:ip,rawdynamicraycastvehiclecontroller_update_vehicle:q_,rawdynamicraycastvehiclecontroller_wheel_axle_cs:wp,rawdynamicraycastvehiclecontroller_wheel_brake:hp,rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs:Y_,rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws:Rp,rawdynamicraycastvehiclecontroller_wheel_contact_point_ws:Cp,rawdynamicraycastvehiclecontroller_wheel_direction_cs:mp,rawdynamicraycastvehiclecontroller_wheel_engine_force:_p,rawdynamicraycastvehiclecontroller_wheel_forward_impulse:Ep,rawdynamicraycastvehiclecontroller_wheel_friction_slip:vp,rawdynamicraycastvehiclecontroller_wheel_ground_object:Lp,rawdynamicraycastvehiclecontroller_wheel_hard_point_ws:Ip,rawdynamicraycastvehiclecontroller_wheel_is_in_contact:Dp,rawdynamicraycastvehiclecontroller_wheel_max_suspension_force:cp,rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel:Z_,rawdynamicraycastvehiclecontroller_wheel_radius:tp,rawdynamicraycastvehiclecontroller_wheel_rotation:Mp,rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness:yp,rawdynamicraycastvehiclecontroller_wheel_side_impulse:Tp,rawdynamicraycastvehiclecontroller_wheel_steering:up,rawdynamicraycastvehiclecontroller_wheel_suspension_compression:rp,rawdynamicraycastvehiclecontroller_wheel_suspension_force:Ap,rawdynamicraycastvehiclecontroller_wheel_suspension_length:Pp,rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation:ap,rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length:J_,rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness:np,raweventqueue_clear:hx,raweventqueue_drainCollisionEvents:cx,raweventqueue_drainContactForceEvents:lx,raweventqueue_new:ox,rawgenericjoint_fixed:Fm,rawgenericjoint_generic:Cm,rawgenericjoint_prismatic:Lm,rawgenericjoint_revolute:Um,rawgenericjoint_rope:Im,rawgenericjoint_spherical:Dm,rawgenericjoint_spring:Pm,rawimpulsejointset_contains:sm,rawimpulsejointset_createJoint:nm,rawimpulsejointset_forEachJointAttachedToRigidBody:om,rawimpulsejointset_forEachJointHandle:am,rawimpulsejointset_jointAnchor1:Hp,rawimpulsejointset_jointAnchor2:Gp,rawimpulsejointset_jointBodyHandle1:Np,rawimpulsejointset_jointBodyHandle2:Op,rawimpulsejointset_jointConfigureMotor:Qp,rawimpulsejointset_jointConfigureMotorModel:Jp,rawimpulsejointset_jointConfigureMotorPosition:Zp,rawimpulsejointset_jointConfigureMotorVelocity:$p,rawimpulsejointset_jointContactsEnabled:Wp,rawimpulsejointset_jointFrameX1:Bp,rawimpulsejointset_jointFrameX2:zp,rawimpulsejointset_jointLimitsEnabled:Xp,rawimpulsejointset_jointLimitsMax:Yp,rawimpulsejointset_jointLimitsMin:qp,rawimpulsejointset_jointSetAnchor1:Vp,rawimpulsejointset_jointSetAnchor2:kp,rawimpulsejointset_jointSetContactsEnabled:jp,rawimpulsejointset_jointSetLimits:Kp,rawimpulsejointset_jointType:Up,rawimpulsejointset_len:rm,rawimpulsejointset_new:em,rawimpulsejointset_remove:im,rawintegrationparameters_contact_erp:dm,rawintegrationparameters_dt:hm,rawintegrationparameters_lengthUnit:Ey,rawintegrationparameters_maxCcdSubsteps:mm,rawintegrationparameters_minIslandSize:pm,rawintegrationparameters_new:lm,rawintegrationparameters_normalizedAllowedLinearError:um,rawintegrationparameters_normalizedPredictionDistance:fm,rawintegrationparameters_numInternalPgsIterations:oy,rawintegrationparameters_numSolverIterations:_m,rawintegrationparameters_set_contact_natural_frequency:wm,rawintegrationparameters_set_dt:gm,rawintegrationparameters_set_lengthUnit:Mm,rawintegrationparameters_set_maxCcdSubsteps:Sm,rawintegrationparameters_set_minIslandSize:ym,rawintegrationparameters_set_normalizedAllowedLinearError:bm,rawintegrationparameters_set_normalizedPredictionDistance:vm,rawintegrationparameters_set_numInternalPgsIterations:Yx,rawintegrationparameters_set_numSolverIterations:xm,rawislandmanager_forEachActiveRigidBodyHandle:Am,rawislandmanager_new:Tm,rawkinematiccharactercontroller_autostepEnabled:t_,rawkinematiccharactercontroller_autostepIncludesDynamicBodies:Qf,rawkinematiccharactercontroller_autostepMaxHeight:$f,rawkinematiccharactercontroller_autostepMinWidth:Zf,rawkinematiccharactercontroller_computeColliderMovement:d_,rawkinematiccharactercontroller_computedCollision:p_,rawkinematiccharactercontroller_computedGrounded:f_,rawkinematiccharactercontroller_computedMovement:u_,rawkinematiccharactercontroller_disableAutostep:n_,rawkinematiccharactercontroller_disableSnapToGround:l_,rawkinematiccharactercontroller_enableAutostep:e_,rawkinematiccharactercontroller_enableSnapToGround:c_,rawkinematiccharactercontroller_maxSlopeClimbAngle:i_,rawkinematiccharactercontroller_minSlopeSlideAngle:s_,rawkinematiccharactercontroller_new:kf,rawkinematiccharactercontroller_normalNudgeFactor:jf,rawkinematiccharactercontroller_numComputedCollisions:__,rawkinematiccharactercontroller_offset:qf,rawkinematiccharactercontroller_setMaxSlopeClimbAngle:r_,rawkinematiccharactercontroller_setMinSlopeSlideAngle:a_,rawkinematiccharactercontroller_setNormalNudgeFactor:Xf,rawkinematiccharactercontroller_setOffset:Yf,rawkinematiccharactercontroller_setSlideEnabled:Jf,rawkinematiccharactercontroller_setUp:Wf,rawkinematiccharactercontroller_slideEnabled:Kf,rawkinematiccharactercontroller_snapToGroundDistance:o_,rawkinematiccharactercontroller_snapToGroundEnabled:h_,rawkinematiccharactercontroller_up:$x,rawmultibodyjointset_contains:Jm,rawmultibodyjointset_createJoint:Ym,rawmultibodyjointset_forEachJointAttachedToRigidBody:Zm,rawmultibodyjointset_forEachJointHandle:$m,rawmultibodyjointset_jointAnchor1:zm,rawmultibodyjointset_jointAnchor2:Hm,rawmultibodyjointset_jointContactsEnabled:Gm,rawmultibodyjointset_jointFrameX1:Om,rawmultibodyjointset_jointFrameX2:Bm,rawmultibodyjointset_jointLimitsEnabled:km,rawmultibodyjointset_jointLimitsMax:jm,rawmultibodyjointset_jointLimitsMin:Wm,rawmultibodyjointset_jointSetContactsEnabled:Vm,rawmultibodyjointset_jointType:Nm,rawmultibodyjointset_new:qm,rawmultibodyjointset_remove:Km,rawnarrowphase_contact_pair:ub,rawnarrowphase_contact_pairs_with:db,rawnarrowphase_intersection_pair:_b,rawnarrowphase_intersection_pairs_with:fb,rawnarrowphase_new:hb,rawphysicspipeline_is_profiler_enabled:_x,rawphysicspipeline_new:ux,rawphysicspipeline_set_profiler_enabled:fx,rawphysicspipeline_step:Ix,rawphysicspipeline_stepWithEvents:Dx,rawphysicspipeline_timing_broad_phase:gx,rawphysicspipeline_timing_ccd:Mx,rawphysicspipeline_timing_ccd_broad_phase:Tx,rawphysicspipeline_timing_ccd_narrow_phase:Ax,rawphysicspipeline_timing_ccd_solver:Rx,rawphysicspipeline_timing_ccd_toi_computation:Ex,rawphysicspipeline_timing_collision_detection:mx,rawphysicspipeline_timing_island_construction:Cx,rawphysicspipeline_timing_narrow_phase:wx,rawphysicspipeline_timing_solver:bx,rawphysicspipeline_timing_step:px,rawphysicspipeline_timing_user_changes:Px,rawphysicspipeline_timing_velocity_assembly:vx,rawphysicspipeline_timing_velocity_resolution:xx,rawphysicspipeline_timing_velocity_update:yx,rawphysicspipeline_timing_velocity_writeback:Sx,rawpidcontroller_angular_correction:N_,rawpidcontroller_apply_angular_correction:F_,rawpidcontroller_apply_linear_correction:L_,rawpidcontroller_linear_correction:U_,rawpidcontroller_new:A_,rawpidcontroller_reset_integrals:D_,rawpidcontroller_set_axes_mask:I_,rawpidcontroller_set_kd:P_,rawpidcontroller_set_ki:C_,rawpidcontroller_set_kp:R_,rawpointcolliderprojection_colliderHandle:Wb,rawpointcolliderprojection_featureId:Yb,rawpointcolliderprojection_featureType:qb,rawpointcolliderprojection_isInside:Xb,rawpointcolliderprojection_point:jb,rawpointprojection_isInside:Vb,rawpointprojection_point:Gb,rawraycolliderhit_colliderHandle:fy,rawraycolliderhit_timeOfImpact:gy,rawraycolliderintersection_colliderHandle:hy,rawraycolliderintersection_featureId:qx,rawraycolliderintersection_featureType:uy,rawraycolliderintersection_normal:ny,rawraycolliderintersection_time_of_impact:_y,rawrayintersection_featureId:Xx,rawrayintersection_featureType:ly,rawrayintersection_normal:ey,rawrayintersection_time_of_impact:dy,rawrigidbodyset_contains:bw,rawrigidbodyset_createRigidBody:mw,rawrigidbodyset_forEachRigidBodyHandle:vw,rawrigidbodyset_len:ww,rawrigidbodyset_new:pw,rawrigidbodyset_propagateModifiedBodyPositionsToColliders:xw,rawrigidbodyset_rbAddForce:nw,rawrigidbodyset_rbAddForceAtPoint:aw,rawrigidbodyset_rbAddTorque:rw,rawrigidbodyset_rbAdditionalSolverIterations:cw,rawrigidbodyset_rbAngularDamping:qg,rawrigidbodyset_rbAngvel:mg,rawrigidbodyset_rbApplyImpulse:iw,rawrigidbodyset_rbApplyImpulseAtPoint:ow,rawrigidbodyset_rbApplyTorqueImpulse:sw,rawrigidbodyset_rbBodyType:Gg,rawrigidbodyset_rbCollider:Hg,rawrigidbodyset_rbDominanceGroup:yg,rawrigidbodyset_rbEffectiveAngularInertia:Ug,rawrigidbodyset_rbEffectiveInvMass:Rg,rawrigidbodyset_rbEffectiveWorldInvInertia:Fg,rawrigidbodyset_rbEnableCcd:Mg,rawrigidbodyset_rbGravityScale:Zg,rawrigidbodyset_rbInvMass:Ag,rawrigidbodyset_rbInvPrincipalInertia:Ig,rawrigidbodyset_rbIsCcdEnabled:Og,rawrigidbodyset_rbIsDynamic:jg,rawrigidbodyset_rbIsEnabled:$g,rawrigidbodyset_rbIsFixed:kg,rawrigidbodyset_rbIsKinematic:Wg,rawrigidbodyset_rbIsMoving:ig,rawrigidbodyset_rbIsSleeping:ng,rawrigidbodyset_rbLinearDamping:Xg,rawrigidbodyset_rbLinvel:pg,rawrigidbodyset_rbLocalCom:Cg,rawrigidbodyset_rbLockRotations:vg,rawrigidbodyset_rbLockTranslations:wg,rawrigidbodyset_rbMass:Tg,rawrigidbodyset_rbNextRotation:sg,rawrigidbodyset_rbNextTranslation:rg,rawrigidbodyset_rbNumColliders:zg,rawrigidbodyset_rbPrincipalInertia:Lg,rawrigidbodyset_rbPrincipalInertiaLocalFrame:Dg,rawrigidbodyset_rbRecomputeMassPropertiesFromColliders:ug,rawrigidbodyset_rbResetForces:tw,rawrigidbodyset_rbResetTorques:ew,rawrigidbodyset_rbRotation:tg,rawrigidbodyset_rbSetAdditionalMass:fg,rawrigidbodyset_rbSetAdditionalMassProperties:_g,rawrigidbodyset_rbSetAdditionalSolverIterations:lw,rawrigidbodyset_rbSetAngularDamping:Kg,rawrigidbodyset_rbSetAngvel:lg,rawrigidbodyset_rbSetBodyType:Vg,rawrigidbodyset_rbSetDominanceGroup:Sg,rawrigidbodyset_rbSetEnabled:Jg,rawrigidbodyset_rbSetEnabledRotations:xg,rawrigidbodyset_rbSetEnabledTranslations:bg,rawrigidbodyset_rbSetGravityScale:Qg,rawrigidbodyset_rbSetLinearDamping:Yg,rawrigidbodyset_rbSetLinvel:cg,rawrigidbodyset_rbSetNextKinematicRotation:dg,rawrigidbodyset_rbSetNextKinematicTranslation:hg,rawrigidbodyset_rbSetRotation:og,rawrigidbodyset_rbSetSoftCcdPrediction:Eg,rawrigidbodyset_rbSetTranslation:ag,rawrigidbodyset_rbSetUserData:dw,rawrigidbodyset_rbSleep:eg,rawrigidbodyset_rbSoftCcdPrediction:Bg,rawrigidbodyset_rbTranslation:Qm,rawrigidbodyset_rbUserData:hw,rawrigidbodyset_rbUserForce:uw,rawrigidbodyset_rbUserTorque:fw,rawrigidbodyset_rbVelocityAtPoint:gg,rawrigidbodyset_rbWakeUp:Ng,rawrigidbodyset_rbWorldCom:Pg,rawrigidbodyset_remove:gw,rawrotation_identity:Nv,rawrotation_new:Uv,rawrotation_w:Ov,rawrotation_x:wy,rawrotation_y:by,rawrotation_z:vy,rawsdpmatrix3_elements:Yv,rawserializationpipeline_deserializeAll:Wx,rawserializationpipeline_new:Ly,rawserializationpipeline_serializeAll:kx,rawshape_ball:tv,rawshape_capsule:nv,rawshape_castRay:Ev,rawshape_castRayAndGetNormal:Tv,rawshape_castShape:bv,rawshape_cone:sv,rawshape_contactShape:xv,rawshape_containsPoint:yv,rawshape_convexHull:pv,rawshape_convexMesh:gv,rawshape_cuboid:Zb,rawshape_cylinder:iv,rawshape_halfspace:ev,rawshape_heightfield:dv,rawshape_intersectsRay:Mv,rawshape_intersectsShape:vv,rawshape_polyline:lv,rawshape_projectPoint:Sv,rawshape_roundCone:av,rawshape_roundConvexHull:mv,rawshape_roundConvexMesh:wv,rawshape_roundCuboid:Qb,rawshape_roundCylinder:rv,rawshape_roundTriangle:_v,rawshape_segment:uv,rawshape_triangle:fv,rawshape_trimesh:hv,rawshape_voxels:ov,rawshape_voxelsFromPoints:cv,rawshapecasthit_normal1:Cv,rawshapecasthit_normal2:Pv,rawshapecasthit_time_of_impact:py,rawshapecasthit_witness1:Rv,rawshapecasthit_witness2:ay,rawshapecontact_distance:cy,rawshapecontact_normal1:iy,rawshapecontact_normal2:Zx,rawshapecontact_point1:Qx,rawshapecontact_point2:ty,rawvector_new:zv,rawvector_set_x:Kx,rawvector_set_y:Hv,rawvector_set_z:Gv,rawvector_x:xy,rawvector_xyz:Vv,rawvector_xzy:jv,rawvector_y:yy,rawvector_yxz:kv,rawvector_yzx:Xv,rawvector_z:Sy,rawvector_zero:Bv,rawvector_zxy:Wv,rawvector_zyx:qv,reserve_memory:Jx,version:Gf},Symbol.toStringTag,{value:"Module"}));qu(By);let cd=class{constructor(t,e,n){this.x=t,this.y=e,this.z=n}};class O{static new(t,e,n){return new cd(t,e,n)}static intoRaw(t){return new U(t.x,t.y,t.z)}static zeros(){return O.new(0,0,0)}static fromRaw(t){if(!t)return null;let e=O.new(t.x,t.y,t.z);return t.free(),e}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z}}let co=class{constructor(t,e,n,r){this.x=t,this.y=e,this.z=n,this.w=r}};class Gt{static identity(){return new co(0,0,0,1)}static fromRaw(t){if(!t)return null;let e=new co(t.x,t.y,t.z,t.w);return t.free(),e}static intoRaw(t){return new kt(t.x,t.y,t.z,t.w)}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w}}class ld{get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}constructor(t){this.elements=t}}class lo{static fromRaw(t){const e=new ld(t.elements());return t.free(),e}}var pn;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased"})(pn||(pn={}));class ho{constructor(t,e,n){this.rawSet=t,this.colliderSet=e,this.handle=n}finalizeDeserialization(t){this.colliderSet=t}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(t,e){return this.rawSet.rbLockTranslations(this.handle,t,e)}lockRotations(t,e){return this.rawSet.rbLockRotations(this.handle,t,e)}setEnabledTranslations(t,e,n,r){return this.rawSet.rbSetEnabledTranslations(this.handle,t,e,n,r)}restrictTranslations(t,e,n,r){this.setEnabledTranslations(t,e,n,r)}setEnabledRotations(t,e,n,r){return this.rawSet.rbSetEnabledRotations(this.handle,t,e,n,r)}restrictRotations(t,e,n,r){this.setEnabledRotations(t,e,n,r)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(t){this.rawSet.rbSetDominanceGroup(this.handle,t)}additionalSolverIterations(){return this.rawSet.rbAdditionalSolverIterations(this.handle)}setAdditionalSolverIterations(t){this.rawSet.rbSetAdditionalSolverIterations(this.handle,t)}enableCcd(t){this.rawSet.rbEnableCcd(this.handle,t)}setSoftCcdPrediction(t){this.rawSet.rbSetSoftCcdPrediction(this.handle,t)}softCcdPrediction(){return this.rawSet.rbSoftCcdPrediction(this.handle)}translation(){let t=this.rawSet.rbTranslation(this.handle);return O.fromRaw(t)}rotation(){let t=this.rawSet.rbRotation(this.handle);return Gt.fromRaw(t)}nextTranslation(){let t=this.rawSet.rbNextTranslation(this.handle);return O.fromRaw(t)}nextRotation(){let t=this.rawSet.rbNextRotation(this.handle);return Gt.fromRaw(t)}setTranslation(t,e){this.rawSet.rbSetTranslation(this.handle,t.x,t.y,t.z,e)}setLinvel(t,e){let n=O.intoRaw(t);this.rawSet.rbSetLinvel(this.handle,n,e),n.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(t,e){this.rawSet.rbSetGravityScale(this.handle,t,e)}setRotation(t,e){this.rawSet.rbSetRotation(this.handle,t.x,t.y,t.z,t.w,e)}setAngvel(t,e){let n=O.intoRaw(t);this.rawSet.rbSetAngvel(this.handle,n,e),n.free()}setNextKinematicTranslation(t){this.rawSet.rbSetNextKinematicTranslation(this.handle,t.x,t.y,t.z)}setNextKinematicRotation(t){this.rawSet.rbSetNextKinematicRotation(this.handle,t.x,t.y,t.z,t.w)}linvel(){return O.fromRaw(this.rawSet.rbLinvel(this.handle))}velocityAtPoint(t){const e=O.intoRaw(t);let n=O.fromRaw(this.rawSet.rbVelocityAtPoint(this.handle,e));return e.free(),n}angvel(){return O.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return O.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return O.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return O.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertia(){return O.fromRaw(this.rawSet.rbInvPrincipalInertia(this.handle))}principalInertia(){return O.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return Gt.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertia(){return lo.fromRaw(this.rawSet.rbEffectiveWorldInvInertia(this.handle))}effectiveAngularInertia(){return lo.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(t){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,t))}setEnabled(t){this.rawSet.rbSetEnabled(this.handle,t)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(t,e){return this.rawSet.rbSetBodyType(this.handle,t,e)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(t){this.rawSet.rbSetLinearDamping(this.handle,t)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(t,e){this.rawSet.rbSetAdditionalMass(this.handle,t,e)}setAdditionalMassProperties(t,e,n,r,s){let a=O.intoRaw(e),o=O.intoRaw(n),c=Gt.intoRaw(r);this.rawSet.rbSetAdditionalMassProperties(this.handle,t,a,o,c,s),a.free(),o.free(),c.free()}setAngularDamping(t){this.rawSet.rbSetAngularDamping(this.handle,t)}resetForces(t){this.rawSet.rbResetForces(this.handle,t)}resetTorques(t){this.rawSet.rbResetTorques(this.handle,t)}addForce(t,e){const n=O.intoRaw(t);this.rawSet.rbAddForce(this.handle,n,e),n.free()}applyImpulse(t,e){const n=O.intoRaw(t);this.rawSet.rbApplyImpulse(this.handle,n,e),n.free()}addTorque(t,e){const n=O.intoRaw(t);this.rawSet.rbAddTorque(this.handle,n,e),n.free()}applyTorqueImpulse(t,e){const n=O.intoRaw(t);this.rawSet.rbApplyTorqueImpulse(this.handle,n,e),n.free()}addForceAtPoint(t,e,n){const r=O.intoRaw(t),s=O.intoRaw(e);this.rawSet.rbAddForceAtPoint(this.handle,r,s,n),r.free(),s.free()}applyImpulseAtPoint(t,e,n){const r=O.intoRaw(t),s=O.intoRaw(e);this.rawSet.rbApplyImpulseAtPoint(this.handle,r,s,n),r.free(),s.free()}userForce(){return O.fromRaw(this.rawSet.rbUserForce(this.handle))}userTorque(){return O.fromRaw(this.rawSet.rbUserTorque(this.handle))}}class En{constructor(t){this.enabled=!0,this.status=t,this.translation=O.zeros(),this.rotation=Gt.identity(),this.gravityScale=1,this.linvel=O.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=O.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=O.zeros(),this.principalAngularInertia=O.zeros(),this.angularInertiaLocalFrame=Gt.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.softCcdPrediction=0,this.dominanceGroup=0,this.additionalSolverIterations=0}static dynamic(){return new En(pn.Dynamic)}static kinematicPositionBased(){return new En(pn.KinematicPositionBased)}static kinematicVelocityBased(){return new En(pn.KinematicVelocityBased)}static fixed(){return new En(pn.Fixed)}static newDynamic(){return new En(pn.Dynamic)}static newKinematicPositionBased(){return new En(pn.KinematicPositionBased)}static newKinematicVelocityBased(){return new En(pn.KinematicVelocityBased)}static newStatic(){return new En(pn.Fixed)}setDominanceGroup(t){return this.dominanceGroup=t,this}setAdditionalSolverIterations(t){return this.additionalSolverIterations=t,this}setEnabled(t){return this.enabled=t,this}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return Gt.copy(this.rotation,t),this}setGravityScale(t){return this.gravityScale=t,this}setAdditionalMass(t){return this.mass=t,this.massOnly=!0,this}setLinvel(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:t,y:e,z:n},this}setAngvel(t){return O.copy(this.angvel,t),this}setAdditionalMassProperties(t,e,n,r){return this.mass=t,O.copy(this.centerOfMass,e),O.copy(this.principalAngularInertia,n),Gt.copy(this.angularInertiaLocalFrame,r),this.massOnly=!1,this}enabledTranslations(t,e,n){return this.translationsEnabledX=t,this.translationsEnabledY=e,this.translationsEnabledZ=n,this}restrictTranslations(t,e,n){return this.enabledTranslations(t,e,n)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(t,e,n){return this.rotationsEnabledX=t,this.rotationsEnabledY=e,this.rotationsEnabledZ=n,this}restrictRotations(t,e,n){return this.enabledRotations(t,e,n)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(t){return this.linearDamping=t,this}setAngularDamping(t){return this.angularDamping=t,this}setCanSleep(t){return this.canSleep=t,this}setSleeping(t){return this.sleeping=t,this}setCcdEnabled(t){return this.ccdEnabled=t,this}setSoftCcdPrediction(t){return this.softCcdPrediction=t,this}setUserData(t){return this.userData=t,this}}class ra{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(t,e){let n=this.index(t);for(;this.data.length<=n;)this.data.push(null);this.data[n]==null&&(this.size+=1),this.data[n]=e}len(){return this.size}delete(t){let e=this.index(t);e<this.data.length&&(this.data[e]!=null&&(this.size-=1),this.data[e]=null)}clear(){this.data=new Array}get(t){let e=this.index(t);return e<this.data.length?this.data[e]:null}forEach(t){for(const e of this.data)e!=null&&t(e)}getAll(){return this.data.filter(t=>t!=null)}index(t){return this.fconv[0]=t,this.uconv[0]}}class hd{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new ge,this.map=new ra,t&&t.forEachRigidBodyHandle(e=>{this.map.set(e,new ho(t,null,e))})}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createRigidBody(t,e){let n=O.intoRaw(e.translation),r=Gt.intoRaw(e.rotation),s=O.intoRaw(e.linvel),a=O.intoRaw(e.centerOfMass),o=O.intoRaw(e.angvel),c=O.intoRaw(e.principalAngularInertia),l=Gt.intoRaw(e.angularInertiaLocalFrame),u=this.raw.createRigidBody(e.enabled,n,r,e.gravityScale,e.mass,e.massOnly,a,s,o,c,l,e.translationsEnabledX,e.translationsEnabledY,e.translationsEnabledZ,e.rotationsEnabledX,e.rotationsEnabledY,e.rotationsEnabledZ,e.linearDamping,e.angularDamping,e.status,e.canSleep,e.sleeping,e.softCcdPrediction,e.ccdEnabled,e.dominanceGroup,e.additionalSolverIterations);n.free(),r.free(),s.free(),a.free(),o.free(),c.free(),l.free();const f=new ho(this.raw,t,u);return f.userData=e.userData,this.map.set(u,f),f}remove(t,e,n,r,s){for(let a=0;a<this.raw.rbNumColliders(t);a+=1)n.unmap(this.raw.rbCollider(t,a));r.forEachJointHandleAttachedToRigidBody(t,a=>r.unmap(a)),s.forEachJointHandleAttachedToRigidBody(t,a=>s.unmap(a)),this.raw.remove(t,e.raw,n.raw,r.raw,s.raw),this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachActiveRigidBody(t,e){t.forEachActiveRigidBodyHandle(n=>{e(this.get(n))})}getAll(){return this.map.getAll()}}class dd{constructor(t){this.raw=t||new Ui}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get contact_erp(){return this.raw.contact_erp}get lengthUnit(){return this.raw.lengthUnit}get normalizedAllowedLinearError(){return this.raw.normalizedAllowedLinearError}get normalizedPredictionDistance(){return this.raw.normalizedPredictionDistance}get numSolverIterations(){return this.raw.numSolverIterations}get numInternalPgsIterations(){return this.raw.numInternalPgsIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(t){this.raw.dt=t}set contact_natural_frequency(t){this.raw.contact_natural_frequency=t}set lengthUnit(t){this.raw.lengthUnit=t}set normalizedAllowedLinearError(t){this.raw.normalizedAllowedLinearError=t}set normalizedPredictionDistance(t){this.raw.normalizedPredictionDistance=t}set numSolverIterations(t){this.raw.numSolverIterations=t}set numInternalPgsIterations(t){this.raw.numInternalPgsIterations=t}set minIslandSize(t){this.raw.minIslandSize=t}set maxCcdSubsteps(t){this.raw.maxCcdSubsteps=t}}var uo;(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Rope=3]="Rope",i[i.Spring=4]="Spring",i[i.Spherical=5]="Spherical",i[i.Generic=6]="Generic"})(uo||(uo={}));var fo;(function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"})(fo||(fo={}));var _o;(function(i){i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ"})(_o||(_o={}));class vn{constructor(t,e,n){this.rawSet=t,this.bodySet=e,this.handle=n}static newTyped(t,e,n){switch(t.jointType(n)){case mn.Revolute:return new md(t,e,n);case mn.Prismatic:return new pd(t,e,n);case mn.Fixed:return new ud(t,e,n);case mn.Spring:return new _d(t,e,n);case mn.Rope:return new fd(t,e,n);case mn.Spherical:return new wd(t,e,n);case mn.Generic:return new gd(t,e,n);default:return new vn(t,e,n)}}finalizeDeserialization(t){this.bodySet=t}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return Gt.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return Gt.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return O.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return O.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(t){const e=O.intoRaw(t);this.rawSet.jointSetAnchor1(this.handle,e),e.free()}setAnchor2(t){const e=O.intoRaw(t);this.rawSet.jointSetAnchor2(this.handle,e),e.free()}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Sc extends vn{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(t,e){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),t,e)}configureMotorModel(t){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),t)}configureMotorVelocity(t,e){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),t,e)}configureMotorPosition(t,e,n){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),t,e,n)}configureMotor(t,e,n,r){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),t,e,n,r)}}class ud extends vn{}class fd extends vn{}class _d extends vn{}class pd extends Sc{rawAxis(){return Zs.LinX}}class md extends Sc{rawAxis(){return Zs.AngX}}class gd extends vn{}class wd extends vn{}class bd{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new Jn,this.map=new ra,t&&t.forEachJointHandle(e=>{this.map.set(e,vn.newTyped(t,null,e))})}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createJoint(t,e,n,r,s){const a=e.intoRaw(),o=this.raw.createJoint(a,n,r,s);a.free();let c=vn.newTyped(this.raw,t,o);return this.map.set(o,c),c}remove(t,e){this.raw.remove(t,e),this.unmap(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}class wi{constructor(t,e){this.rawSet=t,this.handle=e}static newTyped(t,e){switch(t.jointType(e)){case mn.Revolute:return new yd(t,e);case mn.Prismatic:return new xd(t,e);case mn.Fixed:return new vd(t,e);case mn.Spherical:return new Sd(t,e);default:return new wi(t,e)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Mc extends wi{}class vd extends wi{}class xd extends Mc{rawAxis(){return Zs.LinX}}class yd extends Mc{rawAxis(){return Zs.AngX}}class Sd extends wi{}class Md{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new Zn,this.map=new ra,t&&t.forEachJointHandle(e=>{this.map.set(e,wi.newTyped(this.raw,e))})}createJoint(t,e,n,r){const s=t.intoRaw(),a=this.raw.createJoint(s,e,n,r);s.free();let o=wi.newTyped(this.raw,a);return this.map.set(a,o),o}remove(t,e){this.raw.remove(t,e),this.map.delete(t)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}getAll(){return this.map.getAll()}}var Nr;(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(Nr||(Nr={}));class Ed{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new oo}}class Td{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new $n}forEachActiveRigidBodyHandle(t){this.raw.forEachActiveRigidBodyHandle(t)}}var ar;(function(i){i[i.Vertex=0]="Vertex",i[i.Edge=1]="Edge",i[i.Face=2]="Face",i[i.Unknown=3]="Unknown"})(ar||(ar={}));class Wr{constructor(t,e,n,r){this.featureType=ar.Unknown,this.featureId=void 0,this.timeOfImpact=t,this.normal=e,r!==void 0&&(this.featureId=r),n!==void 0&&(this.featureType=n)}static fromRaw(t){if(!t)return null;const e=new Wr(t.time_of_impact(),O.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),e}}class Or{constructor(t,e,n,r,s){this.featureType=ar.Unknown,this.featureId=void 0,this.collider=t,this.timeOfImpact=e,this.normal=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(t,e){if(!e)return null;const n=new Or(t.get(e.colliderHandle()),e.time_of_impact(),O.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),n}}class sa{constructor(t,e){this.collider=t,this.timeOfImpact=e}static fromRaw(t,e){if(!e)return null;const n=new sa(t.get(e.colliderHandle()),e.timeOfImpact());return e.free(),n}}class jr{constructor(t,e){this.point=t,this.isInside=e}static fromRaw(t){if(!t)return null;const e=new jr(O.fromRaw(t.point()),t.isInside());return t.free(),e}}class Br{constructor(t,e,n,r,s){this.featureType=ar.Unknown,this.featureId=void 0,this.collider=t,this.point=e,this.isInside=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(t,e){if(!e)return null;const n=new Br(t.get(e.colliderHandle()),O.fromRaw(e.point()),e.isInside(),e.featureType(),e.featureId());return e.free(),n}}class pr{constructor(t,e,n,r,s){this.time_of_impact=t,this.witness1=e,this.witness2=n,this.normal1=r,this.normal2=s}static fromRaw(t,e){if(!e)return null;const n=new pr(e.time_of_impact(),O.fromRaw(e.witness1()),O.fromRaw(e.witness2()),O.fromRaw(e.normal1()),O.fromRaw(e.normal2()));return e.free(),n}}class Xr extends pr{constructor(t,e,n,r,s,a){super(e,n,r,s,a),this.collider=t}static fromRaw(t,e){if(!e)return null;const n=new Xr(t.get(e.colliderHandle()),e.time_of_impact(),O.fromRaw(e.witness1()),O.fromRaw(e.witness2()),O.fromRaw(e.normal1()),O.fromRaw(e.normal2()));return e.free(),n}}class Ad{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Kn}castRay(t,e,n,r,s,a,o,c,l,u,f){let d=O.intoRaw(r.origin),m=O.intoRaw(r.dir),w=sa.fromRaw(n,this.raw.castRay(t.raw,e.raw,n.raw,d,m,s,a,o,c,l,u,f));return d.free(),m.free(),w}castRayAndGetNormal(t,e,n,r,s,a,o,c,l,u,f){let d=O.intoRaw(r.origin),m=O.intoRaw(r.dir),w=Or.fromRaw(n,this.raw.castRayAndGetNormal(t.raw,e.raw,n.raw,d,m,s,a,o,c,l,u,f));return d.free(),m.free(),w}intersectionsWithRay(t,e,n,r,s,a,o,c,l,u,f,d){let m=O.intoRaw(r.origin),w=O.intoRaw(r.dir),y=g=>o(Or.fromRaw(n,g));this.raw.intersectionsWithRay(t.raw,e.raw,n.raw,m,w,s,a,y,c,l,u,f,d),m.free(),w.free()}intersectionWithShape(t,e,n,r,s,a,o,c,l,u,f){let d=O.intoRaw(r),m=Gt.intoRaw(s),w=a.intoRaw(),y=this.raw.intersectionWithShape(t.raw,e.raw,n.raw,d,m,w,o,c,l,u,f);return d.free(),m.free(),w.free(),y}projectPoint(t,e,n,r,s,a,o,c,l,u){let f=O.intoRaw(r),d=Br.fromRaw(n,this.raw.projectPoint(t.raw,e.raw,n.raw,f,s,a,o,c,l,u));return f.free(),d}projectPointAndGetFeature(t,e,n,r,s,a,o,c,l){let u=O.intoRaw(r),f=Br.fromRaw(n,this.raw.projectPointAndGetFeature(t.raw,e.raw,n.raw,u,s,a,o,c,l));return u.free(),f}intersectionsWithPoint(t,e,n,r,s,a,o,c,l,u){let f=O.intoRaw(r);this.raw.intersectionsWithPoint(t.raw,e.raw,n.raw,f,s,a,o,c,l,u),f.free()}castShape(t,e,n,r,s,a,o,c,l,u,f,d,m,w,y){let g=O.intoRaw(r),p=Gt.intoRaw(s),x=O.intoRaw(a),T=o.intoRaw(),E=Xr.fromRaw(n,this.raw.castShape(t.raw,e.raw,n.raw,g,p,x,T,c,l,u,f,d,m,w,y));return g.free(),p.free(),x.free(),T.free(),E}intersectionsWithShape(t,e,n,r,s,a,o,c,l,u,f,d){let m=O.intoRaw(r),w=Gt.intoRaw(s),y=a.intoRaw();this.raw.intersectionsWithShape(t.raw,e.raw,n.raw,m,w,y,o,c,l,u,f,d),m.free(),w.free(),y.free()}collidersWithAabbIntersectingAabb(t,e,n,r,s,a){let o=O.intoRaw(r),c=O.intoRaw(s);this.raw.collidersWithAabbIntersectingAabb(t.raw,e.raw,n.raw,o,c,a),o.free(),c.free()}}class Rd{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Pe,this.tempManifold=new Cd(null)}contactPairsWith(t,e){this.raw.contact_pairs_with(t,e)}intersectionPairsWith(t,e){this.raw.intersection_pairs_with(t,e)}contactPair(t,e,n){const r=this.raw.contact_pair(t,e);if(r){const s=r.collider1()!=t;let a;for(a=0;a<r.numContactManifolds();++a)this.tempManifold.raw=r.contactManifold(a),this.tempManifold.raw&&n(this.tempManifold,s),this.tempManifold.free();r.free()}}intersectionPair(t,e){return this.raw.intersection_pair(t,e)}}class Cd{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t}normal(){return O.fromRaw(this.raw.normal())}localNormal1(){return O.fromRaw(this.raw.local_n1())}localNormal2(){return O.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(t){return O.fromRaw(this.raw.contact_local_p1(t))}localContactPoint2(t){return O.fromRaw(this.raw.contact_local_p2(t))}contactDist(t){return this.raw.contact_dist(t)}contactFid1(t){return this.raw.contact_fid1(t)}contactFid2(t){return this.raw.contact_fid2(t)}contactImpulse(t){return this.raw.contact_impulse(t)}contactTangentImpulseX(t){return this.raw.contact_tangent_impulse_x(t)}contactTangentImpulseY(t){return this.raw.contact_tangent_impulse_y(t)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(t){return O.fromRaw(this.raw.solver_contact_point(t))}solverContactDist(t){return this.raw.solver_contact_dist(t)}solverContactFriction(t){return this.raw.solver_contact_friction(t)}solverContactRestitution(t){return this.raw.solver_contact_restitution(t)}solverContactTangentVelocity(t){return O.fromRaw(this.raw.solver_contact_tangent_velocity(t))}}class or{constructor(t,e,n,r,s){this.distance=t,this.point1=e,this.point2=n,this.normal1=r,this.normal2=s}static fromRaw(t){if(!t)return null;const e=new or(t.distance(),O.fromRaw(t.point1()),O.fromRaw(t.point2()),O.fromRaw(t.normal1()),O.fromRaw(t.normal2()));return t.free(),e}}class Ie{static fromRaw(t,e){const n=t.coShapeType(e);let r,s,a,o,c,l,u;switch(n){case Oe.Ball:return new Ec(t.coRadius(e));case Oe.Cuboid:return r=t.coHalfExtents(e),new Tc(r.x,r.y,r.z);case Oe.RoundCuboid:return r=t.coHalfExtents(e),s=t.coRoundRadius(e),new Ac(r.x,r.y,r.z,s);case Oe.Capsule:return c=t.coHalfHeight(e),l=t.coRadius(e),new Rc(c,l);case Oe.Segment:return a=t.coVertices(e),new Cc(O.new(a[0],a[1],a[2]),O.new(a[3],a[4],a[5]));case Oe.Polyline:return a=t.coVertices(e),o=t.coIndices(e),new Dc(a,o);case Oe.Triangle:return a=t.coVertices(e),new Pc(O.new(a[0],a[1],a[2]),O.new(a[3],a[4],a[5]),O.new(a[6],a[7],a[8]));case Oe.RoundTriangle:return a=t.coVertices(e),s=t.coRoundRadius(e),new Ic(O.new(a[0],a[1],a[2]),O.new(a[3],a[4],a[5]),O.new(a[6],a[7],a[8]),s);case Oe.HalfSpace:return u=O.fromRaw(t.coHalfspaceNormal(e)),new Pd(u);case Oe.Voxels:const f=t.coVoxelData(e),d=t.coVoxelSize(e);return new Lc(f,d);case Oe.TriMesh:a=t.coVertices(e),o=t.coIndices(e);const m=t.coTriMeshFlags(e);return new Fc(a,o,m);case Oe.HeightField:const w=t.coHeightfieldScale(e),y=t.coHeightfieldHeights(e),g=t.coHeightfieldNRows(e),p=t.coHeightfieldNCols(e),x=t.coHeightFieldFlags(e);return new Uc(g,p,y,w,x);case Oe.ConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),new Hs(a,o);case Oe.RoundConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),s=t.coRoundRadius(e),new Gs(a,o,s);case Oe.Cylinder:return c=t.coHalfHeight(e),l=t.coRadius(e),new Nc(c,l);case Oe.RoundCylinder:return c=t.coHalfHeight(e),l=t.coRadius(e),s=t.coRoundRadius(e),new Oc(c,l,s);case Oe.Cone:return c=t.coHalfHeight(e),l=t.coRadius(e),new Bc(c,l);case Oe.RoundCone:return c=t.coHalfHeight(e),l=t.coRadius(e),s=t.coRoundRadius(e),new zc(c,l,s);default:throw new Error("unknown shape type: "+n)}}castShape(t,e,n,r,s,a,o,c,l,u){let f=O.intoRaw(t),d=Gt.intoRaw(e),m=O.intoRaw(n),w=O.intoRaw(s),y=Gt.intoRaw(a),g=O.intoRaw(o),p=this.intoRaw(),x=r.intoRaw(),T=pr.fromRaw(null,p.castShape(f,d,m,x,w,y,g,c,l,u));return f.free(),d.free(),m.free(),w.free(),y.free(),g.free(),p.free(),x.free(),T}intersectsShape(t,e,n,r,s){let a=O.intoRaw(t),o=Gt.intoRaw(e),c=O.intoRaw(r),l=Gt.intoRaw(s),u=this.intoRaw(),f=n.intoRaw(),d=u.intersectsShape(a,o,f,c,l);return a.free(),o.free(),c.free(),l.free(),u.free(),f.free(),d}contactShape(t,e,n,r,s,a){let o=O.intoRaw(t),c=Gt.intoRaw(e),l=O.intoRaw(r),u=Gt.intoRaw(s),f=this.intoRaw(),d=n.intoRaw(),m=or.fromRaw(f.contactShape(o,c,d,l,u,a));return o.free(),c.free(),l.free(),u.free(),f.free(),d.free(),m}containsPoint(t,e,n){let r=O.intoRaw(t),s=Gt.intoRaw(e),a=O.intoRaw(n),o=this.intoRaw(),c=o.containsPoint(r,s,a);return r.free(),s.free(),a.free(),o.free(),c}projectPoint(t,e,n,r){let s=O.intoRaw(t),a=Gt.intoRaw(e),o=O.intoRaw(n),c=this.intoRaw(),l=jr.fromRaw(c.projectPoint(s,a,o,r));return s.free(),a.free(),o.free(),c.free(),l}intersectsRay(t,e,n,r){let s=O.intoRaw(e),a=Gt.intoRaw(n),o=O.intoRaw(t.origin),c=O.intoRaw(t.dir),l=this.intoRaw(),u=l.intersectsRay(s,a,o,c,r);return s.free(),a.free(),o.free(),c.free(),l.free(),u}castRay(t,e,n,r,s){let a=O.intoRaw(e),o=Gt.intoRaw(n),c=O.intoRaw(t.origin),l=O.intoRaw(t.dir),u=this.intoRaw(),f=u.castRay(a,o,c,l,r,s);return a.free(),o.free(),c.free(),l.free(),u.free(),f}castRayAndGetNormal(t,e,n,r,s){let a=O.intoRaw(e),o=Gt.intoRaw(n),c=O.intoRaw(t.origin),l=O.intoRaw(t.dir),u=this.intoRaw(),f=Wr.fromRaw(u.castRayAndGetNormal(a,o,c,l,r,s));return a.free(),o.free(),c.free(),l.free(),u.free(),f}}var Ae;(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.ConvexPolyhedron=9]="ConvexPolyhedron",i[i.Cylinder=10]="Cylinder",i[i.Cone=11]="Cone",i[i.RoundCuboid=12]="RoundCuboid",i[i.RoundTriangle=13]="RoundTriangle",i[i.RoundCylinder=14]="RoundCylinder",i[i.RoundCone=15]="RoundCone",i[i.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",i[i.HalfSpace=17]="HalfSpace",i[i.Voxels=18]="Voxels"})(Ae||(Ae={}));var po;(function(i){i[i.FIX_INTERNAL_EDGES=1]="FIX_INTERNAL_EDGES"})(po||(po={}));var mo;(function(i){i[i.DELETE_BAD_TOPOLOGY_TRIANGLES=4]="DELETE_BAD_TOPOLOGY_TRIANGLES",i[i.ORIENTED=8]="ORIENTED",i[i.MERGE_DUPLICATE_VERTICES=16]="MERGE_DUPLICATE_VERTICES",i[i.DELETE_DEGENERATE_TRIANGLES=32]="DELETE_DEGENERATE_TRIANGLES",i[i.DELETE_DUPLICATE_TRIANGLES=64]="DELETE_DUPLICATE_TRIANGLES",i[i.FIX_INTERNAL_EDGES=144]="FIX_INTERNAL_EDGES"})(mo||(mo={}));class Ec extends Ie{constructor(t){super(),this.type=Ae.Ball,this.radius=t}intoRaw(){return Pt.ball(this.radius)}}class Pd extends Ie{constructor(t){super(),this.type=Ae.HalfSpace,this.normal=t}intoRaw(){let t=O.intoRaw(this.normal),e=Pt.halfspace(t);return t.free(),e}}class Tc extends Ie{constructor(t,e,n){super(),this.type=Ae.Cuboid,this.halfExtents=O.new(t,e,n)}intoRaw(){return Pt.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class Ac extends Ie{constructor(t,e,n,r){super(),this.type=Ae.RoundCuboid,this.halfExtents=O.new(t,e,n),this.borderRadius=r}intoRaw(){return Pt.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class Rc extends Ie{constructor(t,e){super(),this.type=Ae.Capsule,this.halfHeight=t,this.radius=e}intoRaw(){return Pt.capsule(this.halfHeight,this.radius)}}class Cc extends Ie{constructor(t,e){super(),this.type=Ae.Segment,this.a=t,this.b=e}intoRaw(){let t=O.intoRaw(this.a),e=O.intoRaw(this.b),n=Pt.segment(t,e);return t.free(),e.free(),n}}let Pc=class extends Ie{constructor(t,e,n){super(),this.type=Ae.Triangle,this.a=t,this.b=e,this.c=n}intoRaw(){let t=O.intoRaw(this.a),e=O.intoRaw(this.b),n=O.intoRaw(this.c),r=Pt.triangle(t,e,n);return t.free(),e.free(),n.free(),r}};class Ic extends Ie{constructor(t,e,n,r){super(),this.type=Ae.RoundTriangle,this.a=t,this.b=e,this.c=n,this.borderRadius=r}intoRaw(){let t=O.intoRaw(this.a),e=O.intoRaw(this.b),n=O.intoRaw(this.c),r=Pt.roundTriangle(t,e,n,this.borderRadius);return t.free(),e.free(),n.free(),r}}class Dc extends Ie{constructor(t,e){super(),this.type=Ae.Polyline,this.vertices=t,this.indices=e??new Uint32Array(0)}intoRaw(){return Pt.polyline(this.vertices,this.indices)}}class Lc extends Ie{constructor(t,e){super(),this.type=Ae.Voxels,this.data=t,this.voxelSize=e}intoRaw(){let t=O.intoRaw(this.voxelSize),e;return this.data instanceof Int32Array?e=Pt.voxels(t,this.data):e=Pt.voxelsFromPoints(t,this.data),t.free(),e}}class Fc extends Ie{constructor(t,e,n){super(),this.type=Ae.TriMesh,this.vertices=t,this.indices=e,this.flags=n}intoRaw(){return Pt.trimesh(this.vertices,this.indices,this.flags)}}class Hs extends Ie{constructor(t,e){super(),this.type=Ae.ConvexPolyhedron,this.vertices=t,this.indices=e}intoRaw(){return this.indices?Pt.convexMesh(this.vertices,this.indices):Pt.convexHull(this.vertices)}}class Gs extends Ie{constructor(t,e,n){super(),this.type=Ae.RoundConvexPolyhedron,this.vertices=t,this.indices=e,this.borderRadius=n}intoRaw(){return this.indices?Pt.roundConvexMesh(this.vertices,this.indices,this.borderRadius):Pt.roundConvexHull(this.vertices,this.borderRadius)}}class Uc extends Ie{constructor(t,e,n,r,s){super(),this.type=Ae.HeightField,this.nrows=t,this.ncols=e,this.heights=n,this.scale=r,this.flags=s}intoRaw(){let t=O.intoRaw(this.scale),e=Pt.heightfield(this.nrows,this.ncols,this.heights,t,this.flags);return t.free(),e}}class Nc extends Ie{constructor(t,e){super(),this.type=Ae.Cylinder,this.halfHeight=t,this.radius=e}intoRaw(){return Pt.cylinder(this.halfHeight,this.radius)}}class Oc extends Ie{constructor(t,e,n){super(),this.type=Ae.RoundCylinder,this.borderRadius=n,this.halfHeight=t,this.radius=e}intoRaw(){return Pt.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class Bc extends Ie{constructor(t,e){super(),this.type=Ae.Cone,this.halfHeight=t,this.radius=e}intoRaw(){return Pt.cone(this.halfHeight,this.radius)}}class zc extends Ie{constructor(t,e,n){super(),this.type=Ae.RoundCone,this.halfHeight=t,this.radius=e,this.borderRadius=n}intoRaw(){return Pt.roundCone(this.halfHeight,this.radius,this.borderRadius)}}class Id{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new sf}step(t,e,n,r,s,a,o,c,l,u,f,d){let m=O.intoRaw(t);f?this.raw.stepWithEvents(m,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,c.raw,l.raw,u.raw,f.raw,d,d?d.filterContactPair:null,d?d.filterIntersectionPair:null):this.raw.step(m,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,c.raw,l.raw,u.raw),m.free()}}class go{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new of}serializeAll(t,e,n,r,s,a,o,c,l){let u=O.intoRaw(t);const f=this.raw.serializeAll(u,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,c.raw,l.raw);return u.free(),f}deserializeAll(t){return aa.fromRaw(this.raw.deserializeAll(t))}}class Dd{constructor(t,e){this.vertices=t,this.colors=e}}class Ld{free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}constructor(t){this.raw=t||new tf}render(t,e,n,r,s,a,o){this.raw.render(t.raw,e.raw,n.raw,r.raw,s.raw,a,e.castClosure(o)),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class Fd{}class Ud{constructor(t,e,n,r,s,a){this.params=e,this.bodies=s,this.colliders=a,this.broadPhase=n,this.narrowPhase=r,this.raw=new rf(t),this.rawCharacterCollision=new od,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(t){let e=O.intoRaw(t);return this.raw.setUp(e)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(t){this._applyImpulsesToDynamicBodies=t}characterMass(){return this._characterMass}setCharacterMass(t){this._characterMass=t}offset(){return this.raw.offset()}setOffset(t){this.raw.setOffset(t)}normalNudgeFactor(){return this.raw.normalNudgeFactor()}setNormalNudgeFactor(t){this.raw.setNormalNudgeFactor(t)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(t){this.raw.setSlideEnabled(t)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(t,e,n){this.raw.enableAutostep(t,e,n)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(t){this.raw.setMaxSlopeClimbAngle(t)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(t){this.raw.setMinSlopeSlideAngle(t)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(t){this.raw.enableSnapToGround(t)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(t,e,n,r,s){let a=O.intoRaw(e);this.raw.computeColliderMovement(this.params.dt,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,t.handle,a,this._applyImpulsesToDynamicBodies,this._characterMass,n,r,this.colliders.castClosure(s)),a.free()}computedMovement(){return O.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(t,e){if(this.raw.computedCollision(t,this.rawCharacterCollision)){let n=this.rawCharacterCollision;return e=e??new Fd,e.translationDeltaApplied=O.fromRaw(n.translationDeltaApplied()),e.translationDeltaRemaining=O.fromRaw(n.translationDeltaRemaining()),e.toi=n.toi(),e.witness1=O.fromRaw(n.worldWitness1()),e.witness2=O.fromRaw(n.worldWitness2()),e.normal1=O.fromRaw(n.worldNormal1()),e.normal2=O.fromRaw(n.worldNormal2()),e.collider=this.colliders.get(n.handle()),e}else return null}}var wo;(function(i){i[i.None=0]="None",i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ",i[i.AllLin=7]="AllLin",i[i.AllAng=56]="AllAng",i[i.All=63]="All"})(wo||(wo={}));class Nd{constructor(t,e,n,r,s,a){this.params=t,this.bodies=e,this.raw=new af(n,r,s,a)}free(){this.raw&&this.raw.free(),this.raw=void 0}setKp(t,e){this.raw.set_kp(t,e)}setKi(t,e){this.raw.set_kp(t,e)}setKd(t,e){this.raw.set_kp(t,e)}setAxes(t){this.raw.set_axes_mask(t)}resetIntegrals(){this.raw.reset_integrals()}applyLinearCorrection(t,e,n){let r=O.intoRaw(e),s=O.intoRaw(n);this.raw.apply_linear_correction(this.params.dt,this.bodies.raw,t.handle,r,s),r.free(),s.free()}applyAngularCorrection(t,e,n){let r=Gt.intoRaw(e),s=O.intoRaw(n);this.raw.apply_angular_correction(this.params.dt,this.bodies.raw,t.handle,r,s),r.free(),s.free()}linearCorrection(t,e,n){let r=O.intoRaw(e),s=O.intoRaw(n),a=this.raw.linear_correction(this.params.dt,this.bodies.raw,t.handle,r,s);return r.free(),s.free(),O.fromRaw(a)}angularCorrection(t,e,n){let r=Gt.intoRaw(e),s=O.intoRaw(n),a=this.raw.angular_correction(this.params.dt,this.bodies.raw,t.handle,r,s);return r.free(),s.free(),O.fromRaw(a)}}class Od{constructor(t,e,n,r,s){this.raw=new ef(t.handle),this.broadPhase=e,this.narrowPhase=n,this.bodies=r,this.colliders=s,this._chassis=t}free(){this.raw&&this.raw.free(),this.raw=void 0}updateVehicle(t,e,n,r){this.raw.update_vehicle(t,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,e,n,this.colliders.castClosure(r))}currentVehicleSpeed(){return this.raw.current_vehicle_speed()}chassis(){return this._chassis}get indexUpAxis(){return this.raw.index_up_axis()}set indexUpAxis(t){this.raw.set_index_up_axis(t)}get indexForwardAxis(){return this.raw.index_forward_axis()}set setIndexForwardAxis(t){this.raw.set_index_forward_axis(t)}addWheel(t,e,n,r,s){let a=O.intoRaw(t),o=O.intoRaw(e),c=O.intoRaw(n);this.raw.add_wheel(a,o,c,r,s),a.free(),o.free(),c.free()}numWheels(){return this.raw.num_wheels()}wheelChassisConnectionPointCs(t){return O.fromRaw(this.raw.wheel_chassis_connection_point_cs(t))}setWheelChassisConnectionPointCs(t,e){let n=O.intoRaw(e);this.raw.set_wheel_chassis_connection_point_cs(t,n),n.free()}wheelSuspensionRestLength(t){return this.raw.wheel_suspension_rest_length(t)}setWheelSuspensionRestLength(t,e){this.raw.set_wheel_suspension_rest_length(t,e)}wheelMaxSuspensionTravel(t){return this.raw.wheel_max_suspension_travel(t)}setWheelMaxSuspensionTravel(t,e){this.raw.set_wheel_max_suspension_travel(t,e)}wheelRadius(t){return this.raw.wheel_radius(t)}setWheelRadius(t,e){this.raw.set_wheel_radius(t,e)}wheelSuspensionStiffness(t){return this.raw.wheel_suspension_stiffness(t)}setWheelSuspensionStiffness(t,e){this.raw.set_wheel_suspension_stiffness(t,e)}wheelSuspensionCompression(t){return this.raw.wheel_suspension_compression(t)}setWheelSuspensionCompression(t,e){this.raw.set_wheel_suspension_compression(t,e)}wheelSuspensionRelaxation(t){return this.raw.wheel_suspension_relaxation(t)}setWheelSuspensionRelaxation(t,e){this.raw.set_wheel_suspension_relaxation(t,e)}wheelMaxSuspensionForce(t){return this.raw.wheel_max_suspension_force(t)}setWheelMaxSuspensionForce(t,e){this.raw.set_wheel_max_suspension_force(t,e)}wheelBrake(t){return this.raw.wheel_brake(t)}setWheelBrake(t,e){this.raw.set_wheel_brake(t,e)}wheelSteering(t){return this.raw.wheel_steering(t)}setWheelSteering(t,e){this.raw.set_wheel_steering(t,e)}wheelEngineForce(t){return this.raw.wheel_engine_force(t)}setWheelEngineForce(t,e){this.raw.set_wheel_engine_force(t,e)}wheelDirectionCs(t){return O.fromRaw(this.raw.wheel_direction_cs(t))}setWheelDirectionCs(t,e){let n=O.intoRaw(e);this.raw.set_wheel_direction_cs(t,n),n.free()}wheelAxleCs(t){return O.fromRaw(this.raw.wheel_axle_cs(t))}setWheelAxleCs(t,e){let n=O.intoRaw(e);this.raw.set_wheel_axle_cs(t,n),n.free()}wheelFrictionSlip(t){return this.raw.wheel_friction_slip(t)}setWheelFrictionSlip(t,e){this.raw.set_wheel_friction_slip(t,e)}wheelSideFrictionStiffness(t){return this.raw.wheel_side_friction_stiffness(t)}setWheelSideFrictionStiffness(t,e){this.raw.set_wheel_side_friction_stiffness(t,e)}wheelRotation(t){return this.raw.wheel_rotation(t)}wheelForwardImpulse(t){return this.raw.wheel_forward_impulse(t)}wheelSideImpulse(t){return this.raw.wheel_side_impulse(t)}wheelSuspensionForce(t){return this.raw.wheel_suspension_force(t)}wheelContactNormal(t){return O.fromRaw(this.raw.wheel_contact_normal_ws(t))}wheelContactPoint(t){return O.fromRaw(this.raw.wheel_contact_point_ws(t))}wheelSuspensionLength(t){return this.raw.wheel_suspension_length(t)}wheelHardPoint(t){return O.fromRaw(this.raw.wheel_hard_point_ws(t))}wheelIsInContact(t){return this.raw.wheel_is_in_contact(t)}wheelGroundObject(t){return this.colliders.get(this.raw.wheel_ground_object(t))}}class aa{free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(t=>t.free()),this.pidControllers.forEach(t=>t.free()),this.vehicleControllers.forEach(t=>t.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0,this.pidControllers=void 0,this.vehicleControllers=void 0}constructor(t,e,n,r,s,a,o,c,l,u,f,d,m){this.gravity=t,this.integrationParameters=new dd(e),this.islands=new Td(n),this.broadPhase=new Ad(r),this.narrowPhase=new Rd(s),this.bodies=new hd(a),this.colliders=new Bd(o),this.impulseJoints=new bd(c),this.multibodyJoints=new Md(l),this.ccdSolver=new Ed(u),this.physicsPipeline=new Id(f),this.serializationPipeline=new go(d),this.debugRenderPipeline=new Ld(m),this.characterControllers=new Set,this.pidControllers=new Set,this.vehicleControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}static fromRaw(t){return t?new aa(O.fromRaw(t.takeGravity()),t.takeIntegrationParameters(),t.takeIslandManager(),t.takeBroadPhase(),t.takeNarrowPhase(),t.takeBodies(),t.takeColliders(),t.takeImpulseJoints(),t.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(t){return new go().deserializeAll(t)}debugRender(t,e){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase,t,e),new Dd(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(t,e){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,t,e)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}get timestep(){return this.integrationParameters.dt}set timestep(t){this.integrationParameters.dt=t}get lengthUnit(){return this.integrationParameters.lengthUnit}set lengthUnit(t){this.integrationParameters.lengthUnit=t}get numSolverIterations(){return this.integrationParameters.numSolverIterations}set numSolverIterations(t){this.integrationParameters.numSolverIterations=t}get numInternalPgsIterations(){return this.integrationParameters.numInternalPgsIterations}set numInternalPgsIterations(t){this.integrationParameters.numInternalPgsIterations=t}get maxCcdSubsteps(){return this.integrationParameters.maxCcdSubsteps}set maxCcdSubsteps(t){this.integrationParameters.maxCcdSubsteps=t}createRigidBody(t){return this.bodies.createRigidBody(this.colliders,t)}createCharacterController(t){let e=new Ud(t,this.integrationParameters,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.characterControllers.add(e),e}removeCharacterController(t){this.characterControllers.delete(t),t.free()}createPidController(t,e,n,r){let s=new Nd(this.integrationParameters,this.bodies,t,e,n,r);return this.pidControllers.add(s),s}removePidController(t){this.pidControllers.delete(t),t.free()}createVehicleController(t){let e=new Od(t,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.vehicleControllers.add(e),e}removeVehicleController(t){this.vehicleControllers.delete(t),t.free()}createCollider(t,e){let n=e?e.handle:void 0;return this.colliders.createCollider(this.bodies,t,n)}createImpulseJoint(t,e,n,r){return this.impulseJoints.createJoint(this.bodies,t,e.handle,n.handle,r)}createMultibodyJoint(t,e,n,r){return this.multibodyJoints.createJoint(t,e.handle,n.handle,r)}getRigidBody(t){return this.bodies.get(t)}getCollider(t){return this.colliders.get(t)}getImpulseJoint(t){return this.impulseJoints.get(t)}getMultibodyJoint(t){return this.multibodyJoints.get(t)}removeRigidBody(t){this.bodies&&this.bodies.remove(t.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(t,e){this.colliders&&this.colliders.remove(t.handle,this.islands,this.bodies,e)}removeImpulseJoint(t,e){this.impulseJoints&&this.impulseJoints.remove(t.handle,e)}removeMultibodyJoint(t,e){this.impulseJoints&&this.multibodyJoints.remove(t.handle,e)}forEachCollider(t){this.colliders.forEach(t)}forEachRigidBody(t){this.bodies.forEach(t)}forEachActiveRigidBody(t){this.bodies.forEachActiveRigidBody(this.islands,t)}castRay(t,e,n,r,s,a,o,c){return this.broadPhase.castRay(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(c))}castRayAndGetNormal(t,e,n,r,s,a,o,c){return this.broadPhase.castRayAndGetNormal(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(c))}intersectionsWithRay(t,e,n,r,s,a,o,c,l){this.broadPhase.intersectionsWithRay(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a,o?o.handle:null,c?c.handle:null,this.colliders.castClosure(l))}intersectionWithShape(t,e,n,r,s,a,o,c){let l=this.broadPhase.intersectionWithShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(c));return l!=null?this.colliders.get(l):null}projectPoint(t,e,n,r,s,a,o){return this.broadPhase.projectPoint(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}projectPointAndGetFeature(t,e,n,r,s,a){return this.broadPhase.projectPointAndGetFeature(this.narrowPhase,this.bodies,this.colliders,t,e,n,r?r.handle:null,s?s.handle:null,this.colliders.castClosure(a))}intersectionsWithPoint(t,e,n,r,s,a,o){this.broadPhase.intersectionsWithPoint(this.narrowPhase,this.bodies,this.colliders,t,this.colliders.castClosure(e),n,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}castShape(t,e,n,r,s,a,o,c,l,u,f,d){return this.broadPhase.castShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a,o,c,l,u?u.handle:null,f?f.handle:null,this.colliders.castClosure(d))}intersectionsWithShape(t,e,n,r,s,a,o,c,l){this.broadPhase.intersectionsWithShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,this.colliders.castClosure(r),s,a,o?o.handle:null,c?c.handle:null,this.colliders.castClosure(l))}collidersWithAabbIntersectingAabb(t,e,n){this.broadPhase.collidersWithAabbIntersectingAabb(this.narrowPhase,this.bodies,this.colliders,t,e,this.colliders.castClosure(n))}contactPairsWith(t,e){this.narrowPhase.contactPairsWith(t.handle,this.colliders.castClosure(e))}intersectionPairsWith(t,e){this.narrowPhase.intersectionPairsWith(t.handle,this.colliders.castClosure(e))}contactPair(t,e,n){this.narrowPhase.contactPair(t.handle,e.handle,n)}intersectionPair(t,e){return this.narrowPhase.intersectionPair(t.handle,e.handle)}set profilerEnabled(t){this.physicsPipeline.raw.set_profiler_enabled(t)}get profilerEnabled(){return this.physicsPipeline.raw.is_profiler_enabled()}timingStep(){return this.physicsPipeline.raw.timing_step()}timingCollisionDetection(){return this.physicsPipeline.raw.timing_collision_detection()}timingBroadPhase(){return this.physicsPipeline.raw.timing_broad_phase()}timingNarrowPhase(){return this.physicsPipeline.raw.timing_narrow_phase()}timingSolver(){return this.physicsPipeline.raw.timing_solver()}timingVelocityAssembly(){return this.physicsPipeline.raw.timing_velocity_assembly()}timingVelocityResolution(){return this.physicsPipeline.raw.timing_velocity_resolution()}timingVelocityUpdate(){return this.physicsPipeline.raw.timing_velocity_update()}timingVelocityWriteback(){return this.physicsPipeline.raw.timing_velocity_writeback()}timingCcd(){return this.physicsPipeline.raw.timing_ccd()}timingCcdToiComputation(){return this.physicsPipeline.raw.timing_ccd_toi_computation()}timingCcdBroadPhase(){return this.physicsPipeline.raw.timing_ccd_broad_phase()}timingCcdNarrowPhase(){return this.physicsPipeline.raw.timing_ccd_narrow_phase()}timingCcdSolver(){return this.physicsPipeline.raw.timing_ccd_solver()}timingIslandConstruction(){return this.physicsPipeline.raw.timing_island_construction()}timingUserChanges(){return this.physicsPipeline.raw.timing_user_changes()}}var Vs;(function(i){i[i.NONE=0]="NONE",i[i.COLLISION_EVENTS=1]="COLLISION_EVENTS",i[i.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(Vs||(Vs={}));var ks;(function(i){i[i.NONE=0]="NONE",i[i.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",i[i.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(ks||(ks={}));var bo;(function(i){i[i.EMPTY=0]="EMPTY",i[i.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(bo||(bo={}));var Ws;(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(Ws||(Ws={}));class vo{constructor(t,e,n,r){this.colliderSet=t,this.handle=e,this._parent=n,this._shape=r}finalizeDeserialization(t){this.handle!=null&&(this._parent=t.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=Ie.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}clearShapeCache(){this._shape=null}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return O.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}translationWrtParent(){return O.fromRaw(this.colliderSet.raw.coTranslationWrtParent(this.handle))}rotation(){return Gt.fromRaw(this.colliderSet.raw.coRotation(this.handle))}rotationWrtParent(){return Gt.fromRaw(this.colliderSet.raw.coRotationWrtParent(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(t){this.colliderSet.raw.coSetSensor(this.handle,t)}setShape(t){let e=t.intoRaw();this.colliderSet.raw.coSetShape(this.handle,e),e.free(),this._shape=t}setEnabled(t){this.colliderSet.raw.coSetEnabled(this.handle,t)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(t){this.colliderSet.raw.coSetRestitution(this.handle,t)}setFriction(t){this.colliderSet.raw.coSetFriction(this.handle,t)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(t){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,t)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(t){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,t)}setCollisionGroups(t){this.colliderSet.raw.coSetCollisionGroups(this.handle,t)}setSolverGroups(t){this.colliderSet.raw.coSetSolverGroups(this.handle,t)}contactSkin(){return this.colliderSet.raw.coContactSkin(this.handle)}setContactSkin(t){return this.colliderSet.raw.coSetContactSkin(this.handle,t)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(t){this.colliderSet.raw.coSetActiveHooks(this.handle,t)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(t){this.colliderSet.raw.coSetActiveEvents(this.handle,t)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(t){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,t)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(t){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,t)}setDensity(t){this.colliderSet.raw.coSetDensity(this.handle,t)}setMass(t){this.colliderSet.raw.coSetMass(this.handle,t)}setMassProperties(t,e,n,r){let s=O.intoRaw(e),a=O.intoRaw(n),o=Gt.intoRaw(r);this.colliderSet.raw.coSetMassProperties(this.handle,t,s,a,o),s.free(),a.free(),o.free()}setTranslation(t){this.colliderSet.raw.coSetTranslation(this.handle,t.x,t.y,t.z)}setTranslationWrtParent(t){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,t.x,t.y,t.z)}setRotation(t){this.colliderSet.raw.coSetRotation(this.handle,t.x,t.y,t.z,t.w)}setRotationWrtParent(t){this.colliderSet.raw.coSetRotationWrtParent(this.handle,t.x,t.y,t.z,t.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return O.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(t){const e=O.intoRaw(t);this.colliderSet.raw.coSetHalfExtents(this.handle,e)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(t){this.colliderSet.raw.coSetRadius(this.handle,t)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(t){this.colliderSet.raw.coSetRoundRadius(this.handle,t)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(t){this.colliderSet.raw.coSetHalfHeight(this.handle,t)}setVoxel(t,e,n,r){this.colliderSet.raw.coSetVoxel(this.handle,t,e,n,r),this._shape=null}propagateVoxelChange(t,e,n,r,s,a,o){this.colliderSet.raw.coPropagateVoxelChange(this.handle,t.handle,e,n,r,s,a,o),this._shape=null}combineVoxelStates(t,e,n,r){this.colliderSet.raw.coCombineVoxelStates(this.handle,t.handle,e,n,r),this._shape=null}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let t=this.colliderSet.raw.coHeightfieldScale(this.handle);return O.fromRaw(t)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(t){let e=O.intoRaw(t),n=this.colliderSet.raw.coContainsPoint(this.handle,e);return e.free(),n}projectPoint(t,e){let n=O.intoRaw(t),r=jr.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,n,e));return n.free(),r}intersectsRay(t,e){let n=O.intoRaw(t.origin),r=O.intoRaw(t.dir),s=this.colliderSet.raw.coIntersectsRay(this.handle,n,r,e);return n.free(),r.free(),s}castShape(t,e,n,r,s,a,o,c){let l=O.intoRaw(t),u=O.intoRaw(n),f=Gt.intoRaw(r),d=O.intoRaw(s),m=e.intoRaw(),w=pr.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,l,m,u,f,d,a,o,c));return l.free(),u.free(),f.free(),d.free(),m.free(),w}castCollider(t,e,n,r,s,a){let o=O.intoRaw(t),c=O.intoRaw(n),l=Xr.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,o,e.handle,c,r,s,a));return o.free(),c.free(),l}intersectsShape(t,e,n){let r=O.intoRaw(e),s=Gt.intoRaw(n),a=t.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,a,r,s);return r.free(),s.free(),a.free(),o}contactShape(t,e,n,r){let s=O.intoRaw(e),a=Gt.intoRaw(n),o=t.intoRaw(),c=or.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,s,a,r));return s.free(),a.free(),o.free(),c}contactCollider(t,e){return or.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,t.handle,e))}castRay(t,e,n){let r=O.intoRaw(t.origin),s=O.intoRaw(t.dir),a=this.colliderSet.raw.coCastRay(this.handle,r,s,e,n);return r.free(),s.free(),a}castRayAndGetNormal(t,e,n){let r=O.intoRaw(t.origin),s=O.intoRaw(t.dir),a=Wr.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,r,s,e,n));return r.free(),s.free(),a}}var Di;(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(Di||(Di={}));class Te{constructor(t){this.enabled=!0,this.shape=t,this.massPropsMode=Di.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=Gt.identity(),this.translation=O.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=Nr.Average,this.restitutionCombineRule=Nr.Average,this.activeCollisionTypes=Ws.DEFAULT,this.activeEvents=Vs.NONE,this.activeHooks=ks.NONE,this.mass=0,this.centerOfMass=O.zeros(),this.contactForceEventThreshold=0,this.contactSkin=0,this.principalAngularInertia=O.zeros(),this.angularInertiaLocalFrame=Gt.identity()}static ball(t){const e=new Ec(t);return new Te(e)}static capsule(t,e){const n=new Rc(t,e);return new Te(n)}static segment(t,e){const n=new Cc(t,e);return new Te(n)}static triangle(t,e,n){const r=new Pc(t,e,n);return new Te(r)}static roundTriangle(t,e,n,r){const s=new Ic(t,e,n,r);return new Te(s)}static polyline(t,e){const n=new Dc(t,e);return new Te(n)}static voxels(t,e){const n=new Lc(t,e);return new Te(n)}static trimesh(t,e,n){const r=new Fc(t,e,n);return new Te(r)}static cuboid(t,e,n){const r=new Tc(t,e,n);return new Te(r)}static roundCuboid(t,e,n,r){const s=new Ac(t,e,n,r);return new Te(s)}static heightfield(t,e,n,r,s){const a=new Uc(t,e,n,r,s);return new Te(a)}static cylinder(t,e){const n=new Nc(t,e);return new Te(n)}static roundCylinder(t,e,n){const r=new Oc(t,e,n);return new Te(r)}static cone(t,e){const n=new Bc(t,e);return new Te(n)}static roundCone(t,e,n){const r=new zc(t,e,n);return new Te(r)}static convexHull(t){const e=new Hs(t,null);return new Te(e)}static convexMesh(t,e){const n=new Hs(t,e);return new Te(n)}static roundConvexHull(t,e){const n=new Gs(t,null,e);return new Te(n)}static roundConvexMesh(t,e,n){const r=new Gs(t,e,n);return new Te(r)}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return Gt.copy(this.rotation,t),this}setSensor(t){return this.isSensor=t,this}setEnabled(t){return this.enabled=t,this}setContactSkin(t){return this.contactSkin=t,this}setDensity(t){return this.massPropsMode=Di.Density,this.density=t,this}setMass(t){return this.massPropsMode=Di.Mass,this.mass=t,this}setMassProperties(t,e,n,r){return this.massPropsMode=Di.MassProps,this.mass=t,O.copy(this.centerOfMass,e),O.copy(this.principalAngularInertia,n),Gt.copy(this.angularInertiaLocalFrame,r),this}setRestitution(t){return this.restitution=t,this}setFriction(t){return this.friction=t,this}setFrictionCombineRule(t){return this.frictionCombineRule=t,this}setRestitutionCombineRule(t){return this.restitutionCombineRule=t,this}setCollisionGroups(t){return this.collisionGroups=t,this}setSolverGroups(t){return this.solverGroups=t,this}setActiveHooks(t){return this.activeHooks=t,this}setActiveEvents(t){return this.activeEvents=t,this}setActiveCollisionTypes(t){return this.activeCollisionTypes=t,this}setContactForceEventThreshold(t){return this.contactForceEventThreshold=t,this}}class Bd{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new ve,this.map=new ra,t&&t.forEachColliderHandle(e=>{this.map.set(e,new vo(this,e,null))})}castClosure(t){return e=>{if(t)return t(this.get(e))}}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createCollider(t,e,n){let r=n!=null&&n!=null;if(r&&isNaN(n))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let s=e.shape.intoRaw(),a=O.intoRaw(e.translation),o=Gt.intoRaw(e.rotation),c=O.intoRaw(e.centerOfMass),l=O.intoRaw(e.principalAngularInertia),u=Gt.intoRaw(e.angularInertiaLocalFrame),f=this.raw.createCollider(e.enabled,s,a,o,e.massPropsMode,e.mass,c,l,u,e.density,e.friction,e.restitution,e.frictionCombineRule,e.restitutionCombineRule,e.isSensor,e.collisionGroups,e.solverGroups,e.activeCollisionTypes,e.activeHooks,e.activeEvents,e.contactForceEventThreshold,e.contactSkin,r,r?n:0,t.raw);s.free(),a.free(),o.free(),c.free(),l.free(),u.free();let d=r?t.get(n):null,m=new vo(this,f,d,e.shape);return this.map.set(f,m),m}remove(t,e,n,r){this.raw.remove(t,e.raw,n.raw,r),this.unmap(t)}unmap(t){this.map.delete(t)}get(t){return this.map.get(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}const Wn=Object.freeze(Object.defineProperty({__proto__:null,get ActiveCollisionTypes(){return Ws},get ActiveEvents(){return Vs},get ActiveHooks(){return ks},Ball:Ec,BroadPhase:Ad,CCDSolver:Ed,Capsule:Rc,CharacterCollision:Fd,get CoefficientCombineRule(){return Nr},Collider:vo,ColliderDesc:Te,ColliderSet:Bd,ColliderShapeCastHit:Xr,Cone:Bc,ConvexPolyhedron:Hs,Cuboid:Tc,Cylinder:Nc,DebugRenderBuffers:Dd,DebugRenderPipeline:Ld,DynamicRayCastVehicleController:Od,get FeatureType(){return ar},FixedImpulseJoint:ud,FixedMultibodyJoint:vd,GenericImpulseJoint:gd,HalfSpace:Pd,get HeightFieldFlags(){return po},Heightfield:Uc,ImpulseJoint:vn,ImpulseJointSet:bd,IntegrationParameters:dd,IslandManager:Td,get JointAxesMask(){return _o},get JointType(){return uo},KinematicCharacterController:Ud,get MassPropsMode(){return Di},get MotorModel(){return fo},MultibodyJoint:wi,MultibodyJointSet:Md,NarrowPhase:Rd,PhysicsPipeline:Id,get PidAxesMask(){return wo},PidController:Nd,PointColliderProjection:Br,PointProjection:jr,Polyline:Dc,PrismaticImpulseJoint:pd,PrismaticMultibodyJoint:xd,Quaternion:co,RayColliderHit:sa,RayColliderIntersection:Or,RayIntersection:Wr,RevoluteImpulseJoint:md,RevoluteMultibodyJoint:yd,RigidBody:ho,RigidBodyDesc:En,RigidBodySet:hd,get RigidBodyType(){return pn},RopeImpulseJoint:fd,RotationOps:Gt,RoundCone:zc,RoundConvexPolyhedron:Gs,RoundCuboid:Ac,RoundCylinder:Oc,RoundTriangle:Ic,SdpMatrix3:ld,SdpMatrix3Ops:lo,Segment:Cc,SerializationPipeline:go,Shape:Ie,ShapeCastHit:pr,ShapeContact:or,get ShapeType(){return Ae},get SolverFlags(){return bo},SphericalImpulseJoint:wd,SphericalMultibodyJoint:Sd,SpringImpulseJoint:_d,TempContactManifold:Cd,TriMesh:Fc,get TriMeshFlags(){return mo},Triangle:Pc,UnitImpulseJoint:Sc,UnitMultibodyJoint:Mc,Vector3:cd,VectorOps:O,Voxels:Lc,World:aa},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hc="183",zy=0,jl=1,Hy=2,Is=1,zd=2,Ir=3,bi=0,tn=1,gn=2,Xn=0,rr=1,Xl=2,ql=3,Yl=4,Gy=5,Pi=100,Vy=101,ky=102,Wy=103,jy=104,Xy=200,qy=201,Yy=202,Ky=203,xo=204,yo=205,Jy=206,$y=207,Zy=208,Qy=209,tS=210,eS=211,nS=212,iS=213,rS=214,So=0,Mo=1,Eo=2,cr=3,To=4,Ao=5,Ro=6,Co=7,Hd=0,sS=1,aS=2,bn=0,Gd=1,Vd=2,kd=3,Wd=4,jd=5,Xd=6,qd=7,Yd=300,Ni=301,lr=302,Ta=303,Aa=304,oa=306,Po=1e3,jn=1001,Io=1002,De=1003,oS=1004,ns=1005,He=1006,Ra=1007,fi=1008,sn=1009,Kd=1010,Jd=1011,zr=1012,Gc=1013,Dn=1014,An=1015,Qn=1016,Vc=1017,kc=1018,Hr=1020,$d=35902,Zd=35899,Qd=1021,tu=1022,wn=1023,ti=1026,Li=1027,Wc=1028,jc=1029,hr=1030,Xc=1031,qc=1033,Ds=33776,Ls=33777,Fs=33778,Us=33779,Do=35840,Lo=35841,Fo=35842,Uo=35843,No=36196,Oo=37492,Bo=37496,zo=37488,Ho=37489,Go=37490,Vo=37491,ko=37808,Wo=37809,jo=37810,Xo=37811,qo=37812,Yo=37813,Ko=37814,Jo=37815,$o=37816,Zo=37817,Qo=37818,tc=37819,ec=37820,nc=37821,ic=36492,rc=36494,sc=36495,ac=36283,oc=36284,cc=36285,lc=36286,cS=3200,Yc=0,lS=1,di="",Ze="srgb",dr="srgb-linear",js="linear",oe="srgb",Wi=7680,Kl=519,hS=512,dS=513,uS=514,Kc=515,fS=516,_S=517,Jc=518,pS=519,Jl=35044,$l="300 es",Rn=2e3,Gr=2001;function mS(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gS(){const i=Xs("canvas");return i.style.display="block",i}const Zl={};function Ql(...i){const t="THREE."+i.shift();console.log(t,...i)}function eu(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=eu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=eu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function qs(...i){const t=i.join(" ");t in Zl||(Zl[t]=!0,Ut(...i))}function wS(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const bS={[So]:Mo,[Eo]:Ro,[To]:Co,[cr]:Ao,[Mo]:So,[Ro]:Eo,[Co]:To,[Ao]:cr};class mr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ns=Math.PI/180,hc=180/Math.PI;function qr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function vS(i,t){return(i%t+t)%t}function Ca(i,t,e){return(1-e)*i+e*t}function Sr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3],d=s[a+0],m=s[a+1],w=s[a+2],y=s[a+3];if(f!==y||c!==d||l!==m||u!==w){let g=c*d+l*m+u*w+f*y;g<0&&(d=-d,m=-m,w=-w,y=-y,g=-g);let p=1-o;if(g<.9995){const x=Math.acos(g),T=Math.sin(x);p=Math.sin(p*x)/T,o=Math.sin(o*x)/T,c=c*p+d*o,l=l*p+m*o,u=u*p+w*o,f=f*p+y*o}else{c=c*p+d*o,l=l*p+m*o,u=u*p+w*o,f=f*p+y*o;const x=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=x,l*=x,u*=x,f*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],d=s[a+1],m=s[a+2],w=s[a+3];return t[e]=o*w+u*f+c*m-l*d,t[e+1]=c*w+u*d+l*f-o*m,t[e+2]=l*w+u*m+o*d-c*f,t[e+3]=u*w-o*f-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),d=c(n/2),m=c(r/2),w=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*m*w,this._y=l*m*f-d*u*w,this._z=l*u*w+d*m*f,this._w=l*u*f-d*m*w;break;case"YXZ":this._x=d*u*f+l*m*w,this._y=l*m*f-d*u*w,this._z=l*u*w-d*m*f,this._w=l*u*f+d*m*w;break;case"ZXY":this._x=d*u*f-l*m*w,this._y=l*m*f+d*u*w,this._z=l*u*w+d*m*f,this._w=l*u*f-d*m*w;break;case"ZYX":this._x=d*u*f-l*m*w,this._y=l*m*f+d*u*w,this._z=l*u*w-d*m*f,this._w=l*u*f+d*m*w;break;case"YZX":this._x=d*u*f+l*m*w,this._y=l*m*f+d*u*w,this._z=l*u*w-d*m*f,this._w=l*u*f-d*m*w;break;case"XZY":this._x=d*u*f-l*m*w,this._y=l*m*f-d*u*w,this._z=l*u*w+d*m*f,this._w=l*u*f+d*m*w;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(th.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new F,th=new Bi;class Ht{constructor(t,e,n,r,s,a,o,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],m=n[5],w=n[8],y=r[0],g=r[3],p=r[6],x=r[1],T=r[4],E=r[7],P=r[2],R=r[5],I=r[8];return s[0]=a*y+o*x+c*P,s[3]=a*g+o*T+c*R,s[6]=a*p+o*E+c*I,s[1]=l*y+u*x+f*P,s[4]=l*g+u*T+f*R,s[7]=l*p+u*E+f*I,s[2]=d*y+m*x+w*P,s[5]=d*g+m*T+w*R,s[8]=d*p+m*E+w*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,d=o*c-u*s,m=l*s-a*c,w=e*f+n*d+r*m;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/w;return t[0]=f*y,t[1]=(r*l-u*n)*y,t[2]=(o*n-r*a)*y,t[3]=d*y,t[4]=(u*e-r*c)*y,t[5]=(r*s-o*e)*y,t[6]=m*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ia.makeScale(t,e)),this}rotate(t){return this.premultiply(Ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new Ht,eh=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xS(){const i={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===oe&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===di?js:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dr]:{primaries:t,whitePoint:n,transfer:js,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),i}const Qt=xS();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class yS{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ji===void 0&&(ji=Xs("canvas")),ji.width=t.width,ji.height=t.height;const r=ji.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let SS=0;class $c{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Da(r[a].image)):s.push(Da(r[a]))}else s=Da(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let MS=0;const La=new F;class Xe extends mr{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=jn,r=jn,s=He,a=fi,o=wn,c=sn,l=Xe.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=qr(),this.name="",this.source=new $c(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Po:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Po:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Yd;Xe.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,r=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],w=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(w-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(w+g)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,E=(m+1)/2,P=(p+1)/2,R=(u+d)/4,I=(f+y)/4,v=(w+g)/4;return T>E&&T>P?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=R/n,s=I/n):E>P?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=R/r,s=v/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=I/s,r=v/s),this.set(n,r,s,e),this}let x=Math.sqrt((g-w)*(g-w)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-w)/x,this.y=(f-y)/x,this.z=(d-u)/x,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ES extends mr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new Xe(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new $c(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends ES{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nu extends Xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class TS extends Xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xe{constructor(t,e,n,r,s,a,o,c,l,u,f,d,m,w,y,g){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,u,f,d,m,w,y,g)}set(t,e,n,r,s,a,o,c,l,u,f,d,m,w,y,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=m,p[7]=w,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Xi.setFromMatrixColumn(t,0).length(),s=1/Xi.setFromMatrixColumn(t,1).length(),a=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*u,m=a*f,w=o*u,y=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=m+w*l,e[5]=d-y*l,e[9]=-o*c,e[2]=y-d*l,e[6]=w+m*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,m=c*f,w=l*u,y=l*f;e[0]=d+y*o,e[4]=w*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=m*o-w,e[6]=y+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,m=c*f,w=l*u,y=l*f;e[0]=d-y*o,e[4]=-a*f,e[8]=w+m*o,e[1]=m+w*o,e[5]=a*u,e[9]=y-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,m=a*f,w=o*u,y=o*f;e[0]=c*u,e[4]=w*l-m,e[8]=d*l+y,e[1]=c*f,e[5]=y*l+d,e[9]=m*l-w,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,w=o*c,y=o*l;e[0]=c*u,e[4]=y-d*f,e[8]=w*f+m,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*f+w,e[10]=d-y*f}else if(t.order==="XZY"){const d=a*c,m=a*l,w=o*c,y=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+y,e[5]=a*u,e[9]=m*f-w,e[2]=w*f-m,e[6]=o*u,e[10]=y*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(AS,t,RS)}lookAt(t,e,n){const r=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),si.crossVectors(n,nn),si.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),si.crossVectors(n,nn)),si.normalize(),is.crossVectors(nn,si),r[0]=si.x,r[4]=is.x,r[8]=nn.x,r[1]=si.y,r[5]=is.y,r[9]=nn.y,r[2]=si.z,r[6]=is.z,r[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],m=n[13],w=n[2],y=n[6],g=n[10],p=n[14],x=n[3],T=n[7],E=n[11],P=n[15],R=r[0],I=r[4],v=r[8],M=r[12],V=r[1],D=r[5],H=r[9],k=r[13],Y=r[2],X=r[6],G=r[10],q=r[14],rt=r[3],et=r[7],mt=r[11],at=r[15];return s[0]=a*R+o*V+c*Y+l*rt,s[4]=a*I+o*D+c*X+l*et,s[8]=a*v+o*H+c*G+l*mt,s[12]=a*M+o*k+c*q+l*at,s[1]=u*R+f*V+d*Y+m*rt,s[5]=u*I+f*D+d*X+m*et,s[9]=u*v+f*H+d*G+m*mt,s[13]=u*M+f*k+d*q+m*at,s[2]=w*R+y*V+g*Y+p*rt,s[6]=w*I+y*D+g*X+p*et,s[10]=w*v+y*H+g*G+p*mt,s[14]=w*M+y*k+g*q+p*at,s[3]=x*R+T*V+E*Y+P*rt,s[7]=x*I+T*D+E*X+P*et,s[11]=x*v+T*H+E*G+P*mt,s[15]=x*M+T*k+E*q+P*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],m=t[14],w=t[3],y=t[7],g=t[11],p=t[15],x=c*m-l*d,T=o*m-l*f,E=o*d-c*f,P=a*m-l*u,R=a*d-c*u,I=a*f-o*u;return e*(y*x-g*T+p*E)-n*(w*x-g*P+p*R)+r*(w*T-y*P+p*I)-s*(w*E-y*R+g*I)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],m=t[11],w=t[12],y=t[13],g=t[14],p=t[15],x=e*o-n*a,T=e*c-r*a,E=e*l-s*a,P=n*c-r*o,R=n*l-s*o,I=r*l-s*c,v=u*y-f*w,M=u*g-d*w,V=u*p-m*w,D=f*g-d*y,H=f*p-m*y,k=d*p-m*g,Y=x*k-T*H+E*D+P*V-R*M+I*v;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/Y;return t[0]=(o*k-c*H+l*D)*X,t[1]=(r*H-n*k-s*D)*X,t[2]=(y*I-g*R+p*P)*X,t[3]=(d*R-f*I-m*P)*X,t[4]=(c*V-a*k-l*M)*X,t[5]=(e*k-r*V+s*M)*X,t[6]=(g*E-w*I-p*T)*X,t[7]=(u*I-d*E+m*T)*X,t[8]=(a*H-o*V+l*v)*X,t[9]=(n*V-e*H-s*v)*X,t[10]=(w*R-y*E+p*x)*X,t[11]=(f*E-u*R-m*x)*X,t[12]=(o*M-a*D-c*v)*X,t[13]=(e*D-n*M+r*v)*X,t[14]=(y*T-w*P-g*x)*X,t[15]=(u*P-f*T+d*x)*X,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,f=o+o,d=s*l,m=s*u,w=s*f,y=a*u,g=a*f,p=o*f,x=c*l,T=c*u,E=c*f,P=n.x,R=n.y,I=n.z;return r[0]=(1-(y+p))*P,r[1]=(m+E)*P,r[2]=(w-T)*P,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(d+p))*R,r[6]=(g+x)*R,r[7]=0,r[8]=(w+T)*I,r[9]=(g-x)*I,r[10]=(1-(d+y))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Xi.set(r[0],r[1],r[2]).length();const o=Xi.set(r[4],r[5],r[6]).length(),c=Xi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),dn.copy(this);const l=1/a,u=1/o,f=1/c;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=f,dn.elements[9]*=f,dn.elements[10]*=f,e.setFromRotationMatrix(dn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,r,s,a,o=Rn,c=!1){const l=this.elements,u=2*s/(e-t),f=2*s/(n-r),d=(e+t)/(e-t),m=(n+r)/(n-r);let w,y;if(c)w=s/(a-s),y=a*s/(a-s);else if(o===Rn)w=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Gr)w=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=w,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Rn,c=!1){const l=this.elements,u=2/(e-t),f=2/(n-r),d=-(e+t)/(e-t),m=-(n+r)/(n-r);let w,y;if(c)w=1/(a-s),y=a/(a-s);else if(o===Rn)w=-2/(a-s),y=-(a+s)/(a-s);else if(o===Gr)w=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=w,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xi=new F,dn=new xe,AS=new F(0,0,0),RS=new F(1,1,1),si=new F,is=new F,nn=new F,ih=new xe,rh=new Bi;class Ln{constructor(t=0,e=0,n=0,r=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rh.setFromEuler(this),this.setFromQuaternion(rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class iu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let CS=0;const sh=new F,qi=new Bi,zn=new xe,rs=new F,Mr=new F,PS=new F,IS=new Bi,ah=new F(1,0,0),oh=new F(0,1,0),ch=new F(0,0,1),lh={type:"added"},DS={type:"removed"},Yi={type:"childadded",child:null},Fa={type:"childremoved",child:null};class Ve extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new F,e=new Ln,n=new Bi,r=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xe},normalMatrix:{value:new Ht}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(ah,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(ch,t)}translateOnAxis(t,e){return sh.copy(t).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ah,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rs.copy(t):rs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Mr,rs,this.up):zn.lookAt(rs,Mr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),qi.setFromRotationMatrix(zn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lh),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(DS),Fa.child=t,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lh),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,PS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,IS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),w=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),w.length>0&&(n.nodes=w)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ve.DEFAULT_UP=new F(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ss extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LS={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const y of t.hand.values()){const g=e.getJointPose(y,n),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,w=.005;l.inputState.pinching&&d>m+w?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-w&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(LS)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ss;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},as={h:0,s:0,l:0};function Na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=vS(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Na(a,s,t+1/3),this.g=Na(a,s,t),this.b=Na(a,s,t-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(t,e=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Qt.workingToColorSpace(je.copy(this),t),Math.round($t(je.r*255,0,255))*65536+Math.round($t(je.g*255,0,255))*256+Math.round($t(je.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(je.copy(this),e);const n=je.r,r=je.g,s=je.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Ze){Qt.workingToColorSpace(je.copy(this),t);const e=je.r,n=je.g,r=je.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(as);const n=Ca(ai.h,as.h,e),r=Ca(ai.s,as.s,e),s=Ca(ai.l,as.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Wt;Wt.NAMES=ru;class FS extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const un=new F,Hn=new F,Oa=new F,Gn=new F,Ki=new F,Ji=new F,hh=new F,Ba=new F,za=new F,Ha=new F,Ga=new Se,Va=new Se,ka=new Se;class cn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){un.subVectors(r,e),Hn.subVectors(n,e),Oa.subVectors(t,e);const a=un.dot(un),o=un.dot(Hn),c=un.dot(Oa),l=Hn.dot(Hn),u=Hn.dot(Oa),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*u)*d,w=(a*u-o*c)*d;return s.set(1-m-w,w,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Ga.setScalar(0),Va.setScalar(0),ka.setScalar(0),Ga.fromBufferAttribute(t,e),Va.fromBufferAttribute(t,n),ka.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ga,s.x),a.addScaledVector(Va,s.y),a.addScaledVector(ka,s.z),a}static isFrontFacing(t,e,n,r){return un.subVectors(n,e),Hn.subVectors(t,e),un.cross(Hn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),un.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Ki.subVectors(r,n),Ji.subVectors(s,n),Ba.subVectors(t,n);const c=Ki.dot(Ba),l=Ji.dot(Ba);if(c<=0&&l<=0)return e.copy(n);za.subVectors(t,r);const u=Ki.dot(za),f=Ji.dot(za);if(u>=0&&f<=u)return e.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Ki,a);Ha.subVectors(t,s);const m=Ki.dot(Ha),w=Ji.dot(Ha);if(w>=0&&m<=w)return e.copy(s);const y=m*l-c*w;if(y<=0&&l>=0&&w<=0)return o=l/(l-w),e.copy(n).addScaledVector(Ji,o);const g=u*w-m*f;if(g<=0&&f-u>=0&&m-w>=0)return hh.subVectors(s,r),o=(f-u)/(f-u+(m-w)),e.copy(r).addScaledVector(hh,o);const p=1/(g+y+d);return a=y*p,o=d*p,e.copy(n).addScaledVector(Ki,a).addScaledVector(Ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Yr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(s,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),cs.subVectors(this.max,Er),$i.subVectors(t.a,Er),Zi.subVectors(t.b,Er),Qi.subVectors(t.c,Er),oi.subVectors(Zi,$i),ci.subVectors(Qi,Zi),Si.subVectors($i,Qi);let e=[0,-oi.z,oi.y,0,-ci.z,ci.y,0,-Si.z,Si.y,oi.z,0,-oi.x,ci.z,0,-ci.x,Si.z,0,-Si.x,-oi.y,oi.x,0,-ci.y,ci.x,0,-Si.y,Si.x,0];return!Wa(e,$i,Zi,Qi,cs)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,$i,Zi,Qi,cs))?!1:(ls.crossVectors(oi,ci),e=[ls.x,ls.y,ls.z],Wa(e,$i,Zi,Qi,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vn=[new F,new F,new F,new F,new F,new F,new F,new F],fn=new F,os=new Yr,$i=new F,Zi=new F,Qi=new F,oi=new F,ci=new F,Si=new F,Er=new F,cs=new F,ls=new F,Mi=new F;function Wa(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Mi.fromArray(i,s);const o=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),c=t.dot(Mi),l=e.dot(Mi),u=n.dot(Mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ce=new F,hs=new Yt;let US=0;class Pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:US++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hs.fromBufferAttribute(this,e),hs.applyMatrix3(t),this.setXY(e,hs.x,hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jl&&(t.usage=this.usage),t}}class su extends Pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class au extends Pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class be extends Pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const NS=new Yr,Tr=new F,ja=new F;class ca{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):NS.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);const e=Tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Tr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(ja)),this.expandByPoint(Tr.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let OS=0;const an=new xe,Xa=new Ve,tr=new F,rn=new Yr,Ar=new Yr,Be=new F;class Je extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mS(t)?au:su)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(rn.min,Ar.min),rn.expandByPoint(Be),Be.addVectors(rn.max,Ar.max),rn.expandByPoint(Be)):(rn.expandByPoint(Ar.min),rn.expandByPoint(Ar.max))}rn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Be.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Be));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Be.fromBufferAttribute(o,l),c&&(tr.fromBufferAttribute(t,l),Be.add(tr)),r=Math.max(r,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new F,c[v]=new F;const l=new F,u=new F,f=new F,d=new Yt,m=new Yt,w=new Yt,y=new F,g=new F;function p(v,M,V){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,V),d.fromBufferAttribute(s,v),m.fromBufferAttribute(s,M),w.fromBufferAttribute(s,V),u.sub(l),f.sub(l),m.sub(d),w.sub(d);const D=1/(m.x*w.y-w.x*m.y);isFinite(D)&&(y.copy(u).multiplyScalar(w.y).addScaledVector(f,-m.y).multiplyScalar(D),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-w.x).multiplyScalar(D),o[v].add(y),o[M].add(y),o[V].add(y),c[v].add(g),c[M].add(g),c[V].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let v=0,M=x.length;v<M;++v){const V=x[v],D=V.start,H=V.count;for(let k=D,Y=D+H;k<Y;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const T=new F,E=new F,P=new F,R=new F;function I(v){P.fromBufferAttribute(r,v),R.copy(P);const M=o[v];T.copy(M),T.sub(P.multiplyScalar(P.dot(M))).normalize(),E.crossVectors(R,M);const D=E.dot(c[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,D)}for(let v=0,M=x.length;v<M;++v){const V=x[v],D=V.start,H=V.count;for(let k=D,Y=D+H;k<Y;k+=3)I(t.getX(k+0)),I(t.getX(k+1)),I(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,u=new F,f=new F;if(t)for(let d=0,m=t.count;d<m;d+=3){const w=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);r.fromBufferAttribute(e,w),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,w),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(w,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let m=0,w=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*u;for(let p=0;p<u;p++)d[w++]=l[m++]}return new Pn(d,u,f)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=t(d,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let BS=0;class zi extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=rr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=yo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const kn=new F,qa=new F,ds=new F,li=new F,Ya=new F,us=new F,Ka=new F;class ou{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){qa.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),li.copy(this.origin).sub(qa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ds),o=li.dot(this.direction),c=-li.dot(ds),l=li.lengthSq(),u=Math.abs(1-a*a);let f,d,m,w;if(u>0)if(f=a*c-o,d=a*o-c,w=s*u,f>=0)if(d>=-w)if(d<=w){const y=1/u;f*=y,d*=y,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-w?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=w?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qa).addScaledVector(ds,d),m}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),r=kn.dot(kn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,r,s){Ya.subVectors(e,t),us.subVectors(n,t),Ka.crossVectors(Ya,us);let a=this.direction.dot(Ka),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,t);const c=o*this.direction.dot(us.crossVectors(li,us));if(c<0)return null;const l=o*this.direction.dot(Ya.cross(li));if(l<0||c+l>a)return null;const u=-o*li.dot(Ka);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cu extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dh=new xe,Ei=new ou,fs=new ca,uh=new F,_s=new F,ps=new F,ms=new F,Ja=new F,gs=new F,fh=new F,ws=new F;class Qe extends Ve{constructor(t=new Je,e=new cu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){gs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Ja.fromBufferAttribute(f,t),a?gs.addScaledVector(Ja,u):gs.addScaledVector(Ja.sub(e),u))}e.add(gs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(s),Ei.copy(t.ray).recast(t.near),!(fs.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(fs,uh)===null||Ei.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(dh.copy(s).invert(),Ei.copy(t.ray).applyMatrix4(dh),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let w=0,y=d.length;w<y;w++){const g=d[w],p=a[g.materialIndex],x=Math.max(g.start,m.start),T=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let E=x,P=T;E<P;E+=3){const R=o.getX(E),I=o.getX(E+1),v=o.getX(E+2);r=bs(this,p,t,n,l,u,f,R,I,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const w=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let g=w,p=y;g<p;g+=3){const x=o.getX(g),T=o.getX(g+1),E=o.getX(g+2);r=bs(this,a,t,n,l,u,f,x,T,E),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let w=0,y=d.length;w<y;w++){const g=d[w],p=a[g.materialIndex],x=Math.max(g.start,m.start),T=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let E=x,P=T;E<P;E+=3){const R=E,I=E+1,v=E+2;r=bs(this,p,t,n,l,u,f,R,I,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const w=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let g=w,p=y;g<p;g+=3){const x=g,T=g+1,E=g+2;r=bs(this,a,t,n,l,u,f,x,T,E),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function zS(i,t,e,n,r,s,a,o){let c;if(t.side===tn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===bi,o),c===null)return null;ws.copy(o),ws.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ws);return l<e.near||l>e.far?null:{distance:l,point:ws.clone(),object:i}}function bs(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,_s),i.getVertexPosition(c,ps),i.getVertexPosition(l,ms);const u=zS(i,t,e,n,_s,ps,ms,fh);if(u){const f=new F;cn.getBarycoord(fh,_s,ps,ms,f),r&&(u.uv=cn.getInterpolatedAttribute(r,o,c,l,f,new Yt)),s&&(u.uv1=cn.getInterpolatedAttribute(s,o,c,l,f,new Yt)),a&&(u.normal=cn.getInterpolatedAttribute(a,o,c,l,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new F,materialIndex:0};cn.getNormal(_s,ps,ms,d.normal),u.face=d,u.barycoord=f}return u}class lu extends Xe{constructor(t=null,e=1,n=1,r,s,a,o,c,l=De,u=De,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $a=new F,HS=new F,GS=new Ht;class Ci{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=$a.subVectors(n,e).cross(HS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($a),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||GS.getNormalMatrix(t),r=this.coplanarPoint($a).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new ca,VS=new Yt(.5,.5),vs=new F;class Zc{constructor(t=new Ci,e=new Ci,n=new Ci,r=new Ci,s=new Ci,a=new Ci){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],m=s[7],w=s[8],y=s[9],g=s[10],p=s[11],x=s[12],T=s[13],E=s[14],P=s[15];if(r[0].setComponents(l-a,m-u,p-w,P-x).normalize(),r[1].setComponents(l+a,m+u,p+w,P+x).normalize(),r[2].setComponents(l+o,m+f,p+y,P+T).normalize(),r[3].setComponents(l-o,m-f,p-y,P-T).normalize(),n)r[4].setComponents(c,d,g,E).normalize(),r[5].setComponents(l-c,m-d,p-g,P-E).normalize();else if(r[4].setComponents(l-c,m-d,p-g,P-E).normalize(),e===Rn)r[5].setComponents(l+c,m+d,p+g,P+E).normalize();else if(e===Gr)r[5].setComponents(c,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);const e=VS.distanceTo(t.center);return Ti.radius=.7071067811865476+e,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(vs.x=r.normal.x>0?t.max.x:t.min.x,vs.y=r.normal.y>0?t.max.y:t.min.y,vs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hu extends zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ys=new F,Ks=new F,_h=new xe,Rr=new ou,xs=new ca,Za=new F,ph=new F;class kS extends Ve{constructor(t=new Je,e=new hu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ys.fromBufferAttribute(e,r-1),Ks.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ys.distanceTo(Ks);t.setAttribute("lineDistance",new be(n,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),xs.radius+=s,t.ray.intersectsSphere(xs)===!1)return;_h.copy(r).invert(),Rr.copy(t.ray).applyMatrix4(_h);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),w=Math.min(u.count,a.start+a.count);for(let y=m,g=w-1;y<g;y+=l){const p=u.getX(y),x=u.getX(y+1),T=ys(this,t,Rr,c,p,x,y);T&&e.push(T)}if(this.isLineLoop){const y=u.getX(w-1),g=u.getX(m),p=ys(this,t,Rr,c,y,g,w-1);p&&e.push(p)}}else{const m=Math.max(0,a.start),w=Math.min(d.count,a.start+a.count);for(let y=m,g=w-1;y<g;y+=l){const p=ys(this,t,Rr,c,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){const y=ys(this,t,Rr,c,w-1,m,w-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ys(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(Ys.fromBufferAttribute(o,r),Ks.fromBufferAttribute(o,s),e.distanceSqToSegment(Ys,Ks,Za,ph)>n)return;Za.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Za);if(!(l<t.near||l>t.far))return{distance:l,point:ph.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const mh=new F,gh=new F;class WS extends kS{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)mh.fromBufferAttribute(e,r),gh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+mh.distanceTo(gh);t.setAttribute("lineDistance",new be(n,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class du extends Xe{constructor(t=[],e=Ni,n,r,s,a,o,c,l,u){super(t,e,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jS extends Xe{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vr extends Xe{constructor(t,e,n=Dn,r,s,a,o=De,c=De,l,u=ti,f=1){if(u!==ti&&u!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $c(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class XS extends Vr{constructor(t,e=Dn,n=Ni,r,s,a=De,o=De,c,l=ti){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class uu extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gr extends Je{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,m=0;w("z","y","x",-1,-1,n,e,t,a,s,0),w("z","y","x",1,-1,n,e,-t,a,s,1),w("x","z","y",1,1,t,n,e,r,a,2),w("x","z","y",1,-1,t,n,-e,r,a,3),w("x","y","z",1,-1,t,e,n,r,s,4),w("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(f,2));function w(y,g,p,x,T,E,P,R,I,v,M){const V=E/I,D=P/v,H=E/2,k=P/2,Y=R/2,X=I+1,G=v+1;let q=0,rt=0;const et=new F;for(let mt=0;mt<G;mt++){const at=mt*D-k;for(let lt=0;lt<X;lt++){const Ct=lt*V-H;et[y]=Ct*x,et[g]=at*T,et[p]=Y,l.push(et.x,et.y,et.z),et[y]=0,et[g]=0,et[p]=R>0?1:-1,u.push(et.x,et.y,et.z),f.push(lt/I),f.push(1-mt/v),q+=1}}for(let mt=0;mt<v;mt++)for(let at=0;at<I;at++){const lt=d+at+X*mt,Ct=d+at+X*(mt+1),ne=d+(at+1)+X*(mt+1),re=d+(at+1)+X*mt;c.push(lt,Ct,re),c.push(Ct,ne,re),rt+=6}o.addGroup(m,rt,M),m+=rt,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Qc extends Je{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new F,u=new Yt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const m=n+f/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(o,3)),this.setAttribute("uv",new be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Js extends Je{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],m=[];let w=0;const y=[],g=n/2;let p=0;x(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(m,2));function x(){const E=new F,P=new F;let R=0;const I=(e-t)/n;for(let v=0;v<=s;v++){const M=[],V=v/s,D=V*(e-t)+t;for(let H=0;H<=r;H++){const k=H/r,Y=k*c+o,X=Math.sin(Y),G=Math.cos(Y);P.x=D*X,P.y=-V*n+g,P.z=D*G,f.push(P.x,P.y,P.z),E.set(X,I,G).normalize(),d.push(E.x,E.y,E.z),m.push(k,1-V),M.push(w++)}y.push(M)}for(let v=0;v<r;v++)for(let M=0;M<s;M++){const V=y[M][v],D=y[M+1][v],H=y[M+1][v+1],k=y[M][v+1];(t>0||M!==0)&&(u.push(V,D,k),R+=3),(e>0||M!==s-1)&&(u.push(D,H,k),R+=3)}l.addGroup(p,R,0),p+=R}function T(E){const P=w,R=new Yt,I=new F;let v=0;const M=E===!0?t:e,V=E===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,g*V,0),d.push(0,V,0),m.push(.5,.5),w++;const D=w;for(let H=0;H<=r;H++){const Y=H/r*c+o,X=Math.cos(Y),G=Math.sin(Y);I.x=M*G,I.y=g*V,I.z=M*X,f.push(I.x,I.y,I.z),d.push(0,V,0),R.x=X*.5+.5,R.y=G*.5*V+.5,m.push(R.x,R.y),w++}for(let H=0;H<r;H++){const k=P+H,Y=D+H;E===!0?u.push(Y,Y+1,k):u.push(Y+1,Y,k),v+=3}l.addGroup(p,v,E===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wr extends Je{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new be(s,3)),this.setAttribute("normal",new be(s.slice(),3)),this.setAttribute("uv",new be(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const T=new F,E=new F,P=new F;for(let R=0;R<e.length;R+=3)m(e[R+0],T),m(e[R+1],E),m(e[R+2],P),c(T,E,P,x)}function c(x,T,E,P){const R=P+1,I=[];for(let v=0;v<=R;v++){I[v]=[];const M=x.clone().lerp(E,v/R),V=T.clone().lerp(E,v/R),D=R-v;for(let H=0;H<=D;H++)H===0&&v===R?I[v][H]=M:I[v][H]=M.clone().lerp(V,H/D)}for(let v=0;v<R;v++)for(let M=0;M<2*(R-v)-1;M++){const V=Math.floor(M/2);M%2===0?(d(I[v][V+1]),d(I[v+1][V]),d(I[v][V])):(d(I[v][V+1]),d(I[v+1][V+1]),d(I[v+1][V]))}}function l(x){const T=new F;for(let E=0;E<s.length;E+=3)T.x=s[E+0],T.y=s[E+1],T.z=s[E+2],T.normalize().multiplyScalar(x),s[E+0]=T.x,s[E+1]=T.y,s[E+2]=T.z}function u(){const x=new F;for(let T=0;T<s.length;T+=3){x.x=s[T+0],x.y=s[T+1],x.z=s[T+2];const E=g(x)/2/Math.PI+.5,P=p(x)/Math.PI+.5;a.push(E,1-P)}w(),f()}function f(){for(let x=0;x<a.length;x+=6){const T=a[x+0],E=a[x+2],P=a[x+4],R=Math.max(T,E,P),I=Math.min(T,E,P);R>.9&&I<.1&&(T<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),P<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function m(x,T){const E=x*3;T.x=t[E+0],T.y=t[E+1],T.z=t[E+2]}function w(){const x=new F,T=new F,E=new F,P=new F,R=new Yt,I=new Yt,v=new Yt;for(let M=0,V=0;M<s.length;M+=9,V+=6){x.set(s[M+0],s[M+1],s[M+2]),T.set(s[M+3],s[M+4],s[M+5]),E.set(s[M+6],s[M+7],s[M+8]),R.set(a[V+0],a[V+1]),I.set(a[V+2],a[V+3]),v.set(a[V+4],a[V+5]),P.copy(x).add(T).add(E).divideScalar(3);const D=g(P);y(R,V+0,x,D),y(I,V+2,T,D),y(v,V+4,E,D)}}function y(x,T,E,P){P<0&&x.x===1&&(a[T]=x.x-1),E.x===0&&E.z===0&&(a[T]=P/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.vertices,t.indices,t.radius,t.detail)}}class tl extends wr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tl(t.radius,t.detail)}}const Ss=new F,Ms=new F,Qa=new F,Es=new cn;class qS extends Je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Ns*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),d={},m=[];for(let w=0;w<c;w+=3){a?(l[0]=a.getX(w),l[1]=a.getX(w+1),l[2]=a.getX(w+2)):(l[0]=w,l[1]=w+1,l[2]=w+2);const{a:y,b:g,c:p}=Es;if(y.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Es.getNormal(Qa),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const T=(x+1)%3,E=f[x],P=f[T],R=Es[u[x]],I=Es[u[T]],v=`${E}_${P}`,M=`${P}_${E}`;M in d&&d[M]?(Qa.dot(d[M].normal)<=s&&(m.push(R.x,R.y,R.z),m.push(I.x,I.y,I.z)),d[M]=null):v in d||(d[v]={index0:l[x],index1:l[T],normal:Qa.clone()})}}for(const w in d)if(d[w]){const{index0:y,index1:g}=d[w];Ss.fromBufferAttribute(o,y),Ms.fromBufferAttribute(o,g),m.push(Ss.x,Ss.y,Ss.z),m.push(Ms.x,Ms.y,Ms.z)}this.setAttribute("position",new be(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class el extends wr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new el(t.radius,t.detail)}}class nl extends wr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nl(t.radius,t.detail)}}class la extends Je{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=t/o,d=e/c,m=[],w=[],y=[],g=[];for(let p=0;p<u;p++){const x=p*d-a;for(let T=0;T<l;T++){const E=T*f-s;w.push(E,-x,0),y.push(0,0,1),g.push(T/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const T=x+l*p,E=x+l*(p+1),P=x+1+l*(p+1),R=x+1+l*p;m.push(T,E,R),m.push(E,P,R)}this.setIndex(m),this.setAttribute("position",new be(w,3)),this.setAttribute("normal",new be(y,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.width,t.height,t.widthSegments,t.heightSegments)}}class il extends wr{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new il(t.radius,t.detail)}}class rl extends Je{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const c=[],l=[],u=[],f=[],d=new F,m=new F,w=new F;for(let y=0;y<=n;y++){const g=a+y/n*o;for(let p=0;p<=r;p++){const x=p/r*s;m.x=(t+e*Math.cos(g))*Math.cos(x),m.y=(t+e*Math.cos(g))*Math.sin(x),m.z=e*Math.sin(g),l.push(m.x,m.y,m.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),w.subVectors(m,d).normalize(),u.push(w.x,w.y,w.z),f.push(p/r),f.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=r;g++){const p=(r+1)*y+g-1,x=(r+1)*(y-1)+g-1,T=(r+1)*(y-1)+g,E=(r+1)*y+g;c.push(p,x,E),c.push(x,T,E)}this.setIndex(c),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function ur(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=ur(i[e]);for(const r in n)t[r]=n[r]}return t}function YS(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const KS={clone:ur,merge:Ye};var JS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JS,this.fragmentShader=$S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=YS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ZS extends Fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ts extends zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class QS extends zi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class tM extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eM extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class _u extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const to=new xe,wh=new F,bh=new F;class nM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zc,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(wh),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),to.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Gr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(to)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const As=new F,Rs=new Bi,Sn=new F;class pu extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(As,Rs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(As,Rs,Sn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(As,Rs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(As,Rs,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hi=new F,vh=new Yt,xh=new Yt;class on extends pu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hc*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,vh,xh),e.subVectors(xh,vh)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class sl extends pu{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class iM extends nM{constructor(){super(new sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yh extends _u{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new iM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class rM extends _u{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const er=-90,nr=1;class sM extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(er,nr,t,e);r.layers=this.layers,this.add(r);const s=new on(er,nr,t,e);s.layers=this.layers,this.add(s);const a=new on(er,nr,t,e);a.layers=this.layers,this.add(a);const o=new on(er,nr,t,e);o.layers=this.layers,this.add(o);const c=new on(er,nr,t,e);c.layers=this.layers,this.add(c);const l=new on(er,nr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,d,m),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}}class aM extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Sh(i,t,e,n){const r=oM(n);switch(e){case Qd:return i*t;case Wc:return i*t/r.components*r.byteLength;case jc:return i*t/r.components*r.byteLength;case hr:return i*t*2/r.components*r.byteLength;case Xc:return i*t*2/r.components*r.byteLength;case tu:return i*t*3/r.components*r.byteLength;case wn:return i*t*4/r.components*r.byteLength;case qc:return i*t*4/r.components*r.byteLength;case Ds:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fs:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Do:case Fo:return Math.max(i,8)*Math.max(t,8)/2;case No:case Oo:case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bo:case Go:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ic:case rc:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ac:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function oM(i){switch(i){case sn:case Kd:return{byteLength:1,components:1};case zr:case Jd:case Qn:return{byteLength:2,components:1};case Vc:case kc:return{byteLength:2,components:4};case Dn:case Gc:case An:return{byteLength:4,components:1};case $d:case Zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mu(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function cM(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((m,w)=>m.start-w.start);let d=0;for(let m=1;m<f.length;m++){const w=f[d],y=f[m];y.start<=w.start+w.count+1?w.count=Math.max(w.count,y.start+y.count-w.start):(++d,f[d]=y)}f.length=d+1;for(let m=0,w=f.length;m<w;m++){const y=f[m];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hM=`#ifdef USE_ALPHAHASH
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
#endif`,dM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
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
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM=`#ifdef USE_BATCHING
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
#endif`,wM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yM=`#ifdef USE_IRIDESCENCE
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
#endif`,SM=`#ifdef USE_BUMPMAP
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
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,PM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,DM=`#define PI 3.141592653589793
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
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FM=`vec3 transformedNormal = objectNormal;
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
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GM=`#ifdef USE_ENVMAP
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
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JM=`#ifdef USE_GRADIENTMAP
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
}`,$M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tE=`uniform bool receiveShadow;
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
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,nE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aE=`PhysicalMaterial material;
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
#endif`,oE=`uniform sampler2D dfgLUT;
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
}`,cE=`
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
#endif`,lE=`#if defined( RE_IndirectDiffuse )
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
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wE=`#if defined( USE_POINTS_UV )
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
#endif`,bE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
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
#endif`,EE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IE=`#ifdef USE_NORMALMAP
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
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qE=`float getShadowMask() {
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
}`,YE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KE=`#ifdef USE_SKINNING
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
#endif`,JE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,ZE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nT=`#ifdef USE_TRANSMISSION
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
#endif`,iT=`#ifdef USE_TRANSMISSION
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lT=`uniform sampler2D t2D;
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`#include <common>
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
}`,pT=`#if DEPTH_PACKING == 3200
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
}`,mT=`#define DISTANCE
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
}`,gT=`#define DISTANCE
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`uniform float scale;
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
}`,xT=`uniform vec3 diffuse;
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
}`,yT=`#include <common>
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
}`,ST=`uniform vec3 diffuse;
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
}`,MT=`#define LAMBERT
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
}`,ET=`#define LAMBERT
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
}`,TT=`#define MATCAP
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
}`,AT=`#define MATCAP
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
}`,RT=`#define NORMAL
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
}`,CT=`#define NORMAL
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
}`,PT=`#define PHONG
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
}`,IT=`#define PHONG
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
}`,DT=`#define STANDARD
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
}`,LT=`#define STANDARD
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
}`,FT=`#define TOON
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
}`,UT=`#define TOON
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
}`,NT=`uniform float size;
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
}`,OT=`uniform vec3 diffuse;
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
}`,BT=`#include <common>
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
}`,zT=`uniform vec3 color;
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
}`,HT=`uniform float rotation;
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
}`,GT=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:lM,alphahash_pars_fragment:hM,alphamap_fragment:dM,alphamap_pars_fragment:uM,alphatest_fragment:fM,alphatest_pars_fragment:_M,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:gM,batching_vertex:wM,begin_vertex:bM,beginnormal_vertex:vM,bsdfs:xM,iridescence_fragment:yM,bumpmap_pars_fragment:SM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:EM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:AM,color_fragment:RM,color_pars_fragment:CM,color_pars_vertex:PM,color_vertex:IM,common:DM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:FM,displacementmap_pars_vertex:UM,displacementmap_vertex:NM,emissivemap_fragment:OM,emissivemap_pars_fragment:BM,colorspace_fragment:zM,colorspace_pars_fragment:HM,envmap_fragment:GM,envmap_common_pars_fragment:VM,envmap_pars_fragment:kM,envmap_pars_vertex:WM,envmap_physical_pars_fragment:eE,envmap_vertex:jM,fog_vertex:XM,fog_pars_vertex:qM,fog_fragment:YM,fog_pars_fragment:KM,gradientmap_pars_fragment:JM,lightmap_pars_fragment:$M,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:QM,lights_pars_begin:tE,lights_toon_fragment:nE,lights_toon_pars_fragment:iE,lights_phong_fragment:rE,lights_phong_pars_fragment:sE,lights_physical_fragment:aE,lights_physical_pars_fragment:oE,lights_fragment_begin:cE,lights_fragment_maps:lE,lights_fragment_end:hE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:_E,map_fragment:pE,map_pars_fragment:mE,map_particle_fragment:gE,map_particle_pars_fragment:wE,metalnessmap_fragment:bE,metalnessmap_pars_fragment:vE,morphinstance_vertex:xE,morphcolor_vertex:yE,morphnormal_vertex:SE,morphtarget_pars_vertex:ME,morphtarget_vertex:EE,normal_fragment_begin:TE,normal_fragment_maps:AE,normal_pars_fragment:RE,normal_pars_vertex:CE,normal_vertex:PE,normalmap_pars_fragment:IE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:LE,clearcoat_pars_fragment:FE,iridescence_pars_fragment:UE,opaque_fragment:NE,packing:OE,premultiplied_alpha_fragment:BE,project_vertex:zE,dithering_fragment:HE,dithering_pars_fragment:GE,roughnessmap_fragment:VE,roughnessmap_pars_fragment:kE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:jE,shadowmap_vertex:XE,shadowmask_pars_fragment:qE,skinbase_vertex:YE,skinning_pars_vertex:KE,skinning_vertex:JE,skinnormal_vertex:$E,specularmap_fragment:ZE,specularmap_pars_fragment:QE,tonemapping_fragment:tT,tonemapping_pars_fragment:eT,transmission_fragment:nT,transmission_pars_fragment:iT,uv_pars_fragment:rT,uv_pars_vertex:sT,uv_vertex:aT,worldpos_vertex:oT,background_vert:cT,background_frag:lT,backgroundCube_vert:hT,backgroundCube_frag:dT,cube_vert:uT,cube_frag:fT,depth_vert:_T,depth_frag:pT,distance_vert:mT,distance_frag:gT,equirect_vert:wT,equirect_frag:bT,linedashed_vert:vT,linedashed_frag:xT,meshbasic_vert:yT,meshbasic_frag:ST,meshlambert_vert:MT,meshlambert_frag:ET,meshmatcap_vert:TT,meshmatcap_frag:AT,meshnormal_vert:RT,meshnormal_frag:CT,meshphong_vert:PT,meshphong_frag:IT,meshphysical_vert:DT,meshphysical_frag:LT,meshtoon_vert:FT,meshtoon_frag:UT,points_vert:NT,points_frag:OT,shadow_vert:BT,shadow_frag:zT,sprite_vert:HT,sprite_frag:GT},ft={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Tn={basic:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ye([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ye([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ye([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ye([ft.points,ft.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ye([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ye([ft.common,ft.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ye([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ye([ft.sprite,ft.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Ye([ft.common,ft.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Ye([ft.lights,ft.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Tn.physical={uniforms:Ye([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Cs={r:0,b:0,g:0},Ai=new Ln,VT=new xe;function kT(i,t,e,n,r,s){const a=new Wt(0);let o=r===!0?0:1,c,l,u=null,f=0,d=null;function m(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){const E=x.backgroundBlurriness>0;T=t.get(T,E)}return T}function w(x){let T=!1;const E=m(x);E===null?g(a,o):E&&E.isColor&&(g(E,1),T=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(x,T){const E=m(T);E&&(E.isCubeTexture||E.mapping===oa)?(l===void 0&&(l=new Qe(new gr(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:ur(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),Ai.copy(T.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(VT.makeRotationFromEuler(Ai)),l.material.toneMapped=Qt.getTransfer(E.colorSpace)!==oe,(u!==E||f!==E.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Qe(new la(2,2),new Fn({name:"BackgroundMaterial",uniforms:ur(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(E.colorSpace)!==oe,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,T){x.getRGB(Cs,fu(i)),e.buffers.color.setClear(Cs.r,Cs.g,Cs.b,T,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,T=1){a.set(x),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:w,addToRenderList:y,dispose:p}}function WT(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(D,H,k,Y,X){let G=!1;const q=f(D,Y,k,H);s!==q&&(s=q,l(s.object)),G=m(D,Y,k,X),G&&w(D,Y,k,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,E(D,H,k,Y),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function f(D,H,k,Y){const X=Y.wireframe===!0;let G=n[H.id];G===void 0&&(G={},n[H.id]=G);const q=D.isInstancedMesh===!0?D.id:0;let rt=G[q];rt===void 0&&(rt={},G[q]=rt);let et=rt[k.id];et===void 0&&(et={},rt[k.id]=et);let mt=et[X];return mt===void 0&&(mt=d(c()),et[X]=mt),mt}function d(D){const H=[],k=[],Y=[];for(let X=0;X<e;X++)H[X]=0,k[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:k,attributeDivisors:Y,object:D,attributes:{},index:null}}function m(D,H,k,Y){const X=s.attributes,G=H.attributes;let q=0;const rt=k.getAttributes();for(const et in rt)if(rt[et].location>=0){const at=X[et];let lt=G[et];if(lt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor)),at===void 0||at.attribute!==lt||lt&&at.data!==lt.data)return!0;q++}return s.attributesNum!==q||s.index!==Y}function w(D,H,k,Y){const X={},G=H.attributes;let q=0;const rt=k.getAttributes();for(const et in rt)if(rt[et].location>=0){let at=G[et];at===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(at=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(at=D.instanceColor));const lt={};lt.attribute=at,at&&at.data&&(lt.data=at.data),X[et]=lt,q++}s.attributes=X,s.attributesNum=q,s.index=Y}function y(){const D=s.newAttributes;for(let H=0,k=D.length;H<k;H++)D[H]=0}function g(D){p(D,0)}function p(D,H){const k=s.newAttributes,Y=s.enabledAttributes,X=s.attributeDivisors;k[D]=1,Y[D]===0&&(i.enableVertexAttribArray(D),Y[D]=1),X[D]!==H&&(i.vertexAttribDivisor(D,H),X[D]=H)}function x(){const D=s.newAttributes,H=s.enabledAttributes;for(let k=0,Y=H.length;k<Y;k++)H[k]!==D[k]&&(i.disableVertexAttribArray(k),H[k]=0)}function T(D,H,k,Y,X,G,q){q===!0?i.vertexAttribIPointer(D,H,k,X,G):i.vertexAttribPointer(D,H,k,Y,X,G)}function E(D,H,k,Y){y();const X=Y.attributes,G=k.getAttributes(),q=H.defaultAttributeValues;for(const rt in G){const et=G[rt];if(et.location>=0){let mt=X[rt];if(mt===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),mt!==void 0){const at=mt.normalized,lt=mt.itemSize,Ct=t.get(mt);if(Ct===void 0)continue;const ne=Ct.buffer,re=Ct.type,Q=Ct.bytesPerElement,st=re===i.INT||re===i.UNSIGNED_INT||mt.gpuType===Gc;if(mt.isInterleavedBufferAttribute){const ut=mt.data,zt=ut.stride,Lt=mt.offset;if(ut.isInstancedInterleavedBuffer){for(let Nt=0;Nt<et.locationSize;Nt++)p(et.location+Nt,ut.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Nt=0;Nt<et.locationSize;Nt++)g(et.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Nt=0;Nt<et.locationSize;Nt++)T(et.location+Nt,lt/et.locationSize,re,at,zt*Q,(Lt+lt/et.locationSize*Nt)*Q,st)}else{if(mt.isInstancedBufferAttribute){for(let ut=0;ut<et.locationSize;ut++)p(et.location+ut,mt.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ut=0;ut<et.locationSize;ut++)g(et.location+ut);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let ut=0;ut<et.locationSize;ut++)T(et.location+ut,lt/et.locationSize,re,at,lt*Q,lt/et.locationSize*ut*Q,st)}}else if(q!==void 0){const at=q[rt];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(et.location,at);break;case 3:i.vertexAttrib3fv(et.location,at);break;case 4:i.vertexAttrib4fv(et.location,at);break;default:i.vertexAttrib1fv(et.location,at)}}}}x()}function P(){M();for(const D in n){const H=n[D];for(const k in H){const Y=H[k];for(const X in Y){const G=Y[X];for(const q in G)u(G[q].object),delete G[q];delete Y[X]}}delete n[D]}}function R(D){if(n[D.id]===void 0)return;const H=n[D.id];for(const k in H){const Y=H[k];for(const X in Y){const G=Y[X];for(const q in G)u(G[q].object),delete G[q];delete Y[X]}}delete n[D.id]}function I(D){for(const H in n){const k=n[H];for(const Y in k){const X=k[Y];if(X[D.id]===void 0)continue;const G=X[D.id];for(const q in G)u(G[q].object),delete G[q];delete X[D.id]}}}function v(D){for(const H in n){const k=n[H],Y=D.isInstancedMesh===!0?D.id:0,X=k[Y];if(X!==void 0){for(const G in X){const q=X[G];for(const rt in q)u(q[rt].object),delete q[rt];delete X[G]}delete k[Y],Object.keys(k).length===0&&delete n[H]}}}function M(){V(),a=!0,s!==r&&(s=r,l(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:V,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:g,disableUnusedAttributes:x}}function jT(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function o(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let m=0;for(let w=0;w<f;w++)m+=u[w];e.update(m,n,1)}function c(l,u,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let w=0;w<l.length;w++)a(l[w],u[w],d[w]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let w=0;for(let y=0;y<f;y++)w+=u[y]*d[y];e.update(w,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function XT(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==wn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const v=I===Qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==sn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==An&&!v)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Ut("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:w,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:E,maxSamples:P,samples:R}}function qT(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Ci,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,m){const w=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!r||w===null||w.length===0||s&&!g)s?u(null):l();else{const x=s?0:n,T=x*4;let E=p.clippingState||null;c.value=E,E=u(w,d,T,m);for(let P=0;P!==T;++P)E[P]=e[P];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,m,w){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=c.value,w!==!0||g===null){const p=m+y*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,E=m;T!==y;++T,E+=4)a.copy(f[T]).applyMatrix4(x,o),a.normal.toArray(g,E),g[E+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}const _i=4,Mh=[.125,.215,.35,.446,.526,.582],Ii=20,YT=256,Cr=new sl,Eh=new Wt;let eo=null,no=0,io=0,ro=!1;const KT=new F;class Th{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=KT}=s;eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(eo,no,io),this._renderer.xr.enabled=ro,t.scissorTest=!1,ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Qn,format:wn,colorSpace:dr,depthBuffer:!1},r=Ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=JT(s)),this._blurMaterial=ZT(s,t,e),this._ggxMaterial=$T(s,t,e)}return r}_compileMaterial(t){const e=new Qe(new Je,t);this._renderer.compile(e,Cr)}_sceneToCubeUV(t,e,n,r,s){const c=new on(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Eh),f.toneMapping=bn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qe(new gr,new cu({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let p=!1;const x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,p=!0):(g.color.copy(Eh),p=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const P=this._cubeSize;ir(r,E*P,T>2?P:0,P,P),f.setRenderTarget(r),p&&f.render(y,c),f.render(t,c)}f.toneMapping=m,f.autoClear=d,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ni||t.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ir(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=0+l*1.25,m=f*d,{_lodMax:w}=this,y=this._sizeLods[n],g=3*y*(n>w-_i?n-w+_i:0),p=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=w-e,ir(s,g,p,3*y,2*y),r.setRenderTarget(s),r.render(o,Cr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=w-n,ir(t,g,p,3*y,2*y),r.setRenderTarget(t),r.render(o,Cr)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ee("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const d=l.uniforms,m=this._sizeLods[n]-1,w=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ii-1),y=s/w,g=isFinite(s)?1+Math.floor(u*y):Ii;g>Ii&&Ut(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ii}`);const p=[];let x=0;for(let I=0;I<Ii;++I){const v=I/y,M=Math.exp(-v*v/2);p.push(M),I===0?x+=M:I<g&&(x+=2*M)}for(let I=0;I<p.length;I++)p[I]=p[I]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=w,d.mipInt.value=T-n;const E=this._sizeLods[r],P=3*E*(r>T-_i?r-T+_i:0),R=4*(this._cubeSize-E);ir(e,P,R,3*E,2*E),c.setRenderTarget(e),c.render(f,Cr)}}function JT(i){const t=[],e=[],n=[];let r=i;const s=i-_i+1+Mh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-_i?c=Mh[a-i+_i-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,w=6,y=3,g=2,p=1,x=new Float32Array(y*w*m),T=new Float32Array(g*w*m),E=new Float32Array(p*w*m);for(let R=0;R<m;R++){const I=R%3*2/3-1,v=R>2?0:-1,M=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];x.set(M,y*w*R),T.set(d,g*w*R);const V=[R,R,R,R,R,R];E.set(V,p*w*R)}const P=new Je;P.setAttribute("position",new Pn(x,y)),P.setAttribute("uv",new Pn(T,g)),P.setAttribute("faceIndex",new Pn(E,p)),n.push(new Qe(P,null)),r>_i&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ah(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function $T(i,t,e){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ha(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ZT(i,t,e){const n=new Float32Array(Ii),r=new F(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ha(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Rh(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ha(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ch(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ha(){return`

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
	`}class gu extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new du(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gr(5,5,5),s=new Fn({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Xn});s.uniforms.tEquirect.value=e;const a=new Qe(r,s),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=He),new sM(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function QT(i){let t=new WeakMap,e=new WeakMap,n=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===Ta||m===Aa)if(t.has(d)){const w=t.get(d).texture;return o(w,d.mapping)}else{const w=d.image;if(w&&w.height>0){const y=new gu(w.height);return y.fromEquirectangularTexture(i,d),t.set(d,y),d.addEventListener("dispose",l),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,w=m===Ta||m===Aa,y=m===Ni||m===lr;if(w||y){let g=e.get(d);const p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Th(i)),g=w?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return w&&x&&x.height>0||y&&x&&c(x)?(n===null&&(n=new Th(i)),g=w?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,m){return m===Ta?d.mapping=Ni:m===Aa&&(d.mapping=lr),d}function c(d){let m=0;const w=6;for(let y=0;y<w;y++)d[y]!==void 0&&m++;return m===w}function l(d){const m=d.target;m.removeEventListener("dispose",l);const w=t.get(m);w!==void 0&&(t.delete(m),w.dispose())}function u(d){const m=d.target;m.removeEventListener("dispose",u);const w=e.get(m);w!==void 0&&(e.delete(m),w.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function tA(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&qs("WebGLRenderer: "+n+" extension not supported."),r}}}function eA(i,t,e,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const w in d.attributes)t.remove(d.attributes[w]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER)}function l(f){const d=[],m=f.index,w=f.attributes.position;let y=0;if(w===void 0)return;if(m!==null){const x=m.array;y=m.version;for(let T=0,E=x.length;T<E;T+=3){const P=x[T+0],R=x[T+1],I=x[T+2];d.push(P,R,R,I,I,P)}}else{const x=w.array;y=w.version;for(let T=0,E=x.length/3-1;T<E;T+=3){const P=T+0,R=T+1,I=T+2;d.push(P,R,R,I,I,P)}}const g=new(w.count>=65535?au:su)(d,1);g.version=y;const p=s.get(f);p&&t.remove(p),s.set(f,g)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function nA(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*a),e.update(m,n,1)}function l(d,m,w){w!==0&&(i.drawElementsInstanced(n,m,s,d*a,w),e.update(m,n,w))}function u(d,m,w){if(w===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,w);let g=0;for(let p=0;p<w;p++)g+=m[p];e.update(g,n,1)}function f(d,m,w,y){if(w===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,m[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,y,0,w);let p=0;for(let x=0;x<w;x++)p+=m[x]*y[x];e.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function iA(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:ee("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function rA(i,t,e){const n=new WeakMap,r=new Se;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,w=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),w===!0&&(T=2),y===!0&&(T=3);let E=o.attributes.position.count*T,P=1;E>t.maxTextureSize&&(P=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const R=new Float32Array(E*P*4*f),I=new nu(R,E,P,f);I.type=An,I.needsUpdate=!0;const v=T*4;for(let V=0;V<f;V++){const D=g[V],H=p[V],k=x[V],Y=E*P*4*V;for(let X=0;X<D.count;X++){const G=X*v;m===!0&&(r.fromBufferAttribute(D,X),R[Y+G+0]=r.x,R[Y+G+1]=r.y,R[Y+G+2]=r.z,R[Y+G+3]=0),w===!0&&(r.fromBufferAttribute(H,X),R[Y+G+4]=r.x,R[Y+G+5]=r.y,R[Y+G+6]=r.z,R[Y+G+7]=0),y===!0&&(r.fromBufferAttribute(k,X),R[Y+G+8]=r.x,R[Y+G+9]=r.y,R[Y+G+10]=r.z,R[Y+G+11]=k.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new Yt(E,P)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let y=0;y<l.length;y++)m+=l[y];const w=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",w),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function sA(i,t,e,n,r){let s=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,d=t.get(l,f);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const aA={[Gd]:"LINEAR_TONE_MAPPING",[Vd]:"REINHARD_TONE_MAPPING",[kd]:"CINEON_TONE_MAPPING",[Wd]:"ACES_FILMIC_TONE_MAPPING",[Xd]:"AGX_TONE_MAPPING",[qd]:"NEUTRAL_TONE_MAPPING",[jd]:"CUSTOM_TONE_MAPPING"};function oA(i,t,e,n,r){const s=new Cn(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),a=new Cn(t,e,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),o=new Je;o.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new be([0,2,0,0,2,0],2));const c=new ZS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Qe(o,c),u=new sl(-1,1,1,-1,0,1);let f=null,d=null,m=!1,w,y=null,g=[],p=!1;this.setSize=function(x,T){s.setSize(x,T),a.setSize(x,T);for(let E=0;E<g.length;E++){const P=g[E];P.setSize&&P.setSize(x,T)}},this.setEffects=function(x){g=x,p=g.length>0&&g[0].isRenderPass===!0;const T=s.width,E=s.height;for(let P=0;P<g.length;P++){const R=g[P];R.setSize&&R.setSize(T,E)}},this.begin=function(x,T){if(m||x.toneMapping===bn&&g.length===0)return!1;if(y=T,T!==null){const E=T.width,P=T.height;(s.width!==E||s.height!==P)&&this.setSize(E,P)}return p===!1&&x.setRenderTarget(s),w=x.toneMapping,x.toneMapping=bn,!0},this.hasRenderPass=function(){return p},this.end=function(x,T){x.toneMapping=w,m=!0;let E=s,P=a;for(let R=0;R<g.length;R++){const I=g[R];if(I.enabled!==!1&&(I.render(x,P,E,T),I.needsSwap!==!1)){const v=E;E=P,P=v}}if(f!==x.outputColorSpace||d!==x.toneMapping){f=x.outputColorSpace,d=x.toneMapping,c.defines={},Qt.getTransfer(f)===oe&&(c.defines.SRGB_TRANSFER="");const R=aA[d];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(y),x.render(l,u),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const wu=new Xe,dc=new Vr(1,1),bu=new nu,vu=new TS,xu=new du,Ph=[],Ih=[],Dh=new Float32Array(16),Lh=new Float32Array(9),Fh=new Float32Array(4);function br(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ph[r];if(s===void 0&&(s=new Float32Array(r),Ph[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function da(i,t){let e=Ih[t];e===void 0&&(e=new Int32Array(t),Ih[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cA(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function lA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function hA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function dA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function uA(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Le(e,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),Fe(e,n)}}function fA(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Le(e,n))return;Lh.set(n),i.uniformMatrix3fv(this.addr,!1,Lh),Fe(e,n)}}function _A(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Le(e,n))return;Dh.set(n),i.uniformMatrix4fv(this.addr,!1,Dh),Fe(e,n)}}function pA(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function gA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function wA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function bA(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function xA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function yA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function SA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(dc.compareFunction=e.isReversedDepthBuffer()?Jc:Kc,s=dc):s=wu,e.setTexture2D(t||s,r)}function MA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||vu,r)}function EA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||xu,r)}function TA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||bu,r)}function AA(i){switch(i){case 5126:return cA;case 35664:return lA;case 35665:return hA;case 35666:return dA;case 35674:return uA;case 35675:return fA;case 35676:return _A;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return wA;case 5125:return bA;case 36294:return vA;case 36295:return xA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return TA}}function RA(i,t){i.uniform1fv(this.addr,t)}function CA(i,t){const e=br(t,this.size,2);i.uniform2fv(this.addr,e)}function PA(i,t){const e=br(t,this.size,3);i.uniform3fv(this.addr,e)}function IA(i,t){const e=br(t,this.size,4);i.uniform4fv(this.addr,e)}function DA(i,t){const e=br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function LA(i,t){const e=br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function FA(i,t){const e=br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function UA(i,t){i.uniform1iv(this.addr,t)}function NA(i,t){i.uniform2iv(this.addr,t)}function OA(i,t){i.uniform3iv(this.addr,t)}function BA(i,t){i.uniform4iv(this.addr,t)}function zA(i,t){i.uniform1uiv(this.addr,t)}function HA(i,t){i.uniform2uiv(this.addr,t)}function GA(i,t){i.uniform3uiv(this.addr,t)}function VA(i,t){i.uniform4uiv(this.addr,t)}function kA(i,t,e){const n=this.cache,r=t.length,s=da(e,r);Le(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=dc:a=wu;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function WA(i,t,e){const n=this.cache,r=t.length,s=da(e,r);Le(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||vu,s[a])}function jA(i,t,e){const n=this.cache,r=t.length,s=da(e,r);Le(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||xu,s[a])}function XA(i,t,e){const n=this.cache,r=t.length,s=da(e,r);Le(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||bu,s[a])}function qA(i){switch(i){case 5126:return RA;case 35664:return CA;case 35665:return PA;case 35666:return IA;case 35674:return DA;case 35675:return LA;case 35676:return FA;case 5124:case 35670:return UA;case 35667:case 35671:return NA;case 35668:case 35672:return OA;case 35669:case 35673:return BA;case 5125:return zA;case 36294:return HA;case 36295:return GA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return jA;case 36289:case 36303:case 36311:case 36292:return XA}}class YA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=AA(e.type)}}class KA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qA(e.type)}}class JA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const so=/(\w+)(\])?(\[|\.)?/g;function Uh(i,t){i.seq.push(t),i.map[t.id]=t}function $A(i,t,e){const n=i.name,r=n.length;for(so.lastIndex=0;;){const s=so.exec(n),a=so.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Uh(e,l===void 0?new YA(o,i,t):new KA(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new JA(o),Uh(e,f)),e=f}}}class Os{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);$A(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Nh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ZA=37297;let QA=0;function tR(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Oh=new Ht;function eR(i){Qt._getMatrix(Oh,Qt.workingColorSpace,i);const t=`mat3( ${Oh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case js:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+tR(i.getShaderSource(t),o)}else return s}function nR(i,t){const e=eR(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const iR={[Gd]:"Linear",[Vd]:"Reinhard",[kd]:"Cineon",[Wd]:"ACESFilmic",[Xd]:"AgX",[qd]:"Neutral",[jd]:"Custom"};function rR(i,t){const e=iR[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ps=new F;function sR(){Qt.getLuminanceCoefficients(Ps);const i=Ps.x.toFixed(4),t=Ps.y.toFixed(4),e=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aR(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function oR(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cR(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Dr(i){return i!==""}function zh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lR=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(i){return i.replace(lR,dR)}const hR=new Map;function dR(i,t){let e=Vt[t];if(e===void 0){const n=hR.get(t);if(n!==void 0)e=Vt[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uc(e)}const uR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(uR,fR)}function fR(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const _R={[Is]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function pR(i){return _R[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mR={[Ni]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE_UV"};function gR(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":mR[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const wR={[lr]:"ENVMAP_MODE_REFRACTION"};function bR(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":wR[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vR={[Hd]:"ENVMAP_BLENDING_MULTIPLY",[sS]:"ENVMAP_BLENDING_MIX",[aS]:"ENVMAP_BLENDING_ADD"};function xR(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vR[i.combine]||"ENVMAP_BLENDING_NONE"}function yR(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function SR(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=pR(e),l=gR(e),u=bR(e),f=xR(e),d=yR(e),m=aR(e),w=oR(s),y=r.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Dr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Dr).join(`
`),p.length>0&&(p+=`
`)):(g=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),p=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==bn?rR("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,nR("linearToOutputTexel",e.outputColorSpace),sR(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),a=uc(a),a=zh(a,e),a=Hh(a,e),o=uc(o),o=zh(o,e),o=Hh(o,e),a=Gh(a),o=Gh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=x+g+a,E=x+p+o,P=Nh(r,r.VERTEX_SHADER,T),R=Nh(r,r.FRAGMENT_SHADER,E);r.attachShader(y,P),r.attachShader(y,R),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function I(D){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(y)||"",k=r.getShaderInfoLog(P)||"",Y=r.getShaderInfoLog(R)||"",X=H.trim(),G=k.trim(),q=Y.trim();let rt=!0,et=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,P,R);else{const mt=Bh(r,P,"vertex"),at=Bh(r,R,"fragment");ee("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+mt+`
`+at)}else X!==""?Ut("WebGLProgram: Program Info Log:",X):(G===""||q==="")&&(et=!1);et&&(D.diagnostics={runnable:rt,programLog:X,vertexShader:{log:G,prefix:g},fragmentShader:{log:q,prefix:p}})}r.deleteShader(P),r.deleteShader(R),v=new Os(r,y),M=cR(r,y)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(y,ZA)),V},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=QA++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=R,this}let MR=0;class ER{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new TR(t),e.set(t,n)),n}}class TR{constructor(t){this.id=MR++,this.code=t,this.usedTimes=0}}function AR(i,t,e,n,r,s){const a=new iu,o=new ER,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(v){return c.add(v),v===0?"uv":`uv${v}`}function y(v,M,V,D,H){const k=D.fog,Y=H.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,q=t.get(v.envMap||X,G),rt=q&&q.mapping===oa?q.image.height:null,et=m[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Ut("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,at=mt!==void 0?mt.length:0;let lt=0;Y.morphAttributes.position!==void 0&&(lt=1),Y.morphAttributes.normal!==void 0&&(lt=2),Y.morphAttributes.color!==void 0&&(lt=3);let Ct,ne,re,Q;if(et){const ae=Tn[et];Ct=ae.vertexShader,ne=ae.fragmentShader}else Ct=v.vertexShader,ne=v.fragmentShader,o.update(v),re=o.getVertexShaderID(v),Q=o.getFragmentShaderID(v);const st=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),zt=H.isInstancedMesh===!0,Lt=H.isBatchedMesh===!0,Nt=!!v.map,Ue=!!v.matcap,Zt=!!q,se=!!v.aoMap,fe=!!v.lightMap,jt=!!v.bumpMap,Me=!!v.normalMap,L=!!v.displacementMap,Re=!!v.emissiveMap,ie=!!v.metalnessMap,pe=!!v.roughnessMap,Et=v.anisotropy>0,A=v.clearcoat>0,b=v.dispersion>0,B=v.iridescence>0,Z=v.sheen>0,tt=v.transmission>0,$=Et&&!!v.anisotropyMap,vt=A&&!!v.clearcoatMap,ht=A&&!!v.clearcoatNormalMap,It=A&&!!v.clearcoatRoughnessMap,Ft=B&&!!v.iridescenceMap,nt=B&&!!v.iridescenceThicknessMap,ot=Z&&!!v.sheenColorMap,xt=Z&&!!v.sheenRoughnessMap,St=!!v.specularMap,gt=!!v.specularColorMap,Xt=!!v.specularIntensityMap,N=tt&&!!v.transmissionMap,dt=tt&&!!v.thicknessMap,ct=!!v.gradientMap,bt=!!v.alphaMap,it=v.alphaTest>0,J=!!v.alphaHash,yt=!!v.extensions;let Ot=bn;v.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const me={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:Ct,fragmentShader:ne,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Lt,batchingColor:Lt&&H._colorsTexture!==null,instancing:zt,instancingColor:zt&&H.instanceColor!==null,instancingMorph:zt&&H.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:dr,alphaToCoverage:!!v.alphaToCoverage,map:Nt,matcap:Ue,envMap:Zt,envMapMode:Zt&&q.mapping,envMapCubeUVHeight:rt,aoMap:se,lightMap:fe,bumpMap:jt,normalMap:Me,displacementMap:L,emissiveMap:Re,normalMapObjectSpace:Me&&v.normalMapType===lS,normalMapTangentSpace:Me&&v.normalMapType===Yc,metalnessMap:ie,roughnessMap:pe,anisotropy:Et,anisotropyMap:$,clearcoat:A,clearcoatMap:vt,clearcoatNormalMap:ht,clearcoatRoughnessMap:It,dispersion:b,iridescence:B,iridescenceMap:Ft,iridescenceThicknessMap:nt,sheen:Z,sheenColorMap:ot,sheenRoughnessMap:xt,specularMap:St,specularColorMap:gt,specularIntensityMap:Xt,transmission:tt,transmissionMap:N,thicknessMap:dt,gradientMap:ct,opaque:v.transparent===!1&&v.blending===rr&&v.alphaToCoverage===!1,alphaMap:bt,alphaTest:it,alphaHash:J,combine:v.combine,mapUv:Nt&&w(v.map.channel),aoMapUv:se&&w(v.aoMap.channel),lightMapUv:fe&&w(v.lightMap.channel),bumpMapUv:jt&&w(v.bumpMap.channel),normalMapUv:Me&&w(v.normalMap.channel),displacementMapUv:L&&w(v.displacementMap.channel),emissiveMapUv:Re&&w(v.emissiveMap.channel),metalnessMapUv:ie&&w(v.metalnessMap.channel),roughnessMapUv:pe&&w(v.roughnessMap.channel),anisotropyMapUv:$&&w(v.anisotropyMap.channel),clearcoatMapUv:vt&&w(v.clearcoatMap.channel),clearcoatNormalMapUv:ht&&w(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&w(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&w(v.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&w(v.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&w(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&w(v.sheenRoughnessMap.channel),specularMapUv:St&&w(v.specularMap.channel),specularColorMapUv:gt&&w(v.specularColorMap.channel),specularIntensityMapUv:Xt&&w(v.specularIntensityMap.channel),transmissionMapUv:N&&w(v.transmissionMap.channel),thicknessMapUv:dt&&w(v.thicknessMap.channel),alphaMapUv:bt&&w(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Me||Et),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(Nt||bt),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||Y.attributes.normal===void 0&&Me===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ut,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Nt&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===oe,decodeVideoTextureEmissive:Re&&v.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(v.emissiveMap.colorSpace)===oe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===gn,flipSided:v.side===tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:yt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&v.extensions.multiDraw===!0||Lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function g(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)M.push(V),M.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(p(M,v),x(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function p(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function x(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function T(v){const M=m[v.type];let V;if(M){const D=Tn[M];V=KS.clone(D.uniforms)}else V=v.uniforms;return V}function E(v,M){let V=u.get(M);return V!==void 0?++V.usedTimes:(V=new SR(i,M,v,r),l.push(V),u.set(M,V)),V}function P(v){if(--v.usedTimes===0){const M=l.indexOf(v);l[M]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){o.remove(v)}function I(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:T,acquireProgram:E,releaseProgram:P,releaseShaderCache:R,programs:l,dispose:I}}function RR(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function CR(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function kh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,w,y,g,p){let x=i[t];return x===void 0?(x={id:d.id,object:d,geometry:m,material:w,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:p},i[t]=x):(x.id=d.id,x.object=d,x.geometry=m,x.material=w,x.materialVariant=a(d),x.groupOrder=y,x.renderOrder=d.renderOrder,x.z=g,x.group=p),t++,x}function c(d,m,w,y,g,p){const x=o(d,m,w,y,g,p);w.transmission>0?n.push(x):w.transparent===!0?r.push(x):e.push(x)}function l(d,m,w,y,g,p){const x=o(d,m,w,y,g,p);w.transmission>0?n.unshift(x):w.transparent===!0?r.unshift(x):e.unshift(x)}function u(d,m){e.length>1&&e.sort(d||CR),n.length>1&&n.sort(m||kh),r.length>1&&r.sort(m||kh)}function f(){for(let d=t,m=i.length;d<m;d++){const w=i[d];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function PR(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Wh,i.set(n,[a])):r>=s.length?(a=new Wh,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function IR(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Wt};break;case"SpotLight":e={position:new F,direction:new F,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function DR(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let LR=0;function FR(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function UR(i){const t=new IR,e=DR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const r=new F,s=new xe,a=new xe;function o(l){let u=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,w=0,y=0,g=0,p=0,x=0,T=0,E=0,P=0,R=0,I=0;l.sort(FR);for(let M=0,V=l.length;M<V;M++){const D=l[M],H=D.color,k=D.intensity,Y=D.distance;let X=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===hr?X=D.shadow.map.texture:X=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=H.r*k,f+=H.g*k,d+=H.b*k;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],k);I++}else if(D.isDirectionalLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const q=D.shadow,rt=e.get(D);rt.shadowIntensity=q.intensity,rt.shadowBias=q.bias,rt.shadowNormalBias=q.normalBias,rt.shadowRadius=q.radius,rt.shadowMapSize=q.mapSize,n.directionalShadow[m]=rt,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=D.shadow.matrix,x++}n.directional[m]=G,m++}else if(D.isSpotLight){const G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(H).multiplyScalar(k),G.distance=Y,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[y]=G;const q=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,q.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[y]=q.matrix,D.castShadow){const rt=e.get(D);rt.shadowIntensity=q.intensity,rt.shadowBias=q.bias,rt.shadowNormalBias=q.normalBias,rt.shadowRadius=q.radius,rt.shadowMapSize=q.mapSize,n.spotShadow[y]=rt,n.spotShadowMap[y]=X,E++}y++}else if(D.isRectAreaLight){const G=t.get(D);G.color.copy(H).multiplyScalar(k),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=G,g++}else if(D.isPointLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const q=D.shadow,rt=e.get(D);rt.shadowIntensity=q.intensity,rt.shadowBias=q.bias,rt.shadowNormalBias=q.normalBias,rt.shadowRadius=q.radius,rt.shadowMapSize=q.mapSize,rt.shadowCameraNear=q.camera.near,rt.shadowCameraFar=q.camera.far,n.pointShadow[w]=rt,n.pointShadowMap[w]=X,n.pointShadowMatrix[w]=D.shadow.matrix,T++}n.point[w]=G,w++}else if(D.isHemisphereLight){const G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(k),G.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const v=n.hash;(v.directionalLength!==m||v.pointLength!==w||v.spotLength!==y||v.rectAreaLength!==g||v.hemiLength!==p||v.numDirectionalShadows!==x||v.numPointShadows!==T||v.numSpotShadows!==E||v.numSpotMaps!==P||v.numLightProbes!==I)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=g,n.point.length=w,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,v.directionalLength=m,v.pointLength=w,v.spotLength=y,v.rectAreaLength=g,v.hemiLength=p,v.numDirectionalShadows=x,v.numPointShadows=T,v.numSpotShadows=E,v.numSpotMaps=P,v.numLightProbes=I,n.version=LR++)}function c(l,u){let f=0,d=0,m=0,w=0,y=0;const g=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const T=l[p];if(T.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),f++}else if(T.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),m++}else if(T.isRectAreaLight){const E=n.rectArea[w];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),w++}else if(T.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),d++}else if(T.isHemisphereLight){const E=n.hemi[y];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(g),y++}}}return{setup:o,setupView:c,state:n}}function jh(i){const t=new UR(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function NR(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new jh(i),t.set(r,[o])):s>=a.length?(o=new jh(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const OR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BR=`uniform sampler2D shadow_pass;
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
}`,zR=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],HR=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Xh=new xe,Pr=new F,ao=new F;function GR(i,t,e){let n=new Zc;const r=new Yt,s=new Yt,a=new Se,o=new tM,c=new eM,l={},u=e.maxTextureSize,f={[bi]:tn,[tn]:bi,[gn]:gn},d=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:OR,fragmentShader:BR}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const w=new Je;w.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Qe(w,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let p=this.type;this.render=function(R,I,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;this.type===zd&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Is);const M=i.getRenderTarget(),V=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Xn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=p!==this.type;k&&I.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(X=>X.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,X=R.length;Y<X;Y++){const G=R[Y],q=G.shadow;if(q===void 0){Ut("WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const rt=q.getFrameExtents();r.multiply(rt),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/rt.x),r.x=s.x*rt.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/rt.y),r.y=s.y*rt.y,q.mapSize.y=s.y));const et=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=et,q.map===null||k===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ir){if(G.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Cn(r.x,r.y,{format:hr,type:Qn,minFilter:He,magFilter:He,generateMipmaps:!1}),q.map.texture.name=G.name+".shadowMap",q.map.depthTexture=new Vr(r.x,r.y,An),q.map.depthTexture.name=G.name+".shadowMapDepth",q.map.depthTexture.format=ti,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=De,q.map.depthTexture.magFilter=De}else G.isPointLight?(q.map=new gu(r.x),q.map.depthTexture=new XS(r.x,Dn)):(q.map=new Cn(r.x,r.y),q.map.depthTexture=new Vr(r.x,r.y,Dn)),q.map.depthTexture.name=G.name+".shadowMap",q.map.depthTexture.format=ti,this.type===Is?(q.map.depthTexture.compareFunction=et?Jc:Kc,q.map.depthTexture.minFilter=He,q.map.depthTexture.magFilter=He):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=De,q.map.depthTexture.magFilter=De);q.camera.updateProjectionMatrix()}const mt=q.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<mt;at++){if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,at),i.clear();else{at===0&&(i.setRenderTarget(q.map),i.clear());const lt=q.getViewport(at);a.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),H.viewport(a)}if(G.isPointLight){const lt=q.camera,Ct=q.matrix,ne=G.distance||lt.far;ne!==lt.far&&(lt.far=ne,lt.updateProjectionMatrix()),Pr.setFromMatrixPosition(G.matrixWorld),lt.position.copy(Pr),ao.copy(lt.position),ao.add(zR[at]),lt.up.copy(HR[at]),lt.lookAt(ao),lt.updateMatrixWorld(),Ct.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Xh.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Xh,lt.coordinateSystem,lt.reversedDepth)}else q.updateMatrices(G);n=q.getFrustum(),E(I,v,q.camera,G,this.type)}q.isPointLightShadow!==!0&&this.type===Ir&&x(q,v),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,V,D)};function x(R,I){const v=t.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Cn(r.x,r.y,{format:hr,type:Qn})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,v,d,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,v,m,y,null)}function T(R,I,v,M){let V=null;const D=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)V=D;else if(V=v.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const H=V.uuid,k=I.uuid;let Y=l[H];Y===void 0&&(Y={},l[H]=Y);let X=Y[k];X===void 0&&(X=V.clone(),Y[k]=X,I.addEventListener("dispose",P)),V=X}if(V.visible=I.visible,V.wireframe=I.wireframe,M===Ir?V.side=I.shadowSide!==null?I.shadowSide:I.side:V.side=I.shadowSide!==null?I.shadowSide:f[I.side],V.alphaMap=I.alphaMap,V.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,V.map=I.map,V.clipShadows=I.clipShadows,V.clippingPlanes=I.clippingPlanes,V.clipIntersection=I.clipIntersection,V.displacementMap=I.displacementMap,V.displacementScale=I.displacementScale,V.displacementBias=I.displacementBias,V.wireframeLinewidth=I.wireframeLinewidth,V.linewidth=I.linewidth,v.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const H=i.properties.get(V);H.light=v}return V}function E(R,I,v,M,V){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&V===Ir)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);const k=t.update(R),Y=R.material;if(Array.isArray(Y)){const X=k.groups;for(let G=0,q=X.length;G<q;G++){const rt=X[G],et=Y[rt.materialIndex];if(et&&et.visible){const mt=T(R,et,M,V);R.onBeforeShadow(i,R,I,v,k,mt,rt),i.renderBufferDirect(v,null,k,mt,R,rt),R.onAfterShadow(i,R,I,v,k,mt,rt)}}}else if(Y.visible){const X=T(R,Y,M,V);R.onBeforeShadow(i,R,I,v,k,X,null),i.renderBufferDirect(v,null,k,X,R,null),R.onAfterShadow(i,R,I,v,k,X,null)}}const H=R.children;for(let k=0,Y=H.length;k<Y;k++)E(H[k],I,v,M,V)}function P(R){R.target.removeEventListener("dispose",P);for(const v in l){const M=l[v],V=R.target.uuid;V in M&&(M[V].dispose(),delete M[V])}}}function VR(i,t){function e(){let N=!1;const dt=new Se;let ct=null;const bt=new Se(0,0,0,0);return{setMask:function(it){ct!==it&&!N&&(i.colorMask(it,it,it,it),ct=it)},setLocked:function(it){N=it},setClear:function(it,J,yt,Ot,me){me===!0&&(it*=Ot,J*=Ot,yt*=Ot),dt.set(it,J,yt,Ot),bt.equals(dt)===!1&&(i.clearColor(it,J,yt,Ot),bt.copy(dt))},reset:function(){N=!1,ct=null,bt.set(-1,0,0,0)}}}function n(){let N=!1,dt=!1,ct=null,bt=null,it=null;return{setReversed:function(J){if(dt!==J){const yt=t.get("EXT_clip_control");J?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),dt=J;const Ot=it;it=null,this.setClear(Ot)}},getReversed:function(){return dt},setTest:function(J){J?st(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(J){ct!==J&&!N&&(i.depthMask(J),ct=J)},setFunc:function(J){if(dt&&(J=bS[J]),bt!==J){switch(J){case So:i.depthFunc(i.NEVER);break;case Mo:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case Ro:i.depthFunc(i.GREATER);break;case Co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=J}},setLocked:function(J){N=J},setClear:function(J){it!==J&&(it=J,dt&&(J=1-J),i.clearDepth(J))},reset:function(){N=!1,ct=null,bt=null,it=null,dt=!1}}}function r(){let N=!1,dt=null,ct=null,bt=null,it=null,J=null,yt=null,Ot=null,me=null;return{setTest:function(ae){N||(ae?st(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(ae){dt!==ae&&!N&&(i.stencilMask(ae),dt=ae)},setFunc:function(ae,On,Bn){(ct!==ae||bt!==On||it!==Bn)&&(i.stencilFunc(ae,On,Bn),ct=ae,bt=On,it=Bn)},setOp:function(ae,On,Bn){(J!==ae||yt!==On||Ot!==Bn)&&(i.stencilOp(ae,On,Bn),J=ae,yt=On,Ot=Bn)},setLocked:function(ae){N=ae},setClear:function(ae){me!==ae&&(i.clearStencil(ae),me=ae)},reset:function(){N=!1,dt=null,ct=null,bt=null,it=null,J=null,yt=null,Ot=null,me=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,m=[],w=null,y=!1,g=null,p=null,x=null,T=null,E=null,P=null,R=null,I=new Wt(0,0,0),v=0,M=!1,V=null,D=null,H=null,k=null,Y=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,q=0;const rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(rt)[1]),G=q>=1):rt.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),G=q>=2);let et=null,mt={};const at=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),Ct=new Se().fromArray(at),ne=new Se().fromArray(lt);function re(N,dt,ct,bt){const it=new Uint8Array(4),J=i.createTexture();i.bindTexture(N,J),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<ct;yt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(dt+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return J}const Q={};Q[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(cr),jt(!1),Me(jl),st(i.CULL_FACE),se(Xn);function st(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function ut(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function zt(N,dt){return f[N]!==dt?(i.bindFramebuffer(N,dt),f[N]=dt,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=dt),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Lt(N,dt){let ct=m,bt=!1;if(N){ct=d.get(dt),ct===void 0&&(ct=[],d.set(dt,ct));const it=N.textures;if(ct.length!==it.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let J=0,yt=it.length;J<yt;J++)ct[J]=i.COLOR_ATTACHMENT0+J;ct.length=it.length,bt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,bt=!0);bt&&i.drawBuffers(ct)}function Nt(N){return w!==N?(i.useProgram(N),w=N,!0):!1}const Ue={[Pi]:i.FUNC_ADD,[Vy]:i.FUNC_SUBTRACT,[ky]:i.FUNC_REVERSE_SUBTRACT};Ue[Wy]=i.MIN,Ue[jy]=i.MAX;const Zt={[Xy]:i.ZERO,[qy]:i.ONE,[Yy]:i.SRC_COLOR,[xo]:i.SRC_ALPHA,[tS]:i.SRC_ALPHA_SATURATE,[Zy]:i.DST_COLOR,[Jy]:i.DST_ALPHA,[Ky]:i.ONE_MINUS_SRC_COLOR,[yo]:i.ONE_MINUS_SRC_ALPHA,[Qy]:i.ONE_MINUS_DST_COLOR,[$y]:i.ONE_MINUS_DST_ALPHA,[eS]:i.CONSTANT_COLOR,[nS]:i.ONE_MINUS_CONSTANT_COLOR,[iS]:i.CONSTANT_ALPHA,[rS]:i.ONE_MINUS_CONSTANT_ALPHA};function se(N,dt,ct,bt,it,J,yt,Ot,me,ae){if(N===Xn){y===!0&&(ut(i.BLEND),y=!1);return}if(y===!1&&(st(i.BLEND),y=!0),N!==Gy){if(N!==g||ae!==M){if((p!==Pi||E!==Pi)&&(i.blendEquation(i.FUNC_ADD),p=Pi,E=Pi),ae)switch(N){case rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xl:i.blendFunc(i.ONE,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",N);break}else switch(N){case rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ql:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",N);break}x=null,T=null,P=null,R=null,I.set(0,0,0),v=0,g=N,M=ae}return}it=it||dt,J=J||ct,yt=yt||bt,(dt!==p||it!==E)&&(i.blendEquationSeparate(Ue[dt],Ue[it]),p=dt,E=it),(ct!==x||bt!==T||J!==P||yt!==R)&&(i.blendFuncSeparate(Zt[ct],Zt[bt],Zt[J],Zt[yt]),x=ct,T=bt,P=J,R=yt),(Ot.equals(I)===!1||me!==v)&&(i.blendColor(Ot.r,Ot.g,Ot.b,me),I.copy(Ot),v=me),g=N,M=!1}function fe(N,dt){N.side===gn?ut(i.CULL_FACE):st(i.CULL_FACE);let ct=N.side===tn;dt&&(ct=!ct),jt(ct),N.blending===rr&&N.transparent===!1?se(Xn):se(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const bt=N.stencilWrite;o.setTest(bt),bt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Re(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(N){V!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),V=N)}function Me(N){N!==zy?(st(i.CULL_FACE),N!==D&&(N===jl?i.cullFace(i.BACK):N===Hy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),D=N}function L(N){N!==H&&(G&&i.lineWidth(N),H=N)}function Re(N,dt,ct){N?(st(i.POLYGON_OFFSET_FILL),(k!==dt||Y!==ct)&&(k=dt,Y=ct,a.getReversed()&&(dt=-dt),i.polygonOffset(dt,ct))):ut(i.POLYGON_OFFSET_FILL)}function ie(N){N?st(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function pe(N){N===void 0&&(N=i.TEXTURE0+X-1),et!==N&&(i.activeTexture(N),et=N)}function Et(N,dt,ct){ct===void 0&&(et===null?ct=i.TEXTURE0+X-1:ct=et);let bt=mt[ct];bt===void 0&&(bt={type:void 0,texture:void 0},mt[ct]=bt),(bt.type!==N||bt.texture!==dt)&&(et!==ct&&(i.activeTexture(ct),et=ct),i.bindTexture(N,dt||Q[N]),bt.type=N,bt.texture=dt)}function A(){const N=mt[et];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function Z(){try{i.texSubImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function tt(){try{i.texSubImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function vt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function ht(){try{i.texStorage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function It(){try{i.texStorage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function Ft(){try{i.texImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function nt(){try{i.texImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function ot(N){Ct.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ct.copy(N))}function xt(N){ne.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ne.copy(N))}function St(N,dt){let ct=l.get(dt);ct===void 0&&(ct=new WeakMap,l.set(dt,ct));let bt=ct.get(N);bt===void 0&&(bt=i.getUniformBlockIndex(dt,N.name),ct.set(N,bt))}function gt(N,dt){const bt=l.get(dt).get(N);c.get(dt)!==bt&&(i.uniformBlockBinding(dt,bt,N.__bindingPointIndex),c.set(dt,bt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},et=null,mt={},f={},d=new WeakMap,m=[],w=null,y=!1,g=null,p=null,x=null,T=null,E=null,P=null,R=null,I=new Wt(0,0,0),v=0,M=!1,V=null,D=null,H=null,k=null,Y=null,Ct.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:st,disable:ut,bindFramebuffer:zt,drawBuffers:Lt,useProgram:Nt,setBlending:se,setMaterial:fe,setFlipSided:jt,setCullFace:Me,setLineWidth:L,setPolygonOffset:Re,setScissorTest:ie,activeTexture:pe,bindTexture:Et,unbindTexture:A,compressedTexImage2D:b,compressedTexImage3D:B,texImage2D:Ft,texImage3D:nt,updateUBOMapping:St,uniformBlockBinding:gt,texStorage2D:ht,texStorage3D:It,texSubImage2D:Z,texSubImage3D:tt,compressedTexSubImage2D:$,compressedTexSubImage3D:vt,scissor:ot,viewport:xt,reset:Xt}}function kR(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Yt,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(A,b){return m?new OffscreenCanvas(A,b):Xs("canvas")}function y(A,b,B){let Z=1;const tt=Et(A);if((tt.width>B||tt.height>B)&&(Z=B/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(Z*tt.width),vt=Math.floor(Z*tt.height);f===void 0&&(f=w($,vt));const ht=b?w($,vt):f;return ht.width=$,ht.height=vt,ht.getContext("2d").drawImage(A,0,0,$,vt),Ut("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+vt+")."),ht}else return"data"in A&&Ut("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,b,B,Z,tt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=b;if(b===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),b===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),b===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),b===i.RGBA){const vt=tt?js:Qt.getTransfer(Z);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=vt===oe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function E(A,b){let B;return A?b===null||b===Dn||b===Hr?B=i.DEPTH24_STENCIL8:b===An?B=i.DEPTH32F_STENCIL8:b===zr&&(B=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Dn||b===Hr?B=i.DEPTH_COMPONENT24:b===An?B=i.DEPTH_COMPONENT32F:b===zr&&(B=i.DEPTH_COMPONENT16),B}function P(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==De&&A.minFilter!==He?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function R(A){const b=A.target;b.removeEventListener("dispose",R),v(b),b.isVideoTexture&&u.delete(b)}function I(A){const b=A.target;b.removeEventListener("dispose",I),V(b)}function v(A){const b=n.get(A);if(b.__webglInit===void 0)return;const B=A.source,Z=d.get(B);if(Z){const tt=Z[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(A),Object.keys(Z).length===0&&d.delete(B)}n.remove(A)}function M(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const B=A.source,Z=d.get(B);delete Z[b.__cacheKey],a.memory.textures--}function V(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let tt=0;tt<b.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=A.textures;for(let Z=0,tt=B.length;Z<tt;Z++){const $=n.get(B[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(A)}let D=0;function H(){D=0}function k(){const A=D;return A>=r.maxTextures&&Ut("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),D+=1,A}function Y(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function X(A,b){const B=n.get(A);if(A.isVideoTexture&&ie(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const Z=A.image;if(Z===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(B,A,b);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function G(A,b){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Q(B,A,b);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function q(A,b){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Q(B,A,b);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function rt(A,b){const B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){st(B,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}const et={[Po]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},mt={[De]:i.NEAREST,[oS]:i.NEAREST_MIPMAP_NEAREST,[ns]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},at={[hS]:i.NEVER,[pS]:i.ALWAYS,[dS]:i.LESS,[Kc]:i.LEQUAL,[uS]:i.EQUAL,[Jc]:i.GEQUAL,[fS]:i.GREATER,[_S]:i.NOTEQUAL};function lt(A,b){if(b.type===An&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===He||b.magFilter===Ra||b.magFilter===ns||b.magFilter===fi||b.minFilter===He||b.minFilter===Ra||b.minFilter===ns||b.minFilter===fi)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,et[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,et[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,et[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,mt[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,mt[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,at[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===De||b.minFilter!==ns&&b.minFilter!==fi||b.type===An&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ct(A,b){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",R));const Z=b.source;let tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));const $=Y(b);if($!==A.__cacheKey){tt[$]===void 0&&(tt[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[$].usedTimes++;const vt=tt[A.__cacheKey];vt!==void 0&&(tt[A.__cacheKey].usedTimes--,vt.usedTimes===0&&M(b)),A.__cacheKey=$,A.__webglTexture=tt[$].texture}return B}function ne(A,b,B){return Math.floor(Math.floor(A/B)/b)}function re(A,b,B,Z){const $=A.updateRanges;if($.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,B,Z,b.data);else{$.sort((nt,ot)=>nt.start-ot.start);let vt=0;for(let nt=1;nt<$.length;nt++){const ot=$[vt],xt=$[nt],St=ot.start+ot.count,gt=ne(xt.start,b.width,4),Xt=ne(ot.start,b.width,4);xt.start<=St+1&&gt===Xt&&ne(xt.start+xt.count-1,b.width,4)===gt?ot.count=Math.max(ot.count,xt.start+xt.count-ot.start):(++vt,$[vt]=xt)}$.length=vt+1;const ht=i.getParameter(i.UNPACK_ROW_LENGTH),It=i.getParameter(i.UNPACK_SKIP_PIXELS),Ft=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let nt=0,ot=$.length;nt<ot;nt++){const xt=$[nt],St=Math.floor(xt.start/4),gt=Math.ceil(xt.count/4),Xt=St%b.width,N=Math.floor(St/b.width),dt=gt,ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Xt,N,dt,ct,B,Z,b.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,It),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ft)}}function Q(A,b,B){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=Ct(A,b),$=b.source;e.bindTexture(Z,A.__webglTexture,i.TEXTURE0+B);const vt=n.get($);if($.version!==vt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const ht=Qt.getPrimaries(Qt.workingColorSpace),It=b.colorSpace===di?null:Qt.getPrimaries(b.colorSpace),Ft=b.colorSpace===di||ht===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let nt=y(b.image,!1,r.maxTextureSize);nt=pe(b,nt);const ot=s.convert(b.format,b.colorSpace),xt=s.convert(b.type);let St=T(b.internalFormat,ot,xt,b.colorSpace,b.isVideoTexture);lt(Z,b);let gt;const Xt=b.mipmaps,N=b.isVideoTexture!==!0,dt=vt.__version===void 0||tt===!0,ct=$.dataReady,bt=P(b,nt);if(b.isDepthTexture)St=E(b.format===Li,b.type),dt&&(N?e.texStorage2D(i.TEXTURE_2D,1,St,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,St,nt.width,nt.height,0,ot,xt,null));else if(b.isDataTexture)if(Xt.length>0){N&&dt&&e.texStorage2D(i.TEXTURE_2D,bt,St,Xt[0].width,Xt[0].height);for(let it=0,J=Xt.length;it<J;it++)gt=Xt[it],N?ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,gt.width,gt.height,ot,xt,gt.data):e.texImage2D(i.TEXTURE_2D,it,St,gt.width,gt.height,0,ot,xt,gt.data);b.generateMipmaps=!1}else N?(dt&&e.texStorage2D(i.TEXTURE_2D,bt,St,nt.width,nt.height),ct&&re(b,nt,ot,xt)):e.texImage2D(i.TEXTURE_2D,0,St,nt.width,nt.height,0,ot,xt,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){N&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,St,Xt[0].width,Xt[0].height,nt.depth);for(let it=0,J=Xt.length;it<J;it++)if(gt=Xt[it],b.format!==wn)if(ot!==null)if(N){if(ct)if(b.layerUpdates.size>0){const yt=Sh(gt.width,gt.height,b.format,b.type);for(const Ot of b.layerUpdates){const me=gt.data.subarray(Ot*yt/gt.data.BYTES_PER_ELEMENT,(Ot+1)*yt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Ot,gt.width,gt.height,1,ot,me)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,gt.width,gt.height,nt.depth,ot,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,St,gt.width,gt.height,nt.depth,0,gt.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,gt.width,gt.height,nt.depth,ot,xt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,St,gt.width,gt.height,nt.depth,0,ot,xt,gt.data)}else{N&&dt&&e.texStorage2D(i.TEXTURE_2D,bt,St,Xt[0].width,Xt[0].height);for(let it=0,J=Xt.length;it<J;it++)gt=Xt[it],b.format!==wn?ot!==null?N?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,gt.width,gt.height,ot,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,St,gt.width,gt.height,0,gt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,gt.width,gt.height,ot,xt,gt.data):e.texImage2D(i.TEXTURE_2D,it,St,gt.width,gt.height,0,ot,xt,gt.data)}else if(b.isDataArrayTexture)if(N){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,St,nt.width,nt.height,nt.depth),ct)if(b.layerUpdates.size>0){const it=Sh(nt.width,nt.height,b.format,b.type);for(const J of b.layerUpdates){const yt=nt.data.subarray(J*it/nt.data.BYTES_PER_ELEMENT,(J+1)*it/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,ot,xt,yt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ot,xt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,nt.width,nt.height,nt.depth,0,ot,xt,nt.data);else if(b.isData3DTexture)N?(dt&&e.texStorage3D(i.TEXTURE_3D,bt,St,nt.width,nt.height,nt.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ot,xt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,St,nt.width,nt.height,nt.depth,0,ot,xt,nt.data);else if(b.isFramebufferTexture){if(dt)if(N)e.texStorage2D(i.TEXTURE_2D,bt,St,nt.width,nt.height);else{let it=nt.width,J=nt.height;for(let yt=0;yt<bt;yt++)e.texImage2D(i.TEXTURE_2D,yt,St,it,J,0,ot,xt,null),it>>=1,J>>=1}}else if(Xt.length>0){if(N&&dt){const it=Et(Xt[0]);e.texStorage2D(i.TEXTURE_2D,bt,St,it.width,it.height)}for(let it=0,J=Xt.length;it<J;it++)gt=Xt[it],N?ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ot,xt,gt):e.texImage2D(i.TEXTURE_2D,it,St,ot,xt,gt);b.generateMipmaps=!1}else if(N){if(dt){const it=Et(nt);e.texStorage2D(i.TEXTURE_2D,bt,St,it.width,it.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,xt,nt)}else e.texImage2D(i.TEXTURE_2D,0,St,ot,xt,nt);g(b)&&p(Z),vt.__version=$.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function st(A,b,B){if(b.image.length!==6)return;const Z=Ct(A,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const $=n.get(tt);if(tt.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const vt=Qt.getPrimaries(Qt.workingColorSpace),ht=b.colorSpace===di?null:Qt.getPrimaries(b.colorSpace),It=b.colorSpace===di||vt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Ft=b.isCompressedTexture||b.image[0].isCompressedTexture,nt=b.image[0]&&b.image[0].isDataTexture,ot=[];for(let J=0;J<6;J++)!Ft&&!nt?ot[J]=y(b.image[J],!0,r.maxCubemapSize):ot[J]=nt?b.image[J].image:b.image[J],ot[J]=pe(b,ot[J]);const xt=ot[0],St=s.convert(b.format,b.colorSpace),gt=s.convert(b.type),Xt=T(b.internalFormat,St,gt,b.colorSpace),N=b.isVideoTexture!==!0,dt=$.__version===void 0||Z===!0,ct=tt.dataReady;let bt=P(b,xt);lt(i.TEXTURE_CUBE_MAP,b);let it;if(Ft){N&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Xt,xt.width,xt.height);for(let J=0;J<6;J++){it=ot[J].mipmaps;for(let yt=0;yt<it.length;yt++){const Ot=it[yt];b.format!==wn?St!==null?N?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,0,0,Ot.width,Ot.height,St,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,Xt,Ot.width,Ot.height,0,Ot.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,0,0,Ot.width,Ot.height,St,gt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,Xt,Ot.width,Ot.height,0,St,gt,Ot.data)}}}else{if(it=b.mipmaps,N&&dt){it.length>0&&bt++;const J=Et(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Xt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){N?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ot[J].width,ot[J].height,St,gt,ot[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,ot[J].width,ot[J].height,0,St,gt,ot[J].data);for(let yt=0;yt<it.length;yt++){const me=it[yt].image[J].image;N?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,0,0,me.width,me.height,St,gt,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,Xt,me.width,me.height,0,St,gt,me.data)}}else{N?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St,gt,ot[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,St,gt,ot[J]);for(let yt=0;yt<it.length;yt++){const Ot=it[yt];N?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,0,0,St,gt,Ot.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,Xt,St,gt,Ot.image[J])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),$.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ut(A,b,B,Z,tt,$){const vt=s.convert(B.format,B.colorSpace),ht=s.convert(B.type),It=T(B.internalFormat,vt,ht,B.colorSpace),Ft=n.get(b),nt=n.get(B);if(nt.__renderTarget=b,!Ft.__hasExternalTextures){const ot=Math.max(1,b.width>>$),xt=Math.max(1,b.height>>$);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,It,ot,xt,b.depth,0,vt,ht,null):e.texImage2D(tt,$,It,ot,xt,0,vt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Re(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,nt.__webglTexture,0,L(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,nt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(A,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const Z=b.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,$=E(b.stencilBuffer,tt),vt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Re(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(b),$,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(b),$,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,$,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,A)}else{const Z=b.textures;for(let tt=0;tt<Z.length;tt++){const $=Z[tt],vt=s.convert($.format,$.colorSpace),ht=s.convert($.type),It=T($.internalFormat,vt,ht,$.colorSpace);Re(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(b),It,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(b),It,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,It,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(A,b,B){const Z=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(b.depthTexture);if(tt.__renderTarget=b,(!tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),lt(i.TEXTURE_CUBE_MAP,b.depthTexture);const Ft=s.convert(b.depthTexture.format),nt=s.convert(b.depthTexture.type);let ot;b.depthTexture.format===ti?ot=i.DEPTH_COMPONENT24:b.depthTexture.format===Li&&(ot=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ot,b.width,b.height,0,Ft,nt,null)}}else X(b.depthTexture,0);const $=tt.__webglTexture,vt=L(b),ht=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,It=b.depthTexture.format===Li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ti)Re(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,ht,$,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,It,ht,$,0);else if(b.depthTexture.format===Li)Re(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,ht,$,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,It,ht,$,0);else throw new Error("Unknown depthTexture format")}function Nt(A){const b=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=Z}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let Z=0;Z<6;Z++)Lt(b.__webglFramebuffer[Z],A,Z);else{const Z=A.texture.mipmaps;Z&&Z.length>0?Lt(b.__webglFramebuffer[0],A,0):Lt(b.__webglFramebuffer,A,0)}else if(B){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),zt(b.__webglDepthbuffer[Z],A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,$)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),zt(b.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,$)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(A,b,B){const Z=n.get(A);b!==void 0&&ut(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Nt(A)}function Zt(A){const b=A.texture,B=n.get(A),Z=n.get(b);A.addEventListener("dispose",I);const tt=A.textures,$=A.isWebGLCubeRenderTarget===!0,vt=tt.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,a.memory.textures++),$){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let It=0;It<b.mipmaps.length;It++)B.__webglFramebuffer[ht][It]=i.createFramebuffer()}else B.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)B.__webglFramebuffer[ht]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ht=0,It=tt.length;ht<It;ht++){const Ft=n.get(tt[ht]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Re(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){const It=tt[ht];B.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);const Ft=s.convert(It.format,It.colorSpace),nt=s.convert(It.type),ot=T(It.internalFormat,Ft,nt,It.colorSpace,A.isXRRenderTarget===!0),xt=L(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,ot,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),lt(i.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let It=0;It<b.mipmaps.length;It++)ut(B.__webglFramebuffer[ht][It],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It);else ut(B.__webglFramebuffer[ht],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ht=0,It=tt.length;ht<It;ht++){const Ft=tt[ht],nt=n.get(Ft);let ot=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,nt.__webglTexture),lt(ot,Ft),ut(B.__webglFramebuffer,A,Ft,i.COLOR_ATTACHMENT0+ht,ot,0),g(Ft)&&p(ot)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Z.__webglTexture),lt(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let It=0;It<b.mipmaps.length;It++)ut(B.__webglFramebuffer[It],A,b,i.COLOR_ATTACHMENT0,ht,It);else ut(B.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ht,0);g(b)&&p(ht),e.unbindTexture()}A.depthBuffer&&Nt(A)}function se(A){const b=A.textures;for(let B=0,Z=b.length;B<Z;B++){const tt=b[B];if(g(tt)){const $=x(A),vt=n.get(tt).__webglTexture;e.bindTexture($,vt),p($),e.unbindTexture()}}}const fe=[],jt=[];function Me(A){if(A.samples>0){if(Re(A)===!1){const b=A.textures,B=A.width,Z=A.height;let tt=i.COLOR_BUFFER_BIT;const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(A),ht=b.length>1;if(ht)for(let Ft=0;Ft<b.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);const It=A.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Ft=0;Ft<b.length;Ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Ft]);const nt=n.get(b[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,tt,i.NEAREST),c===!0&&(fe.length=0,jt.length=0,fe.push(i.COLOR_ATTACHMENT0+Ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(fe.push($),jt.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Ft=0;Ft<b.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Ft]);const nt=n.get(b[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function L(A){return Math.min(r.maxSamples,A.samples)}function Re(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ie(A){const b=a.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function pe(A,b){const B=A.colorSpace,Z=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==dr&&B!==di&&(Qt.getTransfer(B)===oe?(Z!==wn||tt!==sn)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",B)),b}function Et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=rt,this.rebindTextures=Ue,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function WR(i,t){function e(n,r=di){let s;const a=Qt.getTransfer(r);if(n===sn)return i.UNSIGNED_BYTE;if(n===Vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$d)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kd)return i.BYTE;if(n===Jd)return i.SHORT;if(n===zr)return i.UNSIGNED_SHORT;if(n===Gc)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Qn)return i.HALF_FLOAT;if(n===Qd)return i.ALPHA;if(n===tu)return i.RGB;if(n===wn)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===Wc)return i.RED;if(n===jc)return i.RED_INTEGER;if(n===hr)return i.RG;if(n===Xc)return i.RG_INTEGER;if(n===qc)return i.RGBA_INTEGER;if(n===Ds||n===Ls||n===Fs||n===Us)if(a===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ds)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ds)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===Lo||n===Fo||n===Uo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Do)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Oo||n===Bo||n===zo||n===Ho||n===Go||n===Vo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===No||n===Oo)return a===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Bo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===zo)return s.COMPRESSED_R11_EAC;if(n===Ho)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Go)return s.COMPRESSED_RG11_EAC;if(n===Vo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ko||n===Wo||n===jo||n===Xo||n===qo||n===Yo||n===Ko||n===Jo||n===$o||n===Zo||n===Qo||n===tc||n===ec||n===nc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ko)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$o)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nc)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ic||n===rc||n===sc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ic)return a===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ac||n===oc||n===cc||n===lc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ac)return s.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const jR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XR=`
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

}`;class qR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new uu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Fn({vertexShader:jR,fragmentShader:XR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qe(new la(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YR extends mr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,w=null;const y=typeof XRWebGLBinding<"u",g=new qR,p={},x=e.getContextAttributes();let T=null,E=null;const P=[],R=[],I=new Yt;let v=null;const M=new on;M.viewport=new Se;const V=new on;V.viewport=new Se;const D=[M,V],H=new aM;let k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let st=P[Q];return st===void 0&&(st=new Ua,P[Q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Q){let st=P[Q];return st===void 0&&(st=new Ua,P[Q]=st),st.getGripSpace()},this.getHand=function(Q){let st=P[Q];return st===void 0&&(st=new Ua,P[Q]=st),st.getHandSpace()};function X(Q){const st=R.indexOf(Q.inputSource);if(st===-1)return;const ut=P[st];ut!==void 0&&(ut.update(Q.inputSource,Q.frame,l||a),ut.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",q);for(let Q=0;Q<P.length;Q++){const st=R[Q];st!==null&&(R[Q]=null,P[Q].disconnect(st))}k=null,Y=null,g.reset();for(const Q in p)delete p[Q];t.setRenderTarget(T),m=null,d=null,f=null,r=null,E=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",G),r.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,zt=null,Lt=null;x.depth&&(Lt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=x.stencil?Li:ti,zt=x.stencil?Hr:Dn);const Nt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Nt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Cn(d.textureWidth,d.textureHeight,{format:wn,type:sn,depthTexture:new Vr(d.textureWidth,d.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ut={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,ut),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Cn(m.framebufferWidth,m.framebufferHeight,{format:wn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(Q){for(let st=0;st<Q.removed.length;st++){const ut=Q.removed[st],zt=R.indexOf(ut);zt>=0&&(R[zt]=null,P[zt].disconnect(ut))}for(let st=0;st<Q.added.length;st++){const ut=Q.added[st];let zt=R.indexOf(ut);if(zt===-1){for(let Nt=0;Nt<P.length;Nt++)if(Nt>=R.length){R.push(ut),zt=Nt;break}else if(R[Nt]===null){R[Nt]=ut,zt=Nt;break}if(zt===-1)break}const Lt=P[zt];Lt&&Lt.connect(ut)}}const rt=new F,et=new F;function mt(Q,st,ut){rt.setFromMatrixPosition(st.matrixWorld),et.setFromMatrixPosition(ut.matrixWorld);const zt=rt.distanceTo(et),Lt=st.projectionMatrix.elements,Nt=ut.projectionMatrix.elements,Ue=Lt[14]/(Lt[10]-1),Zt=Lt[14]/(Lt[10]+1),se=(Lt[9]+1)/Lt[5],fe=(Lt[9]-1)/Lt[5],jt=(Lt[8]-1)/Lt[0],Me=(Nt[8]+1)/Nt[0],L=Ue*jt,Re=Ue*Me,ie=zt/(-jt+Me),pe=ie*-jt;if(st.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(pe),Q.translateZ(ie),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Lt[10]===-1)Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Et=Ue+ie,A=Zt+ie,b=L-pe,B=Re+(zt-pe),Z=se*Zt/A*Et,tt=fe*Zt/A*Et;Q.projectionMatrix.makePerspective(b,B,Z,tt,Et,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function at(Q,st){st===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(st.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let st=Q.near,ut=Q.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),H.near=V.near=M.near=st,H.far=V.far=M.far=ut,(k!==H.near||Y!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),k=H.near,Y=H.far),H.layers.mask=Q.layers.mask|6,M.layers.mask=H.layers.mask&-5,V.layers.mask=H.layers.mask&-3;const zt=Q.parent,Lt=H.cameras;at(H,zt);for(let Nt=0;Nt<Lt.length;Nt++)at(Lt[Nt],zt);Lt.length===2?mt(H,M,V):H.projectionMatrix.copy(M.projectionMatrix),lt(Q,H,zt)};function lt(Q,st,ut){ut===null?Q.matrix.copy(st.matrixWorld):(Q.matrix.copy(ut.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(st.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=hc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(Q){return p[Q]};let Ct=null;function ne(Q,st){if(u=st.getViewerPose(l||a),w=st,u!==null){const ut=u.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let zt=!1;ut.length!==H.cameras.length&&(H.cameras.length=0,zt=!0);for(let Zt=0;Zt<ut.length;Zt++){const se=ut[Zt];let fe=null;if(m!==null)fe=m.getViewport(se);else{const Me=f.getViewSubImage(d,se);fe=Me.viewport,Zt===0&&(t.setRenderTargetTextures(E,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(E))}let jt=D[Zt];jt===void 0&&(jt=new on,jt.layers.enable(Zt),jt.viewport=new Se,D[Zt]=jt),jt.matrix.fromArray(se.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(se.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(fe.x,fe.y,fe.width,fe.height),Zt===0&&(H.matrix.copy(jt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),zt===!0&&H.cameras.push(jt)}const Lt=r.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=n.getBinding();const Zt=f.getDepthInformation(ut[0]);Zt&&Zt.isValid&&Zt.texture&&g.init(Zt,r.renderState)}if(Lt&&Lt.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let Zt=0;Zt<ut.length;Zt++){const se=ut[Zt].camera;if(se){let fe=p[se];fe||(fe=new uu,p[se]=fe);const jt=f.getCameraImage(se);fe.sourceTexture=jt}}}}for(let ut=0;ut<P.length;ut++){const zt=R[ut],Lt=P[ut];zt!==null&&Lt!==void 0&&Lt.update(zt,st,l||a)}Ct&&Ct(Q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),w=null}const re=new mu;re.setAnimationLoop(ne),this.setAnimationLoop=function(Q){Ct=Q},this.dispose=function(){}}}const Ri=new Ln,KR=new xe;function JR(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,fu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,x,T,E){p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,E)):p.isMeshMatcapMaterial?(s(g,p),w(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),y(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,T):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),T=x.envMap,E=x.envMapRotation;T&&(g.envMap.value=T,Ri.copy(E),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(KR.makeRotationFromEuler(Ri)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $R(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,T){const E=T.program;n.uniformBlockBinding(x,E)}function l(x,T){let E=r[x.id];E===void 0&&(w(x),E=u(x),r[x.id]=E,x.addEventListener("dispose",g));const P=T.program;n.updateUBOMapping(x,P);const R=t.render.frame;s[x.id]!==R&&(d(x),s[x.id]=R)}function u(x){const T=f();x.__bindingPointIndex=T;const E=i.createBuffer(),P=x.__size,R=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const T=r[x.id],E=x.uniforms,P=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,I=E.length;R<I;R++){const v=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,V=v.length;M<V;M++){const D=v[M];if(m(D,R,M,P)===!0){const H=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let X=0;X<k.length;X++){const G=k[X],q=y(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+Y,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,Y),Y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,T,E,P){const R=x.value,I=T+"_"+E;if(P[I]===void 0)return typeof R=="number"||typeof R=="boolean"?P[I]=R:P[I]=R.clone(),!0;{const v=P[I];if(typeof R=="number"||typeof R=="boolean"){if(v!==R)return P[I]=R,!0}else if(v.equals(R)===!1)return v.copy(R),!0}return!1}function w(x){const T=x.uniforms;let E=0;const P=16;for(let I=0,v=T.length;I<v;I++){const M=Array.isArray(T[I])?T[I]:[T[I]];for(let V=0,D=M.length;V<D;V++){const H=M[V],k=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,X=k.length;Y<X;Y++){const G=k[Y],q=y(G),rt=E%P,et=rt%q.boundary,mt=rt+et;E+=et,mt!==0&&P-mt<q.storage&&(E+=P-mt),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=q.storage}}}const R=E%P;return R>0&&(E+=P-R),x.__size=E,x.__cache={},this}function y(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ut("WebGLRenderer: Unsupported uniform value type.",x),T}function g(x){const T=x.target;T.removeEventListener("dispose",g);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}const ZR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mn=null;function QR(){return Mn===null&&(Mn=new lu(ZR,16,16,hr,Qn),Mn.name="DFG_LUT",Mn.minFilter=He,Mn.magFilter=He,Mn.wrapS=jn,Mn.wrapT=jn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class t1{constructor(t={}){const{canvas:e=gS(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=sn}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=a;const y=m,g=new Set([qc,Xc,jc]),p=new Set([sn,Dn,zr,Hr,Vc,kc]),x=new Uint32Array(4),T=new Int32Array(4);let E=null,P=null;const R=[],I=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let V=!1;this._outputColorSpace=Ze;let D=0,H=0,k=null,Y=-1,X=null;const G=new Se,q=new Se;let rt=null;const et=new Wt(0);let mt=0,at=e.width,lt=e.height,Ct=1,ne=null,re=null;const Q=new Se(0,0,at,lt),st=new Se(0,0,at,lt);let ut=!1;const zt=new Zc;let Lt=!1,Nt=!1;const Ue=new xe,Zt=new F,se=new Se,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function Me(){return k===null?Ct:1}let L=n;function Re(S,z){return e.getContext(S,z)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hc}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",me,!1),L===null){const z="webgl2";if(L=Re(z,S),L===null)throw Re(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw ee("WebGLRenderer: "+S.message),S}let ie,pe,Et,A,b,B,Z,tt,$,vt,ht,It,Ft,nt,ot,xt,St,gt,Xt,N,dt,ct,bt;function it(){ie=new tA(L),ie.init(),dt=new WR(L,ie),pe=new XT(L,ie,t,dt),Et=new VR(L,ie),pe.reversedDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),A=new iA(L),b=new RR,B=new kR(L,ie,Et,b,pe,dt,A),Z=new QT(M),tt=new cM(L),ct=new WT(L,tt),$=new eA(L,tt,A,ct),vt=new sA(L,$,tt,ct,A),gt=new rA(L,pe,B),ot=new qT(b),ht=new AR(M,Z,ie,pe,ct,ot),It=new JR(M,b),Ft=new PR,nt=new NR(ie),St=new kT(M,Z,Et,vt,w,c),xt=new GR(M,vt,pe),bt=new $R(L,A,pe,Et),Xt=new jT(L,ie,A),N=new nA(L,ie,A),A.programs=ht.programs,M.capabilities=pe,M.extensions=ie,M.properties=b,M.renderLists=Ft,M.shadowMap=xt,M.state=Et,M.info=A}it(),y!==sn&&(v=new oA(y,e.width,e.height,r,s));const J=new YR(M,L);this.xr=J,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=ie.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ie.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ct},this.setPixelRatio=function(S){S!==void 0&&(Ct=S,this.setSize(at,lt,!1))},this.getSize=function(S){return S.set(at,lt)},this.setSize=function(S,z,K=!0){if(J.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}at=S,lt=z,e.width=Math.floor(S*Ct),e.height=Math.floor(z*Ct),K===!0&&(e.style.width=S+"px",e.style.height=z+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(at*Ct,lt*Ct).floor()},this.setDrawingBufferSize=function(S,z,K){at=S,lt=z,Ct=K,e.width=Math.floor(S*K),e.height=Math.floor(z*K),this.setViewport(0,0,S,z)},this.setEffects=function(S){if(y===sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let z=0;z<S.length;z++)if(S[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(G)},this.getViewport=function(S){return S.copy(Q)},this.setViewport=function(S,z,K,j){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,z,K,j),Et.viewport(G.copy(Q).multiplyScalar(Ct).round())},this.getScissor=function(S){return S.copy(st)},this.setScissor=function(S,z,K,j){S.isVector4?st.set(S.x,S.y,S.z,S.w):st.set(S,z,K,j),Et.scissor(q.copy(st).multiplyScalar(Ct).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(S){Et.setScissorTest(ut=S)},this.setOpaqueSort=function(S){ne=S},this.setTransparentSort=function(S){re=S},this.getClearColor=function(S){return S.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,K=!0){let j=0;if(S){let W=!1;if(k!==null){const _t=k.texture.format;W=g.has(_t)}if(W){const _t=k.texture.type,wt=p.has(_t),pt=St.getClearColor(),Mt=St.getClearAlpha(),At=pt.r,Bt=pt.g,qt=pt.b;wt?(x[0]=At,x[1]=Bt,x[2]=qt,x[3]=Mt,L.clearBufferuiv(L.COLOR,0,x)):(T[0]=At,T[1]=Bt,T[2]=qt,T[3]=Mt,L.clearBufferiv(L.COLOR,0,T))}else j|=L.COLOR_BUFFER_BIT}z&&(j|=L.DEPTH_BUFFER_BIT),K&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",me,!1),St.dispose(),Ft.dispose(),nt.dispose(),b.dispose(),Z.dispose(),vt.dispose(),ct.dispose(),bt.dispose(),ht.dispose(),J.dispose(),J.removeEventListener("sessionstart",ul),J.removeEventListener("sessionend",fl),xi.stop()};function yt(S){S.preventDefault(),Ql("WebGLRenderer: Context Lost."),V=!0}function Ot(){Ql("WebGLRenderer: Context Restored."),V=!1;const S=A.autoReset,z=xt.enabled,K=xt.autoUpdate,j=xt.needsUpdate,W=xt.type;it(),A.autoReset=S,xt.enabled=z,xt.autoUpdate=K,xt.needsUpdate=j,xt.type=W}function me(S){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ae(S){const z=S.target;z.removeEventListener("dispose",ae),On(z)}function On(S){Bn(S),b.remove(S)}function Bn(S){const z=b.get(S).programs;z!==void 0&&(z.forEach(function(K){ht.releaseProgram(K)}),S.isShaderMaterial&&ht.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,K,j,W,_t){z===null&&(z=fe);const wt=W.isMesh&&W.matrixWorld.determinant()<0,pt=zu(S,z,K,j,W);Et.setMaterial(j,wt);let Mt=K.index,At=1;if(j.wireframe===!0){if(Mt=$.getWireframeAttribute(K),Mt===void 0)return;At=2}const Bt=K.drawRange,qt=K.attributes.position;let Rt=Bt.start*At,ce=(Bt.start+Bt.count)*At;_t!==null&&(Rt=Math.max(Rt,_t.start*At),ce=Math.min(ce,(_t.start+_t.count)*At)),Mt!==null?(Rt=Math.max(Rt,0),ce=Math.min(ce,Mt.count)):qt!=null&&(Rt=Math.max(Rt,0),ce=Math.min(ce,qt.count));const Ee=ce-Rt;if(Ee<0||Ee===1/0)return;ct.setup(W,j,pt,K,Mt);let ye,le=Xt;if(Mt!==null&&(ye=tt.get(Mt),le=N,le.setIndex(ye)),W.isMesh)j.wireframe===!0?(Et.setLineWidth(j.wireframeLinewidth*Me()),le.setMode(L.LINES)):le.setMode(L.TRIANGLES);else if(W.isLine){let ke=j.linewidth;ke===void 0&&(ke=1),Et.setLineWidth(ke*Me()),W.isLineSegments?le.setMode(L.LINES):W.isLineLoop?le.setMode(L.LINE_LOOP):le.setMode(L.LINE_STRIP)}else W.isPoints?le.setMode(L.POINTS):W.isSprite&&le.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)qs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))le.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const ke=W._multiDrawStarts,Tt=W._multiDrawCounts,en=W._multiDrawCount,te=Mt?tt.get(Mt).bytesPerElement:1,hn=b.get(j).currentProgram.getUniforms();for(let yn=0;yn<en;yn++)hn.setValue(L,"_gl_DrawID",yn),le.render(ke[yn]/te,Tt[yn])}else if(W.isInstancedMesh)le.renderInstances(Rt,Ee,W.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Tt=Math.min(K.instanceCount,ke);le.renderInstances(Rt,Ee,Tt)}else le.render(Rt,Ee)};function dl(S,z,K){S.transparent===!0&&S.side===gn&&S.forceSinglePass===!1?(S.side=tn,S.needsUpdate=!0,$r(S,z,K),S.side=bi,S.needsUpdate=!0,$r(S,z,K),S.side=gn):$r(S,z,K)}this.compile=function(S,z,K=null){K===null&&(K=S),P=nt.get(K),P.init(z),I.push(P),K.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(P.pushLight(W),W.castShadow&&P.pushShadow(W))}),S!==K&&S.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(P.pushLight(W),W.castShadow&&P.pushShadow(W))}),P.setupLights();const j=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const _t=W.material;if(_t)if(Array.isArray(_t))for(let wt=0;wt<_t.length;wt++){const pt=_t[wt];dl(pt,K,W),j.add(pt)}else dl(_t,K,W),j.add(_t)}),P=I.pop(),j},this.compileAsync=function(S,z,K=null){const j=this.compile(S,z,K);return new Promise(W=>{function _t(){if(j.forEach(function(wt){b.get(wt).currentProgram.isReady()&&j.delete(wt)}),j.size===0){W(S);return}setTimeout(_t,10)}ie.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let _a=null;function Bu(S){_a&&_a(S)}function ul(){xi.stop()}function fl(){xi.start()}const xi=new mu;xi.setAnimationLoop(Bu),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(S){_a=S,J.setAnimationLoop(S),S===null?xi.stop():xi.start()},J.addEventListener("sessionstart",ul),J.addEventListener("sessionend",fl),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;const K=J.enabled===!0&&J.isPresenting===!0,j=v!==null&&(k===null||K)&&v.begin(M,k);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(z),z=J.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,z,k),P=nt.get(S,I.length),P.init(z),I.push(P),Ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),zt.setFromProjectionMatrix(Ue,Rn,z.reversedDepth),Nt=this.localClippingEnabled,Lt=ot.init(this.clippingPlanes,Nt),E=Ft.get(S,R.length),E.init(),R.push(E),J.enabled===!0&&J.isPresenting===!0){const wt=M.xr.getDepthSensingMesh();wt!==null&&pa(wt,z,-1/0,M.sortObjects)}pa(S,z,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(ne,re),jt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,jt&&St.addToRenderList(E,S),this.info.render.frame++,Lt===!0&&ot.beginShadows();const W=P.state.shadowsArray;if(xt.render(W,S,z),Lt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&v.hasRenderPass())===!1){const wt=E.opaque,pt=E.transmissive;if(P.setupLights(),z.isArrayCamera){const Mt=z.cameras;if(pt.length>0)for(let At=0,Bt=Mt.length;At<Bt;At++){const qt=Mt[At];pl(wt,pt,S,qt)}jt&&St.render(S);for(let At=0,Bt=Mt.length;At<Bt;At++){const qt=Mt[At];_l(E,S,qt,qt.viewport)}}else pt.length>0&&pl(wt,pt,S,z),jt&&St.render(S),_l(E,S,z)}k!==null&&H===0&&(B.updateMultisampleRenderTarget(k),B.updateRenderTargetMipmap(k)),j&&v.end(M),S.isScene===!0&&S.onAfterRender(M,S,z),ct.resetDefaultState(),Y=-1,X=null,I.pop(),I.length>0?(P=I[I.length-1],Lt===!0&&ot.setGlobalState(M.clippingPlanes,P.state.camera)):P=null,R.pop(),R.length>0?E=R[R.length-1]:E=null};function pa(S,z,K,j){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)P.pushLight(S),S.castShadow&&P.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||zt.intersectsSprite(S)){j&&se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ue);const wt=vt.update(S),pt=S.material;pt.visible&&E.push(S,wt,pt,K,se.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||zt.intersectsObject(S))){const wt=vt.update(S),pt=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),se.copy(S.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),se.copy(wt.boundingSphere.center)),se.applyMatrix4(S.matrixWorld).applyMatrix4(Ue)),Array.isArray(pt)){const Mt=wt.groups;for(let At=0,Bt=Mt.length;At<Bt;At++){const qt=Mt[At],Rt=pt[qt.materialIndex];Rt&&Rt.visible&&E.push(S,wt,Rt,K,se.z,qt)}}else pt.visible&&E.push(S,wt,pt,K,se.z,null)}}const _t=S.children;for(let wt=0,pt=_t.length;wt<pt;wt++)pa(_t[wt],z,K,j)}function _l(S,z,K,j){const{opaque:W,transmissive:_t,transparent:wt}=S;P.setupLightsView(K),Lt===!0&&ot.setGlobalState(M.clippingPlanes,K),j&&Et.viewport(G.copy(j)),W.length>0&&Jr(W,z,K),_t.length>0&&Jr(_t,z,K),wt.length>0&&Jr(wt,z,K),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function pl(S,z,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[j.id]===void 0){const Rt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[j.id]=new Cn(1,1,{generateMipmaps:!0,type:Rt?Qn:sn,minFilter:fi,samples:Math.max(4,pe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const _t=P.state.transmissionRenderTarget[j.id],wt=j.viewport||G;_t.setSize(wt.z*M.transmissionResolutionScale,wt.w*M.transmissionResolutionScale);const pt=M.getRenderTarget(),Mt=M.getActiveCubeFace(),At=M.getActiveMipmapLevel();M.setRenderTarget(_t),M.getClearColor(et),mt=M.getClearAlpha(),mt<1&&M.setClearColor(16777215,.5),M.clear(),jt&&St.render(K);const Bt=M.toneMapping;M.toneMapping=bn;const qt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),P.setupLightsView(j),Lt===!0&&ot.setGlobalState(M.clippingPlanes,j),Jr(S,K,j),B.updateMultisampleRenderTarget(_t),B.updateRenderTargetMipmap(_t),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ce=0,Ee=z.length;ce<Ee;ce++){const ye=z[ce],{object:le,geometry:ke,material:Tt,group:en}=ye;if(Tt.side===gn&&le.layers.test(j.layers)){const te=Tt.side;Tt.side=tn,Tt.needsUpdate=!0,ml(le,K,j,ke,Tt,en),Tt.side=te,Tt.needsUpdate=!0,Rt=!0}}Rt===!0&&(B.updateMultisampleRenderTarget(_t),B.updateRenderTargetMipmap(_t))}M.setRenderTarget(pt,Mt,At),M.setClearColor(et,mt),qt!==void 0&&(j.viewport=qt),M.toneMapping=Bt}function Jr(S,z,K){const j=z.isScene===!0?z.overrideMaterial:null;for(let W=0,_t=S.length;W<_t;W++){const wt=S[W],{object:pt,geometry:Mt,group:At}=wt;let Bt=wt.material;Bt.allowOverride===!0&&j!==null&&(Bt=j),pt.layers.test(K.layers)&&ml(pt,z,K,Mt,Bt,At)}}function ml(S,z,K,j,W,_t){S.onBeforeRender(M,z,K,j,W,_t),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(M,z,K,j,S,_t),W.transparent===!0&&W.side===gn&&W.forceSinglePass===!1?(W.side=tn,W.needsUpdate=!0,M.renderBufferDirect(K,z,j,W,S,_t),W.side=bi,W.needsUpdate=!0,M.renderBufferDirect(K,z,j,W,S,_t),W.side=gn):M.renderBufferDirect(K,z,j,W,S,_t),S.onAfterRender(M,z,K,j,W,_t)}function $r(S,z,K){z.isScene!==!0&&(z=fe);const j=b.get(S),W=P.state.lights,_t=P.state.shadowsArray,wt=W.state.version,pt=ht.getParameters(S,W.state,_t,z,K),Mt=ht.getProgramCacheKey(pt);let At=j.programs;j.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?z.environment:null,j.fog=z.fog;const Bt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;j.envMap=Z.get(S.envMap||j.environment,Bt),j.envMapRotation=j.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,At===void 0&&(S.addEventListener("dispose",ae),At=new Map,j.programs=At);let qt=At.get(Mt);if(qt!==void 0){if(j.currentProgram===qt&&j.lightsStateVersion===wt)return wl(S,pt),qt}else pt.uniforms=ht.getUniforms(S),S.onBeforeCompile(pt,M),qt=ht.acquireProgram(pt,Mt),At.set(Mt,qt),j.uniforms=pt.uniforms;const Rt=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=ot.uniform),wl(S,pt),j.needsLights=Gu(S),j.lightsStateVersion=wt,j.needsLights&&(Rt.ambientLightColor.value=W.state.ambient,Rt.lightProbe.value=W.state.probe,Rt.directionalLights.value=W.state.directional,Rt.directionalLightShadows.value=W.state.directionalShadow,Rt.spotLights.value=W.state.spot,Rt.spotLightShadows.value=W.state.spotShadow,Rt.rectAreaLights.value=W.state.rectArea,Rt.ltc_1.value=W.state.rectAreaLTC1,Rt.ltc_2.value=W.state.rectAreaLTC2,Rt.pointLights.value=W.state.point,Rt.pointLightShadows.value=W.state.pointShadow,Rt.hemisphereLights.value=W.state.hemi,Rt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Rt.spotLightMatrix.value=W.state.spotLightMatrix,Rt.spotLightMap.value=W.state.spotLightMap,Rt.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=qt,j.uniformsList=null,qt}function gl(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=Os.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function wl(S,z){const K=b.get(S);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function zu(S,z,K,j,W){z.isScene!==!0&&(z=fe),B.resetTextureUnits();const _t=z.fog,wt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?z.environment:null,pt=k===null?M.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:dr,Mt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,At=Z.get(j.envMap||wt,Mt),Bt=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qt=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Rt=!!K.morphAttributes.position,ce=!!K.morphAttributes.normal,Ee=!!K.morphAttributes.color;let ye=bn;j.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ye=M.toneMapping);const le=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ke=le!==void 0?le.length:0,Tt=b.get(j),en=P.state.lights;if(Lt===!0&&(Nt===!0||S!==X)){const Ne=S===X&&j.id===Y;ot.setState(j,S,Ne)}let te=!1;j.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==en.state.version||Tt.outputColorSpace!==pt||W.isBatchedMesh&&Tt.batching===!1||!W.isBatchedMesh&&Tt.batching===!0||W.isBatchedMesh&&Tt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Tt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Tt.instancing===!1||!W.isInstancedMesh&&Tt.instancing===!0||W.isSkinnedMesh&&Tt.skinning===!1||!W.isSkinnedMesh&&Tt.skinning===!0||W.isInstancedMesh&&Tt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Tt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Tt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Tt.instancingMorph===!1&&W.morphTexture!==null||Tt.envMap!==At||j.fog===!0&&Tt.fog!==_t||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==ot.numPlanes||Tt.numIntersection!==ot.numIntersection)||Tt.vertexAlphas!==Bt||Tt.vertexTangents!==qt||Tt.morphTargets!==Rt||Tt.morphNormals!==ce||Tt.morphColors!==Ee||Tt.toneMapping!==ye||Tt.morphTargetsCount!==ke)&&(te=!0):(te=!0,Tt.__version=j.version);let hn=Tt.currentProgram;te===!0&&(hn=$r(j,z,W));let yn=!1,yi=!1,Gi=!1;const _e=hn.getUniforms(),Ge=Tt.uniforms;if(Et.useProgram(hn.program)&&(yn=!0,yi=!0,Gi=!0),j.id!==Y&&(Y=j.id,yi=!0),yn||X!==S){Et.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),_e.setValue(L,"projectionMatrix",S.projectionMatrix),_e.setValue(L,"viewMatrix",S.matrixWorldInverse);const ii=_e.map.cameraPosition;ii!==void 0&&ii.setValue(L,Zt.setFromMatrixPosition(S.matrixWorld)),pe.logarithmicDepthBuffer&&_e.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_e.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),X!==S&&(X=S,yi=!0,Gi=!0)}if(Tt.needsLights&&(en.state.directionalShadowMap.length>0&&_e.setValue(L,"directionalShadowMap",en.state.directionalShadowMap,B),en.state.spotShadowMap.length>0&&_e.setValue(L,"spotShadowMap",en.state.spotShadowMap,B),en.state.pointShadowMap.length>0&&_e.setValue(L,"pointShadowMap",en.state.pointShadowMap,B)),W.isSkinnedMesh){_e.setOptional(L,W,"bindMatrix"),_e.setOptional(L,W,"bindMatrixInverse");const Ne=W.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),_e.setValue(L,"boneTexture",Ne.boneTexture,B))}W.isBatchedMesh&&(_e.setOptional(L,W,"batchingTexture"),_e.setValue(L,"batchingTexture",W._matricesTexture,B),_e.setOptional(L,W,"batchingIdTexture"),_e.setValue(L,"batchingIdTexture",W._indirectTexture,B),_e.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&_e.setValue(L,"batchingColorTexture",W._colorsTexture,B));const ni=K.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&gt.update(W,K,hn),(yi||Tt.receiveShadow!==W.receiveShadow)&&(Tt.receiveShadow=W.receiveShadow,_e.setValue(L,"receiveShadow",W.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&z.environment!==null&&(Ge.envMapIntensity.value=z.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=QR()),yi&&(_e.setValue(L,"toneMappingExposure",M.toneMappingExposure),Tt.needsLights&&Hu(Ge,Gi),_t&&j.fog===!0&&It.refreshFogUniforms(Ge,_t),It.refreshMaterialUniforms(Ge,j,Ct,lt,P.state.transmissionRenderTarget[S.id]),Os.upload(L,gl(Tt),Ge,B)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Os.upload(L,gl(Tt),Ge,B),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_e.setValue(L,"center",W.center),_e.setValue(L,"modelViewMatrix",W.modelViewMatrix),_e.setValue(L,"normalMatrix",W.normalMatrix),_e.setValue(L,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ne=j.uniformsGroups;for(let ii=0,Vi=Ne.length;ii<Vi;ii++){const bl=Ne[ii];bt.update(bl,hn),bt.bind(bl,hn)}}return hn}function Hu(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Gu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(S,z,K){const j=b.get(S);j.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),b.get(S.texture).__webglTexture=z,b.get(S.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){const K=b.get(S);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0};const Vu=L.createFramebuffer();this.setRenderTarget=function(S,z=0,K=0){k=S,D=z,H=K;let j=null,W=!1,_t=!1;if(S){const pt=b.get(S);if(pt.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(L.FRAMEBUFFER,pt.__webglFramebuffer),G.copy(S.viewport),q.copy(S.scissor),rt=S.scissorTest,Et.viewport(G),Et.scissor(q),Et.setScissorTest(rt),Y=-1;return}else if(pt.__webglFramebuffer===void 0)B.setupRenderTarget(S);else if(pt.__hasExternalTextures)B.rebindTextures(S,b.get(S.texture).__webglTexture,b.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Bt=S.depthTexture;if(pt.__boundDepthTexture!==Bt){if(Bt!==null&&b.has(Bt)&&(S.width!==Bt.image.width||S.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(S)}}const Mt=S.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(_t=!0);const At=b.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(At[z])?j=At[z][K]:j=At[z],W=!0):S.samples>0&&B.useMultisampledRTT(S)===!1?j=b.get(S).__webglMultisampledFramebuffer:Array.isArray(At)?j=At[K]:j=At,G.copy(S.viewport),q.copy(S.scissor),rt=S.scissorTest}else G.copy(Q).multiplyScalar(Ct).floor(),q.copy(st).multiplyScalar(Ct).floor(),rt=ut;if(K!==0&&(j=Vu),Et.bindFramebuffer(L.FRAMEBUFFER,j)&&Et.drawBuffers(S,j),Et.viewport(G),Et.scissor(q),Et.setScissorTest(rt),W){const pt=b.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,pt.__webglTexture,K)}else if(_t){const pt=z;for(let Mt=0;Mt<S.textures.length;Mt++){const At=b.get(S.textures[Mt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Mt,At.__webglTexture,K,pt)}}else if(S!==null&&K!==0){const pt=b.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pt.__webglTexture,K)}Y=-1},this.readRenderTargetPixels=function(S,z,K,j,W,_t,wt,pt=0){if(!(S&&S.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(Mt=Mt[wt]),Mt){Et.bindFramebuffer(L.FRAMEBUFFER,Mt);try{const At=S.textures[pt],Bt=At.format,qt=At.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pt),!pe.textureFormatReadable(Bt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(qt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-j&&K>=0&&K<=S.height-W&&L.readPixels(z,K,j,W,dt.convert(Bt),dt.convert(qt),_t)}finally{const At=k!==null?b.get(k).__webglFramebuffer:null;Et.bindFramebuffer(L.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(S,z,K,j,W,_t,wt,pt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(Mt=Mt[wt]),Mt)if(z>=0&&z<=S.width-j&&K>=0&&K<=S.height-W){Et.bindFramebuffer(L.FRAMEBUFFER,Mt);const At=S.textures[pt],Bt=At.format,qt=At.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pt),!pe.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.bufferData(L.PIXEL_PACK_BUFFER,_t.byteLength,L.STREAM_READ),L.readPixels(z,K,j,W,dt.convert(Bt),dt.convert(qt),0);const ce=k!==null?b.get(k).__webglFramebuffer:null;Et.bindFramebuffer(L.FRAMEBUFFER,ce);const Ee=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await wS(L,Ee,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_t),L.deleteBuffer(Rt),L.deleteSync(Ee),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,K=0){const j=Math.pow(2,-K),W=Math.floor(S.image.width*j),_t=Math.floor(S.image.height*j),wt=z!==null?z.x:0,pt=z!==null?z.y:0;B.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,wt,pt,W,_t),Et.unbindTexture()};const ku=L.createFramebuffer(),Wu=L.createFramebuffer();this.copyTextureToTexture=function(S,z,K=null,j=null,W=0,_t=0){let wt,pt,Mt,At,Bt,qt,Rt,ce,Ee;const ye=S.isCompressedTexture?S.mipmaps[_t]:S.image;if(K!==null)wt=K.max.x-K.min.x,pt=K.max.y-K.min.y,Mt=K.isBox3?K.max.z-K.min.z:1,At=K.min.x,Bt=K.min.y,qt=K.isBox3?K.min.z:0;else{const Ge=Math.pow(2,-W);wt=Math.floor(ye.width*Ge),pt=Math.floor(ye.height*Ge),S.isDataArrayTexture?Mt=ye.depth:S.isData3DTexture?Mt=Math.floor(ye.depth*Ge):Mt=1,At=0,Bt=0,qt=0}j!==null?(Rt=j.x,ce=j.y,Ee=j.z):(Rt=0,ce=0,Ee=0);const le=dt.convert(z.format),ke=dt.convert(z.type);let Tt;z.isData3DTexture?(B.setTexture3D(z,0),Tt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(B.setTexture2DArray(z,0),Tt=L.TEXTURE_2D_ARRAY):(B.setTexture2D(z,0),Tt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const en=L.getParameter(L.UNPACK_ROW_LENGTH),te=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hn=L.getParameter(L.UNPACK_SKIP_PIXELS),yn=L.getParameter(L.UNPACK_SKIP_ROWS),yi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ye.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);const Gi=S.isDataArrayTexture||S.isData3DTexture,_e=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){const Ge=b.get(S),ni=b.get(z),Ne=b.get(Ge.__renderTarget),ii=b.get(ni.__renderTarget);Et.bindFramebuffer(L.READ_FRAMEBUFFER,Ne.__webglFramebuffer),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Vi=0;Vi<Mt;Vi++)Gi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(S).__webglTexture,W,qt+Vi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(z).__webglTexture,_t,Ee+Vi)),L.blitFramebuffer(At,Bt,wt,pt,Rt,ce,wt,pt,L.DEPTH_BUFFER_BIT,L.NEAREST);Et.bindFramebuffer(L.READ_FRAMEBUFFER,null),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||b.has(S)){const Ge=b.get(S),ni=b.get(z);Et.bindFramebuffer(L.READ_FRAMEBUFFER,ku),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,Wu);for(let Ne=0;Ne<Mt;Ne++)Gi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,W,qt+Ne):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,W),_e?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ni.__webglTexture,_t,Ee+Ne):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ni.__webglTexture,_t),W!==0?L.blitFramebuffer(At,Bt,wt,pt,Rt,ce,wt,pt,L.COLOR_BUFFER_BIT,L.NEAREST):_e?L.copyTexSubImage3D(Tt,_t,Rt,ce,Ee+Ne,At,Bt,wt,pt):L.copyTexSubImage2D(Tt,_t,Rt,ce,At,Bt,wt,pt);Et.bindFramebuffer(L.READ_FRAMEBUFFER,null),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _e?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Tt,_t,Rt,ce,Ee,wt,pt,Mt,le,ke,ye.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Tt,_t,Rt,ce,Ee,wt,pt,Mt,le,ye.data):L.texSubImage3D(Tt,_t,Rt,ce,Ee,wt,pt,Mt,le,ke,ye):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_t,Rt,ce,wt,pt,le,ke,ye.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_t,Rt,ce,ye.width,ye.height,le,ye.data):L.texSubImage2D(L.TEXTURE_2D,_t,Rt,ce,wt,pt,le,ke,ye);L.pixelStorei(L.UNPACK_ROW_LENGTH,en),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,te),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hn),L.pixelStorei(L.UNPACK_SKIP_ROWS,yn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,yi),_t===0&&z.generateMipmaps&&L.generateMipmap(Tt),Et.unbindTexture()},this.initRenderTarget=function(S){b.get(S).__webglFramebuffer===void 0&&B.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?B.setTextureCube(S,0):S.isData3DTexture?B.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?B.setTexture2DArray(S,0):B.setTexture2D(S,0),Et.unbindTexture()},this.resetState=function(){D=0,H=0,k=null,Et.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const qh=["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],e1={4:4,6:6,8:8,12:12,20:20},n1={4:1,6:2,8:1,12:3,20:1},i1={4:.72,6:.68,8:.89,12:.7,20:.85};function r1(i){const t=new Wt(i),e={h:0,s:0,l:0};t.getHSL(e);const n=new Wt().setHSL(e.h,Math.min(1,e.s*1.3),Math.min(.68,e.l+.14)),r=new Wt().setHSL(e.h,Math.min(1,e.s*1.36),Math.min(.58,e.l+.06)),s=new Wt().setHSL(e.h,Math.min(1,e.s*1.2),Math.max(.24,e.l-.16));return{hi:`#${n.getHexString()}`,mid:`#${r.getHexString()}`,lo:`#${s.getHexString()}`}}const s1={x:.5,y:.3},a1={x:.7,y:.74},o1={x:.3,y:.74},Yh={x:.5,y:.41},fc={x:.5,y:.94},_c={x:.15,y:.26},pc={x:.85,y:.26},Kh={x:(fc.x+_c.x+pc.x)/3,y:(fc.y+_c.y+pc.y)/3},Jh={x:Kh.x,y:Kh.y},c1=(()=>{const i=new Uint8Array([48,128,204,255]),t=new lu(i,4,1,Wc);return t.needsUpdate=!0,t.minFilter=De,t.magFilter=De,t.generateMipmaps=!1,t})(),$h=new Map,Zh=new Map,mc=new F(0,1,0),l1=new F(1,0,0),Qh=new Bi,h1=new F,d1=new Set([6,8,12,20]),td=new Map;function u1(i){const t=i.length,e=[];for(let o=0;o<t;o++)for(let c=o+1;c<t;c++)e.push({i:o,j:c,dot:i[o].dot(i[c])});e.sort((o,c)=>o.dot!==c.dot?o.dot-c.dot:o.i!==c.i?o.i-c.i:o.j-c.j);const n=new Array(t).fill(!1),r=[];for(const o of e)n[o.i]||n[o.j]||(n[o.i]=!0,n[o.j]=!0,r.push({a:o.i,b:o.j}));r.sort((o,c)=>{const l=Math.min(o.a,o.b),u=Math.min(c.a,c.b);if(l!==u)return l-u;const f=Math.max(o.a,o.b),d=Math.max(c.a,c.b);return f-d});const s=new Array(t).fill(1);let a=1;for(const o of r)s[o.a]=a,s[o.b]=t+1-a,a++;return s}function f1(i){let t=td.get(i);return t||(t=u1(Su(i).faceNormals),td.set(i,t)),t}function yu(i,t){return d1.has(i)?f1(i)[t]??1:t+1}function _1(i,t,e,n){const r=i.measureText(t),s=r.actualBoundingBoxLeft??r.width*.5,a=r.actualBoundingBoxRight??r.width*.5,o=r.actualBoundingBoxAscent??0,c=r.actualBoundingBoxDescent??0,l=e+(s-a)*.5,u=n+(o-c)*.5;return i.fillText(t,l,u),{drawX:l,drawY:u,left:s,right:a,ascent:o,descent:c}}function p1(i,t,e){const r=document.createElement("canvas");r.width=256,r.height=256;const s=r.getContext("2d"),a=r1(t);s.fillStyle=a.mid,s.fillRect(0,0,256,256);const o=e===20?i>=10?46:56:e===8?i>=10?66:86:e===12?i>=10?118:161:e===6?i>=10?104:161:i>=10?90:140;s.font=`bold ${o}px Arial, sans-serif`,s.textAlign="left",s.textBaseline="alphabetic";const c=e===20?256*Yh.x:e===8?256*Jh.x:256/2,l=e===20?256*Yh.y:e===8?256*Jh.y:256/2;s.fillStyle="#0a0a0a";const u=String(i),f=_1(s,u,c,l);if(e>=9&&(i===6||i===9)){const w=(e===20?6:10)*.9,y=e===20?1:2,g=e===20?1:2,p=f.drawX+f.right,x=f.drawY+f.descent,T=Math.min(256-w-6,p+y),E=Math.min(256-w-6,x+g);s.fillStyle="#0a0a0a",s.beginPath(),s.arc(T,E,w,0,Math.PI*2),s.fill()}const d=new jS(r);return d.colorSpace=Ze,d.generateMipmaps=e!==20,d.minFilter=e===20?He:fi,d.magFilter=He,d.anisotropy=1,d}function m1(i,t,e){const n=`${e}|${t}|${i}`;let r=Zh.get(n);return r||(r=p1(i,t,e),Zh.set(n,r)),r}function g1(i,t,e){const n=e*3;for(let r=0;r<t;r++)i.addGroup(r*n,n,r)}function ed(i,t,e,n,r,s){if(e!==1||!i.attributes.uv)return;const a=i.attributes.uv;for(let o=0;o<t;o++){const c=o*3;a.setXY(c,n.x,n.y),a.setXY(c+1,r.x,r.y),a.setXY(c+2,s.x,s.y)}a.needsUpdate=!0}function w1(i,t,e){if(!i.attributes.uv||e<1)return;const n=i.attributes.position,r=i.attributes.uv,s=e*3,a=new F,o=new F,c=new F,l=new F,u=new F,f=new F,d=new F;for(let m=0;m<t;m++){const w=m*s;a.fromBufferAttribute(n,w),o.fromBufferAttribute(n,w+1),c.fromBufferAttribute(n,w+2),l.crossVectors(o.clone().sub(a),c.clone().sub(a)).normalize();const y=Math.abs(l.dot(mc))>.92?l1:mc;u.crossVectors(y,l).normalize(),f.crossVectors(l,u).normalize();let g=1/0,p=-1/0,x=1/0,T=-1/0;for(let R=0;R<s;R++){d.fromBufferAttribute(n,w+R);const I=d.dot(u),v=d.dot(f);I<g&&(g=I),I>p&&(p=I),v<x&&(x=v),v>T&&(T=v)}const E=Math.max(1e-6,p-g),P=Math.max(1e-6,T-x);for(let R=0;R<s;R++){d.fromBufferAttribute(n,w+R);const I=d.dot(u),v=d.dot(f),M=(I-g)/E,V=(v-x)/P;r.setXY(w+R,M,V)}}r.needsUpdate=!0}function b1(i,t,e){const n=i.attributes.position,r=e*3,s=[];for(let a=0;a<t;a++){const o=new F;for(let c=0;c<e;c++){const l=a*r+c*3,u=new F().fromBufferAttribute(n,l),f=new F().fromBufferAttribute(n,l+1),d=new F().fromBufferAttribute(n,l+2);o.add(new F().crossVectors(f.clone().sub(u),d.clone().sub(u)).normalize())}s.push(o.normalize())}return s}function Su(i){const t=$h.get(i);if(t)return t;const e=e1[i],n=n1[i],r=i1[i];let s;i===4?s=new il(r):i===6?s=new gr(r*1.72,r*1.72,r*1.72):i===8?s=new nl(r*1.08):i===12?s=new tl(r*1.06):s=new el(r*1.08,0);const a=new Float32Array(s.attributes.position.array),o=s.index?s.toNonIndexed():s.clone();s.dispose(),o.groups.length===0&&g1(o,e,n),i===12&&w1(o,e,n),i===8&&ed(o,e,n,fc,_c,pc),i===20&&ed(o,e,n,s1,a1,o1),o.computeVertexNormals();const c=new qS(o),l=b1(o,e,n),u={geometry:o,edgesGeometry:c,faceNormals:l,physPositions:new Float32Array(o.attributes.position.array),physHullPositions:a,physRadius:r,numFaces:e};return $h.set(i,u),u}function v1(i,t,e){const n=e??qh[t%qh.length],r=Su(i),{numFaces:s}=r,a=Array.from({length:s},(l,u)=>new QS({map:m1(yu(i,u),n,i),color:16777215,gradientMap:c1,emissive:new Wt(n),emissiveIntensity:.08})),o=new Qe(r.geometry,a);o.castShadow=!0,o.receiveShadow=!0;const c=new WS(r.edgesGeometry,new hu({color:328965,transparent:!0,opacity:.92,depthWrite:!1}));return c.renderOrder=2,o.add(c),{mesh:o,faceNormals:r.faceNormals,physPositions:r.physPositions,physHullPositions:r.physHullPositions,sides:i,physRadius:r.physRadius}}function x1(i){(Array.isArray(i.material)?i.material:[i.material]).forEach(e=>e.dispose()),i.children.forEach(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(r=>r.dispose())})}function y1(i,t){Qh.set(t.x,t.y,t.z,t.w);let e=-1/0,n=0;for(let r=0;r<i.length;r++){const s=h1.copy(i[r]).applyQuaternion(Qh).dot(mc);s>e&&(e=s,n=r)}return{index:n,alignment:e}}function S1(i){const t=i.getBoundingClientRect(),e=t.width>10?t.width:window.innerWidth-304,n=t.height>10?t.height:window.innerHeight-52,r=new t1({antialias:!0});r.setSize(e,n),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.shadowMap.enabled=!0,r.shadowMap.type=zd,r.toneMapping=bn,r.toneMappingExposure=1,r.outputColorSpace=Ze,r.domElement.style.display="block",i.appendChild(r.domElement);const s=new FS;s.background=new Wt(0);const a=new Ts({color:5592405,roughness:.94,metalness:.04}),o=new Qe(new Qc(1,96),a);o.rotation.x=-Math.PI/2,o.position.y=.001,o.receiveShadow=!0,s.add(o);const l=.68*1.72*2,u=.12,f=new Ts({color:3815994,roughness:.9,metalness:.04,side:gn}),d=new Ts({color:3289650,roughness:.92,metalness:.03,side:gn}),m=new Ts({color:5592405,roughness:.82,metalness:.05}),w=new Qe(new Js(1,1,l,96,1,!0),f),y=new Qe(new Js(1,1,l,96,1,!0),d),g=new Qe(new rl(1,u*.5,20,96),m);w.position.y=l*.5,y.position.y=l*.5,g.rotation.x=Math.PI/2,g.position.y=l,w.castShadow=!0,w.receiveShadow=!0,y.castShadow=!0,y.receiveShadow=!0,g.castShadow=!0,g.receiveShadow=!0,s.add(w,y,g);const p=new on(52,e/n,.1,140);let x=6.5;const T=-.45,E=new F(0,T,0),P=new F(0,16,10).normalize(),R=.998,I=1.07,v=[new F,new F,new F,new F,new F,new F,new F,new F],M=new F;function V(){const at=Math.PI*2/v.length;for(let lt=0;lt<v.length;lt++){const Ct=lt*at;v[lt].set(Math.cos(Ct)*x,0,Math.sin(Ct)*x)}}function D(){o.scale.set(x,x,1)}function H(){const at=x+u*.5,lt=Math.max(.1,x-u*.5),Ct=Math.max(.1,x);w.scale.set(at,1,at),y.scale.set(lt,1,lt),g.scale.set(Ct,Ct,1)}function k(at){p.position.copy(P).multiplyScalar(at).add(E),p.lookAt(E),p.updateMatrixWorld(!0)}function Y(at){k(at);let lt=0,Ct=0;for(let ne=0;ne<v.length;ne++)M.copy(v[ne]).project(p),lt=Math.max(lt,Math.abs(M.x)),Ct=Math.max(Ct,Math.abs(M.y));return lt<=R&&Ct<=R}function X(at,lt){const Ct=Math.max(1,lt);p.aspect=Math.max(1,at)/Ct,p.updateProjectionMatrix(),V();let ne=.1,re=300;for(let Q=0;Q<28;Q++){const st=(ne+re)*.5;Y(st)?re=st:ne=st}k(re*I)}X(e,n),D(),H(),s.add(new rM(16777215,1));const G=new yh(16777215,1);G.position.set(5,11,6),G.castShadow=!0,G.shadow.mapSize.set(1024,1024),G.shadow.bias=-8e-5,G.shadow.normalBias=.02,G.shadow.camera.near=.5,G.shadow.camera.far=60,G.shadow.camera.left=-12,G.shadow.camera.right=12,G.shadow.camera.top=12,G.shadow.camera.bottom=-12,s.add(G);const q=new yh(8956671,.05);q.position.set(-5,8,-4),s.add(q);function rt(){const at=Math.max(8,x*1.35);G.shadow.camera.left=-at,G.shadow.camera.right=at,G.shadow.camera.top=at,G.shadow.camera.bottom=-at,G.shadow.camera.far=Math.max(50,l+x*3),G.shadow.camera.updateProjectionMatrix()}rt();function et(){const at=i.getBoundingClientRect(),lt=at.width>10?at.width:window.innerWidth-304,Ct=at.height>10?at.height:window.innerHeight-52;r.setSize(lt,Ct),X(lt,Ct)}function mt(at){x=Math.max(2,Number(at)||6.5),D(),H(),rt(),et()}return new ResizeObserver(()=>{et()}).observe(i),{scene:s,camera:p,renderer:r,setTrayHalfSize:mt}}const kr=document.querySelector("#dice-count"),gc=document.querySelector("#dice-configs"),M1=document.querySelector("#set-all-d6"),E1=document.querySelector("#set-all-d8"),T1=document.querySelector("#set-all-d12"),A1=document.querySelector("#set-all-d20"),ei=document.querySelector("#canvas-container"),nd=document.querySelector(".side-panel"),In=document.createElement("button");In.type="button";In.className="canvas-overlay-btn canvas-menu-btn";In.textContent="☰";In.setAttribute("aria-label","Toggle settings panel");In.setAttribute("aria-expanded","true");const vr=document.createElement("button");vr.type="button";vr.className="canvas-overlay-btn canvas-fs-btn";vr.textContent="Fullscreen";const Oi=document.createElement("div");Oi.className="canvas-result-popup";const Fi=document.createElement("div");Fi.className="canvas-total-flash";const pi=document.createElement("div");pi.className="canvas-reroll-flash";pi.textContent="Re-roll";nd&&ei.append(nd);ei.append(In,vr,Oi);ei.append(pi,Fi);const Mu=["#FF7D2D","#FAC846","#A0C382","#5F9B8C"],Kr={trayScale:{minDice:1,maxDice:24,minScale:.7,maxScale:1,baseHalfSize:6.5},flash:{relandDurationMs:2e3},simulation:{maxSteps:500,minStableFrames:24,minRollSteps:40,linearStopSpeed:.08,angularStopSpeed:.18,verticalStopSpeed:.07,settleHeight:1.25,faceLandAlignmentMin:.9,surfaceLandHeightFactor:1.14,surfaceLandHeightMin:.78},reland:{maxAttempts:8,badLanding:{verticalLift:0,upwardImpulseBase:28,upwardImpulseJitterScale:0,lateralImpulse:0,torqueImpulse:14,torqueImpulseJitterScale:0,tiltMinDeg:10,tiltMaxDeg:22},userReroll:{verticalLift:0,upwardImpulseBase:40,upwardImpulseJitterScale:.25,lateralImpulse:20,torqueImpulse:20.8,torqueImpulseJitterScale:.25,tiltMinDeg:15,tiltMaxDeg:30}},physics:{dt:1/60,dice:{linearDamping:0,angularDamping:0,friction:.005,restitution:.35,density:2.5},world:{gravityY:-15,wallThickness:.5,wallHalfHeight:1e3,wallRestitution:.7,wallFriction:0,floorRestitution:.5,floorFriction:.5,wallSegments:64},launch:{dropHeightBaseMin:2,dropHeightBaseMax:4,dropHeightRandomMin:.5,dropHeightRandomMax:.5,boundaryInset:1.35,impulseOffset:.5,torqueStrength:20,centerImpulseStrength:4,upwardImpulseBase:8,upwardImpulseJitter:.35,upwardVelocityBase:4.5,upwardVelocityJitter:.05}}},Ke=Kr.trayScale,R1=Kr.flash,ln=Kr.simulation,al=Kr.reland,C1=al.badLanding,Eu=al.userReroll,de=Kr.physics,P1=ln.linearStopSpeed*ln.linearStopSpeed,I1=ln.angularStopSpeed*ln.angularStopSpeed;let fr=[],Tu=!1,ui=null,_r=null;const xn=document.createElement("dialog");xn.className="color-picker-dialog";xn.innerHTML=`
  <div class="color-picker-shell">
    <div class="color-picker-title">Choose Color</div>
    <div class="color-picker-palette" role="radiogroup" aria-label="Color palette"></div>
    <button type="button" class="color-picker-close">Close</button>
  </div>
`;document.body.appendChild(xn);const Au=xn.querySelector(".color-picker-palette"),D1=xn.querySelector(".color-picker-close");function Ru(i,t){i.style.backgroundColor=t}function L1(i){Au.querySelectorAll("button[data-color]").forEach(t=>{const e=t.dataset.color===i;t.classList.toggle("is-active",e),t.setAttribute("aria-checked",e?"true":"false")})}function Cu(){xn.open&&xn.close(),_r=null}function F1(i,t){_r={index:i,triggerButton:t},L1(fr[i]),xn.open||xn.showModal()}Mu.forEach(i=>{const t=document.createElement("button");t.type="button",t.className="color-picker-swatch",t.dataset.color=i,t.style.backgroundColor=i,t.setAttribute("role","radio"),t.setAttribute("aria-label",`Choose ${i.toUpperCase()}`),t.setAttribute("aria-checked","false"),t.addEventListener("click",()=>{if(!_r)return;const{index:e,triggerButton:n}=_r;fr[e]!==i&&(fr[e]=i,Ru(n,i),vi()),Cu()}),Au.appendChild(t)});D1.addEventListener("click",Cu);xn.addEventListener("cancel",()=>{_r=null});xn.addEventListener("close",()=>{_r=null});function Pu(){return document.fullscreenElement===ei}function Iu(i){document.body.classList.toggle("panel-hidden",i),In.setAttribute("aria-expanded",String(!i)),In.textContent=i?"☰":"☰ Close",In.setAttribute("aria-label",i?"Open settings panel":"Close settings panel")}Iu(document.body.classList.contains("panel-hidden"));function Hi(i,t){Tu=i,ei.classList.toggle("roll-disabled",i)}function U1(){return!Tu&&!Nn}function Du({forceRestart:i=!1}={}){return i&&Nn?(J1(),!0):U1()?(Z1(),!0):!1}function ua(){Fi.classList.remove("show"),Oi.classList.remove("show"),Oi.innerHTML=""}function N1(i){Fi.textContent=`Total: ${i}`,Fi.classList.remove("show"),Fi.offsetWidth,Fi.classList.add("show")}function Lu(){ui&&(clearTimeout(ui),ui=null),pi.classList.remove("show"),pi.offsetWidth,pi.classList.add("show"),ui=setTimeout(()=>{pi.classList.remove("show"),ui=null},R1.relandDurationMs)}function O1(i,t){const e=t.map(n=>`<div class="canvas-result-line">${n}</div>`).join("");Oi.innerHTML=`<div class="canvas-result-total">Total: ${i}</div>${e}`,Oi.classList.add("show"),N1(i)}function B1(i){const t=[];for(;t.length<i;){const e=[...Mu];for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}t.push(...e)}return t.slice(0,i)}function z1(i){const e=(Math.min(Ke.maxDice,Math.max(Ke.minDice,i))-Ke.minDice)/(Ke.maxDice-Ke.minDice);return Ke.minScale+(Ke.maxScale-Ke.minScale)*e}function ol(i){return Ke.baseHalfSize*z1(i)}function Fu(i,t=0){let e=Math.random()*2-1,n=Math.random()*2-1,r=Math.random()*2-1,s=Math.hypot(e,n,r);s<1e-4&&(e=1,n=0,r=0,s=1);const a=Math.max(.1,i+(Math.random()*2-1)*t);return{x:e/s*a,y:n/s*a,z:r/s*a}}for(let i=Ke.minDice;i<=Ke.maxDice;i++){const t=document.createElement("option");t.value=String(i),t.textContent=String(i),i===2&&(t.selected=!0),kr.appendChild(t)}function Uu(){const i=Number(kr.value);fr=B1(i),gc.innerHTML="";for(let t=0;t<i;t++){const e=document.createElement("div");e.className="die-config";const n=document.createElement("label");n.setAttribute("for",`die-type-${t}`),n.textContent=`Die ${t+1}`;const r=document.createElement("select");r.id=`die-type-${t}`,r.dataset.dieType="true",r.className="die-type-select",[6,8,12,20].forEach(o=>{const c=document.createElement("option");c.value=String(o),c.textContent=`D${o}`,o===6&&(c.selected=!0),r.appendChild(c)});const s=document.createElement("button");s.type="button",s.id=`die-color-${t}`,s.dataset.dieColor="true",s.className="die-color-trigger",s.setAttribute("aria-label",`Choose color for Die ${t+1}`),Ru(s,fr[t]),s.addEventListener("click",()=>{F1(t,s)});const a=document.createElement("div");a.className="die-controls",a.append(r,s),e.append(n,a),gc.appendChild(e)}}function fa(i){document.querySelectorAll('select[data-die-type="true"]').forEach(e=>{e.value=String(i)})}M1.addEventListener("click",()=>{fa(6),vi()});E1.addEventListener("click",()=>{fa(8),vi()});T1.addEventListener("click",()=>{fa(12),vi()});A1.addEventListener("click",()=>{fa(20),vi()});gc.addEventListener("change",i=>{const t=i.target;t instanceof HTMLSelectElement&&t.dataset.dieType==="true"&&vi()});Uu();Hi(!1);vr.addEventListener("click",async()=>{try{Pu()?await document.exitFullscreen():await ei.requestFullscreen()}catch{}});ei.addEventListener("click",i=>{const t=i.target;t instanceof Element&&(t.closest(".canvas-overlay-btn")||t.closest(".canvas-result-popup")||t.closest(".side-panel")||Du({forceRestart:!0}))});document.addEventListener("fullscreenchange",()=>{const i=Pu();ei.classList.toggle("is-fullscreen",i),vr.textContent=i?"Exit Fullscreen":"Fullscreen",i||ua()});In.addEventListener("click",()=>{const i=!document.body.classList.contains("panel-hidden");Iu(i)});const{scene:cl,camera:H1,renderer:G1,setTrayHalfSize:ll}=S1(ei);kr.addEventListener("change",()=>{vi(),Uu(),ll(ol(Number(kr.value)))});ll(ol(Number(kr.value)));let Yn=null,Un=[],Nn=!1,mi=0,gi=0,xr=0;function V1(i){const t=new Wn.World({x:0,y:de.world.gravityY,z:0});t.integrationParameters.dt=de.dt;const e=de.world.wallThickness,n=de.world.wallHalfHeight,r=de.world.wallRestitution,s=de.world.wallFriction,a=i,o=de.world.wallSegments,c=t.createRigidBody(Wn.RigidBodyDesc.fixed().setTranslation(0,-.05,0));t.createCollider(Wn.ColliderDesc.cuboid(a,.1,a).setRestitution(de.world.floorRestitution).setFriction(de.world.floorFriction),c);for(let l=0;l<o;l++){const u=l/o*Math.PI*2,f=Math.cos(u)*a,d=Math.sin(u)*a,m=t.createRigidBody(Wn.RigidBodyDesc.fixed().setTranslation(f,n-.05,d));t.createCollider(Wn.ColliderDesc.cylinder(n,e).setRestitution(r).setFriction(s),m)}return t}function k1(i){const t=(Math.max(Ke.minDice,i)-Ke.minDice)/Math.max(1,Ke.maxDice-Ke.minDice);return{base:de.launch.dropHeightBaseMin+(de.launch.dropHeightBaseMax-de.launch.dropHeightBaseMin)*t,random:de.launch.dropHeightRandomMin+(de.launch.dropHeightRandomMax-de.launch.dropHeightRandomMin)*t}}function W1(i,t,e){const n=Math.max(.75,t-e),r=Math.random()*Math.PI*2,s=Math.PI*2/Math.max(1,i);return Array.from({length:i},(a,o)=>{const c=r+o*s,l=n*(.8+Math.random()*.2);return{x:Math.cos(c)*l,z:Math.sin(c)*l}})}function j1(i,t,e,n,r,s){const{x:a,z:o}=s,{base:c,random:l}=k1(r),u=c+Math.random()*l,f=Wn.RigidBodyDesc.dynamic().setTranslation(a,u,o).setLinearDamping(de.dice.linearDamping).setAngularDamping(de.dice.angularDamping);typeof f.setCcdEnabled=="function"&&f.setCcdEnabled(!0);const d=i.createRigidBody(f);typeof d.enableCcd=="function"&&d.enableCcd(!0);let m;if(t.sides===6){const R=t.physRadius*.82;m=Wn.ColliderDesc.cuboid(R,R,R)}else m=Wn.ColliderDesc.convexHull(t.physHullPositions)??Wn.ColliderDesc.ball(t.physRadius*.88);m.setRestitution(de.dice.restitution).setFriction(de.dice.friction).setDensity(de.dice.density),i.createCollider(m,d);const w=de.launch.impulseOffset,y=de.launch.torqueStrength;d.setAngvel(Fu(y,w),!0);const g=Math.max(0,de.launch.upwardVelocityBase+(Math.random()*2-1)*de.launch.upwardVelocityJitter);d.setLinvel({x:0,y:g,z:0},!0);const p=Math.hypot(a,o),x=de.launch.centerImpulseStrength,T=Math.max(0,de.launch.upwardImpulseBase+(Math.random()*2-1)*de.launch.upwardImpulseJitter),E=p>1e-4?-a/p*x*p:0,P=p>1e-4?-o/p*x*p:0;return d.applyImpulse({x:E,y:T,z:P},!0),d}function X1(i=null){let t=0;const e=[];(i??Nu()).forEach(({entity:r,value:s,topFaceIdx:a},o)=>{const{mesh:c}=r;t+=s;const l=Array.isArray(c.material)?c.material:[c.material];l[a]&&(l[a].emissive.setHex(16766720),l[a].emissiveIntensity=.28),e.push(`D${o+1}: ${s}`)}),Hi(!1),O1(t,e)}function q1(i){return Math.max(ln.surfaceLandHeightMin,i.physRadius*ln.surfaceLandHeightFactor)}function Nu(){return Un.map(i=>{const t=i.body.rotation(),e=y1(i.faceNormals,t),n=yu(i.sides,e.index),s=i.body.translation().y<=q1(i),a=e.alignment>=ln.faceLandAlignmentMin;return{entity:i,topFaceIdx:e.index,value:n,onSurface:s,faceLanded:a,valid:s&&a}})}function hl(i,t,{resetHighlights:e=!1,applyVerticalLift:n=!0,applyUpwardImpulse:r=!0,shouldApplyUpwardImpulse:s=null}={}){i.forEach(a=>{const{body:o,mesh:c,physRadius:l,baseEmissiveHex:u}=a,f=o.translation(),d=n?Math.max(t.verticalLift,l*.45):0,m=Math.random()*Math.PI*2,y=(t.tiltMinDeg+Math.random()*(t.tiltMaxDeg-t.tiltMinDeg))*Math.PI/180,g=t.upwardImpulseBase*(1+(Math.random()*2-1)*(t.upwardImpulseJitterScale??0)),p=r&&(typeof s=="function"?s(a,f):!0),x=g*Math.tan(y),T=Math.max(t.lateralImpulse,x),E=t.torqueImpulse*(t.torqueImpulseJitterScale??0);e&&(Array.isArray(c.material)?c.material:[c.material]).forEach(R=>{R.emissive.setHex(u),R.emissiveIntensity=.08}),o.setTranslation({x:f.x,y:f.y+d,z:f.z},!0),o.setLinvel({x:0,y:0,z:0},!0),o.setAngvel({x:0,y:0,z:0},!0),typeof o.wakeUp=="function"&&o.wakeUp(),o.applyImpulse({x:Math.cos(m)*T,y:p?g:0,z:Math.sin(m)*T},!0),o.setAngvel(Fu(t.torqueImpulse,E),!0)})}function Y1(i){xr+=1,Lu();const t=i.map(e=>e.entity);hl(t,C1),mi=0,gi=0,Nn=!0,Hi(!0)}function K1({showFlash:i=!1}={}){return!Yn||Un.length===0?!1:(i&&Lu(),ua(),hl(Un,Eu,{resetHighlights:!0}),mi=0,gi=0,xr=0,Nn=!0,Hi(!0),!0)}function J1(){return!Yn||Un.length===0||!Nn?!1:(ua(),hl(Un,Eu,{applyVerticalLift:!1,applyUpwardImpulse:!0,shouldApplyUpwardImpulse:(i,t)=>t.y<=i.physRadius*2}),mi=0,gi=0,xr=0,Hi(!0),!0)}function $1(){return Un.length>0&&!Nn&&Oi.classList.contains("show")}function vi(){ui&&(clearTimeout(ui),ui=null),pi.classList.remove("show"),Un.forEach(i=>{cl.remove(i.mesh),x1(i.mesh)}),Un=[],ua(),Yn&&(Yn.free(),Yn=null),Nn=!1,mi=0,gi=0,xr=0,Hi(!1)}function Z1(){if($1()&&K1({showFlash:!1}))return;vi();const i=Array.from(document.querySelectorAll('select[data-die-type="true"]')).map(s=>Number(s.value)),t=ol(i.length);ll(t),Yn=V1(t),mi=0,gi=0,xr=0,Nn=!0,Hi(!0);const e=i.map((s,a)=>v1(s,a,fr[a])),n=e.reduce((s,a)=>Math.max(s,a.physRadius),0),r=W1(i.length,t,de.launch.boundaryInset+n*.9);e.forEach((s,a)=>{const o=j1(Yn,s,a,t,i.length,r[a]);cl.add(s.mesh);const c=s.mesh.material[0]?.emissive?.getHex?.()??0;Un.push({body:o,mesh:s.mesh,faceNormals:s.faceNormals,sides:s.sides,physRadius:s.physRadius,baseEmissiveHex:c})})}window.addEventListener("keydown",i=>{if(!(i.code==="Space"||i.key===" "||i.key==="Spacebar")||i.repeat)return;const n=document.activeElement?.tagName;n==="INPUT"||n==="TEXTAREA"||n==="SELECT"||(i.preventDefault(),Du({forceRestart:!0}))});function Ou(){if(requestAnimationFrame(Ou),Nn&&Yn){Yn.step(),mi++;let i=!0,t=!0,e=!0;for(const{body:r,mesh:s}of Un){const a=r.translation(),o=r.rotation(),c=r.linvel(),l=r.angvel();s.position.set(a.x,a.y,a.z),s.quaternion.set(o.x,o.y,o.z,o.w),r.isSleeping()||(i=!1),a.y<=ln.settleHeight&&Math.abs(c.y)<ln.verticalStopSpeed||(t=!1);const u=c.x*c.x+c.y*c.y+c.z*c.z,f=l.x*l.x+l.y*l.y+l.z*l.z;u<P1&&f<I1||(e=!1)}if(gi=mi>=ln.minRollSteps&&t&&e?gi+1:0,i&&t||gi>=ln.minStableFrames||mi>=ln.maxSteps){const r=Nu(),s=r.filter(a=>!a.valid);s.length>0&&xr<al.maxAttempts?Y1(s):(Nn=!1,X1(r))}}G1.render(cl,H1)}Ou();
