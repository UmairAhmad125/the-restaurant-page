(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var d=n.getElementsByTagName("script");d.length&&(t=d[d.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=()=>{const e=document.getElementById("content"),t=document.createElement("h1"),n=document.createTextNode("Restaurant de Bon Appetite");t.appendChild(n);const d=document.createElement("p"),c=document.createTextNode("Welcome to restaurant de bon appetite, We serve all kind of food like BBQ, Chinese, Continental, Italian, Mexican and for veggies");d.appendChild(c);const o=document.createElement("div");o.appendChild(t),o.appendChild(d),o.classList.add("inner-container");const a=document.createElement("div");a.appendChild(o),a.classList.add("outerDiv"),t.classList.add("font-weight-bold"),d.classList.add("mt-3"),a.setAttribute("id","outer-div"),e.appendChild(a)},n=e.p+"da33fa869b246ce4b0fa7f67b32789fd.jpg",d=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("food-items");for(let e=0;e<4;e+=1){const e=document.createElement("div"),d=document.createElement("div"),c=document.createElement("h5","m-5"),o=document.createElement("p","m-5");d.appendChild(c),d.appendChild(o),c.textContent="bon Chessee Cheese",o.textContent="obono nadb kakdb kb",e.classList.add("foodContainer"),d.classList.add("card-body"),c.classList.add("card-title","font-weight-bold"),o.classList.add("card-text");const a=new Image;a.src=n,a.classList.add("food-image","d-block","card-img-top"),e.appendChild(a),e.appendChild(d),t.appendChild(e)}t.setAttribute("id","menu-items"),e.appendChild(t)},c=e.p+"9b5b90dae23d58ac879a5582eeb0a860.jpg",o=()=>{const e=document.getElementById("content"),t=document.createElement("h1"),n=document.createTextNode("Restaurant de Bon Appetite");t.appendChild(n);const d=document.createElement("h1"),c=document.createTextNode("Contact Form");d.appendChild(c);const o=document.createElement("form");o.classList.add("form","form-group");const a=document.createElement("input");a.setAttribute("type","textarea"),a.setAttribute("name","Message"),a.setAttribute("placeholder","Type Your Message");const i=document.createElement("input");i.setAttribute("type","submit"),i.setAttribute("value","Submit"),i.classList.add("btn","btn-danger","ml-2"),o.appendChild(a),o.appendChild(i);const s=document.createElement("p"),l=document.createTextNode("Welcome to restaurant de bon appetite, We serve all kind of food like BBQ, Chinese, Continental, Italian, Mexican and for veggies");s.appendChild(l);const m=document.createElement("div");m.appendChild(t),m.appendChild(d),m.appendChild(o),m.appendChild(s),m.classList.add("inner-container");const r=document.createElement("div");r.appendChild(m),r.classList.add("outerDiv"),t.classList.add("font-weight-bold"),s.classList.add("mt-3"),r.setAttribute("id","contact-us"),e.appendChild(r)};(()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div");n.classList.add("tabs-cont"),e.appendChild(t),e.appendChild(n);const d=new Image;d.src=c,d.classList.add("logo"),t.appendChild(d);const o=document.createElement("li"),a=document.createElement("li"),i=document.createElement("li");o.setAttribute("id","home"),a.setAttribute("id","menu"),i.setAttribute("id","contact");const s=document.createTextNode("Home");o.appendChild(s);const l=document.createTextNode("Menu");a.appendChild(l);const m=document.createTextNode("Contact us");i.appendChild(m),n.appendChild(o),n.appendChild(a),n.appendChild(i),e.classList.add("navCont");const r=document.getElementById("content");r.innerHTML="",r.appendChild(e)})(),t();let a=1;document.getElementById("home").addEventListener("click",(()=>{1===a?(document.getElementById("outer-div").remove(),t()):2===a?(document.getElementById("menu-items").remove(),t()):(document.getElementById("contact-us").remove(),t()),a=1})),document.getElementById("menu").addEventListener("click",(()=>{1===a?(document.getElementById("outer-div").remove(),d()):2===a?(document.getElementById("menu-items").remove(),d()):(document.getElementById("contact-us").remove(),d()),a=2})),document.getElementById("contact").addEventListener("click",(()=>{1===a?(document.getElementById("outer-div").remove(),o()):2===a?(document.getElementById("menu-items").remove(),o()):(document.getElementById("contact-us").remove(),o()),a=3}))})();