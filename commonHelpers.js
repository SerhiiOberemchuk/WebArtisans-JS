import"./assets/styles-2cafa3f0.js";import{a as S}from"./assets/vendor-a61d8330.js";const h="/WebArtisans-JS/assets/icons-69d7e34a.svg",l=document.querySelector(".scrol-list"),p="BASKET",a=document.querySelector(".empty-yellow-cart"),i=document.querySelector(".scrollbar-container"),u=document.querySelector(".order-container"),d=document.querySelector(".quantity-in-cart"),m=document.querySelector(".quantity-in-cart-header"),f=document.querySelector(".cart-sum-span");let e=JSON.parse(localStorage.getItem(`${p}`));console.log(e);function y(t){if(!t||t.length===0){a.style.display="block",i.style.display="none",u.style.display="none";return}const n=e.reduce((o,s)=>o+s.price,0).toFixed(2);f.textContent=`$${n}`;const r=t.map(o=>`<li class="scroll-item">
              <button class="scroll-top-button" type="button" aria-label="1" id="${o._id}">
                <svg class="scroll-top-icon" width="18" height="18">
                  <use href="${h}#icon-close"></use>
                </svg>
              </button>
              <div class="image-container">
                <img class="scroll-image" src="${o.img}" alt="${o.name}" width="64" height="64" />
              </div>
              <div class="text-container">
                <h3 class="scroll-item-name">${o.name}</h3>
                <div class="item-charact">
                  <p class="scroll-item-category">
                    Category:<span class="span-scroll-category">${o.category}</span>
                  </p>
                  <p class="scroll-item-size">
                    Size:<span class="span-scroll-size">${o.size}</span>
                  </p>
                </div>
                <p class="scroll-item-price">$${o.price}</p>
              </div>
            </li>`).join("");l.innerHTML=r,d.textContent=t.length,m.textContent=t.length}y(e);const C=document.querySelector(".cart-button");C.addEventListener("click",b);function b(t){a.style.display="block",i.style.display="none",u.style.display="none",d.textContent=0,m.textContent=0,localStorage.removeItem("BASKET"),l.innerHTML=""}l.addEventListener("click",v);function v(t){if(!t.target.classList.contains("scroll-top-button"))return;const c=t.target.id,n=e.findIndex(r=>r._id===c);n!==-1&&(e.splice(n,1),console.log(e),y(e),localStorage.setItem(`${p}`,JSON.stringify(e))),e.length||(d.textContent=e.length,m.textContent=e.length,a.style.display="block",i.style.display="none",u.style.display="none")}const g="BASKET";function $(){return JSON.parse(localStorage.getItem(`${g}`))||[]}async function q(){try{const t=document.querySelector("#user-email");if(!t||!t.value){alert("Write your Email.");return}const c=t.value,n=$();if(!n||n.length===0){alert("Your cart is empty. Add some items before checking out.");return}const r={email:c,products:n.map(s=>({productId:s._id,amount:s.quantity}))},o=await S.post("https://food-boutique.b.goit.study/api/orders",r);alert("Order created successfully!"),localStorage.removeItem(`${g}`)}catch(t){console.error("Error creating order:",t),alert(t.response.data.message||"Error creating order. Please try again.")}}document.getElementById("checkoutBtn").addEventListener("click",q);
//# sourceMappingURL=commonHelpers.js.map
