import{a as T}from"/build/_shared/chunk-IRYEX53N.js";import"/build/_shared/chunk-L27AEQYI.js";import{a as F}from"/build/_shared/chunk-DYV54FQG.js";import{e as x,f as g,j as v,p as b}from"/build/_shared/chunk-N25U7VOR.js";import{a as E,b as y}from"/build/_shared/chunk-PQZYEQJJ.js";import{d as t}from"/build/_shared/chunk-T36URGAI.js";var s=t(E()),h=t(F()),N=t(T());var e=t(y());var U=()=>[{title:"Sign Up"}];function R(){var l,d,m,n,u;let[i]=g(),A=(l=i.get("redirectTo"))!=null?l:void 0,r=b(),a=s.useRef(null),o=s.useRef(null);return s.useEffect(()=>{var c,p,f,w;(c=r==null?void 0:r.errors)!=null&&c.email?(p=a.current)==null||p.focus():(f=r==null?void 0:r.errors)!=null&&f.password&&((w=o.current)==null||w.focus())},[r]),(0,e.jsx)("div",{className:"flex min-h-full flex-col justify-center",children:(0,e.jsx)("div",{className:"mx-auto pt-20 w-full max-w-md px-8",children:(0,e.jsxs)(x,{method:"post",className:"space-y-6",children:[(0,e.jsx)("div",{className:"flex w-full justify-center text-white",children:(0,e.jsx)("h3",{children:"Registrar"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-white",children:"Email"}),(0,e.jsxs)("div",{className:"mt-1",children:[(0,e.jsx)("input",{ref:a,id:"email",required:!0,autoFocus:!0,name:"email",type:"email",autoComplete:"email","aria-invalid":(d=r==null?void 0:r.errors)!=null&&d.email?!0:void 0,"aria-describedby":"email-error",className:"w-full rounded border border-gray-500 px-2 py-1 text-lg"}),((m=r==null?void 0:r.errors)==null?void 0:m.email)&&(0,e.jsx)("div",{className:"pt-1 text-red-700",id:"email-error",children:r.errors.email})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-white",children:"Senha"}),(0,e.jsxs)("div",{className:"mt-1",children:[(0,e.jsx)("input",{id:"password",ref:o,name:"password",type:"password",autoComplete:"new-password","aria-invalid":(n=r==null?void 0:r.errors)!=null&&n.password?!0:void 0,"aria-describedby":"password-error",className:"w-full rounded border border-gray-500 px-2 py-1 text-lg"}),((u=r==null?void 0:r.errors)==null?void 0:u.password)&&(0,e.jsx)("div",{className:"pt-1 text-red-700",id:"password-error",children:r.errors.password})]})]}),(0,e.jsx)("input",{type:"hidden",name:"redirectTo",value:A}),(0,e.jsx)("button",{type:"submit",className:"w-full rounded bg-blue-500  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",children:"Registrar"}),(0,e.jsx)("div",{className:"flex items-center justify-center",children:(0,e.jsxs)("div",{className:"text-center text-sm text-gray-500",children:["J\xE1 tem uma conta?"," ",(0,e.jsx)(v,{className:"text-blue-500 underline",to:{pathname:"/login",search:i.toString()},children:"Entrar"})]})})]})})})}export{R as default,U as meta};