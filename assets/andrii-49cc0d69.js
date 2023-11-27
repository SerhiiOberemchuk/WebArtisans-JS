(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f=[{_id:"640c2dd963a319ea671e3814",name:"Almonds",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png",category:"Pantry_Items",price:8.99,size:"16 oz bag",is10PercentOff:!1,popularity:552},{_id:"640c2dd963a319ea671e35e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632},{_id:"640c2dd963a31a671e385e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632},{_id:"640c2963a319ea671e385",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632},{_id:"640c2dd963a319ea675e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632}];function h(){localStorage.setItem("BASKET",JSON.stringify(f))}h();const l=document.querySelector(".scrol-list"),a="BASKET",d=document.querySelector(".quantity-in-cart"),u=document.querySelector(".quantity-in-cart-header"),S=document.querySelector(".cart-sum-span");let n=JSON.parse(localStorage.getItem(`${a}`));console.log(n);function p(o){const s=n.reduce((e,t)=>e+t.price,0).toFixed(2);S.textContent=`$${s}`;const i=o.map(e=>`<li class="scroll-item">
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
            </li>`).join("");l.innerHTML=i,d.textContent=o.length,u.textContent=o.length}p(JSON.parse(localStorage.getItem(`${a}`)));const g=document.querySelector(".empty-yellow-cart"),m=document.querySelector(".scrollbar-container"),y=document.querySelector(".order-container"),C=document.querySelector(".cart-button");C.addEventListener("click",b);function b(o){localStorage.clear(),l.innerHTML="",g.style.display="block",m.style.display="none",y.style.display="none",d.textContent=0,u.textContent=0}l.addEventListener("click",O);function O(o){if(!o.target.classList.contains("scroll-top-button"))return;const r=o.target.id,s=n.findIndex(i=>i._id===r);s!==-1&&(n.splice(s,1),console.log(n),p(n),localStorage.setItem(`${a}`,JSON.stringify(n))),n.length||(g.style.display="block",m.style.display="none",y.style.display="none")}
//# sourceMappingURL=andrii-49cc0d69.js.map
