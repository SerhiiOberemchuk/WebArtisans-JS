import{i as y}from"./assets/icons-a7f82451.js";import{a as u}from"./assets/vendor-4d3d87e9.js";const _=document.querySelector(".footer-email-form");_.addEventListener("submit",D);function D(t){t.preventDefault(),console.log(_.elements[0].value),u.post("https://food-boutique.b.goit.study/api/subscription",{email:_.elements[0].value})}const h=document.querySelector(".pages-btn-left"),v=document.querySelector(".pages-btn-right"),d=document.querySelector(".pages-list");h.addEventListener("click",H);v.addEventListener("click",F);d.addEventListener("click",z);function H(t){const e=p();e.page!==1&&(e.page--,console.log(e.page),m(e),f())}function F(t){const e=p();console.dir(e),!(e.page>=localStorage.getItem(n.totalPages))&&(e.page++,console.dir(e),m(e),f())}function z(t){const e=Number(t.target.textContent);if(!e)return;const a=p();a.page=e,m(a),f()}function K(t,e){let a=[];for(let s=1;s<=t;s++)a.push(s);if(t<=5){const s=a.map(i=>`<li class="pages-item">${i}</li>`).join("");d.innerHTML=s}else if(t>5){if(e<=2||e>t-2){const s=t-4;a.splice(2,s,'<li class="pages-item-points">...</li>');const i=a.map(c=>`<li class="pages-item">${c}</li>`).join("");d.innerHTML=i}else if(e>2){const s=t-2;a.splice(1,s,"...",e,"...");const i=a.map(c=>`<li class="pages-item">${c}</li>`).join("");d.innerHTML=i}}e!==1&&h.hasAttribute("disabled")&&h.removeAttribute("disabled"),e!==t&&v.hasAttribute("disabled")&&v.removeAttribute("disabled"),e===1&&!h.hasAttribute("disabled")&&h.setAttribute("disabled","disabled"),e===t&&!v.hasAttribute("disabled")&&v.setAttribute("disabled","disabled");for(let s=0;s<d.children.length;s++)d.children[s].textContent==e?d.children[s].classList.add("current-pages-item"):d.children[s].classList.remove("current-pages-item")}const P="/WebArtisans-JS/assets/discount-ed7c6afc.jpg";u.defaults.baseURL="https://food-boutique.b.goit.study/api";const L={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},n={basic:"basic-wrapper",basket:"BASKET",popular:"popular-wrapper",discount:"discount-wrapper",totalPages:"totalPages",categories:"categories",axiosOptions:"axiosOptions"},o={form:document.querySelector(".filter_form"),products:document.querySelector(".products"),notFound:document.querySelector(".not-found-wrapper"),basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),pagesWrapper:document.querySelector(".pages-wrapper"),categoriesSelector:document.querySelector("#categories")},C=`<div class="discount-label"> 
            <img src="${P}" alt="discount label" class="discount-img">             
            </div> `,U=`<div class="discount-label-popular"> 
            <img src="${P}" alt="discount label" class="discount-img">             
            </div> `;m({keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:X()});Y();f();j();et();o.form.addEventListener("input",W);o.form.addEventListener("submit",G);o.form.addEventListener("change",Q);function W(t){if(t.preventDefault(),t.target.name!=="text")return;const e=p();e.keyword=t.target.value,m(e)}function G(t){t.preventDefault();const e=p();e.page=1,m(e),f()}function Q(t){if(t.preventDefault(),t.target.name==="text")return;const e=p();if(t.target.name==="categories"&&(e.category=t.target.value==="null"?null:t.target.value),t.target.name==="sort"){V(e);const a=t.target.value.indexOf("="),s=t.target.value.slice(0,a);e[s]=t.target.value.slice(a+1,t.target.value.length)}e.page=1,m(e),f()}function V(t){t.byABC=null,t.byPrice=null,t.byPopularity=null}function X(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function Y(){try{const t=await u.get(L.categories);localStorage.setItem(n.categories,JSON.stringify(t.data)),Z()}catch(t){console.log(t)}}function Z(){const t=JSON.parse(localStorage.getItem(n.categories));o.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function f(){try{const t=await u.get(L.basic,{params:p()});localStorage.setItem(n.basic,JSON.stringify(t.data.results)),localStorage.setItem(n.totalPages,JSON.stringify(t.data.totalPages)),console.log(t.data.results),t.data.results.length!==0?(o.notFound.firstElementChild.classList.contains(".not-found")&&(o.notFound.firstElementChild.classList.remove(".not-found"),o.notFound.style.display="none"),R(t.data.totalPages,t.data.page)):(o.basicList.innerHTML="",o.notFound.firstElementChild.classList.add(".not-found"),o.pagesWrapper.style.display="none",o.notFound.style.display="block")}catch(t){console.log(t)}}function R(t,e){const a=JSON.parse(localStorage.getItem(n.basic)),s=JSON.parse(localStorage.getItem(n.basket));o.basicList.innerHTML=a.map(i=>{const c=i.is10PercentOff?C:"",g=s&&s.some(l=>l._id===i._id)?"check":"basket";return`<li class="basic-item" id="${i._id}">${c}
      <div class="basic-image-wrapper">
              <img
                src="${i.img}"
                alt="${i.name}"
              />
            </div>
            <h3 class="basic-name">${i.name}</h3>
            <div class="basic-info-wrapper">
              <p class="basic-info">
                Category:<span class="category">${i.category}</span>Size:<span
                  class="size"
                  >${i.size}</span
                >
              </p>
              <p class="basic-info">
                Popularity:<span class="popularity">${i.popularity}</span>
              </p>
            </div>
            <div class="basic-last-info">
              <span class="basic-price">$${i.price}</span>
              <button class="basic-btn" type="button" id="${i._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="${y}#icon-${g}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join(""),o.pagesWrapper.style.display==="none"&&(o.pagesWrapper.style.display="absolute"),K(t,e)}async function j(){try{const t=await u.get(L.popular);localStorage.setItem(n.popular,JSON.stringify(t.data)),tt()}catch(t){console.log(t)}}function tt(){const t=JSON.parse(localStorage.getItem(n.popular)),e=JSON.parse(localStorage.getItem(n.basket));o.popularList.innerHTML=t.map(a=>{const s=a.is10PercentOff?U:"",i=e&&e.some(c=>c._id===a._id)?"check":"basket";return`<li class="popular-item" id="${a._id}">${s}
            <div class="popular-image-wrapper">
              <img src="${a.img}" alt="${a.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${a.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket" id="${a._id}">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="${y}#icon-${i}"></use>
                  </svg>
                </button>
              </div>
              <p class="popular-info">
                Category:<span class="category">${a.category}</span>
              </p>
              <p class="popular-info">
                Size:<span class="size">${a.size}</span>Popularity:<span class="popularity">${a.popularity}</span>
              </p>
            </div>
          </li>`}).join("")}async function et(){try{const t=await u.get(L.discount);localStorage.setItem(n.discount,JSON.stringify(t.data)),st()}catch(t){console.log(t)}}function st(){const t=JSON.parse(localStorage.getItem(n.discount)),e=JSON.parse(localStorage.getItem(n.basket));let a=t.slice(0,2);o.discountList.innerHTML=a.map(s=>{const i=e&&e.some(c=>c._id===s._id)?"check":"basket";return`<li class="discount-item" id="${s._id}">
            ${C}
            <div class="discount-image-wrapper">
              <img src="${s.img}" alt="${s.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${s.name}</h3>
              <span class="discount-item-price">$${s.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket" id="${s._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="${y}#icon-${i}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join("")}function p(){return JSON.parse(localStorage.getItem(n.axiosOptions))}function m(t){localStorage.setItem(n.axiosOptions,JSON.stringify(t))}const k=document.querySelector(".backdrop"),it=document.querySelector(".modal_window"),E=document.querySelector(".basic-list"),q=document.querySelector(".popular-list"),N=document.querySelector(".discount-list"),at=document.querySelector(".quantity-in-cart-header");async function B(t){try{return(await u.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(e){throw console.error(e),e}}E.addEventListener("click",I);q.addEventListener("click",I);N.addEventListener("click",I);E.addEventListener("click",$);q.addEventListener("click",$);N.addEventListener("click",$);document.addEventListener("DOMContentLoaded",()=>{const t=JSON.parse(localStorage.getItem("BASKET"))||[];w(t.length)});async function $(t){if(!t.target.closest(".basic-btn, .popular-item-btn"))return;const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;const a=e.id;try{const s=await T(a);if(s.amount=1,s){const i=JSON.parse(localStorage.getItem("BASKET"))||[];if(!i.some(g=>g._id===s._id)){i.push(s),localStorage.setItem("BASKET",JSON.stringify(i)),w(i.length);const g=e.querySelector(".basic-btn-icon, .popular-item-btn-icon"),l=e.querySelector(".checked-btn-icon"),r=e.querySelector(".basic-btn, .popular-item-btn");g.style.display="none",l.style.display="block",r.style.backgroundColor="var(--primary-brand-color)",r.disabled=!0,r.removeEventListener("click",$)}}}catch{}}async function T(t){try{const e=await B(t);return e?{_id:e._id,name:e.name,category:e.category,size:e.size,img:e.img,price:e.price,is10PercentOff:e.is10PercentOff}:null}catch(e){throw e}}async function I(t){const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;if(!t.target.closest("button")){const s=e.id;try{const i=await B(s);if(i){ot(i),k.style.display="block",k.addEventListener("click",J),document.addEventListener("keydown",M);const l=document.querySelector(".added_button"),r=document.querySelector(".add_button");i&&((JSON.parse(localStorage.getItem("BASKET"))||[]).some(S=>S._id===i._id)?(r.style.display="none",l.style.display="block"):(r.style.display="block",l.style.display="none")),r.addEventListener("click",()=>c(i))}async function c(l){try{const r=await T(s);if(r){const b=JSON.parse(localStorage.getItem("BASKET"))||[];if(!b.some(S=>S._id===r._id)){b.push(l),localStorage.setItem("BASKET",JSON.stringify(b));const S=document.querySelector(".added_button"),A=document.querySelector(".add_button");A&&(A.style.display="none",S.style.display="block"),w(b.length)}}}catch{}}document.querySelector(".close_button").addEventListener("click",O)}catch{}}}function w(t){at.textContent=t}function ot(t){const e=`<button class="close_button" type="button" aria-label="Close">
      <svg class="close-btn-icon" width="24" height="24">
        <use href="${y}#icon-close"></use>
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
        <use href="${y}#icon-basket"></use>
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
        <use href="${y}#icon-basket"></use>
      </svg>
    </button>`;it.innerHTML=e}function J(t){t.target===k&&O()}function M(t){t.key==="Escape"&&O()}function O(){k.style.display="none",k.removeEventListener("click",J),document.removeEventListener("keydown",M)}
//# sourceMappingURL=commonHelpers2.js.map
