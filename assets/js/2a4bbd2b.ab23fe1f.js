"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84480],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(r),g=p,d=f["".concat(u,".").concat(g)]||f[g]||s[g]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function g(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51056:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),p=(r(67294),r(3905));const a={},o="Target.opener() method",i={unversionedId:"api/puppeteer.target.opener",id:"api/puppeteer.target.opener",title:"Target.opener() method",description:"Get the target that opened this target. Top-level targets return null.",source:"@site/../docs/api/puppeteer.target.opener.md",sourceDirName:"api",slug:"/api/puppeteer.target.opener",permalink:"/puppeteer/api/puppeteer.target.opener",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Target.createCDPSession() method",permalink:"/puppeteer/api/puppeteer.target.createcdpsession"},next:{title:"Target.page() method",permalink:"/puppeteer/api/puppeteer.target.page"}},u={},l=[],c={toc:l};function s(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"targetopener-method"},"Target.opener() method"),(0,p.kt)("p",null,"Get the target that opened this target. Top-level targets return ",(0,p.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"opener(): Target | undefined;\n")),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/api/puppeteer.target"},"Target")," ","|"," undefined"))}s.isMDXComponent=!0}}]);