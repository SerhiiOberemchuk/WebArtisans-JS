import{i as S}from"./assets/icons-7cf8644a.js";import{a as f,S as _}from"./assets/vendor-2bc536cc.js";const w=document.querySelector(".footer-email-form");w.addEventListener("submit",F);function F(t){t.preventDefault();const e=w.elements[0].value;f.post("https://food-boutique.b.goit.study/api/subscription",{email:e}).then(i=>{const s=i.data.message;_.fire({color:"#586f1f",position:"top-end",icon:"success",title:s,showConfirmButton:!1,timer:2e3})}).catch(i=>{if(i.request.status===400){_.fire({color:"#586f1f",position:"top-end",icon:"error",title:i.response.data.message,showConfirmButton:!1,timer:2e3});return}else i.request.status===409&&_.fire({color:"#586f1f",position:"top-end",icon:"info",title:i.response.data.message,showConfirmButton:!1,timer:2e3})}).finally(i=>w.elements[0].value="")}const p=document.querySelector(".pages-btn-left"),m=document.querySelector(".pages-btn-right"),d=document.querySelector(".pages-list");p.addEventListener("click",z);m.addEventListener("click",K);d.addEventListener("click",U);function z(){a.loaderSymbol.style.display==="none"&&(a.basicList.innerHTML="",a.loaderSymbol.style.display="absolute");const t=y();t.page!==1&&(t.page--,console.log(t.page),u(t),g())}function K(){a.basicList.innerHTML="",a.loaderSymbol.style.display="absolute";const t=y();console.dir(t),!(t.page>=localStorage.getItem(r.totalPages))&&(t.page++,console.dir(t),u(t),g())}function U(t){a.loaderSymbol.style.display==="none"&&(a.basicList.innerHTML="",a.loaderSymbol.style.display="absolute");const e=Number(t.target.textContent);if(!e)return;const i=y();i.page=e,u(i),g()}function W(t,e){let i=[];for(let s=1;s<=t;s++)i.push(s);if(t<=5){const s=i.map(o=>`<li class="pages-item is-hover">${o}</li>`).join("");d.innerHTML=s}else if(t>5){if(e<=2||e>t-2){const s=t-4;i.splice(2,s,"...");const o=i.map(n=>+n?`<li class="pages-item is-hover">${n}</li>`:`<li class="pages-item" disabled>${n}</li>`).join("");d.innerHTML=o}else if(e>2){const s=t-2;i.splice(1,s,"...",e,"...");const o=i.map(n=>+n?`<li class="pages-item is-hover">${n}</li>`:`<li class="pages-item" disabled>${n}</li>`).join("");d.innerHTML=o}}e!==1&&p.hasAttribute("disabled")&&(p.disabled=!1,p.classList.add("is-hover")),e!==t&&m.hasAttribute("disabled")&&(m.disabled=!1,m.classList.add("is-hover")),e===1&&!p.hasAttribute("disabled")&&(p.disabled=!0,p.classList.remove("is-hover")),e===t&&!m.hasAttribute("disabled")&&(m.disabled=!0,m.classList.remove("is-hover"));for(let s=0;s<d.children.length;s++)d.children[s].textContent==e?d.children[s].classList.add("current-pages-item"):d.children[s].classList.remove("current-pages-item")}const q="/WebArtisans-JS/assets/discount-ed7c6afc.jpg";f.defaults.baseURL="https://food-boutique.b.goit.study/api";const A={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:Y()},k={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},r={basic:"basic-wrapper",basket:"BASKET",popular:"popular-wrapper",discount:"discount-wrapper",totalPages:"totalPages",categories:"categories",axiosOptions:"axiosOptions"},a={form:document.querySelector(".filter_form"),products:document.querySelector(".products"),notFound:document.querySelector(".not-found-wrapper"),basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),pagesWrapper:document.querySelector(".pages-wrapper"),categoriesSelector:document.querySelector("#categories"),loaderSymbol:document.querySelector(".loader")},B=`<div class="discount-label"> 
            <img src="${q}" alt="discount label" class="discount-img">             
            </div> `,R=`<div class="discount-label-popular"> 
            <img src="${q}" alt="discount label" class="discount-img">             
            </div> `;u(A);Z();g();et();it();a.form.addEventListener("input",G);a.form.addEventListener("submit",Q);a.form.addEventListener("change",V);function G(t){if(t.preventDefault(),t.target.name!=="text")return;const e=y();e.keyword=t.target.value,u(e)}function Q(t){t.preventDefault();const e=y();if(!e.keyword){u(A),g();return}e.page=1,u(e),g()}function V(t){if(t.preventDefault(),t.target.name==="text")return;const e=y();if(t.target.name==="categories"&&(e.category=t.target.value==="null"?null:t.target.value),t.target.name==="sort"){X(e);const i=t.target.value.indexOf("="),s=t.target.value.slice(0,i);e[s]=t.target.value.slice(i+1,t.target.value.length)}e.page=1,u(e),g()}function X(t){t.byABC=null,t.byPrice=null,t.byPopularity=null}function Y(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function Z(){try{const t=await f.get(k.categories);localStorage.setItem(r.categories,JSON.stringify(t.data)),j()}catch(t){console.log(t)}}function j(){const t=JSON.parse(localStorage.getItem(r.categories));a.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function g(){try{const t=await f.get(k.basic,{params:y()});localStorage.setItem(r.basic,JSON.stringify(t.data.results)),localStorage.setItem(r.totalPages,JSON.stringify(t.data.totalPages)),console.log(t.data.results),t.data.results.length===0?(a.notFound.firstElementChild.classList.add(".not-found"),a.pagesWrapper.style.display="none",a.notFound.style.display="block"):(a.notFound.firstElementChild.classList.contains(".not-found")&&(a.notFound.firstElementChild.classList.remove(".not-found"),a.notFound.style.display="none"),a.loaderSymbol.style.display="none",tt(t.data.totalPages,t.data.page))}catch(t){console.log(t)}}function tt(t,e){const i=JSON.parse(localStorage.getItem(r.basic)),s=JSON.parse(localStorage.getItem(r.basket));a.basicList.innerHTML=i.map(o=>{const n=o.is10PercentOff?B:"",b=s&&s.some(l=>l._id===o._id)?"check":"basket";return`<li class="basic-item" id="${o._id}">${n}
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
                  <use href="${S}#icon-${b}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join(""),(!a.pagesWrapper.style.display||a.pagesWrapper.style.display==="none")&&(a.pagesWrapper.style.display="flex"),W(t,e)}async function et(){try{const t=await f.get(k.popular);localStorage.setItem(r.popular,JSON.stringify(t.data)),st()}catch(t){console.log(t)}}function st(){const t=JSON.parse(localStorage.getItem(r.popular)),e=JSON.parse(localStorage.getItem(r.basket));a.popularList.innerHTML=t.map(i=>{const s=i.is10PercentOff?R:"",o=e&&e.some(n=>n._id===i._id)?"check":"basket";return`<li class="popular-item" id="${i._id}">${s}
            <div class="popular-image-wrapper">
              <img src="${i.img}" alt="${i.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${i.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket" id="${i._id}">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="${S}#icon-${o}"></use>
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
          </li>`}).join("")}async function it(){try{const t=await f.get(k.discount);localStorage.setItem(r.discount,JSON.stringify(t.data)),ot()}catch(t){console.log(t)}}function ot(){const t=JSON.parse(localStorage.getItem(r.discount)),e=JSON.parse(localStorage.getItem(r.basket));let i=t.slice(0,2);a.discountList.innerHTML=i.map(s=>{const o=e&&e.some(n=>n._id===s._id)?"check":"basket";return`<li class="discount-item" id="${s._id}">
            ${B}
            <div class="discount-image-wrapper">
              <img src="${s.img}" alt="${s.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${s.name}</h3>
              <span class="discount-item-price">$${s.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket" id="${s._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="${S}#icon-${o}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join("")}function y(){return JSON.parse(localStorage.getItem(r.axiosOptions))}function u(t){localStorage.setItem(r.axiosOptions,JSON.stringify(t))}const L=document.querySelector(".backdrop"),at=document.querySelector(".modal_window"),N=document.querySelector(".basic-list"),P=document.querySelector(".popular-list"),T=document.querySelector(".discount-list"),nt=document.querySelector(".quantity-in-cart-header");async function J(t){try{return(await f.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(e){throw console.error(e),e}}N.addEventListener("click",O);P.addEventListener("click",O);T.addEventListener("click",O);N.addEventListener("click",$);P.addEventListener("click",$);T.addEventListener("click",$);document.addEventListener("DOMContentLoaded",()=>{const t=JSON.parse(localStorage.getItem("BASKET"))||[];I(t.length)});async function $(t){if(!t.target.closest(".basic-btn, .popular-item-btn"))return;const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;const i=e.id;try{const s=await M(i);if(s.amount=1,s){const o=JSON.parse(localStorage.getItem("BASKET"))||[];if(!o.some(b=>b._id===s._id)){o.push(s),localStorage.setItem("BASKET",JSON.stringify(o)),I(o.length);const b=e.querySelector(".basic-btn-icon, .popular-item-btn-icon"),l=e.querySelector(".checked-btn-icon"),c=e.querySelector(".basic-btn, .popular-item-btn");b.style.display="none",l.style.display="block",c.style.backgroundColor="var(--primary-brand-color)",c.disabled=!0,c.removeEventListener("click",$)}}}catch{}}async function M(t){try{const e=await J(t);return e?{_id:e._id,name:e.name,category:e.category,size:e.size,img:e.img,price:e.price,is10PercentOff:e.is10PercentOff}:null}catch(e){throw e}}async function O(t){const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;if(!t.target.closest("button")){const s=e.id;try{const o=await J(s);if(o){rt(o),L.style.display="block",L.addEventListener("click",x),document.addEventListener("keydown",H);const l=document.querySelector(".added_button"),c=document.querySelector(".add_button");o&&((JSON.parse(localStorage.getItem("BASKET"))||[]).some(v=>v._id===o._id)?(c.style.display="none",l.style.display="block"):(c.style.display="block",l.style.display="none")),c.addEventListener("click",()=>n(o))}async function n(l){try{const c=await M(s);if(c){const h=JSON.parse(localStorage.getItem("BASKET"))||[];if(!h.some(v=>v._id===c._id)){h.push(l),localStorage.setItem("BASKET",JSON.stringify(h));const v=document.querySelector(".added_button"),E=document.querySelector(".add_button");E&&(E.style.display="none",v.style.display="block"),I(h.length)}}}catch{}}document.querySelector(".close_button").addEventListener("click",C)}catch{}}}function I(t){nt.textContent=t}function rt(t){const e=`<button class="close_button" type="button" aria-label="Close">
      <svg class="close-btn-icon" width="24" height="24">
        <use href="${S}#icon-close"></use>
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
        <use href="${S}#icon-basket"></use>
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
        <use href="${S}#icon-basket"></use>
      </svg>
    </button>`;at.innerHTML=e}function x(t){t.target===L&&C()}function H(t){t.key==="Escape"&&C()}function C(){L.style.display="none",L.removeEventListener("click",x),document.removeEventListener("keydown",H)}
//# sourceMappingURL=commonHelpers2.js.map
