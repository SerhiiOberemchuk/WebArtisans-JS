/* empty css                      */import{a as l}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();let n=1,y=9,p=60;const h=document.querySelector(".pages-btn-left"),v=document.querySelector(".pages-btn-right"),r=document.querySelector(".pages-list");h.addEventListener("click",$);v.addEventListener("click",L);r.addEventListener("click",k);function $(s){n!==1&&(n--,console.log(n),u())}function L(s){n>=p||(n++,console.log(n),u())}function k(s){n=Number(s.target.textContent),n&&(console.log(n),u())}async function u(){try{const s=await l.get(`https://food-boutique.b.goit.study/api/products?page=${n}&limit=${y}`);S(s.data.results),O(p)}catch(s){console.error(s)}}u();console.log(p);async function w(){try{let t=function(){return Math.floor(Math.random()*9)};const s=await l.get("https://food-boutique.b.goit.study/api/products/discount"),e=t(),i=e+2,o=s.data.slice(e,i);C(o)}catch(s){console.error(s)}}w();async function _(){try{const s=await l.get("https://food-boutique.b.goit.study/api/products/popular?limit=5");console.log(s.data[0]._id),P(s.data)}catch(s){console.error(s)}}_();const q=document.querySelector(".basic-list");function S(s){const t=s.map(e=>`<li class="basic-item" id="${e._id}">
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
          </li>`).join("");q.innerHTML=t}const M=document.querySelector(".popular-list");function P(s){const t=s.map(e=>` <li class="popular-item" id="${e._id}">
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
          </li>`).join("");M.innerHTML=t}const E=document.querySelector(".discount-list");function C(s){const t=s.map(e=>`<li class="discount-item" id="${e._id}">
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
          </li>`).join("");E.innerHTML=t}function O(s){let t=[];for(let e=1;e<=s;e++)t.push(e);if(s<=5){const e=t.map(i=>`<li class="pages-item">${i}</li>`).join("");console.log(e),r.innerHTML=e}else if(s>5){if(n<=2||n>s-2){const e=s-4;t.splice(2,e,'<li class="pages-item-points">...</li>');const i=t.map(o=>`<li class="pages-item">${o}</li>`).join("");console.log(i),r.innerHTML=i}else if(n>2){const e=s-2;t.splice(1,e,"...",n-1,n,n+1,"...");const i=t.map(o=>`<li class="pages-item">${o}</li>`).join("");r.innerHTML=i}}}const c=document.querySelector(".backdrop"),N=document.querySelector(".modal_window"),T=document.querySelector(".basic-list"),z=document.querySelector(".popular-list"),j=document.querySelector(".discount-list");async function H(s){try{return(await l.get(`https://food-boutique.b.goit.study/api/products/${s}`)).data}catch(t){throw console.error(t),t}}T.addEventListener("click",m);z.addEventListener("click",m);j.addEventListener("click",m);async function m(s){const t=s.target.closest(".basic-item")||s.target.closest(".popular-item")||s.target.closest(".discount-item");if(!t)return;const e=t.id;try{const i=await H(e);console.log(i),i&&(B(i),c.style.display="block",c.addEventListener("click",f),document.addEventListener("keydown",b),document.querySelector(".close_button").addEventListener("click",g))}catch(i){console.log(i)}}function B(s){const t=`<button class="close_button" type="button" aria-label="Close">
      <svg class="close-btn-icon" width="24" height="24">
        <use href="./images/icons.svg#icon-close"></use>
      </svg>
    </button>
    <div class="item_image">
    <img src="${s.img}" alt="${s.name}" /></div>
    <div class="item_description">
      <h2 class="item_name">${s.name}</h2>
      <ul class="product_params">
        <li class="item_params">
          <p>Category: <span class="params_type">${s.category}</span></p>
        </li>
        <li class="item_params">
          <p>Size:  <span class="params_type">${s.size}</span></p>
        </li>
        <li class="item_params">
          <p>Popularity:  <span class="params_type">${s.popularity}</span></p>
        </li>
      </ul>
      <p class="description">${s.desc}</p>
    </div>
    <p class="item_price">${s.price}</p>
    <button class="added_button" type="submit" aria-label="Item added to cart">
      Added to
      <svg width="18" height="18" class="icon-cart">
        <use href="./images/icons.svg#icon-basket"></use>
      </svg>
    </button>
    <button
      class="add_button"
      type="submit"
      id="${s._id}"
      aria-label="Add item to cart"
    >
      Add to
      <svg width="18" height="18" class="icon-cart">
        <use href="./images/icons.svg#icon-basket"></use>
      </svg>
    </button>`;N.innerHTML=t}function f(s){s.target===c&&g()}function b(s){s.key==="Escape"&&g()}function g(){c.style.display="none",c.removeEventListener("click",f),document.removeEventListener("keydown",b)}
//# sourceMappingURL=commonHelpers2.js.map
