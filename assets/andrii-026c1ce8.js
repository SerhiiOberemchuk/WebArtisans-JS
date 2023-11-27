(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const f=[{_id:"640c2dd963a319ea671e3814",name:"Almonds",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png",category:"Pantry_Items",price:8.99,size:"16 oz bag",is10PercentOff:!1,popularity:552},{_id:"640c2dd963a319ea671e35e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632},{_id:"640c2dd963a31a671e385e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632},{_id:"640c2963a319ea671e385",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632},{_id:"640c2dd963a319ea675e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632}];function h(){localStorage.setItem("BASKET",JSON.stringify(f))}h();const a=document.querySelector(".scrol-list"),l="BASKET",d=document.querySelector(".quantity-in-cart"),u=document.querySelector(".quantity-in-cart-header"),S=document.querySelector(".cart-sum-span");let n=JSON.parse(localStorage.getItem(`${l}`));function p(o){const s=`$${n.reduce((e,c)=>e+c.price,0).toFixed(2)}`;S.textContent=s.toString();const t=o.map(e=>`<li class="scroll-item">
              <button class="scroll-top-button" type="button" aria-label="1" id="${e._id}">
                <svg class="scroll-top-icon" width="18" height="18">
                  <use href="./images/icons.svg#icon-close"></use>
                </svg>
              </button>
              <div class="image-container">
                <img class="scroll-image" src="${e.img}" alt="${e.name}" width="64" height="64" />
              </div>
              <div class="text-container">
                <h3 class="scroll-item-name">${e.name}</h3>
                <div class="item-charact">
                  <p class="scroll-item-category">
                    Category:<span class="span-scroll-category">${e.category}</span>
                  </p>
                  <p class="scroll-item-size">
                    Size:<span class="span-scroll-size">${e.size}</span>
                  </p>
                </div>
                <p class="scroll-item-price">$${e.price}</p>
              </div>
            </li>`).join("");a.innerHTML=t,d.textContent=o.length,u.textContent=o.length}p(JSON.parse(localStorage.getItem(`${l}`)));const m=document.querySelector(".empty-yellow-cart"),g=document.querySelector(".scrollbar-container"),y=document.querySelector(".order-container"),C=document.querySelector(".cart-button");C.addEventListener("click",b);function b(o){localStorage.clear(),a.innerHTML="",m.style.display="block",g.style.display="none",y.style.display="none",d.textContent=0,u.textContent=0}a.addEventListener("click",O);function O(o){if(!o.target.classList.contains("scroll-top-button"))return;const r=o.target.id,i=n.findIndex(s=>s._id===r);i!==-1&&(n.splice(i,1),console.log(n),p(n),localStorage.setItem(`${l}`,JSON.stringify(n))),n.length||(m.style.display="block",g.style.display="none",y.style.display="none")}
//# sourceMappingURL=andrii-026c1ce8.js.map
