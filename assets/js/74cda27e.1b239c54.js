(self.webpackChunk=self.webpackChunk||[]).push([[60666],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),u=function(e){return function(n){var t=c(n.components);return a.createElement(e,i({},n,{components:t}))}},c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),p=r,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=h;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var a=t(79973),r=t(67294),i=t(73727),s=t(52263),o=t(13919),l=t(10412),d=(0,r.createContext)({collectLink:function(){}}),u=t(44996),c=t(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var n,t,m=e.isNavLink,h=e.to,f=e.href,g=e.activeClassName,y=e.isActive,b=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,x=void 0===w||w,v=(0,a.Z)(e,p),N=(0,s.default)().siteConfig,S=N.trailingSlash,C=N.baseUrl,k=(0,u.useBaseUrlUtils)().withBaseUrl,O=(0,r.useContext)(d),R=h||f,T=(0,o.Z)(R),M=null==R?void 0:R.replace("pathname://",""),I=void 0!==M?(t=M,x&&function(e){return e.startsWith("/")}(t)?k(t):t):void 0;I&&T&&(I=(0,c.applyTrailingSlash)(I,{trailingSlash:S,baseUrl:C}));var F=(0,r.useRef)(!1),E=m?i.OL:i.rU,j=l.default.canUseIntersectionObserver,L=(0,r.useRef)();(0,r.useEffect)((function(){return!j&&T&&null!=I&&window.docusaurus.prefetch(I),function(){j&&L.current&&L.current.disconnect()}}),[L,I,j,T]);var q=null!==(n=null==I?void 0:I.startsWith("#"))&&void 0!==n&&n,P=!I||!T||q;return I&&T&&!q&&!b&&O.collectLink(I),P?r.createElement("a",Object.assign({href:I},R&&!T&&{target:"_blank",rel:"noopener noreferrer"},v)):r.createElement(E,Object.assign({},v,{onMouseEnter:function(){F.current||null==I||(window.docusaurus.preload(I),F.current=!0)},innerRef:function(e){var n,t;j&&e&&T&&(n=e,t=function(){null!=I&&window.docusaurus.prefetch(I)},L.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.current.unobserve(n),L.current.disconnect(),t())}))})),L.current.observe(n))},to:I||""},m&&{isActive:y,activeClassName:g}))}},13919:(e,n,t)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,{b:()=>a,Z:()=>r})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>i,default:()=>s});var a=t(52263),r=t(13919);function i(){var e=(0,a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,s=i.forcePrependBaseUrl,o=void 0!==s&&s,l=i.absolute,d=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(o)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return d?e+u:u}(i,t,e,n)}}}function s(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,a=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var r,i=e.split(/[#?]/)[0],s="/"===i||i===a?i:(r=i,t?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,s)}},18780:function(e,n,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var r=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return a(i).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>m});var a=t(36742),r=t(44256),i=t(67294);function s(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var l=function(){var e=i.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:s},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return i.createElement(o,null,i.createElement(d,null),i.createElement(l,null),i.createElement(u,null))},p=function(){return i.createElement(o,null,i.createElement(l,null),i.createElement(u,null))};const m=function(){return(0,r.fbContent)({internal:i.createElement(c,null),external:i.createElement(p,null)})}},25058:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>d,contentTitle:()=>u,metadata:()=>c,toc:()=>p,default:()=>v});var a=t(74034),r=t(79973),i=(t(67294),t(3905)),s=t(68629),o=t(44256),l=["components"],d={id:"loading-states",title:"Loading States with Suspense",slug:"/guided-tour/rendering/loading-states/",description:"Relay guide to loading states",keywords:["suspense","loading","glimmer","fallback","spinner"]},u=void 0,c={unversionedId:"guided-tour/rendering/loading-states",id:"version-v12.0.0/guided-tour/rendering/loading-states",isDocsHomePage:!1,title:"Loading States with Suspense",description:"Relay guide to loading states",source:"@site/versioned_docs/version-v12.0.0/guided-tour/rendering/loading-states.md",sourceDirName:"guided-tour/rendering",slug:"/guided-tour/rendering/loading-states/",permalink:"/docs/v12.0.0/guided-tour/rendering/loading-states/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/rendering/loading-states.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1644617479,formattedLastUpdatedAt:"2/11/2022",frontMatter:{id:"loading-states",title:"Loading States with Suspense",slug:"/guided-tour/rendering/loading-states/",description:"Relay guide to loading states",keywords:["suspense","loading","glimmer","fallback","spinner"]},sidebar:"version-v12.0.0/docs",previous:{title:"Variables",permalink:"/docs/v12.0.0/guided-tour/rendering/variables/"},next:{title:"Error States with ErrorBoundaries",permalink:"/docs/v12.0.0/guided-tour/rendering/error-states/"}},p=[{value:"Loading fallbacks with Suspense Boundaries",id:"loading-fallbacks-with-suspense-boundaries",children:[],level:2},{value:"Transitions and Updates that Suspend",id:"transitions-and-updates-that-suspend",children:[],level:2},{value:"How We Use Suspense in Relay",id:"how-we-use-suspense-in-relay",children:[{value:"Queries",id:"queries",children:[],level:3},{value:"Fragments",id:"fragments",children:[],level:3},{value:"Transitions",id:"transitions",children:[],level:3}],level:2}],m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},h=m("FbSuspenseDefinition"),f=m("FbSuspenseMoreInfo"),g=m("FbSuspensePlaceholder"),y=m("FbSuspenseTransitionsAndUpdatesThatSuspend"),b=m("FbSuspenseInRelayFragments"),w=m("FbSuspenseInRelayTransitions"),x={toc:p};function v(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,a.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"As you may have noticed, we mentioned that using ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," will render data from a query that was being fetched from the server, but we didn't elaborate on how to render a loading UI (such as a glimmer) while that data is still being fetched. We will cover that in this section."),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(h,{mdxType:"FbSuspenseDefinition"})),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"To render loading states while a query is being fetched, we rely on ",(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-suspense.html"},"React Suspense"),". Suspense is a new feature in React that allows components to interrupt or ",(0,i.mdx)("em",{parentName:"p"},'"suspend"'),' rendering in order to wait for some asynchronous resource (such as code, images or data) to be loaded; when a component "suspends", it indicates to React that the component isn\'t ',(0,i.mdx)("em",{parentName:"p"},'"ready"')," to be rendered yet, and won't be until the asynchronous resource it's waiting for is loaded. When the resource finally loads, React will try to render the component again.")),(0,i.mdx)("p",null,"This capability is useful for components to express asynchronous dependencies like data, code, or images that they require in order to render, and lets React coordinate rendering the loading states across a component tree as these asynchronous resources become available. More generally, the use of Suspense give us better control to implement more deliberately designed loading states when our app is loading for the first time or when it's transitioning to different states, and helps prevent accidental flickering of loading elements (such as spinners), which can commonly occur when loading sequences aren't explicitly designed and coordinated."),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(f,{mdxType:"FbSuspenseMoreInfo"})),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Note that this ",(0,i.mdx)("strong",{parentName:"p"},"DOES NOT"),' mean that "Suspense for Data Fetching" is ready for general implementation and adoption yet. ',(0,i.mdx)("strong",{parentName:"p"},"Support, general guidance, and requirements for usage of Suspense for Data Fetching are still not ready"),", and the React team is still defining what this guidance will be for upcoming React releases."),(0,i.mdx)("p",{parentName:"div"},"Even though there will be some limitations when Suspense is used in React 17, Relay Hooks are stable and on the trajectory for supporting upcoming releases of React."),(0,i.mdx)("p",{parentName:"div"},"For more information, see our ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"../../../migration-and-compatibility/suspense-compatibility/"},"Suspense Compatibility"))," guide.")))),(0,i.mdx)("h2",{id:"loading-fallbacks-with-suspense-boundaries"},"Loading fallbacks with Suspense Boundaries"),(0,i.mdx)("p",null,"When a component is suspended, we need to render a ",(0,i.mdx)("em",{parentName:"p"},"fallback")," in place of the component while we wait for it to become ",(0,i.mdx)("em",{parentName:"p"},'"ready"'),". In order to do so, we use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Suspense")," component provided by React:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    // Render a fallback using Suspense as a wrapper\n    <Suspense fallback={<LoadingGlimmer />}>\n      <CanSuspend />\n    </Suspense>\n  );\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Suspense")," components can be used to wrap any component; if the target component suspends, ",(0,i.mdx)("inlineCode",{parentName:"p"},"Suspense")," will render the provided fallback until all its descendants become ",(0,i.mdx)("em",{parentName:"p"},'"ready"')," (i.e. until ",(0,i.mdx)("em",{parentName:"p"},"all")," of the suspended components within the subtree resolve). Usually, the fallback is used to render fallback loading states such as a glimmers and placeholders."),(0,i.mdx)("p",null,"Usually, different pieces of content in our  app might suspend, so we can show loading state until they are resolved by using ",(0,i.mdx)("inlineCode",{parentName:"p"},"Suspense")," :"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    // LoadingGlimmer is rendered via the Suspense fallback\n    <Suspense fallback={<LoadingGlimmer />}>\n      <MainContent /> {/* MainContent may suspend */}\n    </Suspense>\n  );\n}\n")),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(g,{mdxType:"FbSuspensePlaceholder"})),(0,i.mdx)("p",null,"Let's distill what's going on here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"If ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," suspends because it's waiting on some asynchronous resource (like data), the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspense")," component that wraps ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," will detect that it suspended, and will render the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fallback")," element (i.e. the ",(0,i.mdx)("inlineCode",{parentName:"li"},"LoadingGlimmer")," in this case) up until ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," is ready to be rendered. Note that this also transitively includes descendants of ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent"),", which might also suspend.")),(0,i.mdx)("p",null,"What's nice about Suspense is that you have granular control about how to accumulate loading states for different parts of your component tree:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    // A LoadingGlimmer for *_all_* content is rendered via the Suspense fallback\n    <Suspense fallback={<LoadingGlimmer />}>\n      <MainContent />\n      <SecondaryContent /> {/* SecondaryContent can also suspend */}\n    </Suspense>\n  );\n}\n")),(0,i.mdx)(g,{mdxType:"FbSuspensePlaceholder"}),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"In this case, both ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"SecondaryContent")," may suspend while they load their asynchronous resources; by wrapping both in a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspense"),", we can show a single loading state up until they are ",(0,i.mdx)("em",{parentName:"li"},"all")," ready, and then render the entire content in a single paint, after everything has successfully loaded."),(0,i.mdx)("li",{parentName:"ul"},"In fact, ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"SecondaryContent")," may suspend for different reasons other than fetching data, but the same ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspense")," component can be used to render a fallback up until ",(0,i.mdx)("em",{parentName:"li"},"all")," components in the subtree are ready to be rendered. Note that this also transitively includes descendants of ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"SecondaryContent"),", which might also suspend.")),(0,i.mdx)("p",null,"Conversely, you can also decide to be more granular about your loading UI and wrap Suspense components around smaller or individual parts of your component tree:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    <>\n      {/* Show a separate loading UI for the LeftHandColumn */}\n      <Suspense fallback={<LeftColumnPlaceholder />}>\n        <LeftColumn />\n      </Suspense>\n\n      {/* Show a separate loading UI for both the Main and Secondary content */}\n      <Suspense fallback={<LoadingGlimmer />}>\n        <MainContent />\n        <SecondaryContent />\n      </Suspense>\n    </>\n  );\n}\n")),(0,i.mdx)(g,{mdxType:"FbSuspensePlaceholder"}),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"In this case, we're showing 2 separate loading UIs:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"One to be shown until the ",(0,i.mdx)("inlineCode",{parentName:"li"},"LeftColumn")," becomes ready"),(0,i.mdx)("li",{parentName:"ul"},"And one to be shown until both the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"SecondaryContent")," become ready."))),(0,i.mdx)("li",{parentName:"ul"},"What is powerful about this is that by more granularly wrapping our components in Suspense, ",(0,i.mdx)("em",{parentName:"li"},"we allow other components to be rendered earlier as they become ready"),". In our example, by separately wrapping ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"SecondaryContent")," under ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspense"),", we're allowing ",(0,i.mdx)("inlineCode",{parentName:"li"},"LeftColumn")," to render as soon as it becomes ready, which might be earlier than when the content sections become ready.")),(0,i.mdx)("h2",{id:"transitions-and-updates-that-suspend"},"Transitions and Updates that Suspend"),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(y,{mdxType:"FbSuspenseTransitionsAndUpdatesThatSuspend"})),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Suspense")," boundary fallbacks allow us to describe our loading placeholders when initially rendering some content, but our applications will also have transitions between different content. Specifically, when switching between two components within an already mounted boundary, the new component you're switching to might not have loaded all of its async dependencies, which means that it might also suspend."),(0,i.mdx)("p",null,"In these cases, we would still show the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Suspense")," boundary fallbacks. However, this means that we would hide existing content in favor of showing the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Suspense")," fallback. In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.")),(0,i.mdx)("h2",{id:"how-we-use-suspense-in-relay"},"How We Use Suspense in Relay"),(0,i.mdx)("h3",{id:"queries"},"Queries"),(0,i.mdx)("p",null,"In our case, our query components are components that can suspend, so we use Suspense to render loading states while a query is being fetched. Let's see what that looks like in practice:"),(0,i.mdx)("p",null,"Say we have the following query renderer component:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * MainContent.react.js\n *\n * Query Component\n */\n\nconst React = require('React');\nconst {graphql, usePreloadedQuery} = require('react-relay');\n\nfunction MainContent(props) {\n  // Fetch and render a query\n  const data = usePreloadedQuery<...>(\n    graphql`...`,\n    props.queryRef,\n  );\n\n  return (...);\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    // LoadingGlimmer is rendered via the Suspense fallback\n    <Suspense fallback={<LoadingGlimmer />}>\n      <MainContent /> {/* MainContent may suspend */}\n    </Suspense>\n  );\n}\n")),(0,i.mdx)(g,{mdxType:"FbSuspensePlaceholder"}),(0,i.mdx)("p",null,"Let's distill what's going on here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"We have a ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," component, which is a query renderer that fetches and renders a query. ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," will ",(0,i.mdx)("em",{parentName:"li"},"suspend")," rendering when it attempts to fetch the query, indicating that it isn't ready to be rendered yet, and it will resolve when the query is fetched."),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspense "),"component that wraps ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," will detect that ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," suspended, and will render the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fallback")," element (i.e. the ",(0,i.mdx)("inlineCode",{parentName:"li"},"LoadingGlimmer")," in this case) up until ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," is ready to be rendered; that is, up until the query is fetched.")),(0,i.mdx)("h3",{id:"fragments"},"Fragments"),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(b,{mdxType:"FbSuspenseInRelayFragments"})),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"Fragments are also integrated with Suspense in order to support rendering of data that's being ",(0,i.mdx)("inlineCode",{parentName:"p"},"@defer'"),"d or data that's partially available in the Relay Store (i.e. ",(0,i.mdx)("a",{parentName:"p",href:"../../reusing-cached-data/rendering-partially-cached-data/"},"partial rendering"),").")),(0,i.mdx)("h3",{id:"transitions"},"Transitions"),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(w,{mdxType:"FbSuspenseInRelayTransitions"})),(0,i.mdx)("p",null,"Additionally, our APIs for refetching (",(0,i.mdx)("a",{parentName:"p",href:"../../refetching/"},"Refreshing and Refetching"),") and for ",(0,i.mdx)("a",{parentName:"p",href:"../../list-data/connections/"},"rendering connections")," are also integrated with Suspense; for these use cases, these APIs will also suspend."),(0,i.mdx)(s.Z,{mdxType:"DocsRating"}))}v.isMDXComponent=!0}}]);