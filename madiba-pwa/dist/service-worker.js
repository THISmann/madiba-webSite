if(!self.define){let i,e={};const t=(t,n)=>(t=new URL(t+".js",n).href,e[t]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=t,i.onload=e,document.head.appendChild(i)}else i=t,importScripts(t),e()})).then((()=>{let i=e[t];if(!i)throw new Error(`Module ${t} didn’t register its module`);return i})));self.define=(n,m)=>{const a=i||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let s={};const o=i=>t(i,a),u={module:{uri:a},exports:s,require:o};e[a]=Promise.all(n.map((i=>u[i]||o(i)))).then((i=>(m(...i),s)))}}define(["./workbox-543c38d3"],(function(i){"use strict";i.setCacheNameDetails({prefix:"madiba-pwa"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"https://github.com/THISmann/madiba-webSite/css/app.de75fd2f.css",revision:null},{url:"https://github.com/THISmann/madiba-webSite/img/10.fe6eff2b.png",revision:null},{url:"https://github.com/THISmann/madiba-webSite/img/3.a8ca348b.png",revision:null},{url:"https://github.com/THISmann/madiba-webSite/img/5.0b7dca98.png",revision:null},{url:"https://github.com/THISmann/madiba-webSite/img/6.fc9e60dd.png",revision:null},{url:"https://github.com/THISmann/madiba-webSite/img/7.4a158f05.png",revision:null},{url:"https://github.com/THISmann/madiba-webSite/img/9.4745a138.png",revision:null},{url:"https://github.com/THISmann/madiba-webSite/img/logo.d24a392e.jpeg",revision:null},{url:"https://github.com/THISmann/madiba-webSite/img/pexel1.354c2927.jpg",revision:null},{url:"https://github.com/THISmann/madiba-webSite/index.html",revision:"64243e7b68224b37f76c7d7759813699"},{url:"https://github.com/THISmann/madiba-webSite/js/app.c002d77b.js",revision:null},{url:"https://github.com/THISmann/madiba-webSite/js/chunk-vendors.df87473c.js",revision:null},{url:"https://github.com/THISmann/madiba-webSite/manifest.json",revision:"1a4393a9f82856c7c5f1a1dceb22637e"},{url:"https://github.com/THISmann/madiba-webSite/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
