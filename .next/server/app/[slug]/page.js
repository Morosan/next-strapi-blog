(()=>{var e={};e.id=42,e.ids=[42],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6858:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>g,tree:()=>u});var r=a(7096),s=a(6132),i=a(7284),n=a.n(i),l=a(2564),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);a.d(t,o);let u=["",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,9790)),"D:\\dev\\next-strapi-blog\\src\\app\\[slug]\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,7281)),"D:\\dev\\next-strapi-blog\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\dev\\next-strapi-blog\\src\\app\\[slug]\\page.js"],c="/[slug]/page",p={require:a,loadChunk:()=>Promise.resolve()},g=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[slug]/page",pathname:"/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},3954:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,6686,23))},6116:e=>{e.exports={featuredImage:"style_featuredImage__5SLrg"}},9790:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c,generateStaticParams:()=>generateStaticParams});var r=a(4656),s=a(4544),i=a(8639),n=a.n(i),l=a(6116),o=a.n(l),u=a(9155),d=a(9527);let BlogDetails=async e=>{let t=await (0,u.Z)(`filters[slug][$eq]=${e.params.slug}`);if(0===t.data.length)return null;let a=t.data[0];return(0,r.jsxs)("div",{className:"container pb-80",children:[r.jsx("div",{className:"row mb-50",children:(0,r.jsxs)("div",{className:"col_9",children:[r.jsx("div",{className:`h6 mb-20 c-${(0,s.Z)(a.attributes.Category)}`,children:a.attributes.Category}),r.jsx("h2",{children:a.attributes.title})]})}),r.jsx(n(),{className:`${o().featuredImage} mb-50`,src:`${d.Z.api}${a.attributes.FeaturedImage.data.attributes.url}`,alt:"Featured Image",width:"1280",height:"387"}),r.jsx("div",{className:"row",children:r.jsx("div",{className:"col col_9",dangerouslySetInnerHTML:{__html:a.attributes.Content}})})]})},generateStaticParams=async()=>{let e=await (0,u.Z)();return e.data.map(e=>({slug:e.attributes.slug}))},c=BlogDetails}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[650,257,849,161],()=>__webpack_exec__(6858));module.exports=a})();