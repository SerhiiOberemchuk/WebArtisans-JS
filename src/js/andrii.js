const cart = [
  {
    _id: '640c2dd963a319ea671e3814',
    name: 'Almonds',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png',
    category: 'Pantry_Items',
    price: 8.99,
    size: '16 oz bag',
    is10PercentOff: false,
    popularity: 552,
  },
  {
    _id: '640c2dd963a319ea671e35e',
    name: 'Ancho Chillies',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png',
    category: 'Pantry_Items',
    price: 4.99,
    size: '100g',
    is10PercentOff: false,
    popularity: 632,
  },
  {
    _id: '640c2dd963a31a671e385e',
    name: 'Ancho Chillies',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png',
    category: 'Pantry_Items',
    price: 4.99,
    size: '100g',
    is10PercentOff: false,
    popularity: 632,
  },
  {
    _id: '640c2963a319ea671e385',
    name: 'Ancho Chillies',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png',
    category: 'Pantry_Items',
    price: 4.99,
    size: '100g',
    is10PercentOff: false,
    popularity: 632,
  },
  {
    _id: '640c2dd963a319ea675e',
    name: 'Ancho Chillies',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png',
    category: 'Pantry_Items',
    price: 4.99,
    size: '100g',
    is10PercentOff: false,
    popularity: 632,
  },
];
function writeLocalStorage() {
  localStorage.setItem('BASKET', JSON.stringify(cart));
}
writeLocalStorage();

const cartList = document.querySelector('.scrol-list');
const nameBAScet = 'BASKET';
//-------------------------------------------------------RENDER CART LIST------------------------------------------------------
const cartTitleNumber = document.querySelector('.quantity-in-cart');
const cartTitleNumberHead = document.querySelector('.quantity-in-cart-header');
const totalAmount = document.querySelector('.cart-sum-span');

let parsedCart = JSON.parse(localStorage.getItem(`${nameBAScet}`));
console.log(parsedCart);

function renderMainCards(datas) {
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
                  <use href="./images/icons.svg#icon-close"></use>
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

renderMainCards(JSON.parse(localStorage.getItem(`${nameBAScet}`)));

//----------------------------------------------------- FUNCTION CLEAR ALL----------------------------------------------------

const emptYellowCart = document.querySelector('.empty-yellow-cart');
const scrollbarContainer = document.querySelector('.scrollbar-container');
const orderContainer = document.querySelector('.order-container');

const btnClearCartAll = document.querySelector('.cart-button');
btnClearCartAll.addEventListener('click', onclickClearOll);
function onclickClearOll(event) {
  localStorage.clear();
  cartList.innerHTML = '';
  emptYellowCart.style.display = 'block';
  scrollbarContainer.style.display = 'none';
  orderContainer.style.display = 'none';
  cartTitleNumber.textContent = 0;
  cartTitleNumberHead.textContent = 0;
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
    emptYellowCart.style.display = 'block';
    scrollbarContainer.style.display = 'none';
    orderContainer.style.display = 'none';
  }
}
