import{b as f}from"/build/_shared/chunk-LNSHWKLA.js";import{a as h}from"/build/_shared/chunk-EXA2H3AC.js";import{a as v}from"/build/_shared/chunk-FPOB764B.js";import{b as i,d as l,e as n,h as b,i as d,j as m,o as u}from"/build/_shared/chunk-2SGSTKRC.js";import{b as c}from"/build/_shared/chunk-LMXH6R3J.js";import{c as o}from"/build/_shared/chunk-Q3IECNXJ.js";var y=o(v());var N=o(h());b();var e=o(c());function g(){let s=i(),r=u(),p=f();return(0,e.jsxs)("div",{className:"flex h-full min-h-screen flex-col",children:[(0,e.jsxs)("header",{className:"flex pt-6 items-center justify-between bg-slate-800 p-2 text-white no-underline",children:[(0,e.jsx)("h5",{className:"text-1xl font-sans	pt-1 pl-2",children:(0,e.jsx)(m,{to:".",className:"no-underline text-yellow-500",children:"MW Notes"})}),(0,e.jsx)(n,{action:"/logout",method:"post",children:(0,e.jsx)("button",{type:"submit",className:"rounded bg-slate-600 px-4 py-1 text-blue-100 hover:bg-blue-500 active:bg-blue-600 text-xs",children:p.email})})]}),(0,e.jsxs)("main",{className:"flex h-full",children:[(0,e.jsxs)("div",{className:"h-full w-1/5 ",children:[(0,e.jsxs)("div",{className:"inline-flex rounded-md shadow-sm h-100 mt-3 pl-3",role:"group",children:[(0,e.jsx)("button",{onClick:()=>s("/folderNew"),type:"button",className:"px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 text-white",children:"+ pasta"}),(0,e.jsx)("button",{type:"button",onClick:()=>s("new"),className:"px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700  text-white",children:"+ nota"})]}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),r.noteListItems.length===0?(0,e.jsx)("p",{className:"p-2",children:"Nenhuma nota ainda"}):(0,e.jsx)("ol",{children:r.noteListItems.map((t,a)=>(0,e.jsxs)("div",{children:[a==0&&(0,e.jsx)("div",{className:"text-slate-100",children:t.folder.name}),r.noteListItems[a==0?0:a-1].folder.id!==r.noteListItems[a].folder.id&&(0,e.jsx)("div",{className:"text-slate-100",children:t.folder.name}),(0,e.jsx)("ul",{className:"flex space-x-3",children:(0,e.jsx)("li",{className:"text-slate-300",children:(0,e.jsx)(d,{className:({isActive:x})=>`block no-underline p-1 text-base ${x?"text-green-400":"text-slate-100"}`,to:t.id,children:t.title})})})]},t.id))})]}),(0,e.jsx)("div",{className:"flex-1 p-6",children:(0,e.jsx)(l,{})})]})]})}export{g as default};
