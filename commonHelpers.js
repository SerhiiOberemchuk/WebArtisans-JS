import{i}from"./assets/scrollUp-a269a1bb.js";import{S as C,a as $}from"./assets/vendor-2bc536cc.js";const l=document.querySelector(".scrol-list"),a="BASKET",u=document.querySelector(".empty-yellow-cart"),d=document.querySelector(".scrollbar-container"),m=document.querySelector(".order-container"),p=document.querySelector(".quantity-in-cart"),y=document.querySelector(".quantity-in-cart-header"),v=document.querySelector(".cart-sum-span");let n=JSON.parse(localStorage.getItem(`${a}`));function g(){const s=n.reduce((e,o)=>e+o.price*o.amount,0).toFixed(2);v.textContent=`$${s}`}function f(t){if(!t||t.length===0){u.style.display="block",d.style.display="none",m.style.display="none";return}g();const s=t.map(e=>`<li class="scroll-item" id="${e._id}">
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
            </li>`).join("");l.innerHTML=s,p.textContent=t.length,y.textContent=t.length}f(n);const k=document.querySelector(".cart-button");k.addEventListener("click",S);function S(t){u.style.display="block",d.style.display="none",m.style.display="none",p.textContent=0,y.textContent=0,localStorage.removeItem("BASKET"),l.innerHTML=""}l.addEventListener("click",x);function x(t){if(!t.target.classList.contains("scroll-top-button"))return;const s=t.target.id,e=n.findIndex(o=>o._id===s);e!==-1&&(n.splice(e,1),f(n),localStorage.setItem(`${a}`,JSON.stringify(n))),n.length||(p.textContent=n.length,y.textContent=n.length,u.style.display="block",d.style.display="none",m.style.display="none")}l.addEventListener("click",E);function E(t){if(!t.target.classList.contains("button-item-plus"))return;const s=t.target.id,e=n.findIndex(c=>c._id===s);let o=Number(n[e].amount);function r(){o++,n[e].amount=o,g()}r(),localStorage.setItem(`${a}`,JSON.stringify(n)),document.getElementById(`${s}amount`).textContent=o}l.addEventListener("click",I);function I(t){const s=t.target.id,e=n.findIndex(c=>c._id===s);if(!t.target.classList.contains("button-item-minus"))return;let o=Number(n[e].amount);if(o===1)return;function r(){o--,n[e].amount=o,g()}r(),localStorage.setItem(`${a}`,JSON.stringify(n)),document.getElementById(`${s}amount`).textContent=o}const h="BASKET";function q(){return JSON.parse(localStorage.getItem(`${h}`))||[]}async function L(){try{const t=document.querySelector("#user-email");if(!t||!t.value){C.fire({title:"Write your Email!",icon:"warning",iconColor:"#6D8434",showConfirmButton:!1,timer:2e3});return}const s=t.value,e=q(),o={email:s,products:e.map(c=>({productId:c._id,amount:c.amount}))};if((await $.post("https://food-boutique.b.goit.study/api/orders",o)).status===201){localStorage.removeItem(`${h}`);const c=document.querySelector(".backdrop");c.style.display="block";const b=document.querySelector(".close_button");b&&b.addEventListener("click",B)}}catch{}}function B(){const t=document.querySelector(".backdrop");t.style.display="none",S(),T(),N()}function T(){const t=document.querySelector(".scrollbar");t.innerHTML=""}function N(){const t=document.querySelector(".empty-yellow-cart");t&&(t.style.display="block")}document.getElementById("checkoutBtn").addEventListener("click",L);
//# sourceMappingURL=commonHelpers.js.map
