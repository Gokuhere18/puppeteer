"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={sidebar_label:"Connection.(constructor)"},i="Connection.(constructor)",p={unversionedId:"api/puppeteer.connection._constructor_",id:"version-18.0.1/api/puppeteer.connection._constructor_",title:"Connection.(constructor)",description:"Constructs a new instance of the Connection class",source:"@site/versioned_docs/version-18.0.1/api/puppeteer.connection._constructor_.md",sourceDirName:"api",slug:"/api/puppeteer.connection._constructor_",permalink:"/api/puppeteer.connection._constructor_",draft:!1,tags:[],version:"18.0.1",frontMatter:{sidebar_label:"Connection.(constructor)"},sidebar:"sidebar",previous:{title:"Connection",permalink:"/api/puppeteer.connection"},next:{title:"Connection.createSession",permalink:"/api/puppeteer.connection.createsession"}},l={},u=[{value:"Parameters",id:"parameters",level:2}],s={toc:u};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"connectionconstructor"}),"Connection.(constructor)"),(0,r.kt)("p",null,"Constructs a new instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection")," class"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class Connection {\n  constructor(url: string, transport: ConnectionTransport, delay?: number);\n}\n")),(0,r.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"url"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"transport"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("a",o({parentName:"td"},{href:"/api/puppeteer.connectiontransport"}),"ConnectionTransport")),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"delay"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("i",null,"(Optional)"))))))}m.isMDXComponent=!0}}]);