import{a as c}from"/build/_shared/chunk-7CI4JBNF.js";import{a as r}from"/build/_shared/chunk-QD5RNNLL.js";import"/build/_shared/chunk-IUI24P5M.js";import{a as d,b as p}from"/build/_shared/chunk-ECR35OP2.js";import{d as s,f as t,g as i,h as a,i as o,j as n}from"/build/_shared/chunk-KFAELVRP.js";t();i();a();n();o();t();i();a();n();o();var f=s(d());var e=s(p()),N=r("https://lpbqbqcmlspixeiikhcb.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk");function u(){let[m,I]=(0,f.useState)([]);return(0,e.jsxs)("form",{onSubmit:async l=>{l.preventDefault();let b=`${c()}-${m.name}`,{data:h,error:X}=await N.storage.from("files").upload(b,m,{cacheControl:"3600",upsert:!1}),k=h.path},children:[(0,e.jsx)("input",{type:"file",name:"image",onChange:l=>{I(l.target.files[0])}}),(0,e.jsx)("br",{}),(0,e.jsx)("button",{type:"submit",children:"Upload image"})]})}export{u as default};