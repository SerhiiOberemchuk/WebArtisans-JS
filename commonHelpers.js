import{i}from"./assets/scrollUp-540ecb3e.js";import{S as u,a as $}from"./assets/vendor-2bc536cc.js";const l=document.querySelector(".scrol-list"),a="BASKET",d=document.querySelector(".empty-yellow-cart"),m=document.querySelector(".scrollbar-container"),p=document.querySelector(".order-container"),y=document.querySelector(".quantity-in-cart"),g=document.querySelector(".quantity-in-cart-header"),v=document.querySelector(".cart-sum-span");let n=JSON.parse(localStorage.getItem(`${a}`));function f(){const r=n.reduce((e,o)=>e+o.price*o.amount,0).toFixed(2);v.textContent=`$${r}`}function S(t){if(!t||t.length===0){d.style.display="block",m.style.display="none",p.style.display="none";return}f();const r=t.map(e=>`<li class="scroll-item" id="${e._id}">
              <button class="scroll-top-button" type="button" aria-label="1" id="${e._id}">
                <svg class="scroll-top-icon" width="18" height="18">
                  <use href="${i}#icon-close"></use>
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
                
                <div class="price-amount">
                    <p class="scroll-item-price" id="${e._id}price">$${e.price}</p>
                    <div class="amount-item">
                      <button type="button" class="button-item-minus" id="${e._id}">
                        <svg class="minus-icon">
                          <use href="${i}#icon-minus"></use>
                        </svg>
                      </button>
                      <span class="amount-number" id="${e._id}amount">${e.amount}</span>
                      <button type="button" class="button-item-plus" id="${e._id}">
                        <svg class="plus-icon">
                          <use href="${i}#icon-plus"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
              </div>
            </li>`).join("");l.innerHTML=r,y.textContent=t.length,g.textContent=t.length}S(n);const E=document.querySelector(".cart-button");E.addEventListener("click",C);function C(t){d.style.display="block",m.style.display="none",p.style.display="none",y.textContent=0,g.textContent=0,localStorage.removeItem("BASKET"),l.innerHTML=""}l.addEventListener("click",k);function k(t){if(!t.target.classList.contains("scroll-top-button"))return;const r=t.target.id,e=n.findIndex(o=>o._id===r);e!==-1&&(n.splice(e,1),S(n),localStorage.setItem(`${a}`,JSON.stringify(n))),n.length||(y.textContent=n.length,g.textContent=n.length,d.style.display="block",m.style.display="none",p.style.display="none")}l.addEventListener("click",x);function x(t){if(!t.target.classList.contains("button-item-plus"))return;const r=t.target.id,e=n.findIndex(s=>s._id===r);let o=Number(n[e].amount);function c(){o++,n[e].amount=o,f()}c(),localStorage.setItem(`${a}`,JSON.stringify(n)),document.getElementById(`${r}amount`).textContent=o}l.addEventListener("click",I);function I(t){const r=t.target.id,e=n.findIndex(s=>s._id===r);if(!t.target.classList.contains("button-item-minus"))return;let o=Number(n[e].amount);if(o===1)return;function c(){o--,n[e].amount=o,f()}c(),localStorage.setItem(`${a}`,JSON.stringify(n)),document.getElementById(`${r}amount`).textContent=o}const h="BASKET";function q(){return JSON.parse(localStorage.getItem(`${h}`))||[]}async function L(){try{const t=document.querySelector("#user-email");if(!t||!t.value){u.fire({title:"Write your Email!",icon:"warning",iconColor:"#6D8434",showConfirmButton:!1,timer:2e3});return}const r=t.value,e=q(),o={email:r,products:e.map(s=>({productId:s._id,amount:s.amount}))},c=await $.post("https://food-boutique.b.goit.study/api/orders",o);if(c.status===201){localStorage.removeItem(`${h}`);const s=document.querySelector(".backdrop");s.style.display="block";const b=document.querySelector(".close_button");b&&b.addEventListener("click",w)}else console.error("Unsuccessful order creation. Response:",c),u.fire({title:"Error creating order. Please try again.",icon:"warning",iconColor:"#6D8434",showConfirmButton:!1,timer:2e3})}catch(t){console.error("Error creating order:",t),alert(t.response.data.message||u.fire({title:"Error creating order. Please try again.",icon:"warning",iconColor:"#6D8434",showConfirmButton:!1,timer:2e3}))}}function w(){const t=document.querySelector(".backdrop");t.style.display="none",C(),B(),T()}function B(){const t=document.querySelector(".scrollbar");t.innerHTML=""}function T(){const t=document.querySelector(".empty-yellow-cart");t&&(t.style.display="block")}document.getElementById("checkoutBtn").addEventListener("click",L);
//# sourceMappingURL=commonHelpers.js.map
