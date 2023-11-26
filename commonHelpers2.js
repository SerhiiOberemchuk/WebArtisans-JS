/* empty css                      */import{a as d}from"./assets/vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=e(s);fetch(s.href,c)}})();let n=1,b=9,p=60;const v=document.querySelector(".pages-btn-left"),h=document.querySelector(".pages-btn-right"),r=document.querySelector(".pages-list");v.addEventListener("click",$);h.addEventListener("click",L);r.addEventListener("click",k);function $(t){n!==1&&(n--,console.log(n),l())}function L(t){n>=p||(n++,console.log(n),l())}function k(t){n=Number(t.target.textContent),n&&(console.log(n),l())}async function l(){try{const t=await d.get(`https://food-boutique.b.goit.study/api/products?page=${n}&limit=${b}`);S(t.data.results),C(p)}catch(t){console.error(t)}}l();console.log(p);async function w(){try{let o=function(){return Math.floor(Math.random()*9)};const t=await d.get("https://food-boutique.b.goit.study/api/products/discount"),e=o(),i=e+2,s=t.data.slice(e,i);N(s)}catch(t){console.error(t)}}w();async function E(){try{const t=await d.get("https://food-boutique.b.goit.study/api/products/popular?limit=5");console.log(t.data[0]._id),P(t.data)}catch(t){console.error(t)}}E();const q=document.querySelector(".basic-list");function S(t){const o=t.map(e=>`<li class="basic-item" id="${e._id}">
            <div class="basic-image-wrapper">
              <img
                src="${e.img}"
                alt="${e.name}"
              />
            </div>
            <h3 class="basic-name">${e.name}</h3>
            <div class="basic-info-wrapper">
              <p class="basic-info">
                Category:<span class="category">${e.category}</span>Size:<span
                  class="size"
                  >${e.size}</span
                >
              </p>
              <p class="basic-info">
                Popularity:<span class="popularity">${e.popularity}</span>
              </p>
            </div>
            <div class="basic-last-info">
              <span class="basic-price">$${e.price}</span>
              <button class="basic-btn" type="button" id="${e._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="./images/icons.svg#icon-basket"></use>
                </svg>
              </button>
            </div>
          </li>`).join("");q.innerHTML=o}const M=document.querySelector(".popular-list");function P(t){const o=t.map(e=>` <li class="popular-item" id="${e._id}">
            <div class="popular-image-wrapper">
              <img src="${e.img}" alt="${e.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${e.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket" id="${e._id}">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="./images/icons.svg#icon-basket"></use>
                  </svg>
                </button>
              </div>
              <p class="popular-info">
                Category:<span class="category">${e.category}</span>
              </p>
              <p class="popular-info">
                Size:<span class="size">${e.size}</span>Popularity:<span class="popularity">${e.popularity}</span>
              </p>
            </div>
          </li>`).join("");M.innerHTML=o}const O=document.querySelector(".discount-list");function N(t){const o=t.map(e=>`<li class="discount-item" id="${e._id}">
            <div class="discount-label"> 
            <img src="./images/discount.jpg" alt="discount label" class="discount-img">             
            </div>
            <div class="discount-image-wrapper">
              <img src="${e.img}" alt="${e.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${e.name}</h3>
              <span class="discount-item-price">$${e.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket" id="${e._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="./images/icons.svg#icon-basket"></use>
                </svg>
              </button>
            </div>
          </li>`).join("");O.innerHTML=o}function C(t){let o=[];for(let e=1;e<=t;e++)o.push(e);if(t<=5){const e=o.map(i=>`<li class="pages-item">${i}</li>`).join("");console.log(e),r.innerHTML=e}else if(t>5){if(n<=2||n>t-2){const e=t-4;o.splice(2,e,'<li class="pages-item-points">...</li>');const i=o.map(s=>`<li class="pages-item">${s}</li>`).join("");console.log(i),r.innerHTML=i}else if(n>2){const e=t-2;o.splice(1,e,"...",n-1,n,n+1,"...");const i=o.map(s=>`<li class="pages-item">${s}</li>`).join("");r.innerHTML=i}}}const a=document.querySelector(".backdrop");document.querySelector(".modal-window");const T=document.querySelectorAll(".basic-item"),_=document.querySelectorAll(".popular-item"),j=document.querySelectorAll(".discount-item"),z=document.querySelector(".close_button");T.forEach(t=>{t.addEventListener("click",m)});_.forEach(t=>{t.addEventListener("click",m)});j.forEach(t=>{t.addEventListener("click",m)});function m(){a.addEventListener("click",g),document.addEventListener("keydown",y),a.style.display="block"}z.addEventListener("click",f);function g(t){t.target===a&&f()}function y(t){t.key==="Escape"&&f()}function f(){a.style.display="none",a.removeEventListener("click",g),document.removeEventListener("keydown",y)}
//# sourceMappingURL=commonHelpers2.js.map
