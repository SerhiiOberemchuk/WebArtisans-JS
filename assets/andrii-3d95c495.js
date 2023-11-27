(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const f=[{_id:"640c2dd963a319ea671e3814",name:"Almonds",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png",category:"Pantry_Items",price:8.99,size:"16 oz bag",is10PercentOff:!1,popularity:552},{_id:"640c2dd963a319ea671e35e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632},{_id:"640c2dd963a31a671e385e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632},{_id:"640c2963a319ea671e385",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632},{_id:"640c2dd963a319ea675e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632}];function h(){localStorage.setItem("BASKET",JSON.stringify(f))}h();const l=document.querySelector(".scrol-list"),a="BASKET",d=document.querySelector(".quantity-in-cart"),u=document.querySelector(".quantity-in-cart-header");document.querySelector(".cart-sum-span");let r=JSON.parse(localStorage.getItem(`${a}`));function p(n){r.reduce((t,e)=>t+e.price,0).toFixed(2);const i=n.map(t=>`<li class="scroll-item">
              <button class="scroll-top-button" type="button" aria-label="1" id="${t._id}">
                <svg class="scroll-top-icon" width="18" height="18">
                  <use href="./images/icons.svg#icon-close"></use>
                </svg>
              </button>
              <div class="image-container">
                <img class="scroll-image" src="${t.img}" alt="${t.name}" width="64" height="64" />
              </div>
              <div class="text-container">
                <h3 class="scroll-item-name">${t.name}</h3>
                <div class="item-charact">
                  <p class="scroll-item-category">
                    Category:<span class="span-scroll-category">${t.category}</span>
                  </p>
                  <p class="scroll-item-size">
                    Size:<span class="span-scroll-size">${t.size}</span>
                  </p>
                </div>
                <p class="scroll-item-price">$${t.price}</p>
              </div>
            </li>`).join("");l.innerHTML=i,d.textContent=n.length,u.textContent=n.length}p(JSON.parse(localStorage.getItem(`${a}`)));const g=document.querySelector(".empty-yellow-cart"),m=document.querySelector(".scrollbar-container"),y=document.querySelector(".order-container"),S=document.querySelector(".cart-button");S.addEventListener("click",b);function b(n){localStorage.clear(),l.innerHTML="",g.style.display="block",m.style.display="none",y.style.display="none",d.textContent=0,u.textContent=0}l.addEventListener("click",C);function C(n){if(!n.target.classList.contains("scroll-top-button"))return;const s=n.target.id,i=r.findIndex(t=>t._id===s);i!==-1&&(r.splice(i,1),console.log(r),p(r),localStorage.setItem(`${a}`,JSON.stringify(r))),r.length||(g.style.display="block",m.style.display="none",y.style.display="none")}
//# sourceMappingURL=andrii-3d95c495.js.map
