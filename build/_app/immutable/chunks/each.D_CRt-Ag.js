import{o as G,b as J,h as T,k as M,i as K,q as U,u as O,H as X,j as D,l as N,m as I,I as C,d as V,e as Y,g as P,v as L,w as Q,x as W,y as Z,z as $,A as S,B as m,C as j,D as ee,F as ae,G as re,J as ne,K as le,L as fe,M as se}from"./runtime.D4q1PQ8u.js";let R=null;function _e(s,e){return e}function ie(s,e,r,t){for(var d=[],v=e.length,u=0;u<v;u++)j(e[u].e,d,!0);var p=v>0&&d.length===0&&r!==null;if(p){var h=r.parentNode;ee(h),h.append(r),t.clear(),x(s,e[0].prev,e[v-1].next)}ae(d,()=>{for(var c=0;c<v;c++){var a=e[c];p||(t.delete(a.k),x(s,a.prev,a.next)),re(a.e,!p)}})}function de(s,e,r,t,d,v=null){var u=s,p={flags:e,items:new Map,first:null};{var h=s;u=T?M(ne(h)):h.appendChild(G())}T&&K();var c=null,a=!1;J(()=>{var _=r(),n=U(_)?_:_==null?[]:O(_),i=n.length;if(a&&i===0)return;a=i===0;let l=!1;if(T){var A=u.data===X;A!==(i===0)&&(u=D(),M(u),N(!1),l=!0)}if(T){for(var g=null,f,o=0;o<i;o++){if(I.nodeType===8&&I.data===le){u=I,l=!0,N(!1);break}var w=n[o],y=t(w,o);f=q(I,p,g,null,w,y,o,d,e),p.items.set(y,f),g=f}i>0&&M(D())}if(!T){var E=fe;ue(n,p,u,d,e,(E.f&C)!==0,t)}v!==null&&(i===0?c?V(c):c=Y(()=>v(u)):c!==null&&P(c,()=>{c=null})),l&&N(!0),r()}),T&&(u=I)}function ue(s,e,r,t,d,v,u){var p=s.length,h=e.items,c=e.first,a=c,_,n=null,i=[],l=[],A,g,f,o;for(o=0;o<p;o+=1){if(A=s[o],g=u(A,o),f=h.get(g),f===void 0){var w=a?a.e.nodes_start:r;n=q(w,e,n,n===null?e.first:n.next,A,g,o,t,d),h.set(g,n),i=[],l=[],a=n.next;continue}if(te(f,A,o),f.e.f&C&&V(f.e),f!==a){if(_!==void 0&&_.has(f)){if(i.length<l.length){var y=l[0],E;n=y.prev;var b=i[0],k=i[i.length-1];for(E=0;E<i.length;E+=1)B(i[E],y,r);for(E=0;E<l.length;E+=1)_.delete(l[E]);x(e,b.prev,k.next),x(e,n,b),x(e,k,y),a=y,n=k,o-=1,i=[],l=[]}else _.delete(f),B(f,a,r),x(e,f.prev,f.next),x(e,f,n===null?e.first:n.next),x(e,n,f),n=f;continue}for(i=[],l=[];a!==null&&a.k!==g;)(v||!(a.e.f&C))&&(_??(_=new Set)).add(a),l.push(a),a=a.next;if(a===null)continue;f=a}i.push(f),n=f,a=f.next}if(a!==null||_!==void 0){for(var H=_===void 0?[]:O(_);a!==null;)(v||!(a.e.f&C))&&H.push(a),a=a.next;var z=H.length;if(z>0){var F=p===0?r:null;ie(e,H,F,h)}}L.first=e.first&&e.first.e,L.last=n&&n.e}function te(s,e,r,t){Q(s.v,e),s.i=r}function q(s,e,r,t,d,v,u,p,h){var c=R;try{var a=(h&W)!==0,_=(h&Z)===0,n=a?_?$(d):S(d):d,i=h&m?S(u):u,l={i,v:n,k:v,a:null,e:null,prev:r,next:t};return R=l,l.e=Y(()=>p(s,n,i),T),l.e.prev=r&&r.e,l.e.next=t&&t.e,r===null?e.first=l:(r.next=l,r.e.next=l.e),t!==null&&(t.prev=l,t.e.prev=l.e),l}finally{R=c}}function B(s,e,r){for(var t=s.next?s.next.e.nodes_start:r,d=e?e.e.nodes_start:r,v=s.e.nodes_start;v!==t;){var u=se(v);d.before(v),v=u}}function x(s,e,r){e===null?s.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}export{de as e,_e as i};