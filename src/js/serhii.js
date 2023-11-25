const ollProducts = [
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
    _id: '640c2dd963a319ea671e385e',
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
  localStorage.setItem('ollProducts', JSON.stringify(ollProducts));
}
writeLocalStorage();

const listOfMainProducts = document.querySelector('.basic-list');

const savedSettings = localStorage.getItem('ollProducts');
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings);

function renderMainCards(datas) {
  const murcap = datas
    .map(
      item =>
        `<li class="basic-item">
            <div class="basic-image-wrapper">
              <img
                src="${item.img}"
                alt="${item.name}"
              />
            </div>
            <h3 class="basic-name">${item.name}</h3>
            <div class="basic-info-wrapper">
              <p class="basic-info">
                Category:<span class="category">${item.category}</span>Size:<span
                  class="size"
                  >${item.size}</span
                >
              </p>
              <p class="basic-info">
                Popularity:<span class="popularity">${item.popularity}</span>
              </p>
            </div>
            <div class="basic-last-info">
              <span class="basic-price">$${item.price}</span>
              <button class="basic-btn" type="button">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="./images/icons.svg#icon-basket"></use>
                </svg>
              </button>
            </div>
          </li>`
    )
    .join('');
  console.log(murcap);

  listOfMainProducts.innerHTML = murcap;
}
// renderMainCards(parsedSettings);

const popularList = document.querySelector('.popular-list');
function renderPopularProducts(datas) {
  const murcap = datas
    .map(
      item => ` <li class="popular-item">
            <div class="popular-image-wrapper">
              <img src="${item.img}" alt="${item.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${item.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="./images/icons.svg#icon-basket"></use>
                  </svg>
                </button>
              </div>
              <p class="popular-info">
                Category:<span class="category">${item.category}</span>
              </p>
              <p class="popular-info">
                Size:<span class="size">${item.size}</span>Popularity:<span class="popularity">${item.popularity}</span>
              </p>
            </div>
          </li>`
    )
    .join('');
  popularList.innerHTML = murcap;
}
renderPopularProducts(parsedSettings);

const discountListProduct = document.querySelector('.discount-list');
function renderDiscountProducts(datas) {
  const murcap = datas
    .map(
      item => `<li class="discount-item">
            <div class="discount-label">
              <svg width="14" height="14">
                <use href="./images/icons.svg#icon-leaf"></use>
              </svg>
            </div>
            <div class="discount-image-wrapper">
              <img src="${item.img}" alt="${item.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${item.name}</h3>
              <span class="discount-item-price">$${item.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="./images/icons.svg#icon-basket"></use>
                </svg>
              </button>
            </div>
          </li>`
    )
    .join('');
  discountListProduct.innerHTML = murcap;
}
renderDiscountProducts(parsedSettings);
