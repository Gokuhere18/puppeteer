"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85650],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,p(p({ref:t},c),{},{components:r})):n.createElement(h,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var i=2;i<o;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={},p="ElementHandle.screenshot() method",l={unversionedId:"api/puppeteer.elementhandle.screenshot",id:"api/puppeteer.elementhandle.screenshot",title:"ElementHandle.screenshot() method",description:"This method scrolls element into view if needed, and then uses Page.screenshot() to take a screenshot of the element. If the element is detached from DOM, the method throws an error.",source:"@site/../docs/api/puppeteer.elementhandle.screenshot.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.screenshot",permalink:"/puppeteer/api/puppeteer.elementhandle.screenshot",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"ElementHandle.press() method",permalink:"/puppeteer/api/puppeteer.elementhandle.press"},next:{title:"ElementHandle.select() method",permalink:"/puppeteer/api/puppeteer.elementhandle.select"}},s={},i=[{value:"Parameters",id:"parameters",level:2}],c={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"elementhandlescreenshot-method"},"ElementHandle.screenshot() method"),(0,a.kt)("p",null,"This method scrolls element into view if needed, and then uses ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/api/puppeteer.page.screenshot"},"Page.screenshot()")," to take a screenshot of the element. If the element is detached from DOM, the method throws an error."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"screenshot(options?: ScreenshotOptions): Promise<string | Buffer>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.screenshotoptions"},"ScreenshotOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)"))))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<","string ","|"," Buffer",">"))}u.isMDXComponent=!0}}]);