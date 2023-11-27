import"./assets/andrii-49cc0d69.js";import{a as l}from"./assets/vendor-a61d8330.js";let a=1,b=9,p=60;const y=document.querySelector(".pages-btn-left"),f=document.querySelector(".pages-btn-right"),c=document.querySelector(".pages-list");y.addEventListener("click",v);f.addEventListener("click",h);c.addEventListener("click",$);function v(s){a!==1&&(a--,console.log(a),r())}function h(s){a>=p||(a++,console.log(a),r())}function $(s){a=Number(s.target.textContent),a&&(console.log(a),r())}async function r(){try{const s=await l.get(`https://food-boutique.b.goit.study/api/products?page=${a}&limit=${b}`);_(s.data.results),E(p)}catch(s){console.error(s)}}r();console.log(p);async function k(){try{let e=function(){return Math.floor(Math.random()*9)};const s=await l.get("https://food-boutique.b.goit.study/api/products/discount"),t=e(),i=t+2,o=s.data.slice(t,i);P(o)}catch(s){console.error(s)}}k();async function L(){try{const s=await l.get("https://food-boutique.b.goit.study/api/products/popular?limit=5");console.log(s.data[0]._id),S(s.data)}catch(s){console.error(s)}}L();const w=document.querySelector(".basic-list");function _(s){const e=s.map(t=>`<li class="basic-item" id="${t._id}">
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
          </li>`).join("");w.innerHTML=e}const q=document.querySelector(".popular-list");function S(s){const e=s.map(t=>` <li class="popular-item" id="${t._id}">
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
          </li>`).join("");q.innerHTML=e}const M=document.querySelector(".discount-list");function P(s){const e=s.map(t=>`<li class="discount-item" id="${t._id}">
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
          </li>`).join("");M.innerHTML=e}function E(s){let e=[];for(let t=1;t<=s;t++)e.push(t);if(s<=5){const t=e.map(i=>`<li class="pages-item">${i}</li>`).join("");console.log(t),c.innerHTML=t}else if(s>5){if(a<=2||a>s-2){const t=s-4;e.splice(2,t,'<li class="pages-item-points">...</li>');const i=e.map(o=>`<li class="pages-item">${o}</li>`).join("");console.log(i),c.innerHTML=i}else if(a>2){const t=s-2;e.splice(1,t,"...",a-1,a,a+1,"...");const i=e.map(o=>`<li class="pages-item">${o}</li>`).join("");c.innerHTML=i}}}const n=document.querySelector(".backdrop"),C=document.querySelector(".modal_window"),T=document.querySelector(".basic-list"),z=document.querySelector(".popular-list"),j=document.querySelector(".discount-list");async function H(s){try{return(await l.get(`https://food-boutique.b.goit.study/api/products/${s}`)).data}catch(e){throw console.error(e),e}}T.addEventListener("click",d);z.addEventListener("click",d);j.addEventListener("click",d);async function d(s){const e=s.target.closest(".basic-item")||s.target.closest(".popular-item")||s.target.closest(".discount-item");if(!e)return;const t=e.id;try{const i=await H(t);console.log(i),i&&(N(i),n.style.display="block",n.addEventListener("click",m),document.addEventListener("keydown",g),document.querySelector(".close_button").addEventListener("click",u))}catch(i){console.log(i)}}function N(s){const e=`<button class="close_button" type="button" aria-label="Close">
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
    </button>`;C.innerHTML=e}function m(s){s.target===n&&u()}function g(s){s.key==="Escape"&&u()}function u(){n.style.display="none",n.removeEventListener("click",m),document.removeEventListener("keydown",g)}
//# sourceMappingURL=commonHelpers2.js.map
