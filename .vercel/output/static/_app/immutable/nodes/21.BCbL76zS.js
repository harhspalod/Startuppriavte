import{t as n,a as p}from"../chunks/DKJ7Mg52.js";import{p as i,t as u,a as g,d as f,b as l,c as h,r as c,g as x}from"../chunks/AQxm7BEp.js";import{s as d}from"../chunks/C_FN1Gfx.js";import{o as b}from"../chunks/DUkWVJk8.js";import{g as v}from"../chunks/DEvjWbWR.js";var _=n('<h1 class="text-2xl font-bold m-6 mx-auto my-auto"> </h1>');function T(s,a){i(a,!0);let{supabase:o}=a.data,e=l("Signing out....");b(()=>{o.auth.signOut().then(({error:m})=>{m?f(e,"There was an issue signing out."):v("/")})});var t=_(),r=h(t,!0);c(t),u(()=>d(r,x(e))),p(s,t),g()}export{T as component};
