import{a as j}from"/build/_shared/chunk-6FIESPDZ.js";import{a as q}from"/build/_shared/chunk-Y7DDNZ3R.js";import{a as M}from"/build/_shared/chunk-7CI4JBNF.js";import{a as C}from"/build/_shared/chunk-QD5RNNLL.js";import"/build/_shared/chunk-IUI24P5M.js";import{e as S,g as E,h as Z,n as F,o as L}from"/build/_shared/chunk-G7TPQVNK.js";import{a as J,b as k}from"/build/_shared/chunk-ECR35OP2.js";import{d as s,f as u,g as f,h as m,i as c,j as g}from"/build/_shared/chunk-KFAELVRP.js";u();f();m();g();c();u();f();m();g();c();var o=s(J());Z();var O=s(j()),B=s(q()),y=s(J());var t=s(k()),_=C("https://lpbqbqcmlspixeiikhcb.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk");function U(){var v,w,I,R,T,A;let a=F(),e=L(),h=o.useRef(null),b=o.useRef(null),N=o.useRef(null),p=o.useRef(null),V=o.useRef(null),x=o.useRef("false"),[i,H]=(0,y.useState)([]),[Q,K]=(0,y.useState)([]),X=E();o.useEffect(()=>{var l,r,n,d;(l=e==null?void 0:e.errors)!=null&&l.title?(r=b.current)==null||r.focus():(n=e==null?void 0:e.errors)!=null&&n.body&&((d=p.current)==null||d.focus())},[e]);let D=l=>{H(l.target.files[0])},ee=async l=>{l.preventDefault(),console.log(i.length);let r=new FormData;if(r.set("id",h.current.value),r.set("title",b.current.value),r.set("tags",N.current.value),r.set("body",p.current.value),r.set("noimage",x.current.checked),i.length!==0){let n=`${M()}-${i.name}`,{data:d,error:te}=await _.storage.from("files").upload(n,i,{cacheControl:"3600",upsert:!1}),Y=d.path;r.set("image",Y)}console.log(x.current.checked),x.current.checked&&r.set("image",""),X(r,{method:"post"})};return(0,t.jsxs)(S,{name:"form1",method:"post",style:{display:"flex",flexDirection:"column",gap:8,width:"100%"},children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{className:"flex w-full flex-col gap-1 text-white",children:[(0,t.jsx)("input",{ref:h,hidden:!0,name:"id",defaultValue:a.note.id,className:"flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"}),(0,t.jsx)("span",{children:"Titulo: "}),(0,t.jsx)("input",{ref:b,id:"title",name:"title",defaultValue:a.note.title,className:" text-gray-50 bg-slate-700 border-slate-800 flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose","aria-invalid":(v=e==null?void 0:e.errors)!=null&&v.title?!0:void 0,"aria-errormessage":(w=e==null?void 0:e.errors)!=null&&w.title?"title-error":void 0})]}),((I=e==null?void 0:e.errors)==null?void 0:I.title)&&(0,t.jsx)("div",{className:"pt-1 text-red-700",id:"title-error",children:e.errors.title})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{className:"flex w-full flex-col gap-1 text-white",children:[(0,t.jsx)("span",{children:"Nota: "}),(0,t.jsx)("textarea",{ref:p,name:"body",defaultValue:a.note.body,rows:8,className:"w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6","aria-invalid":(R=e==null?void 0:e.errors)!=null&&R.body?!0:void 0,"aria-errormessage":(T=e==null?void 0:e.errors)!=null&&T.body?"body-error":void 0})]}),((A=e==null?void 0:e.errors)==null?void 0:A.body)&&(0,t.jsx)("div",{className:"pt-1 text-red-700",id:"body-error",children:e.errors.body})]}),(0,t.jsx)("div",{children:(0,t.jsxs)("label",{className:"flex w-full flex-col gap-1 text-white",children:[(0,t.jsx)("span",{children:"Tags: "}),(0,t.jsx)("input",{ref:N,name:"tags",defaultValue:a.note.tags,className:" text-gray-50 bg-slate-700 border-slate-800 flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"})]})}),(0,t.jsx)("div",{children:(0,t.jsxs)("label",{className:"flex w-full flex-col gap-1 text-white",children:[(0,t.jsx)("span",{children:"Img: "}),(0,t.jsx)("input",{ref:V,name:"image",defaultValue:a.note.img,className:" text-gray-50 bg-slate-700 border-slate-800 flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"})]})}),(0,t.jsx)("div",{className:"text-right",children:(0,t.jsx)("button",{type:"submit",className:"rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",children:"Save"})})]})}export{U as default};
