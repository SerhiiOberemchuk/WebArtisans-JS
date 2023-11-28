import"./assets/styles-5648b4dd.js";const u=[{_id:"640c2dd963a319ea671e3814",name:"Almonds",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png",category:"Pantry_Items",price:8.99,size:"16 oz bag",is10PercentOff:!1,popularity:552},{_id:"640c2dd963a319ea671e35e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632},{_id:"640c2dd963a31a671e385e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632},{_id:"640c2963a319ea671e385",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632},{_id:"640c2dd963a319ea675e",name:"Ancho Chillies",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",category:"Pantry_Items",price:4.99,size:"100g",is10PercentOff:!1,popularity:632}];function f(){localStorage.setItem("BASKET",JSON.stringify(u))}f();const a=document.querySelector(".scrol-list"),c="BASKET",r=document.querySelector(".quantity-in-cart"),l=document.querySelector(".quantity-in-cart-header"),h=document.querySelector(".cart-sum-span");let n=JSON.parse(localStorage.getItem(`${c}`));function d(t){const s=n.reduce((e,y)=>e+y.price,0).toFixed(2);h.textContent=`$${s}`;const o=t.map(e=>`<li class="scroll-item">
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
            </li>`).join("");a.innerHTML=o,r.textContent=t.length,l.textContent=t.length}d(JSON.parse(localStorage.getItem(`${c}`)));const g=document.querySelector(".empty-yellow-cart"),p=document.querySelector(".scrollbar-container"),m=document.querySelector(".order-container"),S=document.querySelector(".cart-button");S.addEventListener("click",C);function C(t){localStorage.clear(),a.innerHTML="",g.style.display="block",p.style.display="none",m.style.display="none",r.textContent=0,l.textContent=0}a.addEventListener("click",b);function b(t){if(!t.target.classList.contains("scroll-top-button"))return;const i=t.target.id,s=n.findIndex(o=>o._id===i);s!==-1&&(n.splice(s,1),console.log(n),d(n),localStorage.setItem(`${c}`,JSON.stringify(n))),n.length||(g.style.display="block",p.style.display="none",m.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
