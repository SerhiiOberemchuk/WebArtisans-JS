import"./assets/styles-2cafa3f0.js";import{a as l}from"./assets/vendor-a61d8330.js";const k=document.querySelector(".footer-email-form");k.addEventListener("submit",T);function T(t){t.preventDefault(),console.log(k.elements[0].value),l.post("https://food-boutique.b.goit.study/api/subscription",{email:k.elements[0].value})}const w=document.querySelector(".pages-btn-left"),L=document.querySelector(".pages-btn-right"),c=document.querySelector(".pages-list");w.addEventListener("click",D);L.addEventListener("click",J);c.addEventListener("click",x);function D(t){const e=m();e.page!==1&&(e.page--,console.log(e.page),g(e),p())}function J(t){const e=m();e.page>=localStorage.getItem(n.totalPages)||(e.page++,g(e),p())}function x(t){const e=Number(t.target.textContent);if(!e)return;const o=m();o.page=e,g(o),p()}function M(t,e){console.log(t,e);let o=[];for(let s=1;s<=t;s++)o.push(s);if(t<=5){const s=o.map(i=>`<li class="pages-item">${i}</li>`).join("");c.innerHTML=s}else if(t>5){if(e<=2||e>t-2){const s=t-4;o.splice(2,s,'<li class="pages-item-points">...</li>');const i=o.map(u=>`<li class="pages-item">${u}</li>`).join("");c.innerHTML=i}else if(e>2){const s=t-2;o.splice(1,s,"...",e,"...");const i=o.map(u=>`<li class="pages-item">${u}</li>`).join("");c.innerHTML=i}}e===1?w.setAttribute("disabled","true"):e===t?L.setAttribute("disabled","true"):(w.removeAttribute("disabled"),L.removeAttribute("disabled"));for(let s=0;s<c.children.length;s++)c.children[s].textContent==e?c.children[s].classList.add("current-pages-item"):c.children[s].classList.remove("current-pages-item")}l.defaults.baseURL="https://food-boutique.b.goit.study/api";const h={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},n={totalPages:"totalPages",basic:"basic-wrapper",popular:"popular-wrapper",discount:"discount-wrapper",categories:"categories",axiosOptions:"axiosOptions"},d={form:document.querySelector(".filter_form"),basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),categoriesSelector:document.querySelector("#categories")};g({keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:U()});W();p();V();Y();d.form.addEventListener("input",H);d.form.addEventListener("submit",z);d.form.addEventListener("change",K);function H(t){if(t.preventDefault(),t.target.name!=="text")return;const e=m();e.keyword=t.target.value,g(e)}function z(t){t.preventDefault(),p()}function K(t){if(t.preventDefault(),t.target.name==="text")return;const e=m();if(t.target.name==="categories"&&(e.category=t.target.value==="null"?null:t.target.value),t.target.name==="sort"){F(e);const o=t.target.value.indexOf("="),s=t.target.value.slice(0,o);e[s]=t.target.value.slice(o+1,t.target.value.length)}g(e),p()}function F(t){t.byABC=null,t.byPrice=null,t.byPopularity=null}function U(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function W(){try{const t=await l.get(h.categories);localStorage.setItem(n.categories,JSON.stringify(t.data)),G()}catch(t){console.log(t)}}function G(){const t=JSON.parse(localStorage.getItem(n.categories));d.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function p(){try{const t=await l.get(h.basic,{params:m()});localStorage.setItem(n.basic,JSON.stringify(t.data.results)),localStorage.setItem(n.totalPages,JSON.stringify(t.data.totalPages)),Q(),M(t.data.totalPages,t.data.page)}catch(t){console.log(t)}}function Q(){const t=JSON.parse(localStorage.getItem(n.basic));d.basicList.innerHTML=t.map(e=>`<li class="basic-item" id="${e._id}">
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
          </li>`).join("")}async function V(){try{const t=await l.get(h.popular);localStorage.setItem(n.popular,JSON.stringify(t.data)),X()}catch(t){console.log(t)}}function X(){const t=JSON.parse(localStorage.getItem(n.popular));d.popularList.innerHTML=t.map(e=>` <li class="popular-item" id="${e._id}">
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
          </li>`).join("")}async function Y(){try{const t=await l.get(h.discount);localStorage.setItem(n.discount,JSON.stringify(t.data)),Z()}catch(t){console.log(t)}}function Z(){let e=JSON.parse(localStorage.getItem(n.discount)).slice(0,2);d.discountList.innerHTML=e.map(o=>`<li class="discount-item" id="${o._id}">
            <div class="discount-label"> 
            <img src="./images/discount.jpg" alt="discount label" class="discount-img">             
            </div>
            <div class="discount-image-wrapper">
              <img src="${o.img}" alt="${o.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${o.name}</h3>
              <span class="discount-item-price">$${o.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket" id="${o._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="./images/icons.svg#icon-basket"></use>
                </svg>
              </button>
            </div>
          </li>`).join("")}function m(){return JSON.parse(localStorage.getItem(n.axiosOptions))}function g(t){localStorage.setItem(n.axiosOptions,JSON.stringify(t))}const f=document.querySelector(".backdrop"),R=document.querySelector(".modal_window"),P=document.querySelector(".basic-list"),E=document.querySelector(".popular-list"),O=document.querySelector(".discount-list");async function q(t){try{return(await l.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(e){throw console.error(e),e}}P.addEventListener("click",I);E.addEventListener("click",I);O.addEventListener("click",I);P.addEventListener("click",S);E.addEventListener("click",S);O.addEventListener("click",S);async function S(t){if(!t.target.closest(".basic-btn, .popular-item-btn"))return;const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;const o=e.id;console.log(o);try{const s=await A(o);if(s.amount=1,s){const i=JSON.parse(localStorage.getItem("BASKET"))||[];if(i.some(v=>v._id===s._id))console.log("Product is already in the basket");else{i.push(s),localStorage.setItem("BASKET",JSON.stringify(i)),console.log("product added to basket",s),console.log(i);const v=e.querySelector(".basic-btn-icon, .popular-item-btn-icon"),r=e.querySelector(".checked-btn-icon"),a=e.querySelector(".basic-btn, .popular-item-btn");v.style.display="none",r.style.display="block",a.style.backgroundColor="var(--primary-brand-color)",a.disabled=!0,a.removeEventListener("click",S)}}else console.error("Unable to find product with ID",o)}catch(s){console.error("Error fetching product by ID",s)}}async function A(t){try{const e=await q(t);return e?{_id:e._id,name:e.name,category:e.category,size:e.size,img:e.img,price:e.price,is10PercentOff:e.is10PercentOff}:(console.error("Unable to find product with ID",t),null)}catch(e){throw console.error("Error fetching product by ID",e),e}}async function I(t){const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;if(!t.target.closest("button")){const s=e.id;try{const i=await q(s);if(i){j(i),f.style.display="block",f.addEventListener("click",C),document.addEventListener("keydown",B);const r=document.querySelector(".added_button"),a=document.querySelector(".add_button");i&&((JSON.parse(localStorage.getItem("BASKET"))||[]).some(b=>b._id===i._id)?(a.style.display="none",r.style.display="block"):(a.style.display="block",r.style.display="none")),a.addEventListener("click",()=>u(i))}async function u(r){try{const a=await A(s);if(a){const y=JSON.parse(localStorage.getItem("BASKET"))||[];if(y.some(b=>b._id===a._id))console.log("Product is already in the basket");else{y.push(r),localStorage.setItem("BASKET",JSON.stringify(y)),console.log("product added to basket",r),console.log(y);const b=document.querySelector(".added_button"),_=document.querySelector(".add_button");_&&(_.style.display="none",b.style.display="block")}}else console.error("Unable to find product with ID",s)}catch(a){console.error("Error fetching product by ID",a)}}document.querySelector(".close_button").addEventListener("click",$)}catch(i){console.log(i)}}}function j(t){const e=`<button class="close_button" type="button" aria-label="Close">
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
    </button>`;R.innerHTML=e}function C(t){t.target===f&&$()}function B(t){t.key==="Escape"&&$()}function $(){f.style.display="none",f.removeEventListener("click",C),document.removeEventListener("keydown",B)}
//# sourceMappingURL=commonHelpers2.js.map
