import{i as w}from"./assets/icons-b935cbaa.js";import{a as u}from"./assets/vendor-a61d8330.js";const $=document.querySelector(".footer-email-form");$.addEventListener("submit",J);function J(t){t.preventDefault(),console.log($.elements[0].value),u.post("https://food-boutique.b.goit.study/api/subscription",{email:$.elements[0].value})}const h=document.querySelector(".pages-btn-left"),S=document.querySelector(".pages-btn-right"),d=document.querySelector(".pages-list");h.addEventListener("click",D);S.addEventListener("click",M);d.addEventListener("click",x);function D(t){const e=p();e.page!==1&&(e.page--,console.log(e.page),m(e),y())}function M(t){const e=p();console.dir(e),!(e.page>=localStorage.getItem(n.totalPages))&&(e.page++,console.dir(e),m(e),y())}function x(t){const e=Number(t.target.textContent);if(!e)return;const i=p();i.page=e,m(i),y()}function H(t,e){let i=[];for(let s=1;s<=t;s++)i.push(s);if(t<=5){const s=i.map(o=>`<li class="pages-item">${o}</li>`).join("");d.innerHTML=s}else if(t>5){if(e<=2||e>t-2){const s=t-4;i.splice(2,s,'<li class="pages-item-points">...</li>');const o=i.map(r=>`<li class="pages-item">${r}</li>`).join("");d.innerHTML=o}else if(e>2){const s=t-2;i.splice(1,s,"...",e,"...");const o=i.map(r=>`<li class="pages-item">${r}</li>`).join("");d.innerHTML=o}}e!==1&&h.hasAttribute("disabled")&&h.removeAttribute("disabled"),e!==t&&S.hasAttribute("disabled")&&S.removeAttribute("disabled"),e===1&&!h.hasAttribute("disabled")&&h.setAttribute("disabled","disabled"),e===t&&!S.hasAttribute("disabled")&&S.setAttribute("disabled","disabled");for(let s=0;s<d.children.length;s++)d.children[s].textContent==e?d.children[s].classList.add("current-pages-item"):d.children[s].classList.remove("current-pages-item")}u.defaults.baseURL="https://food-boutique.b.goit.study/api";const k={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},n={basic:"basic-wrapper",basket:"BASKET",popular:"popular-wrapper",discount:"discount-wrapper",totalPages:"totalPages",categories:"categories",axiosOptions:"axiosOptions"},a={form:document.querySelector(".filter_form"),products:document.querySelector(".products"),notFound:document.querySelector(".not-found-wrapper"),basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),pagesWrapper:document.querySelector(".pages-wrapper"),categoriesSelector:document.querySelector("#categories")},z=`<div class="discount-label"> 
            <img src="./images/discount.jpg" alt="discount label" class="discount-img">             
            </div> `;m({keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:G()});Q();y();Y();R();a.form.addEventListener("input",F);a.form.addEventListener("submit",K);a.form.addEventListener("change",U);function F(t){if(t.preventDefault(),t.target.name!=="text")return;const e=p();e.keyword=t.target.value,m(e)}function K(t){t.preventDefault();const e=p();e.page=1,m(e),y()}function U(t){if(t.preventDefault(),t.target.name==="text")return;const e=p();if(t.target.name==="categories"&&(e.category=t.target.value==="null"?null:t.target.value),t.target.name==="sort"){W(e);const i=t.target.value.indexOf("="),s=t.target.value.slice(0,i);e[s]=t.target.value.slice(i+1,t.target.value.length)}e.page=1,m(e),y()}function W(t){t.byABC=null,t.byPrice=null,t.byPopularity=null}function G(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function Q(){try{const t=await u.get(k.categories);localStorage.setItem(n.categories,JSON.stringify(t.data)),V()}catch(t){console.log(t)}}function V(){const t=JSON.parse(localStorage.getItem(n.categories));a.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function y(){try{const t=await u.get(k.basic,{params:p()});localStorage.setItem(n.basic,JSON.stringify(t.data.results)),localStorage.setItem(n.totalPages,JSON.stringify(t.data.totalPages)),console.log(t.data.results),t.data.results.length!==0?(a.notFound.firstElementChild.classList.contains(".not-found")&&(a.notFound.firstElementChild.classList.remove(".not-found"),a.notFound.style.display="none"),X(t.data.totalPages,t.data.page)):(a.basicList.innerHTML="",a.notFound.firstElementChild.classList.add(".not-found"),a.pagesWrapper.style.display="none",a.notFound.style.display="block")}catch(t){console.log(t)}}function X(t,e){const i=JSON.parse(localStorage.getItem(n.basic)),s=JSON.parse(localStorage.getItem(n.basket));a.basicList.innerHTML=i.map(o=>{const r=o.is10PercentOff?z:"",g=s&&s.some(l=>l._id===o._id)?"check":"basket";return`<li class="basic-item" id="${o._id}">${r}
      <div class="basic-image-wrapper">
              <img
                src="${o.img}"
                alt="${o.name}"
              />
            </div>
            <h3 class="basic-name">${o.name}</h3>
            <div class="basic-info-wrapper">
              <p class="basic-info">
                Category:<span class="category">${o.category}</span>Size:<span
                  class="size"
                  >${o.size}</span
                >
              </p>
              <p class="basic-info">
                Popularity:<span class="popularity">${o.popularity}</span>
              </p>
            </div>
            <div class="basic-last-info">
              <span class="basic-price">$${o.price}</span>
              <button class="basic-btn" type="button" id="${o._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="${w}#icon-${g}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join(""),a.pagesWrapper.style.display==="none"&&(a.pagesWrapper.style.display="absolute"),H(t,e)}async function Y(){try{const t=await u.get(k.popular);localStorage.setItem(n.popular,JSON.stringify(t.data)),Z()}catch(t){console.log(t)}}function Z(){const t=JSON.parse(localStorage.getItem(n.popular)),e=JSON.parse(localStorage.getItem(n.basket));a.popularList.innerHTML=t.map(i=>{const s=e&&e.some(o=>o._id===i._id)?"check":"basket";return`<li class="popular-item" id="${i._id}">
            <div class="popular-image-wrapper">
              <img src="${i.img}" alt="${i.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${i.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket" id="${i._id}">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="${w}#icon-${s}"></use>
                  </svg>
                </button>
              </div>
              <p class="popular-info">
                Category:<span class="category">${i.category}</span>
              </p>
              <p class="popular-info">
                Size:<span class="size">${i.size}</span>Popularity:<span class="popularity">${i.popularity}</span>
              </p>
            </div>
          </li>`}).join("")}async function R(){try{const t=await u.get(k.discount);localStorage.setItem(n.discount,JSON.stringify(t.data)),j()}catch(t){console.log(t)}}function j(){const t=JSON.parse(localStorage.getItem(n.discount)),e=JSON.parse(localStorage.getItem(n.basket));let i=t.slice(0,2);a.discountList.innerHTML=i.map(s=>{const o=e&&e.some(r=>r._id===s._id)?"check":"basket";return`<li class="discount-item" id="${s._id}">
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
                  <use href="${w}#icon-${o}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join("")}function p(){return JSON.parse(localStorage.getItem(n.axiosOptions))}function m(t){localStorage.setItem(n.axiosOptions,JSON.stringify(t))}const v=document.querySelector(".backdrop"),tt=document.querySelector(".modal_window"),P=document.querySelector(".basic-list"),O=document.querySelector(".popular-list"),A=document.querySelector(".discount-list");async function q(t){try{return(await u.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(e){throw console.error(e),e}}P.addEventListener("click",I);O.addEventListener("click",I);A.addEventListener("click",I);P.addEventListener("click",L);O.addEventListener("click",L);A.addEventListener("click",L);async function L(t){if(!t.target.closest(".basic-btn, .popular-item-btn"))return;const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;const i=e.id;console.log(i);try{const s=await C(i);if(s.amount=1,s){const o=JSON.parse(localStorage.getItem("BASKET"))||[];if(o.some(g=>g._id===s._id))console.log("Product is already in the basket");else{o.push(s),localStorage.setItem("BASKET",JSON.stringify(o)),console.log("product added to basket",s),console.log(o);const g=e.querySelector(".basic-btn-icon, .popular-item-btn-icon"),l=e.querySelector(".checked-btn-icon"),c=e.querySelector(".basic-btn, .popular-item-btn");g.style.display="none",l.style.display="block",c.style.backgroundColor="var(--primary-brand-color)",c.disabled=!0,c.removeEventListener("click",L)}}else console.error("Unable to find product with ID",i)}catch(s){console.error("Error fetching product by ID",s)}}async function C(t){try{const e=await q(t);return e?{_id:e._id,name:e.name,category:e.category,size:e.size,img:e.img,price:e.price,is10PercentOff:e.is10PercentOff}:(console.error("Unable to find product with ID",t),null)}catch(e){throw console.error("Error fetching product by ID",e),e}}async function I(t){const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;if(!t.target.closest("button")){const s=e.id;try{const o=await q(s);if(o){et(o),v.style.display="block",v.addEventListener("click",N),document.addEventListener("keydown",B);const l=document.querySelector(".added_button"),c=document.querySelector(".add_button");o&&((JSON.parse(localStorage.getItem("BASKET"))||[]).some(f=>f._id===o._id)?(c.style.display="none",l.style.display="block"):(c.style.display="block",l.style.display="none")),c.addEventListener("click",()=>r(o))}async function r(l){try{const c=await C(s);if(c){const b=JSON.parse(localStorage.getItem("BASKET"))||[];if(b.some(f=>f._id===c._id))console.log("Product is already in the basket");else{b.push(l),localStorage.setItem("BASKET",JSON.stringify(b)),console.log("product added to basket",l),console.log(b);const f=document.querySelector(".added_button"),E=document.querySelector(".add_button");E&&(E.style.display="none",f.style.display="block")}}else console.error("Unable to find product with ID",s)}catch(c){console.error("Error fetching product by ID",c)}}document.querySelector(".close_button").addEventListener("click",_)}catch(o){console.log(o)}}}function et(t){const e=`<button class="close_button" type="button" aria-label="Close">
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
    </button>`;tt.innerHTML=e}function N(t){t.target===v&&_()}function B(t){t.key==="Escape"&&_()}function _(){v.style.display="none",v.removeEventListener("click",N),document.removeEventListener("keydown",B)}
//# sourceMappingURL=commonHelpers2.js.map
