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

// const savedSettings = ;

const cartList = document.querySelector('.scrol-list');

//-------------------------------------------------------RENDER CART LIST------------------------------------------------------
const cartTitleNumber = document.querySelector('.quantity-in-cart');
const cartTitleNumberHead = document.querySelector('.quantity-in-cart-header');
// console.dir(cartTitleNumber.textContent);

function renderMainCards(datas) {
  const murcap = datas
    .map(
      item =>
        `<li class="scroll-item">
              <button class="scroll-top-button" aria-label="1" id="${item._id}">
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

// let parsedCart = ;
// console.log(parsedCart);

renderMainCards(JSON.parse(localStorage.getItem('BASKET')));

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

let parsedCart = JSON.parse(localStorage.getItem('BASKET'));

// let buttonDellOneItem = document.querySelectorAll('.scroll-top-button');

// buttonDellOneItem.forEach(button => {
//   button.addEventListener('click', onclickClearOne);
// });
function initListeners() {
  let buttonDellOneItem = document.querySelectorAll('.scroll-top-button');
  buttonDellOneItem.forEach(button => {
    button.addEventListener('click', onclickClearOne);
  });
}

function onclickClearOne(event) {
  const idButton = event.currentTarget.id;
  console.log(idButton);
  dellItemLocalStorag(idButton);
}

function dellItemLocalStorag(id) {
  const indexToRemove = parsedCart.findIndex(item => item._id === id);

  if (indexToRemove !== -1) {
    parsedCart.splice(indexToRemove, 1);
    console.log(parsedCart);
    renderMainCards(parsedCart);
    localStorage.setItem('BASKET', JSON.stringify(parsedCart));
    initListeners();
  }
  if (!parsedCart.length) {
    emptYellowCart.style.display = 'block';
    scrollbarContainer.style.display = 'none';
    orderContainer.style.display = 'none';
  }
}
initListeners();
