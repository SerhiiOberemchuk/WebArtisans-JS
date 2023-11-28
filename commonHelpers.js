import"./assets/styles-2cafa3f0.js";const g="/WebArtisans-JS/assets/icons-69d7e34a.svg",c=document.querySelector(".scrol-list"),p="BASKET",s=document.querySelector(".empty-yellow-cart"),r=document.querySelector(".scrollbar-container"),a=document.querySelector(".order-container"),i=document.querySelector(".quantity-in-cart"),d=document.querySelector(".quantity-in-cart-header"),S=document.querySelector(".cart-sum-span");let t=JSON.parse(localStorage.getItem(`${p}`));console.log(t);function y(e){if(!e||e.length===0){s.style.display="block",r.style.display="none",a.style.display="none";return}const o=t.reduce((n,m)=>n+m.price,0).toFixed(2);S.textContent=`$${o}`;const l=e.map(n=>`<li class="scroll-item">
              <button class="scroll-top-button" type="button" aria-label="1" id="${n._id}">
                <svg class="scroll-top-icon" width="18" height="18">
                  <use href="${g}#icon-close"></use>
                </svg>
              </button>
              <div class="image-container">
                <img class="scroll-image" src="${n.img}" alt="${n.name}" width="64" height="64" />
              </div>
              <div class="text-container">
                <h3 class="scroll-item-name">${n.name}</h3>
                <div class="item-charact">
                  <p class="scroll-item-category">
                    Category:<span class="span-scroll-category">${n.category}</span>
                  </p>
                  <p class="scroll-item-size">
                    Size:<span class="span-scroll-size">${n.size}</span>
                  </p>
                </div>
                <p class="scroll-item-price">$${n.price}</p>
              </div>
            </li>`).join("");c.innerHTML=l,i.textContent=e.length,d.textContent=e.length}y(t);const h=document.querySelector(".cart-button");h.addEventListener("click",C);function C(e){s.style.display="block",r.style.display="none",a.style.display="none",i.textContent=0,d.textContent=0,localStorage.removeItem("BASKET"),c.innerHTML=""}c.addEventListener("click",b);function b(e){if(!e.target.classList.contains("scroll-top-button"))return;const u=e.target.id,o=t.findIndex(l=>l._id===u);o!==-1&&(t.splice(o,1),console.log(t),y(t),localStorage.setItem(`${p}`,JSON.stringify(t))),t.length||(i.textContent=t.length,d.textContent=t.length,s.style.display="block",r.style.display="none",a.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
