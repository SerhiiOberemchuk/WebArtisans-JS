import{i as d}from"./assets/scrollUp-a269a1bb.js";import{a as h}from"./assets/vendor-2bc536cc.js";const u=document.querySelector(".pages-list"),g=document.querySelector(".pages-btn-left"),f=document.querySelector(".pages-btn-right");u.addEventListener("click",U);g.addEventListener("click",R);f.addEventListener("click",F);function R(){const t=b();t.page!==1&&(t.page--,p(t),y())}function F(){const t=b();t.page>=localStorage.getItem(c.totalPages)||(t.page++,p(t),y())}function U(t){const e=+t.target.textContent;if(Number.isNaN(e))return;const a=b();a.page=e,p(a),y()}function G(t,e){let a=[];for(let s=1;s<=t;s++)a.push(s);if(t<=5){const s=a.map(i=>`<li class="pages-item is-hover">${i}</li>`).join("");u.innerHTML=s}else if(t>5){if(e<=2||e>t-2){const s=t-4;a.splice(2,s,"...");const i=a.map(o=>+o?`<li class="pages-item is-hover">${o}</li>`:`<li class="pages-item" disabled>${o}</li>`).join("");u.innerHTML=i}else if(e>2){const s=t-2;a.splice(1,s,"...",e,"...");const i=a.map(o=>+o?`<li class="pages-item is-hover">${o}</li>`:`<li class="pages-item" disabled>${o}</li>`).join("");u.innerHTML=i}}e!==1&&g.hasAttribute("disabled")&&(g.disabled=!1,g.classList.add("is-hover")),e!==t&&f.hasAttribute("disabled")&&(f.disabled=!1,f.classList.add("is-hover")),e===1&&!g.hasAttribute("disabled")&&(g.disabled=!0,g.classList.remove("is-hover")),e===t&&!f.hasAttribute("disabled")&&(f.disabled=!0,f.classList.remove("is-hover"));for(let s=0;s<u.children.length;s++)u.children[s].textContent==e?u.children[s].classList.add("current-pages-item"):u.children[s].classList.remove("current-pages-item")}const q="/WebArtisans-JS/assets/discount-ed7c6afc.jpg";h.defaults.baseURL="https://food-boutique.b.goit.study/api";const B={keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:j()},k={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},c={basic:"basic-wrapper",basket:"BASKET",popular:"popular-wrapper",discount:"discount-wrapper",totalPages:"totalPages",categories:"categories",axiosOptions:"axiosOptions"},n={form:document.querySelector(".filter_form"),products:document.querySelector(".products"),notFound:document.querySelector(".not-found-wrapper"),basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),pagesWrapper:document.querySelector(".pages-wrapper"),categoriesSelector:document.querySelector("#categories"),sortSelector:document.querySelector("#sort"),pagesList:document.querySelector(".pages-list"),pagesBtnLeft:document.querySelector(".pages-btn-left"),pagesBtnRight:document.querySelector(".pages-btn-right")},w=`<div class="discount-label"> 
            <img src="${q}" alt="discount label" class="discount-img">             
            </div> `,Q=`<div class="discount-label-popular"> 
            <img src="${q}" alt="discount label" class="discount-img">             
            </div> `;p(B);tt();y();it();P();let L=0,O=0,E=JSON.parse(localStorage.getItem(c.discount));setInterval(()=>{ot(L,E),L+=2,L===10&&(L=0,O+=1),O===5&&(O=0,P(),E=JSON.parse(localStorage.getItem(c.discount)))},3e3);n.form.addEventListener("input",V);n.form.addEventListener("submit",X);n.form.addEventListener("change",Y);function V(t){if(t.preventDefault(),t.target.name!=="text")return;const e=b();e.keyword=t.target.value,p(e)}function X(t){t.preventDefault();const e=b();if(!e.keyword){p(B),y(),n.sortSelector[0].selected="true",n.categoriesSelector[0].selected="true";return}e.page=1,p(e),y()}function Y(t){if(t.preventDefault(),t.target.name==="text")return;const e=b();if(t.target.name==="categories"&&(e.category=t.target.value==="null"?null:t.target.value,e.page=1),t.target.name==="sort"){Z(e);const a=t.target.value.indexOf("="),s=t.target.value.slice(0,a);e[s]=t.target.value.slice(a+1,t.target.value.length)}p(e),y()}function Z(t){t.byABC=null,t.byPrice=null,t.byPopularity=null}function j(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function tt(){try{const t=await h.get(k.categories);localStorage.setItem(c.categories,JSON.stringify(t.data)),et()}catch(t){console.log(t)}}function et(){const t=JSON.parse(localStorage.getItem(c.categories));n.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function y(){try{const t=await h.get(k.basic,{params:b()});localStorage.setItem(c.basic,JSON.stringify(t.data.results)),localStorage.setItem(c.totalPages,JSON.stringify(t.data.totalPages)),t.data.results.length===0?(n.notFound.firstElementChild.classList.add(".not-found"),n.pagesWrapper.style.display="none",n.notFound.style.display="block",n.basicList.innerHTML=""):(n.notFound.firstElementChild.classList.contains(".not-found")&&(n.notFound.firstElementChild.classList.remove(".not-found"),n.notFound.style.display="none"),t.data.totalPage===1&&(n.pagesWrapper.style.display="none"),st(t.data.totalPages,t.data.page))}catch(t){console.log(t)}}function st(t,e){const a=JSON.parse(localStorage.getItem(c.basic)),s=JSON.parse(localStorage.getItem(c.basket));n.basicList.innerHTML=a.map(i=>{const o=i.is10PercentOff?w:"",r=s&&s.some(l=>l._id===i._id)?"check":"basket";return`<li class="basic-item" id="${i._id}">${o}
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
                  <use href="${d}#icon-${r}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join(""),(!n.pagesWrapper.style.display||n.pagesWrapper.style.display==="none")&&(n.pagesWrapper.style.display="flex"),t===1&&(n.pagesWrapper.style.display="none"),G(t,e)}async function it(){try{const t=await h.get(k.popular);localStorage.setItem(c.popular,JSON.stringify(t.data)),at()}catch(t){console.log(t)}}function at(){const t=JSON.parse(localStorage.getItem(c.popular)),e=JSON.parse(localStorage.getItem(c.basket));n.popularList.innerHTML=t.map(a=>{const s=a.is10PercentOff?Q:"",i=e&&e.some(o=>o._id===a._id)?"check":"basket";return`<li class="popular-item" id="${a._id}">${s}
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
          </li>`}).join("")}async function P(){try{const t=await h.get(k.discount);localStorage.setItem(c.discount,JSON.stringify(t.data)),nt()}catch(t){console.log(t)}}function nt(){const t=JSON.parse(localStorage.getItem(c.discount)),e=JSON.parse(localStorage.getItem(c.basket));let a=t.slice(0,2);n.discountList.innerHTML=a.map(s=>{const i=e&&e.some(o=>o._id===s._id)?"check":"basket";return`<li class="discount-item" id="${s._id}">
            ${w}
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
          </li>`}).join("")}function ot(t,e){const a=JSON.parse(localStorage.getItem(c.basket));let s=e.slice(t,2+t);n.discountList.innerHTML=s.map(i=>{const o=a&&a.some(r=>r._id===i._id)?"check":"basket";return`<li class="discount-item" id="${i._id}">
            ${w}
            <div class="discount-image-wrapper">
              <img src="${i.img}" alt="${i.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${i.name}</h3>
              <span class="discount-item-price">$${i.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket" id="${i._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="${d}#icon-${o}"></use>
                </svg>
              </button>
            </div>
          </li>`}).join("")}function b(){return JSON.parse(localStorage.getItem(c.axiosOptions))}function p(t){localStorage.setItem(c.axiosOptions,JSON.stringify(t))}const $=document.querySelector(".backdrop"),ct=document.querySelector(".modal_window"),T=document.querySelector(".basic-list"),J=document.querySelector(".popular-list"),M=document.querySelector(".discount-list"),rt=document.querySelector(".quantity-in-cart-header");async function x(t){try{return(await h.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(e){throw console.error(e),e}}T.addEventListener("click",I);J.addEventListener("click",I);M.addEventListener("click",I);T.addEventListener("click",_);J.addEventListener("click",_);M.addEventListener("click",_);document.addEventListener("DOMContentLoaded",()=>{const t=JSON.parse(localStorage.getItem("BASKET"))||[];A(t.length)});async function _(t){if(!t.target.closest(".basic-btn, .popular-item-btn"))return;const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;const a=e.id;try{const s=await H(a);if(s.amount=1,s){const i=JSON.parse(localStorage.getItem("BASKET"))||[];if(!i.some(r=>r._id===s._id)){i.push(s),localStorage.setItem("BASKET",JSON.stringify(i)),A(i.length);const r=e.querySelector(".basic-btn, .popular-item-btn"),l=e.querySelector(".basic-btn-icon, .popular-item-btn-icon");l.innerHTML=`<use href="${d}#icon-check"></use>`,r.disabled=!0,r.removeEventListener("click",_)}}}catch{}}async function H(t){try{const e=await x(t);return e?{_id:e._id,name:e.name,category:e.category,size:e.size,img:e.img,price:e.price,is10PercentOff:e.is10PercentOff}:null}catch(e){throw e}}async function I(t){const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;if(!t.target.closest("button")){const s=e.id;try{const i=await x(s);if(i){lt(i),$.style.display="block",$.addEventListener("click",D),document.addEventListener("keydown",z);const l=document.querySelector(".added_button"),m=document.querySelector(".add_button");i&&((JSON.parse(localStorage.getItem("BASKET"))||[]).some(v=>v._id===i._id)?(m.style.display="none",l.style.display="block"):(m.style.display="block",l.style.display="none")),m.addEventListener("click",()=>o(i))}async function o(l){try{const m=await H(s);if(m){const S=JSON.parse(localStorage.getItem("BASKET"))||[];if(!S.some(v=>v._id===m._id)){l.amount=1,S.push(l),localStorage.setItem("BASKET",JSON.stringify(S));const v=document.querySelector(".added_button"),C=document.querySelector(".add_button"),W=e.querySelector(".basic-btn-icon, .popular-item-btn-icon");C&&(C.style.display="none",v.style.display="block",W.innerHTML=`<use href="${d}#icon-check"></use>`),A(S.length)}}}catch{}}document.querySelector(".close_button").addEventListener("click",N)}catch{}}}function A(t){rt.textContent=t}function lt(t){const e=`<button class="close_button" type="button" aria-label="Close">
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
    </button>`;ct.innerHTML=e}function D(t){t.target===$&&N()}function z(t){t.key==="Escape"&&N()}function N(){$.style.display="none",$.removeEventListener("click",D),document.removeEventListener("keydown",z)}
//# sourceMappingURL=commonHelpers2.js.map
