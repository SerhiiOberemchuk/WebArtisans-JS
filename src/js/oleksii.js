import { renderNumberSlider } from './serhii.js';
import axios from 'axios';

let totalPages = null;
let currentPageNumber = 1;
axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

const endPoints = {
  basic: '/products',
  popular: '/products/popular',
  discount: '/products/discount',
  categories: '/products/categories',
};
const storageKeys = {
  totalPages: 'totalPages',
  basic: 'basic-wrapper',
  popular: 'popular-wrapper',
  discount: 'discount-wrapper',
  categories: 'categories',
  axiosOptions: 'axiosOptions',
};
const refs = {
  basicList: document.querySelector('.basic-list'),
  popularList: document.querySelector('.popular-list'),
  discountList: document.querySelector('.discount-list'),
  categoriesSelector: document.querySelector('#categories'),
};

// ===============================================================================================================

//     ЧЕРЕЗ ЦЕЙ КУСОК КОДУ НИЖЧЕ - СПРАЦЬОВУЄ ДВІЧІ       \\\\\\\\\\\\\\\\\\
const form = document.querySelector('.filter_form');

// form.addEventListener('input', throttle(inputHandler, 500));
form.addEventListener('input', inputHandler);
form.addEventListener('submit', submitHandler);
form.addEventListener('change', selectHandler);

function inputHandler(e) {
  // e.preventDefault();
  if (e.target.name === 'text') {
    const modifOptions = JSON.parse(
      localStorage.getItem(storageKeys.axiosOptions)
    );
    modifOptions.keyword = e.target.value;
    localStorage.setItem(
      storageKeys.axiosOptions,
      JSON.stringify(modifOptions)
    );
    // console.log('input without fetch');
  }
}

function submitHandler(e) {
  // e.preventDefault();
  // getBasicProducts();
  // console.log('submit');
}

function selectHandler(e) {
  e.preventDefault();
  if (e.target.name === 'categories') {
    const modifOptions = JSON.parse(
      localStorage.getItem(storageKeys.axiosOptions)
    );
    modifOptions.category = e.target.value;
    localStorage.setItem(
      storageKeys.axiosOptions,
      JSON.stringify(modifOptions)
    );
    // console.log('change');
    // getBasicProducts();
  }
}

// ===============================================================================================================

setDefaultAxiosOptions();
getCategories();
getBasicProducts();
getPopularProducts();
getDiscountProducts();

// ===============================================================================================================

function setDefaultAxiosOptions() {
  localStorage.setItem(
    'axiosOptions',
    JSON.stringify({
      keyword: null,
      category: null,
      byABC: null,
      byPrice: null,
      byPopularity: null,
      page: 1,
      limit: getLimit(),
    })
  );
}

function getLimit() {
  const wIw = window.innerWidth;
  if (wIw < 768) return 6;
  if (wIw >= 768 && wIw < 1440) return 8;
  return 9;
}

//---------------------------------------------------------------------------------------------------------------------

async function getCategories() {
  try {
    const response = await axios.get(endPoints.categories);
    setCategories(response.data);
    renderCategories();
  } catch (error) {
    console.log(error);
  }
}

function setCategories(data) {
  localStorage.setItem(storageKeys.categories, JSON.stringify(data));
}

function renderCategories() {
  const stringsArray = JSON.parse(localStorage.getItem(storageKeys.categories));
  refs.categoriesSelector.innerHTML =
    `<option disabled selected hidden>Categories</option>` +
    stringsArray
      .map(str => `<option value="${str}">${str.replaceAll('_', ' ')}</option>`)
      .join('') +
    `<option value="null">Show all</option>`;
}

//---------------------------------------------------------------------------------------------------------------------

async function getBasicProducts() {
  try {
    const resp = await axios.get(endPoints.basic, {
      params: getAxiosOptions(),
    });
    currentPageNumber = resp.data.page;
    totalPages = resp.data.totalPages;
    localStorage.setItem(storageKeys.basic, JSON.stringify(resp.data.results));
    localStorage.setItem(storageKeys.totalPages, JSON.stringify(totalPages));
    renderBasicProducts();
    renderNumberSlider(totalPages);
  } catch (error) {
    console.log(error);
  }
}

function renderBasicProducts() {
  const objsArray = JSON.parse(localStorage.getItem(storageKeys.basic));
  refs.basicList.innerHTML = objsArray
    .map(
      obj => `<li class="basic-item" id="${obj._id}">
            <div class="basic-image-wrapper">
              <img
                src="${obj.img}"
                alt="${obj.name}"
              />
            </div>
            <h3 class="basic-name">${obj.name}</h3>
            <div class="basic-info-wrapper">
              <p class="basic-info">
                Category:<span class="category">${obj.category}</span>Size:<span
                  class="size"
                  >${obj.size}</span
                >
              </p>
              <p class="basic-info">
                Popularity:<span class="popularity">${obj.popularity}</span>
              </p>
            </div>
            <div class="basic-last-info">
              <span class="basic-price">$${obj.price}</span>
              <button class="basic-btn" type="button" id="${obj._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="./images/icons.svg#icon-basket"></use>
                </svg>
              </button>
            </div>
          </li>`
    )
    .join('');
}

//---------------------------------------------------------------------------------------------------------------------

async function getPopularProducts() {
  try {
    const response = await axios.get(endPoints.popular);
    localStorage.setItem(storageKeys.popular, JSON.stringify(response.data));
    renderPopularProducts();
  } catch (error) {
    console.log(error);
  }
}

function renderPopularProducts() {
  const objsArray = JSON.parse(localStorage.getItem(storageKeys.popular));
  refs.popularList.innerHTML = objsArray
    .map(
      obj => ` <li class="popular-item" id="${obj._id}">
            <div class="popular-image-wrapper">
              <img src="${obj.img}" alt="${obj.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${obj.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket" id="${obj._id}">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="./images/icons.svg#icon-basket"></use>
                  </svg>
                </button>
              </div>
              <p class="popular-info">
                Category:<span class="category">${obj.category}</span>
              </p>
              <p class="popular-info">
                Size:<span class="size">${obj.size}</span>Popularity:<span class="popularity">${obj.popularity}</span>
              </p>
            </div>
          </li>`
    )
    .join('');
}

//---------------------------------------------------------------------------------------------------------------------

async function getDiscountProducts() {
  try {
    const response = await axios.get(endPoints.discount);
    localStorage.setItem(storageKeys.discount, JSON.stringify(response.data));
    renderDiscountProducts();
  } catch (error) {
    console.log(error);
  }
}

function renderDiscountProducts() {
  const objsArray = JSON.parse(localStorage.getItem(storageKeys.discount));
  let arrTwo = objsArray.slice(0, 2);
  refs.discountList.innerHTML = arrTwo
    .map(
      obj => `<li class="discount-item" id="${obj._id}">
            <div class="discount-label"> 
            <img src="./images/discount.jpg" alt="discount label" class="discount-img">             
            </div>
            <div class="discount-image-wrapper">
              <img src="${obj.img}" alt="${obj.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${obj.name}</h3>
              <span class="discount-item-price">$${obj.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket" id="${obj._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="./images/icons.svg#icon-basket"></use>
                </svg>
              </button>
            </div>
          </li>`
    )
    .join('');
}

//---------------------------------------------------------------------------------------------------------------------

function getAxiosOptions() {
  return JSON.parse(localStorage.getItem(storageKeys.axiosOptions));
}

//---------------------------------------------------------------------------------------------------------------------

export { getBasicProducts, getLimit };
