if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const u=e=>n(e,t),r={module:{uri:t},exports:c,require:u};s[t]=Promise.all(i.map((e=>r[e]||u(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"f77a22400cc0a57b2c81358590eb63b0"},{url:"/_next/static/DukqHr5iLkzgunu1v6TZO/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/DukqHr5iLkzgunu1v6TZO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-29cb06cebdd31865.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/23-af24687b27c608c8.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/231-b856842685d436b9.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/30-b3ffae57c72bbdf1.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/390-529dbd4cbe371559.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/416-f2c6817fbbc62b1f.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/479ba886-a07174b685b8401c.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/484-62e21dfe5e46d582.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/5e22fd23-ea12258b9142c161.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/7064611b-05ab4cff8b593dcd.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/77-ccec4dd98bdd08b6.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/869-fcf3ad1c83ff37da.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/8e1d74a4-137c5493d5b446ec.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/app/%5BuserId%5D/chats/page-3c494b5b551d580f.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/app/%5BuserId%5D/dashboard/page-9bd825f1835670e4.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/app/%5BuserId%5D/discover/page-c2e6287714fdc0d7.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/app/%5BuserId%5D/layout-734d94a4617ef7d0.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/app/%5BuserId%5D/page-8fc5f7325003ef37.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/app/%5BuserId%5D/reports/page-4b5b8a7b301dd8f6.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/app/%5BuserId%5D/settings/page-4dd655543984e573.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/app/_not-found/page-114efd66e7586cdc.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/app/layout-6bc7c89782bec597.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/app/page-795d55e3a83bdc2a.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/b2d98e07-37dd4e5a6a87fc7c.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/fd9d1056-6a145bfdadaeb5d9.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/ff804112-90c7208c71927d64.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/main-981cdf43043a81aa.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/main-app-8e2326c1fd5bea21.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-ad3ade5245a193a1.js",revision:"DukqHr5iLkzgunu1v6TZO"},{url:"/_next/static/css/c11b8fe1b5b29471.css",revision:"c11b8fe1b5b29471"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/icon512_maskable.png",revision:"fb1db5952ac4ef58a115e43a7329c89c"},{url:"/icon512_rounded.png",revision:"f248c82a149eaf05971c9b711a6b9548"},{url:"/logo.jpeg",revision:"e877c6926494da17da27f0f2800e60e6"},{url:"/manifest.json",revision:"e9c7a801f6017c26b63e4f4c37115ac8"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
