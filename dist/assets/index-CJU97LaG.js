(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Ru="/assets/rapier_wasm3d_bg-bb0TTxsO.wasm",Cu=async(i={},t)=>{let e;if(t.startsWith("data:")){const n=t.replace(/^data:.*?base64,/,"");let r;if(typeof Buffer=="function"&&typeof Buffer.from=="function")r=Buffer.from(n,"base64");else if(typeof atob=="function"){const s=atob(n);r=new Uint8Array(s.length);for(let a=0;a<s.length;a++)r[a]=s.charCodeAt(a)}else throw new Error("Cannot decode base64-encoded data URL");e=await WebAssembly.instantiate(r,i)}else{const n=await fetch(t),r=n.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&r.startsWith("application/wasm"))e=await WebAssembly.instantiateStreaming(n,i);else{const s=await n.arrayBuffer();e=await WebAssembly.instantiate(s,i)}}return e.instance.exports};let h;function Pu(i){h=i}const $t=new Array(128).fill(void 0);$t.push(void 0,null,!0,!1);function Kt(i){return $t[i]}let Rr=$t.length;function de(i){Rr===$t.length&&$t.push($t.length+1);const t=Rr;return Rr=$t[t],$t[t]=i,t}function $s(i,t){try{return i.apply(this,t)}catch(e){h.__wbindgen_export_0(de(e))}}const Iu=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let Kh=new Iu("utf-8",{ignoreBOM:!0,fatal:!0});Kh.decode();let $r=null;function Du(){return($r===null||$r.byteLength===0)&&($r=new Uint8Array(h.memory.buffer)),$r}function $h(i,t){return i=i>>>0,Kh.decode(Du().subarray(i,i+t))}function It(i){return i==null}let Oi=null;function ze(){return(Oi===null||Oi.buffer.detached===!0||Oi.buffer.detached===void 0&&Oi.buffer!==h.memory.buffer)&&(Oi=new DataView(h.memory.buffer)),Oi}function Lu(i){i<132||($t[i]=Rr,Rr=i)}function Cr(i){const t=Kt(i);return Lu(i),t}function R(i,t){if(!(i instanceof t))throw new Error(`expected instance of ${t.name}`)}let he=128;function ge(i){if(he==1)throw new Error("out of js stack");return $t[--he]=i,he}let Jr=null;function Fu(){return(Jr===null||Jr.byteLength===0)&&(Jr=new Int32Array(h.memory.buffer)),Jr}function Uu(i,t){return i=i>>>0,Fu().subarray(i/4,i/4+t)}let Zr=null;function Jh(){return(Zr===null||Zr.byteLength===0)&&(Zr=new Float32Array(h.memory.buffer)),Zr}function ul(i,t){return i=i>>>0,Jh().subarray(i/4,i/4+t)}let Qr=null;function Zh(){return(Qr===null||Qr.byteLength===0)&&(Qr=new Uint32Array(h.memory.buffer)),Qr}function Nu(i,t){return i=i>>>0,Zh().subarray(i/4,i/4+t)}let qe=0;function gr(i,t){const e=t(i.length*4,4)>>>0;return Zh().set(i,e/4),qe=i.length,e}function ti(i,t){const e=t(i.length*4,4)>>>0;return Jh().set(i,e/4),qe=i.length,e}const Js=Object.freeze({LinX:0,0:"LinX",LinY:1,1:"LinY",LinZ:2,2:"LinZ",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"}),gn=Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Rope:3,3:"Rope",Spring:4,4:"Spring",Spherical:5,5:"Spherical",Generic:6,6:"Generic"}),Oe=Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron",HalfSpace:17,17:"HalfSpace",Voxels:18,18:"Voxels"}),_a=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawbroadphase_free(i>>>0,1));class jn{static __wrap(t){t=t>>>0;const e=Object.create(jn.prototype);return e.__wbg_ptr=t,_a.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,_a.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawbroadphase_free(t,0)}constructor(){const t=h.rawbroadphase_new();return this.__wbg_ptr=t>>>0,_a.register(this,this.__wbg_ptr,this),this}castRay(t,e,n,r,s,a,o,l,c,d,f,u){try{R(t,Ce),R(e,me),R(n,be),R(r,F),R(s,F);const m=h.rawbroadphase_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o,l,It(c)?4294967297:c>>>0,!It(d),It(d)?0:d,!It(f),It(f)?0:f,ge(u));return m===0?void 0:mc.__wrap(m)}finally{$t[he++]=void 0}}castRayAndGetNormal(t,e,n,r,s,a,o,l,c,d,f,u){try{R(t,Ce),R(e,me),R(n,be),R(r,F),R(s,F);const m=h.rawbroadphase_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o,l,It(c)?4294967297:c>>>0,!It(d),It(d)?0:d,!It(f),It(f)?0:f,ge(u));return m===0?void 0:ta.__wrap(m)}finally{$t[he++]=void 0}}intersectionsWithRay(t,e,n,r,s,a,o,l,c,d,f,u,m){try{R(t,Ce),R(e,me),R(n,be),R(r,F),R(s,F),h.rawbroadphase_intersectionsWithRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o,ge(l),c,It(d)?4294967297:d>>>0,!It(f),It(f)?0:f,!It(u),It(u)?0:u,ge(m))}finally{$t[he++]=void 0,$t[he++]=void 0}}intersectionWithShape(t,e,n,r,s,a,o,l,c,d,f){try{const w=h.__wbindgen_add_to_stack_pointer(-16);R(t,Ce),R(e,me),R(n,be),R(r,F),R(s,kt),R(a,Ct),h.rawbroadphase_intersectionWithShape(w,this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,It(l)?4294967297:l>>>0,!It(c),It(c)?0:c,!It(d),It(d)?0:d,ge(f));var u=ze().getInt32(w+0,!0),m=ze().getFloat64(w+8,!0);return u===0?void 0:m}finally{h.__wbindgen_add_to_stack_pointer(16),$t[he++]=void 0}}projectPoint(t,e,n,r,s,a,o,l,c,d){try{R(t,Ce),R(e,me),R(n,be),R(r,F);const f=h.rawbroadphase_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,It(o)?4294967297:o>>>0,!It(l),It(l)?0:l,!It(c),It(c)?0:c,ge(d));return f===0?void 0:Os.__wrap(f)}finally{$t[he++]=void 0}}projectPointAndGetFeature(t,e,n,r,s,a,o,l,c){try{R(t,Ce),R(e,me),R(n,be),R(r,F);const d=h.rawbroadphase_projectPointAndGetFeature(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,It(a)?4294967297:a>>>0,!It(o),It(o)?0:o,!It(l),It(l)?0:l,ge(c));return d===0?void 0:Os.__wrap(d)}finally{$t[he++]=void 0}}intersectionsWithPoint(t,e,n,r,s,a,o,l,c,d){try{R(t,Ce),R(e,me),R(n,be),R(r,F),h.rawbroadphase_intersectionsWithPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,ge(s),a,It(o)?4294967297:o>>>0,!It(l),It(l)?0:l,!It(c),It(c)?0:c,ge(d))}finally{$t[he++]=void 0,$t[he++]=void 0}}castShape(t,e,n,r,s,a,o,l,c,d,f,u,m,w,y){try{R(t,Ce),R(e,me),R(n,be),R(r,F),R(s,kt),R(a,F),R(o,Ct);const g=h.rawbroadphase_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l,c,d,f,It(u)?4294967297:u>>>0,!It(m),It(m)?0:m,!It(w),It(w)?0:w,ge(y));return g===0?void 0:Zs.__wrap(g)}finally{$t[he++]=void 0}}intersectionsWithShape(t,e,n,r,s,a,o,l,c,d,f,u){try{R(t,Ce),R(e,me),R(n,be),R(r,F),R(s,kt),R(a,Ct),h.rawbroadphase_intersectionsWithShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,ge(o),l,It(c)?4294967297:c>>>0,!It(d),It(d)?0:d,!It(f),It(f)?0:f,ge(u))}finally{$t[he++]=void 0,$t[he++]=void 0}}collidersWithAabbIntersectingAabb(t,e,n,r,s,a){try{R(t,Ce),R(e,me),R(n,be),R(r,F),R(s,F),h.rawbroadphase_collidersWithAabbIntersectingAabb(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,ge(a))}finally{$t[he++]=void 0}}}const _l=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawccdsolver_free(i>>>0,1));class ro{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,_l.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawccdsolver_free(t,0)}constructor(){const t=h.rawccdsolver_new();return this.__wbg_ptr=t>>>0,_l.register(this,this.__wbg_ptr,this),this}}const fl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcharactercollision_free(i>>>0,1));class Qh{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,fl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcharactercollision_free(t,0)}constructor(){const t=h.rawcharactercollision_new();return this.__wbg_ptr=t>>>0,fl.register(this,this.__wbg_ptr,this),this}handle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}translationDeltaApplied(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(t)}translationDeltaRemaining(){const t=h.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return F.__wrap(t)}toi(){return h.rawcharactercollision_toi(this.__wbg_ptr)}worldWitness1(){const t=h.rawcharactercollision_worldWitness1(this.__wbg_ptr);return F.__wrap(t)}worldWitness2(){const t=h.rawcharactercollision_worldWitness2(this.__wbg_ptr);return F.__wrap(t)}worldNormal1(){const t=h.rawcharactercollision_worldNormal1(this.__wbg_ptr);return F.__wrap(t)}worldNormal2(){const t=h.rawcharactercollision_worldNormal2(this.__wbg_ptr);return F.__wrap(t)}}const fa=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcolliderset_free(i>>>0,1));class be{static __wrap(t){t=t>>>0;const e=Object.create(be.prototype);return e.__wbg_ptr=t,fa.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,fa.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcolliderset_free(t,0)}coTranslation(t){const e=h.rawcolliderset_coTranslation(this.__wbg_ptr,t);return F.__wrap(e)}coRotation(t){const e=h.rawcolliderset_coRotation(this.__wbg_ptr,t);return kt.__wrap(e)}coTranslationWrtParent(t){const e=h.rawcolliderset_coTranslationWrtParent(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coRotationWrtParent(t){const e=h.rawcolliderset_coRotationWrtParent(this.__wbg_ptr,t);return e===0?void 0:kt.__wrap(e)}coSetTranslation(t,e,n,r){h.rawcolliderset_coSetTranslation(this.__wbg_ptr,t,e,n,r)}coSetTranslationWrtParent(t,e,n,r){h.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr,t,e,n,r)}coSetRotation(t,e,n,r,s){h.rawcolliderset_coSetRotation(this.__wbg_ptr,t,e,n,r,s)}coSetRotationWrtParent(t,e,n,r,s){h.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr,t,e,n,r,s)}coIsSensor(t){return h.rawcolliderset_coIsSensor(this.__wbg_ptr,t)!==0}coShapeType(t){return h.rawcolliderset_coShapeType(this.__wbg_ptr,t)}coHalfspaceNormal(t){const e=h.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coHalfExtents(t){const e=h.rawcolliderset_coHalfExtents(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coSetHalfExtents(t,e){R(e,F),h.rawcolliderset_coSetHalfExtents(this.__wbg_ptr,t,e.__wbg_ptr)}coRadius(t){const e=h.rawcolliderset_coRadius(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetRadius(t,e){h.rawcolliderset_coSetRadius(this.__wbg_ptr,t,e)}coHalfHeight(t){const e=h.rawcolliderset_coHalfHeight(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetHalfHeight(t,e){h.rawcolliderset_coSetHalfHeight(this.__wbg_ptr,t,e)}coRoundRadius(t){const e=h.rawcolliderset_coRoundRadius(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetRoundRadius(t,e){h.rawcolliderset_coSetRoundRadius(this.__wbg_ptr,t,e)}coVoxelData(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coVoxelData(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getInt32(r+4,!0);let s;return e!==0&&(s=Uu(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coVoxelSize(t){const e=h.rawcolliderset_coVoxelSize(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coSetVoxel(t,e,n,r,s){h.rawcolliderset_coSetVoxel(this.__wbg_ptr,t,e,n,r,s)}coPropagateVoxelChange(t,e,n,r,s,a,o,l){h.rawcolliderset_coPropagateVoxelChange(this.__wbg_ptr,t,e,n,r,s,a,o,l)}coCombineVoxelStates(t,e,n,r,s){h.rawcolliderset_coCombineVoxelStates(this.__wbg_ptr,t,e,n,r,s)}coVertices(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coVertices(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getInt32(r+4,!0);let s;return e!==0&&(s=ul(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coIndices(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coIndices(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getInt32(r+4,!0);let s;return e!==0&&(s=Nu(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coTriMeshFlags(t){const e=h.rawcolliderset_coTriMeshFlags(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightFieldFlags(t){const e=h.rawcolliderset_coHeightFieldFlags(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightfieldHeights(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coHeightfieldHeights(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getInt32(r+4,!0);let s;return e!==0&&(s=ul(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(t){const e=h.rawcolliderset_coHeightfieldScale(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coHeightfieldNRows(t){const e=h.rawcolliderset_coHeightfieldNRows(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightfieldNCols(t){const e=h.rawcolliderset_coHeightfieldNCols(this.__wbg_ptr,t);return e===4294967297?void 0:e}coParent(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coParent(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getFloat64(r+8,!0);return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}coSetEnabled(t,e){h.rawcolliderset_coSetEnabled(this.__wbg_ptr,t,e)}coIsEnabled(t){return h.rawcolliderset_coIsEnabled(this.__wbg_ptr,t)!==0}coSetContactSkin(t,e){h.rawcolliderset_coSetContactSkin(this.__wbg_ptr,t,e)}coContactSkin(t){return h.rawcolliderset_coContactSkin(this.__wbg_ptr,t)}coFriction(t){return h.rawcolliderset_coFriction(this.__wbg_ptr,t)}coRestitution(t){return h.rawcolliderset_coRestitution(this.__wbg_ptr,t)}coDensity(t){return h.rawcolliderset_coDensity(this.__wbg_ptr,t)}coMass(t){return h.rawcolliderset_coMass(this.__wbg_ptr,t)}coVolume(t){return h.rawcolliderset_coVolume(this.__wbg_ptr,t)}coCollisionGroups(t){return h.rawcolliderset_coCollisionGroups(this.__wbg_ptr,t)>>>0}coSolverGroups(t){return h.rawcolliderset_coSolverGroups(this.__wbg_ptr,t)>>>0}coActiveHooks(t){return h.rawcolliderset_coActiveHooks(this.__wbg_ptr,t)>>>0}coActiveCollisionTypes(t){return h.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr,t)}coActiveEvents(t){return h.rawcolliderset_coActiveEvents(this.__wbg_ptr,t)>>>0}coContactForceEventThreshold(t){return h.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr,t)}coContainsPoint(t,e){return R(e,F),h.rawcolliderset_coContainsPoint(this.__wbg_ptr,t,e.__wbg_ptr)!==0}coCastShape(t,e,n,r,s,a,o,l,c){R(e,F),R(n,Ct),R(r,F),R(s,kt),R(a,F);const d=h.rawcolliderset_coCastShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,l,c);return d===0?void 0:na.__wrap(d)}coCastCollider(t,e,n,r,s,a,o){R(e,F),R(r,F);const l=h.rawcolliderset_coCastCollider(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s,a,o);return l===0?void 0:Zs.__wrap(l)}coIntersectsShape(t,e,n,r){return R(e,Ct),R(n,F),R(r,kt),h.rawcolliderset_coIntersectsShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr)!==0}coContactShape(t,e,n,r,s){R(e,Ct),R(n,F),R(r,kt);const a=h.rawcolliderset_coContactShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s);return a===0?void 0:Pr.__wrap(a)}coContactCollider(t,e,n){const r=h.rawcolliderset_coContactCollider(this.__wbg_ptr,t,e,n);return r===0?void 0:Pr.__wrap(r)}coProjectPoint(t,e,n){R(e,F);const r=h.rawcolliderset_coProjectPoint(this.__wbg_ptr,t,e.__wbg_ptr,n);return Qs.__wrap(r)}coIntersectsRay(t,e,n,r){return R(e,F),R(n,F),h.rawcolliderset_coIntersectsRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)!==0}coCastRay(t,e,n,r,s){return R(e,F),R(n,F),h.rawcolliderset_coCastRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s)}coCastRayAndGetNormal(t,e,n,r,s){R(e,F),R(n,F);const a=h.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s);return a===0?void 0:ea.__wrap(a)}coSetSensor(t,e){h.rawcolliderset_coSetSensor(this.__wbg_ptr,t,e)}coSetRestitution(t,e){h.rawcolliderset_coSetRestitution(this.__wbg_ptr,t,e)}coSetFriction(t,e){h.rawcolliderset_coSetFriction(this.__wbg_ptr,t,e)}coFrictionCombineRule(t){return h.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr,t)>>>0}coSetFrictionCombineRule(t,e){h.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr,t,e)}coRestitutionCombineRule(t){return h.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr,t)>>>0}coSetRestitutionCombineRule(t,e){h.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr,t,e)}coSetCollisionGroups(t,e){h.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr,t,e)}coSetSolverGroups(t,e){h.rawcolliderset_coSetSolverGroups(this.__wbg_ptr,t,e)}coSetActiveHooks(t,e){h.rawcolliderset_coSetActiveHooks(this.__wbg_ptr,t,e)}coSetActiveEvents(t,e){h.rawcolliderset_coSetActiveEvents(this.__wbg_ptr,t,e)}coSetActiveCollisionTypes(t,e){h.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr,t,e)}coSetShape(t,e){R(e,Ct),h.rawcolliderset_coSetShape(this.__wbg_ptr,t,e.__wbg_ptr)}coSetContactForceEventThreshold(t,e){h.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr,t,e)}coSetDensity(t,e){h.rawcolliderset_coSetDensity(this.__wbg_ptr,t,e)}coSetMass(t,e){h.rawcolliderset_coSetMass(this.__wbg_ptr,t,e)}coSetMassProperties(t,e,n,r,s){R(n,F),R(r,F),R(s,kt),h.rawcolliderset_coSetMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}constructor(){const t=h.rawcolliderset_new();return this.__wbg_ptr=t>>>0,fa.register(this,this.__wbg_ptr,this),this}len(){return h.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawcolliderset_contains(this.__wbg_ptr,t)!==0}createCollider(t,e,n,r,s,a,o,l,c,d,f,u,m,w,y,g,p,x,T,E,P,C,D,v,M){try{const H=h.__wbindgen_add_to_stack_pointer(-16);R(e,Ct),R(n,F),R(r,kt),R(o,F),R(l,F),R(c,kt),R(M,me),h.rawcolliderset_createCollider(H,this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,d,f,u,m,w,y,g,p,x,T,E,P,C,D,v,M.__wbg_ptr);var G=ze().getInt32(H+0,!0),I=ze().getFloat64(H+8,!0);return G===0?void 0:I}finally{h.__wbindgen_add_to_stack_pointer(16)}}remove(t,e,n,r){R(e,qn),R(n,me),h.rawcolliderset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}isHandleValid(t){return h.rawcolliderset_contains(this.__wbg_ptr,t)!==0}forEachColliderHandle(t){try{h.rawcolliderset_forEachColliderHandle(this.__wbg_ptr,ge(t))}finally{$t[he++]=void 0}}}const pl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcollidershapecasthit_free(i>>>0,1));class Zs{static __wrap(t){t=t>>>0;const e=Object.create(Zs.prototype);return e.__wbg_ptr=t,pl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,pl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcollidershapecasthit_free(t,0)}colliderHandle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}witness1(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}witness2(){const t=h.rawcollidershapecasthit_witness2(this.__wbg_ptr);return F.__wrap(t)}normal1(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(t)}normal2(){const t=h.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return F.__wrap(t)}}const ml=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactforceevent_free(i>>>0,1));class uc{static __wrap(t){t=t>>>0;const e=Object.create(uc.prototype);return e.__wbg_ptr=t,ml.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ml.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactforceevent_free(t,0)}collider1(){return h.rawcharactercollision_handle(this.__wbg_ptr)}collider2(){return h.rawcontactforceevent_collider2(this.__wbg_ptr)}total_force(){const t=h.rawcontactforceevent_total_force(this.__wbg_ptr);return F.__wrap(t)}total_force_magnitude(){return h.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}max_force_direction(){const t=h.rawcontactforceevent_max_force_direction(this.__wbg_ptr);return F.__wrap(t)}max_force_magnitude(){return h.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}}const gl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactmanifold_free(i>>>0,1));class _c{static __wrap(t){t=t>>>0;const e=Object.create(_c.prototype);return e.__wbg_ptr=t,gl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,gl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactmanifold_free(t,0)}normal(){const t=h.rawcontactmanifold_normal(this.__wbg_ptr);return F.__wrap(t)}local_n1(){const t=h.rawcontactmanifold_local_n1(this.__wbg_ptr);return F.__wrap(t)}local_n2(){const t=h.rawcontactmanifold_local_n2(this.__wbg_ptr);return F.__wrap(t)}subshape1(){return h.rawcontactmanifold_subshape1(this.__wbg_ptr)>>>0}subshape2(){return h.rawcontactmanifold_subshape2(this.__wbg_ptr)>>>0}num_contacts(){return h.rawcontactmanifold_num_contacts(this.__wbg_ptr)>>>0}contact_local_p1(t){const e=h.rawcontactmanifold_contact_local_p1(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}contact_local_p2(t){const e=h.rawcontactmanifold_contact_local_p2(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}contact_dist(t){return h.rawcontactmanifold_contact_dist(this.__wbg_ptr,t)}contact_fid1(t){return h.rawcontactmanifold_contact_fid1(this.__wbg_ptr,t)>>>0}contact_fid2(t){return h.rawcontactmanifold_contact_fid2(this.__wbg_ptr,t)>>>0}contact_impulse(t){return h.rawcontactmanifold_contact_impulse(this.__wbg_ptr,t)}contact_tangent_impulse_x(t){return h.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr,t)}contact_tangent_impulse_y(t){return h.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr,t)}num_solver_contacts(){return h.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr)>>>0}solver_contact_point(t){const e=h.rawcontactmanifold_solver_contact_point(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}solver_contact_dist(t){return h.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr,t)}solver_contact_friction(t){return h.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr,t)}solver_contact_restitution(t){return h.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr,t)}solver_contact_tangent_velocity(t){const e=h.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr,t);return F.__wrap(e)}}const wl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactpair_free(i>>>0,1));class fc{static __wrap(t){t=t>>>0;const e=Object.create(fc.prototype);return e.__wbg_ptr=t,wl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,wl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactpair_free(t,0)}collider1(){return h.rawcontactpair_collider1(this.__wbg_ptr)}collider2(){return h.rawcontactpair_collider2(this.__wbg_ptr)}numContactManifolds(){return h.rawcontactpair_numContactManifolds(this.__wbg_ptr)>>>0}contactManifold(t){const e=h.rawcontactpair_contactManifold(this.__wbg_ptr,t);return e===0?void 0:_c.__wrap(e)}}const bl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdebugrenderpipeline_free(i>>>0,1));class Ou{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,bl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdebugrenderpipeline_free(t,0)}constructor(){const t=h.rawdebugrenderpipeline_new();return this.__wbg_ptr=t>>>0,bl.register(this,this.__wbg_ptr,this),this}vertices(){const t=h.rawdebugrenderpipeline_vertices(this.__wbg_ptr);return Cr(t)}colors(){const t=h.rawdebugrenderpipeline_colors(this.__wbg_ptr);return Cr(t)}render(t,e,n,r,s,a,o){try{R(t,me),R(e,be),R(n,Xn),R(r,Yn),R(s,Ce),h.rawdebugrenderpipeline_render(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,ge(o))}finally{$t[he++]=void 0}}}const vl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdeserializedworld_free(i>>>0,1));class pc{static __wrap(t){t=t>>>0;const e=Object.create(pc.prototype);return e.__wbg_ptr=t,vl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,vl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdeserializedworld_free(t,0)}takeGravity(){const t=h.rawdeserializedworld_takeGravity(this.__wbg_ptr);return t===0?void 0:F.__wrap(t)}takeIntegrationParameters(){const t=h.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);return t===0?void 0:Pi.__wrap(t)}takeIslandManager(){const t=h.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);return t===0?void 0:qn.__wrap(t)}takeBroadPhase(){const t=h.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);return t===0?void 0:jn.__wrap(t)}takeNarrowPhase(){const t=h.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);return t===0?void 0:Ce.__wrap(t)}takeBodies(){const t=h.rawdeserializedworld_takeBodies(this.__wbg_ptr);return t===0?void 0:me.__wrap(t)}takeColliders(){const t=h.rawdeserializedworld_takeColliders(this.__wbg_ptr);return t===0?void 0:be.__wrap(t)}takeImpulseJoints(){const t=h.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);return t===0?void 0:Xn.__wrap(t)}takeMultibodyJoints(){const t=h.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);return t===0?void 0:Yn.__wrap(t)}}const xl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdynamicraycastvehiclecontroller_free(i>>>0,1));class Bu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,xl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdynamicraycastvehiclecontroller_free(t,0)}constructor(t){const e=h.rawdynamicraycastvehiclecontroller_new(t);return this.__wbg_ptr=e>>>0,xl.register(this,this.__wbg_ptr,this),this}current_vehicle_speed(){return h.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}chassis(){return h.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr)}index_up_axis(){return h.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}set_index_up_axis(t){h.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}index_forward_axis(){return h.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}set_index_forward_axis(t){h.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,t)}add_wheel(t,e,n,r,s){R(t,F),R(e,F),R(n,F),h.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s)}num_wheels(){return h.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr)>>>0}update_vehicle(t,e,n,r,s,a,o,l){try{R(e,jn),R(n,Ce),R(r,me),R(s,be),h.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,It(o)?4294967297:o>>>0,ge(l))}finally{$t[he++]=void 0}}wheel_chassis_connection_point_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}set_wheel_chassis_connection_point_cs(t,e){R(e,F),h.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_suspension_rest_length(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_rest_length(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr,t,e)}wheel_max_suspension_travel(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_max_suspension_travel(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr,t,e)}wheel_radius(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_radius(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_radius(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr,t,e)}wheel_suspension_stiffness(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_stiffness(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr,t,e)}wheel_suspension_compression(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_compression(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr,t,e)}wheel_suspension_relaxation(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_relaxation(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr,t,e)}wheel_max_suspension_force(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_max_suspension_force(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr,t,e)}wheel_brake(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_brake(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_brake(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr,t,e)}wheel_steering(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_steering(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_steering(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr,t,e)}wheel_engine_force(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_engine_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_engine_force(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr,t,e)}wheel_direction_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}set_wheel_direction_cs(t,e){R(e,F),h.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_axle_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}set_wheel_axle_cs(t,e){R(e,F),h.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_friction_slip(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_friction_slip(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_friction_slip(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr,t,e)}wheel_side_friction_stiffness(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_side_friction_stiffness(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr,t,e)}wheel_rotation(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_rotation(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_forward_impulse(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_side_impulse(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_side_impulse(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_suspension_force(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_contact_normal_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}wheel_contact_point_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}wheel_suspension_length(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_length(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_hard_point_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}wheel_is_in_contact(t){return h.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr,t)!==0}wheel_ground_object(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_ground_object(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getFloat64(r+8,!0);return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}}const yl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_raweventqueue_free(i>>>0,1));class zu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,yl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_raweventqueue_free(t,0)}constructor(t){const e=h.raweventqueue_new(t);return this.__wbg_ptr=e>>>0,yl.register(this,this.__wbg_ptr,this),this}drainCollisionEvents(t){try{h.raweventqueue_drainCollisionEvents(this.__wbg_ptr,ge(t))}finally{$t[he++]=void 0}}drainContactForceEvents(t){try{h.raweventqueue_drainContactForceEvents(this.__wbg_ptr,ge(t))}finally{$t[he++]=void 0}}clear(){h.raweventqueue_clear(this.__wbg_ptr)}}const Sl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawgenericjoint_free(i>>>0,1));class fn{static __wrap(t){t=t>>>0;const e=Object.create(fn.prototype);return e.__wbg_ptr=t,Sl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Sl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawgenericjoint_free(t,0)}static generic(t,e,n,r){R(t,F),R(e,F),R(n,F);const s=h.rawgenericjoint_generic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return s===0?void 0:fn.__wrap(s)}static spring(t,e,n,r,s){R(r,F),R(s,F);const a=h.rawgenericjoint_spring(t,e,n,r.__wbg_ptr,s.__wbg_ptr);return fn.__wrap(a)}static rope(t,e,n){R(e,F),R(n,F);const r=h.rawgenericjoint_rope(t,e.__wbg_ptr,n.__wbg_ptr);return fn.__wrap(r)}static spherical(t,e){R(t,F),R(e,F);const n=h.rawgenericjoint_spherical(t.__wbg_ptr,e.__wbg_ptr);return fn.__wrap(n)}static prismatic(t,e,n,r,s,a){R(t,F),R(e,F),R(n,F);const o=h.rawgenericjoint_prismatic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s,a);return o===0?void 0:fn.__wrap(o)}static fixed(t,e,n,r){R(t,F),R(e,kt),R(n,F),R(r,kt);const s=h.rawgenericjoint_fixed(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr);return fn.__wrap(s)}static revolute(t,e,n){R(t,F),R(e,F),R(n,F);const r=h.rawgenericjoint_revolute(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return r===0?void 0:fn.__wrap(r)}}const pa=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawimpulsejointset_free(i>>>0,1));class Xn{static __wrap(t){t=t>>>0;const e=Object.create(Xn.prototype);return e.__wbg_ptr=t,pa.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,pa.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawimpulsejointset_free(t,0)}jointType(t){return h.rawimpulsejointset_jointType(this.__wbg_ptr,t)}jointBodyHandle1(t){return h.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr,t)}jointBodyHandle2(t){return h.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr,t)}jointFrameX1(t){const e=h.rawimpulsejointset_jointFrameX1(this.__wbg_ptr,t);return kt.__wrap(e)}jointFrameX2(t){const e=h.rawimpulsejointset_jointFrameX2(this.__wbg_ptr,t);return kt.__wrap(e)}jointAnchor1(t){const e=h.rawimpulsejointset_jointAnchor1(this.__wbg_ptr,t);return F.__wrap(e)}jointAnchor2(t){const e=h.rawimpulsejointset_jointAnchor2(this.__wbg_ptr,t);return F.__wrap(e)}jointSetAnchor1(t,e){R(e,F),h.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetAnchor2(t,e){R(e,F),h.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr,t,e.__wbg_ptr)}jointContactsEnabled(t){return h.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){h.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return h.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return h.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return h.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr,t,e)}jointSetLimits(t,e,n,r){h.rawimpulsejointset_jointSetLimits(this.__wbg_ptr,t,e,n,r)}jointConfigureMotorModel(t,e,n){h.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr,t,e,n)}jointConfigureMotorVelocity(t,e,n,r){h.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr,t,e,n,r)}jointConfigureMotorPosition(t,e,n,r,s){h.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr,t,e,n,r,s)}jointConfigureMotor(t,e,n,r,s,a){h.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr,t,e,n,r,s,a)}constructor(){const t=h.rawimpulsejointset_new();return this.__wbg_ptr=t>>>0,pa.register(this,this.__wbg_ptr,this),this}createJoint(t,e,n,r){return R(t,fn),h.rawimpulsejointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}remove(t,e){h.rawimpulsejointset_remove(this.__wbg_ptr,t,e)}len(){return h.rawimpulsejointset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawimpulsejointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{h.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr,ge(t))}finally{$t[he++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{h.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,ge(e))}finally{$t[he++]=void 0}}}const ma=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawintegrationparameters_free(i>>>0,1));class Pi{static __wrap(t){t=t>>>0;const e=Object.create(Pi.prototype);return e.__wbg_ptr=t,ma.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ma.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawintegrationparameters_free(t,0)}constructor(){const t=h.rawintegrationparameters_new();return this.__wbg_ptr=t>>>0,ma.register(this,this.__wbg_ptr,this),this}get dt(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}get contact_erp(){return h.rawintegrationparameters_contact_erp(this.__wbg_ptr)}get normalizedAllowedLinearError(){return h.rawintegrationparameters_normalizedAllowedLinearError(this.__wbg_ptr)}get normalizedPredictionDistance(){return h.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr)}get numSolverIterations(){return h.rawintegrationparameters_numSolverIterations(this.__wbg_ptr)>>>0}get numInternalPgsIterations(){return h.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}get minIslandSize(){return h.rawintegrationparameters_minIslandSize(this.__wbg_ptr)>>>0}get maxCcdSubsteps(){return h.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr)>>>0}get lengthUnit(){return h.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}set dt(t){h.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}set contact_natural_frequency(t){h.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr,t)}set normalizedAllowedLinearError(t){h.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr,t)}set normalizedPredictionDistance(t){h.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr,t)}set numSolverIterations(t){h.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr,t)}set numInternalPgsIterations(t){h.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}set minIslandSize(t){h.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr,t)}set maxCcdSubsteps(t){h.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr,t)}set lengthUnit(t){h.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr,t)}}const ga=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawislandmanager_free(i>>>0,1));class qn{static __wrap(t){t=t>>>0;const e=Object.create(qn.prototype);return e.__wbg_ptr=t,ga.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ga.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawislandmanager_free(t,0)}constructor(){const t=h.rawislandmanager_new();return this.__wbg_ptr=t>>>0,ga.register(this,this.__wbg_ptr,this),this}forEachActiveRigidBodyHandle(t){try{h.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr,ge(t))}finally{$t[he++]=void 0}}}const Ml=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawkinematiccharactercontroller_free(i>>>0,1));class Hu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ml.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawkinematiccharactercontroller_free(t,0)}constructor(t){const e=h.rawkinematiccharactercontroller_new(t);return this.__wbg_ptr=e>>>0,Ml.register(this,this.__wbg_ptr,this),this}up(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(t)}setUp(t){R(t,F),h.rawkinematiccharactercontroller_setUp(this.__wbg_ptr,t.__wbg_ptr)}normalNudgeFactor(){return h.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr)}setNormalNudgeFactor(t){h.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr,t)}offset(){return h.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}setOffset(t){h.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr,t)}slideEnabled(){return h.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr)!==0}setSlideEnabled(t){h.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr,t)}autostepMaxHeight(){const t=h.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);return t===4294967297?void 0:t}autostepMinWidth(){const t=h.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);return t===4294967297?void 0:t}autostepIncludesDynamicBodies(){const t=h.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);return t===16777215?void 0:t!==0}autostepEnabled(){return h.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr)!==0}enableAutostep(t,e,n){h.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr,t,e,n)}disableAutostep(){h.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr)}maxSlopeClimbAngle(){return h.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}setMaxSlopeClimbAngle(t){h.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr,t)}minSlopeSlideAngle(){return h.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr)}setMinSlopeSlideAngle(t){h.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr,t)}snapToGroundDistance(){const t=h.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);return t===4294967297?void 0:t}enableSnapToGround(t){h.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr,t)}disableSnapToGround(){h.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr)}snapToGroundEnabled(){return h.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr)!==0}computeColliderMovement(t,e,n,r,s,a,o,l,c,d,f,u){try{R(e,jn),R(n,Ce),R(r,me),R(s,be),R(o,F),h.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o.__wbg_ptr,l,It(c)?4294967297:Math.fround(c),d,It(f)?4294967297:f>>>0,ge(u))}finally{$t[he++]=void 0}}computedMovement(){const t=h.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);return F.__wrap(t)}computedGrounded(){return h.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr)!==0}numComputedCollisions(){return h.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr)>>>0}computedCollision(t,e){return R(e,Qh),h.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr,t,e.__wbg_ptr)!==0}}const wa=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawmultibodyjointset_free(i>>>0,1));class Yn{static __wrap(t){t=t>>>0;const e=Object.create(Yn.prototype);return e.__wbg_ptr=t,wa.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,wa.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawmultibodyjointset_free(t,0)}jointType(t){return h.rawmultibodyjointset_jointType(this.__wbg_ptr,t)}jointFrameX1(t){const e=h.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr,t);return kt.__wrap(e)}jointFrameX2(t){const e=h.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr,t);return kt.__wrap(e)}jointAnchor1(t){const e=h.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr,t);return F.__wrap(e)}jointAnchor2(t){const e=h.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr,t);return F.__wrap(e)}jointContactsEnabled(t){return h.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){h.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return h.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return h.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return h.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr,t,e)}constructor(){const t=h.rawmultibodyjointset_new();return this.__wbg_ptr=t>>>0,wa.register(this,this.__wbg_ptr,this),this}createJoint(t,e,n,r){return R(t,fn),h.rawmultibodyjointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}remove(t,e){h.rawmultibodyjointset_remove(this.__wbg_ptr,t,e)}contains(t){return h.rawmultibodyjointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{h.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr,ge(t))}finally{$t[he++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{h.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,ge(e))}finally{$t[he++]=void 0}}}const ba=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawnarrowphase_free(i>>>0,1));class Ce{static __wrap(t){t=t>>>0;const e=Object.create(Ce.prototype);return e.__wbg_ptr=t,ba.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ba.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawnarrowphase_free(t,0)}constructor(){const t=h.rawnarrowphase_new();return this.__wbg_ptr=t>>>0,ba.register(this,this.__wbg_ptr,this),this}contact_pairs_with(t,e){h.rawnarrowphase_contact_pairs_with(this.__wbg_ptr,t,de(e))}contact_pair(t,e){const n=h.rawnarrowphase_contact_pair(this.__wbg_ptr,t,e);return n===0?void 0:fc.__wrap(n)}intersection_pairs_with(t,e){h.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr,t,de(e))}intersection_pair(t,e){return h.rawnarrowphase_intersection_pair(this.__wbg_ptr,t,e)!==0}}const El=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawphysicspipeline_free(i>>>0,1));class Gu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,El.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawphysicspipeline_free(t,0)}constructor(){const t=h.rawphysicspipeline_new();return this.__wbg_ptr=t>>>0,El.register(this,this.__wbg_ptr,this),this}set_profiler_enabled(t){h.rawphysicspipeline_set_profiler_enabled(this.__wbg_ptr,t)}is_profiler_enabled(){return h.rawphysicspipeline_is_profiler_enabled(this.__wbg_ptr)!==0}timing_step(){return h.rawphysicspipeline_timing_step(this.__wbg_ptr)}timing_collision_detection(){return h.rawphysicspipeline_timing_collision_detection(this.__wbg_ptr)}timing_broad_phase(){return h.rawphysicspipeline_timing_broad_phase(this.__wbg_ptr)}timing_narrow_phase(){return h.rawphysicspipeline_timing_narrow_phase(this.__wbg_ptr)}timing_solver(){return h.rawphysicspipeline_timing_solver(this.__wbg_ptr)}timing_velocity_assembly(){return h.rawphysicspipeline_timing_velocity_assembly(this.__wbg_ptr)}timing_velocity_resolution(){return h.rawphysicspipeline_timing_velocity_resolution(this.__wbg_ptr)}timing_velocity_update(){return h.rawphysicspipeline_timing_velocity_update(this.__wbg_ptr)}timing_velocity_writeback(){return h.rawphysicspipeline_timing_velocity_writeback(this.__wbg_ptr)}timing_ccd(){return h.rawphysicspipeline_timing_ccd(this.__wbg_ptr)}timing_ccd_toi_computation(){return h.rawphysicspipeline_timing_ccd_toi_computation(this.__wbg_ptr)}timing_ccd_broad_phase(){return h.rawphysicspipeline_timing_ccd_broad_phase(this.__wbg_ptr)}timing_ccd_narrow_phase(){return h.rawphysicspipeline_timing_ccd_narrow_phase(this.__wbg_ptr)}timing_ccd_solver(){return h.rawphysicspipeline_timing_ccd_solver(this.__wbg_ptr)}timing_island_construction(){return h.rawphysicspipeline_timing_island_construction(this.__wbg_ptr)}timing_user_changes(){return h.rawphysicspipeline_timing_user_changes(this.__wbg_ptr)}step(t,e,n,r,s,a,o,l,c,d){R(t,F),R(e,Pi),R(n,qn),R(r,jn),R(s,Ce),R(a,me),R(o,be),R(l,Xn),R(c,Yn),R(d,ro),h.rawphysicspipeline_step(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,d.__wbg_ptr)}stepWithEvents(t,e,n,r,s,a,o,l,c,d,f,u,m,w){R(t,F),R(e,Pi),R(n,qn),R(r,jn),R(s,Ce),R(a,me),R(o,be),R(l,Xn),R(c,Yn),R(d,ro),R(f,zu),h.rawphysicspipeline_stepWithEvents(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,d.__wbg_ptr,f.__wbg_ptr,de(u),de(m),de(w))}}const Tl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpidcontroller_free(i>>>0,1));class Vu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Tl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpidcontroller_free(t,0)}constructor(t,e,n,r){const s=h.rawpidcontroller_new(t,e,n,r);return this.__wbg_ptr=s>>>0,Tl.register(this,this.__wbg_ptr,this),this}set_kp(t,e){h.rawpidcontroller_set_kp(this.__wbg_ptr,t,e)}set_ki(t,e){h.rawpidcontroller_set_ki(this.__wbg_ptr,t,e)}set_kd(t,e){h.rawpidcontroller_set_kd(this.__wbg_ptr,t,e)}set_axes_mask(t){h.rawpidcontroller_set_axes_mask(this.__wbg_ptr,t)}reset_integrals(){h.rawpidcontroller_reset_integrals(this.__wbg_ptr)}apply_linear_correction(t,e,n,r,s){R(e,me),R(r,F),R(s,F),h.rawpidcontroller_apply_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr)}apply_angular_correction(t,e,n,r,s){R(e,me),R(r,kt),R(s,F),h.rawpidcontroller_apply_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr)}linear_correction(t,e,n,r,s){R(e,me),R(r,F),R(s,F);const a=h.rawpidcontroller_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr);return F.__wrap(a)}angular_correction(t,e,n,r,s){R(e,me),R(r,kt),R(s,F);const a=h.rawpidcontroller_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr);return F.__wrap(a)}}const Al=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpointcolliderprojection_free(i>>>0,1));class Os{static __wrap(t){t=t>>>0;const e=Object.create(Os.prototype);return e.__wbg_ptr=t,Al.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Al.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpointcolliderprojection_free(t,0)}colliderHandle(){return h.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}point(){const t=h.rawpointcolliderprojection_point(this.__wbg_ptr);return F.__wrap(t)}isInside(){return h.rawpointcolliderprojection_isInside(this.__wbg_ptr)!==0}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=h.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const Rl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpointprojection_free(i>>>0,1));class Qs{static __wrap(t){t=t>>>0;const e=Object.create(Qs.prototype);return e.__wbg_ptr=t,Rl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Rl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpointprojection_free(t,0)}point(){const t=h.rawpointprojection_point(this.__wbg_ptr);return F.__wrap(t)}isInside(){return h.rawpointprojection_isInside(this.__wbg_ptr)!==0}}const Cl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawraycolliderhit_free(i>>>0,1));class mc{static __wrap(t){t=t>>>0;const e=Object.create(mc.prototype);return e.__wbg_ptr=t,Cl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Cl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawraycolliderhit_free(t,0)}colliderHandle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}timeOfImpact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}}const Pl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawraycolliderintersection_free(i>>>0,1));class ta{static __wrap(t){t=t>>>0;const e=Object.create(ta.prototype);return e.__wbg_ptr=t,Pl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Pl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawraycolliderintersection_free(t,0)}colliderHandle(){return h.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}normal(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=h.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const Il=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrayintersection_free(i>>>0,1));class ea{static __wrap(t){t=t>>>0;const e=Object.create(ea.prototype);return e.__wbg_ptr=t,Il.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Il.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrayintersection_free(t,0)}normal(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=h.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const va=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrigidbodyset_free(i>>>0,1));class me{static __wrap(t){t=t>>>0;const e=Object.create(me.prototype);return e.__wbg_ptr=t,va.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,va.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrigidbodyset_free(t,0)}rbTranslation(t){const e=h.rawrigidbodyset_rbTranslation(this.__wbg_ptr,t);return F.__wrap(e)}rbRotation(t){const e=h.rawrigidbodyset_rbRotation(this.__wbg_ptr,t);return kt.__wrap(e)}rbSleep(t){h.rawrigidbodyset_rbSleep(this.__wbg_ptr,t)}rbIsSleeping(t){return h.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr,t)!==0}rbIsMoving(t){return h.rawrigidbodyset_rbIsMoving(this.__wbg_ptr,t)!==0}rbNextTranslation(t){const e=h.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr,t);return F.__wrap(e)}rbNextRotation(t){const e=h.rawrigidbodyset_rbNextRotation(this.__wbg_ptr,t);return kt.__wrap(e)}rbSetTranslation(t,e,n,r,s){h.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr,t,e,n,r,s)}rbSetRotation(t,e,n,r,s,a){h.rawrigidbodyset_rbSetRotation(this.__wbg_ptr,t,e,n,r,s,a)}rbSetLinvel(t,e,n){R(e,F),h.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetAngvel(t,e,n){R(e,F),h.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetNextKinematicTranslation(t,e,n,r){h.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr,t,e,n,r)}rbSetNextKinematicRotation(t,e,n,r,s){h.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr,t,e,n,r,s)}rbRecomputeMassPropertiesFromColliders(t,e){R(e,be),h.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr,t,e.__wbg_ptr)}rbSetAdditionalMass(t,e,n){h.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr,t,e,n)}rbSetAdditionalMassProperties(t,e,n,r,s,a){R(n,F),R(r,F),R(s,kt),h.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a)}rbLinvel(t){const e=h.rawrigidbodyset_rbLinvel(this.__wbg_ptr,t);return F.__wrap(e)}rbAngvel(t){const e=h.rawrigidbodyset_rbAngvel(this.__wbg_ptr,t);return F.__wrap(e)}rbVelocityAtPoint(t,e){R(e,F);const n=h.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr,t,e.__wbg_ptr);return F.__wrap(n)}rbLockTranslations(t,e,n){h.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr,t,e,n)}rbSetEnabledTranslations(t,e,n,r,s){h.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr,t,e,n,r,s)}rbLockRotations(t,e,n){h.rawrigidbodyset_rbLockRotations(this.__wbg_ptr,t,e,n)}rbSetEnabledRotations(t,e,n,r,s){h.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr,t,e,n,r,s)}rbDominanceGroup(t){return h.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr,t)}rbSetDominanceGroup(t,e){h.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr,t,e)}rbEnableCcd(t,e){h.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr,t,e)}rbSetSoftCcdPrediction(t,e){h.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr,t,e)}rbMass(t){return h.rawrigidbodyset_rbMass(this.__wbg_ptr,t)}rbInvMass(t){return h.rawrigidbodyset_rbInvMass(this.__wbg_ptr,t)}rbEffectiveInvMass(t){const e=h.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr,t);return F.__wrap(e)}rbLocalCom(t){const e=h.rawrigidbodyset_rbLocalCom(this.__wbg_ptr,t);return F.__wrap(e)}rbWorldCom(t){const e=h.rawrigidbodyset_rbWorldCom(this.__wbg_ptr,t);return F.__wrap(e)}rbInvPrincipalInertia(t){const e=h.rawrigidbodyset_rbInvPrincipalInertia(this.__wbg_ptr,t);return F.__wrap(e)}rbPrincipalInertiaLocalFrame(t){const e=h.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr,t);return kt.__wrap(e)}rbPrincipalInertia(t){const e=h.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr,t);return F.__wrap(e)}rbEffectiveWorldInvInertia(t){const e=h.rawrigidbodyset_rbEffectiveWorldInvInertia(this.__wbg_ptr,t);return Bs.__wrap(e)}rbEffectiveAngularInertia(t){const e=h.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr,t);return Bs.__wrap(e)}rbWakeUp(t){h.rawrigidbodyset_rbWakeUp(this.__wbg_ptr,t)}rbIsCcdEnabled(t){return h.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr,t)!==0}rbSoftCcdPrediction(t){return h.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr,t)}rbNumColliders(t){return h.rawrigidbodyset_rbNumColliders(this.__wbg_ptr,t)>>>0}rbCollider(t,e){return h.rawrigidbodyset_rbCollider(this.__wbg_ptr,t,e)}rbBodyType(t){return h.rawrigidbodyset_rbBodyType(this.__wbg_ptr,t)}rbSetBodyType(t,e,n){h.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr,t,e,n)}rbIsFixed(t){return h.rawrigidbodyset_rbIsFixed(this.__wbg_ptr,t)!==0}rbIsKinematic(t){return h.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr,t)!==0}rbIsDynamic(t){return h.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr,t)!==0}rbLinearDamping(t){return h.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr,t)}rbAngularDamping(t){return h.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr,t)}rbSetLinearDamping(t,e){h.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr,t,e)}rbSetAngularDamping(t,e){h.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr,t,e)}rbSetEnabled(t,e){h.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr,t,e)}rbIsEnabled(t){return h.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr,t)!==0}rbGravityScale(t){return h.rawrigidbodyset_rbGravityScale(this.__wbg_ptr,t)}rbSetGravityScale(t,e,n){h.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr,t,e,n)}rbResetForces(t,e){h.rawrigidbodyset_rbResetForces(this.__wbg_ptr,t,e)}rbResetTorques(t,e){h.rawrigidbodyset_rbResetTorques(this.__wbg_ptr,t,e)}rbAddForce(t,e,n){R(e,F),h.rawrigidbodyset_rbAddForce(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbApplyImpulse(t,e,n){R(e,F),h.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAddTorque(t,e,n){R(e,F),h.rawrigidbodyset_rbAddTorque(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbApplyTorqueImpulse(t,e,n){R(e,F),h.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAddForceAtPoint(t,e,n,r){R(e,F),R(n,F),h.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbApplyImpulseAtPoint(t,e,n,r){R(e,F),R(n,F),h.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbAdditionalSolverIterations(t){return h.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr,t)>>>0}rbSetAdditionalSolverIterations(t,e){h.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr,t,e)}rbUserData(t){return h.rawrigidbodyset_rbUserData(this.__wbg_ptr,t)>>>0}rbSetUserData(t,e){h.rawrigidbodyset_rbSetUserData(this.__wbg_ptr,t,e)}rbUserForce(t){const e=h.rawrigidbodyset_rbUserForce(this.__wbg_ptr,t);return F.__wrap(e)}rbUserTorque(t){const e=h.rawrigidbodyset_rbUserTorque(this.__wbg_ptr,t);return F.__wrap(e)}constructor(){const t=h.rawrigidbodyset_new();return this.__wbg_ptr=t>>>0,va.register(this,this.__wbg_ptr,this),this}createRigidBody(t,e,n,r,s,a,o,l,c,d,f,u,m,w,y,g,p,x,T,E,P,C,D,v,M,G){return R(e,F),R(n,kt),R(o,F),R(l,F),R(c,F),R(d,F),R(f,kt),h.rawrigidbodyset_createRigidBody(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s,a,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,d.__wbg_ptr,f.__wbg_ptr,u,m,w,y,g,p,x,T,E,P,C,D,v,M,G)}remove(t,e,n,r,s){R(e,qn),R(n,be),R(r,Xn),R(s,Yn),h.rawrigidbodyset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}len(){return h.rawrigidbodyset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawrigidbodyset_contains(this.__wbg_ptr,t)!==0}forEachRigidBodyHandle(t){try{h.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr,ge(t))}finally{$t[he++]=void 0}}propagateModifiedBodyPositionsToColliders(t){R(t,be),h.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr,t.__wbg_ptr)}}const xa=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrotation_free(i>>>0,1));class kt{static __wrap(t){t=t>>>0;const e=Object.create(kt.prototype);return e.__wbg_ptr=t,xa.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,xa.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrotation_free(t,0)}constructor(t,e,n,r){const s=h.rawrotation_new(t,e,n,r);return this.__wbg_ptr=s>>>0,xa.register(this,this.__wbg_ptr,this),this}static identity(){const t=h.rawrotation_identity();return kt.__wrap(t)}get x(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}get y(){return h.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}get z(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}get w(){return h.rawrotation_w(this.__wbg_ptr)}}const Dl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawsdpmatrix3_free(i>>>0,1));class Bs{static __wrap(t){t=t>>>0;const e=Object.create(Bs.prototype);return e.__wbg_ptr=t,Dl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Dl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawsdpmatrix3_free(t,0)}elements(){const t=h.rawsdpmatrix3_elements(this.__wbg_ptr);return Cr(t)}}const Ll=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawserializationpipeline_free(i>>>0,1));class ku{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ll.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawserializationpipeline_free(t,0)}constructor(){const t=h.rawccdsolver_new();return this.__wbg_ptr=t>>>0,Ll.register(this,this.__wbg_ptr,this),this}serializeAll(t,e,n,r,s,a,o,l,c){R(t,F),R(e,Pi),R(n,qn),R(r,jn),R(s,Ce),R(a,me),R(o,be),R(l,Xn),R(c,Yn);const d=h.rawserializationpipeline_serializeAll(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr);return Cr(d)}deserializeAll(t){const e=h.rawserializationpipeline_deserializeAll(this.__wbg_ptr,de(t));return e===0?void 0:pc.__wrap(e)}}const Fl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshape_free(i>>>0,1));class Ct{static __wrap(t){t=t>>>0;const e=Object.create(Ct.prototype);return e.__wbg_ptr=t,Fl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Fl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshape_free(t,0)}static cuboid(t,e,n){const r=h.rawshape_cuboid(t,e,n);return Ct.__wrap(r)}static roundCuboid(t,e,n,r){const s=h.rawshape_roundCuboid(t,e,n,r);return Ct.__wrap(s)}static ball(t){const e=h.rawshape_ball(t);return Ct.__wrap(e)}static halfspace(t){R(t,F);const e=h.rawshape_halfspace(t.__wbg_ptr);return Ct.__wrap(e)}static capsule(t,e){const n=h.rawshape_capsule(t,e);return Ct.__wrap(n)}static cylinder(t,e){const n=h.rawshape_cylinder(t,e);return Ct.__wrap(n)}static roundCylinder(t,e,n){const r=h.rawshape_roundCylinder(t,e,n);return Ct.__wrap(r)}static cone(t,e){const n=h.rawshape_cone(t,e);return Ct.__wrap(n)}static roundCone(t,e,n){const r=h.rawshape_roundCone(t,e,n);return Ct.__wrap(r)}static voxels(t,e){R(t,F);const n=gr(e,h.__wbindgen_export_2),r=qe,s=h.rawshape_voxels(t.__wbg_ptr,n,r);return Ct.__wrap(s)}static voxelsFromPoints(t,e){R(t,F);const n=ti(e,h.__wbindgen_export_2),r=qe,s=h.rawshape_voxelsFromPoints(t.__wbg_ptr,n,r);return Ct.__wrap(s)}static polyline(t,e){const n=ti(t,h.__wbindgen_export_2),r=qe,s=gr(e,h.__wbindgen_export_2),a=qe,o=h.rawshape_polyline(n,r,s,a);return Ct.__wrap(o)}static trimesh(t,e,n){const r=ti(t,h.__wbindgen_export_2),s=qe,a=gr(e,h.__wbindgen_export_2),o=qe,l=h.rawshape_trimesh(r,s,a,o,n);return l===0?void 0:Ct.__wrap(l)}static heightfield(t,e,n,r,s){const a=ti(n,h.__wbindgen_export_2),o=qe;R(r,F);const l=h.rawshape_heightfield(t,e,a,o,r.__wbg_ptr,s);return Ct.__wrap(l)}static segment(t,e){R(t,F),R(e,F);const n=h.rawshape_segment(t.__wbg_ptr,e.__wbg_ptr);return Ct.__wrap(n)}static triangle(t,e,n){R(t,F),R(e,F),R(n,F);const r=h.rawshape_triangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return Ct.__wrap(r)}static roundTriangle(t,e,n,r){R(t,F),R(e,F),R(n,F);const s=h.rawshape_roundTriangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return Ct.__wrap(s)}static convexHull(t){const e=ti(t,h.__wbindgen_export_2),n=qe,r=h.rawshape_convexHull(e,n);return r===0?void 0:Ct.__wrap(r)}static roundConvexHull(t,e){const n=ti(t,h.__wbindgen_export_2),r=qe,s=h.rawshape_roundConvexHull(n,r,e);return s===0?void 0:Ct.__wrap(s)}static convexMesh(t,e){const n=ti(t,h.__wbindgen_export_2),r=qe,s=gr(e,h.__wbindgen_export_2),a=qe,o=h.rawshape_convexMesh(n,r,s,a);return o===0?void 0:Ct.__wrap(o)}static roundConvexMesh(t,e,n){const r=ti(t,h.__wbindgen_export_2),s=qe,a=gr(e,h.__wbindgen_export_2),o=qe,l=h.rawshape_roundConvexMesh(r,s,a,o,n);return l===0?void 0:Ct.__wrap(l)}castShape(t,e,n,r,s,a,o,l,c,d){R(t,F),R(e,kt),R(n,F),R(r,Ct),R(s,F),R(a,kt),R(o,F);const f=h.rawshape_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l,c,d);return f===0?void 0:na.__wrap(f)}intersectsShape(t,e,n,r,s){return R(t,F),R(e,kt),R(n,Ct),R(r,F),R(s,kt),h.rawshape_intersectsShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)!==0}contactShape(t,e,n,r,s,a){R(t,F),R(e,kt),R(n,Ct),R(r,F),R(s,kt);const o=h.rawshape_contactShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a);return o===0?void 0:Pr.__wrap(o)}containsPoint(t,e,n){return R(t,F),R(e,kt),R(n,F),h.rawshape_containsPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr)!==0}projectPoint(t,e,n,r){R(t,F),R(e,kt),R(n,F);const s=h.rawshape_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return Qs.__wrap(s)}intersectsRay(t,e,n,r,s){return R(t,F),R(e,kt),R(n,F),R(r,F),h.rawshape_intersectsRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s)!==0}castRay(t,e,n,r,s,a){return R(t,F),R(e,kt),R(n,F),R(r,F),h.rawshape_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a)}castRayAndGetNormal(t,e,n,r,s,a){R(t,F),R(e,kt),R(n,F),R(r,F);const o=h.rawshape_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a);return o===0?void 0:ea.__wrap(o)}}const Ul=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshapecasthit_free(i>>>0,1));class na{static __wrap(t){t=t>>>0;const e=Object.create(na.prototype);return e.__wbg_ptr=t,Ul.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ul.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshapecasthit_free(t,0)}time_of_impact(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}witness1(){const t=h.rawshapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}witness2(){const t=h.rawcontactforceevent_total_force(this.__wbg_ptr);return F.__wrap(t)}normal1(){const t=h.rawshapecasthit_normal1(this.__wbg_ptr);return F.__wrap(t)}normal2(){const t=h.rawshapecasthit_normal2(this.__wbg_ptr);return F.__wrap(t)}}const Nl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshapecontact_free(i>>>0,1));class Pr{static __wrap(t){t=t>>>0;const e=Object.create(Pr.prototype);return e.__wbg_ptr=t,Nl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Nl.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshapecontact_free(t,0)}distance(){return h.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}point1(){const t=h.rawpointprojection_point(this.__wbg_ptr);return F.__wrap(t)}point2(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}normal1(){const t=h.rawcollidershapecasthit_witness2(this.__wbg_ptr);return F.__wrap(t)}normal2(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(t)}}const ya=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawvector_free(i>>>0,1));class F{static __wrap(t){t=t>>>0;const e=Object.create(F.prototype);return e.__wbg_ptr=t,ya.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ya.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawvector_free(t,0)}static zero(){const t=h.rawvector_zero();return F.__wrap(t)}constructor(t,e,n){const r=h.rawvector_new(t,e,n);return this.__wbg_ptr=r>>>0,ya.register(this,this.__wbg_ptr,this),this}get x(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}set x(t){h.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}get y(){return h.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}set y(t){h.rawvector_set_y(this.__wbg_ptr,t)}get z(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}set z(t){h.rawvector_set_z(this.__wbg_ptr,t)}xyz(){const t=h.rawvector_xyz(this.__wbg_ptr);return F.__wrap(t)}yxz(){const t=h.rawvector_yxz(this.__wbg_ptr);return F.__wrap(t)}zxy(){const t=h.rawvector_zxy(this.__wbg_ptr);return F.__wrap(t)}xzy(){const t=h.rawvector_xzy(this.__wbg_ptr);return F.__wrap(t)}yzx(){const t=h.rawvector_yzx(this.__wbg_ptr);return F.__wrap(t)}zyx(){const t=h.rawvector_zyx(this.__wbg_ptr);return F.__wrap(t)}}function Wu(i,t,e,n){const r=Kt(i).bind(Kt(t),Kt(e),Kt(n));return de(r)}function ju(i){const t=Kt(i).buffer;return de(t)}function Xu(){return $s(function(i,t){const e=Kt(i).call(Kt(t));return de(e)},arguments)}function qu(){return $s(function(i,t,e){const n=Kt(i).call(Kt(t),Kt(e));return de(n)},arguments)}function Yu(){return $s(function(i,t,e,n){const r=Kt(i).call(Kt(t),Kt(e),Kt(n));return de(r)},arguments)}function Ku(){return $s(function(i,t,e,n,r){const s=Kt(i).call(Kt(t),Kt(e),Kt(n),Kt(r));return de(s)},arguments)}function $u(i){return Kt(i).length}function Ju(i){return Kt(i).length}function Zu(i){const t=new Uint8Array(Kt(i));return de(t)}function Qu(i,t){const e=new Function($h(i,t));return de(e)}function t_(i,t,e){const n=new Uint8Array(Kt(i),t>>>0,e>>>0);return de(n)}function e_(i,t,e){const n=new Float32Array(Kt(i),t>>>0,e>>>0);return de(n)}function n_(i){const t=new Float32Array(i>>>0);return de(t)}function i_(i){return Kt(i).now()}function r_(i){const t=Kt(i).performance;return de(t)}function s_(i){const t=uc.__wrap(i);return de(t)}function a_(i){const t=ta.__wrap(i);return de(t)}function o_(i,t,e){Kt(i).set(Kt(t),e>>>0)}function c_(i,t,e){Kt(i).set(Kt(t),e>>>0)}function l_(){const i=typeof global>"u"?null:global;return It(i)?0:de(i)}function h_(){const i=typeof globalThis>"u"?null:globalThis;return It(i)?0:de(i)}function d_(){const i=typeof self>"u"?null:self;return It(i)?0:de(i)}function u_(){const i=typeof window>"u"?null:window;return It(i)?0:de(i)}function __(i){const t=Kt(i);return typeof t=="boolean"?t?1:0:2}function f_(i){return typeof Kt(i)=="function"}function p_(i){return Kt(i)===void 0}function m_(){const i=h.memory;return de(i)}function g_(i,t){const e=Kt(t),n=typeof e=="number"?e:void 0;ze().setFloat64(i+8,It(n)?0:n,!0),ze().setInt32(i+0,!It(n),!0)}function w_(i){return de(i)}function b_(i){const t=Kt(i);return de(t)}function v_(i){Cr(i)}function x_(i,t){throw new Error($h(i,t))}URL=globalThis.URL;const _=await Cu({"./rapier_wasm3d_bg.js":{__wbindgen_number_new:w_,__wbindgen_boolean_get:__,__wbindgen_object_drop_ref:v_,__wbindgen_number_get:g_,__wbindgen_is_function:f_,__wbg_rawraycolliderintersection_new:a_,__wbg_rawcontactforceevent_new:s_,__wbg_performance_7a3ffd0b17f663ad:r_,__wbindgen_is_undefined:p_,__wbg_now_2c95c9de01293173:i_,__wbindgen_object_clone_ref:b_,__wbg_newnoargs_105ed471475aaf50:Qu,__wbg_call_672a4d21634d4a24:Xu,__wbg_call_7cccdd69e0791ae2:qu,__wbg_call_833bed5770ea2041:Yu,__wbg_call_b8adc8b1d0a0d8eb:Ku,__wbg_bind_c8359b1cba058168:Wu,__wbg_buffer_609cc3eee51ed158:ju,__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0:h_,__wbg_static_accessor_SELF_37c5d418e4bf5819:d_,__wbg_static_accessor_WINDOW_5de37043a91a9c40:u_,__wbg_static_accessor_GLOBAL_88a902d13a557d07:l_,__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a:t_,__wbg_new_a12002a7f91c75be:Zu,__wbg_set_65595bdd868b3009:c_,__wbg_length_a446193dc22c12f8:Ju,__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354:e_,__wbg_set_10bad9bee0e9c58b:o_,__wbg_length_3b4f022188ae8db6:$u,__wbg_newwithlength_5a5efe313cfd59f1:n_,__wbindgen_throw:x_,__wbindgen_memory:m_}},Ru),y_=_.memory,S_=_.version,M_=_.__wbg_rawkinematiccharactercontroller_free,E_=_.rawkinematiccharactercontroller_new,T_=_.rawkinematiccharactercontroller_setUp,A_=_.rawkinematiccharactercontroller_normalNudgeFactor,R_=_.rawkinematiccharactercontroller_setNormalNudgeFactor,C_=_.rawkinematiccharactercontroller_offset,P_=_.rawkinematiccharactercontroller_setOffset,I_=_.rawkinematiccharactercontroller_slideEnabled,D_=_.rawkinematiccharactercontroller_setSlideEnabled,L_=_.rawkinematiccharactercontroller_autostepMaxHeight,F_=_.rawkinematiccharactercontroller_autostepMinWidth,U_=_.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,N_=_.rawkinematiccharactercontroller_autostepEnabled,O_=_.rawkinematiccharactercontroller_enableAutostep,B_=_.rawkinematiccharactercontroller_disableAutostep,z_=_.rawkinematiccharactercontroller_maxSlopeClimbAngle,H_=_.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,G_=_.rawkinematiccharactercontroller_minSlopeSlideAngle,V_=_.rawkinematiccharactercontroller_setMinSlopeSlideAngle,k_=_.rawkinematiccharactercontroller_snapToGroundDistance,W_=_.rawkinematiccharactercontroller_enableSnapToGround,j_=_.rawkinematiccharactercontroller_disableSnapToGround,X_=_.rawkinematiccharactercontroller_snapToGroundEnabled,q_=_.rawkinematiccharactercontroller_computeColliderMovement,Y_=_.rawkinematiccharactercontroller_computedMovement,K_=_.rawkinematiccharactercontroller_computedGrounded,$_=_.rawkinematiccharactercontroller_numComputedCollisions,J_=_.rawkinematiccharactercontroller_computedCollision,Z_=_.__wbg_rawcharactercollision_free,Q_=_.rawcharactercollision_new,tf=_.rawcharactercollision_handle,ef=_.rawcharactercollision_translationDeltaApplied,nf=_.rawcharactercollision_translationDeltaRemaining,rf=_.rawcharactercollision_toi,sf=_.rawcharactercollision_worldWitness1,af=_.rawcharactercollision_worldWitness2,of=_.rawcharactercollision_worldNormal1,cf=_.rawcharactercollision_worldNormal2,lf=_.__wbg_rawpidcontroller_free,hf=_.rawpidcontroller_new,df=_.rawpidcontroller_set_kp,uf=_.rawpidcontroller_set_ki,_f=_.rawpidcontroller_set_kd,ff=_.rawpidcontroller_set_axes_mask,pf=_.rawpidcontroller_reset_integrals,mf=_.rawpidcontroller_apply_linear_correction,gf=_.rawpidcontroller_apply_angular_correction,wf=_.rawpidcontroller_linear_correction,bf=_.rawpidcontroller_angular_correction,vf=_.__wbg_rawdynamicraycastvehiclecontroller_free,xf=_.rawdynamicraycastvehiclecontroller_new,yf=_.rawdynamicraycastvehiclecontroller_current_vehicle_speed,Sf=_.rawdynamicraycastvehiclecontroller_chassis,Mf=_.rawdynamicraycastvehiclecontroller_index_up_axis,Ef=_.rawdynamicraycastvehiclecontroller_set_index_up_axis,Tf=_.rawdynamicraycastvehiclecontroller_index_forward_axis,Af=_.rawdynamicraycastvehiclecontroller_set_index_forward_axis,Rf=_.rawdynamicraycastvehiclecontroller_add_wheel,Cf=_.rawdynamicraycastvehiclecontroller_num_wheels,Pf=_.rawdynamicraycastvehiclecontroller_update_vehicle,If=_.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs,Df=_.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs,Lf=_.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length,Ff=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length,Uf=_.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel,Nf=_.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel,Of=_.rawdynamicraycastvehiclecontroller_wheel_radius,Bf=_.rawdynamicraycastvehiclecontroller_set_wheel_radius,zf=_.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness,Hf=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness,Gf=_.rawdynamicraycastvehiclecontroller_wheel_suspension_compression,Vf=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression,kf=_.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation,Wf=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation,jf=_.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force,Xf=_.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force,qf=_.rawdynamicraycastvehiclecontroller_wheel_brake,Yf=_.rawdynamicraycastvehiclecontroller_set_wheel_brake,Kf=_.rawdynamicraycastvehiclecontroller_wheel_steering,$f=_.rawdynamicraycastvehiclecontroller_set_wheel_steering,Jf=_.rawdynamicraycastvehiclecontroller_wheel_engine_force,Zf=_.rawdynamicraycastvehiclecontroller_set_wheel_engine_force,Qf=_.rawdynamicraycastvehiclecontroller_wheel_direction_cs,tp=_.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs,ep=_.rawdynamicraycastvehiclecontroller_wheel_axle_cs,np=_.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs,ip=_.rawdynamicraycastvehiclecontroller_wheel_friction_slip,rp=_.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip,sp=_.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness,ap=_.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness,op=_.rawdynamicraycastvehiclecontroller_wheel_rotation,cp=_.rawdynamicraycastvehiclecontroller_wheel_forward_impulse,lp=_.rawdynamicraycastvehiclecontroller_wheel_side_impulse,hp=_.rawdynamicraycastvehiclecontroller_wheel_suspension_force,dp=_.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws,up=_.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws,_p=_.rawdynamicraycastvehiclecontroller_wheel_suspension_length,fp=_.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws,pp=_.rawdynamicraycastvehiclecontroller_wheel_is_in_contact,mp=_.rawdynamicraycastvehiclecontroller_wheel_ground_object,gp=_.__wbg_rawccdsolver_free,wp=_.rawimpulsejointset_jointType,bp=_.rawimpulsejointset_jointBodyHandle1,vp=_.rawimpulsejointset_jointBodyHandle2,xp=_.rawimpulsejointset_jointFrameX1,yp=_.rawimpulsejointset_jointFrameX2,Sp=_.rawimpulsejointset_jointAnchor1,Mp=_.rawimpulsejointset_jointAnchor2,Ep=_.rawimpulsejointset_jointSetAnchor1,Tp=_.rawimpulsejointset_jointSetAnchor2,Ap=_.rawimpulsejointset_jointContactsEnabled,Rp=_.rawimpulsejointset_jointSetContactsEnabled,Cp=_.rawimpulsejointset_jointLimitsEnabled,Pp=_.rawimpulsejointset_jointLimitsMin,Ip=_.rawimpulsejointset_jointLimitsMax,Dp=_.rawimpulsejointset_jointSetLimits,Lp=_.rawimpulsejointset_jointConfigureMotorModel,Fp=_.rawimpulsejointset_jointConfigureMotorVelocity,Up=_.rawimpulsejointset_jointConfigureMotorPosition,Np=_.rawimpulsejointset_jointConfigureMotor,Op=_.__wbg_rawimpulsejointset_free,Bp=_.rawimpulsejointset_new,zp=_.rawimpulsejointset_createJoint,Hp=_.rawimpulsejointset_remove,Gp=_.rawimpulsejointset_len,Vp=_.rawimpulsejointset_contains,kp=_.rawimpulsejointset_forEachJointHandle,Wp=_.rawimpulsejointset_forEachJointAttachedToRigidBody,jp=_.__wbg_rawintegrationparameters_free,Xp=_.rawintegrationparameters_new,qp=_.rawintegrationparameters_dt,Yp=_.rawintegrationparameters_contact_erp,Kp=_.rawintegrationparameters_normalizedAllowedLinearError,$p=_.rawintegrationparameters_normalizedPredictionDistance,Jp=_.rawintegrationparameters_numSolverIterations,Zp=_.rawintegrationparameters_minIslandSize,Qp=_.rawintegrationparameters_maxCcdSubsteps,tm=_.rawintegrationparameters_set_dt,em=_.rawintegrationparameters_set_contact_natural_frequency,nm=_.rawintegrationparameters_set_normalizedAllowedLinearError,im=_.rawintegrationparameters_set_normalizedPredictionDistance,rm=_.rawintegrationparameters_set_numSolverIterations,sm=_.rawintegrationparameters_set_minIslandSize,am=_.rawintegrationparameters_set_maxCcdSubsteps,om=_.rawintegrationparameters_set_lengthUnit,cm=_.__wbg_rawislandmanager_free,lm=_.rawislandmanager_new,hm=_.rawislandmanager_forEachActiveRigidBodyHandle,dm=_.__wbg_rawgenericjoint_free,um=_.rawgenericjoint_generic,_m=_.rawgenericjoint_spring,fm=_.rawgenericjoint_rope,pm=_.rawgenericjoint_spherical,mm=_.rawgenericjoint_prismatic,gm=_.rawgenericjoint_fixed,wm=_.rawgenericjoint_revolute,bm=_.rawmultibodyjointset_jointType,vm=_.rawmultibodyjointset_jointFrameX1,xm=_.rawmultibodyjointset_jointFrameX2,ym=_.rawmultibodyjointset_jointAnchor1,Sm=_.rawmultibodyjointset_jointAnchor2,Mm=_.rawmultibodyjointset_jointContactsEnabled,Em=_.rawmultibodyjointset_jointSetContactsEnabled,Tm=_.rawmultibodyjointset_jointLimitsEnabled,Am=_.rawmultibodyjointset_jointLimitsMin,Rm=_.rawmultibodyjointset_jointLimitsMax,Cm=_.__wbg_rawmultibodyjointset_free,Pm=_.rawmultibodyjointset_new,Im=_.rawmultibodyjointset_createJoint,Dm=_.rawmultibodyjointset_remove,Lm=_.rawmultibodyjointset_contains,Fm=_.rawmultibodyjointset_forEachJointHandle,Um=_.rawmultibodyjointset_forEachJointAttachedToRigidBody,Nm=_.rawrigidbodyset_rbTranslation,Om=_.rawrigidbodyset_rbRotation,Bm=_.rawrigidbodyset_rbSleep,zm=_.rawrigidbodyset_rbIsSleeping,Hm=_.rawrigidbodyset_rbIsMoving,Gm=_.rawrigidbodyset_rbNextTranslation,Vm=_.rawrigidbodyset_rbNextRotation,km=_.rawrigidbodyset_rbSetTranslation,Wm=_.rawrigidbodyset_rbSetRotation,jm=_.rawrigidbodyset_rbSetLinvel,Xm=_.rawrigidbodyset_rbSetAngvel,qm=_.rawrigidbodyset_rbSetNextKinematicTranslation,Ym=_.rawrigidbodyset_rbSetNextKinematicRotation,Km=_.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,$m=_.rawrigidbodyset_rbSetAdditionalMass,Jm=_.rawrigidbodyset_rbSetAdditionalMassProperties,Zm=_.rawrigidbodyset_rbLinvel,Qm=_.rawrigidbodyset_rbAngvel,tg=_.rawrigidbodyset_rbVelocityAtPoint,eg=_.rawrigidbodyset_rbLockTranslations,ng=_.rawrigidbodyset_rbSetEnabledTranslations,ig=_.rawrigidbodyset_rbLockRotations,rg=_.rawrigidbodyset_rbSetEnabledRotations,sg=_.rawrigidbodyset_rbDominanceGroup,ag=_.rawrigidbodyset_rbSetDominanceGroup,og=_.rawrigidbodyset_rbEnableCcd,cg=_.rawrigidbodyset_rbSetSoftCcdPrediction,lg=_.rawrigidbodyset_rbMass,hg=_.rawrigidbodyset_rbInvMass,dg=_.rawrigidbodyset_rbEffectiveInvMass,ug=_.rawrigidbodyset_rbLocalCom,_g=_.rawrigidbodyset_rbWorldCom,fg=_.rawrigidbodyset_rbInvPrincipalInertia,pg=_.rawrigidbodyset_rbPrincipalInertiaLocalFrame,mg=_.rawrigidbodyset_rbPrincipalInertia,gg=_.rawrigidbodyset_rbEffectiveWorldInvInertia,wg=_.rawrigidbodyset_rbEffectiveAngularInertia,bg=_.rawrigidbodyset_rbWakeUp,vg=_.rawrigidbodyset_rbIsCcdEnabled,xg=_.rawrigidbodyset_rbSoftCcdPrediction,yg=_.rawrigidbodyset_rbNumColliders,Sg=_.rawrigidbodyset_rbCollider,Mg=_.rawrigidbodyset_rbBodyType,Eg=_.rawrigidbodyset_rbSetBodyType,Tg=_.rawrigidbodyset_rbIsFixed,Ag=_.rawrigidbodyset_rbIsKinematic,Rg=_.rawrigidbodyset_rbIsDynamic,Cg=_.rawrigidbodyset_rbLinearDamping,Pg=_.rawrigidbodyset_rbAngularDamping,Ig=_.rawrigidbodyset_rbSetLinearDamping,Dg=_.rawrigidbodyset_rbSetAngularDamping,Lg=_.rawrigidbodyset_rbSetEnabled,Fg=_.rawrigidbodyset_rbIsEnabled,Ug=_.rawrigidbodyset_rbGravityScale,Ng=_.rawrigidbodyset_rbSetGravityScale,Og=_.rawrigidbodyset_rbResetForces,Bg=_.rawrigidbodyset_rbResetTorques,zg=_.rawrigidbodyset_rbAddForce,Hg=_.rawrigidbodyset_rbApplyImpulse,Gg=_.rawrigidbodyset_rbAddTorque,Vg=_.rawrigidbodyset_rbApplyTorqueImpulse,kg=_.rawrigidbodyset_rbAddForceAtPoint,Wg=_.rawrigidbodyset_rbApplyImpulseAtPoint,jg=_.rawrigidbodyset_rbAdditionalSolverIterations,Xg=_.rawrigidbodyset_rbSetAdditionalSolverIterations,qg=_.rawrigidbodyset_rbUserData,Yg=_.rawrigidbodyset_rbSetUserData,Kg=_.rawrigidbodyset_rbUserForce,$g=_.rawrigidbodyset_rbUserTorque,Jg=_.__wbg_rawrigidbodyset_free,Zg=_.rawrigidbodyset_new,Qg=_.rawrigidbodyset_createRigidBody,tw=_.rawrigidbodyset_remove,ew=_.rawrigidbodyset_len,nw=_.rawrigidbodyset_contains,iw=_.rawrigidbodyset_forEachRigidBodyHandle,rw=_.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,sw=_.__wbg_rawbroadphase_free,aw=_.rawbroadphase_new,ow=_.rawbroadphase_castRay,cw=_.rawbroadphase_castRayAndGetNormal,lw=_.rawbroadphase_intersectionsWithRay,hw=_.rawbroadphase_intersectionWithShape,dw=_.rawbroadphase_projectPoint,uw=_.rawbroadphase_projectPointAndGetFeature,_w=_.rawbroadphase_intersectionsWithPoint,fw=_.rawbroadphase_castShape,pw=_.rawbroadphase_intersectionsWithShape,mw=_.rawbroadphase_collidersWithAabbIntersectingAabb,gw=_.rawcolliderset_coTranslation,ww=_.rawcolliderset_coRotation,bw=_.rawcolliderset_coTranslationWrtParent,vw=_.rawcolliderset_coRotationWrtParent,xw=_.rawcolliderset_coSetTranslation,yw=_.rawcolliderset_coSetTranslationWrtParent,Sw=_.rawcolliderset_coSetRotation,Mw=_.rawcolliderset_coSetRotationWrtParent,Ew=_.rawcolliderset_coIsSensor,Tw=_.rawcolliderset_coShapeType,Aw=_.rawcolliderset_coHalfspaceNormal,Rw=_.rawcolliderset_coHalfExtents,Cw=_.rawcolliderset_coSetHalfExtents,Pw=_.rawcolliderset_coRadius,Iw=_.rawcolliderset_coSetRadius,Dw=_.rawcolliderset_coHalfHeight,Lw=_.rawcolliderset_coSetHalfHeight,Fw=_.rawcolliderset_coRoundRadius,Uw=_.rawcolliderset_coSetRoundRadius,Nw=_.rawcolliderset_coVoxelData,Ow=_.rawcolliderset_coVoxelSize,Bw=_.rawcolliderset_coSetVoxel,zw=_.rawcolliderset_coPropagateVoxelChange,Hw=_.rawcolliderset_coCombineVoxelStates,Gw=_.rawcolliderset_coVertices,Vw=_.rawcolliderset_coIndices,kw=_.rawcolliderset_coTriMeshFlags,Ww=_.rawcolliderset_coHeightFieldFlags,jw=_.rawcolliderset_coHeightfieldHeights,Xw=_.rawcolliderset_coHeightfieldScale,qw=_.rawcolliderset_coHeightfieldNRows,Yw=_.rawcolliderset_coHeightfieldNCols,Kw=_.rawcolliderset_coParent,$w=_.rawcolliderset_coSetEnabled,Jw=_.rawcolliderset_coIsEnabled,Zw=_.rawcolliderset_coSetContactSkin,Qw=_.rawcolliderset_coContactSkin,t0=_.rawcolliderset_coFriction,e0=_.rawcolliderset_coRestitution,n0=_.rawcolliderset_coDensity,i0=_.rawcolliderset_coMass,r0=_.rawcolliderset_coVolume,s0=_.rawcolliderset_coCollisionGroups,a0=_.rawcolliderset_coSolverGroups,o0=_.rawcolliderset_coActiveHooks,c0=_.rawcolliderset_coActiveCollisionTypes,l0=_.rawcolliderset_coActiveEvents,h0=_.rawcolliderset_coContactForceEventThreshold,d0=_.rawcolliderset_coContainsPoint,u0=_.rawcolliderset_coCastShape,_0=_.rawcolliderset_coCastCollider,f0=_.rawcolliderset_coIntersectsShape,p0=_.rawcolliderset_coContactShape,m0=_.rawcolliderset_coContactCollider,g0=_.rawcolliderset_coProjectPoint,w0=_.rawcolliderset_coIntersectsRay,b0=_.rawcolliderset_coCastRay,v0=_.rawcolliderset_coCastRayAndGetNormal,x0=_.rawcolliderset_coSetSensor,y0=_.rawcolliderset_coSetRestitution,S0=_.rawcolliderset_coSetFriction,M0=_.rawcolliderset_coFrictionCombineRule,E0=_.rawcolliderset_coSetFrictionCombineRule,T0=_.rawcolliderset_coRestitutionCombineRule,A0=_.rawcolliderset_coSetRestitutionCombineRule,R0=_.rawcolliderset_coSetCollisionGroups,C0=_.rawcolliderset_coSetSolverGroups,P0=_.rawcolliderset_coSetActiveHooks,I0=_.rawcolliderset_coSetActiveEvents,D0=_.rawcolliderset_coSetActiveCollisionTypes,L0=_.rawcolliderset_coSetShape,F0=_.rawcolliderset_coSetContactForceEventThreshold,U0=_.rawcolliderset_coSetDensity,N0=_.rawcolliderset_coSetMass,O0=_.rawcolliderset_coSetMassProperties,B0=_.__wbg_rawcolliderset_free,z0=_.rawcolliderset_new,H0=_.rawcolliderset_len,G0=_.rawcolliderset_contains,V0=_.rawcolliderset_createCollider,k0=_.rawcolliderset_remove,W0=_.rawcolliderset_forEachColliderHandle,j0=_.__wbg_rawshapecontact_free,X0=_.__wbg_rawnarrowphase_free,q0=_.rawnarrowphase_new,Y0=_.rawnarrowphase_contact_pairs_with,K0=_.rawnarrowphase_contact_pair,$0=_.rawnarrowphase_intersection_pairs_with,J0=_.rawnarrowphase_intersection_pair,Z0=_.__wbg_rawcontactmanifold_free,Q0=_.rawcontactpair_collider1,tb=_.rawcontactpair_collider2,eb=_.rawcontactpair_numContactManifolds,nb=_.rawcontactpair_contactManifold,ib=_.rawcontactmanifold_normal,rb=_.rawcontactmanifold_local_n1,sb=_.rawcontactmanifold_local_n2,ab=_.rawcontactmanifold_subshape1,ob=_.rawcontactmanifold_subshape2,cb=_.rawcontactmanifold_num_contacts,lb=_.rawcontactmanifold_contact_local_p1,hb=_.rawcontactmanifold_contact_local_p2,db=_.rawcontactmanifold_contact_dist,ub=_.rawcontactmanifold_contact_fid1,_b=_.rawcontactmanifold_contact_fid2,fb=_.rawcontactmanifold_contact_impulse,pb=_.rawcontactmanifold_contact_tangent_impulse_x,mb=_.rawcontactmanifold_contact_tangent_impulse_y,gb=_.rawcontactmanifold_num_solver_contacts,wb=_.rawcontactmanifold_solver_contact_point,bb=_.rawcontactmanifold_solver_contact_dist,vb=_.rawcontactmanifold_solver_contact_friction,xb=_.rawcontactmanifold_solver_contact_restitution,yb=_.rawcontactmanifold_solver_contact_tangent_velocity,Sb=_.__wbg_rawpointprojection_free,Mb=_.rawpointprojection_point,Eb=_.rawpointprojection_isInside,Tb=_.__wbg_rawpointcolliderprojection_free,Ab=_.rawpointcolliderprojection_colliderHandle,Rb=_.rawpointcolliderprojection_point,Cb=_.rawpointcolliderprojection_isInside,Pb=_.rawpointcolliderprojection_featureType,Ib=_.rawpointcolliderprojection_featureId,Db=_.__wbg_rawrayintersection_free,Lb=_.__wbg_rawraycolliderhit_free,Fb=_.__wbg_rawshape_free,Ub=_.rawshape_cuboid,Nb=_.rawshape_roundCuboid,Ob=_.rawshape_ball,Bb=_.rawshape_halfspace,zb=_.rawshape_capsule,Hb=_.rawshape_cylinder,Gb=_.rawshape_roundCylinder,Vb=_.rawshape_cone,kb=_.rawshape_roundCone,Wb=_.rawshape_voxels,jb=_.rawshape_voxelsFromPoints,Xb=_.rawshape_polyline,qb=_.rawshape_trimesh,Yb=_.rawshape_heightfield,Kb=_.rawshape_segment,$b=_.rawshape_triangle,Jb=_.rawshape_roundTriangle,Zb=_.rawshape_convexHull,Qb=_.rawshape_roundConvexHull,tv=_.rawshape_convexMesh,ev=_.rawshape_roundConvexMesh,nv=_.rawshape_castShape,iv=_.rawshape_intersectsShape,rv=_.rawshape_contactShape,sv=_.rawshape_containsPoint,av=_.rawshape_projectPoint,ov=_.rawshape_intersectsRay,cv=_.rawshape_castRay,lv=_.rawshape_castRayAndGetNormal,hv=_.__wbg_rawshapecasthit_free,dv=_.rawshapecasthit_witness1,uv=_.rawshapecasthit_normal1,_v=_.rawshapecasthit_normal2,fv=_.__wbg_rawcollidershapecasthit_free,pv=_.rawcollidershapecasthit_time_of_impact,mv=_.rawcollidershapecasthit_witness1,gv=_.rawcollidershapecasthit_witness2,wv=_.rawrotation_new,bv=_.rawrotation_identity,vv=_.rawrotation_w,xv=_.rawvector_zero,yv=_.rawvector_new,Sv=_.rawvector_set_y,Mv=_.rawvector_set_z,Ev=_.rawvector_xyz,Tv=_.rawvector_yxz,Av=_.rawvector_zxy,Rv=_.rawvector_xzy,Cv=_.rawvector_yzx,Pv=_.rawvector_zyx,Iv=_.rawsdpmatrix3_elements,Dv=_.__wbg_rawdebugrenderpipeline_free,Lv=_.rawdebugrenderpipeline_new,Fv=_.rawdebugrenderpipeline_vertices,Uv=_.rawdebugrenderpipeline_colors,Nv=_.rawdebugrenderpipeline_render,Ov=_.__wbg_raweventqueue_free,Bv=_.__wbg_rawcontactforceevent_free,zv=_.rawcontactforceevent_collider2,Hv=_.rawcontactforceevent_total_force,Gv=_.rawcontactforceevent_total_force_magnitude,Vv=_.rawcontactforceevent_max_force_direction,kv=_.rawcontactforceevent_max_force_magnitude,Wv=_.raweventqueue_new,jv=_.raweventqueue_drainCollisionEvents,Xv=_.raweventqueue_drainContactForceEvents,qv=_.raweventqueue_clear,Yv=_.__wbg_rawphysicspipeline_free,Kv=_.rawphysicspipeline_new,$v=_.rawphysicspipeline_set_profiler_enabled,Jv=_.rawphysicspipeline_is_profiler_enabled,Zv=_.rawphysicspipeline_timing_step,Qv=_.rawphysicspipeline_timing_collision_detection,tx=_.rawphysicspipeline_timing_broad_phase,ex=_.rawphysicspipeline_timing_narrow_phase,nx=_.rawphysicspipeline_timing_solver,ix=_.rawphysicspipeline_timing_velocity_assembly,rx=_.rawphysicspipeline_timing_velocity_resolution,sx=_.rawphysicspipeline_timing_velocity_update,ax=_.rawphysicspipeline_timing_velocity_writeback,ox=_.rawphysicspipeline_timing_ccd,cx=_.rawphysicspipeline_timing_ccd_toi_computation,lx=_.rawphysicspipeline_timing_ccd_broad_phase,hx=_.rawphysicspipeline_timing_ccd_narrow_phase,dx=_.rawphysicspipeline_timing_ccd_solver,ux=_.rawphysicspipeline_timing_island_construction,_x=_.rawphysicspipeline_timing_user_changes,fx=_.rawphysicspipeline_step,px=_.rawphysicspipeline_stepWithEvents,mx=_.__wbg_rawdeserializedworld_free,gx=_.rawdeserializedworld_takeGravity,wx=_.rawdeserializedworld_takeIntegrationParameters,bx=_.rawdeserializedworld_takeIslandManager,vx=_.rawdeserializedworld_takeBroadPhase,xx=_.rawdeserializedworld_takeNarrowPhase,yx=_.rawdeserializedworld_takeBodies,Sx=_.rawdeserializedworld_takeColliders,Mx=_.rawdeserializedworld_takeImpulseJoints,Ex=_.rawdeserializedworld_takeMultibodyJoints,Tx=_.rawserializationpipeline_serializeAll,Ax=_.rawserializationpipeline_deserializeAll,Rx=_.rawcolliderset_isHandleValid,Cx=_.rawrayintersection_featureId,Px=_.rawraycolliderintersection_featureId,Ix=_.rawintegrationparameters_set_numInternalPgsIterations,Dx=_.rawvector_set_x,Lx=_.reserve_memory,Fx=_.rawkinematiccharactercontroller_up,Ux=_.rawshapecontact_normal2,Nx=_.rawshapecontact_point1,Ox=_.rawshapecontact_point2,Bx=_.rawrayintersection_normal,zx=_.rawraycolliderintersection_normal,Hx=_.rawshapecontact_normal1,Gx=_.rawcollidershapecasthit_normal1,Vx=_.rawcollidershapecasthit_normal2,kx=_.rawshapecasthit_witness2,Wx=_.rawintegrationparameters_numInternalPgsIterations,jx=_.rawshapecontact_distance,Xx=_.rawrayintersection_featureType,qx=_.rawraycolliderintersection_colliderHandle,Yx=_.rawrayintersection_time_of_impact,Kx=_.rawraycolliderintersection_featureType,$x=_.rawraycolliderhit_colliderHandle,Jx=_.rawraycolliderintersection_time_of_impact,Zx=_.rawshapecasthit_time_of_impact,Qx=_.rawcollidershapecasthit_colliderHandle,ty=_.rawraycolliderhit_timeOfImpact,ey=_.rawrotation_x,ny=_.rawrotation_y,iy=_.rawrotation_z,ry=_.rawvector_x,sy=_.rawvector_y,ay=_.rawvector_z,oy=_.rawcontactforceevent_collider1,cy=_.rawintegrationparameters_lengthUnit,ly=_.__wbg_rawcontactpair_free,hy=_.__wbg_rawraycolliderintersection_free,dy=_.__wbg_rawrotation_free,uy=_.__wbg_rawvector_free,_y=_.__wbg_rawsdpmatrix3_free,fy=_.__wbg_rawserializationpipeline_free,py=_.rawccdsolver_new,my=_.rawserializationpipeline_new,gy=_.__wbindgen_export_0,wy=_.__wbindgen_add_to_stack_pointer,by=_.__wbindgen_export_1,vy=_.__wbindgen_export_2,xy=Object.freeze(Object.defineProperty({__proto__:null,__wbg_rawbroadphase_free:sw,__wbg_rawccdsolver_free:gp,__wbg_rawcharactercollision_free:Z_,__wbg_rawcolliderset_free:B0,__wbg_rawcollidershapecasthit_free:fv,__wbg_rawcontactforceevent_free:Bv,__wbg_rawcontactmanifold_free:Z0,__wbg_rawcontactpair_free:ly,__wbg_rawdebugrenderpipeline_free:Dv,__wbg_rawdeserializedworld_free:mx,__wbg_rawdynamicraycastvehiclecontroller_free:vf,__wbg_raweventqueue_free:Ov,__wbg_rawgenericjoint_free:dm,__wbg_rawimpulsejointset_free:Op,__wbg_rawintegrationparameters_free:jp,__wbg_rawislandmanager_free:cm,__wbg_rawkinematiccharactercontroller_free:M_,__wbg_rawmultibodyjointset_free:Cm,__wbg_rawnarrowphase_free:X0,__wbg_rawphysicspipeline_free:Yv,__wbg_rawpidcontroller_free:lf,__wbg_rawpointcolliderprojection_free:Tb,__wbg_rawpointprojection_free:Sb,__wbg_rawraycolliderhit_free:Lb,__wbg_rawraycolliderintersection_free:hy,__wbg_rawrayintersection_free:Db,__wbg_rawrigidbodyset_free:Jg,__wbg_rawrotation_free:dy,__wbg_rawsdpmatrix3_free:_y,__wbg_rawserializationpipeline_free:fy,__wbg_rawshape_free:Fb,__wbg_rawshapecasthit_free:hv,__wbg_rawshapecontact_free:j0,__wbg_rawvector_free:uy,__wbindgen_add_to_stack_pointer:wy,__wbindgen_export_0:gy,__wbindgen_export_1:by,__wbindgen_export_2:vy,memory:y_,rawbroadphase_castRay:ow,rawbroadphase_castRayAndGetNormal:cw,rawbroadphase_castShape:fw,rawbroadphase_collidersWithAabbIntersectingAabb:mw,rawbroadphase_intersectionWithShape:hw,rawbroadphase_intersectionsWithPoint:_w,rawbroadphase_intersectionsWithRay:lw,rawbroadphase_intersectionsWithShape:pw,rawbroadphase_new:aw,rawbroadphase_projectPoint:dw,rawbroadphase_projectPointAndGetFeature:uw,rawccdsolver_new:py,rawcharactercollision_handle:tf,rawcharactercollision_new:Q_,rawcharactercollision_toi:rf,rawcharactercollision_translationDeltaApplied:ef,rawcharactercollision_translationDeltaRemaining:nf,rawcharactercollision_worldNormal1:of,rawcharactercollision_worldNormal2:cf,rawcharactercollision_worldWitness1:sf,rawcharactercollision_worldWitness2:af,rawcolliderset_coActiveCollisionTypes:c0,rawcolliderset_coActiveEvents:l0,rawcolliderset_coActiveHooks:o0,rawcolliderset_coCastCollider:_0,rawcolliderset_coCastRay:b0,rawcolliderset_coCastRayAndGetNormal:v0,rawcolliderset_coCastShape:u0,rawcolliderset_coCollisionGroups:s0,rawcolliderset_coCombineVoxelStates:Hw,rawcolliderset_coContactCollider:m0,rawcolliderset_coContactForceEventThreshold:h0,rawcolliderset_coContactShape:p0,rawcolliderset_coContactSkin:Qw,rawcolliderset_coContainsPoint:d0,rawcolliderset_coDensity:n0,rawcolliderset_coFriction:t0,rawcolliderset_coFrictionCombineRule:M0,rawcolliderset_coHalfExtents:Rw,rawcolliderset_coHalfHeight:Dw,rawcolliderset_coHalfspaceNormal:Aw,rawcolliderset_coHeightFieldFlags:Ww,rawcolliderset_coHeightfieldHeights:jw,rawcolliderset_coHeightfieldNCols:Yw,rawcolliderset_coHeightfieldNRows:qw,rawcolliderset_coHeightfieldScale:Xw,rawcolliderset_coIndices:Vw,rawcolliderset_coIntersectsRay:w0,rawcolliderset_coIntersectsShape:f0,rawcolliderset_coIsEnabled:Jw,rawcolliderset_coIsSensor:Ew,rawcolliderset_coMass:i0,rawcolliderset_coParent:Kw,rawcolliderset_coProjectPoint:g0,rawcolliderset_coPropagateVoxelChange:zw,rawcolliderset_coRadius:Pw,rawcolliderset_coRestitution:e0,rawcolliderset_coRestitutionCombineRule:T0,rawcolliderset_coRotation:ww,rawcolliderset_coRotationWrtParent:vw,rawcolliderset_coRoundRadius:Fw,rawcolliderset_coSetActiveCollisionTypes:D0,rawcolliderset_coSetActiveEvents:I0,rawcolliderset_coSetActiveHooks:P0,rawcolliderset_coSetCollisionGroups:R0,rawcolliderset_coSetContactForceEventThreshold:F0,rawcolliderset_coSetContactSkin:Zw,rawcolliderset_coSetDensity:U0,rawcolliderset_coSetEnabled:$w,rawcolliderset_coSetFriction:S0,rawcolliderset_coSetFrictionCombineRule:E0,rawcolliderset_coSetHalfExtents:Cw,rawcolliderset_coSetHalfHeight:Lw,rawcolliderset_coSetMass:N0,rawcolliderset_coSetMassProperties:O0,rawcolliderset_coSetRadius:Iw,rawcolliderset_coSetRestitution:y0,rawcolliderset_coSetRestitutionCombineRule:A0,rawcolliderset_coSetRotation:Sw,rawcolliderset_coSetRotationWrtParent:Mw,rawcolliderset_coSetRoundRadius:Uw,rawcolliderset_coSetSensor:x0,rawcolliderset_coSetShape:L0,rawcolliderset_coSetSolverGroups:C0,rawcolliderset_coSetTranslation:xw,rawcolliderset_coSetTranslationWrtParent:yw,rawcolliderset_coSetVoxel:Bw,rawcolliderset_coShapeType:Tw,rawcolliderset_coSolverGroups:a0,rawcolliderset_coTranslation:gw,rawcolliderset_coTranslationWrtParent:bw,rawcolliderset_coTriMeshFlags:kw,rawcolliderset_coVertices:Gw,rawcolliderset_coVolume:r0,rawcolliderset_coVoxelData:Nw,rawcolliderset_coVoxelSize:Ow,rawcolliderset_contains:G0,rawcolliderset_createCollider:V0,rawcolliderset_forEachColliderHandle:W0,rawcolliderset_isHandleValid:Rx,rawcolliderset_len:H0,rawcolliderset_new:z0,rawcolliderset_remove:k0,rawcollidershapecasthit_colliderHandle:Qx,rawcollidershapecasthit_normal1:Gx,rawcollidershapecasthit_normal2:Vx,rawcollidershapecasthit_time_of_impact:pv,rawcollidershapecasthit_witness1:mv,rawcollidershapecasthit_witness2:gv,rawcontactforceevent_collider1:oy,rawcontactforceevent_collider2:zv,rawcontactforceevent_max_force_direction:Vv,rawcontactforceevent_max_force_magnitude:kv,rawcontactforceevent_total_force:Hv,rawcontactforceevent_total_force_magnitude:Gv,rawcontactmanifold_contact_dist:db,rawcontactmanifold_contact_fid1:ub,rawcontactmanifold_contact_fid2:_b,rawcontactmanifold_contact_impulse:fb,rawcontactmanifold_contact_local_p1:lb,rawcontactmanifold_contact_local_p2:hb,rawcontactmanifold_contact_tangent_impulse_x:pb,rawcontactmanifold_contact_tangent_impulse_y:mb,rawcontactmanifold_local_n1:rb,rawcontactmanifold_local_n2:sb,rawcontactmanifold_normal:ib,rawcontactmanifold_num_contacts:cb,rawcontactmanifold_num_solver_contacts:gb,rawcontactmanifold_solver_contact_dist:bb,rawcontactmanifold_solver_contact_friction:vb,rawcontactmanifold_solver_contact_point:wb,rawcontactmanifold_solver_contact_restitution:xb,rawcontactmanifold_solver_contact_tangent_velocity:yb,rawcontactmanifold_subshape1:ab,rawcontactmanifold_subshape2:ob,rawcontactpair_collider1:Q0,rawcontactpair_collider2:tb,rawcontactpair_contactManifold:nb,rawcontactpair_numContactManifolds:eb,rawdebugrenderpipeline_colors:Uv,rawdebugrenderpipeline_new:Lv,rawdebugrenderpipeline_render:Nv,rawdebugrenderpipeline_vertices:Fv,rawdeserializedworld_takeBodies:yx,rawdeserializedworld_takeBroadPhase:vx,rawdeserializedworld_takeColliders:Sx,rawdeserializedworld_takeGravity:gx,rawdeserializedworld_takeImpulseJoints:Mx,rawdeserializedworld_takeIntegrationParameters:wx,rawdeserializedworld_takeIslandManager:bx,rawdeserializedworld_takeMultibodyJoints:Ex,rawdeserializedworld_takeNarrowPhase:xx,rawdynamicraycastvehiclecontroller_add_wheel:Rf,rawdynamicraycastvehiclecontroller_chassis:Sf,rawdynamicraycastvehiclecontroller_current_vehicle_speed:yf,rawdynamicraycastvehiclecontroller_index_forward_axis:Tf,rawdynamicraycastvehiclecontroller_index_up_axis:Mf,rawdynamicraycastvehiclecontroller_new:xf,rawdynamicraycastvehiclecontroller_num_wheels:Cf,rawdynamicraycastvehiclecontroller_set_index_forward_axis:Af,rawdynamicraycastvehiclecontroller_set_index_up_axis:Ef,rawdynamicraycastvehiclecontroller_set_wheel_axle_cs:np,rawdynamicraycastvehiclecontroller_set_wheel_brake:Yf,rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs:Df,rawdynamicraycastvehiclecontroller_set_wheel_direction_cs:tp,rawdynamicraycastvehiclecontroller_set_wheel_engine_force:Zf,rawdynamicraycastvehiclecontroller_set_wheel_friction_slip:rp,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force:Xf,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel:Nf,rawdynamicraycastvehiclecontroller_set_wheel_radius:Bf,rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness:ap,rawdynamicraycastvehiclecontroller_set_wheel_steering:$f,rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression:Vf,rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation:Wf,rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length:Ff,rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness:Hf,rawdynamicraycastvehiclecontroller_update_vehicle:Pf,rawdynamicraycastvehiclecontroller_wheel_axle_cs:ep,rawdynamicraycastvehiclecontroller_wheel_brake:qf,rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs:If,rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws:dp,rawdynamicraycastvehiclecontroller_wheel_contact_point_ws:up,rawdynamicraycastvehiclecontroller_wheel_direction_cs:Qf,rawdynamicraycastvehiclecontroller_wheel_engine_force:Jf,rawdynamicraycastvehiclecontroller_wheel_forward_impulse:cp,rawdynamicraycastvehiclecontroller_wheel_friction_slip:ip,rawdynamicraycastvehiclecontroller_wheel_ground_object:mp,rawdynamicraycastvehiclecontroller_wheel_hard_point_ws:fp,rawdynamicraycastvehiclecontroller_wheel_is_in_contact:pp,rawdynamicraycastvehiclecontroller_wheel_max_suspension_force:jf,rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel:Uf,rawdynamicraycastvehiclecontroller_wheel_radius:Of,rawdynamicraycastvehiclecontroller_wheel_rotation:op,rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness:sp,rawdynamicraycastvehiclecontroller_wheel_side_impulse:lp,rawdynamicraycastvehiclecontroller_wheel_steering:Kf,rawdynamicraycastvehiclecontroller_wheel_suspension_compression:Gf,rawdynamicraycastvehiclecontroller_wheel_suspension_force:hp,rawdynamicraycastvehiclecontroller_wheel_suspension_length:_p,rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation:kf,rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length:Lf,rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness:zf,raweventqueue_clear:qv,raweventqueue_drainCollisionEvents:jv,raweventqueue_drainContactForceEvents:Xv,raweventqueue_new:Wv,rawgenericjoint_fixed:gm,rawgenericjoint_generic:um,rawgenericjoint_prismatic:mm,rawgenericjoint_revolute:wm,rawgenericjoint_rope:fm,rawgenericjoint_spherical:pm,rawgenericjoint_spring:_m,rawimpulsejointset_contains:Vp,rawimpulsejointset_createJoint:zp,rawimpulsejointset_forEachJointAttachedToRigidBody:Wp,rawimpulsejointset_forEachJointHandle:kp,rawimpulsejointset_jointAnchor1:Sp,rawimpulsejointset_jointAnchor2:Mp,rawimpulsejointset_jointBodyHandle1:bp,rawimpulsejointset_jointBodyHandle2:vp,rawimpulsejointset_jointConfigureMotor:Np,rawimpulsejointset_jointConfigureMotorModel:Lp,rawimpulsejointset_jointConfigureMotorPosition:Up,rawimpulsejointset_jointConfigureMotorVelocity:Fp,rawimpulsejointset_jointContactsEnabled:Ap,rawimpulsejointset_jointFrameX1:xp,rawimpulsejointset_jointFrameX2:yp,rawimpulsejointset_jointLimitsEnabled:Cp,rawimpulsejointset_jointLimitsMax:Ip,rawimpulsejointset_jointLimitsMin:Pp,rawimpulsejointset_jointSetAnchor1:Ep,rawimpulsejointset_jointSetAnchor2:Tp,rawimpulsejointset_jointSetContactsEnabled:Rp,rawimpulsejointset_jointSetLimits:Dp,rawimpulsejointset_jointType:wp,rawimpulsejointset_len:Gp,rawimpulsejointset_new:Bp,rawimpulsejointset_remove:Hp,rawintegrationparameters_contact_erp:Yp,rawintegrationparameters_dt:qp,rawintegrationparameters_lengthUnit:cy,rawintegrationparameters_maxCcdSubsteps:Qp,rawintegrationparameters_minIslandSize:Zp,rawintegrationparameters_new:Xp,rawintegrationparameters_normalizedAllowedLinearError:Kp,rawintegrationparameters_normalizedPredictionDistance:$p,rawintegrationparameters_numInternalPgsIterations:Wx,rawintegrationparameters_numSolverIterations:Jp,rawintegrationparameters_set_contact_natural_frequency:em,rawintegrationparameters_set_dt:tm,rawintegrationparameters_set_lengthUnit:om,rawintegrationparameters_set_maxCcdSubsteps:am,rawintegrationparameters_set_minIslandSize:sm,rawintegrationparameters_set_normalizedAllowedLinearError:nm,rawintegrationparameters_set_normalizedPredictionDistance:im,rawintegrationparameters_set_numInternalPgsIterations:Ix,rawintegrationparameters_set_numSolverIterations:rm,rawislandmanager_forEachActiveRigidBodyHandle:hm,rawislandmanager_new:lm,rawkinematiccharactercontroller_autostepEnabled:N_,rawkinematiccharactercontroller_autostepIncludesDynamicBodies:U_,rawkinematiccharactercontroller_autostepMaxHeight:L_,rawkinematiccharactercontroller_autostepMinWidth:F_,rawkinematiccharactercontroller_computeColliderMovement:q_,rawkinematiccharactercontroller_computedCollision:J_,rawkinematiccharactercontroller_computedGrounded:K_,rawkinematiccharactercontroller_computedMovement:Y_,rawkinematiccharactercontroller_disableAutostep:B_,rawkinematiccharactercontroller_disableSnapToGround:j_,rawkinematiccharactercontroller_enableAutostep:O_,rawkinematiccharactercontroller_enableSnapToGround:W_,rawkinematiccharactercontroller_maxSlopeClimbAngle:z_,rawkinematiccharactercontroller_minSlopeSlideAngle:G_,rawkinematiccharactercontroller_new:E_,rawkinematiccharactercontroller_normalNudgeFactor:A_,rawkinematiccharactercontroller_numComputedCollisions:$_,rawkinematiccharactercontroller_offset:C_,rawkinematiccharactercontroller_setMaxSlopeClimbAngle:H_,rawkinematiccharactercontroller_setMinSlopeSlideAngle:V_,rawkinematiccharactercontroller_setNormalNudgeFactor:R_,rawkinematiccharactercontroller_setOffset:P_,rawkinematiccharactercontroller_setSlideEnabled:D_,rawkinematiccharactercontroller_setUp:T_,rawkinematiccharactercontroller_slideEnabled:I_,rawkinematiccharactercontroller_snapToGroundDistance:k_,rawkinematiccharactercontroller_snapToGroundEnabled:X_,rawkinematiccharactercontroller_up:Fx,rawmultibodyjointset_contains:Lm,rawmultibodyjointset_createJoint:Im,rawmultibodyjointset_forEachJointAttachedToRigidBody:Um,rawmultibodyjointset_forEachJointHandle:Fm,rawmultibodyjointset_jointAnchor1:ym,rawmultibodyjointset_jointAnchor2:Sm,rawmultibodyjointset_jointContactsEnabled:Mm,rawmultibodyjointset_jointFrameX1:vm,rawmultibodyjointset_jointFrameX2:xm,rawmultibodyjointset_jointLimitsEnabled:Tm,rawmultibodyjointset_jointLimitsMax:Rm,rawmultibodyjointset_jointLimitsMin:Am,rawmultibodyjointset_jointSetContactsEnabled:Em,rawmultibodyjointset_jointType:bm,rawmultibodyjointset_new:Pm,rawmultibodyjointset_remove:Dm,rawnarrowphase_contact_pair:K0,rawnarrowphase_contact_pairs_with:Y0,rawnarrowphase_intersection_pair:J0,rawnarrowphase_intersection_pairs_with:$0,rawnarrowphase_new:q0,rawphysicspipeline_is_profiler_enabled:Jv,rawphysicspipeline_new:Kv,rawphysicspipeline_set_profiler_enabled:$v,rawphysicspipeline_step:fx,rawphysicspipeline_stepWithEvents:px,rawphysicspipeline_timing_broad_phase:tx,rawphysicspipeline_timing_ccd:ox,rawphysicspipeline_timing_ccd_broad_phase:lx,rawphysicspipeline_timing_ccd_narrow_phase:hx,rawphysicspipeline_timing_ccd_solver:dx,rawphysicspipeline_timing_ccd_toi_computation:cx,rawphysicspipeline_timing_collision_detection:Qv,rawphysicspipeline_timing_island_construction:ux,rawphysicspipeline_timing_narrow_phase:ex,rawphysicspipeline_timing_solver:nx,rawphysicspipeline_timing_step:Zv,rawphysicspipeline_timing_user_changes:_x,rawphysicspipeline_timing_velocity_assembly:ix,rawphysicspipeline_timing_velocity_resolution:rx,rawphysicspipeline_timing_velocity_update:sx,rawphysicspipeline_timing_velocity_writeback:ax,rawpidcontroller_angular_correction:bf,rawpidcontroller_apply_angular_correction:gf,rawpidcontroller_apply_linear_correction:mf,rawpidcontroller_linear_correction:wf,rawpidcontroller_new:hf,rawpidcontroller_reset_integrals:pf,rawpidcontroller_set_axes_mask:ff,rawpidcontroller_set_kd:_f,rawpidcontroller_set_ki:uf,rawpidcontroller_set_kp:df,rawpointcolliderprojection_colliderHandle:Ab,rawpointcolliderprojection_featureId:Ib,rawpointcolliderprojection_featureType:Pb,rawpointcolliderprojection_isInside:Cb,rawpointcolliderprojection_point:Rb,rawpointprojection_isInside:Eb,rawpointprojection_point:Mb,rawraycolliderhit_colliderHandle:$x,rawraycolliderhit_timeOfImpact:ty,rawraycolliderintersection_colliderHandle:qx,rawraycolliderintersection_featureId:Px,rawraycolliderintersection_featureType:Kx,rawraycolliderintersection_normal:zx,rawraycolliderintersection_time_of_impact:Jx,rawrayintersection_featureId:Cx,rawrayintersection_featureType:Xx,rawrayintersection_normal:Bx,rawrayintersection_time_of_impact:Yx,rawrigidbodyset_contains:nw,rawrigidbodyset_createRigidBody:Qg,rawrigidbodyset_forEachRigidBodyHandle:iw,rawrigidbodyset_len:ew,rawrigidbodyset_new:Zg,rawrigidbodyset_propagateModifiedBodyPositionsToColliders:rw,rawrigidbodyset_rbAddForce:zg,rawrigidbodyset_rbAddForceAtPoint:kg,rawrigidbodyset_rbAddTorque:Gg,rawrigidbodyset_rbAdditionalSolverIterations:jg,rawrigidbodyset_rbAngularDamping:Pg,rawrigidbodyset_rbAngvel:Qm,rawrigidbodyset_rbApplyImpulse:Hg,rawrigidbodyset_rbApplyImpulseAtPoint:Wg,rawrigidbodyset_rbApplyTorqueImpulse:Vg,rawrigidbodyset_rbBodyType:Mg,rawrigidbodyset_rbCollider:Sg,rawrigidbodyset_rbDominanceGroup:sg,rawrigidbodyset_rbEffectiveAngularInertia:wg,rawrigidbodyset_rbEffectiveInvMass:dg,rawrigidbodyset_rbEffectiveWorldInvInertia:gg,rawrigidbodyset_rbEnableCcd:og,rawrigidbodyset_rbGravityScale:Ug,rawrigidbodyset_rbInvMass:hg,rawrigidbodyset_rbInvPrincipalInertia:fg,rawrigidbodyset_rbIsCcdEnabled:vg,rawrigidbodyset_rbIsDynamic:Rg,rawrigidbodyset_rbIsEnabled:Fg,rawrigidbodyset_rbIsFixed:Tg,rawrigidbodyset_rbIsKinematic:Ag,rawrigidbodyset_rbIsMoving:Hm,rawrigidbodyset_rbIsSleeping:zm,rawrigidbodyset_rbLinearDamping:Cg,rawrigidbodyset_rbLinvel:Zm,rawrigidbodyset_rbLocalCom:ug,rawrigidbodyset_rbLockRotations:ig,rawrigidbodyset_rbLockTranslations:eg,rawrigidbodyset_rbMass:lg,rawrigidbodyset_rbNextRotation:Vm,rawrigidbodyset_rbNextTranslation:Gm,rawrigidbodyset_rbNumColliders:yg,rawrigidbodyset_rbPrincipalInertia:mg,rawrigidbodyset_rbPrincipalInertiaLocalFrame:pg,rawrigidbodyset_rbRecomputeMassPropertiesFromColliders:Km,rawrigidbodyset_rbResetForces:Og,rawrigidbodyset_rbResetTorques:Bg,rawrigidbodyset_rbRotation:Om,rawrigidbodyset_rbSetAdditionalMass:$m,rawrigidbodyset_rbSetAdditionalMassProperties:Jm,rawrigidbodyset_rbSetAdditionalSolverIterations:Xg,rawrigidbodyset_rbSetAngularDamping:Dg,rawrigidbodyset_rbSetAngvel:Xm,rawrigidbodyset_rbSetBodyType:Eg,rawrigidbodyset_rbSetDominanceGroup:ag,rawrigidbodyset_rbSetEnabled:Lg,rawrigidbodyset_rbSetEnabledRotations:rg,rawrigidbodyset_rbSetEnabledTranslations:ng,rawrigidbodyset_rbSetGravityScale:Ng,rawrigidbodyset_rbSetLinearDamping:Ig,rawrigidbodyset_rbSetLinvel:jm,rawrigidbodyset_rbSetNextKinematicRotation:Ym,rawrigidbodyset_rbSetNextKinematicTranslation:qm,rawrigidbodyset_rbSetRotation:Wm,rawrigidbodyset_rbSetSoftCcdPrediction:cg,rawrigidbodyset_rbSetTranslation:km,rawrigidbodyset_rbSetUserData:Yg,rawrigidbodyset_rbSleep:Bm,rawrigidbodyset_rbSoftCcdPrediction:xg,rawrigidbodyset_rbTranslation:Nm,rawrigidbodyset_rbUserData:qg,rawrigidbodyset_rbUserForce:Kg,rawrigidbodyset_rbUserTorque:$g,rawrigidbodyset_rbVelocityAtPoint:tg,rawrigidbodyset_rbWakeUp:bg,rawrigidbodyset_rbWorldCom:_g,rawrigidbodyset_remove:tw,rawrotation_identity:bv,rawrotation_new:wv,rawrotation_w:vv,rawrotation_x:ey,rawrotation_y:ny,rawrotation_z:iy,rawsdpmatrix3_elements:Iv,rawserializationpipeline_deserializeAll:Ax,rawserializationpipeline_new:my,rawserializationpipeline_serializeAll:Tx,rawshape_ball:Ob,rawshape_capsule:zb,rawshape_castRay:cv,rawshape_castRayAndGetNormal:lv,rawshape_castShape:nv,rawshape_cone:Vb,rawshape_contactShape:rv,rawshape_containsPoint:sv,rawshape_convexHull:Zb,rawshape_convexMesh:tv,rawshape_cuboid:Ub,rawshape_cylinder:Hb,rawshape_halfspace:Bb,rawshape_heightfield:Yb,rawshape_intersectsRay:ov,rawshape_intersectsShape:iv,rawshape_polyline:Xb,rawshape_projectPoint:av,rawshape_roundCone:kb,rawshape_roundConvexHull:Qb,rawshape_roundConvexMesh:ev,rawshape_roundCuboid:Nb,rawshape_roundCylinder:Gb,rawshape_roundTriangle:Jb,rawshape_segment:Kb,rawshape_triangle:$b,rawshape_trimesh:qb,rawshape_voxels:Wb,rawshape_voxelsFromPoints:jb,rawshapecasthit_normal1:uv,rawshapecasthit_normal2:_v,rawshapecasthit_time_of_impact:Zx,rawshapecasthit_witness1:dv,rawshapecasthit_witness2:kx,rawshapecontact_distance:jx,rawshapecontact_normal1:Hx,rawshapecontact_normal2:Ux,rawshapecontact_point1:Nx,rawshapecontact_point2:Ox,rawvector_new:yv,rawvector_set_x:Dx,rawvector_set_y:Sv,rawvector_set_z:Mv,rawvector_x:ry,rawvector_xyz:Ev,rawvector_xzy:Rv,rawvector_y:sy,rawvector_yxz:Tv,rawvector_yzx:Cv,rawvector_z:ay,rawvector_zero:xv,rawvector_zxy:Av,rawvector_zyx:Pv,reserve_memory:Lx,version:S_},Symbol.toStringTag,{value:"Module"}));Pu(xy);let td=class{constructor(t,e,n){this.x=t,this.y=e,this.z=n}};class O{static new(t,e,n){return new td(t,e,n)}static intoRaw(t){return new F(t.x,t.y,t.z)}static zeros(){return O.new(0,0,0)}static fromRaw(t){if(!t)return null;let e=O.new(t.x,t.y,t.z);return t.free(),e}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z}}let so=class{constructor(t,e,n,r){this.x=t,this.y=e,this.z=n,this.w=r}};class Gt{static identity(){return new so(0,0,0,1)}static fromRaw(t){if(!t)return null;let e=new so(t.x,t.y,t.z,t.w);return t.free(),e}static intoRaw(t){return new kt(t.x,t.y,t.z,t.w)}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w}}class ed{get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}constructor(t){this.elements=t}}class ao{static fromRaw(t){const e=new ed(t.elements());return t.free(),e}}var pn;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased"})(pn||(pn={}));class oo{constructor(t,e,n){this.rawSet=t,this.colliderSet=e,this.handle=n}finalizeDeserialization(t){this.colliderSet=t}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(t,e){return this.rawSet.rbLockTranslations(this.handle,t,e)}lockRotations(t,e){return this.rawSet.rbLockRotations(this.handle,t,e)}setEnabledTranslations(t,e,n,r){return this.rawSet.rbSetEnabledTranslations(this.handle,t,e,n,r)}restrictTranslations(t,e,n,r){this.setEnabledTranslations(t,e,n,r)}setEnabledRotations(t,e,n,r){return this.rawSet.rbSetEnabledRotations(this.handle,t,e,n,r)}restrictRotations(t,e,n,r){this.setEnabledRotations(t,e,n,r)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(t){this.rawSet.rbSetDominanceGroup(this.handle,t)}additionalSolverIterations(){return this.rawSet.rbAdditionalSolverIterations(this.handle)}setAdditionalSolverIterations(t){this.rawSet.rbSetAdditionalSolverIterations(this.handle,t)}enableCcd(t){this.rawSet.rbEnableCcd(this.handle,t)}setSoftCcdPrediction(t){this.rawSet.rbSetSoftCcdPrediction(this.handle,t)}softCcdPrediction(){return this.rawSet.rbSoftCcdPrediction(this.handle)}translation(){let t=this.rawSet.rbTranslation(this.handle);return O.fromRaw(t)}rotation(){let t=this.rawSet.rbRotation(this.handle);return Gt.fromRaw(t)}nextTranslation(){let t=this.rawSet.rbNextTranslation(this.handle);return O.fromRaw(t)}nextRotation(){let t=this.rawSet.rbNextRotation(this.handle);return Gt.fromRaw(t)}setTranslation(t,e){this.rawSet.rbSetTranslation(this.handle,t.x,t.y,t.z,e)}setLinvel(t,e){let n=O.intoRaw(t);this.rawSet.rbSetLinvel(this.handle,n,e),n.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(t,e){this.rawSet.rbSetGravityScale(this.handle,t,e)}setRotation(t,e){this.rawSet.rbSetRotation(this.handle,t.x,t.y,t.z,t.w,e)}setAngvel(t,e){let n=O.intoRaw(t);this.rawSet.rbSetAngvel(this.handle,n,e),n.free()}setNextKinematicTranslation(t){this.rawSet.rbSetNextKinematicTranslation(this.handle,t.x,t.y,t.z)}setNextKinematicRotation(t){this.rawSet.rbSetNextKinematicRotation(this.handle,t.x,t.y,t.z,t.w)}linvel(){return O.fromRaw(this.rawSet.rbLinvel(this.handle))}velocityAtPoint(t){const e=O.intoRaw(t);let n=O.fromRaw(this.rawSet.rbVelocityAtPoint(this.handle,e));return e.free(),n}angvel(){return O.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return O.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return O.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return O.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertia(){return O.fromRaw(this.rawSet.rbInvPrincipalInertia(this.handle))}principalInertia(){return O.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return Gt.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertia(){return ao.fromRaw(this.rawSet.rbEffectiveWorldInvInertia(this.handle))}effectiveAngularInertia(){return ao.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(t){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,t))}setEnabled(t){this.rawSet.rbSetEnabled(this.handle,t)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(t,e){return this.rawSet.rbSetBodyType(this.handle,t,e)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(t){this.rawSet.rbSetLinearDamping(this.handle,t)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(t,e){this.rawSet.rbSetAdditionalMass(this.handle,t,e)}setAdditionalMassProperties(t,e,n,r,s){let a=O.intoRaw(e),o=O.intoRaw(n),l=Gt.intoRaw(r);this.rawSet.rbSetAdditionalMassProperties(this.handle,t,a,o,l,s),a.free(),o.free(),l.free()}setAngularDamping(t){this.rawSet.rbSetAngularDamping(this.handle,t)}resetForces(t){this.rawSet.rbResetForces(this.handle,t)}resetTorques(t){this.rawSet.rbResetTorques(this.handle,t)}addForce(t,e){const n=O.intoRaw(t);this.rawSet.rbAddForce(this.handle,n,e),n.free()}applyImpulse(t,e){const n=O.intoRaw(t);this.rawSet.rbApplyImpulse(this.handle,n,e),n.free()}addTorque(t,e){const n=O.intoRaw(t);this.rawSet.rbAddTorque(this.handle,n,e),n.free()}applyTorqueImpulse(t,e){const n=O.intoRaw(t);this.rawSet.rbApplyTorqueImpulse(this.handle,n,e),n.free()}addForceAtPoint(t,e,n){const r=O.intoRaw(t),s=O.intoRaw(e);this.rawSet.rbAddForceAtPoint(this.handle,r,s,n),r.free(),s.free()}applyImpulseAtPoint(t,e,n){const r=O.intoRaw(t),s=O.intoRaw(e);this.rawSet.rbApplyImpulseAtPoint(this.handle,r,s,n),r.free(),s.free()}userForce(){return O.fromRaw(this.rawSet.rbUserForce(this.handle))}userTorque(){return O.fromRaw(this.rawSet.rbUserTorque(this.handle))}}class En{constructor(t){this.enabled=!0,this.status=t,this.translation=O.zeros(),this.rotation=Gt.identity(),this.gravityScale=1,this.linvel=O.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=O.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=O.zeros(),this.principalAngularInertia=O.zeros(),this.angularInertiaLocalFrame=Gt.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.softCcdPrediction=0,this.dominanceGroup=0,this.additionalSolverIterations=0}static dynamic(){return new En(pn.Dynamic)}static kinematicPositionBased(){return new En(pn.KinematicPositionBased)}static kinematicVelocityBased(){return new En(pn.KinematicVelocityBased)}static fixed(){return new En(pn.Fixed)}static newDynamic(){return new En(pn.Dynamic)}static newKinematicPositionBased(){return new En(pn.KinematicPositionBased)}static newKinematicVelocityBased(){return new En(pn.KinematicVelocityBased)}static newStatic(){return new En(pn.Fixed)}setDominanceGroup(t){return this.dominanceGroup=t,this}setAdditionalSolverIterations(t){return this.additionalSolverIterations=t,this}setEnabled(t){return this.enabled=t,this}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return Gt.copy(this.rotation,t),this}setGravityScale(t){return this.gravityScale=t,this}setAdditionalMass(t){return this.mass=t,this.massOnly=!0,this}setLinvel(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:t,y:e,z:n},this}setAngvel(t){return O.copy(this.angvel,t),this}setAdditionalMassProperties(t,e,n,r){return this.mass=t,O.copy(this.centerOfMass,e),O.copy(this.principalAngularInertia,n),Gt.copy(this.angularInertiaLocalFrame,r),this.massOnly=!1,this}enabledTranslations(t,e,n){return this.translationsEnabledX=t,this.translationsEnabledY=e,this.translationsEnabledZ=n,this}restrictTranslations(t,e,n){return this.enabledTranslations(t,e,n)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(t,e,n){return this.rotationsEnabledX=t,this.rotationsEnabledY=e,this.rotationsEnabledZ=n,this}restrictRotations(t,e,n){return this.enabledRotations(t,e,n)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(t){return this.linearDamping=t,this}setAngularDamping(t){return this.angularDamping=t,this}setCanSleep(t){return this.canSleep=t,this}setSleeping(t){return this.sleeping=t,this}setCcdEnabled(t){return this.ccdEnabled=t,this}setSoftCcdPrediction(t){return this.softCcdPrediction=t,this}setUserData(t){return this.userData=t,this}}class ia{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(t,e){let n=this.index(t);for(;this.data.length<=n;)this.data.push(null);this.data[n]==null&&(this.size+=1),this.data[n]=e}len(){return this.size}delete(t){let e=this.index(t);e<this.data.length&&(this.data[e]!=null&&(this.size-=1),this.data[e]=null)}clear(){this.data=new Array}get(t){let e=this.index(t);return e<this.data.length?this.data[e]:null}forEach(t){for(const e of this.data)e!=null&&t(e)}getAll(){return this.data.filter(t=>t!=null)}index(t){return this.fconv[0]=t,this.uconv[0]}}class nd{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new me,this.map=new ia,t&&t.forEachRigidBodyHandle(e=>{this.map.set(e,new oo(t,null,e))})}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createRigidBody(t,e){let n=O.intoRaw(e.translation),r=Gt.intoRaw(e.rotation),s=O.intoRaw(e.linvel),a=O.intoRaw(e.centerOfMass),o=O.intoRaw(e.angvel),l=O.intoRaw(e.principalAngularInertia),c=Gt.intoRaw(e.angularInertiaLocalFrame),d=this.raw.createRigidBody(e.enabled,n,r,e.gravityScale,e.mass,e.massOnly,a,s,o,l,c,e.translationsEnabledX,e.translationsEnabledY,e.translationsEnabledZ,e.rotationsEnabledX,e.rotationsEnabledY,e.rotationsEnabledZ,e.linearDamping,e.angularDamping,e.status,e.canSleep,e.sleeping,e.softCcdPrediction,e.ccdEnabled,e.dominanceGroup,e.additionalSolverIterations);n.free(),r.free(),s.free(),a.free(),o.free(),l.free(),c.free();const f=new oo(this.raw,t,d);return f.userData=e.userData,this.map.set(d,f),f}remove(t,e,n,r,s){for(let a=0;a<this.raw.rbNumColliders(t);a+=1)n.unmap(this.raw.rbCollider(t,a));r.forEachJointHandleAttachedToRigidBody(t,a=>r.unmap(a)),s.forEachJointHandleAttachedToRigidBody(t,a=>s.unmap(a)),this.raw.remove(t,e.raw,n.raw,r.raw,s.raw),this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachActiveRigidBody(t,e){t.forEachActiveRigidBodyHandle(n=>{e(this.get(n))})}getAll(){return this.map.getAll()}}class id{constructor(t){this.raw=t||new Pi}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get contact_erp(){return this.raw.contact_erp}get lengthUnit(){return this.raw.lengthUnit}get normalizedAllowedLinearError(){return this.raw.normalizedAllowedLinearError}get normalizedPredictionDistance(){return this.raw.normalizedPredictionDistance}get numSolverIterations(){return this.raw.numSolverIterations}get numInternalPgsIterations(){return this.raw.numInternalPgsIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(t){this.raw.dt=t}set contact_natural_frequency(t){this.raw.contact_natural_frequency=t}set lengthUnit(t){this.raw.lengthUnit=t}set normalizedAllowedLinearError(t){this.raw.normalizedAllowedLinearError=t}set normalizedPredictionDistance(t){this.raw.normalizedPredictionDistance=t}set numSolverIterations(t){this.raw.numSolverIterations=t}set numInternalPgsIterations(t){this.raw.numInternalPgsIterations=t}set minIslandSize(t){this.raw.minIslandSize=t}set maxCcdSubsteps(t){this.raw.maxCcdSubsteps=t}}var co;(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Rope=3]="Rope",i[i.Spring=4]="Spring",i[i.Spherical=5]="Spherical",i[i.Generic=6]="Generic"})(co||(co={}));var lo;(function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"})(lo||(lo={}));var ho;(function(i){i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ"})(ho||(ho={}));class xn{constructor(t,e,n){this.rawSet=t,this.bodySet=e,this.handle=n}static newTyped(t,e,n){switch(t.jointType(n)){case gn.Revolute:return new cd(t,e,n);case gn.Prismatic:return new od(t,e,n);case gn.Fixed:return new rd(t,e,n);case gn.Spring:return new ad(t,e,n);case gn.Rope:return new sd(t,e,n);case gn.Spherical:return new hd(t,e,n);case gn.Generic:return new ld(t,e,n);default:return new xn(t,e,n)}}finalizeDeserialization(t){this.bodySet=t}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return Gt.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return Gt.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return O.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return O.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(t){const e=O.intoRaw(t);this.rawSet.jointSetAnchor1(this.handle,e),e.free()}setAnchor2(t){const e=O.intoRaw(t);this.rawSet.jointSetAnchor2(this.handle,e),e.free()}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class gc extends xn{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(t,e){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),t,e)}configureMotorModel(t){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),t)}configureMotorVelocity(t,e){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),t,e)}configureMotorPosition(t,e,n){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),t,e,n)}configureMotor(t,e,n,r){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),t,e,n,r)}}class rd extends xn{}class sd extends xn{}class ad extends xn{}class od extends gc{rawAxis(){return Js.LinX}}class cd extends gc{rawAxis(){return Js.AngX}}class ld extends xn{}class hd extends xn{}class dd{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new Xn,this.map=new ia,t&&t.forEachJointHandle(e=>{this.map.set(e,xn.newTyped(t,null,e))})}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createJoint(t,e,n,r,s){const a=e.intoRaw(),o=this.raw.createJoint(a,n,r,s);a.free();let l=xn.newTyped(this.raw,t,o);return this.map.set(o,l),l}remove(t,e){this.raw.remove(t,e),this.unmap(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}class di{constructor(t,e){this.rawSet=t,this.handle=e}static newTyped(t,e){switch(t.jointType(e)){case gn.Revolute:return new fd(t,e);case gn.Prismatic:return new _d(t,e);case gn.Fixed:return new ud(t,e);case gn.Spherical:return new pd(t,e);default:return new di(t,e)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class wc extends di{}class ud extends di{}class _d extends wc{rawAxis(){return Js.LinX}}class fd extends wc{rawAxis(){return Js.AngX}}class pd extends di{}class md{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new Yn,this.map=new ia,t&&t.forEachJointHandle(e=>{this.map.set(e,di.newTyped(this.raw,e))})}createJoint(t,e,n,r){const s=t.intoRaw(),a=this.raw.createJoint(s,e,n,r);s.free();let o=di.newTyped(this.raw,a);return this.map.set(a,o),o}remove(t,e){this.raw.remove(t,e),this.map.delete(t)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}getAll(){return this.map.getAll()}}var Ir;(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(Ir||(Ir={}));class gd{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new ro}}class wd{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new qn}forEachActiveRigidBodyHandle(t){this.raw.forEachActiveRigidBodyHandle(t)}}var nr;(function(i){i[i.Vertex=0]="Vertex",i[i.Edge=1]="Edge",i[i.Face=2]="Face",i[i.Unknown=3]="Unknown"})(nr||(nr={}));class Gr{constructor(t,e,n,r){this.featureType=nr.Unknown,this.featureId=void 0,this.timeOfImpact=t,this.normal=e,r!==void 0&&(this.featureId=r),n!==void 0&&(this.featureType=n)}static fromRaw(t){if(!t)return null;const e=new Gr(t.time_of_impact(),O.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),e}}class Dr{constructor(t,e,n,r,s){this.featureType=nr.Unknown,this.featureId=void 0,this.collider=t,this.timeOfImpact=e,this.normal=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(t,e){if(!e)return null;const n=new Dr(t.get(e.colliderHandle()),e.time_of_impact(),O.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),n}}class ra{constructor(t,e){this.collider=t,this.timeOfImpact=e}static fromRaw(t,e){if(!e)return null;const n=new ra(t.get(e.colliderHandle()),e.timeOfImpact());return e.free(),n}}class Vr{constructor(t,e){this.point=t,this.isInside=e}static fromRaw(t){if(!t)return null;const e=new Vr(O.fromRaw(t.point()),t.isInside());return t.free(),e}}class Lr{constructor(t,e,n,r,s){this.featureType=nr.Unknown,this.featureId=void 0,this.collider=t,this.point=e,this.isInside=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(t,e){if(!e)return null;const n=new Lr(t.get(e.colliderHandle()),O.fromRaw(e.point()),e.isInside(),e.featureType(),e.featureId());return e.free(),n}}class hr{constructor(t,e,n,r,s){this.time_of_impact=t,this.witness1=e,this.witness2=n,this.normal1=r,this.normal2=s}static fromRaw(t,e){if(!e)return null;const n=new hr(e.time_of_impact(),O.fromRaw(e.witness1()),O.fromRaw(e.witness2()),O.fromRaw(e.normal1()),O.fromRaw(e.normal2()));return e.free(),n}}class kr extends hr{constructor(t,e,n,r,s,a){super(e,n,r,s,a),this.collider=t}static fromRaw(t,e){if(!e)return null;const n=new kr(t.get(e.colliderHandle()),e.time_of_impact(),O.fromRaw(e.witness1()),O.fromRaw(e.witness2()),O.fromRaw(e.normal1()),O.fromRaw(e.normal2()));return e.free(),n}}class bd{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new jn}castRay(t,e,n,r,s,a,o,l,c,d,f){let u=O.intoRaw(r.origin),m=O.intoRaw(r.dir),w=ra.fromRaw(n,this.raw.castRay(t.raw,e.raw,n.raw,u,m,s,a,o,l,c,d,f));return u.free(),m.free(),w}castRayAndGetNormal(t,e,n,r,s,a,o,l,c,d,f){let u=O.intoRaw(r.origin),m=O.intoRaw(r.dir),w=Dr.fromRaw(n,this.raw.castRayAndGetNormal(t.raw,e.raw,n.raw,u,m,s,a,o,l,c,d,f));return u.free(),m.free(),w}intersectionsWithRay(t,e,n,r,s,a,o,l,c,d,f,u){let m=O.intoRaw(r.origin),w=O.intoRaw(r.dir),y=g=>o(Dr.fromRaw(n,g));this.raw.intersectionsWithRay(t.raw,e.raw,n.raw,m,w,s,a,y,l,c,d,f,u),m.free(),w.free()}intersectionWithShape(t,e,n,r,s,a,o,l,c,d,f){let u=O.intoRaw(r),m=Gt.intoRaw(s),w=a.intoRaw(),y=this.raw.intersectionWithShape(t.raw,e.raw,n.raw,u,m,w,o,l,c,d,f);return u.free(),m.free(),w.free(),y}projectPoint(t,e,n,r,s,a,o,l,c,d){let f=O.intoRaw(r),u=Lr.fromRaw(n,this.raw.projectPoint(t.raw,e.raw,n.raw,f,s,a,o,l,c,d));return f.free(),u}projectPointAndGetFeature(t,e,n,r,s,a,o,l,c){let d=O.intoRaw(r),f=Lr.fromRaw(n,this.raw.projectPointAndGetFeature(t.raw,e.raw,n.raw,d,s,a,o,l,c));return d.free(),f}intersectionsWithPoint(t,e,n,r,s,a,o,l,c,d){let f=O.intoRaw(r);this.raw.intersectionsWithPoint(t.raw,e.raw,n.raw,f,s,a,o,l,c,d),f.free()}castShape(t,e,n,r,s,a,o,l,c,d,f,u,m,w,y){let g=O.intoRaw(r),p=Gt.intoRaw(s),x=O.intoRaw(a),T=o.intoRaw(),E=kr.fromRaw(n,this.raw.castShape(t.raw,e.raw,n.raw,g,p,x,T,l,c,d,f,u,m,w,y));return g.free(),p.free(),x.free(),T.free(),E}intersectionsWithShape(t,e,n,r,s,a,o,l,c,d,f,u){let m=O.intoRaw(r),w=Gt.intoRaw(s),y=a.intoRaw();this.raw.intersectionsWithShape(t.raw,e.raw,n.raw,m,w,y,o,l,c,d,f,u),m.free(),w.free(),y.free()}collidersWithAabbIntersectingAabb(t,e,n,r,s,a){let o=O.intoRaw(r),l=O.intoRaw(s);this.raw.collidersWithAabbIntersectingAabb(t.raw,e.raw,n.raw,o,l,a),o.free(),l.free()}}class vd{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Ce,this.tempManifold=new xd(null)}contactPairsWith(t,e){this.raw.contact_pairs_with(t,e)}intersectionPairsWith(t,e){this.raw.intersection_pairs_with(t,e)}contactPair(t,e,n){const r=this.raw.contact_pair(t,e);if(r){const s=r.collider1()!=t;let a;for(a=0;a<r.numContactManifolds();++a)this.tempManifold.raw=r.contactManifold(a),this.tempManifold.raw&&n(this.tempManifold,s),this.tempManifold.free();r.free()}}intersectionPair(t,e){return this.raw.intersection_pair(t,e)}}class xd{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t}normal(){return O.fromRaw(this.raw.normal())}localNormal1(){return O.fromRaw(this.raw.local_n1())}localNormal2(){return O.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(t){return O.fromRaw(this.raw.contact_local_p1(t))}localContactPoint2(t){return O.fromRaw(this.raw.contact_local_p2(t))}contactDist(t){return this.raw.contact_dist(t)}contactFid1(t){return this.raw.contact_fid1(t)}contactFid2(t){return this.raw.contact_fid2(t)}contactImpulse(t){return this.raw.contact_impulse(t)}contactTangentImpulseX(t){return this.raw.contact_tangent_impulse_x(t)}contactTangentImpulseY(t){return this.raw.contact_tangent_impulse_y(t)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(t){return O.fromRaw(this.raw.solver_contact_point(t))}solverContactDist(t){return this.raw.solver_contact_dist(t)}solverContactFriction(t){return this.raw.solver_contact_friction(t)}solverContactRestitution(t){return this.raw.solver_contact_restitution(t)}solverContactTangentVelocity(t){return O.fromRaw(this.raw.solver_contact_tangent_velocity(t))}}class ir{constructor(t,e,n,r,s){this.distance=t,this.point1=e,this.point2=n,this.normal1=r,this.normal2=s}static fromRaw(t){if(!t)return null;const e=new ir(t.distance(),O.fromRaw(t.point1()),O.fromRaw(t.point2()),O.fromRaw(t.normal1()),O.fromRaw(t.normal2()));return t.free(),e}}class Pe{static fromRaw(t,e){const n=t.coShapeType(e);let r,s,a,o,l,c,d;switch(n){case Oe.Ball:return new bc(t.coRadius(e));case Oe.Cuboid:return r=t.coHalfExtents(e),new vc(r.x,r.y,r.z);case Oe.RoundCuboid:return r=t.coHalfExtents(e),s=t.coRoundRadius(e),new xc(r.x,r.y,r.z,s);case Oe.Capsule:return l=t.coHalfHeight(e),c=t.coRadius(e),new yc(l,c);case Oe.Segment:return a=t.coVertices(e),new Sc(O.new(a[0],a[1],a[2]),O.new(a[3],a[4],a[5]));case Oe.Polyline:return a=t.coVertices(e),o=t.coIndices(e),new Tc(a,o);case Oe.Triangle:return a=t.coVertices(e),new Mc(O.new(a[0],a[1],a[2]),O.new(a[3],a[4],a[5]),O.new(a[6],a[7],a[8]));case Oe.RoundTriangle:return a=t.coVertices(e),s=t.coRoundRadius(e),new Ec(O.new(a[0],a[1],a[2]),O.new(a[3],a[4],a[5]),O.new(a[6],a[7],a[8]),s);case Oe.HalfSpace:return d=O.fromRaw(t.coHalfspaceNormal(e)),new yd(d);case Oe.Voxels:const f=t.coVoxelData(e),u=t.coVoxelSize(e);return new Ac(f,u);case Oe.TriMesh:a=t.coVertices(e),o=t.coIndices(e);const m=t.coTriMeshFlags(e);return new Rc(a,o,m);case Oe.HeightField:const w=t.coHeightfieldScale(e),y=t.coHeightfieldHeights(e),g=t.coHeightfieldNRows(e),p=t.coHeightfieldNCols(e),x=t.coHeightFieldFlags(e);return new Cc(g,p,y,w,x);case Oe.ConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),new zs(a,o);case Oe.RoundConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),s=t.coRoundRadius(e),new Hs(a,o,s);case Oe.Cylinder:return l=t.coHalfHeight(e),c=t.coRadius(e),new Pc(l,c);case Oe.RoundCylinder:return l=t.coHalfHeight(e),c=t.coRadius(e),s=t.coRoundRadius(e),new Ic(l,c,s);case Oe.Cone:return l=t.coHalfHeight(e),c=t.coRadius(e),new Dc(l,c);case Oe.RoundCone:return l=t.coHalfHeight(e),c=t.coRadius(e),s=t.coRoundRadius(e),new Lc(l,c,s);default:throw new Error("unknown shape type: "+n)}}castShape(t,e,n,r,s,a,o,l,c,d){let f=O.intoRaw(t),u=Gt.intoRaw(e),m=O.intoRaw(n),w=O.intoRaw(s),y=Gt.intoRaw(a),g=O.intoRaw(o),p=this.intoRaw(),x=r.intoRaw(),T=hr.fromRaw(null,p.castShape(f,u,m,x,w,y,g,l,c,d));return f.free(),u.free(),m.free(),w.free(),y.free(),g.free(),p.free(),x.free(),T}intersectsShape(t,e,n,r,s){let a=O.intoRaw(t),o=Gt.intoRaw(e),l=O.intoRaw(r),c=Gt.intoRaw(s),d=this.intoRaw(),f=n.intoRaw(),u=d.intersectsShape(a,o,f,l,c);return a.free(),o.free(),l.free(),c.free(),d.free(),f.free(),u}contactShape(t,e,n,r,s,a){let o=O.intoRaw(t),l=Gt.intoRaw(e),c=O.intoRaw(r),d=Gt.intoRaw(s),f=this.intoRaw(),u=n.intoRaw(),m=ir.fromRaw(f.contactShape(o,l,u,c,d,a));return o.free(),l.free(),c.free(),d.free(),f.free(),u.free(),m}containsPoint(t,e,n){let r=O.intoRaw(t),s=Gt.intoRaw(e),a=O.intoRaw(n),o=this.intoRaw(),l=o.containsPoint(r,s,a);return r.free(),s.free(),a.free(),o.free(),l}projectPoint(t,e,n,r){let s=O.intoRaw(t),a=Gt.intoRaw(e),o=O.intoRaw(n),l=this.intoRaw(),c=Vr.fromRaw(l.projectPoint(s,a,o,r));return s.free(),a.free(),o.free(),l.free(),c}intersectsRay(t,e,n,r){let s=O.intoRaw(e),a=Gt.intoRaw(n),o=O.intoRaw(t.origin),l=O.intoRaw(t.dir),c=this.intoRaw(),d=c.intersectsRay(s,a,o,l,r);return s.free(),a.free(),o.free(),l.free(),c.free(),d}castRay(t,e,n,r,s){let a=O.intoRaw(e),o=Gt.intoRaw(n),l=O.intoRaw(t.origin),c=O.intoRaw(t.dir),d=this.intoRaw(),f=d.castRay(a,o,l,c,r,s);return a.free(),o.free(),l.free(),c.free(),d.free(),f}castRayAndGetNormal(t,e,n,r,s){let a=O.intoRaw(e),o=Gt.intoRaw(n),l=O.intoRaw(t.origin),c=O.intoRaw(t.dir),d=this.intoRaw(),f=Gr.fromRaw(d.castRayAndGetNormal(a,o,l,c,r,s));return a.free(),o.free(),l.free(),c.free(),d.free(),f}}var Te;(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.ConvexPolyhedron=9]="ConvexPolyhedron",i[i.Cylinder=10]="Cylinder",i[i.Cone=11]="Cone",i[i.RoundCuboid=12]="RoundCuboid",i[i.RoundTriangle=13]="RoundTriangle",i[i.RoundCylinder=14]="RoundCylinder",i[i.RoundCone=15]="RoundCone",i[i.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",i[i.HalfSpace=17]="HalfSpace",i[i.Voxels=18]="Voxels"})(Te||(Te={}));var uo;(function(i){i[i.FIX_INTERNAL_EDGES=1]="FIX_INTERNAL_EDGES"})(uo||(uo={}));var _o;(function(i){i[i.DELETE_BAD_TOPOLOGY_TRIANGLES=4]="DELETE_BAD_TOPOLOGY_TRIANGLES",i[i.ORIENTED=8]="ORIENTED",i[i.MERGE_DUPLICATE_VERTICES=16]="MERGE_DUPLICATE_VERTICES",i[i.DELETE_DEGENERATE_TRIANGLES=32]="DELETE_DEGENERATE_TRIANGLES",i[i.DELETE_DUPLICATE_TRIANGLES=64]="DELETE_DUPLICATE_TRIANGLES",i[i.FIX_INTERNAL_EDGES=144]="FIX_INTERNAL_EDGES"})(_o||(_o={}));class bc extends Pe{constructor(t){super(),this.type=Te.Ball,this.radius=t}intoRaw(){return Ct.ball(this.radius)}}class yd extends Pe{constructor(t){super(),this.type=Te.HalfSpace,this.normal=t}intoRaw(){let t=O.intoRaw(this.normal),e=Ct.halfspace(t);return t.free(),e}}class vc extends Pe{constructor(t,e,n){super(),this.type=Te.Cuboid,this.halfExtents=O.new(t,e,n)}intoRaw(){return Ct.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class xc extends Pe{constructor(t,e,n,r){super(),this.type=Te.RoundCuboid,this.halfExtents=O.new(t,e,n),this.borderRadius=r}intoRaw(){return Ct.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class yc extends Pe{constructor(t,e){super(),this.type=Te.Capsule,this.halfHeight=t,this.radius=e}intoRaw(){return Ct.capsule(this.halfHeight,this.radius)}}class Sc extends Pe{constructor(t,e){super(),this.type=Te.Segment,this.a=t,this.b=e}intoRaw(){let t=O.intoRaw(this.a),e=O.intoRaw(this.b),n=Ct.segment(t,e);return t.free(),e.free(),n}}let Mc=class extends Pe{constructor(t,e,n){super(),this.type=Te.Triangle,this.a=t,this.b=e,this.c=n}intoRaw(){let t=O.intoRaw(this.a),e=O.intoRaw(this.b),n=O.intoRaw(this.c),r=Ct.triangle(t,e,n);return t.free(),e.free(),n.free(),r}};class Ec extends Pe{constructor(t,e,n,r){super(),this.type=Te.RoundTriangle,this.a=t,this.b=e,this.c=n,this.borderRadius=r}intoRaw(){let t=O.intoRaw(this.a),e=O.intoRaw(this.b),n=O.intoRaw(this.c),r=Ct.roundTriangle(t,e,n,this.borderRadius);return t.free(),e.free(),n.free(),r}}class Tc extends Pe{constructor(t,e){super(),this.type=Te.Polyline,this.vertices=t,this.indices=e??new Uint32Array(0)}intoRaw(){return Ct.polyline(this.vertices,this.indices)}}class Ac extends Pe{constructor(t,e){super(),this.type=Te.Voxels,this.data=t,this.voxelSize=e}intoRaw(){let t=O.intoRaw(this.voxelSize),e;return this.data instanceof Int32Array?e=Ct.voxels(t,this.data):e=Ct.voxelsFromPoints(t,this.data),t.free(),e}}class Rc extends Pe{constructor(t,e,n){super(),this.type=Te.TriMesh,this.vertices=t,this.indices=e,this.flags=n}intoRaw(){return Ct.trimesh(this.vertices,this.indices,this.flags)}}class zs extends Pe{constructor(t,e){super(),this.type=Te.ConvexPolyhedron,this.vertices=t,this.indices=e}intoRaw(){return this.indices?Ct.convexMesh(this.vertices,this.indices):Ct.convexHull(this.vertices)}}class Hs extends Pe{constructor(t,e,n){super(),this.type=Te.RoundConvexPolyhedron,this.vertices=t,this.indices=e,this.borderRadius=n}intoRaw(){return this.indices?Ct.roundConvexMesh(this.vertices,this.indices,this.borderRadius):Ct.roundConvexHull(this.vertices,this.borderRadius)}}class Cc extends Pe{constructor(t,e,n,r,s){super(),this.type=Te.HeightField,this.nrows=t,this.ncols=e,this.heights=n,this.scale=r,this.flags=s}intoRaw(){let t=O.intoRaw(this.scale),e=Ct.heightfield(this.nrows,this.ncols,this.heights,t,this.flags);return t.free(),e}}class Pc extends Pe{constructor(t,e){super(),this.type=Te.Cylinder,this.halfHeight=t,this.radius=e}intoRaw(){return Ct.cylinder(this.halfHeight,this.radius)}}class Ic extends Pe{constructor(t,e,n){super(),this.type=Te.RoundCylinder,this.borderRadius=n,this.halfHeight=t,this.radius=e}intoRaw(){return Ct.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class Dc extends Pe{constructor(t,e){super(),this.type=Te.Cone,this.halfHeight=t,this.radius=e}intoRaw(){return Ct.cone(this.halfHeight,this.radius)}}class Lc extends Pe{constructor(t,e,n){super(),this.type=Te.RoundCone,this.halfHeight=t,this.radius=e,this.borderRadius=n}intoRaw(){return Ct.roundCone(this.halfHeight,this.radius,this.borderRadius)}}class Sd{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Gu}step(t,e,n,r,s,a,o,l,c,d,f,u){let m=O.intoRaw(t);f?this.raw.stepWithEvents(m,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,l.raw,c.raw,d.raw,f.raw,u,u?u.filterContactPair:null,u?u.filterIntersectionPair:null):this.raw.step(m,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,l.raw,c.raw,d.raw),m.free()}}class fo{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new ku}serializeAll(t,e,n,r,s,a,o,l,c){let d=O.intoRaw(t);const f=this.raw.serializeAll(d,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,l.raw,c.raw);return d.free(),f}deserializeAll(t){return sa.fromRaw(this.raw.deserializeAll(t))}}class Md{constructor(t,e){this.vertices=t,this.colors=e}}class Ed{free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}constructor(t){this.raw=t||new Ou}render(t,e,n,r,s,a,o){this.raw.render(t.raw,e.raw,n.raw,r.raw,s.raw,a,e.castClosure(o)),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class Td{}class Ad{constructor(t,e,n,r,s,a){this.params=e,this.bodies=s,this.colliders=a,this.broadPhase=n,this.narrowPhase=r,this.raw=new Hu(t),this.rawCharacterCollision=new Qh,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(t){let e=O.intoRaw(t);return this.raw.setUp(e)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(t){this._applyImpulsesToDynamicBodies=t}characterMass(){return this._characterMass}setCharacterMass(t){this._characterMass=t}offset(){return this.raw.offset()}setOffset(t){this.raw.setOffset(t)}normalNudgeFactor(){return this.raw.normalNudgeFactor()}setNormalNudgeFactor(t){this.raw.setNormalNudgeFactor(t)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(t){this.raw.setSlideEnabled(t)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(t,e,n){this.raw.enableAutostep(t,e,n)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(t){this.raw.setMaxSlopeClimbAngle(t)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(t){this.raw.setMinSlopeSlideAngle(t)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(t){this.raw.enableSnapToGround(t)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(t,e,n,r,s){let a=O.intoRaw(e);this.raw.computeColliderMovement(this.params.dt,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,t.handle,a,this._applyImpulsesToDynamicBodies,this._characterMass,n,r,this.colliders.castClosure(s)),a.free()}computedMovement(){return O.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(t,e){if(this.raw.computedCollision(t,this.rawCharacterCollision)){let n=this.rawCharacterCollision;return e=e??new Td,e.translationDeltaApplied=O.fromRaw(n.translationDeltaApplied()),e.translationDeltaRemaining=O.fromRaw(n.translationDeltaRemaining()),e.toi=n.toi(),e.witness1=O.fromRaw(n.worldWitness1()),e.witness2=O.fromRaw(n.worldWitness2()),e.normal1=O.fromRaw(n.worldNormal1()),e.normal2=O.fromRaw(n.worldNormal2()),e.collider=this.colliders.get(n.handle()),e}else return null}}var po;(function(i){i[i.None=0]="None",i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ",i[i.AllLin=7]="AllLin",i[i.AllAng=56]="AllAng",i[i.All=63]="All"})(po||(po={}));class Rd{constructor(t,e,n,r,s,a){this.params=t,this.bodies=e,this.raw=new Vu(n,r,s,a)}free(){this.raw&&this.raw.free(),this.raw=void 0}setKp(t,e){this.raw.set_kp(t,e)}setKi(t,e){this.raw.set_kp(t,e)}setKd(t,e){this.raw.set_kp(t,e)}setAxes(t){this.raw.set_axes_mask(t)}resetIntegrals(){this.raw.reset_integrals()}applyLinearCorrection(t,e,n){let r=O.intoRaw(e),s=O.intoRaw(n);this.raw.apply_linear_correction(this.params.dt,this.bodies.raw,t.handle,r,s),r.free(),s.free()}applyAngularCorrection(t,e,n){let r=Gt.intoRaw(e),s=O.intoRaw(n);this.raw.apply_angular_correction(this.params.dt,this.bodies.raw,t.handle,r,s),r.free(),s.free()}linearCorrection(t,e,n){let r=O.intoRaw(e),s=O.intoRaw(n),a=this.raw.linear_correction(this.params.dt,this.bodies.raw,t.handle,r,s);return r.free(),s.free(),O.fromRaw(a)}angularCorrection(t,e,n){let r=Gt.intoRaw(e),s=O.intoRaw(n),a=this.raw.angular_correction(this.params.dt,this.bodies.raw,t.handle,r,s);return r.free(),s.free(),O.fromRaw(a)}}class Cd{constructor(t,e,n,r,s){this.raw=new Bu(t.handle),this.broadPhase=e,this.narrowPhase=n,this.bodies=r,this.colliders=s,this._chassis=t}free(){this.raw&&this.raw.free(),this.raw=void 0}updateVehicle(t,e,n,r){this.raw.update_vehicle(t,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,e,n,this.colliders.castClosure(r))}currentVehicleSpeed(){return this.raw.current_vehicle_speed()}chassis(){return this._chassis}get indexUpAxis(){return this.raw.index_up_axis()}set indexUpAxis(t){this.raw.set_index_up_axis(t)}get indexForwardAxis(){return this.raw.index_forward_axis()}set setIndexForwardAxis(t){this.raw.set_index_forward_axis(t)}addWheel(t,e,n,r,s){let a=O.intoRaw(t),o=O.intoRaw(e),l=O.intoRaw(n);this.raw.add_wheel(a,o,l,r,s),a.free(),o.free(),l.free()}numWheels(){return this.raw.num_wheels()}wheelChassisConnectionPointCs(t){return O.fromRaw(this.raw.wheel_chassis_connection_point_cs(t))}setWheelChassisConnectionPointCs(t,e){let n=O.intoRaw(e);this.raw.set_wheel_chassis_connection_point_cs(t,n),n.free()}wheelSuspensionRestLength(t){return this.raw.wheel_suspension_rest_length(t)}setWheelSuspensionRestLength(t,e){this.raw.set_wheel_suspension_rest_length(t,e)}wheelMaxSuspensionTravel(t){return this.raw.wheel_max_suspension_travel(t)}setWheelMaxSuspensionTravel(t,e){this.raw.set_wheel_max_suspension_travel(t,e)}wheelRadius(t){return this.raw.wheel_radius(t)}setWheelRadius(t,e){this.raw.set_wheel_radius(t,e)}wheelSuspensionStiffness(t){return this.raw.wheel_suspension_stiffness(t)}setWheelSuspensionStiffness(t,e){this.raw.set_wheel_suspension_stiffness(t,e)}wheelSuspensionCompression(t){return this.raw.wheel_suspension_compression(t)}setWheelSuspensionCompression(t,e){this.raw.set_wheel_suspension_compression(t,e)}wheelSuspensionRelaxation(t){return this.raw.wheel_suspension_relaxation(t)}setWheelSuspensionRelaxation(t,e){this.raw.set_wheel_suspension_relaxation(t,e)}wheelMaxSuspensionForce(t){return this.raw.wheel_max_suspension_force(t)}setWheelMaxSuspensionForce(t,e){this.raw.set_wheel_max_suspension_force(t,e)}wheelBrake(t){return this.raw.wheel_brake(t)}setWheelBrake(t,e){this.raw.set_wheel_brake(t,e)}wheelSteering(t){return this.raw.wheel_steering(t)}setWheelSteering(t,e){this.raw.set_wheel_steering(t,e)}wheelEngineForce(t){return this.raw.wheel_engine_force(t)}setWheelEngineForce(t,e){this.raw.set_wheel_engine_force(t,e)}wheelDirectionCs(t){return O.fromRaw(this.raw.wheel_direction_cs(t))}setWheelDirectionCs(t,e){let n=O.intoRaw(e);this.raw.set_wheel_direction_cs(t,n),n.free()}wheelAxleCs(t){return O.fromRaw(this.raw.wheel_axle_cs(t))}setWheelAxleCs(t,e){let n=O.intoRaw(e);this.raw.set_wheel_axle_cs(t,n),n.free()}wheelFrictionSlip(t){return this.raw.wheel_friction_slip(t)}setWheelFrictionSlip(t,e){this.raw.set_wheel_friction_slip(t,e)}wheelSideFrictionStiffness(t){return this.raw.wheel_side_friction_stiffness(t)}setWheelSideFrictionStiffness(t,e){this.raw.set_wheel_side_friction_stiffness(t,e)}wheelRotation(t){return this.raw.wheel_rotation(t)}wheelForwardImpulse(t){return this.raw.wheel_forward_impulse(t)}wheelSideImpulse(t){return this.raw.wheel_side_impulse(t)}wheelSuspensionForce(t){return this.raw.wheel_suspension_force(t)}wheelContactNormal(t){return O.fromRaw(this.raw.wheel_contact_normal_ws(t))}wheelContactPoint(t){return O.fromRaw(this.raw.wheel_contact_point_ws(t))}wheelSuspensionLength(t){return this.raw.wheel_suspension_length(t)}wheelHardPoint(t){return O.fromRaw(this.raw.wheel_hard_point_ws(t))}wheelIsInContact(t){return this.raw.wheel_is_in_contact(t)}wheelGroundObject(t){return this.colliders.get(this.raw.wheel_ground_object(t))}}class sa{free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(t=>t.free()),this.pidControllers.forEach(t=>t.free()),this.vehicleControllers.forEach(t=>t.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0,this.pidControllers=void 0,this.vehicleControllers=void 0}constructor(t,e,n,r,s,a,o,l,c,d,f,u,m){this.gravity=t,this.integrationParameters=new id(e),this.islands=new wd(n),this.broadPhase=new bd(r),this.narrowPhase=new vd(s),this.bodies=new nd(a),this.colliders=new Pd(o),this.impulseJoints=new dd(l),this.multibodyJoints=new md(c),this.ccdSolver=new gd(d),this.physicsPipeline=new Sd(f),this.serializationPipeline=new fo(u),this.debugRenderPipeline=new Ed(m),this.characterControllers=new Set,this.pidControllers=new Set,this.vehicleControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}static fromRaw(t){return t?new sa(O.fromRaw(t.takeGravity()),t.takeIntegrationParameters(),t.takeIslandManager(),t.takeBroadPhase(),t.takeNarrowPhase(),t.takeBodies(),t.takeColliders(),t.takeImpulseJoints(),t.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(t){return new fo().deserializeAll(t)}debugRender(t,e){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase,t,e),new Md(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(t,e){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,t,e)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}get timestep(){return this.integrationParameters.dt}set timestep(t){this.integrationParameters.dt=t}get lengthUnit(){return this.integrationParameters.lengthUnit}set lengthUnit(t){this.integrationParameters.lengthUnit=t}get numSolverIterations(){return this.integrationParameters.numSolverIterations}set numSolverIterations(t){this.integrationParameters.numSolverIterations=t}get numInternalPgsIterations(){return this.integrationParameters.numInternalPgsIterations}set numInternalPgsIterations(t){this.integrationParameters.numInternalPgsIterations=t}get maxCcdSubsteps(){return this.integrationParameters.maxCcdSubsteps}set maxCcdSubsteps(t){this.integrationParameters.maxCcdSubsteps=t}createRigidBody(t){return this.bodies.createRigidBody(this.colliders,t)}createCharacterController(t){let e=new Ad(t,this.integrationParameters,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.characterControllers.add(e),e}removeCharacterController(t){this.characterControllers.delete(t),t.free()}createPidController(t,e,n,r){let s=new Rd(this.integrationParameters,this.bodies,t,e,n,r);return this.pidControllers.add(s),s}removePidController(t){this.pidControllers.delete(t),t.free()}createVehicleController(t){let e=new Cd(t,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.vehicleControllers.add(e),e}removeVehicleController(t){this.vehicleControllers.delete(t),t.free()}createCollider(t,e){let n=e?e.handle:void 0;return this.colliders.createCollider(this.bodies,t,n)}createImpulseJoint(t,e,n,r){return this.impulseJoints.createJoint(this.bodies,t,e.handle,n.handle,r)}createMultibodyJoint(t,e,n,r){return this.multibodyJoints.createJoint(t,e.handle,n.handle,r)}getRigidBody(t){return this.bodies.get(t)}getCollider(t){return this.colliders.get(t)}getImpulseJoint(t){return this.impulseJoints.get(t)}getMultibodyJoint(t){return this.multibodyJoints.get(t)}removeRigidBody(t){this.bodies&&this.bodies.remove(t.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(t,e){this.colliders&&this.colliders.remove(t.handle,this.islands,this.bodies,e)}removeImpulseJoint(t,e){this.impulseJoints&&this.impulseJoints.remove(t.handle,e)}removeMultibodyJoint(t,e){this.impulseJoints&&this.multibodyJoints.remove(t.handle,e)}forEachCollider(t){this.colliders.forEach(t)}forEachRigidBody(t){this.bodies.forEach(t)}forEachActiveRigidBody(t){this.bodies.forEachActiveRigidBody(this.islands,t)}castRay(t,e,n,r,s,a,o,l){return this.broadPhase.castRay(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l))}castRayAndGetNormal(t,e,n,r,s,a,o,l){return this.broadPhase.castRayAndGetNormal(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l))}intersectionsWithRay(t,e,n,r,s,a,o,l,c){this.broadPhase.intersectionsWithRay(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}intersectionWithShape(t,e,n,r,s,a,o,l){let c=this.broadPhase.intersectionWithShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l));return c!=null?this.colliders.get(c):null}projectPoint(t,e,n,r,s,a,o){return this.broadPhase.projectPoint(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}projectPointAndGetFeature(t,e,n,r,s,a){return this.broadPhase.projectPointAndGetFeature(this.narrowPhase,this.bodies,this.colliders,t,e,n,r?r.handle:null,s?s.handle:null,this.colliders.castClosure(a))}intersectionsWithPoint(t,e,n,r,s,a,o){this.broadPhase.intersectionsWithPoint(this.narrowPhase,this.bodies,this.colliders,t,this.colliders.castClosure(e),n,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}castShape(t,e,n,r,s,a,o,l,c,d,f,u){return this.broadPhase.castShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a,o,l,c,d?d.handle:null,f?f.handle:null,this.colliders.castClosure(u))}intersectionsWithShape(t,e,n,r,s,a,o,l,c){this.broadPhase.intersectionsWithShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,this.colliders.castClosure(r),s,a,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}collidersWithAabbIntersectingAabb(t,e,n){this.broadPhase.collidersWithAabbIntersectingAabb(this.narrowPhase,this.bodies,this.colliders,t,e,this.colliders.castClosure(n))}contactPairsWith(t,e){this.narrowPhase.contactPairsWith(t.handle,this.colliders.castClosure(e))}intersectionPairsWith(t,e){this.narrowPhase.intersectionPairsWith(t.handle,this.colliders.castClosure(e))}contactPair(t,e,n){this.narrowPhase.contactPair(t.handle,e.handle,n)}intersectionPair(t,e){return this.narrowPhase.intersectionPair(t.handle,e.handle)}set profilerEnabled(t){this.physicsPipeline.raw.set_profiler_enabled(t)}get profilerEnabled(){return this.physicsPipeline.raw.is_profiler_enabled()}timingStep(){return this.physicsPipeline.raw.timing_step()}timingCollisionDetection(){return this.physicsPipeline.raw.timing_collision_detection()}timingBroadPhase(){return this.physicsPipeline.raw.timing_broad_phase()}timingNarrowPhase(){return this.physicsPipeline.raw.timing_narrow_phase()}timingSolver(){return this.physicsPipeline.raw.timing_solver()}timingVelocityAssembly(){return this.physicsPipeline.raw.timing_velocity_assembly()}timingVelocityResolution(){return this.physicsPipeline.raw.timing_velocity_resolution()}timingVelocityUpdate(){return this.physicsPipeline.raw.timing_velocity_update()}timingVelocityWriteback(){return this.physicsPipeline.raw.timing_velocity_writeback()}timingCcd(){return this.physicsPipeline.raw.timing_ccd()}timingCcdToiComputation(){return this.physicsPipeline.raw.timing_ccd_toi_computation()}timingCcdBroadPhase(){return this.physicsPipeline.raw.timing_ccd_broad_phase()}timingCcdNarrowPhase(){return this.physicsPipeline.raw.timing_ccd_narrow_phase()}timingCcdSolver(){return this.physicsPipeline.raw.timing_ccd_solver()}timingIslandConstruction(){return this.physicsPipeline.raw.timing_island_construction()}timingUserChanges(){return this.physicsPipeline.raw.timing_user_changes()}}var Gs;(function(i){i[i.NONE=0]="NONE",i[i.COLLISION_EVENTS=1]="COLLISION_EVENTS",i[i.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(Gs||(Gs={}));var Vs;(function(i){i[i.NONE=0]="NONE",i[i.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",i[i.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(Vs||(Vs={}));var mo;(function(i){i[i.EMPTY=0]="EMPTY",i[i.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(mo||(mo={}));var ks;(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(ks||(ks={}));class go{constructor(t,e,n,r){this.colliderSet=t,this.handle=e,this._parent=n,this._shape=r}finalizeDeserialization(t){this.handle!=null&&(this._parent=t.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=Pe.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}clearShapeCache(){this._shape=null}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return O.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}translationWrtParent(){return O.fromRaw(this.colliderSet.raw.coTranslationWrtParent(this.handle))}rotation(){return Gt.fromRaw(this.colliderSet.raw.coRotation(this.handle))}rotationWrtParent(){return Gt.fromRaw(this.colliderSet.raw.coRotationWrtParent(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(t){this.colliderSet.raw.coSetSensor(this.handle,t)}setShape(t){let e=t.intoRaw();this.colliderSet.raw.coSetShape(this.handle,e),e.free(),this._shape=t}setEnabled(t){this.colliderSet.raw.coSetEnabled(this.handle,t)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(t){this.colliderSet.raw.coSetRestitution(this.handle,t)}setFriction(t){this.colliderSet.raw.coSetFriction(this.handle,t)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(t){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,t)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(t){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,t)}setCollisionGroups(t){this.colliderSet.raw.coSetCollisionGroups(this.handle,t)}setSolverGroups(t){this.colliderSet.raw.coSetSolverGroups(this.handle,t)}contactSkin(){return this.colliderSet.raw.coContactSkin(this.handle)}setContactSkin(t){return this.colliderSet.raw.coSetContactSkin(this.handle,t)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(t){this.colliderSet.raw.coSetActiveHooks(this.handle,t)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(t){this.colliderSet.raw.coSetActiveEvents(this.handle,t)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(t){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,t)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(t){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,t)}setDensity(t){this.colliderSet.raw.coSetDensity(this.handle,t)}setMass(t){this.colliderSet.raw.coSetMass(this.handle,t)}setMassProperties(t,e,n,r){let s=O.intoRaw(e),a=O.intoRaw(n),o=Gt.intoRaw(r);this.colliderSet.raw.coSetMassProperties(this.handle,t,s,a,o),s.free(),a.free(),o.free()}setTranslation(t){this.colliderSet.raw.coSetTranslation(this.handle,t.x,t.y,t.z)}setTranslationWrtParent(t){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,t.x,t.y,t.z)}setRotation(t){this.colliderSet.raw.coSetRotation(this.handle,t.x,t.y,t.z,t.w)}setRotationWrtParent(t){this.colliderSet.raw.coSetRotationWrtParent(this.handle,t.x,t.y,t.z,t.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return O.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(t){const e=O.intoRaw(t);this.colliderSet.raw.coSetHalfExtents(this.handle,e)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(t){this.colliderSet.raw.coSetRadius(this.handle,t)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(t){this.colliderSet.raw.coSetRoundRadius(this.handle,t)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(t){this.colliderSet.raw.coSetHalfHeight(this.handle,t)}setVoxel(t,e,n,r){this.colliderSet.raw.coSetVoxel(this.handle,t,e,n,r),this._shape=null}propagateVoxelChange(t,e,n,r,s,a,o){this.colliderSet.raw.coPropagateVoxelChange(this.handle,t.handle,e,n,r,s,a,o),this._shape=null}combineVoxelStates(t,e,n,r){this.colliderSet.raw.coCombineVoxelStates(this.handle,t.handle,e,n,r),this._shape=null}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let t=this.colliderSet.raw.coHeightfieldScale(this.handle);return O.fromRaw(t)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(t){let e=O.intoRaw(t),n=this.colliderSet.raw.coContainsPoint(this.handle,e);return e.free(),n}projectPoint(t,e){let n=O.intoRaw(t),r=Vr.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,n,e));return n.free(),r}intersectsRay(t,e){let n=O.intoRaw(t.origin),r=O.intoRaw(t.dir),s=this.colliderSet.raw.coIntersectsRay(this.handle,n,r,e);return n.free(),r.free(),s}castShape(t,e,n,r,s,a,o,l){let c=O.intoRaw(t),d=O.intoRaw(n),f=Gt.intoRaw(r),u=O.intoRaw(s),m=e.intoRaw(),w=hr.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,c,m,d,f,u,a,o,l));return c.free(),d.free(),f.free(),u.free(),m.free(),w}castCollider(t,e,n,r,s,a){let o=O.intoRaw(t),l=O.intoRaw(n),c=kr.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,o,e.handle,l,r,s,a));return o.free(),l.free(),c}intersectsShape(t,e,n){let r=O.intoRaw(e),s=Gt.intoRaw(n),a=t.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,a,r,s);return r.free(),s.free(),a.free(),o}contactShape(t,e,n,r){let s=O.intoRaw(e),a=Gt.intoRaw(n),o=t.intoRaw(),l=ir.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,s,a,r));return s.free(),a.free(),o.free(),l}contactCollider(t,e){return ir.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,t.handle,e))}castRay(t,e,n){let r=O.intoRaw(t.origin),s=O.intoRaw(t.dir),a=this.colliderSet.raw.coCastRay(this.handle,r,s,e,n);return r.free(),s.free(),a}castRayAndGetNormal(t,e,n){let r=O.intoRaw(t.origin),s=O.intoRaw(t.dir),a=Gr.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,r,s,e,n));return r.free(),s.free(),a}}var Ei;(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(Ei||(Ei={}));class Ee{constructor(t){this.enabled=!0,this.shape=t,this.massPropsMode=Ei.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=Gt.identity(),this.translation=O.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=Ir.Average,this.restitutionCombineRule=Ir.Average,this.activeCollisionTypes=ks.DEFAULT,this.activeEvents=Gs.NONE,this.activeHooks=Vs.NONE,this.mass=0,this.centerOfMass=O.zeros(),this.contactForceEventThreshold=0,this.contactSkin=0,this.principalAngularInertia=O.zeros(),this.angularInertiaLocalFrame=Gt.identity()}static ball(t){const e=new bc(t);return new Ee(e)}static capsule(t,e){const n=new yc(t,e);return new Ee(n)}static segment(t,e){const n=new Sc(t,e);return new Ee(n)}static triangle(t,e,n){const r=new Mc(t,e,n);return new Ee(r)}static roundTriangle(t,e,n,r){const s=new Ec(t,e,n,r);return new Ee(s)}static polyline(t,e){const n=new Tc(t,e);return new Ee(n)}static voxels(t,e){const n=new Ac(t,e);return new Ee(n)}static trimesh(t,e,n){const r=new Rc(t,e,n);return new Ee(r)}static cuboid(t,e,n){const r=new vc(t,e,n);return new Ee(r)}static roundCuboid(t,e,n,r){const s=new xc(t,e,n,r);return new Ee(s)}static heightfield(t,e,n,r,s){const a=new Cc(t,e,n,r,s);return new Ee(a)}static cylinder(t,e){const n=new Pc(t,e);return new Ee(n)}static roundCylinder(t,e,n){const r=new Ic(t,e,n);return new Ee(r)}static cone(t,e){const n=new Dc(t,e);return new Ee(n)}static roundCone(t,e,n){const r=new Lc(t,e,n);return new Ee(r)}static convexHull(t){const e=new zs(t,null);return new Ee(e)}static convexMesh(t,e){const n=new zs(t,e);return new Ee(n)}static roundConvexHull(t,e){const n=new Hs(t,null,e);return new Ee(n)}static roundConvexMesh(t,e,n){const r=new Hs(t,e,n);return new Ee(r)}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return Gt.copy(this.rotation,t),this}setSensor(t){return this.isSensor=t,this}setEnabled(t){return this.enabled=t,this}setContactSkin(t){return this.contactSkin=t,this}setDensity(t){return this.massPropsMode=Ei.Density,this.density=t,this}setMass(t){return this.massPropsMode=Ei.Mass,this.mass=t,this}setMassProperties(t,e,n,r){return this.massPropsMode=Ei.MassProps,this.mass=t,O.copy(this.centerOfMass,e),O.copy(this.principalAngularInertia,n),Gt.copy(this.angularInertiaLocalFrame,r),this}setRestitution(t){return this.restitution=t,this}setFriction(t){return this.friction=t,this}setFrictionCombineRule(t){return this.frictionCombineRule=t,this}setRestitutionCombineRule(t){return this.restitutionCombineRule=t,this}setCollisionGroups(t){return this.collisionGroups=t,this}setSolverGroups(t){return this.solverGroups=t,this}setActiveHooks(t){return this.activeHooks=t,this}setActiveEvents(t){return this.activeEvents=t,this}setActiveCollisionTypes(t){return this.activeCollisionTypes=t,this}setContactForceEventThreshold(t){return this.contactForceEventThreshold=t,this}}class Pd{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new be,this.map=new ia,t&&t.forEachColliderHandle(e=>{this.map.set(e,new go(this,e,null))})}castClosure(t){return e=>{if(t)return t(this.get(e))}}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createCollider(t,e,n){let r=n!=null&&n!=null;if(r&&isNaN(n))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let s=e.shape.intoRaw(),a=O.intoRaw(e.translation),o=Gt.intoRaw(e.rotation),l=O.intoRaw(e.centerOfMass),c=O.intoRaw(e.principalAngularInertia),d=Gt.intoRaw(e.angularInertiaLocalFrame),f=this.raw.createCollider(e.enabled,s,a,o,e.massPropsMode,e.mass,l,c,d,e.density,e.friction,e.restitution,e.frictionCombineRule,e.restitutionCombineRule,e.isSensor,e.collisionGroups,e.solverGroups,e.activeCollisionTypes,e.activeHooks,e.activeEvents,e.contactForceEventThreshold,e.contactSkin,r,r?n:0,t.raw);s.free(),a.free(),o.free(),l.free(),c.free(),d.free();let u=r?t.get(n):null,m=new go(this,f,u,e.shape);return this.map.set(f,m),m}remove(t,e,n,r){this.raw.remove(t,e.raw,n.raw,r),this.unmap(t)}unmap(t){this.map.delete(t)}get(t){return this.map.get(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}const Gn=Object.freeze(Object.defineProperty({__proto__:null,get ActiveCollisionTypes(){return ks},get ActiveEvents(){return Gs},get ActiveHooks(){return Vs},Ball:bc,BroadPhase:bd,CCDSolver:gd,Capsule:yc,CharacterCollision:Td,get CoefficientCombineRule(){return Ir},Collider:go,ColliderDesc:Ee,ColliderSet:Pd,ColliderShapeCastHit:kr,Cone:Dc,ConvexPolyhedron:zs,Cuboid:vc,Cylinder:Pc,DebugRenderBuffers:Md,DebugRenderPipeline:Ed,DynamicRayCastVehicleController:Cd,get FeatureType(){return nr},FixedImpulseJoint:rd,FixedMultibodyJoint:ud,GenericImpulseJoint:ld,HalfSpace:yd,get HeightFieldFlags(){return uo},Heightfield:Cc,ImpulseJoint:xn,ImpulseJointSet:dd,IntegrationParameters:id,IslandManager:wd,get JointAxesMask(){return ho},get JointType(){return co},KinematicCharacterController:Ad,get MassPropsMode(){return Ei},get MotorModel(){return lo},MultibodyJoint:di,MultibodyJointSet:md,NarrowPhase:vd,PhysicsPipeline:Sd,get PidAxesMask(){return po},PidController:Rd,PointColliderProjection:Lr,PointProjection:Vr,Polyline:Tc,PrismaticImpulseJoint:od,PrismaticMultibodyJoint:_d,Quaternion:so,RayColliderHit:ra,RayColliderIntersection:Dr,RayIntersection:Gr,RevoluteImpulseJoint:cd,RevoluteMultibodyJoint:fd,RigidBody:oo,RigidBodyDesc:En,RigidBodySet:nd,get RigidBodyType(){return pn},RopeImpulseJoint:sd,RotationOps:Gt,RoundCone:Lc,RoundConvexPolyhedron:Hs,RoundCuboid:xc,RoundCylinder:Ic,RoundTriangle:Ec,SdpMatrix3:ed,SdpMatrix3Ops:ao,Segment:Sc,SerializationPipeline:fo,Shape:Pe,ShapeCastHit:hr,ShapeContact:ir,get ShapeType(){return Te},get SolverFlags(){return mo},SphericalImpulseJoint:hd,SphericalMultibodyJoint:pd,SpringImpulseJoint:ad,TempContactManifold:xd,TriMesh:Rc,get TriMeshFlags(){return _o},Triangle:Mc,UnitImpulseJoint:gc,UnitMultibodyJoint:wc,Vector3:td,VectorOps:O,Voxels:Ac,World:sa},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fc="183",yy=0,Ol=1,Sy=2,Cs=1,My=2,Tr=3,ui=0,Qe=1,wn=2,kn=0,Zi=1,Bl=2,zl=3,Hl=4,Ey=5,Si=100,Ty=101,Ay=102,Ry=103,Cy=104,Py=200,Iy=201,Dy=202,Ly=203,wo=204,bo=205,Fy=206,Uy=207,Ny=208,Oy=209,By=210,zy=211,Hy=212,Gy=213,Vy=214,vo=0,xo=1,yo=2,rr=3,So=4,Mo=5,Eo=6,To=7,Id=0,ky=1,Wy=2,vn=0,Dd=1,Ld=2,Fd=3,Ud=4,Nd=5,Od=6,Bd=7,zd=300,Ii=301,sr=302,Sa=303,Ma=304,aa=306,Ao=1e3,Vn=1001,Ro=1002,De=1003,jy=1004,ts=1005,je=1006,Ea=1007,Ti=1008,rn=1009,Hd=1010,Gd=1011,Fr=1012,Uc=1013,In=1014,An=1015,Kn=1016,Nc=1017,Oc=1018,Ur=1020,Vd=35902,kd=35899,Wd=1021,jd=1022,bn=1023,$n=1026,Ai=1027,Bc=1028,zc=1029,ar=1030,Hc=1031,Gc=1033,Ps=33776,Is=33777,Ds=33778,Ls=33779,Co=35840,Po=35841,Io=35842,Do=35843,Lo=36196,Fo=37492,Uo=37496,No=37488,Oo=37489,Bo=37490,zo=37491,Ho=37808,Go=37809,Vo=37810,ko=37811,Wo=37812,jo=37813,Xo=37814,qo=37815,Yo=37816,Ko=37817,$o=37818,Jo=37819,Zo=37820,Qo=37821,tc=36492,ec=36494,nc=36495,ic=36283,rc=36284,sc=36285,ac=36286,Xy=3200,Vc=0,qy=1,oi="",Je="srgb",or="srgb-linear",Ws="linear",se="srgb",Bi=7680,Gl=519,Yy=512,Ky=513,$y=514,kc=515,Jy=516,Zy=517,Wc=518,Qy=519,Vl=35044,kl="300 es",Rn=2e3,Nr=2001;function tS(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eS(){const i=js("canvas");return i.style.display="block",i}const Wl={};function jl(...i){const t="THREE."+i.shift();console.log(t,...i)}function Xd(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=Xd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=Xd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Xs(...i){const t=i.join(" ");t in Wl||(Wl[t]=!0,Ut(...i))}function nS(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const iS={[vo]:xo,[yo]:Eo,[So]:To,[rr]:Mo,[xo]:vo,[Eo]:yo,[To]:So,[Mo]:rr};class dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fs=Math.PI/180,oc=180/Math.PI;function Wr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function rS(i,t){return(i%t+t)%t}function Ta(i,t,e){return(1-e)*i+e*t}function wr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Li{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],f=n[r+3],u=s[a+0],m=s[a+1],w=s[a+2],y=s[a+3];if(f!==y||l!==u||c!==m||d!==w){let g=l*u+c*m+d*w+f*y;g<0&&(u=-u,m=-m,w=-w,y=-y,g=-g);let p=1-o;if(g<.9995){const x=Math.acos(g),T=Math.sin(x);p=Math.sin(p*x)/T,o=Math.sin(o*x)/T,l=l*p+u*o,c=c*p+m*o,d=d*p+w*o,f=f*p+y*o}else{l=l*p+u*o,c=c*p+m*o,d=d*p+w*o,f=f*p+y*o;const x=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=x,c*=x,d*=x,f*=x}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],f=s[a],u=s[a+1],m=s[a+2],w=s[a+3];return t[e]=o*w+d*f+l*m-c*u,t[e+1]=l*w+d*u+c*f-o*m,t[e+2]=c*w+d*m+o*u-l*f,t[e+3]=d*w-o*f-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),f=o(s/2),u=l(n/2),m=l(r/2),w=l(s/2);switch(a){case"XYZ":this._x=u*d*f+c*m*w,this._y=c*m*f-u*d*w,this._z=c*d*w+u*m*f,this._w=c*d*f-u*m*w;break;case"YXZ":this._x=u*d*f+c*m*w,this._y=c*m*f-u*d*w,this._z=c*d*w-u*m*f,this._w=c*d*f+u*m*w;break;case"ZXY":this._x=u*d*f-c*m*w,this._y=c*m*f+u*d*w,this._z=c*d*w+u*m*f,this._w=c*d*f-u*m*w;break;case"ZYX":this._x=u*d*f-c*m*w,this._y=c*m*f+u*d*w,this._z=c*d*w-u*m*f,this._w=c*d*f+u*m*w;break;case"YZX":this._x=u*d*f+c*m*w,this._y=c*m*f+u*d*w,this._z=c*d*w-u*m*f,this._w=c*d*f-u*m*w;break;case"XZY":this._x=u*d*f-c*m*w,this._y=c*m*f-u*d*w,this._z=c*d*w+u*m*f,this._w=c*d*f+u*m*w;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],f=e[10],u=n+o+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),d=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*d,this.y=n+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new N,Xl=new Li;class Ht{constructor(t,e,n,r,s,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],u=n[2],m=n[5],w=n[8],y=r[0],g=r[3],p=r[6],x=r[1],T=r[4],E=r[7],P=r[2],C=r[5],D=r[8];return s[0]=a*y+o*x+l*P,s[3]=a*g+o*T+l*C,s[6]=a*p+o*E+l*D,s[1]=c*y+d*x+f*P,s[4]=c*g+d*T+f*C,s[7]=c*p+d*E+f*D,s[2]=u*y+m*x+w*P,s[5]=u*g+m*T+w*C,s[8]=u*p+m*E+w*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],f=d*a-o*c,u=o*l-d*s,m=c*s-a*l,w=e*f+n*u+r*m;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/w;return t[0]=f*y,t[1]=(r*c-d*n)*y,t[2]=(o*n-r*a)*y,t[3]=u*y,t[4]=(d*e-r*l)*y,t[5]=(r*s-o*e)*y,t[6]=m*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new Ht,ql=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yl=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sS(){const i={enabled:!0,workingColorSpace:or,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===se&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(r.r=Qi(r.r),r.g=Qi(r.g),r.b=Qi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?Ws:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[or]:{primaries:t,whitePoint:n,transfer:Ws,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:n,transfer:se,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),i}const Qt=sS();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zi;class aS{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zi===void 0&&(zi=js("canvas")),zi.width=t.width,zi.height=t.height;const r=zi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oS=0;class jc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Wr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ca(r[a].image)):s.push(Ca(r[a]))}else s=Ca(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?aS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let cS=0;const Pa=new N;class Xe extends dr{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Vn,r=Vn,s=je,a=Ti,o=bn,l=rn,c=Xe.DEFAULT_ANISOTROPY,d=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=Wr(),this.name="",this.source=new jc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ao:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ao:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=zd;Xe.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,r=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],d=l[4],f=l[8],u=l[1],m=l[5],w=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-y)<.01&&Math.abs(w-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+y)<.1&&Math.abs(w+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,E=(m+1)/2,P=(p+1)/2,C=(d+u)/4,D=(f+y)/4,v=(w+g)/4;return T>E&&T>P?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=C/n,s=D/n):E>P?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=C/r,s=v/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=D/s,r=v/s),this.set(n,r,s,e),this}let x=Math.sqrt((g-w)*(g-w)+(f-y)*(f-y)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(g-w)/x,this.y=(f-y)/x,this.z=(u-d)/x,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lS extends dr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new Xe(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new jc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends lS{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qd extends Xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hS extends Xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ve{constructor(t,e,n,r,s,a,o,l,c,d,f,u,m,w,y,g){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,d,f,u,m,w,y,g)}set(t,e,n,r,s,a,o,l,c,d,f,u,m,w,y,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=f,p[14]=u,p[3]=m,p[7]=w,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Hi.setFromMatrixColumn(t,0).length(),s=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=a*d,m=a*f,w=o*d,y=o*f;e[0]=l*d,e[4]=-l*f,e[8]=c,e[1]=m+w*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=w+m*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*d,m=l*f,w=c*d,y=c*f;e[0]=u+y*o,e[4]=w*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*d,e[9]=-o,e[2]=m*o-w,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*d,m=l*f,w=c*d,y=c*f;e[0]=u-y*o,e[4]=-a*f,e[8]=w+m*o,e[1]=m+w*o,e[5]=a*d,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*d,m=a*f,w=o*d,y=o*f;e[0]=l*d,e[4]=w*c-m,e[8]=u*c+y,e[1]=l*f,e[5]=y*c+u,e[9]=m*c-w,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,m=a*c,w=o*l,y=o*c;e[0]=l*d,e[4]=y-u*f,e[8]=w*f+m,e[1]=f,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=m*f+w,e[10]=u-y*f}else if(t.order==="XZY"){const u=a*l,m=a*c,w=o*l,y=o*c;e[0]=l*d,e[4]=-f,e[8]=c*d,e[1]=u*f+y,e[5]=a*d,e[9]=m*f-w,e[2]=w*f-m,e[6]=o*d,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dS,t,uS)}lookAt(t,e,n){const r=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ei.crossVectors(n,en),ei.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ei.crossVectors(n,en)),ei.normalize(),es.crossVectors(en,ei),r[0]=ei.x,r[4]=es.x,r[8]=en.x,r[1]=ei.y,r[5]=es.y,r[9]=en.y,r[2]=ei.z,r[6]=es.z,r[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],u=n[9],m=n[13],w=n[2],y=n[6],g=n[10],p=n[14],x=n[3],T=n[7],E=n[11],P=n[15],C=r[0],D=r[4],v=r[8],M=r[12],G=r[1],I=r[5],H=r[9],V=r[13],Y=r[2],X=r[6],W=r[10],q=r[14],rt=r[3],et=r[7],st=r[11],_t=r[15];return s[0]=a*C+o*G+l*Y+c*rt,s[4]=a*D+o*I+l*X+c*et,s[8]=a*v+o*H+l*W+c*st,s[12]=a*M+o*V+l*q+c*_t,s[1]=d*C+f*G+u*Y+m*rt,s[5]=d*D+f*I+u*X+m*et,s[9]=d*v+f*H+u*W+m*st,s[13]=d*M+f*V+u*q+m*_t,s[2]=w*C+y*G+g*Y+p*rt,s[6]=w*D+y*I+g*X+p*et,s[10]=w*v+y*H+g*W+p*st,s[14]=w*M+y*V+g*q+p*_t,s[3]=x*C+T*G+E*Y+P*rt,s[7]=x*D+T*I+E*X+P*et,s[11]=x*v+T*H+E*W+P*st,s[15]=x*M+T*V+E*q+P*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],f=t[6],u=t[10],m=t[14],w=t[3],y=t[7],g=t[11],p=t[15],x=l*m-c*u,T=o*m-c*f,E=o*u-l*f,P=a*m-c*d,C=a*u-l*d,D=a*f-o*d;return e*(y*x-g*T+p*E)-n*(w*x-g*P+p*C)+r*(w*T-y*P+p*D)-s*(w*E-y*C+g*D)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],f=t[9],u=t[10],m=t[11],w=t[12],y=t[13],g=t[14],p=t[15],x=e*o-n*a,T=e*l-r*a,E=e*c-s*a,P=n*l-r*o,C=n*c-s*o,D=r*c-s*l,v=d*y-f*w,M=d*g-u*w,G=d*p-m*w,I=f*g-u*y,H=f*p-m*y,V=u*p-m*g,Y=x*V-T*H+E*I+P*G-C*M+D*v;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/Y;return t[0]=(o*V-l*H+c*I)*X,t[1]=(r*H-n*V-s*I)*X,t[2]=(y*D-g*C+p*P)*X,t[3]=(u*C-f*D-m*P)*X,t[4]=(l*G-a*V-c*M)*X,t[5]=(e*V-r*G+s*M)*X,t[6]=(g*E-w*D-p*T)*X,t[7]=(d*D-u*E+m*T)*X,t[8]=(a*H-o*G+c*v)*X,t[9]=(n*G-e*H-s*v)*X,t[10]=(w*C-y*E+p*x)*X,t[11]=(f*E-d*C-m*x)*X,t[12]=(o*M-a*I-l*v)*X,t[13]=(e*I-n*M+r*v)*X,t[14]=(y*T-w*P-g*x)*X,t[15]=(d*P-f*T+u*x)*X,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,d=a+a,f=o+o,u=s*c,m=s*d,w=s*f,y=a*d,g=a*f,p=o*f,x=l*c,T=l*d,E=l*f,P=n.x,C=n.y,D=n.z;return r[0]=(1-(y+p))*P,r[1]=(m+E)*P,r[2]=(w-T)*P,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(u+p))*C,r[6]=(g+x)*C,r[7]=0,r[8]=(w+T)*D,r[9]=(g-x)*D,r[10]=(1-(u+y))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Hi.set(r[0],r[1],r[2]).length();const o=Hi.set(r[4],r[5],r[6]).length(),l=Hi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),hn.copy(this);const c=1/a,d=1/o,f=1/l;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=d,hn.elements[5]*=d,hn.elements[6]*=d,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,e.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,r,s,a,o=Rn,l=!1){const c=this.elements,d=2*s/(e-t),f=2*s/(n-r),u=(e+t)/(e-t),m=(n+r)/(n-r);let w,y;if(l)w=s/(a-s),y=a*s/(a-s);else if(o===Rn)w=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Nr)w=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=w,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Rn,l=!1){const c=this.elements,d=2/(e-t),f=2/(n-r),u=-(e+t)/(e-t),m=-(n+r)/(n-r);let w,y;if(l)w=1/(a-s),y=a/(a-s);else if(o===Rn)w=-2/(a-s),y=-(a+s)/(a-s);else if(o===Nr)w=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=w,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hi=new N,hn=new ve,dS=new N(0,0,0),uS=new N(1,1,1),ei=new N,es=new N,en=new N,Kl=new ve,$l=new Li;class Dn{constructor(t=0,e=0,n=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $l.setFromEuler(this),this.setFromQuaternion($l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Yd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _S=0;const Jl=new N,Gi=new Li,Nn=new ve,ns=new N,br=new N,fS=new N,pS=new Li,Zl=new N(1,0,0),Ql=new N(0,1,0),th=new N(0,0,1),eh={type:"added"},mS={type:"removed"},Vi={type:"childadded",child:null},Ia={type:"childremoved",child:null};class Ge extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new N,e=new Dn,n=new Li,r=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ve},normalMatrix:{value:new Ht}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Zl,t)}rotateY(t){return this.rotateOnAxis(Ql,t)}rotateZ(t){return this.rotateOnAxis(th,t)}translateOnAxis(t,e){return Jl.copy(t).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zl,t)}translateY(t){return this.translateOnAxis(Ql,t)}translateZ(t){return this.translateOnAxis(th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ns.copy(t):ns.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(br,ns,this.up):Nn.lookAt(ns,br,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Gi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eh),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mS),Ia.child=t,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eh),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,fS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,pS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),w=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),w.length>0&&(n.nodes=w)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ge.DEFAULT_UP=new N(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class is extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gS={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const g=e.getJointPose(y,n),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),m=.02,w=.005;c.inputState.pinching&&u>m+w?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-w&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new is;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},rs={h:0,s:0,l:0};function La(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=rS(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=La(a,s,t+1/3),this.g=La(a,s,t),this.b=La(a,s,t-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(t,e=Je){function n(s){s!==void 0&&parseFloat(s)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=Kd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Qt.workingToColorSpace(We.copy(this),t),Math.round(Jt(We.r*255,0,255))*65536+Math.round(Jt(We.g*255,0,255))*256+Math.round(Jt(We.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(We.copy(this),e);const n=We.r,r=We.g,s=We.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Je){Qt.workingToColorSpace(We.copy(this),t);const e=We.r,n=We.g,r=We.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(rs);const n=Ta(ni.h,rs.h,e),r=Ta(ni.s,rs.s,e),s=Ta(ni.l,rs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Wt;Wt.NAMES=Kd;class wS extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const dn=new N,On=new N,Fa=new N,Bn=new N,ki=new N,Wi=new N,nh=new N,Ua=new N,Na=new N,Oa=new N,Ba=new ye,za=new ye,Ha=new ye;class on{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),dn.subVectors(t,e),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){dn.subVectors(r,e),On.subVectors(n,e),Fa.subVectors(t,e);const a=dn.dot(dn),o=dn.dot(On),l=dn.dot(Fa),c=On.dot(On),d=On.dot(Fa),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,m=(c*l-o*d)*u,w=(a*d-o*l)*u;return s.set(1-m-w,w,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Ba.setScalar(0),za.setScalar(0),Ha.setScalar(0),Ba.fromBufferAttribute(t,e),za.fromBufferAttribute(t,n),Ha.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ba,s.x),a.addScaledVector(za,s.y),a.addScaledVector(Ha,s.z),a}static isFrontFacing(t,e,n,r){return dn.subVectors(n,e),On.subVectors(t,e),dn.cross(On).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),dn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return on.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;ki.subVectors(r,n),Wi.subVectors(s,n),Ua.subVectors(t,n);const l=ki.dot(Ua),c=Wi.dot(Ua);if(l<=0&&c<=0)return e.copy(n);Na.subVectors(t,r);const d=ki.dot(Na),f=Wi.dot(Na);if(d>=0&&f<=d)return e.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(ki,a);Oa.subVectors(t,s);const m=ki.dot(Oa),w=Wi.dot(Oa);if(w>=0&&m<=w)return e.copy(s);const y=m*c-l*w;if(y<=0&&c>=0&&w<=0)return o=c/(c-w),e.copy(n).addScaledVector(Wi,o);const g=d*w-m*f;if(g<=0&&f-d>=0&&m-w>=0)return nh.subVectors(s,r),o=(f-d)/(f-d+(m-w)),e.copy(r).addScaledVector(nh,o);const p=1/(g+y+u);return a=y*p,o=u*p,e.copy(n).addScaledVector(ki,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class jr{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(t.matrixWorld),this.union(ss)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),as.subVectors(this.max,vr),ji.subVectors(t.a,vr),Xi.subVectors(t.b,vr),qi.subVectors(t.c,vr),ii.subVectors(Xi,ji),ri.subVectors(qi,Xi),mi.subVectors(ji,qi);let e=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-mi.z,mi.y,ii.z,0,-ii.x,ri.z,0,-ri.x,mi.z,0,-mi.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-mi.y,mi.x,0];return!Ga(e,ji,Xi,qi,as)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,ji,Xi,qi,as))?!1:(os.crossVectors(ii,ri),e=[os.x,os.y,os.z],Ga(e,ji,Xi,qi,as))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zn=[new N,new N,new N,new N,new N,new N,new N,new N],un=new N,ss=new jr,ji=new N,Xi=new N,qi=new N,ii=new N,ri=new N,mi=new N,vr=new N,as=new N,os=new N,gi=new N;function Ga(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){gi.fromArray(i,s);const o=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),d=n.dot(gi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Re=new N,cs=new Yt;let bS=0;class Pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cs.fromBufferAttribute(this,e),cs.applyMatrix3(t),this.setXY(e,cs.x,cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wr(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wr(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wr(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vl&&(t.usage=this.usage),t}}class $d extends Pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jd extends Pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends Pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const vS=new jr,xr=new N,Va=new N;class oa{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vS.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(xr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(Va)),this.expandByPoint(xr.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let xS=0;const sn=new ve,ka=new Ge,Yi=new N,nn=new jr,yr=new jr,Be=new N;class Ke extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tS(t)?Jd:$d)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return ka.lookAt(t),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(nn.min,yr.min),nn.expandByPoint(Be),Be.addVectors(nn.max,yr.max),nn.expandByPoint(Be)):(nn.expandByPoint(yr.min),nn.expandByPoint(yr.max))}nn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Be.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Be));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Be.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(t,c),Be.add(Yi)),r=Math.max(r,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new N,l[v]=new N;const c=new N,d=new N,f=new N,u=new Yt,m=new Yt,w=new Yt,y=new N,g=new N;function p(v,M,G){c.fromBufferAttribute(n,v),d.fromBufferAttribute(n,M),f.fromBufferAttribute(n,G),u.fromBufferAttribute(s,v),m.fromBufferAttribute(s,M),w.fromBufferAttribute(s,G),d.sub(c),f.sub(c),m.sub(u),w.sub(u);const I=1/(m.x*w.y-w.x*m.y);isFinite(I)&&(y.copy(d).multiplyScalar(w.y).addScaledVector(f,-m.y).multiplyScalar(I),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-w.x).multiplyScalar(I),o[v].add(y),o[M].add(y),o[G].add(y),l[v].add(g),l[M].add(g),l[G].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let v=0,M=x.length;v<M;++v){const G=x[v],I=G.start,H=G.count;for(let V=I,Y=I+H;V<Y;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const T=new N,E=new N,P=new N,C=new N;function D(v){P.fromBufferAttribute(r,v),C.copy(P);const M=o[v];T.copy(M),T.sub(P.multiplyScalar(P.dot(M))).normalize(),E.crossVectors(C,M);const I=E.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,I)}for(let v=0,M=x.length;v<M;++v){const G=x[v],I=G.start,H=G.count;for(let V=I,Y=I+H;V<Y;V+=3)D(t.getX(V+0)),D(t.getX(V+1)),D(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,d=new N,f=new N;if(t)for(let u=0,m=t.count;u<m;u+=3){const w=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);r.fromBufferAttribute(e,w),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(n,w),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(d),l.add(d),c.add(d),n.setXYZ(w,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let m=0,w=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*d;for(let p=0;p<d;p++)u[w++]=c[m++]}return new Pn(u,d,f)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const m=c[f];d.push(m.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,m=f.length;u<m;u++)d.push(f[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let yS=0;class Fi extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Zi,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=bo,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==bo&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Hn=new N,Wa=new N,ls=new N,si=new N,ja=new N,hs=new N,Xa=new N;class Zd{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Wa.copy(t).add(e).multiplyScalar(.5),ls.copy(e).sub(t).normalize(),si.copy(this.origin).sub(Wa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ls),o=si.dot(this.direction),l=-si.dot(ls),c=si.lengthSq(),d=Math.abs(1-a*a);let f,u,m,w;if(d>0)if(f=a*l-o,u=a*o-l,w=s*d,f>=0)if(u>=-w)if(u<=w){const y=1/d;f*=y,u*=y,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u<=-w?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c):u<=w?(f=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wa).addScaledVector(ls,u),m}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),r=Hn.dot(Hn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),d>=0?(s=(t.min.y-u.y)*d,a=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,a=(t.min.y-u.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,r,s){ja.subVectors(e,t),hs.subVectors(n,t),Xa.crossVectors(ja,hs);let a=this.direction.dot(Xa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,t);const l=o*this.direction.dot(hs.crossVectors(si,hs));if(l<0)return null;const c=o*this.direction.dot(ja.cross(si));if(c<0||l+c>a)return null;const d=-o*si.dot(Xa);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qd extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ih=new ve,wi=new Zd,ds=new oa,rh=new N,us=new N,_s=new N,fs=new N,qa=new N,ps=new N,sh=new N,ms=new N;class Ze extends Ge{constructor(t=new Ke,e=new Qd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(qa.fromBufferAttribute(f,t),a?ps.addScaledVector(qa,d):ps.addScaledVector(qa.sub(e),d))}e.add(ps)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(s),wi.copy(t.ray).recast(t.near),!(ds.containsPoint(wi.origin)===!1&&(wi.intersectSphere(ds,rh)===null||wi.origin.distanceToSquared(rh)>(t.far-t.near)**2))&&(ih.copy(s).invert(),wi.copy(t.ray).applyMatrix4(ih),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let w=0,y=u.length;w<y;w++){const g=u[w],p=a[g.materialIndex],x=Math.max(g.start,m.start),T=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let E=x,P=T;E<P;E+=3){const C=o.getX(E),D=o.getX(E+1),v=o.getX(E+2);r=gs(this,p,t,n,c,d,f,C,D,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const w=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let g=w,p=y;g<p;g+=3){const x=o.getX(g),T=o.getX(g+1),E=o.getX(g+2);r=gs(this,a,t,n,c,d,f,x,T,E),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let w=0,y=u.length;w<y;w++){const g=u[w],p=a[g.materialIndex],x=Math.max(g.start,m.start),T=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let E=x,P=T;E<P;E+=3){const C=E,D=E+1,v=E+2;r=gs(this,p,t,n,c,d,f,C,D,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const w=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=w,p=y;g<p;g+=3){const x=g,T=g+1,E=g+2;r=gs(this,a,t,n,c,d,f,x,T,E),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function SS(i,t,e,n,r,s,a,o){let l;if(t.side===Qe?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===ui,o),l===null)return null;ms.copy(o),ms.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ms);return c<e.near||c>e.far?null:{distance:c,point:ms.clone(),object:i}}function gs(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,us),i.getVertexPosition(l,_s),i.getVertexPosition(c,fs);const d=SS(i,t,e,n,us,_s,fs,sh);if(d){const f=new N;on.getBarycoord(sh,us,_s,fs,f),r&&(d.uv=on.getInterpolatedAttribute(r,o,l,c,f,new Yt)),s&&(d.uv1=on.getInterpolatedAttribute(s,o,l,c,f,new Yt)),a&&(d.normal=on.getInterpolatedAttribute(a,o,l,c,f,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new N,materialIndex:0};on.getNormal(us,_s,fs,u.normal),d.face=u,d.barycoord=f}return d}class tu extends Xe{constructor(t=null,e=1,n=1,r,s,a,o,l,c=De,d=De,f,u){super(null,a,o,l,c,d,r,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ya=new N,MS=new N,ES=new Ht;class yi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ya.subVectors(n,e).cross(MS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ya),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ES.getNormalMatrix(t),r=this.coplanarPoint(Ya).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new oa,TS=new Yt(.5,.5),ws=new N;class Xc{constructor(t=new yi,e=new yi,n=new yi,r=new yi,s=new yi,a=new yi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],f=s[5],u=s[6],m=s[7],w=s[8],y=s[9],g=s[10],p=s[11],x=s[12],T=s[13],E=s[14],P=s[15];if(r[0].setComponents(c-a,m-d,p-w,P-x).normalize(),r[1].setComponents(c+a,m+d,p+w,P+x).normalize(),r[2].setComponents(c+o,m+f,p+y,P+T).normalize(),r[3].setComponents(c-o,m-f,p-y,P-T).normalize(),n)r[4].setComponents(l,u,g,E).normalize(),r[5].setComponents(c-l,m-u,p-g,P-E).normalize();else if(r[4].setComponents(c-l,m-u,p-g,P-E).normalize(),e===Rn)r[5].setComponents(c+l,m+u,p+g,P+E).normalize();else if(e===Nr)r[5].setComponents(l,u,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){bi.center.set(0,0,0);const e=TS.distanceTo(t.center);return bi.radius=.7071067811865476+e,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ws.x=r.normal.x>0?t.max.x:t.min.x,ws.y=r.normal.y>0?t.max.y:t.min.y,ws.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eu extends Fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qs=new N,Ys=new N,ah=new ve,Sr=new Zd,bs=new oa,Ka=new N,oh=new N;class AS extends Ge{constructor(t=new Ke,e=new eu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)qs.fromBufferAttribute(e,r-1),Ys.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=qs.distanceTo(Ys);t.setAttribute("lineDistance",new we(n,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),bs.radius+=s,t.ray.intersectsSphere(bs)===!1)return;ah.copy(r).invert(),Sr.copy(t.ray).applyMatrix4(ah);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),w=Math.min(d.count,a.start+a.count);for(let y=m,g=w-1;y<g;y+=c){const p=d.getX(y),x=d.getX(y+1),T=vs(this,t,Sr,l,p,x,y);T&&e.push(T)}if(this.isLineLoop){const y=d.getX(w-1),g=d.getX(m),p=vs(this,t,Sr,l,y,g,w-1);p&&e.push(p)}}else{const m=Math.max(0,a.start),w=Math.min(u.count,a.start+a.count);for(let y=m,g=w-1;y<g;y+=c){const p=vs(this,t,Sr,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){const y=vs(this,t,Sr,l,w-1,m,w-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vs(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(qs.fromBufferAttribute(o,r),Ys.fromBufferAttribute(o,s),e.distanceSqToSegment(qs,Ys,Ka,oh)>n)return;Ka.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ka);if(!(c<t.near||c>t.far))return{distance:c,point:oh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ch=new N,lh=new N;class RS extends AS{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)ch.fromBufferAttribute(e,r),lh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ch.distanceTo(lh);t.setAttribute("lineDistance",new we(n,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nu extends Xe{constructor(t=[],e=Ii,n,r,s,a,o,l,c,d){super(t,e,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class CS extends Xe{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Or extends Xe{constructor(t,e,n=In,r,s,a,o=De,l=De,c,d=$n,f=1){if(d!==$n&&d!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class PS extends Or{constructor(t,e=In,n=Ii,r,s,a=De,o=De,l,c=$n){const d={width:t,height:t,depth:1},f=[d,d,d,d,d,d];super(t,t,e,n,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class iu extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ur extends Ke{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let u=0,m=0;w("z","y","x",-1,-1,n,e,t,a,s,0),w("z","y","x",1,-1,n,e,-t,a,s,1),w("x","z","y",1,1,t,n,e,r,a,2),w("x","z","y",1,-1,t,n,-e,r,a,3),w("x","y","z",1,-1,t,e,n,r,s,4),w("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(f,2));function w(y,g,p,x,T,E,P,C,D,v,M){const G=E/D,I=P/v,H=E/2,V=P/2,Y=C/2,X=D+1,W=v+1;let q=0,rt=0;const et=new N;for(let st=0;st<W;st++){const _t=st*I-V;for(let ct=0;ct<X;ct++){const Ft=ct*G-H;et[y]=Ft*x,et[g]=_t*T,et[p]=Y,c.push(et.x,et.y,et.z),et[y]=0,et[g]=0,et[p]=C>0?1:-1,d.push(et.x,et.y,et.z),f.push(ct/D),f.push(1-st/v),q+=1}}for(let st=0;st<v;st++)for(let _t=0;_t<D;_t++){const ct=u+_t+X*st,Ft=u+_t+X*(st+1),ae=u+(_t+1)+X*(st+1),oe=u+(_t+1)+X*st;l.push(ct,Ft,oe),l.push(Ft,ae,oe),rt+=6}o.addGroup(m,rt,M),m+=rt,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class qc extends Ke{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new N,d=new Yt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const m=n+f/e*r;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[u]/t+1)/2,d.y=(a[u+1]/t+1)/2,l.push(d.x,d.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ks extends Ke{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],u=[],m=[];let w=0;const y=[],g=n/2;let p=0;x(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(m,2));function x(){const E=new N,P=new N;let C=0;const D=(e-t)/n;for(let v=0;v<=s;v++){const M=[],G=v/s,I=G*(e-t)+t;for(let H=0;H<=r;H++){const V=H/r,Y=V*l+o,X=Math.sin(Y),W=Math.cos(Y);P.x=I*X,P.y=-G*n+g,P.z=I*W,f.push(P.x,P.y,P.z),E.set(X,D,W).normalize(),u.push(E.x,E.y,E.z),m.push(V,1-G),M.push(w++)}y.push(M)}for(let v=0;v<r;v++)for(let M=0;M<s;M++){const G=y[M][v],I=y[M+1][v],H=y[M+1][v+1],V=y[M][v+1];(t>0||M!==0)&&(d.push(G,I,V),C+=3),(e>0||M!==s-1)&&(d.push(I,H,V),C+=3)}c.addGroup(p,C,0),p+=C}function T(E){const P=w,C=new Yt,D=new N;let v=0;const M=E===!0?t:e,G=E===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,g*G,0),u.push(0,G,0),m.push(.5,.5),w++;const I=w;for(let H=0;H<=r;H++){const Y=H/r*l+o,X=Math.cos(Y),W=Math.sin(Y);D.x=M*W,D.y=g*G,D.z=M*X,f.push(D.x,D.y,D.z),u.push(0,G,0),C.x=X*.5+.5,C.y=W*.5*G+.5,m.push(C.x,C.y),w++}for(let H=0;H<r;H++){const V=P+H,Y=I+H;E===!0?d.push(Y,Y+1,V):d.push(Y+1,Y,V),v+=3}c.addGroup(p,v,E===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _r extends Ke{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),c(n),d(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const T=new N,E=new N,P=new N;for(let C=0;C<e.length;C+=3)m(e[C+0],T),m(e[C+1],E),m(e[C+2],P),l(T,E,P,x)}function l(x,T,E,P){const C=P+1,D=[];for(let v=0;v<=C;v++){D[v]=[];const M=x.clone().lerp(E,v/C),G=T.clone().lerp(E,v/C),I=C-v;for(let H=0;H<=I;H++)H===0&&v===C?D[v][H]=M:D[v][H]=M.clone().lerp(G,H/I)}for(let v=0;v<C;v++)for(let M=0;M<2*(C-v)-1;M++){const G=Math.floor(M/2);M%2===0?(u(D[v][G+1]),u(D[v+1][G]),u(D[v][G])):(u(D[v][G+1]),u(D[v+1][G+1]),u(D[v+1][G]))}}function c(x){const T=new N;for(let E=0;E<s.length;E+=3)T.x=s[E+0],T.y=s[E+1],T.z=s[E+2],T.normalize().multiplyScalar(x),s[E+0]=T.x,s[E+1]=T.y,s[E+2]=T.z}function d(){const x=new N;for(let T=0;T<s.length;T+=3){x.x=s[T+0],x.y=s[T+1],x.z=s[T+2];const E=g(x)/2/Math.PI+.5,P=p(x)/Math.PI+.5;a.push(E,1-P)}w(),f()}function f(){for(let x=0;x<a.length;x+=6){const T=a[x+0],E=a[x+2],P=a[x+4],C=Math.max(T,E,P),D=Math.min(T,E,P);C>.9&&D<.1&&(T<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),P<.2&&(a[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function m(x,T){const E=x*3;T.x=t[E+0],T.y=t[E+1],T.z=t[E+2]}function w(){const x=new N,T=new N,E=new N,P=new N,C=new Yt,D=new Yt,v=new Yt;for(let M=0,G=0;M<s.length;M+=9,G+=6){x.set(s[M+0],s[M+1],s[M+2]),T.set(s[M+3],s[M+4],s[M+5]),E.set(s[M+6],s[M+7],s[M+8]),C.set(a[G+0],a[G+1]),D.set(a[G+2],a[G+3]),v.set(a[G+4],a[G+5]),P.copy(x).add(T).add(E).divideScalar(3);const I=g(P);y(C,G+0,x,I),y(D,G+2,T,I),y(v,G+4,E,I)}}function y(x,T,E,P){P<0&&x.x===1&&(a[T]=x.x-1),E.x===0&&E.z===0&&(a[T]=P/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.vertices,t.indices,t.radius,t.detail)}}class Yc extends _r{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yc(t.radius,t.detail)}}const xs=new N,ys=new N,$a=new N,Ss=new on;class IS extends Ke{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Fs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],f=new Array(3),u={},m=[];for(let w=0;w<l;w+=3){a?(c[0]=a.getX(w),c[1]=a.getX(w+1),c[2]=a.getX(w+2)):(c[0]=w,c[1]=w+1,c[2]=w+2);const{a:y,b:g,c:p}=Ss;if(y.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Ss.getNormal($a),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const T=(x+1)%3,E=f[x],P=f[T],C=Ss[d[x]],D=Ss[d[T]],v=`${E}_${P}`,M=`${P}_${E}`;M in u&&u[M]?($a.dot(u[M].normal)<=s&&(m.push(C.x,C.y,C.z),m.push(D.x,D.y,D.z)),u[M]=null):v in u||(u[v]={index0:c[x],index1:c[T],normal:$a.clone()})}}for(const w in u)if(u[w]){const{index0:y,index1:g}=u[w];xs.fromBufferAttribute(o,y),ys.fromBufferAttribute(o,g),m.push(xs.x,xs.y,xs.z),m.push(ys.x,ys.y,ys.z)}this.setAttribute("position",new we(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Kc extends _r{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kc(t.radius,t.detail)}}class $c extends _r{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $c(t.radius,t.detail)}}class ca extends Ke{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,f=t/o,u=e/l,m=[],w=[],y=[],g=[];for(let p=0;p<d;p++){const x=p*u-a;for(let T=0;T<c;T++){const E=T*f-s;w.push(E,-x,0),y.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const T=x+c*p,E=x+c*(p+1),P=x+1+c*(p+1),C=x+1+c*p;m.push(T,E,C),m.push(E,P,C)}this.setIndex(m),this.setAttribute("position",new we(w,3)),this.setAttribute("normal",new we(y,3)),this.setAttribute("uv",new we(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jc extends _r{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jc(t.radius,t.detail)}}class Zc extends Ke{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],d=[],f=[],u=new N,m=new N,w=new N;for(let y=0;y<=n;y++){const g=a+y/n*o;for(let p=0;p<=r;p++){const x=p/r*s;m.x=(t+e*Math.cos(g))*Math.cos(x),m.y=(t+e*Math.cos(g))*Math.sin(x),m.z=e*Math.sin(g),c.push(m.x,m.y,m.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),w.subVectors(m,u).normalize(),d.push(w.x,w.y,w.z),f.push(p/r),f.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=r;g++){const p=(r+1)*y+g-1,x=(r+1)*(y-1)+g-1,T=(r+1)*(y-1)+g,E=(r+1)*y+g;l.push(p,x,E),l.push(x,T,E)}this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function cr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=cr(i[e]);for(const r in n)t[r]=n[r]}return t}function DS(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ru(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const LS={clone:cr,merge:Ye};var FS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,US=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FS,this.fragmentShader=US,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=DS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class NS extends Ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ms extends Fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class OS extends Fi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class BS extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zS extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class su extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Ja=new ve,hh=new N,dh=new N;class HS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(hh),dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dh),e.updateMatrixWorld(),Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Nr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Es=new N,Ts=new Li,Sn=new N;class au extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Es,Ts,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Es,Ts,Sn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Es,Ts,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Es,Ts,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ai=new N,uh=new Yt,_h=new Yt;class an extends au{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oc*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,uh,_h),e.subVectors(_h,uh)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Qc extends au{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class GS extends HS{constructor(){super(new Qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fh extends su{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new GS}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class VS extends su{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ki=-90,$i=1;class kS extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(Ki,$i,t,e);r.layers=this.layers,this.add(r);const s=new an(Ki,$i,t,e);s.layers=this.layers,this.add(s);const a=new an(Ki,$i,t,e);a.layers=this.layers,this.add(a);const o=new an(Ki,$i,t,e);o.layers=this.layers,this.add(o);const l=new an(Ki,$i,t,e);l.layers=this.layers,this.add(l);const c=new an(Ki,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(f,u,m),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}}class WS extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function ph(i,t,e,n){const r=jS(n);switch(e){case Wd:return i*t;case Bc:return i*t/r.components*r.byteLength;case zc:return i*t/r.components*r.byteLength;case ar:return i*t*2/r.components*r.byteLength;case Hc:return i*t*2/r.components*r.byteLength;case jd:return i*t*3/r.components*r.byteLength;case bn:return i*t*4/r.components*r.byteLength;case Gc:return i*t*4/r.components*r.byteLength;case Ps:case Is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ds:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:case Do:return Math.max(i,16)*Math.max(t,8)/4;case Co:case Io:return Math.max(i,8)*Math.max(t,8)/2;case Lo:case Fo:case No:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Uo:case Bo:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case tc:case ec:case nc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ic:case rc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jS(i){switch(i){case rn:case Hd:return{byteLength:1,components:1};case Fr:case Gd:case Kn:return{byteLength:2,components:1};case Nc:case Oc:return{byteLength:2,components:4};case In:case Uc:case An:return{byteLength:4,components:1};case Vd:case kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ou(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function XS(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,d);else{f.sort((m,w)=>m.start-w.start);let u=0;for(let m=1;m<f.length;m++){const w=f[u],y=f[m];y.start<=w.start+w.count+1?w.count=Math.max(w.count,y.start+y.count-w.start):(++u,f[u]=y)}f.length=u+1;for(let m=0,w=f.length;m<w;m++){const y=f[m];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var qS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YS=`#ifdef USE_ALPHAHASH
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
#endif`,KS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QS=`#ifdef USE_AOMAP
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
#endif`,tM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eM=`#ifdef USE_BATCHING
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
#endif`,nM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aM=`#ifdef USE_IRIDESCENCE
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
#endif`,oM=`#ifdef USE_BUMPMAP
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
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mM=`#define PI 3.141592653589793
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
} // validated`,gM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wM=`vec3 transformedNormal = objectNormal;
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
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SM="gl_FragColor = linearToOutputTexel( gl_FragColor );",MM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FM=`#ifdef USE_GRADIENTMAP
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
}`,UM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BM=`uniform bool receiveShadow;
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
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,HM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WM=`PhysicalMaterial material;
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
#endif`,jM=`uniform sampler2D dfgLUT;
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
}`,XM=`
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
#endif`,qM=`#if defined( RE_IndirectDiffuse )
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
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nE=`#if defined( USE_POINTS_UV )
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
#endif`,iE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`#ifdef USE_MORPHTARGETS
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
#endif`,lE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pE=`#ifdef USE_NORMALMAP
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
#endif`,mE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ME=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IE=`float getShadowMask() {
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
}`,DE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LE=`#ifdef USE_SKINNING
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
#endif`,FE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UE=`#ifdef USE_SKINNING
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
#endif`,NE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HE=`#ifdef USE_TRANSMISSION
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
#endif`,GE=`#ifdef USE_TRANSMISSION
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
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qE=`uniform sampler2D t2D;
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
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`#include <common>
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
}`,QE=`#if DEPTH_PACKING == 3200
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
}`,tT=`#define DISTANCE
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
}`,eT=`#define DISTANCE
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`uniform float scale;
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
}`,sT=`uniform vec3 diffuse;
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
}`,aT=`#include <common>
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
}`,oT=`uniform vec3 diffuse;
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
}`,cT=`#define LAMBERT
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
}`,lT=`#define LAMBERT
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
}`,hT=`#define MATCAP
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
}`,dT=`#define MATCAP
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
}`,uT=`#define NORMAL
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
}`,_T=`#define NORMAL
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
}`,fT=`#define PHONG
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
}`,pT=`#define PHONG
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
}`,mT=`#define STANDARD
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
}`,gT=`#define STANDARD
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
}`,wT=`#define TOON
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
}`,bT=`#define TOON
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
}`,vT=`uniform float size;
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
}`,xT=`uniform vec3 diffuse;
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
}`,yT=`#include <common>
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
}`,ST=`uniform vec3 color;
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
}`,MT=`uniform float rotation;
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
}`,ET=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:qS,alphahash_pars_fragment:YS,alphamap_fragment:KS,alphamap_pars_fragment:$S,alphatest_fragment:JS,alphatest_pars_fragment:ZS,aomap_fragment:QS,aomap_pars_fragment:tM,batching_pars_vertex:eM,batching_vertex:nM,begin_vertex:iM,beginnormal_vertex:rM,bsdfs:sM,iridescence_fragment:aM,bumpmap_pars_fragment:oM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:lM,clipping_planes_pars_vertex:hM,clipping_planes_vertex:dM,color_fragment:uM,color_pars_fragment:_M,color_pars_vertex:fM,color_vertex:pM,common:mM,cube_uv_reflection_fragment:gM,defaultnormal_vertex:wM,displacementmap_pars_vertex:bM,displacementmap_vertex:vM,emissivemap_fragment:xM,emissivemap_pars_fragment:yM,colorspace_fragment:SM,colorspace_pars_fragment:MM,envmap_fragment:EM,envmap_common_pars_fragment:TM,envmap_pars_fragment:AM,envmap_pars_vertex:RM,envmap_physical_pars_fragment:zM,envmap_vertex:CM,fog_vertex:PM,fog_pars_vertex:IM,fog_fragment:DM,fog_pars_fragment:LM,gradientmap_pars_fragment:FM,lightmap_pars_fragment:UM,lights_lambert_fragment:NM,lights_lambert_pars_fragment:OM,lights_pars_begin:BM,lights_toon_fragment:HM,lights_toon_pars_fragment:GM,lights_phong_fragment:VM,lights_phong_pars_fragment:kM,lights_physical_fragment:WM,lights_physical_pars_fragment:jM,lights_fragment_begin:XM,lights_fragment_maps:qM,lights_fragment_end:YM,logdepthbuf_fragment:KM,logdepthbuf_pars_fragment:$M,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:ZM,map_fragment:QM,map_pars_fragment:tE,map_particle_fragment:eE,map_particle_pars_fragment:nE,metalnessmap_fragment:iE,metalnessmap_pars_fragment:rE,morphinstance_vertex:sE,morphcolor_vertex:aE,morphnormal_vertex:oE,morphtarget_pars_vertex:cE,morphtarget_vertex:lE,normal_fragment_begin:hE,normal_fragment_maps:dE,normal_pars_fragment:uE,normal_pars_vertex:_E,normal_vertex:fE,normalmap_pars_fragment:pE,clearcoat_normal_fragment_begin:mE,clearcoat_normal_fragment_maps:gE,clearcoat_pars_fragment:wE,iridescence_pars_fragment:bE,opaque_fragment:vE,packing:xE,premultiplied_alpha_fragment:yE,project_vertex:SE,dithering_fragment:ME,dithering_pars_fragment:EE,roughnessmap_fragment:TE,roughnessmap_pars_fragment:AE,shadowmap_pars_fragment:RE,shadowmap_pars_vertex:CE,shadowmap_vertex:PE,shadowmask_pars_fragment:IE,skinbase_vertex:DE,skinning_pars_vertex:LE,skinning_vertex:FE,skinnormal_vertex:UE,specularmap_fragment:NE,specularmap_pars_fragment:OE,tonemapping_fragment:BE,tonemapping_pars_fragment:zE,transmission_fragment:HE,transmission_pars_fragment:GE,uv_pars_fragment:VE,uv_pars_vertex:kE,uv_vertex:WE,worldpos_vertex:jE,background_vert:XE,background_frag:qE,backgroundCube_vert:YE,backgroundCube_frag:KE,cube_vert:$E,cube_frag:JE,depth_vert:ZE,depth_frag:QE,distance_vert:tT,distance_frag:eT,equirect_vert:nT,equirect_frag:iT,linedashed_vert:rT,linedashed_frag:sT,meshbasic_vert:aT,meshbasic_frag:oT,meshlambert_vert:cT,meshlambert_frag:lT,meshmatcap_vert:hT,meshmatcap_frag:dT,meshnormal_vert:uT,meshnormal_frag:_T,meshphong_vert:fT,meshphong_frag:pT,meshphysical_vert:mT,meshphysical_frag:gT,meshtoon_vert:wT,meshtoon_frag:bT,points_vert:vT,points_frag:xT,shadow_vert:yT,shadow_frag:ST,sprite_vert:MT,sprite_frag:ET},ft={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Tn={basic:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ye([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ye([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ye([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ye([ft.points,ft.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ye([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ye([ft.common,ft.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ye([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ye([ft.sprite,ft.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Ye([ft.common,ft.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Ye([ft.lights,ft.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Tn.physical={uniforms:Ye([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const As={r:0,b:0,g:0},vi=new Dn,TT=new ve;function AT(i,t,e,n,r,s){const a=new Wt(0);let o=r===!0?0:1,l,c,d=null,f=0,u=null;function m(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){const E=x.backgroundBlurriness>0;T=t.get(T,E)}return T}function w(x){let T=!1;const E=m(x);E===null?g(a,o):E&&E.isColor&&(g(E,1),T=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(x,T){const E=m(T);E&&(E.isCubeTexture||E.mapping===aa)?(c===void 0&&(c=new Ze(new ur(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:cr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),vi.copy(T.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(TT.makeRotationFromEuler(vi)),c.material.toneMapped=Qt.getTransfer(E.colorSpace)!==se,(d!==E||f!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ze(new ca(2,2),new Ln({name:"BackgroundMaterial",uniforms:cr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(E.colorSpace)!==se,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=E,f=E.version,u=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,T){x.getRGB(As,ru(i)),e.buffers.color.setClear(As.r,As.g,As.b,T,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,T=1){a.set(x),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:w,addToRenderList:y,dispose:p}}function RT(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(I,H,V,Y,X){let W=!1;const q=f(I,Y,V,H);s!==q&&(s=q,c(s.object)),W=m(I,Y,V,X),W&&w(I,Y,V,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,E(I,H,V,Y),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function d(I){return i.deleteVertexArray(I)}function f(I,H,V,Y){const X=Y.wireframe===!0;let W=n[H.id];W===void 0&&(W={},n[H.id]=W);const q=I.isInstancedMesh===!0?I.id:0;let rt=W[q];rt===void 0&&(rt={},W[q]=rt);let et=rt[V.id];et===void 0&&(et={},rt[V.id]=et);let st=et[X];return st===void 0&&(st=u(l()),et[X]=st),st}function u(I){const H=[],V=[],Y=[];for(let X=0;X<e;X++)H[X]=0,V[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:Y,object:I,attributes:{},index:null}}function m(I,H,V,Y){const X=s.attributes,W=H.attributes;let q=0;const rt=V.getAttributes();for(const et in rt)if(rt[et].location>=0){const _t=X[et];let ct=W[et];if(ct===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(ct=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(ct=I.instanceColor)),_t===void 0||_t.attribute!==ct||ct&&_t.data!==ct.data)return!0;q++}return s.attributesNum!==q||s.index!==Y}function w(I,H,V,Y){const X={},W=H.attributes;let q=0;const rt=V.getAttributes();for(const et in rt)if(rt[et].location>=0){let _t=W[et];_t===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(_t=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(_t=I.instanceColor));const ct={};ct.attribute=_t,_t&&_t.data&&(ct.data=_t.data),X[et]=ct,q++}s.attributes=X,s.attributesNum=q,s.index=Y}function y(){const I=s.newAttributes;for(let H=0,V=I.length;H<V;H++)I[H]=0}function g(I){p(I,0)}function p(I,H){const V=s.newAttributes,Y=s.enabledAttributes,X=s.attributeDivisors;V[I]=1,Y[I]===0&&(i.enableVertexAttribArray(I),Y[I]=1),X[I]!==H&&(i.vertexAttribDivisor(I,H),X[I]=H)}function x(){const I=s.newAttributes,H=s.enabledAttributes;for(let V=0,Y=H.length;V<Y;V++)H[V]!==I[V]&&(i.disableVertexAttribArray(V),H[V]=0)}function T(I,H,V,Y,X,W,q){q===!0?i.vertexAttribIPointer(I,H,V,X,W):i.vertexAttribPointer(I,H,V,Y,X,W)}function E(I,H,V,Y){y();const X=Y.attributes,W=V.getAttributes(),q=H.defaultAttributeValues;for(const rt in W){const et=W[rt];if(et.location>=0){let st=X[rt];if(st===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(st=I.instanceColor)),st!==void 0){const _t=st.normalized,ct=st.itemSize,Ft=t.get(st);if(Ft===void 0)continue;const ae=Ft.buffer,oe=Ft.type,Z=Ft.bytesPerElement,lt=oe===i.INT||oe===i.UNSIGNED_INT||st.gpuType===Uc;if(st.isInterleavedBufferAttribute){const ut=st.data,zt=ut.stride,Dt=st.offset;if(ut.isInstancedInterleavedBuffer){for(let Nt=0;Nt<et.locationSize;Nt++)p(et.location+Nt,ut.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Nt=0;Nt<et.locationSize;Nt++)g(et.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Nt=0;Nt<et.locationSize;Nt++)T(et.location+Nt,ct/et.locationSize,oe,_t,zt*Z,(Dt+ct/et.locationSize*Nt)*Z,lt)}else{if(st.isInstancedBufferAttribute){for(let ut=0;ut<et.locationSize;ut++)p(et.location+ut,st.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ut=0;ut<et.locationSize;ut++)g(et.location+ut);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ut=0;ut<et.locationSize;ut++)T(et.location+ut,ct/et.locationSize,oe,_t,ct*Z,ct/et.locationSize*ut*Z,lt)}}else if(q!==void 0){const _t=q[rt];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(et.location,_t);break;case 3:i.vertexAttrib3fv(et.location,_t);break;case 4:i.vertexAttrib4fv(et.location,_t);break;default:i.vertexAttrib1fv(et.location,_t)}}}}x()}function P(){M();for(const I in n){const H=n[I];for(const V in H){const Y=H[V];for(const X in Y){const W=Y[X];for(const q in W)d(W[q].object),delete W[q];delete Y[X]}}delete n[I]}}function C(I){if(n[I.id]===void 0)return;const H=n[I.id];for(const V in H){const Y=H[V];for(const X in Y){const W=Y[X];for(const q in W)d(W[q].object),delete W[q];delete Y[X]}}delete n[I.id]}function D(I){for(const H in n){const V=n[H];for(const Y in V){const X=V[Y];if(X[I.id]===void 0)continue;const W=X[I.id];for(const q in W)d(W[q].object),delete W[q];delete X[I.id]}}}function v(I){for(const H in n){const V=n[H],Y=I.isInstancedMesh===!0?I.id:0,X=V[Y];if(X!==void 0){for(const W in X){const q=X[W];for(const rt in q)d(q[rt].object),delete q[rt];delete X[W]}delete V[Y],Object.keys(V).length===0&&delete n[H]}}}function M(){G(),a=!0,s!==r&&(s=r,c(s.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:G,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfObject:v,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:g,disableUnusedAttributes:x}}function CT(i,t,e){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),e.update(d,n,f))}function o(c,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let m=0;for(let w=0;w<f;w++)m+=d[w];e.update(m,n,1)}function l(c,d,f,u){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let w=0;w<c.length;w++)a(c[w],d[w],u[w]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,f);let w=0;for(let y=0;y<f;y++)w+=d[y]*u[y];e.update(w,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function PT(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==bn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const v=D===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==rn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==An&&!v)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(Ut("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:w,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:E,maxSamples:P,samples:C}}function IT(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new yi,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||n!==0||r;return r=u,n=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=d(f,u,0)},this.setState=function(f,u,m){const w=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!r||w===null||w.length===0||s&&!g)s?d(null):c();else{const x=s?0:n,T=x*4;let E=p.clippingState||null;l.value=E,E=d(w,u,T,m);for(let P=0;P!==T;++P)E[P]=e[P];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,u,m,w){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,w!==!0||g===null){const p=m+y*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,E=m;T!==y;++T,E+=4)a.copy(f[T]).applyMatrix4(x,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}const li=4,mh=[.125,.215,.35,.446,.526,.582],Mi=20,DT=256,Mr=new Qc,gh=new Wt;let Za=null,Qa=0,to=0,eo=!1;const LT=new N;class wh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=LT}=s;Za=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Za,Qa,to),this._renderer.xr.enabled=eo,t.scissorTest=!1,Ji(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Za=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Kn,format:bn,colorSpace:or,depthBuffer:!1},r=bh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FT(s)),this._blurMaterial=NT(s,t,e),this._ggxMaterial=UT(s,t,e)}return r}_compileMaterial(t){const e=new Ze(new Ke,t);this._renderer.compile(e,Mr)}_sceneToCubeUV(t,e,n,r,s){const l=new an(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(gh),f.toneMapping=vn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ze(new ur,new Qd({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let p=!1;const x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,p=!0):(g.color.copy(gh),p=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[T],s.y,s.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[T]));const P=this._cubeSize;Ji(r,E*P,T>2?P:0,P,P),f.setRenderTarget(r),p&&f.render(y,l),f.render(t,l)}f.toneMapping=m,f.autoClear=u,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ii||t.mapping===sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ji(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Mr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=0+c*1.25,m=f*u,{_lodMax:w}=this,y=this._sizeLods[n],g=3*y*(n>w-li?n-w+li:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=w-e,Ji(s,g,p,3*y,2*y),r.setRenderTarget(s),r.render(o,Mr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=w-n,Ji(t,g,p,3*y,2*y),r.setRenderTarget(t),r.render(o,Mr)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ee("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,m=this._sizeLods[n]-1,w=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Mi-1),y=s/w,g=isFinite(s)?1+Math.floor(d*y):Mi;g>Mi&&Ut(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mi}`);const p=[];let x=0;for(let D=0;D<Mi;++D){const v=D/y,M=Math.exp(-v*v/2);p.push(M),D===0?x+=M:D<g&&(x+=2*M)}for(let D=0;D<p.length;D++)p[D]=p[D]/x;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=w,u.mipInt.value=T-n;const E=this._sizeLods[r],P=3*E*(r>T-li?r-T+li:0),C=4*(this._cubeSize-E);Ji(e,P,C,3*E,2*E),l.setRenderTarget(e),l.render(f,Mr)}}function FT(i){const t=[],e=[],n=[];let r=i;const s=i-li+1+mh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-li?l=mh[a-i+li-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,w=6,y=3,g=2,p=1,x=new Float32Array(y*w*m),T=new Float32Array(g*w*m),E=new Float32Array(p*w*m);for(let C=0;C<m;C++){const D=C%3*2/3-1,v=C>2?0:-1,M=[D,v,0,D+2/3,v,0,D+2/3,v+1,0,D,v,0,D+2/3,v+1,0,D,v+1,0];x.set(M,y*w*C),T.set(u,g*w*C);const G=[C,C,C,C,C,C];E.set(G,p*w*C)}const P=new Ke;P.setAttribute("position",new Pn(x,y)),P.setAttribute("uv",new Pn(T,g)),P.setAttribute("faceIndex",new Pn(E,p)),n.push(new Ze(P,null)),r>li&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function bh(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function UT(i,t,e){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:la(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function NT(i,t,e){const n=new Float32Array(Mi),r=new N(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:la(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function vh(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function xh(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function la(){return`

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
	`}class cu extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new nu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ur(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:kn});s.uniforms.tEquirect.value=e;const a=new Ze(r,s),o=e.minFilter;return e.minFilter===Ti&&(e.minFilter=je),new kS(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function OT(i){let t=new WeakMap,e=new WeakMap,n=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===Sa||m===Ma)if(t.has(u)){const w=t.get(u).texture;return o(w,u.mapping)}else{const w=u.image;if(w&&w.height>0){const y=new cu(w.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,w=m===Sa||m===Ma,y=m===Ii||m===sr;if(w||y){let g=e.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new wh(i)),g=w?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return w&&x&&x.height>0||y&&x&&l(x)?(n===null&&(n=new wh(i)),g=w?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,m){return m===Sa?u.mapping=Ii:m===Ma&&(u.mapping=sr),u}function l(u){let m=0;const w=6;for(let y=0;y<w;y++)u[y]!==void 0&&m++;return m===w}function c(u){const m=u.target;m.removeEventListener("dispose",c);const w=t.get(m);w!==void 0&&(t.delete(m),w.dispose())}function d(u){const m=u.target;m.removeEventListener("dispose",d);const w=e.get(m);w!==void 0&&(e.delete(m),w.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function BT(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Xs("WebGLRenderer: "+n+" extension not supported."),r}}}function zT(i,t,e,n){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const w in u.attributes)t.remove(u.attributes[w]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(f){const u=[],m=f.index,w=f.attributes.position;let y=0;if(w===void 0)return;if(m!==null){const x=m.array;y=m.version;for(let T=0,E=x.length;T<E;T+=3){const P=x[T+0],C=x[T+1],D=x[T+2];u.push(P,C,C,D,D,P)}}else{const x=w.array;y=w.version;for(let T=0,E=x.length/3-1;T<E;T+=3){const P=T+0,C=T+1,D=T+2;u.push(P,C,C,D,D,P)}}const g=new(w.count>=65535?Jd:$d)(u,1);g.version=y;const p=s.get(f);p&&t.remove(p),s.set(f,g)}function d(f){const u=s.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function HT(i,t,e){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,m){i.drawElements(n,m,s,u*a),e.update(m,n,1)}function c(u,m,w){w!==0&&(i.drawElementsInstanced(n,m,s,u*a,w),e.update(m,n,w))}function d(u,m,w){if(w===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,u,0,w);let g=0;for(let p=0;p<w;p++)g+=m[p];e.update(g,n,1)}function f(u,m,w,y){if(w===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/a,m[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,u,0,y,0,w);let p=0;for(let x=0;x<w;x++)p+=m[x]*y[x];e.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function GT(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:ee("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function VT(i,t,e){const n=new WeakMap,r=new ye;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,w=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),w===!0&&(T=2),y===!0&&(T=3);let E=o.attributes.position.count*T,P=1;E>t.maxTextureSize&&(P=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const C=new Float32Array(E*P*4*f),D=new qd(C,E,P,f);D.type=An,D.needsUpdate=!0;const v=T*4;for(let G=0;G<f;G++){const I=g[G],H=p[G],V=x[G],Y=E*P*4*G;for(let X=0;X<I.count;X++){const W=X*v;m===!0&&(r.fromBufferAttribute(I,X),C[Y+W+0]=r.x,C[Y+W+1]=r.y,C[Y+W+2]=r.z,C[Y+W+3]=0),w===!0&&(r.fromBufferAttribute(H,X),C[Y+W+4]=r.x,C[Y+W+5]=r.y,C[Y+W+6]=r.z,C[Y+W+7]=0),y===!0&&(r.fromBufferAttribute(V,X),C[Y+W+8]=r.x,C[Y+W+9]=r.y,C[Y+W+10]=r.z,C[Y+W+11]=V.itemSize===4?r.w:1)}}u={count:f,texture:D,size:new Yt(E,P)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];const w=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",w),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function kT(i,t,e,n,r){let s=new WeakMap;function a(c){const d=r.render.frame,f=c.geometry,u=t.get(c,f);if(s.get(u)!==d&&(t.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const WT={[Dd]:"LINEAR_TONE_MAPPING",[Ld]:"REINHARD_TONE_MAPPING",[Fd]:"CINEON_TONE_MAPPING",[Ud]:"ACES_FILMIC_TONE_MAPPING",[Od]:"AGX_TONE_MAPPING",[Bd]:"NEUTRAL_TONE_MAPPING",[Nd]:"CUSTOM_TONE_MAPPING"};function jT(i,t,e,n,r){const s=new Cn(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),a=new Cn(t,e,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),o=new Ke;o.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new we([0,2,0,0,2,0],2));const l=new NS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ze(o,l),d=new Qc(-1,1,1,-1,0,1);let f=null,u=null,m=!1,w,y=null,g=[],p=!1;this.setSize=function(x,T){s.setSize(x,T),a.setSize(x,T);for(let E=0;E<g.length;E++){const P=g[E];P.setSize&&P.setSize(x,T)}},this.setEffects=function(x){g=x,p=g.length>0&&g[0].isRenderPass===!0;const T=s.width,E=s.height;for(let P=0;P<g.length;P++){const C=g[P];C.setSize&&C.setSize(T,E)}},this.begin=function(x,T){if(m||x.toneMapping===vn&&g.length===0)return!1;if(y=T,T!==null){const E=T.width,P=T.height;(s.width!==E||s.height!==P)&&this.setSize(E,P)}return p===!1&&x.setRenderTarget(s),w=x.toneMapping,x.toneMapping=vn,!0},this.hasRenderPass=function(){return p},this.end=function(x,T){x.toneMapping=w,m=!0;let E=s,P=a;for(let C=0;C<g.length;C++){const D=g[C];if(D.enabled!==!1&&(D.render(x,P,E,T),D.needsSwap!==!1)){const v=E;E=P,P=v}}if(f!==x.outputColorSpace||u!==x.toneMapping){f=x.outputColorSpace,u=x.toneMapping,l.defines={},Qt.getTransfer(f)===se&&(l.defines.SRGB_TRANSFER="");const C=WT[u];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(y),x.render(c,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const lu=new Xe,cc=new Or(1,1),hu=new qd,du=new hS,uu=new nu,yh=[],Sh=[],Mh=new Float32Array(16),Eh=new Float32Array(9),Th=new Float32Array(4);function fr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=yh[r];if(s===void 0&&(s=new Float32Array(r),yh[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ha(i,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function XT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function YT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function KT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function $T(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Le(e,n))return;Th.set(n),i.uniformMatrix2fv(this.addr,!1,Th),Fe(e,n)}}function JT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Le(e,n))return;Eh.set(n),i.uniformMatrix3fv(this.addr,!1,Eh),Fe(e,n)}}function ZT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Le(e,n))return;Mh.set(n),i.uniformMatrix4fv(this.addr,!1,Mh),Fe(e,n)}}function QT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function eA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function nA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function iA(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function sA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function aA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function oA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(cc.compareFunction=e.isReversedDepthBuffer()?Wc:kc,s=cc):s=lu,e.setTexture2D(t||s,r)}function cA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||du,r)}function lA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||uu,r)}function hA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||hu,r)}function dA(i){switch(i){case 5126:return XT;case 35664:return qT;case 35665:return YT;case 35666:return KT;case 35674:return $T;case 35675:return JT;case 35676:return ZT;case 5124:case 35670:return QT;case 35667:case 35671:return tA;case 35668:case 35672:return eA;case 35669:case 35673:return nA;case 5125:return iA;case 36294:return rA;case 36295:return sA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return cA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return hA}}function uA(i,t){i.uniform1fv(this.addr,t)}function _A(i,t){const e=fr(t,this.size,2);i.uniform2fv(this.addr,e)}function fA(i,t){const e=fr(t,this.size,3);i.uniform3fv(this.addr,e)}function pA(i,t){const e=fr(t,this.size,4);i.uniform4fv(this.addr,e)}function mA(i,t){const e=fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gA(i,t){const e=fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wA(i,t){const e=fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bA(i,t){i.uniform1iv(this.addr,t)}function vA(i,t){i.uniform2iv(this.addr,t)}function xA(i,t){i.uniform3iv(this.addr,t)}function yA(i,t){i.uniform4iv(this.addr,t)}function SA(i,t){i.uniform1uiv(this.addr,t)}function MA(i,t){i.uniform2uiv(this.addr,t)}function EA(i,t){i.uniform3uiv(this.addr,t)}function TA(i,t){i.uniform4uiv(this.addr,t)}function AA(i,t,e){const n=this.cache,r=t.length,s=ha(e,r);Le(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=cc:a=lu;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function RA(i,t,e){const n=this.cache,r=t.length,s=ha(e,r);Le(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||du,s[a])}function CA(i,t,e){const n=this.cache,r=t.length,s=ha(e,r);Le(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||uu,s[a])}function PA(i,t,e){const n=this.cache,r=t.length,s=ha(e,r);Le(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||hu,s[a])}function IA(i){switch(i){case 5126:return uA;case 35664:return _A;case 35665:return fA;case 35666:return pA;case 35674:return mA;case 35675:return gA;case 35676:return wA;case 5124:case 35670:return bA;case 35667:case 35671:return vA;case 35668:case 35672:return xA;case 35669:case 35673:return yA;case 5125:return SA;case 36294:return MA;case 36295:return EA;case 36296:return TA;case 35678:case 36198:case 36298:case 36306:case 35682:return AA;case 35679:case 36299:case 36307:return RA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return PA}}class DA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dA(e.type)}}class LA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=IA(e.type)}}class FA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function Ah(i,t){i.seq.push(t),i.map[t.id]=t}function UA(i,t,e){const n=i.name,r=n.length;for(no.lastIndex=0;;){const s=no.exec(n),a=no.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ah(e,c===void 0?new DA(o,i,t):new LA(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new FA(o),Ah(e,f)),e=f}}}class Us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);UA(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Rh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const NA=37297;let OA=0;function BA(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ch=new Ht;function zA(i){Qt._getMatrix(Ch,Qt.workingColorSpace,i);const t=`mat3( ${Ch.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Ws:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ph(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+BA(i.getShaderSource(t),o)}else return s}function HA(i,t){const e=zA(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const GA={[Dd]:"Linear",[Ld]:"Reinhard",[Fd]:"Cineon",[Ud]:"ACESFilmic",[Od]:"AgX",[Bd]:"Neutral",[Nd]:"Custom"};function VA(i,t){const e=GA[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rs=new N;function kA(){Qt.getLuminanceCoefficients(Rs);const i=Rs.x.toFixed(4),t=Rs.y.toFixed(4),e=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function jA(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function XA(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ar(i){return i!==""}function Ih(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qA=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(i){return i.replace(qA,KA)}const YA=new Map;function KA(i,t){let e=Vt[t];if(e===void 0){const n=YA.get(t);if(n!==void 0)e=Vt[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lc(e)}const $A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(i){return i.replace($A,JA)}function JA(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const ZA={[Cs]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function QA(i){return ZA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tR={[Ii]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE",[aa]:"ENVMAP_TYPE_CUBE_UV"};function eR(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":tR[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const nR={[sr]:"ENVMAP_MODE_REFRACTION"};function iR(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nR[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rR={[Id]:"ENVMAP_BLENDING_MULTIPLY",[ky]:"ENVMAP_BLENDING_MIX",[Wy]:"ENVMAP_BLENDING_ADD"};function sR(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":rR[i.combine]||"ENVMAP_BLENDING_NONE"}function aR(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function oR(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=QA(e),c=eR(e),d=iR(e),f=sR(e),u=aR(e),m=WA(e),w=jA(s),y=r.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ar).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(g=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==vn?VA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,HA("linearToOutputTexel",e.outputColorSpace),kA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),a=lc(a),a=Ih(a,e),a=Dh(a,e),o=lc(o),o=Ih(o,e),o=Dh(o,e),a=Lh(a),o=Lh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=x+g+a,E=x+p+o,P=Rh(r,r.VERTEX_SHADER,T),C=Rh(r,r.FRAGMENT_SHADER,E);r.attachShader(y,P),r.attachShader(y,C),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function D(I){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(y)||"",V=r.getShaderInfoLog(P)||"",Y=r.getShaderInfoLog(C)||"",X=H.trim(),W=V.trim(),q=Y.trim();let rt=!0,et=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,P,C);else{const st=Ph(r,P,"vertex"),_t=Ph(r,C,"fragment");ee("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+st+`
`+_t)}else X!==""?Ut("WebGLProgram: Program Info Log:",X):(W===""||q==="")&&(et=!1);et&&(I.diagnostics={runnable:rt,programLog:X,vertexShader:{log:W,prefix:g},fragmentShader:{log:q,prefix:p}})}r.deleteShader(P),r.deleteShader(C),v=new Us(r,y),M=XA(r,y)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(y,NA)),G},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=OA++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=C,this}let cR=0;class lR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hR(t),e.set(t,n)),n}}class hR{constructor(t){this.id=cR++,this.code=t,this.usedTimes=0}}function dR(i,t,e,n,r,s){const a=new Yd,o=new lR,l=new Set,c=[],d=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,M,G,I,H){const V=I.fog,Y=H.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,q=t.get(v.envMap||X,W),rt=q&&q.mapping===aa?q.image.height:null,et=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ut("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const st=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_t=st!==void 0?st.length:0;let ct=0;Y.morphAttributes.position!==void 0&&(ct=1),Y.morphAttributes.normal!==void 0&&(ct=2),Y.morphAttributes.color!==void 0&&(ct=3);let Ft,ae,oe,Z;if(et){const re=Tn[et];Ft=re.vertexShader,ae=re.fragmentShader}else Ft=v.vertexShader,ae=v.fragmentShader,o.update(v),oe=o.getVertexShaderID(v),Z=o.getFragmentShaderID(v);const lt=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),zt=H.isInstancedMesh===!0,Dt=H.isBatchedMesh===!0,Nt=!!v.map,Ue=!!v.matcap,Zt=!!q,ie=!!v.aoMap,ue=!!v.lightMap,jt=!!v.bumpMap,Se=!!v.normalMap,L=!!v.displacementMap,Ae=!!v.emissiveMap,ne=!!v.metalnessMap,fe=!!v.roughnessMap,Et=v.anisotropy>0,A=v.clearcoat>0,b=v.dispersion>0,B=v.iridescence>0,Q=v.sheen>0,tt=v.transmission>0,J=Et&&!!v.anisotropyMap,vt=A&&!!v.clearcoatMap,ht=A&&!!v.clearcoatNormalMap,Pt=A&&!!v.clearcoatRoughnessMap,Lt=B&&!!v.iridescenceMap,nt=B&&!!v.iridescenceThicknessMap,at=Q&&!!v.sheenColorMap,xt=Q&&!!v.sheenRoughnessMap,St=!!v.specularMap,gt=!!v.specularColorMap,Xt=!!v.specularIntensityMap,U=tt&&!!v.transmissionMap,dt=tt&&!!v.thicknessMap,ot=!!v.gradientMap,bt=!!v.alphaMap,it=v.alphaTest>0,$=!!v.alphaHash,yt=!!v.extensions;let Ot=vn;v.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const pe={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:Ft,fragmentShader:ae,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Dt,batchingColor:Dt&&H._colorsTexture!==null,instancing:zt,instancingColor:zt&&H.instanceColor!==null,instancingMorph:zt&&H.morphTexture!==null,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:or,alphaToCoverage:!!v.alphaToCoverage,map:Nt,matcap:Ue,envMap:Zt,envMapMode:Zt&&q.mapping,envMapCubeUVHeight:rt,aoMap:ie,lightMap:ue,bumpMap:jt,normalMap:Se,displacementMap:L,emissiveMap:Ae,normalMapObjectSpace:Se&&v.normalMapType===qy,normalMapTangentSpace:Se&&v.normalMapType===Vc,metalnessMap:ne,roughnessMap:fe,anisotropy:Et,anisotropyMap:J,clearcoat:A,clearcoatMap:vt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Pt,dispersion:b,iridescence:B,iridescenceMap:Lt,iridescenceThicknessMap:nt,sheen:Q,sheenColorMap:at,sheenRoughnessMap:xt,specularMap:St,specularColorMap:gt,specularIntensityMap:Xt,transmission:tt,transmissionMap:U,thicknessMap:dt,gradientMap:ot,opaque:v.transparent===!1&&v.blending===Zi&&v.alphaToCoverage===!1,alphaMap:bt,alphaTest:it,alphaHash:$,combine:v.combine,mapUv:Nt&&w(v.map.channel),aoMapUv:ie&&w(v.aoMap.channel),lightMapUv:ue&&w(v.lightMap.channel),bumpMapUv:jt&&w(v.bumpMap.channel),normalMapUv:Se&&w(v.normalMap.channel),displacementMapUv:L&&w(v.displacementMap.channel),emissiveMapUv:Ae&&w(v.emissiveMap.channel),metalnessMapUv:ne&&w(v.metalnessMap.channel),roughnessMapUv:fe&&w(v.roughnessMap.channel),anisotropyMapUv:J&&w(v.anisotropyMap.channel),clearcoatMapUv:vt&&w(v.clearcoatMap.channel),clearcoatNormalMapUv:ht&&w(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&w(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&w(v.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&w(v.iridescenceThicknessMap.channel),sheenColorMapUv:at&&w(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&w(v.sheenRoughnessMap.channel),specularMapUv:St&&w(v.specularMap.channel),specularColorMapUv:gt&&w(v.specularColorMap.channel),specularIntensityMapUv:Xt&&w(v.specularIntensityMap.channel),transmissionMapUv:U&&w(v.transmissionMap.channel),thicknessMapUv:dt&&w(v.thicknessMap.channel),alphaMapUv:bt&&w(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Se||Et),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(Nt||bt),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||Y.attributes.normal===void 0&&Se===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ut,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Nt&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===se,decodeVideoTextureEmissive:Ae&&v.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(v.emissiveMap.colorSpace)===se,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wn,flipSided:v.side===Qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:yt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&v.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return pe.vertexUv1s=l.has(1),pe.vertexUv2s=l.has(2),pe.vertexUv3s=l.has(3),l.clear(),pe}function g(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const G in v.defines)M.push(G),M.push(v.defines[G]);return v.isRawShaderMaterial===!1&&(p(M,v),x(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function p(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function x(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function T(v){const M=m[v.type];let G;if(M){const I=Tn[M];G=LS.clone(I.uniforms)}else G=v.uniforms;return G}function E(v,M){let G=d.get(M);return G!==void 0?++G.usedTimes:(G=new oR(i,M,v,r),c.push(G),d.set(M,G)),G}function P(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function C(v){o.remove(v)}function D(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:T,acquireProgram:E,releaseProgram:P,releaseShaderCache:C,programs:c,dispose:D}}function uR(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function _R(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Uh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,w,y,g,p){let x=i[t];return x===void 0?(x={id:u.id,object:u,geometry:m,material:w,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:p},i[t]=x):(x.id=u.id,x.object=u,x.geometry=m,x.material=w,x.materialVariant=a(u),x.groupOrder=y,x.renderOrder=u.renderOrder,x.z=g,x.group=p),t++,x}function l(u,m,w,y,g,p){const x=o(u,m,w,y,g,p);w.transmission>0?n.push(x):w.transparent===!0?r.push(x):e.push(x)}function c(u,m,w,y,g,p){const x=o(u,m,w,y,g,p);w.transmission>0?n.unshift(x):w.transparent===!0?r.unshift(x):e.unshift(x)}function d(u,m){e.length>1&&e.sort(u||_R),n.length>1&&n.sort(m||Uh),r.length>1&&r.sort(m||Uh)}function f(){for(let u=t,m=i.length;u<m;u++){const w=i[u];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:d}}function fR(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Nh,i.set(n,[a])):r>=s.length?(a=new Nh,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function pR(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Wt};break;case"SpotLight":e={position:new N,direction:new N,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function mR(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gR=0;function wR(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bR(i){const t=new pR,e=mR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new ve,a=new ve;function o(c){let d=0,f=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,w=0,y=0,g=0,p=0,x=0,T=0,E=0,P=0,C=0,D=0;c.sort(wR);for(let M=0,G=c.length;M<G;M++){const I=c[M],H=I.color,V=I.intensity,Y=I.distance;let X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ar?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=H.r*V,f+=H.g*V,u+=H.b*V;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],V);D++}else if(I.isDirectionalLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,rt=e.get(I);rt.shadowIntensity=q.intensity,rt.shadowBias=q.bias,rt.shadowNormalBias=q.normalBias,rt.shadowRadius=q.radius,rt.shadowMapSize=q.mapSize,n.directionalShadow[m]=rt,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=I.shadow.matrix,x++}n.directional[m]=W,m++}else if(I.isSpotLight){const W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(H).multiplyScalar(V),W.distance=Y,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[y]=W;const q=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,q.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[y]=q.matrix,I.castShadow){const rt=e.get(I);rt.shadowIntensity=q.intensity,rt.shadowBias=q.bias,rt.shadowNormalBias=q.normalBias,rt.shadowRadius=q.radius,rt.shadowMapSize=q.mapSize,n.spotShadow[y]=rt,n.spotShadowMap[y]=X,E++}y++}else if(I.isRectAreaLight){const W=t.get(I);W.color.copy(H).multiplyScalar(V),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=W,g++}else if(I.isPointLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const q=I.shadow,rt=e.get(I);rt.shadowIntensity=q.intensity,rt.shadowBias=q.bias,rt.shadowNormalBias=q.normalBias,rt.shadowRadius=q.radius,rt.shadowMapSize=q.mapSize,rt.shadowCameraNear=q.camera.near,rt.shadowCameraFar=q.camera.far,n.pointShadow[w]=rt,n.pointShadowMap[w]=X,n.pointShadowMatrix[w]=I.shadow.matrix,T++}n.point[w]=W,w++}else if(I.isHemisphereLight){const W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(V),W.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[p]=W,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const v=n.hash;(v.directionalLength!==m||v.pointLength!==w||v.spotLength!==y||v.rectAreaLength!==g||v.hemiLength!==p||v.numDirectionalShadows!==x||v.numPointShadows!==T||v.numSpotShadows!==E||v.numSpotMaps!==P||v.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=g,n.point.length=w,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,v.directionalLength=m,v.pointLength=w,v.spotLength=y,v.rectAreaLength=g,v.hemiLength=p,v.numDirectionalShadows=x,v.numPointShadows=T,v.numSpotShadows=E,v.numSpotMaps=P,v.numLightProbes=D,n.version=gR++)}function l(c,d){let f=0,u=0,m=0,w=0,y=0;const g=d.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const T=c[p];if(T.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),f++}else if(T.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),m++}else if(T.isRectAreaLight){const E=n.rectArea[w];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),w++}else if(T.isPointLight){const E=n.point[u];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),u++}else if(T.isHemisphereLight){const E=n.hemi[y];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:n}}function Oh(i){const t=new bR(i),e=[],n=[];function r(d){c.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function vR(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Oh(i),t.set(r,[o])):s>=a.length?(o=new Oh(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const xR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yR=`uniform sampler2D shadow_pass;
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
}`,SR=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],MR=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Bh=new ve,Er=new N,io=new N;function ER(i,t,e){let n=new Xc;const r=new Yt,s=new Yt,a=new ye,o=new BS,l=new zS,c={},d=e.maxTextureSize,f={[ui]:Qe,[Qe]:ui,[wn]:wn},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:xR,fragmentShader:yR}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const w=new Ke;w.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ze(w,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let p=this.type;this.render=function(C,D,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===My&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cs);const M=i.getRenderTarget(),G=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),H=i.state;H.setBlending(kn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const V=p!==this.type;V&&D.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(X=>X.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,X=C.length;Y<X;Y++){const W=C[Y],q=W.shadow;if(q===void 0){Ut("WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const rt=q.getFrameExtents();r.multiply(rt),s.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/rt.x),r.x=s.x*rt.x,q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/rt.y),r.y=s.y*rt.y,q.mapSize.y=s.y));const et=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=et,q.map===null||V===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Tr){if(W.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Cn(r.x,r.y,{format:ar,type:Kn,minFilter:je,magFilter:je,generateMipmaps:!1}),q.map.texture.name=W.name+".shadowMap",q.map.depthTexture=new Or(r.x,r.y,An),q.map.depthTexture.name=W.name+".shadowMapDepth",q.map.depthTexture.format=$n,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=De,q.map.depthTexture.magFilter=De}else W.isPointLight?(q.map=new cu(r.x),q.map.depthTexture=new PS(r.x,In)):(q.map=new Cn(r.x,r.y),q.map.depthTexture=new Or(r.x,r.y,In)),q.map.depthTexture.name=W.name+".shadowMap",q.map.depthTexture.format=$n,this.type===Cs?(q.map.depthTexture.compareFunction=et?Wc:kc,q.map.depthTexture.minFilter=je,q.map.depthTexture.magFilter=je):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=De,q.map.depthTexture.magFilter=De);q.camera.updateProjectionMatrix()}const st=q.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<st;_t++){if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,_t),i.clear();else{_t===0&&(i.setRenderTarget(q.map),i.clear());const ct=q.getViewport(_t);a.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),H.viewport(a)}if(W.isPointLight){const ct=q.camera,Ft=q.matrix,ae=W.distance||ct.far;ae!==ct.far&&(ct.far=ae,ct.updateProjectionMatrix()),Er.setFromMatrixPosition(W.matrixWorld),ct.position.copy(Er),io.copy(ct.position),io.add(SR[_t]),ct.up.copy(MR[_t]),ct.lookAt(io),ct.updateMatrixWorld(),Ft.makeTranslation(-Er.x,-Er.y,-Er.z),Bh.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Bh,ct.coordinateSystem,ct.reversedDepth)}else q.updateMatrices(W);n=q.getFrustum(),E(D,v,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===Tr&&x(q,v),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,G,I)};function x(C,D){const v=t.update(y);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Cn(r.x,r.y,{format:ar,type:Kn})),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(D,null,v,u,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(D,null,v,m,y,null)}function T(C,D,v,M){let G=null;const I=v.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)G=I;else if(G=v.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const H=G.uuid,V=D.uuid;let Y=c[H];Y===void 0&&(Y={},c[H]=Y);let X=Y[V];X===void 0&&(X=G.clone(),Y[V]=X,D.addEventListener("dispose",P)),G=X}if(G.visible=D.visible,G.wireframe=D.wireframe,M===Tr?G.side=D.shadowSide!==null?D.shadowSide:D.side:G.side=D.shadowSide!==null?D.shadowSide:f[D.side],G.alphaMap=D.alphaMap,G.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,G.map=D.map,G.clipShadows=D.clipShadows,G.clippingPlanes=D.clippingPlanes,G.clipIntersection=D.clipIntersection,G.displacementMap=D.displacementMap,G.displacementScale=D.displacementScale,G.displacementBias=D.displacementBias,G.wireframeLinewidth=D.wireframeLinewidth,G.linewidth=D.linewidth,v.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const H=i.properties.get(G);H.light=v}return G}function E(C,D,v,M,G){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&G===Tr)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,C.matrixWorld);const V=t.update(C),Y=C.material;if(Array.isArray(Y)){const X=V.groups;for(let W=0,q=X.length;W<q;W++){const rt=X[W],et=Y[rt.materialIndex];if(et&&et.visible){const st=T(C,et,M,G);C.onBeforeShadow(i,C,D,v,V,st,rt),i.renderBufferDirect(v,null,V,st,C,rt),C.onAfterShadow(i,C,D,v,V,st,rt)}}}else if(Y.visible){const X=T(C,Y,M,G);C.onBeforeShadow(i,C,D,v,V,X,null),i.renderBufferDirect(v,null,V,X,C,null),C.onAfterShadow(i,C,D,v,V,X,null)}}const H=C.children;for(let V=0,Y=H.length;V<Y;V++)E(H[V],D,v,M,G)}function P(C){C.target.removeEventListener("dispose",P);for(const v in c){const M=c[v],G=C.target.uuid;G in M&&(M[G].dispose(),delete M[G])}}}function TR(i,t){function e(){let U=!1;const dt=new ye;let ot=null;const bt=new ye(0,0,0,0);return{setMask:function(it){ot!==it&&!U&&(i.colorMask(it,it,it,it),ot=it)},setLocked:function(it){U=it},setClear:function(it,$,yt,Ot,pe){pe===!0&&(it*=Ot,$*=Ot,yt*=Ot),dt.set(it,$,yt,Ot),bt.equals(dt)===!1&&(i.clearColor(it,$,yt,Ot),bt.copy(dt))},reset:function(){U=!1,ot=null,bt.set(-1,0,0,0)}}}function n(){let U=!1,dt=!1,ot=null,bt=null,it=null;return{setReversed:function($){if(dt!==$){const yt=t.get("EXT_clip_control");$?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),dt=$;const Ot=it;it=null,this.setClear(Ot)}},getReversed:function(){return dt},setTest:function($){$?lt(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function($){ot!==$&&!U&&(i.depthMask($),ot=$)},setFunc:function($){if(dt&&($=iS[$]),bt!==$){switch($){case vo:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case yo:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case So:i.depthFunc(i.EQUAL);break;case Mo:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case To:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=$}},setLocked:function($){U=$},setClear:function($){it!==$&&(it=$,dt&&($=1-$),i.clearDepth($))},reset:function(){U=!1,ot=null,bt=null,it=null,dt=!1}}}function r(){let U=!1,dt=null,ot=null,bt=null,it=null,$=null,yt=null,Ot=null,pe=null;return{setTest:function(re){U||(re?lt(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(re){dt!==re&&!U&&(i.stencilMask(re),dt=re)},setFunc:function(re,Fn,Un){(ot!==re||bt!==Fn||it!==Un)&&(i.stencilFunc(re,Fn,Un),ot=re,bt=Fn,it=Un)},setOp:function(re,Fn,Un){($!==re||yt!==Fn||Ot!==Un)&&(i.stencilOp(re,Fn,Un),$=re,yt=Fn,Ot=Un)},setLocked:function(re){U=re},setClear:function(re){pe!==re&&(i.clearStencil(re),pe=re)},reset:function(){U=!1,dt=null,ot=null,bt=null,it=null,$=null,yt=null,Ot=null,pe=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let d={},f={},u=new WeakMap,m=[],w=null,y=!1,g=null,p=null,x=null,T=null,E=null,P=null,C=null,D=new Wt(0,0,0),v=0,M=!1,G=null,I=null,H=null,V=null,Y=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,q=0;const rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(rt)[1]),W=q>=1):rt.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),W=q>=2);let et=null,st={};const _t=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),Ft=new ye().fromArray(_t),ae=new ye().fromArray(ct);function oe(U,dt,ot,bt){const it=new Uint8Array(4),$=i.createTexture();i.bindTexture(U,$),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<ot;yt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(dt+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return $}const Z={};Z[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(rr),jt(!1),Se(Ol),lt(i.CULL_FACE),ie(kn);function lt(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function ut(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function zt(U,dt){return f[U]!==dt?(i.bindFramebuffer(U,dt),f[U]=dt,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=dt),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Dt(U,dt){let ot=m,bt=!1;if(U){ot=u.get(dt),ot===void 0&&(ot=[],u.set(dt,ot));const it=U.textures;if(ot.length!==it.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let $=0,yt=it.length;$<yt;$++)ot[$]=i.COLOR_ATTACHMENT0+$;ot.length=it.length,bt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,bt=!0);bt&&i.drawBuffers(ot)}function Nt(U){return w!==U?(i.useProgram(U),w=U,!0):!1}const Ue={[Si]:i.FUNC_ADD,[Ty]:i.FUNC_SUBTRACT,[Ay]:i.FUNC_REVERSE_SUBTRACT};Ue[Ry]=i.MIN,Ue[Cy]=i.MAX;const Zt={[Py]:i.ZERO,[Iy]:i.ONE,[Dy]:i.SRC_COLOR,[wo]:i.SRC_ALPHA,[By]:i.SRC_ALPHA_SATURATE,[Ny]:i.DST_COLOR,[Fy]:i.DST_ALPHA,[Ly]:i.ONE_MINUS_SRC_COLOR,[bo]:i.ONE_MINUS_SRC_ALPHA,[Oy]:i.ONE_MINUS_DST_COLOR,[Uy]:i.ONE_MINUS_DST_ALPHA,[zy]:i.CONSTANT_COLOR,[Hy]:i.ONE_MINUS_CONSTANT_COLOR,[Gy]:i.CONSTANT_ALPHA,[Vy]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(U,dt,ot,bt,it,$,yt,Ot,pe,re){if(U===kn){y===!0&&(ut(i.BLEND),y=!1);return}if(y===!1&&(lt(i.BLEND),y=!0),U!==Ey){if(U!==g||re!==M){if((p!==Si||E!==Si)&&(i.blendEquation(i.FUNC_ADD),p=Si,E=Si),re)switch(U){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",U);break}else switch(U){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zl:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",U);break}x=null,T=null,P=null,C=null,D.set(0,0,0),v=0,g=U,M=re}return}it=it||dt,$=$||ot,yt=yt||bt,(dt!==p||it!==E)&&(i.blendEquationSeparate(Ue[dt],Ue[it]),p=dt,E=it),(ot!==x||bt!==T||$!==P||yt!==C)&&(i.blendFuncSeparate(Zt[ot],Zt[bt],Zt[$],Zt[yt]),x=ot,T=bt,P=$,C=yt),(Ot.equals(D)===!1||pe!==v)&&(i.blendColor(Ot.r,Ot.g,Ot.b,pe),D.copy(Ot),v=pe),g=U,M=!1}function ue(U,dt){U.side===wn?ut(i.CULL_FACE):lt(i.CULL_FACE);let ot=U.side===Qe;dt&&(ot=!ot),jt(ot),U.blending===Zi&&U.transparent===!1?ie(kn):ie(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const bt=U.stencilWrite;o.setTest(bt),bt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(U){G!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),G=U)}function Se(U){U!==yy?(lt(i.CULL_FACE),U!==I&&(U===Ol?i.cullFace(i.BACK):U===Sy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),I=U}function L(U){U!==H&&(W&&i.lineWidth(U),H=U)}function Ae(U,dt,ot){U?(lt(i.POLYGON_OFFSET_FILL),(V!==dt||Y!==ot)&&(V=dt,Y=ot,a.getReversed()&&(dt=-dt),i.polygonOffset(dt,ot))):ut(i.POLYGON_OFFSET_FILL)}function ne(U){U?lt(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function fe(U){U===void 0&&(U=i.TEXTURE0+X-1),et!==U&&(i.activeTexture(U),et=U)}function Et(U,dt,ot){ot===void 0&&(et===null?ot=i.TEXTURE0+X-1:ot=et);let bt=st[ot];bt===void 0&&(bt={type:void 0,texture:void 0},st[ot]=bt),(bt.type!==U||bt.texture!==dt)&&(et!==ot&&(i.activeTexture(ot),et=ot),i.bindTexture(U,dt||Z[U]),bt.type=U,bt.texture=dt)}function A(){const U=st[et];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function Q(){try{i.texSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function tt(){try{i.texSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function vt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function ht(){try{i.texStorage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function Pt(){try{i.texStorage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function Lt(){try{i.texImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function nt(){try{i.texImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function at(U){Ft.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ft.copy(U))}function xt(U){ae.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ae.copy(U))}function St(U,dt){let ot=c.get(dt);ot===void 0&&(ot=new WeakMap,c.set(dt,ot));let bt=ot.get(U);bt===void 0&&(bt=i.getUniformBlockIndex(dt,U.name),ot.set(U,bt))}function gt(U,dt){const bt=c.get(dt).get(U);l.get(dt)!==bt&&(i.uniformBlockBinding(dt,bt,U.__bindingPointIndex),l.set(dt,bt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},et=null,st={},f={},u=new WeakMap,m=[],w=null,y=!1,g=null,p=null,x=null,T=null,E=null,P=null,C=null,D=new Wt(0,0,0),v=0,M=!1,G=null,I=null,H=null,V=null,Y=null,Ft.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:lt,disable:ut,bindFramebuffer:zt,drawBuffers:Dt,useProgram:Nt,setBlending:ie,setMaterial:ue,setFlipSided:jt,setCullFace:Se,setLineWidth:L,setPolygonOffset:Ae,setScissorTest:ne,activeTexture:fe,bindTexture:Et,unbindTexture:A,compressedTexImage2D:b,compressedTexImage3D:B,texImage2D:Lt,texImage3D:nt,updateUBOMapping:St,uniformBlockBinding:gt,texStorage2D:ht,texStorage3D:Pt,texSubImage2D:Q,texSubImage3D:tt,compressedTexSubImage2D:J,compressedTexSubImage3D:vt,scissor:at,viewport:xt,reset:Xt}}function AR(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,d=new WeakMap;let f;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(A,b){return m?new OffscreenCanvas(A,b):js("canvas")}function y(A,b,B){let Q=1;const tt=Et(A);if((tt.width>B||tt.height>B)&&(Q=B/Math.max(tt.width,tt.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(Q*tt.width),vt=Math.floor(Q*tt.height);f===void 0&&(f=w(J,vt));const ht=b?w(J,vt):f;return ht.width=J,ht.height=vt,ht.getContext("2d").drawImage(A,0,0,J,vt),Ut("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+vt+")."),ht}else return"data"in A&&Ut("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,b,B,Q,tt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=b;if(b===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),b===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),b===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),b===i.RGBA){const vt=tt?Ws:Qt.getTransfer(Q);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=vt===se?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(A,b){let B;return A?b===null||b===In||b===Ur?B=i.DEPTH24_STENCIL8:b===An?B=i.DEPTH32F_STENCIL8:b===Fr&&(B=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===In||b===Ur?B=i.DEPTH_COMPONENT24:b===An?B=i.DEPTH_COMPONENT32F:b===Fr&&(B=i.DEPTH_COMPONENT16),B}function P(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==De&&A.minFilter!==je?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function C(A){const b=A.target;b.removeEventListener("dispose",C),v(b),b.isVideoTexture&&d.delete(b)}function D(A){const b=A.target;b.removeEventListener("dispose",D),G(b)}function v(A){const b=n.get(A);if(b.__webglInit===void 0)return;const B=A.source,Q=u.get(B);if(Q){const tt=Q[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(A),Object.keys(Q).length===0&&u.delete(B)}n.remove(A)}function M(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const B=A.source,Q=u.get(B);delete Q[b.__cacheKey],a.memory.textures--}function G(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let tt=0;tt<b.__webglFramebuffer[Q].length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[Q][tt]);else i.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[Q]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=A.textures;for(let Q=0,tt=B.length;Q<tt;Q++){const J=n.get(B[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(B[Q])}n.remove(A)}let I=0;function H(){I=0}function V(){const A=I;return A>=r.maxTextures&&Ut("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function Y(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function X(A,b){const B=n.get(A);if(A.isVideoTexture&&ne(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const Q=A.image;if(Q===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,A,b);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function W(A,b){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Z(B,A,b);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function q(A,b){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Z(B,A,b);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function rt(A,b){const B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){lt(B,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}const et={[Ao]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},st={[De]:i.NEAREST,[jy]:i.NEAREST_MIPMAP_NEAREST,[ts]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},_t={[Yy]:i.NEVER,[Qy]:i.ALWAYS,[Ky]:i.LESS,[kc]:i.LEQUAL,[$y]:i.EQUAL,[Wc]:i.GEQUAL,[Jy]:i.GREATER,[Zy]:i.NOTEQUAL};function ct(A,b){if(b.type===An&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===je||b.magFilter===Ea||b.magFilter===ts||b.magFilter===Ti||b.minFilter===je||b.minFilter===Ea||b.minFilter===ts||b.minFilter===Ti)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,et[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,et[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,et[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,st[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,st[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,_t[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===De||b.minFilter!==ts&&b.minFilter!==Ti||b.type===An&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ft(A,b){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",C));const Q=b.source;let tt=u.get(Q);tt===void 0&&(tt={},u.set(Q,tt));const J=Y(b);if(J!==A.__cacheKey){tt[J]===void 0&&(tt[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[J].usedTimes++;const vt=tt[A.__cacheKey];vt!==void 0&&(tt[A.__cacheKey].usedTimes--,vt.usedTimes===0&&M(b)),A.__cacheKey=J,A.__webglTexture=tt[J].texture}return B}function ae(A,b,B){return Math.floor(Math.floor(A/B)/b)}function oe(A,b,B,Q){const J=A.updateRanges;if(J.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,B,Q,b.data);else{J.sort((nt,at)=>nt.start-at.start);let vt=0;for(let nt=1;nt<J.length;nt++){const at=J[vt],xt=J[nt],St=at.start+at.count,gt=ae(xt.start,b.width,4),Xt=ae(at.start,b.width,4);xt.start<=St+1&&gt===Xt&&ae(xt.start+xt.count-1,b.width,4)===gt?at.count=Math.max(at.count,xt.start+xt.count-at.start):(++vt,J[vt]=xt)}J.length=vt+1;const ht=i.getParameter(i.UNPACK_ROW_LENGTH),Pt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let nt=0,at=J.length;nt<at;nt++){const xt=J[nt],St=Math.floor(xt.start/4),gt=Math.ceil(xt.count/4),Xt=St%b.width,U=Math.floor(St/b.width),dt=gt,ot=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Xt,U,dt,ot,B,Q,b.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function Z(A,b,B){let Q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=i.TEXTURE_3D);const tt=Ft(A,b),J=b.source;e.bindTexture(Q,A.__webglTexture,i.TEXTURE0+B);const vt=n.get(J);if(J.version!==vt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const ht=Qt.getPrimaries(Qt.workingColorSpace),Pt=b.colorSpace===oi?null:Qt.getPrimaries(b.colorSpace),Lt=b.colorSpace===oi||ht===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let nt=y(b.image,!1,r.maxTextureSize);nt=fe(b,nt);const at=s.convert(b.format,b.colorSpace),xt=s.convert(b.type);let St=T(b.internalFormat,at,xt,b.colorSpace,b.isVideoTexture);ct(Q,b);let gt;const Xt=b.mipmaps,U=b.isVideoTexture!==!0,dt=vt.__version===void 0||tt===!0,ot=J.dataReady,bt=P(b,nt);if(b.isDepthTexture)St=E(b.format===Ai,b.type),dt&&(U?e.texStorage2D(i.TEXTURE_2D,1,St,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,St,nt.width,nt.height,0,at,xt,null));else if(b.isDataTexture)if(Xt.length>0){U&&dt&&e.texStorage2D(i.TEXTURE_2D,bt,St,Xt[0].width,Xt[0].height);for(let it=0,$=Xt.length;it<$;it++)gt=Xt[it],U?ot&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,gt.width,gt.height,at,xt,gt.data):e.texImage2D(i.TEXTURE_2D,it,St,gt.width,gt.height,0,at,xt,gt.data);b.generateMipmaps=!1}else U?(dt&&e.texStorage2D(i.TEXTURE_2D,bt,St,nt.width,nt.height),ot&&oe(b,nt,at,xt)):e.texImage2D(i.TEXTURE_2D,0,St,nt.width,nt.height,0,at,xt,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){U&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,St,Xt[0].width,Xt[0].height,nt.depth);for(let it=0,$=Xt.length;it<$;it++)if(gt=Xt[it],b.format!==bn)if(at!==null)if(U){if(ot)if(b.layerUpdates.size>0){const yt=ph(gt.width,gt.height,b.format,b.type);for(const Ot of b.layerUpdates){const pe=gt.data.subarray(Ot*yt/gt.data.BYTES_PER_ELEMENT,(Ot+1)*yt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Ot,gt.width,gt.height,1,at,pe)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,gt.width,gt.height,nt.depth,at,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,St,gt.width,gt.height,nt.depth,0,gt.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,gt.width,gt.height,nt.depth,at,xt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,St,gt.width,gt.height,nt.depth,0,at,xt,gt.data)}else{U&&dt&&e.texStorage2D(i.TEXTURE_2D,bt,St,Xt[0].width,Xt[0].height);for(let it=0,$=Xt.length;it<$;it++)gt=Xt[it],b.format!==bn?at!==null?U?ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,gt.width,gt.height,at,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,St,gt.width,gt.height,0,gt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ot&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,gt.width,gt.height,at,xt,gt.data):e.texImage2D(i.TEXTURE_2D,it,St,gt.width,gt.height,0,at,xt,gt.data)}else if(b.isDataArrayTexture)if(U){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,St,nt.width,nt.height,nt.depth),ot)if(b.layerUpdates.size>0){const it=ph(nt.width,nt.height,b.format,b.type);for(const $ of b.layerUpdates){const yt=nt.data.subarray($*it/nt.data.BYTES_PER_ELEMENT,($+1)*it/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,nt.width,nt.height,1,at,xt,yt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,at,xt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,nt.width,nt.height,nt.depth,0,at,xt,nt.data);else if(b.isData3DTexture)U?(dt&&e.texStorage3D(i.TEXTURE_3D,bt,St,nt.width,nt.height,nt.depth),ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,at,xt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,St,nt.width,nt.height,nt.depth,0,at,xt,nt.data);else if(b.isFramebufferTexture){if(dt)if(U)e.texStorage2D(i.TEXTURE_2D,bt,St,nt.width,nt.height);else{let it=nt.width,$=nt.height;for(let yt=0;yt<bt;yt++)e.texImage2D(i.TEXTURE_2D,yt,St,it,$,0,at,xt,null),it>>=1,$>>=1}}else if(Xt.length>0){if(U&&dt){const it=Et(Xt[0]);e.texStorage2D(i.TEXTURE_2D,bt,St,it.width,it.height)}for(let it=0,$=Xt.length;it<$;it++)gt=Xt[it],U?ot&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,at,xt,gt):e.texImage2D(i.TEXTURE_2D,it,St,at,xt,gt);b.generateMipmaps=!1}else if(U){if(dt){const it=Et(nt);e.texStorage2D(i.TEXTURE_2D,bt,St,it.width,it.height)}ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,xt,nt)}else e.texImage2D(i.TEXTURE_2D,0,St,at,xt,nt);g(b)&&p(Q),vt.__version=J.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function lt(A,b,B){if(b.image.length!==6)return;const Q=Ft(A,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const J=n.get(tt);if(tt.version!==J.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);const vt=Qt.getPrimaries(Qt.workingColorSpace),ht=b.colorSpace===oi?null:Qt.getPrimaries(b.colorSpace),Pt=b.colorSpace===oi||vt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Lt=b.isCompressedTexture||b.image[0].isCompressedTexture,nt=b.image[0]&&b.image[0].isDataTexture,at=[];for(let $=0;$<6;$++)!Lt&&!nt?at[$]=y(b.image[$],!0,r.maxCubemapSize):at[$]=nt?b.image[$].image:b.image[$],at[$]=fe(b,at[$]);const xt=at[0],St=s.convert(b.format,b.colorSpace),gt=s.convert(b.type),Xt=T(b.internalFormat,St,gt,b.colorSpace),U=b.isVideoTexture!==!0,dt=J.__version===void 0||Q===!0,ot=tt.dataReady;let bt=P(b,xt);ct(i.TEXTURE_CUBE_MAP,b);let it;if(Lt){U&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Xt,xt.width,xt.height);for(let $=0;$<6;$++){it=at[$].mipmaps;for(let yt=0;yt<it.length;yt++){const Ot=it[yt];b.format!==bn?St!==null?U?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,0,0,Ot.width,Ot.height,St,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,Xt,Ot.width,Ot.height,0,Ot.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,0,0,Ot.width,Ot.height,St,gt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,Xt,Ot.width,Ot.height,0,St,gt,Ot.data)}}}else{if(it=b.mipmaps,U&&dt){it.length>0&&bt++;const $=Et(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Xt,$.width,$.height)}for(let $=0;$<6;$++)if(nt){U?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,at[$].width,at[$].height,St,gt,at[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xt,at[$].width,at[$].height,0,St,gt,at[$].data);for(let yt=0;yt<it.length;yt++){const pe=it[yt].image[$].image;U?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,0,0,pe.width,pe.height,St,gt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,Xt,pe.width,pe.height,0,St,gt,pe.data)}}else{U?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,St,gt,at[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xt,St,gt,at[$]);for(let yt=0;yt<it.length;yt++){const Ot=it[yt];U?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,0,0,St,gt,Ot.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,Xt,St,gt,Ot.image[$])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),J.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ut(A,b,B,Q,tt,J){const vt=s.convert(B.format,B.colorSpace),ht=s.convert(B.type),Pt=T(B.internalFormat,vt,ht,B.colorSpace),Lt=n.get(b),nt=n.get(B);if(nt.__renderTarget=b,!Lt.__hasExternalTextures){const at=Math.max(1,b.width>>J),xt=Math.max(1,b.height>>J);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,Pt,at,xt,b.depth,0,vt,ht,null):e.texImage2D(tt,J,Pt,at,xt,0,vt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Ae(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,tt,nt.__webglTexture,0,L(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,tt,nt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(A,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const Q=b.depthTexture,tt=Q&&Q.isDepthTexture?Q.type:null,J=E(b.stencilBuffer,tt),vt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(b),J,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(b),J,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,J,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,A)}else{const Q=b.textures;for(let tt=0;tt<Q.length;tt++){const J=Q[tt],vt=s.convert(J.format,J.colorSpace),ht=s.convert(J.type),Pt=T(J.internalFormat,vt,ht,J.colorSpace);Ae(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(b),Pt,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(b),Pt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(A,b,B){const Q=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(b.depthTexture);if(tt.__renderTarget=b,(!tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ct(i.TEXTURE_CUBE_MAP,b.depthTexture);const Lt=s.convert(b.depthTexture.format),nt=s.convert(b.depthTexture.type);let at;b.depthTexture.format===$n?at=i.DEPTH_COMPONENT24:b.depthTexture.format===Ai&&(at=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,at,b.width,b.height,0,Lt,nt,null)}}else X(b.depthTexture,0);const J=tt.__webglTexture,vt=L(b),ht=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Pt=b.depthTexture.format===Ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===$n)Ae(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pt,ht,J,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,Pt,ht,J,0);else if(b.depthTexture.format===Ai)Ae(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pt,ht,J,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,Pt,ht,J,0);else throw new Error("Unknown depthTexture format")}function Nt(A){const b=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",tt)};Q.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=Q}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let Q=0;Q<6;Q++)Dt(b.__webglFramebuffer[Q],A,Q);else{const Q=A.texture.mipmaps;Q&&Q.length>0?Dt(b.__webglFramebuffer[0],A,0):Dt(b.__webglFramebuffer,A,0)}else if(B){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=i.createRenderbuffer(),zt(b.__webglDepthbuffer[Q],A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,J)}}else{const Q=A.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),zt(b.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,J)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(A,b,B){const Q=n.get(A);b!==void 0&&ut(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Nt(A)}function Zt(A){const b=A.texture,B=n.get(A),Q=n.get(b);A.addEventListener("dispose",D);const tt=A.textures,J=A.isWebGLCubeRenderTarget===!0,vt=tt.length>1;if(vt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=b.version,a.memory.textures++),J){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let Pt=0;Pt<b.mipmaps.length;Pt++)B.__webglFramebuffer[ht][Pt]=i.createFramebuffer()}else B.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)B.__webglFramebuffer[ht]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ht=0,Pt=tt.length;ht<Pt;ht++){const Lt=n.get(tt[ht]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ae(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){const Pt=tt[ht];B.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);const Lt=s.convert(Pt.format,Pt.colorSpace),nt=s.convert(Pt.type),at=T(Pt.internalFormat,Lt,nt,Pt.colorSpace,A.isXRRenderTarget===!0),xt=L(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,at,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ct(i.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)ut(B.__webglFramebuffer[ht][Pt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt);else ut(B.__webglFramebuffer[ht],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ht=0,Pt=tt.length;ht<Pt;ht++){const Lt=tt[ht],nt=n.get(Lt);let at=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,nt.__webglTexture),ct(at,Lt),ut(B.__webglFramebuffer,A,Lt,i.COLOR_ATTACHMENT0+ht,at,0),g(Lt)&&p(at)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Q.__webglTexture),ct(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)ut(B.__webglFramebuffer[Pt],A,b,i.COLOR_ATTACHMENT0,ht,Pt);else ut(B.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ht,0);g(b)&&p(ht),e.unbindTexture()}A.depthBuffer&&Nt(A)}function ie(A){const b=A.textures;for(let B=0,Q=b.length;B<Q;B++){const tt=b[B];if(g(tt)){const J=x(A),vt=n.get(tt).__webglTexture;e.bindTexture(J,vt),p(J),e.unbindTexture()}}}const ue=[],jt=[];function Se(A){if(A.samples>0){if(Ae(A)===!1){const b=A.textures,B=A.width,Q=A.height;let tt=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(A),ht=b.length>1;if(ht)for(let Lt=0;Lt<b.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);const Pt=A.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Lt=0;Lt<b.length;Lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Lt]);const nt=n.get(b[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,B,Q,0,0,B,Q,tt,i.NEAREST),l===!0&&(ue.length=0,jt.length=0,ue.push(i.COLOR_ATTACHMENT0+Lt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ue.push(J),jt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Lt=0;Lt<b.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Lt]);const nt=n.get(b[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function L(A){return Math.min(r.maxSamples,A.samples)}function Ae(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ne(A){const b=a.render.frame;d.get(A)!==b&&(d.set(A,b),A.update())}function fe(A,b){const B=A.colorSpace,Q=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==or&&B!==oi&&(Qt.getTransfer(B)===se?(Q!==bn||tt!==rn)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",B)),b}function Et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=rt,this.rebindTextures=Ue,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function RR(i,t){function e(n,r=oi){let s;const a=Qt.getTransfer(r);if(n===rn)return i.UNSIGNED_BYTE;if(n===Nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hd)return i.BYTE;if(n===Gd)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===Uc)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===Wd)return i.ALPHA;if(n===jd)return i.RGB;if(n===bn)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===Bc)return i.RED;if(n===zc)return i.RED_INTEGER;if(n===ar)return i.RG;if(n===Hc)return i.RG_INTEGER;if(n===Gc)return i.RGBA_INTEGER;if(n===Ps||n===Is||n===Ds||n===Ls)if(a===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Co||n===Po||n===Io||n===Do)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Co)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Po)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lo||n===Fo||n===Uo||n===No||n===Oo||n===Bo||n===zo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Lo||n===Fo)return a===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Uo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===No)return s.COMPRESSED_R11_EAC;if(n===Oo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Bo)return s.COMPRESSED_RG11_EAC;if(n===zo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ho||n===Go||n===Vo||n===ko||n===Wo||n===jo||n===Xo||n===qo||n===Yo||n===Ko||n===$o||n===Jo||n===Zo||n===Qo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ho)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Go)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tc||n===ec||n===nc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===tc)return a===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ic||n===rc||n===sc||n===ac)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ic)return s.COMPRESSED_RED_RGTC1_EXT;if(n===rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const CR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PR=`
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

}`;class IR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new iu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ln({vertexShader:CR,fragmentShader:PR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ze(new ca(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DR extends dr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,m=null,w=null;const y=typeof XRWebGLBinding<"u",g=new IR,p={},x=e.getContextAttributes();let T=null,E=null;const P=[],C=[],D=new Yt;let v=null;const M=new an;M.viewport=new ye;const G=new an;G.viewport=new ye;const I=[M,G],H=new WS;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let lt=P[Z];return lt===void 0&&(lt=new Da,P[Z]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Z){let lt=P[Z];return lt===void 0&&(lt=new Da,P[Z]=lt),lt.getGripSpace()},this.getHand=function(Z){let lt=P[Z];return lt===void 0&&(lt=new Da,P[Z]=lt),lt.getHandSpace()};function X(Z){const lt=C.indexOf(Z.inputSource);if(lt===-1)return;const ut=P[lt];ut!==void 0&&(ut.update(Z.inputSource,Z.frame,c||a),ut.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",q);for(let Z=0;Z<P.length;Z++){const lt=C[Z];lt!==null&&(C[Z]=null,P[Z].disconnect(lt))}V=null,Y=null,g.reset();for(const Z in p)delete p[Z];t.setRenderTarget(T),m=null,u=null,f=null,r=null,E=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",W),r.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(D),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,zt=null,Dt=null;x.depth&&(Dt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=x.stencil?Ai:$n,zt=x.stencil?Ur:In);const Nt={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Nt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new Cn(u.textureWidth,u.textureHeight,{format:bn,type:rn,depthTexture:new Or(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ut={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,ut),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Cn(m.framebufferWidth,m.framebufferHeight,{format:bn,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(Z){for(let lt=0;lt<Z.removed.length;lt++){const ut=Z.removed[lt],zt=C.indexOf(ut);zt>=0&&(C[zt]=null,P[zt].disconnect(ut))}for(let lt=0;lt<Z.added.length;lt++){const ut=Z.added[lt];let zt=C.indexOf(ut);if(zt===-1){for(let Nt=0;Nt<P.length;Nt++)if(Nt>=C.length){C.push(ut),zt=Nt;break}else if(C[Nt]===null){C[Nt]=ut,zt=Nt;break}if(zt===-1)break}const Dt=P[zt];Dt&&Dt.connect(ut)}}const rt=new N,et=new N;function st(Z,lt,ut){rt.setFromMatrixPosition(lt.matrixWorld),et.setFromMatrixPosition(ut.matrixWorld);const zt=rt.distanceTo(et),Dt=lt.projectionMatrix.elements,Nt=ut.projectionMatrix.elements,Ue=Dt[14]/(Dt[10]-1),Zt=Dt[14]/(Dt[10]+1),ie=(Dt[9]+1)/Dt[5],ue=(Dt[9]-1)/Dt[5],jt=(Dt[8]-1)/Dt[0],Se=(Nt[8]+1)/Nt[0],L=Ue*jt,Ae=Ue*Se,ne=zt/(-jt+Se),fe=ne*-jt;if(lt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(fe),Z.translateZ(ne),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Dt[10]===-1)Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Et=Ue+ne,A=Zt+ne,b=L-fe,B=Ae+(zt-fe),Q=ie*Zt/A*Et,tt=ue*Zt/A*Et;Z.projectionMatrix.makePerspective(b,B,Q,tt,Et,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function _t(Z,lt){lt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(lt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let lt=Z.near,ut=Z.far;g.texture!==null&&(g.depthNear>0&&(lt=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),H.near=G.near=M.near=lt,H.far=G.far=M.far=ut,(V!==H.near||Y!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),V=H.near,Y=H.far),H.layers.mask=Z.layers.mask|6,M.layers.mask=H.layers.mask&-5,G.layers.mask=H.layers.mask&-3;const zt=Z.parent,Dt=H.cameras;_t(H,zt);for(let Nt=0;Nt<Dt.length;Nt++)_t(Dt[Nt],zt);Dt.length===2?st(H,M,G):H.projectionMatrix.copy(M.projectionMatrix),ct(Z,H,zt)};function ct(Z,lt,ut){ut===null?Z.matrix.copy(lt.matrixWorld):(Z.matrix.copy(ut.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(lt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=oc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(Z){return p[Z]};let Ft=null;function ae(Z,lt){if(d=lt.getViewerPose(c||a),w=lt,d!==null){const ut=d.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let zt=!1;ut.length!==H.cameras.length&&(H.cameras.length=0,zt=!0);for(let Zt=0;Zt<ut.length;Zt++){const ie=ut[Zt];let ue=null;if(m!==null)ue=m.getViewport(ie);else{const Se=f.getViewSubImage(u,ie);ue=Se.viewport,Zt===0&&(t.setRenderTargetTextures(E,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(E))}let jt=I[Zt];jt===void 0&&(jt=new an,jt.layers.enable(Zt),jt.viewport=new ye,I[Zt]=jt),jt.matrix.fromArray(ie.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(ie.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ue.x,ue.y,ue.width,ue.height),Zt===0&&(H.matrix.copy(jt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),zt===!0&&H.cameras.push(jt)}const Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=n.getBinding();const Zt=f.getDepthInformation(ut[0]);Zt&&Zt.isValid&&Zt.texture&&g.init(Zt,r.renderState)}if(Dt&&Dt.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let Zt=0;Zt<ut.length;Zt++){const ie=ut[Zt].camera;if(ie){let ue=p[ie];ue||(ue=new iu,p[ie]=ue);const jt=f.getCameraImage(ie);ue.sourceTexture=jt}}}}for(let ut=0;ut<P.length;ut++){const zt=C[ut],Dt=P[ut];zt!==null&&Dt!==void 0&&Dt.update(zt,lt,c||a)}Ft&&Ft(Z,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),w=null}const oe=new ou;oe.setAnimationLoop(ae),this.setAnimationLoop=function(Z){Ft=Z},this.dispose=function(){}}}const xi=new Dn,LR=new ve;function FR(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ru(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,x,T,E){p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&m(g,p,E)):p.isMeshMatcapMaterial?(s(g,p),w(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),y(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),T=x.envMap,E=x.envMapRotation;T&&(g.envMap.value=T,xi.copy(E),xi.x*=-1,xi.y*=-1,xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),g.envMapRotation.value.setFromMatrix4(LR.makeRotationFromEuler(xi)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function UR(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){const E=T.program;n.uniformBlockBinding(x,E)}function c(x,T){let E=r[x.id];E===void 0&&(w(x),E=d(x),r[x.id]=E,x.addEventListener("dispose",g));const P=T.program;n.updateUBOMapping(x,P);const C=t.render.frame;s[x.id]!==C&&(u(x),s[x.id]=C)}function d(x){const T=f();x.__bindingPointIndex=T;const E=i.createBuffer(),P=x.__size,C=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const T=r[x.id],E=x.uniforms,P=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,D=E.length;C<D;C++){const v=Array.isArray(E[C])?E[C]:[E[C]];for(let M=0,G=v.length;M<G;M++){const I=v[M];if(m(I,C,M,P)===!0){const H=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let X=0;X<V.length;X++){const W=V[X],q=y(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+Y,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,Y),Y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,T,E,P){const C=x.value,D=T+"_"+E;if(P[D]===void 0)return typeof C=="number"||typeof C=="boolean"?P[D]=C:P[D]=C.clone(),!0;{const v=P[D];if(typeof C=="number"||typeof C=="boolean"){if(v!==C)return P[D]=C,!0}else if(v.equals(C)===!1)return v.copy(C),!0}return!1}function w(x){const T=x.uniforms;let E=0;const P=16;for(let D=0,v=T.length;D<v;D++){const M=Array.isArray(T[D])?T[D]:[T[D]];for(let G=0,I=M.length;G<I;G++){const H=M[G],V=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,X=V.length;Y<X;Y++){const W=V[Y],q=y(W),rt=E%P,et=rt%q.boundary,st=rt+et;E+=et,st!==0&&P-st<q.storage&&(E+=P-st),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=q.storage}}}const C=E%P;return C>0&&(E+=P-C),x.__size=E,x.__cache={},this}function y(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ut("WebGLRenderer: Unsupported uniform value type.",x),T}function g(x){const T=x.target;T.removeEventListener("dispose",g);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const NR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mn=null;function OR(){return Mn===null&&(Mn=new tu(NR,16,16,ar,Kn),Mn.name="DFG_LUT",Mn.minFilter=je,Mn.magFilter=je,Mn.wrapS=Vn,Mn.wrapT=Vn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class BR{constructor(t={}){const{canvas:e=eS(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=rn}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=a;const y=m,g=new Set([Gc,Hc,zc]),p=new Set([rn,In,Fr,Ur,Nc,Oc]),x=new Uint32Array(4),T=new Int32Array(4);let E=null,P=null;const C=[],D=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let G=!1;this._outputColorSpace=Je;let I=0,H=0,V=null,Y=-1,X=null;const W=new ye,q=new ye;let rt=null;const et=new Wt(0);let st=0,_t=e.width,ct=e.height,Ft=1,ae=null,oe=null;const Z=new ye(0,0,_t,ct),lt=new ye(0,0,_t,ct);let ut=!1;const zt=new Xc;let Dt=!1,Nt=!1;const Ue=new ve,Zt=new N,ie=new ye,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function Se(){return V===null?Ft:1}let L=n;function Ae(S,z){return e.getContext(S,z)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fc}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",pe,!1),L===null){const z="webgl2";if(L=Ae(z,S),L===null)throw Ae(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw ee("WebGLRenderer: "+S.message),S}let ne,fe,Et,A,b,B,Q,tt,J,vt,ht,Pt,Lt,nt,at,xt,St,gt,Xt,U,dt,ot,bt;function it(){ne=new BT(L),ne.init(),dt=new RR(L,ne),fe=new PT(L,ne,t,dt),Et=new TR(L,ne),fe.reversedDepthBuffer&&u&&Et.buffers.depth.setReversed(!0),A=new GT(L),b=new uR,B=new AR(L,ne,Et,b,fe,dt,A),Q=new OT(M),tt=new XS(L),ot=new RT(L,tt),J=new zT(L,tt,A,ot),vt=new kT(L,J,tt,ot,A),gt=new VT(L,fe,B),at=new IT(b),ht=new dR(M,Q,ne,fe,ot,at),Pt=new FR(M,b),Lt=new fR,nt=new vR(ne),St=new AT(M,Q,Et,vt,w,l),xt=new ER(M,vt,fe),bt=new UR(L,A,fe,Et),Xt=new CT(L,ne,A),U=new HT(L,ne,A),A.programs=ht.programs,M.capabilities=fe,M.extensions=ne,M.properties=b,M.renderLists=Lt,M.shadowMap=xt,M.state=Et,M.info=A}it(),y!==rn&&(v=new jT(y,e.width,e.height,r,s));const $=new DR(M,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=ne.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ne.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ft},this.setPixelRatio=function(S){S!==void 0&&(Ft=S,this.setSize(_t,ct,!1))},this.getSize=function(S){return S.set(_t,ct)},this.setSize=function(S,z,K=!0){if($.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=S,ct=z,e.width=Math.floor(S*Ft),e.height=Math.floor(z*Ft),K===!0&&(e.style.width=S+"px",e.style.height=z+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(_t*Ft,ct*Ft).floor()},this.setDrawingBufferSize=function(S,z,K){_t=S,ct=z,Ft=K,e.width=Math.floor(S*K),e.height=Math.floor(z*K),this.setViewport(0,0,S,z)},this.setEffects=function(S){if(y===rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let z=0;z<S.length;z++)if(S[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(W)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,z,K,j){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,z,K,j),Et.viewport(W.copy(Z).multiplyScalar(Ft).round())},this.getScissor=function(S){return S.copy(lt)},this.setScissor=function(S,z,K,j){S.isVector4?lt.set(S.x,S.y,S.z,S.w):lt.set(S,z,K,j),Et.scissor(q.copy(lt).multiplyScalar(Ft).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(S){Et.setScissorTest(ut=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){oe=S},this.getClearColor=function(S){return S.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,K=!0){let j=0;if(S){let k=!1;if(V!==null){const pt=V.texture.format;k=g.has(pt)}if(k){const pt=V.texture.type,wt=p.has(pt),mt=St.getClearColor(),Mt=St.getClearAlpha(),At=mt.r,Bt=mt.g,qt=mt.b;wt?(x[0]=At,x[1]=Bt,x[2]=qt,x[3]=Mt,L.clearBufferuiv(L.COLOR,0,x)):(T[0]=At,T[1]=Bt,T[2]=qt,T[3]=Mt,L.clearBufferiv(L.COLOR,0,T))}else j|=L.COLOR_BUFFER_BIT}z&&(j|=L.DEPTH_BUFFER_BIT),K&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),St.dispose(),Lt.dispose(),nt.dispose(),b.dispose(),Q.dispose(),vt.dispose(),ot.dispose(),bt.dispose(),ht.dispose(),$.dispose(),$.removeEventListener("sessionstart",rl),$.removeEventListener("sessionend",sl),fi.stop()};function yt(S){S.preventDefault(),jl("WebGLRenderer: Context Lost."),G=!0}function Ot(){jl("WebGLRenderer: Context Restored."),G=!1;const S=A.autoReset,z=xt.enabled,K=xt.autoUpdate,j=xt.needsUpdate,k=xt.type;it(),A.autoReset=S,xt.enabled=z,xt.autoUpdate=K,xt.needsUpdate=j,xt.type=k}function pe(S){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function re(S){const z=S.target;z.removeEventListener("dispose",re),Fn(z)}function Fn(S){Un(S),b.remove(S)}function Un(S){const z=b.get(S).programs;z!==void 0&&(z.forEach(function(K){ht.releaseProgram(K)}),S.isShaderMaterial&&ht.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,K,j,k,pt){z===null&&(z=ue);const wt=k.isMesh&&k.matrixWorld.determinant()<0,mt=yu(S,z,K,j,k);Et.setMaterial(j,wt);let Mt=K.index,At=1;if(j.wireframe===!0){if(Mt=J.getWireframeAttribute(K),Mt===void 0)return;At=2}const Bt=K.drawRange,qt=K.attributes.position;let Rt=Bt.start*At,ce=(Bt.start+Bt.count)*At;pt!==null&&(Rt=Math.max(Rt,pt.start*At),ce=Math.min(ce,(pt.start+pt.count)*At)),Mt!==null?(Rt=Math.max(Rt,0),ce=Math.min(ce,Mt.count)):qt!=null&&(Rt=Math.max(Rt,0),ce=Math.min(ce,qt.count));const Me=ce-Rt;if(Me<0||Me===1/0)return;ot.setup(k,j,mt,K,Mt);let xe,le=Xt;if(Mt!==null&&(xe=tt.get(Mt),le=U,le.setIndex(xe)),k.isMesh)j.wireframe===!0?(Et.setLineWidth(j.wireframeLinewidth*Se()),le.setMode(L.LINES)):le.setMode(L.TRIANGLES);else if(k.isLine){let Ve=j.linewidth;Ve===void 0&&(Ve=1),Et.setLineWidth(Ve*Se()),k.isLineSegments?le.setMode(L.LINES):k.isLineLoop?le.setMode(L.LINE_LOOP):le.setMode(L.LINE_STRIP)}else k.isPoints?le.setMode(L.POINTS):k.isSprite&&le.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Xs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))le.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ve=k._multiDrawStarts,Tt=k._multiDrawCounts,tn=k._multiDrawCount,te=Mt?tt.get(Mt).bytesPerElement:1,ln=b.get(j).currentProgram.getUniforms();for(let yn=0;yn<tn;yn++)ln.setValue(L,"_gl_DrawID",yn),le.render(Ve[yn]/te,Tt[yn])}else if(k.isInstancedMesh)le.renderInstances(Rt,Me,k.count);else if(K.isInstancedBufferGeometry){const Ve=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Tt=Math.min(K.instanceCount,Ve);le.renderInstances(Rt,Me,Tt)}else le.render(Rt,Me)};function il(S,z,K){S.transparent===!0&&S.side===wn&&S.forceSinglePass===!1?(S.side=Qe,S.needsUpdate=!0,Kr(S,z,K),S.side=ui,S.needsUpdate=!0,Kr(S,z,K),S.side=wn):Kr(S,z,K)}this.compile=function(S,z,K=null){K===null&&(K=S),P=nt.get(K),P.init(z),D.push(P),K.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(P.pushLight(k),k.castShadow&&P.pushShadow(k))}),S!==K&&S.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(P.pushLight(k),k.castShadow&&P.pushShadow(k))}),P.setupLights();const j=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pt=k.material;if(pt)if(Array.isArray(pt))for(let wt=0;wt<pt.length;wt++){const mt=pt[wt];il(mt,K,k),j.add(mt)}else il(pt,K,k),j.add(pt)}),P=D.pop(),j},this.compileAsync=function(S,z,K=null){const j=this.compile(S,z,K);return new Promise(k=>{function pt(){if(j.forEach(function(wt){b.get(wt).currentProgram.isReady()&&j.delete(wt)}),j.size===0){k(S);return}setTimeout(pt,10)}ne.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let da=null;function xu(S){da&&da(S)}function rl(){fi.stop()}function sl(){fi.start()}const fi=new ou;fi.setAnimationLoop(xu),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(S){da=S,$.setAnimationLoop(S),S===null?fi.stop():fi.start()},$.addEventListener("sessionstart",rl),$.addEventListener("sessionend",sl),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;const K=$.enabled===!0&&$.isPresenting===!0,j=v!==null&&(V===null||K)&&v.begin(M,V);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(z),z=$.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,z,V),P=nt.get(S,D.length),P.init(z),D.push(P),Ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),zt.setFromProjectionMatrix(Ue,Rn,z.reversedDepth),Nt=this.localClippingEnabled,Dt=at.init(this.clippingPlanes,Nt),E=Lt.get(S,C.length),E.init(),C.push(E),$.enabled===!0&&$.isPresenting===!0){const wt=M.xr.getDepthSensingMesh();wt!==null&&ua(wt,z,-1/0,M.sortObjects)}ua(S,z,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(ae,oe),jt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,jt&&St.addToRenderList(E,S),this.info.render.frame++,Dt===!0&&at.beginShadows();const k=P.state.shadowsArray;if(xt.render(k,S,z),Dt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&v.hasRenderPass())===!1){const wt=E.opaque,mt=E.transmissive;if(P.setupLights(),z.isArrayCamera){const Mt=z.cameras;if(mt.length>0)for(let At=0,Bt=Mt.length;At<Bt;At++){const qt=Mt[At];ol(wt,mt,S,qt)}jt&&St.render(S);for(let At=0,Bt=Mt.length;At<Bt;At++){const qt=Mt[At];al(E,S,qt,qt.viewport)}}else mt.length>0&&ol(wt,mt,S,z),jt&&St.render(S),al(E,S,z)}V!==null&&H===0&&(B.updateMultisampleRenderTarget(V),B.updateRenderTargetMipmap(V)),j&&v.end(M),S.isScene===!0&&S.onAfterRender(M,S,z),ot.resetDefaultState(),Y=-1,X=null,D.pop(),D.length>0?(P=D[D.length-1],Dt===!0&&at.setGlobalState(M.clippingPlanes,P.state.camera)):P=null,C.pop(),C.length>0?E=C[C.length-1]:E=null};function ua(S,z,K,j){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)P.pushLight(S),S.castShadow&&P.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||zt.intersectsSprite(S)){j&&ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ue);const wt=vt.update(S),mt=S.material;mt.visible&&E.push(S,wt,mt,K,ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||zt.intersectsObject(S))){const wt=vt.update(S),mt=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ie.copy(S.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ie.copy(wt.boundingSphere.center)),ie.applyMatrix4(S.matrixWorld).applyMatrix4(Ue)),Array.isArray(mt)){const Mt=wt.groups;for(let At=0,Bt=Mt.length;At<Bt;At++){const qt=Mt[At],Rt=mt[qt.materialIndex];Rt&&Rt.visible&&E.push(S,wt,Rt,K,ie.z,qt)}}else mt.visible&&E.push(S,wt,mt,K,ie.z,null)}}const pt=S.children;for(let wt=0,mt=pt.length;wt<mt;wt++)ua(pt[wt],z,K,j)}function al(S,z,K,j){const{opaque:k,transmissive:pt,transparent:wt}=S;P.setupLightsView(K),Dt===!0&&at.setGlobalState(M.clippingPlanes,K),j&&Et.viewport(W.copy(j)),k.length>0&&Yr(k,z,K),pt.length>0&&Yr(pt,z,K),wt.length>0&&Yr(wt,z,K),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function ol(S,z,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[j.id]===void 0){const Rt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[j.id]=new Cn(1,1,{generateMipmaps:!0,type:Rt?Kn:rn,minFilter:Ti,samples:Math.max(4,fe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const pt=P.state.transmissionRenderTarget[j.id],wt=j.viewport||W;pt.setSize(wt.z*M.transmissionResolutionScale,wt.w*M.transmissionResolutionScale);const mt=M.getRenderTarget(),Mt=M.getActiveCubeFace(),At=M.getActiveMipmapLevel();M.setRenderTarget(pt),M.getClearColor(et),st=M.getClearAlpha(),st<1&&M.setClearColor(16777215,.5),M.clear(),jt&&St.render(K);const Bt=M.toneMapping;M.toneMapping=vn;const qt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),P.setupLightsView(j),Dt===!0&&at.setGlobalState(M.clippingPlanes,j),Yr(S,K,j),B.updateMultisampleRenderTarget(pt),B.updateRenderTargetMipmap(pt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ce=0,Me=z.length;ce<Me;ce++){const xe=z[ce],{object:le,geometry:Ve,material:Tt,group:tn}=xe;if(Tt.side===wn&&le.layers.test(j.layers)){const te=Tt.side;Tt.side=Qe,Tt.needsUpdate=!0,cl(le,K,j,Ve,Tt,tn),Tt.side=te,Tt.needsUpdate=!0,Rt=!0}}Rt===!0&&(B.updateMultisampleRenderTarget(pt),B.updateRenderTargetMipmap(pt))}M.setRenderTarget(mt,Mt,At),M.setClearColor(et,st),qt!==void 0&&(j.viewport=qt),M.toneMapping=Bt}function Yr(S,z,K){const j=z.isScene===!0?z.overrideMaterial:null;for(let k=0,pt=S.length;k<pt;k++){const wt=S[k],{object:mt,geometry:Mt,group:At}=wt;let Bt=wt.material;Bt.allowOverride===!0&&j!==null&&(Bt=j),mt.layers.test(K.layers)&&cl(mt,z,K,Mt,Bt,At)}}function cl(S,z,K,j,k,pt){S.onBeforeRender(M,z,K,j,k,pt),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(M,z,K,j,S,pt),k.transparent===!0&&k.side===wn&&k.forceSinglePass===!1?(k.side=Qe,k.needsUpdate=!0,M.renderBufferDirect(K,z,j,k,S,pt),k.side=ui,k.needsUpdate=!0,M.renderBufferDirect(K,z,j,k,S,pt),k.side=wn):M.renderBufferDirect(K,z,j,k,S,pt),S.onAfterRender(M,z,K,j,k,pt)}function Kr(S,z,K){z.isScene!==!0&&(z=ue);const j=b.get(S),k=P.state.lights,pt=P.state.shadowsArray,wt=k.state.version,mt=ht.getParameters(S,k.state,pt,z,K),Mt=ht.getProgramCacheKey(mt);let At=j.programs;j.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?z.environment:null,j.fog=z.fog;const Bt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;j.envMap=Q.get(S.envMap||j.environment,Bt),j.envMapRotation=j.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,At===void 0&&(S.addEventListener("dispose",re),At=new Map,j.programs=At);let qt=At.get(Mt);if(qt!==void 0){if(j.currentProgram===qt&&j.lightsStateVersion===wt)return hl(S,mt),qt}else mt.uniforms=ht.getUniforms(S),S.onBeforeCompile(mt,M),qt=ht.acquireProgram(mt,Mt),At.set(Mt,qt),j.uniforms=mt.uniforms;const Rt=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=at.uniform),hl(S,mt),j.needsLights=Mu(S),j.lightsStateVersion=wt,j.needsLights&&(Rt.ambientLightColor.value=k.state.ambient,Rt.lightProbe.value=k.state.probe,Rt.directionalLights.value=k.state.directional,Rt.directionalLightShadows.value=k.state.directionalShadow,Rt.spotLights.value=k.state.spot,Rt.spotLightShadows.value=k.state.spotShadow,Rt.rectAreaLights.value=k.state.rectArea,Rt.ltc_1.value=k.state.rectAreaLTC1,Rt.ltc_2.value=k.state.rectAreaLTC2,Rt.pointLights.value=k.state.point,Rt.pointLightShadows.value=k.state.pointShadow,Rt.hemisphereLights.value=k.state.hemi,Rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Rt.spotLightMatrix.value=k.state.spotLightMatrix,Rt.spotLightMap.value=k.state.spotLightMap,Rt.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=qt,j.uniformsList=null,qt}function ll(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=Us.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function hl(S,z){const K=b.get(S);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function yu(S,z,K,j,k){z.isScene!==!0&&(z=ue),B.resetTextureUnits();const pt=z.fog,wt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?z.environment:null,mt=V===null?M.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:or,Mt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,At=Q.get(j.envMap||wt,Mt),Bt=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qt=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Rt=!!K.morphAttributes.position,ce=!!K.morphAttributes.normal,Me=!!K.morphAttributes.color;let xe=vn;j.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(xe=M.toneMapping);const le=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ve=le!==void 0?le.length:0,Tt=b.get(j),tn=P.state.lights;if(Dt===!0&&(Nt===!0||S!==X)){const Ne=S===X&&j.id===Y;at.setState(j,S,Ne)}let te=!1;j.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==tn.state.version||Tt.outputColorSpace!==mt||k.isBatchedMesh&&Tt.batching===!1||!k.isBatchedMesh&&Tt.batching===!0||k.isBatchedMesh&&Tt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Tt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Tt.instancing===!1||!k.isInstancedMesh&&Tt.instancing===!0||k.isSkinnedMesh&&Tt.skinning===!1||!k.isSkinnedMesh&&Tt.skinning===!0||k.isInstancedMesh&&Tt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Tt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Tt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Tt.instancingMorph===!1&&k.morphTexture!==null||Tt.envMap!==At||j.fog===!0&&Tt.fog!==pt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==at.numPlanes||Tt.numIntersection!==at.numIntersection)||Tt.vertexAlphas!==Bt||Tt.vertexTangents!==qt||Tt.morphTargets!==Rt||Tt.morphNormals!==ce||Tt.morphColors!==Me||Tt.toneMapping!==xe||Tt.morphTargetsCount!==Ve)&&(te=!0):(te=!0,Tt.__version=j.version);let ln=Tt.currentProgram;te===!0&&(ln=Kr(j,z,k));let yn=!1,pi=!1,Ui=!1;const _e=ln.getUniforms(),He=Tt.uniforms;if(Et.useProgram(ln.program)&&(yn=!0,pi=!0,Ui=!0),j.id!==Y&&(Y=j.id,pi=!0),yn||X!==S){Et.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),_e.setValue(L,"projectionMatrix",S.projectionMatrix),_e.setValue(L,"viewMatrix",S.matrixWorldInverse);const Qn=_e.map.cameraPosition;Qn!==void 0&&Qn.setValue(L,Zt.setFromMatrixPosition(S.matrixWorld)),fe.logarithmicDepthBuffer&&_e.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_e.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),X!==S&&(X=S,pi=!0,Ui=!0)}if(Tt.needsLights&&(tn.state.directionalShadowMap.length>0&&_e.setValue(L,"directionalShadowMap",tn.state.directionalShadowMap,B),tn.state.spotShadowMap.length>0&&_e.setValue(L,"spotShadowMap",tn.state.spotShadowMap,B),tn.state.pointShadowMap.length>0&&_e.setValue(L,"pointShadowMap",tn.state.pointShadowMap,B)),k.isSkinnedMesh){_e.setOptional(L,k,"bindMatrix"),_e.setOptional(L,k,"bindMatrixInverse");const Ne=k.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),_e.setValue(L,"boneTexture",Ne.boneTexture,B))}k.isBatchedMesh&&(_e.setOptional(L,k,"batchingTexture"),_e.setValue(L,"batchingTexture",k._matricesTexture,B),_e.setOptional(L,k,"batchingIdTexture"),_e.setValue(L,"batchingIdTexture",k._indirectTexture,B),_e.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&_e.setValue(L,"batchingColorTexture",k._colorsTexture,B));const Zn=K.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&gt.update(k,K,ln),(pi||Tt.receiveShadow!==k.receiveShadow)&&(Tt.receiveShadow=k.receiveShadow,_e.setValue(L,"receiveShadow",k.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&z.environment!==null&&(He.envMapIntensity.value=z.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=OR()),pi&&(_e.setValue(L,"toneMappingExposure",M.toneMappingExposure),Tt.needsLights&&Su(He,Ui),pt&&j.fog===!0&&Pt.refreshFogUniforms(He,pt),Pt.refreshMaterialUniforms(He,j,Ft,ct,P.state.transmissionRenderTarget[S.id]),Us.upload(L,ll(Tt),He,B)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Us.upload(L,ll(Tt),He,B),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_e.setValue(L,"center",k.center),_e.setValue(L,"modelViewMatrix",k.modelViewMatrix),_e.setValue(L,"normalMatrix",k.normalMatrix),_e.setValue(L,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ne=j.uniformsGroups;for(let Qn=0,Ni=Ne.length;Qn<Ni;Qn++){const dl=Ne[Qn];bt.update(dl,ln),bt.bind(dl,ln)}}return ln}function Su(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Mu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(S,z,K){const j=b.get(S);j.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),b.get(S.texture).__webglTexture=z,b.get(S.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){const K=b.get(S);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0};const Eu=L.createFramebuffer();this.setRenderTarget=function(S,z=0,K=0){V=S,I=z,H=K;let j=null,k=!1,pt=!1;if(S){const mt=b.get(S);if(mt.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(L.FRAMEBUFFER,mt.__webglFramebuffer),W.copy(S.viewport),q.copy(S.scissor),rt=S.scissorTest,Et.viewport(W),Et.scissor(q),Et.setScissorTest(rt),Y=-1;return}else if(mt.__webglFramebuffer===void 0)B.setupRenderTarget(S);else if(mt.__hasExternalTextures)B.rebindTextures(S,b.get(S.texture).__webglTexture,b.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Bt=S.depthTexture;if(mt.__boundDepthTexture!==Bt){if(Bt!==null&&b.has(Bt)&&(S.width!==Bt.image.width||S.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(S)}}const Mt=S.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(pt=!0);const At=b.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(At[z])?j=At[z][K]:j=At[z],k=!0):S.samples>0&&B.useMultisampledRTT(S)===!1?j=b.get(S).__webglMultisampledFramebuffer:Array.isArray(At)?j=At[K]:j=At,W.copy(S.viewport),q.copy(S.scissor),rt=S.scissorTest}else W.copy(Z).multiplyScalar(Ft).floor(),q.copy(lt).multiplyScalar(Ft).floor(),rt=ut;if(K!==0&&(j=Eu),Et.bindFramebuffer(L.FRAMEBUFFER,j)&&Et.drawBuffers(S,j),Et.viewport(W),Et.scissor(q),Et.setScissorTest(rt),k){const mt=b.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,mt.__webglTexture,K)}else if(pt){const mt=z;for(let Mt=0;Mt<S.textures.length;Mt++){const At=b.get(S.textures[Mt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Mt,At.__webglTexture,K,mt)}}else if(S!==null&&K!==0){const mt=b.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mt.__webglTexture,K)}Y=-1},this.readRenderTargetPixels=function(S,z,K,j,k,pt,wt,mt=0){if(!(S&&S.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(Mt=Mt[wt]),Mt){Et.bindFramebuffer(L.FRAMEBUFFER,Mt);try{const At=S.textures[mt],Bt=At.format,qt=At.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt),!fe.textureFormatReadable(Bt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(qt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-j&&K>=0&&K<=S.height-k&&L.readPixels(z,K,j,k,dt.convert(Bt),dt.convert(qt),pt)}finally{const At=V!==null?b.get(V).__webglFramebuffer:null;Et.bindFramebuffer(L.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(S,z,K,j,k,pt,wt,mt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(Mt=Mt[wt]),Mt)if(z>=0&&z<=S.width-j&&K>=0&&K<=S.height-k){Et.bindFramebuffer(L.FRAMEBUFFER,Mt);const At=S.textures[mt],Bt=At.format,qt=At.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt),!fe.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.bufferData(L.PIXEL_PACK_BUFFER,pt.byteLength,L.STREAM_READ),L.readPixels(z,K,j,k,dt.convert(Bt),dt.convert(qt),0);const ce=V!==null?b.get(V).__webglFramebuffer:null;Et.bindFramebuffer(L.FRAMEBUFFER,ce);const Me=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await nS(L,Me,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pt),L.deleteBuffer(Rt),L.deleteSync(Me),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,K=0){const j=Math.pow(2,-K),k=Math.floor(S.image.width*j),pt=Math.floor(S.image.height*j),wt=z!==null?z.x:0,mt=z!==null?z.y:0;B.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,wt,mt,k,pt),Et.unbindTexture()};const Tu=L.createFramebuffer(),Au=L.createFramebuffer();this.copyTextureToTexture=function(S,z,K=null,j=null,k=0,pt=0){let wt,mt,Mt,At,Bt,qt,Rt,ce,Me;const xe=S.isCompressedTexture?S.mipmaps[pt]:S.image;if(K!==null)wt=K.max.x-K.min.x,mt=K.max.y-K.min.y,Mt=K.isBox3?K.max.z-K.min.z:1,At=K.min.x,Bt=K.min.y,qt=K.isBox3?K.min.z:0;else{const He=Math.pow(2,-k);wt=Math.floor(xe.width*He),mt=Math.floor(xe.height*He),S.isDataArrayTexture?Mt=xe.depth:S.isData3DTexture?Mt=Math.floor(xe.depth*He):Mt=1,At=0,Bt=0,qt=0}j!==null?(Rt=j.x,ce=j.y,Me=j.z):(Rt=0,ce=0,Me=0);const le=dt.convert(z.format),Ve=dt.convert(z.type);let Tt;z.isData3DTexture?(B.setTexture3D(z,0),Tt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(B.setTexture2DArray(z,0),Tt=L.TEXTURE_2D_ARRAY):(B.setTexture2D(z,0),Tt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const tn=L.getParameter(L.UNPACK_ROW_LENGTH),te=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ln=L.getParameter(L.UNPACK_SKIP_PIXELS),yn=L.getParameter(L.UNPACK_SKIP_ROWS),pi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);const Ui=S.isDataArrayTexture||S.isData3DTexture,_e=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){const He=b.get(S),Zn=b.get(z),Ne=b.get(He.__renderTarget),Qn=b.get(Zn.__renderTarget);Et.bindFramebuffer(L.READ_FRAMEBUFFER,Ne.__webglFramebuffer),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Ni=0;Ni<Mt;Ni++)Ui&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(S).__webglTexture,k,qt+Ni),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(z).__webglTexture,pt,Me+Ni)),L.blitFramebuffer(At,Bt,wt,mt,Rt,ce,wt,mt,L.DEPTH_BUFFER_BIT,L.NEAREST);Et.bindFramebuffer(L.READ_FRAMEBUFFER,null),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||b.has(S)){const He=b.get(S),Zn=b.get(z);Et.bindFramebuffer(L.READ_FRAMEBUFFER,Tu),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,Au);for(let Ne=0;Ne<Mt;Ne++)Ui?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,He.__webglTexture,k,qt+Ne):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,He.__webglTexture,k),_e?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zn.__webglTexture,pt,Me+Ne):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zn.__webglTexture,pt),k!==0?L.blitFramebuffer(At,Bt,wt,mt,Rt,ce,wt,mt,L.COLOR_BUFFER_BIT,L.NEAREST):_e?L.copyTexSubImage3D(Tt,pt,Rt,ce,Me+Ne,At,Bt,wt,mt):L.copyTexSubImage2D(Tt,pt,Rt,ce,At,Bt,wt,mt);Et.bindFramebuffer(L.READ_FRAMEBUFFER,null),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _e?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Tt,pt,Rt,ce,Me,wt,mt,Mt,le,Ve,xe.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Tt,pt,Rt,ce,Me,wt,mt,Mt,le,xe.data):L.texSubImage3D(Tt,pt,Rt,ce,Me,wt,mt,Mt,le,Ve,xe):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pt,Rt,ce,wt,mt,le,Ve,xe.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pt,Rt,ce,xe.width,xe.height,le,xe.data):L.texSubImage2D(L.TEXTURE_2D,pt,Rt,ce,wt,mt,le,Ve,xe);L.pixelStorei(L.UNPACK_ROW_LENGTH,tn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,te),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ln),L.pixelStorei(L.UNPACK_SKIP_ROWS,yn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,pi),pt===0&&z.generateMipmaps&&L.generateMipmap(Tt),Et.unbindTexture()},this.initRenderTarget=function(S){b.get(S).__webglFramebuffer===void 0&&B.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?B.setTextureCube(S,0):S.isData3DTexture?B.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?B.setTexture2DArray(S,0):B.setTexture2D(S,0),Et.unbindTexture()},this.resetState=function(){I=0,H=0,V=null,Et.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const zh=["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],zR={4:4,6:6,8:8,12:12,20:20},HR={4:1,6:2,8:1,12:3,20:1},GR={4:.72,6:.68,8:.74,12:.7,20:.85};function VR(i){const t=new Wt(i),e={h:0,s:0,l:0};t.getHSL(e);const n=new Wt().setHSL(e.h,Math.min(1,e.s*1.3),Math.min(.68,e.l+.14)),r=new Wt().setHSL(e.h,Math.min(1,e.s*1.36),Math.min(.58,e.l+.06)),s=new Wt().setHSL(e.h,Math.min(1,e.s*1.2),Math.max(.24,e.l-.16));return{hi:`#${n.getHexString()}`,mid:`#${r.getHexString()}`,lo:`#${s.getHexString()}`}}const Hh={x:.5,y:.3},Gh={x:.7,y:.74},Vh={x:.3,y:.74},kh={x:.5,y:.41},kR=(()=>{const i=new Uint8Array([24,92,168,255]),t=new tu(i,4,1,Bc);return t.needsUpdate=!0,t.minFilter=De,t.magFilter=De,t.generateMipmaps=!1,t})(),Wh=new Map,jh=new Map,WR=new N(0,1,0),Xh=new Li,jR=new N;function XR(i,t,e){const r=document.createElement("canvas");r.width=256,r.height=256;const s=r.getContext("2d"),a=VR(t),o=12,l=s.createLinearGradient(0,0,256,256);l.addColorStop(0,a.hi),l.addColorStop(.55,a.mid),l.addColorStop(1,a.lo),s.fillStyle=l,s.beginPath(),s.roundRect(o,o,256-o*2,256-o*2,32),s.fill();const c=s.createRadialGradient(256/2,256*.35,10,256/2,256/2,256*.65);c.addColorStop(0,"rgba(255,255,255,0.34)"),c.addColorStop(1,"rgba(0,0,0,0.22)"),s.fillStyle=c,s.beginPath(),s.roundRect(o,o,256-o*2,256-o*2,32),s.fill(),s.strokeStyle="rgba(255,255,255,0.52)",s.lineWidth=8,s.beginPath(),s.roundRect(o,o,256-o*2,256-o*2,32),s.stroke();const d=e===20?i>=10?46:56:i>=10?90:140;s.font=`bold ${d}px Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle";const f=e===20?256*kh.x:256/2,u=e===20?256*kh.y:256/2;if(s.fillStyle="#0a0a0a",s.fillText(String(i),f,u),i===6||i===9){const w=e===20?6:10,y=e===20?f+18:256*.8,g=e===20?u+17:256*.82;s.fillStyle="#0a0a0a",s.beginPath(),s.arc(y,g,w,0,Math.PI*2),s.fill()}const m=new CS(r);return m.colorSpace=Je,m.generateMipmaps=!0,m.anisotropy=1,m}function qR(i,t,e){const n=`${e}|${t}|${i}`;let r=jh.get(n);return r||(r=XR(i,t,e),jh.set(n,r)),r}function YR(i,t,e){const n=e*3;for(let r=0;r<t;r++)i.addGroup(r*n,n,r)}function KR(i,t,e){if(e!==1||!i.attributes.uv)return;const n=i.attributes.uv;for(let r=0;r<t;r++){const s=r*3;n.setXY(s,Hh.x,Hh.y),n.setXY(s+1,Gh.x,Gh.y),n.setXY(s+2,Vh.x,Vh.y)}n.needsUpdate=!0}function $R(i,t,e){const n=i.attributes.position,r=e*3,s=[];for(let a=0;a<t;a++){const o=new N;for(let l=0;l<e;l++){const c=a*r+l*3,d=new N().fromBufferAttribute(n,c),f=new N().fromBufferAttribute(n,c+1),u=new N().fromBufferAttribute(n,c+2);o.add(new N().crossVectors(f.clone().sub(d),u.clone().sub(d)).normalize())}s.push(o.normalize())}return s}function JR(i){const t=Wh.get(i);if(t)return t;const e=zR[i],n=HR[i],r=GR[i];let s;i===4?s=new Jc(r):i===6?s=new ur(r*1.72,r*1.72,r*1.72):i===8?s=new $c(r*1.08):i===12?s=new Yc(r*1.06):s=new Kc(r*1.08,0);const a=new Float32Array(s.attributes.position.array),o=s.index?s.toNonIndexed():s.clone();s.dispose(),o.groups.length===0&&YR(o,e,n),i===20&&KR(o,e,n),o.computeVertexNormals();const l=new IS(o),c=$R(o,e,n),d={geometry:o,edgesGeometry:l,faceNormals:c,physPositions:new Float32Array(o.attributes.position.array),physHullPositions:a,physRadius:r,numFaces:e};return Wh.set(i,d),d}function ZR(i,t,e){const n=e??zh[t%zh.length],r=JR(i),{numFaces:s}=r,a=Array.from({length:s},(c,d)=>new OS({map:qR(d+1,n,i),color:16777215,gradientMap:kR,emissive:new Wt(n),emissiveIntensity:.16})),o=new Ze(r.geometry,a);o.castShadow=!1,o.receiveShadow=!1;const l=new RS(r.edgesGeometry,new eu({color:328965}));return l.renderOrder=2,o.add(l),{mesh:o,faceNormals:r.faceNormals,physPositions:r.physPositions,physHullPositions:r.physHullPositions,sides:i,physRadius:r.physRadius}}function QR(i){(Array.isArray(i.material)?i.material:[i.material]).forEach(e=>e.dispose()),i.children.forEach(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(r=>r.dispose())})}function t1(i,t){Xh.set(t.x,t.y,t.z,t.w);let e=-1/0,n=0;for(let r=0;r<i.length;r++){const s=jR.copy(i[r]).applyQuaternion(Xh).dot(WR);s>e&&(e=s,n=r)}return{index:n,alignment:e}}function e1(i){const t=i.getBoundingClientRect(),e=t.width>10?t.width:window.innerWidth-304,n=t.height>10?t.height:window.innerHeight-52,r=new BR({antialias:!0});r.setSize(e,n),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.shadowMap.enabled=!1,r.toneMapping=vn,r.toneMappingExposure=1,r.outputColorSpace=Je,r.domElement.style.display="block",i.appendChild(r.domElement);const s=new wS;s.background=new Wt(0);const a=new Ms({color:1513239,roughness:.94,metalness:.04}),o=new Ze(new qc(1,96),a);o.rotation.x=-Math.PI/2,o.position.y=.001,s.add(o);const c=.68*1.72*2,d=.12,f=new Ms({color:3815994,roughness:.9,metalness:.04,side:wn}),u=new Ms({color:3289650,roughness:.92,metalness:.03,side:wn}),m=new Ms({color:5592405,roughness:.82,metalness:.05}),w=new Ze(new Ks(1,1,c,96,1,!0),f),y=new Ze(new Ks(1,1,c,96,1,!0),u),g=new Ze(new Zc(1,d*.5,20,96),m);w.position.y=c*.5,y.position.y=c*.5,g.rotation.x=Math.PI/2,g.position.y=c,s.add(w,y,g);const p=new an(52,e/n,.1,140);let x=6.5;const T=-.45,E=new N(0,T,0),P=new N(0,16,10).normalize(),C=.998,D=1.07,v=[new N,new N,new N,new N,new N,new N,new N,new N],M=new N;function G(){const st=Math.PI*2/v.length;for(let _t=0;_t<v.length;_t++){const ct=_t*st;v[_t].set(Math.cos(ct)*x,0,Math.sin(ct)*x)}}function I(){o.scale.set(x,x,1)}function H(){const st=x+d*.5,_t=Math.max(.1,x-d*.5),ct=Math.max(.1,x);w.scale.set(st,1,st),y.scale.set(_t,1,_t),g.scale.set(ct,ct,1)}function V(st){p.position.copy(P).multiplyScalar(st).add(E),p.lookAt(E),p.updateMatrixWorld(!0)}function Y(st){V(st);let _t=0,ct=0;for(let Ft=0;Ft<v.length;Ft++)M.copy(v[Ft]).project(p),_t=Math.max(_t,Math.abs(M.x)),ct=Math.max(ct,Math.abs(M.y));return _t<=C&&ct<=C}function X(st,_t){const ct=Math.max(1,_t);p.aspect=Math.max(1,st)/ct,p.updateProjectionMatrix(),G();let Ft=.1,ae=300;for(let oe=0;oe<28;oe++){const Z=(Ft+ae)*.5;Y(Z)?ae=Z:Ft=Z}V(ae*D)}X(e,n),I(),H(),s.add(new VS(16777215,.85));const W=new fh(16777215,1.45);W.position.set(5,11,6),s.add(W);const q=new fh(8956671,.3);q.position.set(-5,8,-4),s.add(q);function rt(){const st=i.getBoundingClientRect(),_t=st.width>10?st.width:window.innerWidth-304,ct=st.height>10?st.height:window.innerHeight-52;r.setSize(_t,ct),X(_t,ct)}function et(st){x=Math.max(2,Number(st)||6.5),I(),H(),rt()}return new ResizeObserver(()=>{rt()}).observe(i),{scene:s,camera:p,renderer:r,setTrayHalfSize:et}}const Br=document.querySelector("#dice-count"),hc=document.querySelector("#dice-configs"),n1=document.querySelector("#set-all-d6"),i1=document.querySelector("#set-all-d20"),Jn=document.querySelector("#canvas-container"),qh=document.querySelector(".side-panel"),_i=document.createElement("button");_i.type="button";_i.className="canvas-overlay-btn canvas-menu-btn";_i.textContent="☰";_i.setAttribute("aria-label","Toggle settings panel");_i.setAttribute("aria-expanded","true");const pr=document.createElement("button");pr.type="button";pr.className="canvas-overlay-btn canvas-fs-btn";pr.textContent="Fullscreen";const lr=document.createElement("div");lr.className="canvas-result-popup";const Ri=document.createElement("div");Ri.className="canvas-total-flash";const hi=document.createElement("div");hi.className="canvas-reroll-flash";hi.textContent="Re-roll";qh&&Jn.append(qh);Jn.append(_i,pr,lr);Jn.append(hi,Ri);const _u=["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Xr={trayScale:{minDice:1,maxDice:24,minScale:.5,maxScale:1.5,baseHalfSize:6.5},flash:{relandDurationMs:2e3},simulation:{maxSteps:450,minStableFrames:24,minRollSteps:70,linearStopSpeed:.08,angularStopSpeed:.18,verticalStopSpeed:.07,settleHeight:1.25,faceLandAlignmentMin:.9,surfaceLandHeightFactor:1.14,surfaceLandHeightMin:.78},reland:{maxAttempts:8,verticalLift:1,upwardImpulseBase:40,upwardImpulseStep:.9,lateralImpulse:3.5,torqueImpulse:4.8,tiltMinDeg:15,tiltMaxDeg:30},physics:{dice:{linearDamping:0,angularDamping:0,friction:.18,restitution:.14,density:2.1},world:{wallThickness:.5,wallHalfHeight:60,wallRestitution:.34,wallFriction:.1,floorRestitution:.12,floorFriction:.54,wallSegments:64},launch:{strengthBase:10.8,strengthRandom:5.2,impulseOffset:1,torqueStrength:6,upwardBase:20,upwardRandom:5}}},mn=Xr.trayScale,r1=Xr.flash,cn=Xr.simulation,_n=Xr.reland,Ie=Xr.physics,s1=cn.linearStopSpeed*cn.linearStopSpeed,a1=cn.angularStopSpeed*cn.angularStopSpeed;let Ns=[],fu=!1,ci=null;function pu(){return document.fullscreenElement===Jn}function o1(i){document.body.classList.toggle("panel-hidden",i),_i.setAttribute("aria-expanded",String(!i))}function qr(i,t){fu=i,Jn.classList.toggle("roll-disabled",i)}function c1(){return!fu&&!Di}function l1({forceRestart:i=!1}={}){return i&&Di||c1()?(dc(),!0):!1}function mu(){Ri.classList.remove("show"),lr.classList.remove("show"),lr.innerHTML=""}function h1(i){Ri.textContent=`Total: ${i}`,Ri.classList.remove("show"),Ri.offsetWidth,Ri.classList.add("show")}function d1(){ci&&(clearTimeout(ci),ci=null),hi.classList.remove("show"),hi.offsetWidth,hi.classList.add("show"),ci=setTimeout(()=>{hi.classList.remove("show"),ci=null},r1.relandDurationMs)}function u1(i,t){const e=t.map(n=>`<div class="canvas-result-line">${n}</div>`).join("");lr.innerHTML=`<div class="canvas-result-total">Total: ${i}</div>${e}`,lr.classList.add("show"),h1(i)}function Yh(i){const t=parseInt(i.slice(1,3),16),e=parseInt(i.slice(3,5),16),n=parseInt(i.slice(5,7),16);return(.299*t+.587*e+.114*n)/255>.62?"#111111":"#f8fafc"}function _1(i){const t=[];for(;t.length<i;){const e=[..._u];for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}t.push(...e)}return t.slice(0,i)}function f1(i){const e=(Math.min(mn.maxDice,Math.max(mn.minDice,i))-mn.minDice)/(mn.maxDice-mn.minDice);return mn.minScale+(mn.maxScale-mn.minScale)*e}function tl(i){return mn.baseHalfSize*f1(i)}for(let i=mn.minDice;i<=mn.maxDice;i++){const t=document.createElement("option");t.value=String(i),t.textContent=String(i),i===2&&(t.selected=!0),Br.appendChild(t)}function gu(){const i=Number(Br.value);Ns=_1(i),hc.innerHTML="";const t=_u.map(e=>{const n=document.createElement("option");return n.value=e,n.textContent="",n.style.backgroundColor=e,n.style.color=Yh(e),n});for(let e=0;e<i;e++){const n=document.createElement("div");n.className="die-config";const r=document.createElement("label");r.setAttribute("for",`die-type-${e}`),r.textContent=`Die ${e+1}`;const s=document.createElement("select");s.id=`die-type-${e}`,s.dataset.dieType="true",s.className="die-type-select",[6,20].forEach(c=>{const d=document.createElement("option");d.value=String(c),d.textContent=`d${c}`,c===6&&(d.selected=!0),s.appendChild(d)});const a=document.createElement("select");a.id=`die-color-${e}`,a.dataset.dieColor="true",a.className="die-color-select",t.forEach(c=>a.appendChild(c.cloneNode(!0))),a.value=Ns[e];const o=()=>{const c=a.value;a.style.backgroundColor=c,a.style.color=Yh(c)};a.addEventListener("change",()=>{Ns[e]=a.value,o(),mr()}),o();const l=document.createElement("div");l.className="die-controls",l.append(s,a),n.append(r,l),hc.appendChild(n)}}function wu(i){document.querySelectorAll('select[data-die-type="true"]').forEach(e=>{e.value=String(i)})}n1.addEventListener("click",()=>{wu(6),mr()});i1.addEventListener("click",()=>{wu(20),mr()});hc.addEventListener("change",i=>{const t=i.target;t instanceof HTMLSelectElement&&t.dataset.dieType==="true"&&mr()});gu();qr(!1);pr.addEventListener("click",async()=>{try{pu()?await document.exitFullscreen():await Jn.requestFullscreen()}catch{}});Jn.addEventListener("click",i=>{const t=i.target;t instanceof Element&&(t.closest(".canvas-overlay-btn")||t.closest(".canvas-result-popup")||t.closest(".side-panel")||l1({forceRestart:!0}))});document.addEventListener("fullscreenchange",()=>{const i=pu();Jn.classList.toggle("is-fullscreen",i),pr.textContent=i?"Exit Fullscreen":"Fullscreen",i||mu()});_i.addEventListener("click",()=>{const i=!document.body.classList.contains("panel-hidden");o1(i)});const{scene:el,camera:p1,renderer:m1,setTrayHalfSize:nl}=e1(Jn);Br.addEventListener("change",()=>{mr(),gu(),nl(tl(Number(Br.value)))});nl(tl(Number(Br.value)));let Ci=null,zr=[],Di=!1,tr=0,er=0,Hr=0;function g1(i){const t=new Gn.World({x:0,y:-9.81,z:0}),e=Ie.world.wallThickness,n=Ie.world.wallHalfHeight,r=Ie.world.wallRestitution,s=Ie.world.wallFriction,a=i,o=Ie.world.wallSegments,l=t.createRigidBody(Gn.RigidBodyDesc.fixed().setTranslation(0,-.05,0));t.createCollider(Gn.ColliderDesc.cuboid(a,.1,a).setRestitution(Ie.world.floorRestitution).setFriction(Ie.world.floorFriction),l);for(let c=0;c<o;c++){const d=c/o*Math.PI*2,f=Math.cos(d)*a,u=Math.sin(d)*a,m=t.createRigidBody(Gn.RigidBodyDesc.fixed().setTranslation(f,n-.05,u));t.createCollider(Gn.ColliderDesc.cylinder(n,e).setRestitution(r).setFriction(s),m)}return t}function w1(i,t,e,n){const r=Math.ceil(Math.sqrt(n)),s=Math.floor(e/r),o=(e%r-(r-1)/2)*1.3+(Math.random()-.5)*.4,l=(s-Math.floor(n/r)/2)*1.3+(Math.random()-.5)*.4,c=1.05+e*.14,d=Gn.RigidBodyDesc.dynamic().setTranslation(o,c,l).setLinearDamping(Ie.dice.linearDamping).setAngularDamping(Ie.dice.angularDamping);typeof d.setCcdEnabled=="function"&&d.setCcdEnabled(!0);const f=i.createRigidBody(d);typeof f.enableCcd=="function"&&f.enableCcd(!0);let u;if(t.sides===6){const E=t.physRadius*.82;u=Gn.ColliderDesc.cuboid(E,E,E)}else u=Gn.ColliderDesc.convexHull(t.physHullPositions)??Gn.ColliderDesc.ball(t.physRadius*.88);const m=t.sides===20?Ie.dice.density*.78:Ie.dice.density;u.setRestitution(Ie.dice.restitution).setFriction(Ie.dice.friction).setDensity(m),i.createCollider(u,f);const w=Math.random()*Math.PI*2,y=Ie.launch.strengthBase+Math.random()*Ie.launch.strengthRandom,g=Ie.launch.impulseOffset,p=Ie.launch.torqueStrength,x=Ie.launch.upwardBase,T=Ie.launch.upwardRandom;return f.applyImpulse({x:Math.cos(w)*y,y:x+Math.random()*T,z:Math.sin(w)*y},!0),f.applyTorqueImpulse({x:(Math.random()-.5)*g+p,y:(Math.random()-.5)*g+p,z:(Math.random()-.5)*g+p},!0),f}function b1(i=null){let t=0;const e=[];(i??bu()).forEach(({entity:r,value:s,topFaceIdx:a},o)=>{const{mesh:l}=r;t+=s;const c=Array.isArray(l.material)?l.material:[l.material];c[a]&&(c[a].emissive.setHex(16766720),c[a].emissiveIntensity=.28),e.push(`D${o+1}: ${s}`)}),qr(!1),u1(t,e)}function v1(i){return Math.max(cn.surfaceLandHeightMin,i.physRadius*cn.surfaceLandHeightFactor)}function bu(){return zr.map(i=>{const t=i.body.rotation(),e=t1(i.faceNormals,t),n=e.index+1,s=i.body.translation().y<=v1(i),a=e.alignment>=cn.faceLandAlignmentMin;return{entity:i,topFaceIdx:e.index,value:n,onSurface:s,faceLanded:a,valid:s&&a}})}function x1(i){Hr+=1,d1();const t=_n.upwardImpulseBase+(Hr-1)*_n.upwardImpulseStep;i.map(n=>n.entity).forEach(n=>{const{body:r,physRadius:s}=n,a=r.translation(),o=Math.max(_n.verticalLift,s*.45),l=Math.random()*Math.PI*2,d=(_n.tiltMinDeg+Math.random()*(_n.tiltMaxDeg-_n.tiltMinDeg))*Math.PI/180,f=t*Math.tan(d),u=Math.max(_n.lateralImpulse,f);r.setTranslation({x:a.x,y:a.y+o,z:a.z},!0),r.setLinvel({x:0,y:0,z:0},!0),r.setAngvel({x:0,y:0,z:0},!0),typeof r.wakeUp=="function"&&r.wakeUp(),r.applyImpulse({x:Math.cos(l)*u,y:t,z:Math.sin(l)*u},!0),r.applyTorqueImpulse({x:(Math.random()-.5)*_n.torqueImpulse,y:(Math.random()-.5)*_n.torqueImpulse,z:(Math.random()-.5)*_n.torqueImpulse},!0)}),tr=0,er=0,Di=!0,qr(!0)}function mr(){ci&&(clearTimeout(ci),ci=null),hi.classList.remove("show"),zr.forEach(i=>{el.remove(i.mesh),QR(i.mesh)}),zr=[],mu(),Ci&&(Ci.free(),Ci=null),Di=!1,tr=0,er=0,Hr=0,qr(!1)}function dc(){mr();const i=Array.from(document.querySelectorAll('select[data-die-type="true"]')).map(e=>Number(e.value)),t=tl(i.length);nl(t),Ci=g1(t),tr=0,er=0,Hr=0,Di=!0,qr(!0),i.forEach((e,n)=>{const r=ZR(e,n,Ns[n]),s=w1(Ci,r,n,i.length);el.add(r.mesh),zr.push({body:s,mesh:r.mesh,faceNormals:r.faceNormals,sides:e,physRadius:r.physRadius})})}window.addEventListener("keydown",i=>{if(!(i.code==="Space"||i.key===" "||i.key==="Spacebar")||i.repeat)return;const n=document.activeElement?.tagName;n==="INPUT"||n==="TEXTAREA"||n==="SELECT"||(i.preventDefault(),dc())});function vu(){if(requestAnimationFrame(vu),Di&&Ci){Ci.step(),tr++;let i=!0,t=!0,e=!0;for(const{body:r,mesh:s}of zr){const a=r.translation(),o=r.rotation(),l=r.linvel(),c=r.angvel();s.position.set(a.x,a.y,a.z),s.quaternion.set(o.x,o.y,o.z,o.w),r.isSleeping()||(i=!1),a.y<=cn.settleHeight&&Math.abs(l.y)<cn.verticalStopSpeed||(t=!1);const d=l.x*l.x+l.y*l.y+l.z*l.z,f=c.x*c.x+c.y*c.y+c.z*c.z;d<s1&&f<a1||(e=!1)}if(er=tr>=cn.minRollSteps&&t&&e?er+1:0,i&&t||er>=cn.minStableFrames||tr>=cn.maxSteps){const r=bu(),s=r.filter(a=>!a.valid);s.length>0&&Hr<_n.maxAttempts?x1(s):(Di=!1,b1(r))}}m1.render(el,p1)}vu();
