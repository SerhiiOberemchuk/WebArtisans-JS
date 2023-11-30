import{i as l}from"./assets/scrollUp-fb15703a.js";import{a as f}from"./assets/vendor-2bc536cc.js";s.pagesBtnLeft.addEventListener("click",M);s.pagesBtnRight.addEventListener("click",x);s.pagesList.addEventListener("click",H);function M(){const t=m();t.page!==1&&(t.page--,d(t),g())}function x(){const t=m();t.page>=localStorage.getItem(r.totalPages)||(t.page++,d(t),g())}function H(t){const e=+t.target.textContent;if(Number.isNaN(e))return;const o=m();o.page=e,d(o),g()}function R(t,e){let o=[];for(let a=1;a<=t;a++)o.push(a);if(t<=5){const a=o.map(i=>`<li class="pages-item is-hover">${i}</li>`).join("");s.pagesList.innerHTML=a}else if(t>5){if(e<=2||e>t-2){const a=t-4;o.splice(2,a,"...");const i=o.map(n=>+n?`<li class="pages-item is-hover">${n}</li>`:`<li class="pages-item" disabled>${n}</li>`).join("");s.pagesList.innerHTML=i}else if(e>2){const a=t-2;o.splice(1,a,"...",e,"...");const i=o.map(n=>+n?`<li class="pages-item is-hover">${n}</li>`:`<li class="pages-item" disabled>${n}</li>`).join("");s.pagesList.innerHTML=i}}e!==1&&s.pagesBtnLeft.hasAttribute("disabled")&&(s.pagesBtnLeft.disabled=!1,s.pagesBtnLeft.classList.add("is-hover")),e!==t&&s.pagesBtnRight.hasAttribute("disabled")&&(s.pagesBtnRight.disabled=!1,s.pagesBtnRight.classList.add("is-hover")),e===1&&!s.pagesBtnLeft.hasAttribute("disabled")&&(s.pagesBtnLeft.disabled=!0,s.pagesBtnLeft.classList.remove("is-hover")),e===t&&!s.pagesBtnRight.hasAttribute("disabled")&&(s.pagesBtnRight.disabled=!0,s.pagesBtnRight.classList.remove("is-hover"));for(let a=0;a<s.pagesList.children.length;a++)s.pagesList.children[a].textContent==e?s.pagesList.children[a].classList.add("current-pages-item"):s.pagesList.children[a].classList.remove("current-pages-item")}const O="/WebArtisans-JS/assets/discount-ed7c6afc.jpg";f.defaults.baseURL="https://food-boutique.b.goit.study/api";const w={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:U()},S={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},r={basic:"basic-wrapper",basket:"BASKET",popular:"popular-wrapper",discount:"discount-wrapper",totalPages:"totalPages",categories:"categories",axiosOptions:"axiosOptions"},s={form:document.querySelector(".filter_form"),products:document.querySelector(".products"),notFound:document.querySelector(".not-found-wrapper"),basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),pagesWrapper:document.querySelector(".pages-wrapper"),categoriesSelector:document.querySelector("#categories"),sortSelector:document.querySelector("#sort"),loaderSymbol:document.querySelector(".loader"),pagesList:document.querySelector(".pages-list"),pagesBtnLeft:document.querySelector(".pages-btn-left"),pagesBtnRight:document.querySelector(".pages-btn-right"),divForLoader:document.querySelector(".div-for-span")},B=`<div class="discount-label"> 
            <img src="${O}" alt="discount label" class="discount-img">             
            </div> `,D=`<div class="discount-label-popular"> 
            <img src="${O}" alt="discount label" class="discount-img">             
            </div> `;d(w);G();g();X();Z();s.form.addEventListener("input",z);s.form.addEventListener("submit",K);s.form.addEventListener("change",W);function z(t){if(t.preventDefault(),t.target.name!=="text")return;const e=m();e.keyword=t.target.value,d(e)}function K(t){t.preventDefault();const e=m();if(!e.keyword){d(w),g(),s.sortSelector[0].selected="true",s.categoriesSelector[0].selected="true";return}e.page=1,d(e),g()}function W(t){if(t.preventDefault(),t.target.name==="text")return;const e=m();if(t.target.name==="categories"&&(e.category=t.target.value==="null"?null:t.target.value,e.page=1),t.target.name==="sort"){F(e);const o=t.target.value.indexOf("="),a=t.target.value.slice(0,o);e[a]=t.target.value.slice(o+1,t.target.value.length)}d(e),g()}function F(t){t.byABC=null,t.byPrice=null,t.byPopularity=null}function U(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function G(){try{const t=await f.get(S.categories);localStorage.setItem(r.categories,JSON.stringify(t.data)),Q()}catch(t){console.log(t)}}function Q(){const t=JSON.parse(localStorage.getItem(r.categories));s.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function g(){try{const t=await f.get(S.basic,{params:m()});localStorage.setItem(r.basic,JSON.stringify(t.data.results)),localStorage.setItem(r.totalPages,JSON.stringify(t.data.totalPages)),t.data.results.length===0?(s.notFound.firstElementChild.classList.add(".not-found"),s.pagesWrapper.style.display="none",s.notFound.style.display="block",s.basicList.innerHTML=""):(s.notFound.firstElementChild.classList.contains(".not-found")&&(s.notFound.firstElementChild.classList.remove(".not-found"),s.notFound.style.display="none"),t.data.totalPage===1&&(s.pagesWrapper.style.display="none"),V(t.data.totalPages,t.data.page))}catch(t){console.log(t)}}function V(t,e){const o=JSON.parse(localStorage.getItem(r.basic)),a=JSON.parse(localStorage.getItem(r.basket));s.basicList.innerHTML=o.map(i=>{const n=i.is10PercentOff?B:"",u=a&&a.some(c=>c._id===i._id)?"check":"basket";return`<li class="basic-item" id="${i._id}">${n}
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
                  <use href="${l}#icon-${u}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join(""),(!s.pagesWrapper.style.display||s.pagesWrapper.style.display==="none")&&(s.pagesWrapper.style.display="flex"),t===1&&(s.pagesWrapper.style.display="none"),R(t,e)}async function X(){try{const t=await f.get(S.popular);localStorage.setItem(r.popular,JSON.stringify(t.data)),Y()}catch(t){console.log(t)}}function Y(){const t=JSON.parse(localStorage.getItem(r.popular)),e=JSON.parse(localStorage.getItem(r.basket));s.popularList.innerHTML=t.map(o=>{const a=o.is10PercentOff?D:"",i=e&&e.some(n=>n._id===o._id)?"check":"basket";return`<li class="popular-item" id="${o._id}">${a}
            <div class="popular-image-wrapper">
              <img src="${o.img}" alt="${o.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${o.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket" id="${o._id}">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="${l}#icon-${i}"></use>
                  </svg>
                </button>
              </div>
              <p class="popular-info">
                Category:<span class="category">${o.category}</span>
              </p>
              <p class="popular-info">
                Size:<span class="size">${o.size}</span>Popularity:<span class="popularity">${o.popularity}</span>
              </p>
            </div>
          </li>`}).join("")}async function Z(){try{const t=await f.get(S.discount);localStorage.setItem(r.discount,JSON.stringify(t.data)),j()}catch(t){console.log(t)}}function j(){const t=JSON.parse(localStorage.getItem(r.discount)),e=JSON.parse(localStorage.getItem(r.basket));let o=t.slice(0,2);s.discountList.innerHTML=o.map(a=>{const i=e&&e.some(n=>n._id===a._id)?"check":"basket";return`<li class="discount-item" id="${a._id}">
            ${B}
            <div class="discount-image-wrapper">
              <img src="${a.img}" alt="${a.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${a.name}</h3>
              <span class="discount-item-price">$${a.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket" id="${a._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="${l}#icon-${i}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join("")}function m(){return JSON.parse(localStorage.getItem(r.axiosOptions))}function d(t){localStorage.setItem(r.axiosOptions,JSON.stringify(t))}const h=document.querySelector(".backdrop"),tt=document.querySelector(".modal_window"),I=document.querySelector(".basic-list"),A=document.querySelector(".popular-list"),C=document.querySelector(".discount-list"),et=document.querySelector(".quantity-in-cart-header");async function E(t){try{return(await f.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(e){throw console.error(e),e}}I.addEventListener("click",v);A.addEventListener("click",v);C.addEventListener("click",v);I.addEventListener("click",L);A.addEventListener("click",L);C.addEventListener("click",L);document.addEventListener("DOMContentLoaded",()=>{const t=JSON.parse(localStorage.getItem("BASKET"))||[];k(t.length)});async function L(t){if(!t.target.closest(".basic-btn, .popular-item-btn"))return;const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;const o=e.id;try{const a=await q(o);if(a.amount=1,a){const i=JSON.parse(localStorage.getItem("BASKET"))||[];if(!i.some(u=>u._id===a._id)){i.push(a),localStorage.setItem("BASKET",JSON.stringify(i)),k(i.length);const u=e.querySelector(".basic-btn, .popular-item-btn"),c=e.querySelector(".basic-btn-icon, .popular-item-btn-icon");c.innerHTML=`<use href="${l}#icon-check"></use>`,u.disabled=!0,u.removeEventListener("click",L)}}}catch{}}async function q(t){try{const e=await E(t);return e?{_id:e._id,name:e.name,category:e.category,size:e.size,img:e.img,price:e.price,is10PercentOff:e.is10PercentOff}:null}catch(e){throw e}}async function v(t){const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;if(!t.target.closest("button")){const a=e.id;try{const i=await E(a);if(i){st(i),h.style.display="block",h.addEventListener("click",N),document.addEventListener("keydown",P);const c=document.querySelector(".added_button"),p=document.querySelector(".add_button");i&&((JSON.parse(localStorage.getItem("BASKET"))||[]).some(b=>b._id===i._id)?(p.style.display="none",c.style.display="block"):(p.style.display="block",c.style.display="none")),p.addEventListener("click",()=>n(i))}async function n(c){try{const p=await q(a);if(p){const y=JSON.parse(localStorage.getItem("BASKET"))||[];if(!y.some(b=>b._id===p._id)){c.amount=1,y.push(c),localStorage.setItem("BASKET",JSON.stringify(y));const b=document.querySelector(".added_button"),_=document.querySelector(".add_button"),J=e.querySelector(".basic-btn-icon, .popular-item-btn-icon");_&&(_.style.display="none",b.style.display="block",J.innerHTML=`<use href="${l}#icon-check"></use>`),k(y.length)}}}catch{}}document.querySelector(".close_button").addEventListener("click",$)}catch{}}}function k(t){et.textContent=t}function st(t){const e=`<button class="close_button" type="button" aria-label="Close">
      <svg class="close-btn-icon" width="24" height="24">
        <use href="${l}#icon-close"></use>
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
        <use href="${l}#icon-basket"></use>
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
        <use href="${l}#icon-basket"></use>
      </svg>
    </button>`;tt.innerHTML=e}function N(t){t.target===h&&$()}function P(t){t.key==="Escape"&&$()}function $(){h.style.display="none",h.removeEventListener("click",N),document.removeEventListener("keydown",P)}
//# sourceMappingURL=commonHelpers2.js.map
