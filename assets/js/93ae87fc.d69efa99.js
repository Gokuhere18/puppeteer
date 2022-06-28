"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return n?a.createElement(g,p(p({ref:t},c),{},{components:n})):a.createElement(g,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var u=2;u<o;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},p="Page.evaluateOnNewDocument() method",l={unversionedId:"api/puppeteer.page.evaluateonnewdocument",id:"api/puppeteer.page.evaluateonnewdocument",title:"Page.evaluateOnNewDocument() method",description:"Adds a function which would be invoked in one of the following scenarios:",source:"@site/../docs/api/puppeteer.page.evaluateonnewdocument.md",sourceDirName:"api",slug:"/api/puppeteer.page.evaluateonnewdocument",permalink:"/puppeteer/api/puppeteer.page.evaluateonnewdocument",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Page.evaluateHandle() method",permalink:"/puppeteer/api/puppeteer.page.evaluatehandle"},next:{title:"Page.exposeFunction() method",permalink:"/puppeteer/api/puppeteer.page.exposefunction"}},i={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pageevaluateonnewdocument-method"},"Page.evaluateOnNewDocument() method"),(0,r.kt)("p",null,"Adds a function which would be invoked in one of the following scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"whenever the page is navigated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"whenever the child frame is attached or navigated. In this case, the function is invoked in the context of the newly attached frame."))),(0,r.kt)("p",null,"The function is invoked after the document was created but before any of its scripts were run. This is useful to amend the JavaScript environment, e.g. to seed ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.random"),"."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"evaluateOnNewDocument<Params extends unknown[], Func extends (...args: Params) => unknown = (...args: Params) => unknown>(pageFunction: Func | string, ...args: Params): Promise<void>;\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},"Function to be evaluated in browser context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"Params"),(0,r.kt)("td",{parentName:"tr",align:null},"Arguments to pass to ",(0,r.kt)("code",null,"pageFunction"))))),(0,r.kt)("b",null,"Returns:"),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"An example of overriding the navigator.languages property before the page loads:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// preload.js\n\n// overwrite the `languages` property to use a custom getter\nObject.defineProperty(navigator, 'languages', {\nget: function () {\nreturn ['en-US', 'en', 'bn'];\n},\n});\n\n// In your puppeteer script, assuming the preload.js file is\nin same folder of our script\nconst preloadFile = fs.readFileSync('./preload.js', 'utf8');\nawait page.evaluateOnNewDocument(preloadFile);\n")))}s.isMDXComponent=!0}}]);