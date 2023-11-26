/* empty css                      */import{a as d}from"./assets/vendor-a61d8330.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const b=document.querySelectorAll(".scroll-item"),v=document.querySelector(".cart-button"),h=document.querySelector(".cart-form"),$=document.getElementById("user-email");function L(e){document.querySelector(`[aria-label="${e}"]`).remove();const c=(JSON.parse(localStorage.getItem("cartItems"))||[]).filter(o=>o.id!==e);localStorage.setItem("cartItems",JSON.stringify(c))}b.forEach(e=>{e.querySelector(".scroll-top-button").addEventListener("click",function(t){const c=t.currentTarget.getAttribute("aria-label");L(c)})});v.addEventListener("click",function(){});h.addEventListener("submit",function(e){e.preventDefault(),$.value});let n=1,k=9,p=60;const S=document.querySelector(".pages-btn-left"),E=document.querySelector(".pages-btn-right"),a=document.querySelector(".pages-list");S.addEventListener("click",q);E.addEventListener("click",w);a.addEventListener("click",M);function q(e){n!==1&&(n--,console.log(n),l())}function w(e){n>=p||(n++,console.log(n),l())}function M(e){n=Number(e.target.textContent),n&&(console.log(n),l())}async function l(){try{const e=await d.get(`https://food-boutique.b.goit.study/api/products?page=${n}&limit=${k}`);N(e.data.results),A(p)}catch(e){console.error(e)}}l();console.log(p);async function I(){try{let s=function(){return Math.floor(Math.random()*9)};const e=await d.get("https://food-boutique.b.goit.study/api/products/discount"),t=s(),c=t+2,o=e.data.slice(t,c);j(o)}catch(e){console.error(e)}}I();async function P(){try{const e=await d.get("https://food-boutique.b.goit.study/api/products/popular?limit=5");console.log(e.data[0]._id),C(e.data)}catch(e){console.error(e)}}P();const O=document.querySelector(".basic-list");function N(e){const s=e.map(t=>`<li class="basic-item" id="${t._id}">
            <div class="basic-image-wrapper">
              <img
                src="${t.img}"
                alt="${t.name}"
              />
            </div>
            <h3 class="basic-name">${t.name}</h3>
            <div class="basic-info-wrapper">
              <p class="basic-info">
                Category:<span class="category">${t.category}</span>Size:<span
                  class="size"
                  >${t.size}</span
                >
              </p>
              <p class="basic-info">
                Popularity:<span class="popularity">${t.popularity}</span>
              </p>
            </div>
            <div class="basic-last-info">
              <span class="basic-price">$${t.price}</span>
              <button class="basic-btn" type="button" id="${t._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="./images/icons.svg#icon-basket"></use>
                </svg>
              </button>
            </div>
          </li>`).join("");O.innerHTML=s}const T=document.querySelector(".popular-list");function C(e){const s=e.map(t=>` <li class="popular-item" id="${t._id}">
            <div class="popular-image-wrapper">
              <img src="${t.img}" alt="${t.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${t.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket" id="${t._id}">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="./images/icons.svg#icon-basket"></use>
                  </svg>
                </button>
              </div>
              <p class="popular-info">
                Category:<span class="category">${t.category}</span>
              </p>
              <p class="popular-info">
                Size:<span class="size">${t.size}</span>Popularity:<span class="popularity">${t.popularity}</span>
              </p>
            </div>
          </li>`).join("");T.innerHTML=s}const _=document.querySelector(".discount-list");function j(e){const s=e.map(t=>`<li class="discount-item" id="${t._id}">
            <div class="discount-label"> 
            <img src="./images/discount.jpg" alt="discount label" class="discount-img">             
            </div>
            <div class="discount-image-wrapper">
              <img src="${t.img}" alt="${t.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${t.name}</h3>
              <span class="discount-item-price">$${t.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket" id="${t._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="./images/icons.svg#icon-basket"></use>
                </svg>
              </button>
            </div>
          </li>`).join("");_.innerHTML=s}function A(e){let s=[];for(let t=1;t<=e;t++)s.push(t);if(e<=5){const t=s.map(c=>`<li class="pages-item">${c}</li>`).join("");console.log(t),a.innerHTML=t}else if(e>5){if(n<=2||n>e-2){const t=e-4;s.splice(2,t,'<li class="pages-item-points">...</li>');const c=s.map(o=>`<li class="pages-item">${o}</li>`).join("");console.log(c),a.innerHTML=c}else if(n>2){const t=e-2;s.splice(1,t,"...",n-1,n,n+1,"...");const c=s.map(o=>`<li class="pages-item">${o}</li>`).join("");a.innerHTML=c}}}const r=document.querySelector(".backdrop");document.querySelector(".modal-window");const B=document.querySelectorAll(".basic-item"),R=document.querySelectorAll(".popular-item"),z=document.querySelectorAll(".discount-item"),H=document.querySelector(".close_button");B.forEach(e=>{e.addEventListener("click",m)});R.forEach(e=>{e.addEventListener("click",m)});z.forEach(e=>{e.addEventListener("click",m)});function m(){r.addEventListener("click",g),document.addEventListener("keydown",y),r.style.display="block"}H.addEventListener("click",f);function g(e){e.target===r&&f()}function y(e){e.key==="Escape"&&f()}function f(){r.style.display="none",r.removeEventListener("click",g),document.removeEventListener("keydown",y)}
//# sourceMappingURL=commonHelpers2.js.map
