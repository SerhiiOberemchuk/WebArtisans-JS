import{i as f}from"./assets/icons-81457bbe.js";import{a as u,S as _}from"./assets/vendor-2bc536cc.js";const w=document.querySelector(".footer-email-form");w.addEventListener("submit",H);function H(t){t.preventDefault();const e=w.elements[0].value;u.post("https://food-boutique.b.goit.study/api/subscription",{email:e}).then(i=>{const s=i.data.message;_.fire({color:"#586f1f",position:"top-end",icon:"success",title:s,showConfirmButton:!1,timer:2e3})}).catch(i=>{if(i.request.status===400){_.fire({color:"#586f1f",position:"top-end",icon:"error",title:i.response.data.message,showConfirmButton:!1,timer:2e3});return}else i.request.status===409&&_.fire({color:"#586f1f",position:"top-end",icon:"info",title:i.response.data.message,showConfirmButton:!1,timer:2e3})}).finally(i=>w.elements[0].value="")}const h=document.querySelector(".pages-btn-left"),v=document.querySelector(".pages-btn-right"),d=document.querySelector(".pages-list");h.addEventListener("click",F);v.addEventListener("click",z);d.addEventListener("click",K);function F(t){const e=p();e.page!==1&&(e.page--,console.log(e.page),m(e),y())}function z(t){const e=p();console.dir(e),!(e.page>=localStorage.getItem(n.totalPages))&&(e.page++,console.dir(e),m(e),y())}function K(t){const e=Number(t.target.textContent);if(!e)return;const i=p();i.page=e,m(i),y()}function U(t,e){let i=[];for(let s=1;s<=t;s++)i.push(s);if(t<=5){const s=i.map(o=>`<li class="pages-item">${o}</li>`).join("");d.innerHTML=s}else if(t>5){if(e<=2||e>t-2){const s=t-4;i.splice(2,s,'<li class="pages-item-points">...</li>');const o=i.map(c=>`<li class="pages-item">${c}</li>`).join("");d.innerHTML=o}else if(e>2){const s=t-2;i.splice(1,s,"...",e,"...");const o=i.map(c=>`<li class="pages-item">${c}</li>`).join("");d.innerHTML=o}}e!==1&&h.hasAttribute("disabled")&&h.removeAttribute("disabled"),e!==t&&v.hasAttribute("disabled")&&v.removeAttribute("disabled"),e===1&&!h.hasAttribute("disabled")&&h.setAttribute("disabled","disabled"),e===t&&!v.hasAttribute("disabled")&&v.setAttribute("disabled","disabled");for(let s=0;s<d.children.length;s++)d.children[s].textContent==e?d.children[s].classList.add("current-pages-item"):d.children[s].classList.remove("current-pages-item")}const E="/WebArtisans-JS/assets/discount-ed7c6afc.jpg";u.defaults.baseURL="https://food-boutique.b.goit.study/api";const L={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},n={basic:"basic-wrapper",basket:"BASKET",popular:"popular-wrapper",discount:"discount-wrapper",totalPages:"totalPages",categories:"categories",axiosOptions:"axiosOptions"},a={form:document.querySelector(".filter_form"),products:document.querySelector(".products"),notFound:document.querySelector(".not-found-wrapper"),basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),pagesWrapper:document.querySelector(".pages-wrapper"),categoriesSelector:document.querySelector("#categories")},P=`<div class="discount-label"> 
            <img src="${E}" alt="discount label" class="discount-img">             
            </div> `,W=`<div class="discount-label-popular"> 
            <img src="${E}" alt="discount label" class="discount-img">             
            </div> `;m({keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:Y()});Z();y();tt();st();a.form.addEventListener("input",G);a.form.addEventListener("submit",Q);a.form.addEventListener("change",V);function G(t){if(t.preventDefault(),t.target.name!=="text")return;const e=p();e.keyword=t.target.value,m(e)}function Q(t){t.preventDefault();const e=p();e.page=1,m(e),y()}function V(t){if(t.preventDefault(),t.target.name==="text")return;const e=p();if(t.target.name==="categories"&&(e.category=t.target.value==="null"?null:t.target.value),t.target.name==="sort"){X(e);const i=t.target.value.indexOf("="),s=t.target.value.slice(0,i);e[s]=t.target.value.slice(i+1,t.target.value.length)}e.page=1,m(e),y()}function X(t){t.byABC=null,t.byPrice=null,t.byPopularity=null}function Y(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function Z(){try{const t=await u.get(L.categories);localStorage.setItem(n.categories,JSON.stringify(t.data)),R()}catch(t){console.log(t)}}function R(){const t=JSON.parse(localStorage.getItem(n.categories));a.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function y(){try{const t=await u.get(L.basic,{params:p()});localStorage.setItem(n.basic,JSON.stringify(t.data.results)),localStorage.setItem(n.totalPages,JSON.stringify(t.data.totalPages)),console.log(t.data.results),t.data.results.length!==0?(a.notFound.firstElementChild.classList.contains(".not-found")&&(a.notFound.firstElementChild.classList.remove(".not-found"),a.notFound.style.display="none"),j(t.data.totalPages,t.data.page)):(a.basicList.innerHTML="",a.notFound.firstElementChild.classList.add(".not-found"),a.pagesWrapper.style.display="none",a.notFound.style.display="block")}catch(t){console.log(t)}}function j(t,e){const i=JSON.parse(localStorage.getItem(n.basic)),s=JSON.parse(localStorage.getItem(n.basket));a.basicList.innerHTML=i.map(o=>{const c=o.is10PercentOff?P:"",g=s&&s.some(l=>l._id===o._id)?"check":"basket";return`<li class="basic-item" id="${o._id}">${c}
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
                  <use href="${f}#icon-${g}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join(""),a.pagesWrapper.style.display==="none"&&(a.pagesWrapper.style.display="absolute"),U(t,e)}async function tt(){try{const t=await u.get(L.popular);localStorage.setItem(n.popular,JSON.stringify(t.data)),et()}catch(t){console.log(t)}}function et(){const t=JSON.parse(localStorage.getItem(n.popular)),e=JSON.parse(localStorage.getItem(n.basket));a.popularList.innerHTML=t.map(i=>{const s=i.is10PercentOff?W:"",o=e&&e.some(c=>c._id===i._id)?"check":"basket";return`<li class="popular-item" id="${i._id}">${s}
            <div class="popular-image-wrapper">
              <img src="${i.img}" alt="${i.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${i.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket" id="${i._id}">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="${f}#icon-${o}"></use>
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
          </li>`}).join("")}async function st(){try{const t=await u.get(L.discount);localStorage.setItem(n.discount,JSON.stringify(t.data)),it()}catch(t){console.log(t)}}function it(){const t=JSON.parse(localStorage.getItem(n.discount)),e=JSON.parse(localStorage.getItem(n.basket));let i=t.slice(0,2);a.discountList.innerHTML=i.map(s=>{const o=e&&e.some(c=>c._id===s._id)?"check":"basket";return`<li class="discount-item" id="${s._id}">
            ${P}
            <div class="discount-image-wrapper">
              <img src="${s.img}" alt="${s.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${s.name}</h3>
              <span class="discount-item-price">$${s.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket" id="${s._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="${f}#icon-${o}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join("")}function p(){return JSON.parse(localStorage.getItem(n.axiosOptions))}function m(t){localStorage.setItem(n.axiosOptions,JSON.stringify(t))}const k=document.querySelector(".backdrop"),ot=document.querySelector(".modal_window"),q=document.querySelector(".basic-list"),B=document.querySelector(".popular-list"),N=document.querySelector(".discount-list"),at=document.querySelector(".quantity-in-cart-header");async function T(t){try{return(await u.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(e){throw console.error(e),e}}q.addEventListener("click",I);B.addEventListener("click",I);N.addEventListener("click",I);q.addEventListener("click",$);B.addEventListener("click",$);N.addEventListener("click",$);document.addEventListener("DOMContentLoaded",()=>{const t=JSON.parse(localStorage.getItem("BASKET"))||[];O(t.length)});async function $(t){if(!t.target.closest(".basic-btn, .popular-item-btn"))return;const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;const i=e.id;try{const s=await J(i);if(s.amount=1,s){const o=JSON.parse(localStorage.getItem("BASKET"))||[];if(!o.some(g=>g._id===s._id)){o.push(s),localStorage.setItem("BASKET",JSON.stringify(o)),O(o.length);const g=e.querySelector(".basic-btn-icon, .popular-item-btn-icon"),l=e.querySelector(".checked-btn-icon"),r=e.querySelector(".basic-btn, .popular-item-btn");g.style.display="none",l.style.display="block",r.style.backgroundColor="var(--primary-brand-color)",r.disabled=!0,r.removeEventListener("click",$)}}}catch{}}async function J(t){try{const e=await T(t);return e?{_id:e._id,name:e.name,category:e.category,size:e.size,img:e.img,price:e.price,is10PercentOff:e.is10PercentOff}:null}catch(e){throw e}}async function I(t){const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;if(!t.target.closest("button")){const s=e.id;try{const o=await T(s);if(o){nt(o),k.style.display="block",k.addEventListener("click",M),document.addEventListener("keydown",x);const l=document.querySelector(".added_button"),r=document.querySelector(".add_button");o&&((JSON.parse(localStorage.getItem("BASKET"))||[]).some(S=>S._id===o._id)?(r.style.display="none",l.style.display="block"):(r.style.display="block",l.style.display="none")),r.addEventListener("click",()=>c(o))}async function c(l){try{const r=await J(s);if(r){const b=JSON.parse(localStorage.getItem("BASKET"))||[];if(!b.some(S=>S._id===r._id)){b.push(l),localStorage.setItem("BASKET",JSON.stringify(b));const S=document.querySelector(".added_button"),A=document.querySelector(".add_button");A&&(A.style.display="none",S.style.display="block"),O(b.length)}}}catch{}}document.querySelector(".close_button").addEventListener("click",C)}catch{}}}function O(t){at.textContent=t}function nt(t){const e=`<button class="close_button" type="button" aria-label="Close">
      <svg class="close-btn-icon" width="24" height="24">
        <use href="${f}#icon-close"></use>
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
        <use href="${f}#icon-basket"></use>
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
        <use href="${f}#icon-basket"></use>
      </svg>
    </button>`;ot.innerHTML=e}function M(t){t.target===k&&C()}function x(t){t.key==="Escape"&&C()}function C(){k.style.display="none",k.removeEventListener("click",M),document.removeEventListener("keydown",x)}
//# sourceMappingURL=commonHelpers2.js.map
