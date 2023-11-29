import{i}from"./assets/alex-dc29802b.js";import{a as S}from"./assets/vendor-2bc536cc.js";const c=document.querySelector(".scrol-list"),l="BASKET",u=document.querySelector(".empty-yellow-cart"),d=document.querySelector(".scrollbar-container"),m=document.querySelector(".order-container"),p=document.querySelector(".quantity-in-cart"),g=document.querySelector(".quantity-in-cart-header"),$=document.querySelector(".cart-sum-span");let n=JSON.parse(localStorage.getItem(`${l}`));console.log(n);function y(){const s=n.reduce((t,o)=>t+o.price*o.amount,0).toFixed(2);$.textContent=`$${s}`}function b(e){if(!e||e.length===0){u.style.display="block",d.style.display="none",m.style.display="none";return}y();const s=e.map(t=>`<li class="scroll-item" id="${t._id}">
              <button class="scroll-top-button" type="button" aria-label="1" id="${t._id}">
                <svg class="scroll-top-icon" width="18" height="18">
                  <use href="${i}#icon-close"></use>
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
                
                <div class="price-amount">
                    <p class="scroll-item-price" id="${t._id}price">$${t.price}</p>
                    <div class="amount-item">
                      <button type="button" class="button-item-plus" id="${t._id}">
                        <svg class="plus-icon">
                          <use href="${i}#icon-plus"></use>
                        </svg>
                      </button>
                      <span class="amount-number" id="${t._id}amount">${t.amount}</span>
                      <button type="button" class="button-item-minus" id="${t._id}">
                        <svg class="minus-icon">
                          <use href="${i}#icon-minus"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
              </div>
            </li>`).join("");c.innerHTML=s,p.textContent=e.length,g.textContent=e.length}b(n);const h=document.querySelector(".cart-button");h.addEventListener("click",v);function v(e){u.style.display="block",d.style.display="none",m.style.display="none",p.textContent=0,g.textContent=0,localStorage.removeItem("BASKET"),c.innerHTML=""}c.addEventListener("click",C);function C(e){if(!e.target.classList.contains("scroll-top-button"))return;const s=e.target.id,t=n.findIndex(o=>o._id===s);t!==-1&&(n.splice(t,1),console.log(n),b(n),localStorage.setItem(`${l}`,JSON.stringify(n))),n.length||(p.textContent=n.length,g.textContent=n.length,u.style.display="block",d.style.display="none",m.style.display="none")}document.querySelector(".amount-number");c.addEventListener("click",I);function I(e){if(!e.target.classList.contains("button-item-plus"))return;const s=e.target.id,t=n.findIndex(r=>r._id===s);let o=Number(n[t].amount);function a(){o++,n[t].amount=o,y()}a(),localStorage.setItem(`${l}`,JSON.stringify(n)),document.getElementById(`${s}amount`).textContent=o}c.addEventListener("click",x);function x(e){const s=e.target.id,t=n.findIndex(r=>r._id===s);let o=Number(n[t].amount);if(!e.target.classList.contains("button-item-minus")||o===1)return;function a(){o--,n[t].amount=o,y()}a(),localStorage.setItem(`${l}`,JSON.stringify(n)),document.getElementById(`${s}amount`).textContent=o}const f="BASKET";function E(){return JSON.parse(localStorage.getItem(`${f}`))||[]}async function k(){try{const e=document.querySelector("#user-email");if(!e||!e.value){alert("Write your Email.");return}const s=e.value,t=E();if(!t||t.length===0){alert("Your cart is empty. Add some items before checking out.");return}const o={email:s,products:t.map(r=>({productId:r._id,amount:r.amount}))},a=await S.post("https://food-boutique.b.goit.study/api/orders",o);alert("Order created successfully!"),localStorage.removeItem(`${f}`)}catch(e){console.error("Error creating order:",e),alert(e.response.data.message||"Error creating order. Please try again.")}}document.getElementById("checkoutBtn").addEventListener("click",k);
//# sourceMappingURL=commonHelpers.js.map
