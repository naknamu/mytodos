(()=>{"use strict";var r,n,t,e,o,a,i,c,s,p,l,d,f,u,g={426:(r,n,t)=>{t.d(n,{Z:()=>h});var e=t(81),o=t.n(e),a=t(645),i=t.n(a),c=t(667),s=t.n(c),p=new URL(t(530),t.b),l=new URL(t(946),t.b),d=new URL(t(90),t.b),f=i()(o()),u=s()(p),g=s()(l),x=s()(d);f.push([r.id,"@font-face {\r\n    font-family: 'Poppins';\r\n    src: url("+u+") format('truetype');\r\n    font-weight: bold;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Poppins';\r\n    src: url("+g+") format('truetype');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Poppins';\r\n    src: url("+x+") format('truetype');\r\n    font-weight: 300;\r\n    font-style: normal;\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    height: 100vh;\r\n}\r\n\r\n.content{\r\n    display: grid;\r\n    grid-template-rows: 100px 1fr 100px;\r\n    height: 100%;\r\n    background-color: #f0eef1;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nheader{\r\n    background-color: white;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px 0px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 36px;\r\n    align-items: center;\r\n}\r\n\r\nheader .login{\r\n    font-size: 18px;\r\n    text-decoration: none;\r\n    color: black;\r\n    padding: 8px 16px;\r\n    border-radius: 6px;\r\n    border: 1px solid black;\r\n    background-color: white;\r\n}\r\n\r\nheader .login:hover{\r\n    background-color: rgba(0, 0, 0, 0.16);\r\n}\r\n\r\nheader .login:active {\r\n    background-color: rgba(0, 0, 0, 0.16);\r\n    box-shadow: 0 5px #555;\r\n    transform: translateY(4px);\r\n}\r\n\r\n.maincontent{\r\n    display: grid;\r\n    grid-template-rows: 50px 1fr;\r\n    gap: 20px;\r\n    padding: 36px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.maincontent .new_project{\r\n    width: 50px;\r\n    border-radius: 50%;\r\n    justify-self: center;\r\n    font-size: 32px;\r\n    border: 4px solid black;\r\n    background-color: white;\r\n}\r\n\r\n.maincontent .new_project:active {\r\n    background-color: rgba(0, 0, 0, 0.16);\r\n    box-shadow: 0 5px #555;\r\n    transform: translateY(4px);\r\n}\r\n\r\n.maincontent .container{\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    gap: 16px;\r\n}\r\n\r\n.maincontent .card{\r\n    width: 250px;\r\n    padding: 20px;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 2px 2px 2px 2px;\r\n    display: grid;\r\n    gap: 8px;\r\n}\r\n\r\n.maincontent .card:hover{\r\n    transform: translateY(-4px);\r\n    box-shadow: rgba(0, 0, 0, 0.16) 5px 5px 5px 5px;\r\n}\r\n\r\n.maincontent .card .buttons{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: flex-end;\r\n}\r\n\r\n.maincontent .card button{\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    border: 2px solid #383838;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    background-color: white;\r\n    color: #383838;\r\n}\r\n\r\n.maincontent button:hover{\r\n    background-color: rgba(0, 0, 0, 0.16);\r\n}\r\n\r\n.maincontent .card button:active {\r\n    background-color: rgba(0, 0, 0, 0.16);\r\n    box-shadow: 0 3px #555;\r\n    transform: translateY(4px);\r\n}\r\n\r\n.maincontent .container .card .title{\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n}\r\n\r\n.maincontent .container .card .details{\r\n    font-size: 14px;\r\n    color: rgba(51, 51, 51, 0.667);\r\n}\r\n\r\nfooter{\r\n    background-color: white;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px 0px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    \r\n}\r\n\r\nfooter ul{\r\n    list-style: none;\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\nfooter a{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\nfooter a:hover{\r\n    text-decoration: underline;\r\n}",""]);const h=f},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var t="",e=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),e&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=r(n),e&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(r,t,e,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(e)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<r.length;p++){var l=[].concat(r[p]);e&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function t(r){for(var t=-1,e=0;e<n.length;e++)if(n[e].identifier===r){t=e;break}return t}function e(r,e){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],p=e.base?s[0]+e.base:s[0],l=a[p]||0,d="".concat(p," ").concat(l);a[p]=l+1;var f=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(u);else{var g=o(u,e);e.byIndex=c,n.splice(c,0,{identifier:d,updater:g,references:1})}i.push(d)}return i}function o(r,n){var t=n.domAPI(n);return t.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;t.update(r=n)}else t.remove()}}r.exports=function(r,o){var a=e(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=e(r,o),p=0;p<a.length;p++){var l=t(a[p]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:r=>{var n={};r.exports=function(r,t){var e=function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}n[r]=t}return n[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,t)=>{r.exports=function(r){var n=t.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(t){!function(r,n,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(e,r,n.options)}(n,r,t)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},530:(r,n,t)=>{r.exports=t.p+"cdb29a5d7ccf57ff05a3.ttf"},90:(r,n,t)=>{r.exports=t.p+"7641a0f76ca9ef6c252c.ttf"},946:(r,n,t)=>{r.exports=t.p+"35d26b781dc5fda684cc.ttf"}},x={};function h(r){var n=x[r];if(void 0!==n)return n.exports;var t=x[r]={id:r,exports:{}};return g[r](t,t.exports,h),t.exports}h.m=g,h.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return h.d(n,{a:n}),n},h.d=(r,n)=>{for(var t in n)h.o(n,t)&&!h.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),h.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;h.g.importScripts&&(r=h.g.location+"");var n=h.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=r})(),h.b=document.baseURI||self.location.href,h.nc=void 0,r=h(379),n=h.n(r),t=h(795),e=h.n(t),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),p=h.n(s),l=h(589),d=h.n(l),f=h(426),(u={}).styleTagTransform=d(),u.setAttributes=c(),u.insert=a().bind(null,"head"),u.domAPI=e(),u.insertStyleElement=p(),n()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals,console.log("Hello World!"),console.log("Are you watching?"),console.log("Alright! Let's go!")})();