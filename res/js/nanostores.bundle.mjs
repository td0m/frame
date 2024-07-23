/* esm.sh - esbuild bundle(nanostores@0.10.3) es2022 production */
var d=0,y=[];function O(){return d+=1,()=>{if(d-=1,d===0){let e=y;y=[];for(let t of e)t()}}}function I(e){let t=O(),r=e().finally(t);return r.t=!0,r}function D(){return d===0?Promise.resolve():new Promise(e=>{y.push(e)})}function S(){d=0}var M=Symbol("clean"),L=(...e)=>{throw new Error("cleanStores() can be used only during development or tests")};var a=[],c=(e,t)=>{let r=[],n={get(){return n.lc||n.listen(()=>{})(),n.value},l:t||0,lc:0,listen(l,o){return n.lc=r.push(l,o||n.l)/2,()=>{let i=r.indexOf(l);~i&&(r.splice(i,2),--n.lc||n.off())}},notify(l,o){let i=!a.length;for(let f=0;f<r.length;f+=2)a.push(r[f],r[f+1],n.value,l,o);if(i){for(let f=0;f<a.length;f+=5){let m;for(let u=f+1;!m&&(u+=5)<a.length;)a[u]<a[f+1]&&(m=a.push(a[f],a[f+1],a[f+2],a[f+3],a[f+4]));m||a[f](a[f+2],a[f+3],a[f+4])}a.length=0}},off(){},set(l){let o=n.value;o!==l&&(n.value=l,n.notify(o))},subscribe(l,o){let i=n.listen(l,o);return l(n.value),i},value:e};return n};var V=0,w=1,Y=2,F=3,B=5,h=6,N=10,v=(e,t,r,n)=>(e.events=e.events||{},e.events[r+N]||(e.events[r+N]=n(l=>{e.events[r].reduceRight((o,i)=>(i(o),o),{shared:{},...l})})),e.events[r]=e.events[r]||[],e.events[r].push(t),()=>{let l=e.events[r],o=l.indexOf(t);l.splice(o,1),l.length||(delete e.events[r],e.events[r+N](),delete e.events[r+N])}),K=(e,t)=>v(e,t,V,r=>{let n=e.listen;return e.listen=l=>(!e.lc&&!e.starting&&(e.starting=!0,r(),delete e.starting),n(l)),()=>{e.listen=n}}),Q=(e,t)=>v(e,t,w,r=>{let n=e.off;return e.off=()=>{r(),n()},()=>{e.off=n}}),X=(e,t)=>v(e,t,Y,r=>{let n=e.set,l=e.setKey;return e.setKey&&(e.setKey=(o,i)=>{let f;if(r({abort:()=>{f=!0},changed:o,newValue:{...e.value,[o]:i}}),!f)return l(o,i)}),e.set=o=>{let i;if(r({abort:()=>{i=!0},newValue:o}),!i)return n(o)},()=>{e.set=n,e.setKey=l}}),b=(e,t)=>v(e,t,F,r=>{let n=e.notify;return e.notify=(l,o)=>{let i;if(r({abort:()=>{i=!0},changed:o,oldValue:l}),!i)return n(l,o)},()=>{e.notify=n}}),E=1e3,x=(e,t)=>v(e,n=>{let l=t(n);l&&e.events[h].push(l)},B,n=>{let l=e.listen;e.listen=(...i)=>(!e.lc&&!e.active&&(e.active=!0,n()),l(...i));let o=e.off;return e.events[h]=[],e.off=()=>{o(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let i of e.events[h])i();e.events[h]=[]}},E)},()=>{e.listen=l,e.off=o}});var P=(e,t,r)=>{Array.isArray(e)||(e=[e]);let n,l=0,o=()=>{let u=e.map(s=>s.get());if(n===void 0||u.some((s,p)=>s!==n[p])){let s=++l;n=u;let p=t(...u);p&&p.then&&p.t?p.then(C=>{s===l&&i.set(C)}):i.set(p)}},i=c(void 0,Math.max(...e.map(u=>u.l))+1),f,m=r?()=>{clearTimeout(f),f=setTimeout(o)}:o;return x(i,()=>{let u=e.map(s=>s.listen(m,-1/i.l));return o(),()=>{for(let s of u)s()}}),i},q=(e,t)=>P(e,t),z=(e,t)=>P(e,t,!0);function T(e,t){let r=_(t),n=e;for(let l of r){if(n===void 0)break;n=n[l]}return n}function g(e,t,r){return R(e??{},_(t),r)}function R(e,t,r){let n=t[0];H(e,n,t[1]);let l=Array.isArray(e)?[...e]:{...e};if(t.length===1)return r===void 0?Array.isArray(e)?l.splice(n,1):delete l[n]:l[n]=r,l;let o=R(e[n],t.slice(1),r);return e[n]=o,e}var U=/(.*)\[(\d+)\]/;function _(e){return e.split(".").flatMap(t=>k(t))}function k(e){if(U.test(e)){let[,t,r]=e.match(U);return[...k(t),r]}return[e]}var G=/^\d+$/;function H(e,t,r){if(t in e)return;G.test(r)?e[t]=Array(parseInt(r,10)+1).fill(void 0):e[t]={}}function J(e={}){let t=c(e);return t.setKey=(r,n)=>{let l;try{l=structuredClone(t.value)}catch{l={...t.value}}T(t.value,r)!==n&&(t.value={...g(t.value,r,n)},t.notify(l,r))},t}var W=e=>{e.listen(()=>{})};function Z(e,t,r){let n=new Set([...t,void 0]);return e.listen((l,o,i)=>{n.has(i)&&r(l,o,i)})}var A=(e={})=>{let t=c(e);return t.setKey=function(r,n){let l=t.value;typeof n>"u"&&r in t.value?(t.value={...t.value},delete t.value[r],t.notify(l,r)):t.value[r]!==n&&(t.value={...t.value,[r]:n},t.notify(l,r))},t};function j(e){let t=(r,...n)=>(t.cache[r]||(t.cache[r]=t.build(r,...n)),t.cache[r]);return t.build=(r,...n)=>{let l=A({id:r});return x(l,()=>{let o;return e&&(o=e(l,r,...n)),()=>{delete t.cache[r],o&&o()}}),l},t.cache={},t}export{E as STORE_UNMOUNT_DELAY,D as allTasks,c as atom,z as batched,M as clean,L as cleanStores,S as cleanTasks,q as computed,J as deepMap,T as getPath,W as keepMount,Z as listenKeys,A as map,j as mapCreator,x as onMount,b as onNotify,X as onSet,K as onStart,Q as onStop,g as setPath,O as startTask,I as task};
//# sourceMappingURL=nanostores.bundle.mjs.map