"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[98068],{3905:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>u});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),u=function(e){return function(n){var r=m(n.components);return t.createElement(e,o({},n,{components:r}))}},m=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=m(e.components);return t.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=m(r),p=a,h=u["".concat(i,".").concat(p)]||u[p]||c[p]||o;return r?t.createElement(h,l(l({ref:n},d),{},{components:r})):t.createElement(h,l({ref:n},d))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},46344:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var t=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={id:"new-in-relay-modern",title:"New in Relay Modern",original_id:"new-in-relay-modern"},s=void 0,d={unversionedId:"new-in-relay-modern",id:"version-v7.0.0/new-in-relay-modern",title:"New in Relay Modern",description:"A summary of the improvements and new features in Relay Modern.",source:"@site/versioned_docs/version-v7.0.0/Modern-NewInRelayModern.md",sourceDirName:".",slug:"/new-in-relay-modern",permalink:"/docs/v7.0.0/new-in-relay-modern",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v7.0.0/Modern-NewInRelayModern.md",tags:[],version:"v7.0.0",lastUpdatedBy:"Miguel Flores",lastUpdatedAt:1697223594,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{id:"new-in-relay-modern",title:"New in Relay Modern",original_id:"new-in-relay-modern"}},u={},m=[{value:"Modern API",id:"modern-api",level:2},{value:"Modern Runtime",id:"modern-runtime",level:2},{value:"Performance",id:"performance",level:3},{value:"Smaller Bundle Size",id:"smaller-bundle-size",level:3},{value:"Garbage Collection",id:"garbage-collection",level:3},{value:"GraphQL Subscriptions &amp; Live Queries",id:"graphql-subscriptions--live-queries",level:3},{value:"Injectable Custom Field Handlers",id:"injectable-custom-field-handlers",level:3},{value:"Simpler Mutation API",id:"simpler-mutation-api",level:3},{value:"Client Schema Extensions (Experimental)",id:"client-schema-extensions-experimental",level:3},{value:"Flow Type Generation",id:"flow-type-generation",level:3},{value:"Fewer Requirements around Routing",id:"fewer-requirements-around-routing",level:2},{value:"Extensible Core",id:"extensible-core",level:2}],p={toc:m};function c(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("blockquote",null,"A summary of the improvements and new features in Relay Modern."),(0,o.mdx)("h2",{id:"modern-api"},"Modern API"),(0,o.mdx)("p",null,"Compared to Relay Classic, the Relay Modern API has the following differentiating features:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"A simpler, more predictable mutation API. The restrictions on mutation queries from Relay Classic are also removed: mutation queries are static, fields can be arbitrarily nested, and may use arbitrary arguments."),(0,o.mdx)("li",{parentName:"ul"},"When using ",(0,o.mdx)("a",{parentName:"li",href:"/docs/v7.0.0/query-renderer"},(0,o.mdx)("inlineCode",{parentName:"a"},"QueryRenderer")),", the restrictions on queries from Relay Classic are removed: queries may contain multiple root fields that use arbitrary arguments and return singular or plural values. The ",(0,o.mdx)("inlineCode",{parentName:"li"},"viewer")," root field is now optional."),(0,o.mdx)("li",{parentName:"ul"},"Routes are now optional: ",(0,o.mdx)("inlineCode",{parentName:"li"},"QueryRenderer")," can be used without defining a route. More in the ",(0,o.mdx)("a",{parentName:"li",href:"/docs/v7.0.0/routing"},"routing guide"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"QueryRenderer")," supports rendering small amounts of data directly, instead of requiring a container to access data. ",(0,o.mdx)("a",{parentName:"li",href:"/docs/v7.0.0/fragment-container"},"Containers")," are optional and can be used as your application grows in size and complexity."),(0,o.mdx)("li",{parentName:"ul"},"The API is overall simpler and more predictable.")),(0,o.mdx)("p",null,"You can use ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v7.0.0/relay-compat"},"Compat mode")," to incrementally adopt Relay Modern APIs in an existing Relay app."),(0,o.mdx)("h2",{id:"modern-runtime"},"Modern Runtime"),(0,o.mdx)("p",null,"For new Relay apps or existing apps that have been fully converted to the Modern/Compat API, the Relay Modern runtime can be enabled to activate even more features. In addition to those described above, this includes:"),(0,o.mdx)("h3",{id:"performance"},"Performance"),(0,o.mdx)("p",null,"The new Relay Modern core is more light-weight and significantly faster than the previous version. It is redesigned to work with static queries, which allow us to push more work to build/compilation time. The Modern core is much smaller as a result of removing a lot of the complex features required for dynamic queries. The new core is also an order of magnitude faster in processing the response with an optimized parsing instruction set that is generated at build time. We no longer keep around tracking information needed for dynamic query generation, which drastically reduces the memory overhead of using Relay. This means more memory is left for making the UI feel responsive. Relay Modern also supports persisted queries, reducing the upload size of the request from the full query text to a simple id."),(0,o.mdx)("h3",{id:"smaller-bundle-size"},"Smaller Bundle Size"),(0,o.mdx)("p",null,"The Relay runtime bundle is roughly 20% of the size of Relay Classic."),(0,o.mdx)("h3",{id:"garbage-collection"},"Garbage Collection"),(0,o.mdx)("p",null,"The runtime automatically removes cached data that is no longer referenced, helping to reduce memory usage."),(0,o.mdx)("h3",{id:"graphql-subscriptions--live-queries"},"GraphQL Subscriptions & Live Queries"),(0,o.mdx)("p",null,"Relay Modern supports GraphQL Subscriptions, using the imperative update API to allow modifications to the store whenever a payload is received. It also features experimental support for GraphQL Live Queries via polling."),(0,o.mdx)("h3",{id:"injectable-custom-field-handlers"},"Injectable Custom Field Handlers"),(0,o.mdx)("p",null,"Some fields - especially those for paginated data - can require post-processing on the client in order to merge previously fetched data with new information. Relay Modern supports custom field handlers that can be used to process these fields to work with various pagination patterns and other use cases."),(0,o.mdx)("h3",{id:"simpler-mutation-api"},"Simpler Mutation API"),(0,o.mdx)("p",null,"An area we've gotten a lot of questions on was mutations and their configs. Relay Modern introduces a new mutation API that allows records and fields to be updated in a more direct manner."),(0,o.mdx)("h3",{id:"client-schema-extensions-experimental"},"Client Schema Extensions (Experimental)"),(0,o.mdx)("p",null,"The Relay Modern Core adds support for client schema extensions. These allow Relay to conveniently store some extra information with data fetched from the server and be rendered like any other field fetched from the server. This should be able to replace some use cases that previously required a Flux/Redux store on the side."),(0,o.mdx)("h3",{id:"flow-type-generation"},"Flow Type Generation"),(0,o.mdx)("p",null,"Relay Modern comes with automatic Flow type generation for the fragments used in Relay containers based on the GraphQL schema. Using these Flow types can help make an application less error-prone, by ensuring all possible ",(0,o.mdx)("inlineCode",{parentName:"p"},"null")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"undefined")," cases are considered even if they don't happen frequently."),(0,o.mdx)("h2",{id:"fewer-requirements-around-routing"},"Fewer Requirements around Routing"),(0,o.mdx)("p",null,"Routes no longer need to know anything about the query root in Relay Modern. Relay components can be rendered anywhere wrapped in a ",(0,o.mdx)("inlineCode",{parentName:"p"},"QueryRenderer"),". This should bring more flexibility around picking routing frameworks."),(0,o.mdx)("h2",{id:"extensible-core"},"Extensible Core"),(0,o.mdx)("p",null,"Relay Modern's core is essentially an un-opinionated store for GraphQL data. It can be used independent of rendering views using React and can be extended to be used with other frameworks."))}c.isMDXComponent=!0}}]);