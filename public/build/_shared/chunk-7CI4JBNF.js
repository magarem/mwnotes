import{f as n,g as o,h as d,i,j as u}from"/build/_shared/chunk-KFAELVRP.js";n();o();d();u();i();n();o();d();u();i();var I=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),f={randomUUID:I};n();o();d();u();i();var g,D=new Uint8Array(16);function U(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(D)}n();o();d();u();i();var e=[];for(let t=0;t<256;++t)e.push((t+256).toString(16).slice(1));function v(t,r=0){return(e[t[r+0]]+e[t[r+1]]+e[t[r+2]]+e[t[r+3]]+"-"+e[t[r+4]]+e[t[r+5]]+"-"+e[t[r+6]]+e[t[r+7]]+"-"+e[t[r+8]]+e[t[r+9]]+"-"+e[t[r+10]]+e[t[r+11]]+e[t[r+12]]+e[t[r+13]]+e[t[r+14]]+e[t[r+15]]).toLowerCase()}function h(t,r,s){if(f.randomUUID&&!r&&!t)return f.randomUUID();t=t||{};let a=t.random||(t.rng||U)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,r){s=s||0;for(let p=0;p<16;++p)r[s+p]=a[p];return r}return v(a)}var w=h;n();o();d();u();i();export{w as a};
