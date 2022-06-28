"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45314],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var p=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,p,a=function(e,t){if(null==e)return{};var r,p,a={},n=Object.keys(e);for(p=0;p<n.length;p++)r=n[p],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(p=0;p<n.length;p++)r=n[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=p.createContext({}),o=function(e){var t=p.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=o(e.components);return p.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},m=p.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=o(r),c=a,k=m["".concat(i,".").concat(c)]||m[c]||s[c]||n;return r?p.createElement(k,l(l({ref:t},d),{},{components:r})):p.createElement(k,l({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var o=2;o<n;o++)l[o]=r[o];return p.createElement.apply(null,l)}return p.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>n,metadata:()=>u,toc:()=>o});var p=r(87462),a=(r(67294),r(3905));const n={},l="Puppeteer class",u={unversionedId:"api/puppeteer.puppeteer",id:"api/puppeteer.puppeteer",title:"Puppeteer class",description:"The main Puppeteer class.",source:"@site/../docs/api/puppeteer.puppeteer.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteer",permalink:"/puppeteer/api/puppeteer.puppeteer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"ProtocolLifeCycleEvent type",permalink:"/puppeteer/api/puppeteer.protocollifecycleevent"},next:{title:"Puppeteer.\\_changedProduct property",permalink:"/puppeteer/api/puppeteer.puppeteer._changedproduct"}},i={},o=[{value:"Remarks",id:"remarks",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],d={toc:o};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,p.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"puppeteer-class"},"Puppeteer class"),(0,a.kt)("p",null,"The main Puppeteer class."),(0,a.kt)("p",null,"IMPORTANT: if you are using Puppeteer in a Node environment, you will get an instance of ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/api/puppeteer.puppeteernode"},"PuppeteerNode")," when you import or require ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer"),". That class extends ",(0,a.kt)("inlineCode",{parentName:"p"},"Puppeteer"),", so has all the methods documented below as well as all that are defined on ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/api/puppeteer.puppeteernode"},"PuppeteerNode"),"."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Puppeteer\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"Puppeteer")," class."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.puppeteer._changedproduct"},"_","changedProduct")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.puppeteer._ispuppeteercore"},"_","isPuppeteerCore")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.puppeteer.devices"},"devices")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"typeof devices"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.puppeteer.errors"},"errors")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"typeof ",(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.errors"},"errors")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.puppeteer.networkconditions"},"networkConditions")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"typeof ",(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.networkconditions"},"networkConditions")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.puppeteer.clearcustomqueryhandlers"},"clearCustomQueryHandlers()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.puppeteer.connect"},"connect(options)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"This method attaches Puppeteer to an existing browser instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.puppeteer.customqueryhandlernames"},"customQueryHandlerNames()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.puppeteer.registercustomqueryhandler"},"registerCustomQueryHandler(name, queryHandler)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.puppeteer.unregistercustomqueryhandler"},"unregisterCustomQueryHandler(name)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);