import{i as d}from"./assets/scrollUp-2ceb5e8e.js";import{a as S}from"./assets/vendor-2bc536cc.js";const g=document.querySelector(".pages-btn-left"),y=document.querySelector(".pages-btn-right"),l=document.querySelector(".pages-list");g.addEventListener("click",D);y.addEventListener("click",z);l.addEventListener("click",K);function D(){o.loaderSymbol.style.display==="none"&&(o.basicList.innerHTML="",o.loaderSymbol.style.display="absolute");const t=b();t.page!==1&&(t.page--,console.log(t.page),u(t),f())}function z(){o.basicList.innerHTML="",o.loaderSymbol.style.display="absolute";const t=b();console.dir(t),!(t.page>=localStorage.getItem(c.totalPages))&&(t.page++,console.dir(t),u(t),f())}function K(t){o.loaderSymbol.style.display==="none"&&(o.basicList.innerHTML="",o.loaderSymbol.style.display="absolute");const e=Number(t.target.textContent);if(!e)return;const a=b();a.page=e,u(a),f()}function F(t,e){let a=[];for(let s=1;s<=t;s++)a.push(s);if(t<=5){const s=a.map(i=>`<li class="pages-item is-hover">${i}</li>`).join("");l.innerHTML=s}else if(t>5){if(e<=2||e>t-2){const s=t-4;a.splice(2,s,"...");const i=a.map(n=>+n?`<li class="pages-item is-hover">${n}</li>`:`<li class="pages-item" disabled>${n}</li>`).join("");l.innerHTML=i}else if(e>2){const s=t-2;a.splice(1,s,"...",e,"...");const i=a.map(n=>+n?`<li class="pages-item is-hover">${n}</li>`:`<li class="pages-item" disabled>${n}</li>`).join("");l.innerHTML=i}}e!==1&&g.hasAttribute("disabled")&&(g.disabled=!1,g.classList.add("is-hover")),e!==t&&y.hasAttribute("disabled")&&(y.disabled=!1,y.classList.add("is-hover")),e===1&&!g.hasAttribute("disabled")&&(g.disabled=!0,g.classList.remove("is-hover")),e===t&&!y.hasAttribute("disabled")&&(y.disabled=!0,y.classList.remove("is-hover"));for(let s=0;s<l.children.length;s++)l.children[s].textContent==e?l.children[s].classList.add("current-pages-item"):l.children[s].classList.remove("current-pages-item")}const A="/WebArtisans-JS/assets/discount-ed7c6afc.jpg";S.defaults.baseURL="https://food-boutique.b.goit.study/api";const C={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:V()},k={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},c={basic:"basic-wrapper",basket:"BASKET",popular:"popular-wrapper",discount:"discount-wrapper",totalPages:"totalPages",categories:"categories",axiosOptions:"axiosOptions"},o={form:document.querySelector(".filter_form"),products:document.querySelector(".products"),notFound:document.querySelector(".not-found-wrapper"),basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),pagesWrapper:document.querySelector(".pages-wrapper"),categoriesSelector:document.querySelector("#categories"),loaderSymbol:document.querySelector(".loader")},E=`<div class="discount-label"> 
            <img src="${A}" alt="discount label" class="discount-img">             
            </div> `,U=`<div class="discount-label-popular"> 
            <img src="${A}" alt="discount label" class="discount-img">             
            </div> `;u(C);X();f();j();et();o.form.addEventListener("input",W);o.form.addEventListener("submit",R);o.form.addEventListener("change",G);function W(t){if(t.preventDefault(),t.target.name!=="text")return;const e=b();e.keyword=t.target.value,u(e)}function R(t){t.preventDefault();const e=b();if(!e.keyword){u(C),f();return}e.page=1,u(e),f()}function G(t){if(t.preventDefault(),t.target.name==="text")return;const e=b();if(t.target.name==="categories"&&(e.category=t.target.value==="null"?null:t.target.value),t.target.name==="sort"){Q(e);const a=t.target.value.indexOf("="),s=t.target.value.slice(0,a);e[s]=t.target.value.slice(a+1,t.target.value.length)}e.page=1,u(e),f()}function Q(t){t.byABC=null,t.byPrice=null,t.byPopularity=null}function V(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function X(){try{const t=await S.get(k.categories);localStorage.setItem(c.categories,JSON.stringify(t.data)),Y()}catch(t){console.log(t)}}function Y(){const t=JSON.parse(localStorage.getItem(c.categories));o.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function f(){try{const t=await S.get(k.basic,{params:b()});localStorage.setItem(c.basic,JSON.stringify(t.data.results)),localStorage.setItem(c.totalPages,JSON.stringify(t.data.totalPages)),t.data.results.length===0?(o.notFound.firstElementChild.classList.add(".not-found"),o.pagesWrapper.style.display="none",o.notFound.style.display="block"):(o.notFound.firstElementChild.classList.contains(".not-found")&&(o.notFound.firstElementChild.classList.remove(".not-found"),o.notFound.style.display="none"),o.loaderSymbol.style.display="none",Z(t.data.totalPages,t.data.page))}catch(t){console.log(t)}}function Z(t,e){const a=JSON.parse(localStorage.getItem(c.basic)),s=JSON.parse(localStorage.getItem(c.basket));o.basicList.innerHTML=a.map(i=>{const n=i.is10PercentOff?E:"",p=s&&s.some(r=>r._id===i._id)?"check":"basket";return`<li class="basic-item" id="${i._id}">${n}
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
                  <use href="${d}#icon-${p}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join(""),(!o.pagesWrapper.style.display||o.pagesWrapper.style.display==="none")&&(o.pagesWrapper.style.display="flex"),F(t,e)}async function j(){try{const t=await S.get(k.popular);localStorage.setItem(c.popular,JSON.stringify(t.data)),tt()}catch(t){console.log(t)}}function tt(){const t=JSON.parse(localStorage.getItem(c.popular)),e=JSON.parse(localStorage.getItem(c.basket));o.popularList.innerHTML=t.map(a=>{const s=a.is10PercentOff?U:"",i=e&&e.some(n=>n._id===a._id)?"check":"basket";return`<li class="popular-item" id="${a._id}">${s}
            <div class="popular-image-wrapper">
              <img src="${a.img}" alt="${a.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${a.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket" id="${a._id}">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="${d}#icon-${i}"></use>
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
          </li>`}).join("")}async function et(){try{const t=await S.get(k.discount);localStorage.setItem(c.discount,JSON.stringify(t.data)),st()}catch(t){console.log(t)}}function st(){const t=JSON.parse(localStorage.getItem(c.discount)),e=JSON.parse(localStorage.getItem(c.basket));let a=t.slice(0,2);o.discountList.innerHTML=a.map(s=>{const i=e&&e.some(n=>n._id===s._id)?"check":"basket";return`<li class="discount-item" id="${s._id}">
            ${E}
            <div class="discount-image-wrapper">
              <img src="${s.img}" alt="${s.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${s.name}</h3>
              <span class="discount-item-price">$${s.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket" id="${s._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="${d}#icon-${i}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join("")}function b(){return JSON.parse(localStorage.getItem(c.axiosOptions))}function u(t){localStorage.setItem(c.axiosOptions,JSON.stringify(t))}const L=document.querySelector(".backdrop"),it=document.querySelector(".modal_window"),q=document.querySelector(".basic-list"),B=document.querySelector(".popular-list"),N=document.querySelector(".discount-list"),at=document.querySelector(".quantity-in-cart-header");async function P(t){try{return(await S.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(e){throw console.error(e),e}}q.addEventListener("click",_);B.addEventListener("click",_);N.addEventListener("click",_);q.addEventListener("click",$);B.addEventListener("click",$);N.addEventListener("click",$);document.addEventListener("DOMContentLoaded",()=>{const t=JSON.parse(localStorage.getItem("BASKET"))||[];O(t.length)});async function $(t){if(!t.target.closest(".basic-btn, .popular-item-btn"))return;const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;const a=e.id;try{const s=await T(a);if(s.amount=1,s){const i=JSON.parse(localStorage.getItem("BASKET"))||[];if(!i.some(p=>p._id===s._id)){i.push(s),localStorage.setItem("BASKET",JSON.stringify(i)),O(i.length);const p=e.querySelector(".basic-btn, .popular-item-btn"),r=e.querySelector(".basic-btn-icon, .popular-item-btn-icon");r.innerHTML=`<use href="${d}#icon-check"></use>`,p.disabled=!0,p.removeEventListener("click",$)}}}catch{}}async function T(t){try{const e=await P(t);return e?{_id:e._id,name:e.name,category:e.category,size:e.size,img:e.img,price:e.price,is10PercentOff:e.is10PercentOff}:null}catch(e){throw e}}async function _(t){const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;if(!t.target.closest("button")){const s=e.id;try{const i=await P(s);if(i){ot(i),L.style.display="block",L.addEventListener("click",J),document.addEventListener("keydown",M);const r=document.querySelector(".added_button"),m=document.querySelector(".add_button");i&&((JSON.parse(localStorage.getItem("BASKET"))||[]).some(v=>v._id===i._id)?(m.style.display="none",r.style.display="block"):(m.style.display="block",r.style.display="none")),m.addEventListener("click",()=>n(i))}async function n(r){try{const m=await T(s);if(m){const h=JSON.parse(localStorage.getItem("BASKET"))||[];if(!h.some(v=>v._id===m._id)){h.push(r),localStorage.setItem("BASKET",JSON.stringify(h));const v=document.querySelector(".added_button"),I=document.querySelector(".add_button"),x=e.querySelector(".basic-btn-icon, .popular-item-btn-icon");I&&(I.style.display="none",v.style.display="block",x.innerHTML=`<use href="${d}#icon-check"></use>`),O(h.length)}}}catch{}}document.querySelector(".close_button").addEventListener("click",w)}catch{}}}function O(t){at.textContent=t}function ot(t){const e=`<button class="close_button" type="button" aria-label="Close">
      <svg class="close-btn-icon" width="24" height="24">
        <use href="${d}#icon-close"></use>
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
        <use href="${d}#icon-basket"></use>
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
        <use href="${d}#icon-basket"></use>
      </svg>
    </button>`;it.innerHTML=e}function J(t){t.target===L&&w()}function M(t){t.key==="Escape"&&w()}function w(){L.style.display="none",L.removeEventListener("click",J),document.removeEventListener("keydown",M)}
//# sourceMappingURL=commonHelpers2.js.map
