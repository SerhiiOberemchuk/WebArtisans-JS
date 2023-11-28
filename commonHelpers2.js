import"./assets/styles-5648b4dd.js";import{a as c}from"./assets/vendor-a61d8330.js";const m=document.querySelector(".footer-email-form");m.addEventListener("submit",$);function $(t){t.preventDefault(),console.log(m.elements[0].value),c.post("https://food-boutique.b.goit.study/api/subscription",{email:m.elements[0].value})}let i=1,w=60;const y=document.querySelector(".pages-btn-left"),f=document.querySelector(".pages-btn-right"),n=document.querySelector(".pages-list");y.addEventListener("click",L);f.addEventListener("click",k);n.addEventListener("click",P);function L(t){i!==1&&(i--,d())}function k(t){i>=w||(i++,d())}function P(t){i=Number(t.target.textContent),i&&d()}function _(t){let e=[];for(let s=1;s<=t;s++)e.push(s);if(t<=5){const s=e.map(a=>`<li class="pages-item">${a}</li>`).join("");console.log(s),n.innerHTML=s}else if(t>5){if(i<=2||i>t-2){const s=t-4;e.splice(2,s,'<li class="pages-item-points">...</li>');const a=e.map(l=>`<li class="pages-item">${l}</li>`).join("");n.innerHTML=a}else if(i>2){const s=t-2;e.splice(1,s,"...",i,"...");const a=e.map(l=>`<li class="pages-item">${l}</li>`).join("");n.innerHTML=a}}i===1?y.setAttribute("disabled","true"):i===t?f.setAttribute("disabled","true"):(y.removeAttribute("disabled"),f.removeAttribute("disabled")),console.log(n.children);for(let s=0;s<n.children.length;s++)n.children[s].textContent==i?n.children[s].classList.add("current-pages-item"):n.children[s].classList.remove("current-pages-item")}let g=null,O=1;c.defaults.baseURL="https://food-boutique.b.goit.study/api";const p={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},o={totalPages:"totalPages",basic:"basic-wrapper",popular:"popular-wrapper",discount:"discount-wrapper",categories:"categories",axiosOptions:"axiosOptions"},u={basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),categoriesSelector:document.querySelector("#categories")};q();C();d();M();T();function q(){localStorage.setItem("axiosOptions",JSON.stringify({keyword:null,category:null,byABC:null,byPrice:null,byPopularity:null,page:1,limit:A()}))}function A(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function C(){try{const t=await c.get(p.categories);I(t.data),N()}catch(t){console.log(t)}}function I(t){localStorage.setItem(o.categories,JSON.stringify(t))}function N(){const t=JSON.parse(localStorage.getItem(o.categories));u.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function d(){try{const t=await c.get(p.basic,{params:z()});O=t.data.page,g=t.data.totalPages,localStorage.setItem(o.basic,JSON.stringify(t.data.results)),localStorage.setItem(o.totalPages,JSON.stringify(g)),E(),_(g)}catch(t){console.log(t)}}function E(){const t=JSON.parse(localStorage.getItem(o.basic));u.basicList.innerHTML=t.map(e=>`<li class="basic-item" id="${e._id}">
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
          </li>`).join("")}async function M(){try{const t=await c.get(p.popular);localStorage.setItem(o.popular,JSON.stringify(t.data)),J()}catch(t){console.log(t)}}function J(){const t=JSON.parse(localStorage.getItem(o.popular));u.popularList.innerHTML=t.map(e=>` <li class="popular-item" id="${e._id}">
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
          </li>`).join("")}async function T(){try{const t=await c.get(p.discount);localStorage.setItem(o.discount,JSON.stringify(t.data)),x()}catch(t){console.log(t)}}function x(){let e=JSON.parse(localStorage.getItem(o.discount)).slice(0,2);u.discountList.innerHTML=e.map(s=>`<li class="discount-item" id="${s._id}">
            <div class="discount-label"> 
            <img src="./images/discount.jpg" alt="discount label" class="discount-img">             
            </div>
            <div class="discount-image-wrapper">
              <img src="${s.img}" alt="${s.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${s.name}</h3>
              <span class="discount-item-price">$${s.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket" id="${s._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="./images/icons.svg#icon-basket"></use>
                </svg>
              </button>
            </div>
          </li>`).join("")}function z(){return JSON.parse(localStorage.getItem(o.axiosOptions))}const r=document.querySelector(".backdrop"),B=document.querySelector(".modal_window"),H=document.querySelector(".basic-list"),D=document.querySelector(".popular-list"),R=document.querySelector(".discount-list");async function F(t){try{return(await c.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(e){throw console.error(e),e}}H.addEventListener("click",b);D.addEventListener("click",b);R.addEventListener("click",b);async function b(t){const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;const s=e.id;try{const a=await F(s);console.log(a),a&&(W(a),r.style.display="block",r.addEventListener("click",h),document.addEventListener("keydown",S),document.querySelector(".close_button").addEventListener("click",v))}catch(a){console.log(a)}}function W(t){const e=`<button class="close_button" type="button" aria-label="Close">
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
    </button>`;B.innerHTML=e}function h(t){t.target===r&&v()}function S(t){t.key==="Escape"&&v()}function v(){r.style.display="none",r.removeEventListener("click",h),document.removeEventListener("keydown",S)}
//# sourceMappingURL=commonHelpers2.js.map
