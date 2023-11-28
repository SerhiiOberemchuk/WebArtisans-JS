import"./assets/styles-cd1a6381.js";import{a as d}from"./assets/vendor-a61d8330.js";const v=document.querySelector(".footer-email-form");v.addEventListener("submit",T);function T(t){t.preventDefault(),console.log(v.elements[0].value),d.post("https://food-boutique.b.goit.study/api/subscription",{email:v.elements[0].value})}let a=1,J=60;const k=document.querySelector(".pages-btn-left"),w=document.querySelector(".pages-btn-right"),r=document.querySelector(".pages-list");k.addEventListener("click",D);w.addEventListener("click",M);r.addEventListener("click",x);function D(t){a!==1&&(a--,f())}function M(t){a>=J||(a++,f())}function x(t){a=Number(t.target.textContent),a&&f()}function z(t){let e=[];for(let s=1;s<=t;s++)e.push(s);if(t<=5){const s=e.map(o=>`<li class="pages-item">${o}</li>`).join("");console.log(s),r.innerHTML=s}else if(t>5){if(a<=2||a>t-2){const s=t-4;e.splice(2,s,'<li class="pages-item-points">...</li>');const o=e.map(i=>`<li class="pages-item">${i}</li>`).join("");r.innerHTML=o}else if(a>2){const s=t-2;e.splice(1,s,"...",a,"...");const o=e.map(i=>`<li class="pages-item">${i}</li>`).join("");r.innerHTML=o}}a===1?k.setAttribute("disabled","true"):a===t?w.setAttribute("disabled","true"):(k.removeAttribute("disabled"),w.removeAttribute("disabled")),console.log(r.children);for(let s=0;s<r.children.length;s++)r.children[s].textContent==a?r.children[s].classList.add("current-pages-item"):r.children[s].classList.remove("current-pages-item")}let S=null,H=1;d.defaults.baseURL="https://food-boutique.b.goit.study/api";const y={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},n={totalPages:"totalPages",basic:"basic-wrapper",popular:"popular-wrapper",discount:"discount-wrapper",categories:"categories",axiosOptions:"axiosOptions"},b={basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),categoriesSelector:document.querySelector("#categories")};K();U();f();Q();X();function K(){localStorage.setItem("axiosOptions",JSON.stringify({keyword:null,category:null,byABC:null,byPrice:null,byPopularity:null,page:1,limit:R()}))}function R(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function U(){try{const t=await d.get(y.categories);F(t.data),W()}catch(t){console.log(t)}}function F(t){localStorage.setItem(n.categories,JSON.stringify(t))}function W(){const t=JSON.parse(localStorage.getItem(n.categories));b.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function f(){try{const t=await d.get(y.basic,{params:Z()});H=t.data.page,S=t.data.totalPages,localStorage.setItem(n.basic,JSON.stringify(t.data.results)),localStorage.setItem(n.totalPages,JSON.stringify(S)),G(),z(S)}catch(t){console.log(t)}}function G(){const t=JSON.parse(localStorage.getItem(n.basic));b.basicList.innerHTML=t.map(e=>`<li class="basic-item" id="${e._id}">
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
          </li>`).join("")}async function Q(){try{const t=await d.get(y.popular);localStorage.setItem(n.popular,JSON.stringify(t.data)),V()}catch(t){console.log(t)}}function V(){const t=JSON.parse(localStorage.getItem(n.popular));b.popularList.innerHTML=t.map(e=>` <li class="popular-item" id="${e._id}">
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
          </li>`).join("")}async function X(){try{const t=await d.get(y.discount);localStorage.setItem(n.discount,JSON.stringify(t.data)),Y()}catch(t){console.log(t)}}function Y(){let e=JSON.parse(localStorage.getItem(n.discount)).slice(0,2);b.discountList.innerHTML=e.map(s=>`<li class="discount-item" id="${s._id}">
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
          </li>`).join("")}function Z(){return JSON.parse(localStorage.getItem(n.axiosOptions))}const g=document.querySelector(".backdrop"),j=document.querySelector(".modal_window"),_=document.querySelector(".basic-list"),O=document.querySelector(".popular-list"),E=document.querySelector(".discount-list");async function C(t){try{return(await d.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(e){throw console.error(e),e}}_.addEventListener("click",$);O.addEventListener("click",$);E.addEventListener("click",$);_.addEventListener("click",h);O.addEventListener("click",h);E.addEventListener("click",h);async function h(t){if(!t.target.closest(".basic-btn, .popular-item-btn"))return;const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;const s=e.id;console.log(s);try{const o=await q(s);if(o){const i=JSON.parse(localStorage.getItem("BASKET"))||[];if(i.some(m=>m._id===o._id))console.log("Product is already in the basket");else{i.push(o),localStorage.setItem("BASKET",JSON.stringify(i)),console.log("product added to basket",o),console.log(i);const m=e.querySelector(".basic-btn-icon, .popular-item-btn-icon"),l=e.querySelector(".checked-btn-icon"),c=e.querySelector(".basic-btn, .popular-item-btn");m.style.display="none",l.style.display="block",c.style.backgroundColor="var(--primary-brand-color)",c.disabled=!0,c.removeEventListener("click",h)}}else console.error("Unable to find product with ID",s)}catch(o){console.error("Error fetching product by ID",o)}}async function q(t){try{const e=await C(t);return e?{_id:e._id,name:e.name,category:e.category,size:e.size,img:e.img,price:e.price,is10PercentOff:e.is10PercentOff}:(console.error("Unable to find product with ID",t),null)}catch(e){throw console.error("Error fetching product by ID",e),e}}async function $(t){const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;if(!t.target.closest("button")){const o=e.id;try{const i=await C(o);if(i){tt(i),g.style.display="block",g.addEventListener("click",A),document.addEventListener("keydown",B);const l=document.querySelector(".added_button"),c=document.querySelector(".add_button");i&&((JSON.parse(localStorage.getItem("BASKET"))||[]).some(p=>p._id===i._id)?(c.style.display="none",l.style.display="block"):(c.style.display="block",l.style.display="none")),c.addEventListener("click",()=>L(i))}async function L(l){try{const c=await q(o);if(c){const u=JSON.parse(localStorage.getItem("BASKET"))||[];if(u.some(p=>p._id===c._id))console.log("Product is already in the basket");else{u.push(l),localStorage.setItem("BASKET",JSON.stringify(u)),console.log("product added to basket",l),console.log(u);const p=document.querySelector(".added_button"),P=document.querySelector(".add_button");P&&(P.style.display="none",p.style.display="block")}}else console.error("Unable to find product with ID",o)}catch(c){console.error("Error fetching product by ID",c)}}document.querySelector(".close_button").addEventListener("click",I)}catch(i){console.log(i)}}}function tt(t){const e=`<button class="close_button" type="button" aria-label="Close">
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
    <p class="item_price">$${t.price}</p>
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
    </button>`;j.innerHTML=e}function A(t){t.target===g&&I()}function B(t){t.key==="Escape"&&I()}function I(){g.style.display="none",g.removeEventListener("click",A),document.removeEventListener("keydown",B)}
//# sourceMappingURL=commonHelpers2.js.map
