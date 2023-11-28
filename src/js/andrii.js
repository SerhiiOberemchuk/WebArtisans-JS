import imgUrl from '../images/icons.svg';

const cartList = document.querySelector('.scrol-list');
const nameBAScet = 'BASKET';

const emptYellowCart = document.querySelector('.empty-yellow-cart');
const scrollbarContainer = document.querySelector('.scrollbar-container');
const orderContainer = document.querySelector('.order-container');

//-------------------------------------------------------RENDER CART LIST------------------------------------------------------
const cartTitleNumber = document.querySelector('.quantity-in-cart');
const cartTitleNumberHead = document.querySelector('.quantity-in-cart-header');
const totalAmount = document.querySelector('.cart-sum-span');

let parsedCart = JSON.parse(localStorage.getItem(`${nameBAScet}`));
console.log(parsedCart);

function renderMainCards(datas) {
  if (!datas || datas.length === 0) {
    emptYellowCart.style.display = 'block';
    scrollbarContainer.style.display = 'none';
    orderContainer.style.display = 'none';
    return;
  }
  const totalScore = parsedCart.reduce((total, item) => {
    return total + item.price;
  }, 0);
  const formattedTotal = totalScore.toFixed(2);
  totalAmount.textContent = `$${formattedTotal}`;

  const murcap = datas
    .map(
      item =>
        `<li class="scroll-item">
              <button class="scroll-top-button" type="button" aria-label="1" id="${item._id}">
                <svg class="scroll-top-icon" width="18" height="18">
                  <use href="${imgUrl}#icon-close"></use>
                </svg>
              </button>
              <div class="image-container">
                <img class="scroll-image" src="${item.img}" alt="${item.name}" width="64" height="64" />
              </div>
              <div class="text-container">
                <h3 class="scroll-item-name">${item.name}</h3>
                <div class="item-charact">
                  <p class="scroll-item-category">
                    Category:<span class="span-scroll-category">${item.category}</span>
                  </p>
                  <p class="scroll-item-size">
                    Size:<span class="span-scroll-size">${item.size}</span>
                  </p>
                </div>
                <p class="scroll-item-price">$${item.price}</p>
              </div>
            </li>`
    )
    .join('');
  cartList.innerHTML = murcap;
  cartTitleNumber.textContent = datas.length;
  cartTitleNumberHead.textContent = datas.length;
}

renderMainCards(parsedCart);

//----------------------------------------------------- FUNCTION CLEAR ALL----------------------------------------------------

const btnClearCartAll = document.querySelector('.cart-button');
btnClearCartAll.addEventListener('click', onclickClearOll);
function onclickClearOll(event) {
  emptYellowCart.style.display = 'block';
  scrollbarContainer.style.display = 'none';
  orderContainer.style.display = 'none';
  cartTitleNumber.textContent = 0;
  cartTitleNumberHead.textContent = 0;
  localStorage.removeItem('BASKET');
  cartList.innerHTML = '';
}

//---------------------------------------------------FUNCTION CLEAR ONE------------------------------------------------

cartList.addEventListener('click', onclickClearOne);

function onclickClearOne(event) {
  if (!event.target.classList.contains('scroll-top-button')) {
    return;
  }

  const idButton = event.target.id;
  const indexToRemove = parsedCart.findIndex(item => item._id === idButton);
  if (indexToRemove !== -1) {
    parsedCart.splice(indexToRemove, 1);
    console.log(parsedCart);
    renderMainCards(parsedCart);
    localStorage.setItem(`${nameBAScet}`, JSON.stringify(parsedCart));
  }
  if (!parsedCart.length) {
    cartTitleNumber.textContent = parsedCart.length;
    cartTitleNumberHead.textContent = parsedCart.length;
    emptYellowCart.style.display = 'block';
    scrollbarContainer.style.display = 'none';
    orderContainer.style.display = 'none';
  }
}
