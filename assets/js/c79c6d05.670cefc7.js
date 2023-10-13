"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[23629],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){return function(t){var a=u(t.components);return n.createElement(e,o({},t,{components:a}))}},u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},68629:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(39960),r=a(86341),o=a(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var s=function(){var e=o.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},d=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return o.createElement(l,null,o.createElement(c,null),o.createElement(s,null),o.createElement(d,null))},m=function(){return o.createElement(l,null,o.createElement(s,null),o.createElement(d,null))};const p=function(){return(0,r.fbContent)({internal:o.createElement(u,null),external:o.createElement(m,null)})}},72382:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=a(68629),l=a(86341),s=["components"],c={id:"home",title:"Home",slug:"/",description:"Relay documentation landing page",keywords:["relay","graphql","data","introduction","home"]},d="Relay Docs",u={unversionedId:"home",id:"version-v15.0.0/home",title:"Home",description:"Relay documentation landing page",source:"@site/versioned_docs/version-v15.0.0/home.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v15.0.0/home.md",tags:[],version:"v15.0.0",lastUpdatedBy:"Miguel Flores",lastUpdatedAt:1697223594,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{id:"home",title:"Home",slug:"/",description:"Relay documentation landing page",keywords:["relay","graphql","data","introduction","home"]},sidebar:"docs",next:{title:"Tutorial Intro",permalink:"/docs/tutorial/intro"}},m={},p=[{value:"Features",id:"features",level:2},{value:"Stack",id:"stack",level:2},{value:"Where to Go from Here",id:"where-to-go-from-here",level:2}],h={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.mdx)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"relay-docs"},"Relay Docs"),(0,o.mdx)("p",null,"Relay is a data management library for React that lets you fetch and update data with GraphQL. It embodies years of learning to give you ",(0,o.mdx)("strong",{parentName:"p"},"outstanding performance by default")," while keeping your code ",(0,o.mdx)("strong",{parentName:"p"},"stable and maintainable"),"."),(0,o.mdx)("p",null,"Relay brings the composability of React components to data fetching. Each component declares its own data needs, and Relay combines them into efficient pre-loadable queries. Every aspect of its design is to make the natural way of writing components also the most performant."),(0,o.mdx)("h2",{id:"features"},"Features"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Declarative data: Just declare what data each component needs and Relay will handle the loading states."),(0,o.mdx)("li",{parentName:"ul"},"Co-location and composability: Each component declares its own data needs; Relay combines them into efficient queries. When you re-use a component on a different screen, your queries are automatically updated."),(0,o.mdx)("li",{parentName:"ul"},"Pre-fetching: Relay analyses your code so you can start fetching queries before your code even downloads or runs."),(0,o.mdx)("li",{parentName:"ul"},"UI patterns: Relay implements loading states, pagination, refetching, optimistic updates, rollbacks, and other common UI behaviors that are tricky to get right."),(0,o.mdx)("li",{parentName:"ul"},"Consistent updates: Relay maintains a normalized data store, so components that observe the same data stay in sync even if they reach it by different queries."),(0,o.mdx)("li",{parentName:"ul"},"Streaming and deferred data: Declaratively defer parts of your query and Relay will progressively re-render your UI as the data streams in."),(0,o.mdx)("li",{parentName:"ul"},"Great developer experience: Relay provides autocompletion and go-to-definition for your GraphQL schema."),(0,o.mdx)("li",{parentName:"ul"},"Type safety: Relay generates type definitions so that mistakes are caught statically, not at runtime."),(0,o.mdx)("li",{parentName:"ul"},"Manage local data: Use the same API for server data and local client state."),(0,o.mdx)("li",{parentName:"ul"},"Hyper-optimized runtime: Relay is relentlessly optimized. Its JIT-friendly runtime processes incoming data faster by statically determining what payloads to expect.")),(0,o.mdx)("h2",{id:"stack"},"Stack"),(0,o.mdx)("p",null,"Relay works on the Web and on React Native \u2014 it is used extensively at Meta in both environments. It is framework-agnostic and works with Next, React Router, Create React App, etc. It works with both TypeScript and Flow."),(0,o.mdx)("p",null,"Relay is completely tied to GraphQL, so if you cannot use GraphQL then it's not the right choice for you."),(0,o.mdx)("p",null,"Relay has a UI-agnostic layer that fetches and manages data, and a React-specific layer that handles loading states, pagination, and other UI paradigms. It is mainly supported when used with React, although you can access your Relay data outside of React if you need to. The React-specific parts of Relay are based on Suspense, so there are some limitations if you're stuck on an older version of React."),(0,o.mdx)("h2",{id:"where-to-go-from-here"},"Where to Go from Here"),(0,o.mdx)(l.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("div",{class:"bigCallToAction"},"Start with the ",(0,o.mdx)("strong",null,(0,o.mdx)("a",{href:"tutorial/intro/"},"tutorial"))," \u2014 it will take you step-by-step through building a Relay app."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"An overview of the ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("a",{parentName:"strong",href:"./getting-started/prerequisites/"},"prerequisites"))," for using Relay, and an ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("a",{parentName:"strong",href:"./getting-started/installation-and-setup/"},"installation and setup guide")),"."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("a",{parentName:"strong",href:"./api-reference/relay-environment-provider/"},"API reference")),", for a reference of our APIs including a detailed overview of their inputs and outputs."))),(0,o.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Start with the ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("a",{parentName:"strong",href:"./tutorial/intro/"},"tutorial"))," \u2014 it will take you step-by-step through building a Relay app."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("a",{parentName:"strong",href:"./api-reference/relay-environment-provider/"},"API reference")),", for a reference of our APIs including a detailed overview of their inputs and outputs."))),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}f.isMDXComponent=!0}}]);