import"./assets/styles-cd1a6381.js";import{a as d}from"./assets/vendor-a61d8330.js";const h=document.querySelector(".footer-email-form");h.addEventListener("submit",J);function J(t){t.preventDefault(),console.log(h.elements[0].value),d.post("https://food-boutique.b.goit.study/api/subscription",{email:h.elements[0].value})}let n=1,D=60;const k=document.querySelector(".pages-btn-left"),I=document.querySelector(".pages-btn-right"),r=document.querySelector(".pages-list");k.addEventListener("click",T);I.addEventListener("click",x);r.addEventListener("click",M);function T(t){n!==1&&(n--,p())}function x(t){n>=D||(n++,p())}function M(t){n=Number(t.target.textContent),n&&p()}function H(t){let e=[];for(let s=1;s<=t;s++)e.push(s);if(t<=5){const s=e.map(o=>`<li class="pages-item">${o}</li>`).join("");console.log(s),r.innerHTML=s}else if(t>5){if(n<=2||n>t-2){const s=t-4;e.splice(2,s,'<li class="pages-item-points">...</li>');const o=e.map(i=>`<li class="pages-item">${i}</li>`).join("");r.innerHTML=o}else if(n>2){const s=t-2;e.splice(1,s,"...",n,"...");const o=e.map(i=>`<li class="pages-item">${i}</li>`).join("");r.innerHTML=o}}n===1?k.setAttribute("disabled","true"):n===t?I.setAttribute("disabled","true"):(k.removeAttribute("disabled"),I.removeAttribute("disabled")),console.log(r.children);for(let s=0;s<r.children.length;s++)r.children[s].textContent==n?r.children[s].classList.add("current-pages-item"):r.children[s].classList.remove("current-pages-item")}let S=null,z=1;d.defaults.baseURL="https://food-boutique.b.goit.study/api";const b={basic:"/products",popular:"/products/popular",discount:"/products/discount",categories:"/products/categories"},a={totalPages:"totalPages",basic:"basic-wrapper",popular:"popular-wrapper",discount:"discount-wrapper",categories:"categories",axiosOptions:"axiosOptions"},u={form:document.querySelector(".filter_form"),basicList:document.querySelector(".basic-list"),popularList:document.querySelector(".popular-list"),discountList:document.querySelector(".discount-list"),categoriesSelector:document.querySelector("#categories")};W();Q();p();Z();tt();u.form.addEventListener("input",K);u.form.addEventListener("submit",F);u.form.addEventListener("change",R);function K(t){if(t.preventDefault(),t.target.name!=="text")return;const e=JSON.parse(localStorage.getItem(a.axiosOptions));e.keyword=t.target.value,localStorage.setItem(a.axiosOptions,JSON.stringify(e))}function F(t){t.preventDefault(),p()}function R(t){t.preventDefault();const e=JSON.parse(localStorage.getItem(a.axiosOptions));if(t.target.name==="categories"&&(e.category=t.target.value),t.target.name==="sort"){U(e);const s=t.target.value.indexOf("="),o=t.target.value.slice(0,s);e[o]=t.target.value.slice(s+1,t.target.value.length)}localStorage.setItem(a.axiosOptions,JSON.stringify(e)),p()}function U(t){t.byABC=null,t.byPrice=null,t.byPopularity=null}function W(){localStorage.setItem("axiosOptions",JSON.stringify({keyword:null,category:null,byABC:!0,byPrice:null,byPopularity:null,page:1,limit:G()}))}function G(){const t=window.innerWidth;return t<768?6:t>=768&&t<1440?8:9}async function Q(){try{const t=await d.get(b.categories);V(t.data),X()}catch(t){console.log(t)}}function V(t){localStorage.setItem(a.categories,JSON.stringify(t))}function X(){const t=JSON.parse(localStorage.getItem(a.categories));u.categoriesSelector.innerHTML="<option disabled selected hidden>Categories</option>"+t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("")+'<option value="null">Show all</option>'}async function p(){try{const t=await d.get(b.basic,{params:st()});z=t.data.page,S=t.data.totalPages,localStorage.setItem(a.basic,JSON.stringify(t.data.results)),localStorage.setItem(a.totalPages,JSON.stringify(S)),Y(),H(S)}catch(t){console.log(t)}}function Y(){const t=JSON.parse(localStorage.getItem(a.basic));u.basicList.innerHTML=t.map(e=>`<li class="basic-item" id="${e._id}">
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
          </li>`).join("")}async function Z(){try{const t=await d.get(b.popular);localStorage.setItem(a.popular,JSON.stringify(t.data)),j()}catch(t){console.log(t)}}function j(){const t=JSON.parse(localStorage.getItem(a.popular));u.popularList.innerHTML=t.map(e=>` <li class="popular-item" id="${e._id}">
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
          </li>`).join("")}async function tt(){try{const t=await d.get(b.discount);localStorage.setItem(a.discount,JSON.stringify(t.data)),et()}catch(t){console.log(t)}}function et(){let e=JSON.parse(localStorage.getItem(a.discount)).slice(0,2);u.discountList.innerHTML=e.map(s=>`<li class="discount-item" id="${s._id}">
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
                  <use href="./images/icons.svg#icon-basket"></use>
                </svg>
              </button>
            </div>
          </li>`).join("")}function st(){return JSON.parse(localStorage.getItem(a.axiosOptions))}const y=document.querySelector(".backdrop"),ot=document.querySelector(".modal_window"),P=document.querySelector(".basic-list"),_=document.querySelector(".popular-list"),E=document.querySelector(".discount-list");async function q(t){try{return(await d.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(e){throw console.error(e),e}}P.addEventListener("click",w);_.addEventListener("click",w);E.addEventListener("click",w);P.addEventListener("click",v);_.addEventListener("click",v);E.addEventListener("click",v);async function v(t){if(!t.target.closest(".basic-btn, .popular-item-btn"))return;const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;const s=e.id;console.log(s);try{const o=await C(s);if(o){const i=JSON.parse(localStorage.getItem("BASKET"))||[];if(i.some(f=>f._id===o._id))console.log("Product is already in the basket");else{i.push(o),localStorage.setItem("BASKET",JSON.stringify(i)),console.log("product added to basket",o),console.log(i);const f=e.querySelector(".basic-btn-icon, .popular-item-btn-icon"),l=e.querySelector(".checked-btn-icon"),c=e.querySelector(".basic-btn, .popular-item-btn");f.style.display="none",l.style.display="block",c.style.backgroundColor="var(--primary-brand-color)",c.disabled=!0,c.removeEventListener("click",v)}}else console.error("Unable to find product with ID",s)}catch(o){console.error("Error fetching product by ID",o)}}async function C(t){try{const e=await q(t);return e?{_id:e._id,name:e.name,category:e.category,size:e.size,img:e.img,price:e.price,is10PercentOff:e.is10PercentOff}:(console.error("Unable to find product with ID",t),null)}catch(e){throw console.error("Error fetching product by ID",e),e}}async function w(t){const e=t.target.closest(".basic-item")||t.target.closest(".popular-item")||t.target.closest(".discount-item");if(!e)return;if(!t.target.closest("button")){const o=e.id;try{const i=await q(o);if(i){it(i),y.style.display="block",y.addEventListener("click",N),document.addEventListener("keydown",A);const l=document.querySelector(".added_button"),c=document.querySelector(".add_button");i&&((JSON.parse(localStorage.getItem("BASKET"))||[]).some(m=>m._id===i._id)?(c.style.display="none",l.style.display="block"):(c.style.display="block",l.style.display="none")),c.addEventListener("click",()=>$(i))}async function $(l){try{const c=await C(o);if(c){const g=JSON.parse(localStorage.getItem("BASKET"))||[];if(g.some(m=>m._id===c._id))console.log("Product is already in the basket");else{g.push(l),localStorage.setItem("BASKET",JSON.stringify(g)),console.log("product added to basket",l),console.log(g);const m=document.querySelector(".added_button"),O=document.querySelector(".add_button");O&&(O.style.display="none",m.style.display="block")}}else console.error("Unable to find product with ID",o)}catch(c){console.error("Error fetching product by ID",c)}}document.querySelector(".close_button").addEventListener("click",L)}catch(i){console.log(i)}}}function it(t){const e=`<button class="close_button" type="button" aria-label="Close">
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
    </button>`;ot.innerHTML=e}function N(t){t.target===y&&L()}function A(t){t.key==="Escape"&&L()}function L(){y.style.display="none",y.removeEventListener("click",N),document.removeEventListener("keydown",A)}
//# sourceMappingURL=commonHelpers2.js.map
