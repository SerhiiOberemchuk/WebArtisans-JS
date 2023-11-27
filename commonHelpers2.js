import"./assets/andrii-3d95c495.js";import{a as n}from"./assets/vendor-a61d8330.js";let i=1,v=60;const h=document.querySelector(".pages-btn-left"),S=document.querySelector(".pages-btn-right"),l=document.querySelector(".pages-list");h.addEventListener("click",$);S.addEventListener("click",w);l.addEventListener("click",L);function $(t){i!==1&&(i--,d())}function w(t){i>=v||(i++,d())}function L(t){i=Number(t.target.textContent),i&&d()}function k(t){let s=[];for(let e=1;e<=t;e++)s.push(e);if(t<=5){const e=s.map(a=>`<li class="pages-item">${a}</li>`).join("");console.log(e),l.innerHTML=e}else if(t>5){if(i<=2||i>t-2){const e=t-4;s.splice(2,e,'<li class="pages-item-points">...</li>');const a=s.map(r=>`<li class="pages-item">${r}</li>`).join("");l.innerHTML=a}else if(i>2){const e=t-2;s.splice(1,e,"...",i-1,i,i+1,"...");const a=s.map(r=>`<li class="pages-item">${r}</li>`).join("");l.innerHTML=a}}}let g=null,P=1;n.defaults.baseURL="https://food-boutique.b.goit.study/api";const p={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},o={totalPages:"totalPages",basic:"basic-wrapper",popular:"popular-wrapper",discount:"discount-wrapper",categories:"categories",axiosOptions:"axiosOptions"},u={basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),categoriesSelector:document.querySelector("#categories")};_();I();d();E();M();function _(){localStorage.setItem("axiosOptions",JSON.stringify({keyword:null,category:null,byABC:null,byPrice:null,byPopularity:null,page:1,limit:O()}))}function O(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function I(){try{const t=await n.get(p.categories);N(t.data),q()}catch(t){console.log(t)}}function N(t){localStorage.setItem(o.categories,JSON.stringify(t))}function q(){const t=JSON.parse(localStorage.getItem(o.categories));u.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(s=>`<option value="${s}">${s.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function d(){try{const t=await n.get(p.basic,{params:T()});P=t.data.page,g=t.data.totalPages,localStorage.setItem(o.basic,JSON.stringify(t.data.results)),localStorage.setItem(o.totalPages,JSON.stringify(g)),C(),k(g)}catch(t){console.log(t)}}function C(){const t=JSON.parse(localStorage.getItem(o.basic));u.basicList.innerHTML=t.map(s=>`<li class="basic-item" id="${s._id}">
            <div class="basic-image-wrapper">
              <img
                src="${s.img}"
                alt="${s.name}"
              />
            </div>
            <h3 class="basic-name">${s.name}</h3>
            <div class="basic-info-wrapper">
              <p class="basic-info">
                Category:<span class="category">${s.category}</span>Size:<span
                  class="size"
                  >${s.size}</span
                >
              </p>
              <p class="basic-info">
                Popularity:<span class="popularity">${s.popularity}</span>
              </p>
            </div>
            <div class="basic-last-info">
              <span class="basic-price">$${s.price}</span>
              <button class="basic-btn" type="button" id="${s._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="./images/icons.svg#icon-basket"></use>
                </svg>
              </button>
            </div>
          </li>`).join("")}async function E(){try{const t=await n.get(p.popular);localStorage.setItem(o.popular,JSON.stringify(t.data)),A()}catch(t){console.log(t)}}function A(){const t=JSON.parse(localStorage.getItem(o.popular));u.popularList.innerHTML=t.map(s=>` <li class="popular-item" id="${s._id}">
            <div class="popular-image-wrapper">
              <img src="${s.img}" alt="${s.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${s.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket" id="${s._id}">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="./images/icons.svg#icon-basket"></use>
                  </svg>
                </button>
              </div>
              <p class="popular-info">
                Category:<span class="category">${s.category}</span>
              </p>
              <p class="popular-info">
                Size:<span class="size">${s.size}</span>Popularity:<span class="popularity">${s.popularity}</span>
              </p>
            </div>
          </li>`).join("")}async function M(){try{const t=await n.get(p.discount);localStorage.setItem(o.discount,JSON.stringify(t.data)),J()}catch(t){console.log(t)}}function J(){let s=JSON.parse(localStorage.getItem(o.discount)).slice(0,2);u.discountList.innerHTML=s.map(e=>`<li class="discount-item" id="${e._id}">
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
          </li>`).join("")}function T(){return JSON.parse(localStorage.getItem(o.axiosOptions))}const c=document.querySelector(".backdrop"),x=document.querySelector(".modal_window"),z=document.querySelector(".basic-list"),B=document.querySelector(".popular-list"),H=document.querySelector(".discount-list");async function D(t){try{return(await n.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(s){throw console.error(s),s}}z.addEventListener("click",m);B.addEventListener("click",m);H.addEventListener("click",m);async function m(t){const s=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!s)return;const e=s.id;try{const a=await D(e);console.log(a),a&&(R(a),c.style.display="block",c.addEventListener("click",f),document.addEventListener("keydown",b),document.querySelector(".close_button").addEventListener("click",y))}catch(a){console.log(a)}}function R(t){const s=`<button class="close_button" type="button" aria-label="Close">
      <svg class="close-btn-icon" width="24" height="24">
        <use href="./images/icons.svg#icon-close"></use>
      </svg>
    </button>
    <div class="item_image">
    <img src="${t.img}" alt="${t.name}" /></div>
    <div class="item_description">
      <h2 class="item_name">${t.name}</h2>
      <ul class="product_params">
        <li class="item_params">
          <p>Category: <span class="params_type">${t.category}</span></p>
        </li>
        <li class="item_params">
          <p>Size:  <span class="params_type">${t.size}</span></p>
        </li>
        <li class="item_params">
          <p>Popularity:  <span class="params_type">${t.popularity}</span></p>
        </li>
      </ul>
      <p class="description">${t.desc}</p>
    </div>
    <p class="item_price">${t.price}</p>
    <button class="added_button" type="submit" aria-label="Item added to cart">
      Added to
      <svg width="18" height="18" class="icon-cart">
        <use href="./images/icons.svg#icon-basket"></use>
      </svg>
    </button>
    <button
      class="add_button"
      type="submit"
      id="${t._id}"
      aria-label="Add item to cart"
    >
      Add to
      <svg width="18" height="18" class="icon-cart">
        <use href="./images/icons.svg#icon-basket"></use>
      </svg>
    </button>`;x.innerHTML=s}function f(t){t.target===c&&y()}function b(t){t.key==="Escape"&&y()}function y(){c.style.display="none",c.removeEventListener("click",f),document.removeEventListener("keydown",b)}
//# sourceMappingURL=commonHelpers2.js.map
