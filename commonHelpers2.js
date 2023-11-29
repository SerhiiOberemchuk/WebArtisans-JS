import{i as y}from"./assets/icons-b935cbaa.js";import{a as u}from"./assets/vendor-4d3d87e9.js";const _=document.querySelector(".footer-email-form");_.addEventListener("submit",M);function M(t){t.preventDefault(),console.log(_.elements[0].value),u.post("https://food-boutique.b.goit.study/api/subscription",{email:_.elements[0].value})}const h=document.querySelector(".pages-btn-left"),v=document.querySelector(".pages-btn-right"),d=document.querySelector(".pages-list");h.addEventListener("click",x);v.addEventListener("click",D);d.addEventListener("click",H);function x(t){const e=p();e.page!==1&&(e.page--,console.log(e.page),m(e),b())}function D(t){const e=p();console.dir(e),!(e.page>=localStorage.getItem(n.totalPages))&&(e.page++,console.dir(e),m(e),b())}function H(t){const e=Number(t.target.textContent);if(!e)return;const a=p();a.page=e,m(a),b()}function z(t,e){let a=[];for(let s=1;s<=t;s++)a.push(s);if(t<=5){const s=a.map(i=>`<li class="pages-item">${i}</li>`).join("");d.innerHTML=s}else if(t>5){if(e<=2||e>t-2){const s=t-4;a.splice(2,s,'<li class="pages-item-points">...</li>');const i=a.map(r=>`<li class="pages-item">${r}</li>`).join("");d.innerHTML=i}else if(e>2){const s=t-2;a.splice(1,s,"...",e,"...");const i=a.map(r=>`<li class="pages-item">${r}</li>`).join("");d.innerHTML=i}}e!==1&&h.hasAttribute("disabled")&&h.removeAttribute("disabled"),e!==t&&v.hasAttribute("disabled")&&v.removeAttribute("disabled"),e===1&&!h.hasAttribute("disabled")&&h.setAttribute("disabled","disabled"),e===t&&!v.hasAttribute("disabled")&&v.setAttribute("disabled","disabled");for(let s=0;s<d.children.length;s++)d.children[s].textContent==e?d.children[s].classList.add("current-pages-item"):d.children[s].classList.remove("current-pages-item")}u.defaults.baseURL="https://food-boutique.b.goit.study/api";const L={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},n={basic:"basic-wrapper",basket:"BASKET",popular:"popular-wrapper",discount:"discount-wrapper",totalPages:"totalPages",categories:"categories",axiosOptions:"axiosOptions"},o={form:document.querySelector(".filter_form"),products:document.querySelector(".products"),notFound:document.querySelector(".not-found-wrapper"),basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),pagesWrapper:document.querySelector(".pages-wrapper"),categoriesSelector:document.querySelector("#categories")},F=`<div class="discount-label"> 
            <img src="./images/discount.jpg" alt="discount label" class="discount-img">             
            </div> `;m({keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:Q()});V();b();Z();j();o.form.addEventListener("input",K);o.form.addEventListener("submit",W);o.form.addEventListener("change",U);function K(t){if(t.preventDefault(),t.target.name!=="text")return;const e=p();e.keyword=t.target.value,m(e)}function W(t){t.preventDefault();const e=p();e.page=1,m(e),b()}function U(t){if(t.preventDefault(),t.target.name==="text")return;const e=p();if(t.target.name==="categories"&&(e.category=t.target.value==="null"?null:t.target.value),t.target.name==="sort"){G(e);const a=t.target.value.indexOf("="),s=t.target.value.slice(0,a);e[s]=t.target.value.slice(a+1,t.target.value.length)}e.page=1,m(e),b()}function G(t){t.byABC=null,t.byPrice=null,t.byPopularity=null}function Q(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function V(){try{const t=await u.get(L.categories);localStorage.setItem(n.categories,JSON.stringify(t.data)),X()}catch(t){console.log(t)}}function X(){const t=JSON.parse(localStorage.getItem(n.categories));o.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function b(){try{const t=await u.get(L.basic,{params:p()});localStorage.setItem(n.basic,JSON.stringify(t.data.results)),localStorage.setItem(n.totalPages,JSON.stringify(t.data.totalPages)),console.log(t.data.results),t.data.results.length!==0?(o.notFound.firstElementChild.classList.contains(".not-found")&&(o.notFound.firstElementChild.classList.remove(".not-found"),o.notFound.style.display="none"),Y(t.data.totalPages,t.data.page)):(o.basicList.innerHTML="",o.notFound.firstElementChild.classList.add(".not-found"),o.pagesWrapper.style.display="none",o.notFound.style.display="block")}catch(t){console.log(t)}}function Y(t,e){const a=JSON.parse(localStorage.getItem(n.basic)),s=JSON.parse(localStorage.getItem(n.basket));o.basicList.innerHTML=a.map(i=>{const r=i.is10PercentOff?F:"",g=s&&s.some(l=>l._id===i._id)?"check":"basket";return`<li class="basic-item" id="${i._id}">${r}
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
          </li>`}).join(""),o.pagesWrapper.style.display==="none"&&(o.pagesWrapper.style.display="absolute"),z(t,e)}async function Z(){try{const t=await u.get(L.popular);localStorage.setItem(n.popular,JSON.stringify(t.data)),R()}catch(t){console.log(t)}}function R(){const t=JSON.parse(localStorage.getItem(n.popular)),e=JSON.parse(localStorage.getItem(n.basket));o.popularList.innerHTML=t.map(a=>{const s=e&&e.some(i=>i._id===a._id)?"check":"basket";return`<li class="popular-item" id="${a._id}">
            <div class="popular-image-wrapper">
              <img src="${a.img}" alt="${a.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${a.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket" id="${a._id}">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="${y}#icon-${s}"></use>
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
          </li>`}).join("")}async function j(){try{const t=await u.get(L.discount);localStorage.setItem(n.discount,JSON.stringify(t.data)),tt()}catch(t){console.log(t)}}function tt(){const t=JSON.parse(localStorage.getItem(n.discount)),e=JSON.parse(localStorage.getItem(n.basket));let a=t.slice(0,2);o.discountList.innerHTML=a.map(s=>{const i=e&&e.some(r=>r._id===s._id)?"check":"basket";return`<li class="discount-item" id="${s._id}">
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
                  <use href="${y}#icon-${i}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join("")}function p(){return JSON.parse(localStorage.getItem(n.axiosOptions))}function m(t){localStorage.setItem(n.axiosOptions,JSON.stringify(t))}const k=document.querySelector(".backdrop"),et=document.querySelector(".modal_window"),E=document.querySelector(".basic-list"),A=document.querySelector(".popular-list"),P=document.querySelector(".discount-list"),st=document.querySelector(".quantity-in-cart-header");async function q(t){try{return(await u.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(e){throw console.error(e),e}}E.addEventListener("click",I);A.addEventListener("click",I);P.addEventListener("click",I);E.addEventListener("click",$);A.addEventListener("click",$);P.addEventListener("click",$);document.addEventListener("DOMContentLoaded",()=>{const t=JSON.parse(localStorage.getItem("BASKET"))||[];w(t.length)});async function $(t){if(!t.target.closest(".basic-btn, .popular-item-btn"))return;const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;const a=e.id;try{const s=await N(a);if(s.amount=1,s){const i=JSON.parse(localStorage.getItem("BASKET"))||[];if(!i.some(g=>g._id===s._id)){i.push(s),localStorage.setItem("BASKET",JSON.stringify(i)),w(i.length);const g=e.querySelector(".basic-btn-icon, .popular-item-btn-icon"),l=e.querySelector(".checked-btn-icon"),c=e.querySelector(".basic-btn, .popular-item-btn");g.style.display="none",l.style.display="block",c.style.backgroundColor="var(--primary-brand-color)",c.disabled=!0,c.removeEventListener("click",$)}}}catch{}}async function N(t){try{const e=await q(t);return e?{_id:e._id,name:e.name,category:e.category,size:e.size,img:e.img,price:e.price,is10PercentOff:e.is10PercentOff}:null}catch(e){throw e}}async function I(t){const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;if(!t.target.closest("button")){const s=e.id;try{const i=await q(s);if(i){it(i),k.style.display="block",k.addEventListener("click",B),document.addEventListener("keydown",T);const l=document.querySelector(".added_button"),c=document.querySelector(".add_button");i&&((JSON.parse(localStorage.getItem("BASKET"))||[]).some(S=>S._id===i._id)?(c.style.display="none",l.style.display="block"):(c.style.display="block",l.style.display="none")),c.addEventListener("click",()=>r(i))}async function r(l){try{const c=await N(s);if(c){const f=JSON.parse(localStorage.getItem("BASKET"))||[];if(!f.some(S=>S._id===c._id)){f.push(l),localStorage.setItem("BASKET",JSON.stringify(f));const S=document.querySelector(".added_button"),C=document.querySelector(".add_button");C&&(C.style.display="none",S.style.display="block"),w(f.length)}}}catch{}}document.querySelector(".close_button").addEventListener("click",O)}catch{}}}function w(t){st.textContent=t}function it(t){const e=`<button class="close_button" type="button" aria-label="Close">
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
    </button>`;et.innerHTML=e}function B(t){t.target===k&&O()}function T(t){t.key==="Escape"&&O()}function O(){k.style.display="none",k.removeEventListener("click",B),document.removeEventListener("keydown",T)}
//# sourceMappingURL=commonHelpers2.js.map
