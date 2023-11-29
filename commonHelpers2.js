import{i as b}from"./assets/scrollUp-8a07be84.js";import{a as S}from"./assets/vendor-2bc536cc.js";const p=document.querySelector(".pages-btn-left"),m=document.querySelector(".pages-btn-right"),d=document.querySelector(".pages-list");p.addEventListener("click",H);m.addEventListener("click",D);d.addEventListener("click",z);function H(){o.loaderSymbol.style.display==="none"&&(o.basicList.innerHTML="",o.loaderSymbol.style.display="absolute");const t=y();t.page!==1&&(t.page--,console.log(t.page),u(t),g())}function D(){o.basicList.innerHTML="",o.loaderSymbol.style.display="absolute";const t=y();console.dir(t),!(t.page>=localStorage.getItem(c.totalPages))&&(t.page++,console.dir(t),u(t),g())}function z(t){o.loaderSymbol.style.display==="none"&&(o.basicList.innerHTML="",o.loaderSymbol.style.display="absolute");const e=Number(t.target.textContent);if(!e)return;const i=y();i.page=e,u(i),g()}function K(t,e){let i=[];for(let s=1;s<=t;s++)i.push(s);if(t<=5){const s=i.map(a=>`<li class="pages-item is-hover">${a}</li>`).join("");d.innerHTML=s}else if(t>5){if(e<=2||e>t-2){const s=t-4;i.splice(2,s,"...");const a=i.map(n=>+n?`<li class="pages-item is-hover">${n}</li>`:`<li class="pages-item" disabled>${n}</li>`).join("");d.innerHTML=a}else if(e>2){const s=t-2;i.splice(1,s,"...",e,"...");const a=i.map(n=>+n?`<li class="pages-item is-hover">${n}</li>`:`<li class="pages-item" disabled>${n}</li>`).join("");d.innerHTML=a}}e!==1&&p.hasAttribute("disabled")&&(p.disabled=!1,p.classList.add("is-hover")),e!==t&&m.hasAttribute("disabled")&&(m.disabled=!1,m.classList.add("is-hover")),e===1&&!p.hasAttribute("disabled")&&(p.disabled=!0,p.classList.remove("is-hover")),e===t&&!m.hasAttribute("disabled")&&(m.disabled=!0,m.classList.remove("is-hover"));for(let s=0;s<d.children.length;s++)d.children[s].textContent==e?d.children[s].classList.add("current-pages-item"):d.children[s].classList.remove("current-pages-item")}const C="/WebArtisans-JS/assets/discount-ed7c6afc.jpg";S.defaults.baseURL="https://food-boutique.b.goit.study/api";const E={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:Q()},k={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},c={basic:"basic-wrapper",basket:"BASKET",popular:"popular-wrapper",discount:"discount-wrapper",totalPages:"totalPages",categories:"categories",axiosOptions:"axiosOptions"},o={form:document.querySelector(".filter_form"),products:document.querySelector(".products"),notFound:document.querySelector(".not-found-wrapper"),basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),pagesWrapper:document.querySelector(".pages-wrapper"),categoriesSelector:document.querySelector("#categories"),loaderSymbol:document.querySelector(".loader")},A=`<div class="discount-label"> 
            <img src="${C}" alt="discount label" class="discount-img">             
            </div> `,F=`<div class="discount-label-popular"> 
            <img src="${C}" alt="discount label" class="discount-img">             
            </div> `;u(E);V();g();Z();tt();o.form.addEventListener("input",U);o.form.addEventListener("submit",W);o.form.addEventListener("change",R);function U(t){if(t.preventDefault(),t.target.name!=="text")return;const e=y();e.keyword=t.target.value,u(e)}function W(t){t.preventDefault();const e=y();if(!e.keyword){u(E),g();return}e.page=1,u(e),g()}function R(t){if(t.preventDefault(),t.target.name==="text")return;const e=y();if(t.target.name==="categories"&&(e.category=t.target.value==="null"?null:t.target.value),t.target.name==="sort"){G(e);const i=t.target.value.indexOf("="),s=t.target.value.slice(0,i);e[s]=t.target.value.slice(i+1,t.target.value.length)}e.page=1,u(e),g()}function G(t){t.byABC=null,t.byPrice=null,t.byPopularity=null}function Q(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function V(){try{const t=await S.get(k.categories);localStorage.setItem(c.categories,JSON.stringify(t.data)),X()}catch(t){console.log(t)}}function X(){const t=JSON.parse(localStorage.getItem(c.categories));o.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function g(){try{const t=await S.get(k.basic,{params:y()});localStorage.setItem(c.basic,JSON.stringify(t.data.results)),localStorage.setItem(c.totalPages,JSON.stringify(t.data.totalPages)),console.log(t.data.results),t.data.results.length===0?(o.notFound.firstElementChild.classList.add(".not-found"),o.pagesWrapper.style.display="none",o.notFound.style.display="block"):(o.notFound.firstElementChild.classList.contains(".not-found")&&(o.notFound.firstElementChild.classList.remove(".not-found"),o.notFound.style.display="none"),o.loaderSymbol.style.display="none",Y(t.data.totalPages,t.data.page))}catch(t){console.log(t)}}function Y(t,e){const i=JSON.parse(localStorage.getItem(c.basic)),s=JSON.parse(localStorage.getItem(c.basket));o.basicList.innerHTML=i.map(a=>{const n=a.is10PercentOff?A:"",f=s&&s.some(l=>l._id===a._id)?"check":"basket";return`<li class="basic-item" id="${a._id}">${n}
      <div class="basic-image-wrapper">
              <img
                src="${a.img}"
                alt="${a.name}"
              />
            </div>
            <h3 class="basic-name">${a.name}</h3>
            <div class="basic-info-wrapper">
              <p class="basic-info">
                Category:<span class="category">${a.category}</span>Size:<span
                  class="size"
                  >${a.size}</span
                >
              </p>
              <p class="basic-info">
                Popularity:<span class="popularity">${a.popularity}</span>
              </p>
            </div>
            <div class="basic-last-info">
              <span class="basic-price">$${a.price}</span>
              <button class="basic-btn" type="button" id="${a._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="${b}#icon-${f}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join(""),(!o.pagesWrapper.style.display||o.pagesWrapper.style.display==="none")&&(o.pagesWrapper.style.display="flex"),K(t,e)}async function Z(){try{const t=await S.get(k.popular);localStorage.setItem(c.popular,JSON.stringify(t.data)),j()}catch(t){console.log(t)}}function j(){const t=JSON.parse(localStorage.getItem(c.popular)),e=JSON.parse(localStorage.getItem(c.basket));o.popularList.innerHTML=t.map(i=>{const s=i.is10PercentOff?F:"",a=e&&e.some(n=>n._id===i._id)?"check":"basket";return`<li class="popular-item" id="${i._id}">${s}
            <div class="popular-image-wrapper">
              <img src="${i.img}" alt="${i.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${i.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket" id="${i._id}">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="${b}#icon-${a}"></use>
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
          </li>`}).join("")}async function tt(){try{const t=await S.get(k.discount);localStorage.setItem(c.discount,JSON.stringify(t.data)),et()}catch(t){console.log(t)}}function et(){const t=JSON.parse(localStorage.getItem(c.discount)),e=JSON.parse(localStorage.getItem(c.basket));let i=t.slice(0,2);o.discountList.innerHTML=i.map(s=>{const a=e&&e.some(n=>n._id===s._id)?"check":"basket";return`<li class="discount-item" id="${s._id}">
            ${A}
            <div class="discount-image-wrapper">
              <img src="${s.img}" alt="${s.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${s.name}</h3>
              <span class="discount-item-price">$${s.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket" id="${s._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="${b}#icon-${a}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join("")}function y(){return JSON.parse(localStorage.getItem(c.axiosOptions))}function u(t){localStorage.setItem(c.axiosOptions,JSON.stringify(t))}const L=document.querySelector(".backdrop"),st=document.querySelector(".modal_window"),q=document.querySelector(".basic-list"),N=document.querySelector(".popular-list"),B=document.querySelector(".discount-list"),at=document.querySelector(".quantity-in-cart-header");async function P(t){try{return(await S.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(e){throw console.error(e),e}}q.addEventListener("click",_);N.addEventListener("click",_);B.addEventListener("click",_);q.addEventListener("click",$);N.addEventListener("click",$);B.addEventListener("click",$);document.addEventListener("DOMContentLoaded",()=>{const t=JSON.parse(localStorage.getItem("BASKET"))||[];O(t.length)});async function $(t){if(!t.target.closest(".basic-btn, .popular-item-btn"))return;const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;const i=e.id;try{const s=await T(i);if(s.amount=1,s){const a=JSON.parse(localStorage.getItem("BASKET"))||[];if(!a.some(f=>f._id===s._id)){a.push(s),localStorage.setItem("BASKET",JSON.stringify(a)),O(a.length);const f=e.querySelector(".basic-btn-icon, .popular-item-btn-icon"),l=e.querySelector(".checked-btn-icon"),r=e.querySelector(".basic-btn, .popular-item-btn");f.style.display="none",l.style.display="block",r.style.backgroundColor="var(--primary-brand-color)",r.disabled=!0,r.removeEventListener("click",$)}}}catch{}}async function T(t){try{const e=await P(t);return e?{_id:e._id,name:e.name,category:e.category,size:e.size,img:e.img,price:e.price,is10PercentOff:e.is10PercentOff}:null}catch(e){throw e}}async function _(t){const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;if(!t.target.closest("button")){const s=e.id;try{const a=await P(s);if(a){it(a),L.style.display="block",L.addEventListener("click",J),document.addEventListener("keydown",M);const l=document.querySelector(".added_button"),r=document.querySelector(".add_button");a&&((JSON.parse(localStorage.getItem("BASKET"))||[]).some(v=>v._id===a._id)?(r.style.display="none",l.style.display="block"):(r.style.display="block",l.style.display="none")),r.addEventListener("click",()=>n(a))}async function n(l){try{const r=await T(s);if(r){const h=JSON.parse(localStorage.getItem("BASKET"))||[];if(!h.some(v=>v._id===r._id)){h.push(l),localStorage.setItem("BASKET",JSON.stringify(h));const v=document.querySelector(".added_button"),w=document.querySelector(".add_button");w&&(w.style.display="none",v.style.display="block"),O(h.length)}}}catch{}}document.querySelector(".close_button").addEventListener("click",I)}catch{}}}function O(t){at.textContent=t}function it(t){const e=`<button class="close_button" type="button" aria-label="Close">
      <svg class="close-btn-icon" width="24" height="24">
        <use href="${b}#icon-close"></use>
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
        <use href="${b}#icon-basket"></use>
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
        <use href="${b}#icon-basket"></use>
      </svg>
    </button>`;st.innerHTML=e}function J(t){t.target===L&&I()}function M(t){t.key==="Escape"&&I()}function I(){L.style.display="none",L.removeEventListener("click",J),document.removeEventListener("keydown",M)}
//# sourceMappingURL=commonHelpers2.js.map
