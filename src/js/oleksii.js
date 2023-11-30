import { renderNumberSlider } from './serhii.js';
import iconUrl from '../images/icons.svg';
import imgUrl from '../images/discount.jpg';
import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

const defaultsOptions = {
  keyword: null,
  category: null,
  byABC: true,
  byPrice: null,
  byPopularity: null,
  page: 1,
  limit: getLimit(),
};
const endPoints = {
  basic: '/products',
  popular: '/products/popular',
  discount: '/products/discount',
  categories: '/products/categories',
};
const storageKeys = {
  basic: 'basic-wrapper',
  basket: 'BASKET',
  popular: 'popular-wrapper',
  discount: 'discount-wrapper',
  totalPages: 'totalPages',
  categories: 'categories',
  axiosOptions: 'axiosOptions',
};
const refs = {
  form: document.querySelector('.filter_form'),
  products: document.querySelector('.products'),
  notFound: document.querySelector('.not-found-wrapper'),
  basicList: document.querySelector('.basic-list'),
  popularList: document.querySelector('.popular-list'),
  discountList: document.querySelector('.discount-list'),
  pagesWrapper: document.querySelector('.pages-wrapper'),
  categoriesSelector: document.querySelector('#categories'),
  sortSelector: document.querySelector('#sort'),
  pagesList: document.querySelector('.pages-list'),
  pagesBtnLeft: document.querySelector('.pages-btn-left'),
  pagesBtnRight: document.querySelector('.pages-btn-right'),
};

const DISCOUNT_LABEL_MARKUP = `<div class="discount-label"> 
            <img src="${imgUrl}" alt="discount label" class="discount-img">             
            </div> `;
const DISCOUNT_LABEL_MARKUP_FOR_POPULAR = `<div class="discount-label-popular"> 
            <img src="${imgUrl}" alt="discount label" class="discount-img">             
            </div> `;

// ===============================================================================================================

setAxiosOptions(defaultsOptions);
getCategories();
getBasicProducts();
getPopularProducts();
getDiscountProducts();

// form.addEventListener('input', throttle(inputHandler, 500));
refs.form.addEventListener('input', inputHandler);
refs.form.addEventListener('submit', submitHandler);
refs.form.addEventListener('change', selectsHandler);

// ===============================================================================================================

//                  F U N C T I O N S

// ===============================================================================================================

function inputHandler(e) {
  e.preventDefault();
  if (e.target.name !== 'text') return;
  const modifOptions = getAxiosOptions();
  modifOptions.keyword = e.target.value;
  setAxiosOptions(modifOptions);
}

function submitHandler(e) {
  e.preventDefault();
  const modifOptions = getAxiosOptions();
  if (!modifOptions.keyword) {
    setAxiosOptions(defaultsOptions);
    getBasicProducts();
    refs.sortSelector[0].selected = 'true';
    refs.categoriesSelector[0].selected = 'true';
    return;
  }
  modifOptions.page = 1;
  setAxiosOptions(modifOptions);
  getBasicProducts();
}

function selectsHandler(e) {
  e.preventDefault();
  if (e.target.name === 'text') return;
  const modifOptions = getAxiosOptions();
  if (e.target.name === 'categories') {
    modifOptions.category = e.target.value === 'null' ? null : e.target.value;
    modifOptions.page = 1;
  }
  if (e.target.name === 'sort') {
    resetFilter(modifOptions);
    const equalSignPosition = e.target.value.indexOf('=');
    const key = e.target.value.slice(0, equalSignPosition);
    modifOptions[key] = e.target.value.slice(
      equalSignPosition + 1,
      e.target.value.length
    );
  }
  setAxiosOptions(modifOptions);
  getBasicProducts();
}

function resetFilter(obj) {
  obj.byABC = null;
  obj.byPrice = null;
  obj.byPopularity = null;
}

// ===============================================================================================================

function getLimit() {
  const wIw = window.innerWidth;
  if (wIw < 768) return 6;
  if (wIw >= 768 && wIw < 1440) return 8;
  return 9;
}

//---------------------------------------------------------------------------------------------------------------------

async function getCategories() {
  try {
    const resp = await axios.get(endPoints.categories);
    localStorage.setItem(storageKeys.categories, JSON.stringify(resp.data));
    renderCategories();
  } catch (error) {
    console.log(error);
  }
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
    // if (refs.loaderSymbol.style.display === 'none') {
    //   refs.basicList.innerHTML = '';
    //   refs.notFound.style.display = 'none';
    //   refs.loaderSymbol.style.display = 'block';
    //   refs.divForLoader.style.display = 'block';
    // }
    const resp = await axios.get(endPoints.basic, {
      params: getAxiosOptions(),
    });
    localStorage.setItem(storageKeys.basic, JSON.stringify(resp.data.results));
    localStorage.setItem(
      storageKeys.totalPages,
      JSON.stringify(resp.data.totalPages)
    );
    if (resp.data.results.length === 0) {
      refs.notFound.firstElementChild.classList.add('.not-found');
      refs.pagesWrapper.style.display = 'none';
      refs.notFound.style.display = 'block';
      refs.basicList.innerHTML = '';
      // refs.loaderSymbol.style.display = 'none';
      // refs.divForLoader.style.display = 'none';
    } else {
      if (refs.notFound.firstElementChild.classList.contains('.not-found')) {
        refs.notFound.firstElementChild.classList.remove('.not-found');
        refs.notFound.style.display = 'none';
      }
      if (resp.data.totalPage === 1) {
        refs.pagesWrapper.style.display = 'none';
      }
      // refs.loaderSymbol.style.display = 'none';
      // refs.divForLoader.style.display = 'none';
      renderBasicProducts(resp.data.totalPages, resp.data.page);
    }
  } catch (error) {
    console.log(error);
  }
}

function renderBasicProducts(totalPages, page) {
  const objsArray = JSON.parse(localStorage.getItem(storageKeys.basic));
  const basket = JSON.parse(localStorage.getItem(storageKeys.basket));
  refs.basicList.innerHTML = objsArray
    .map(obj => {
      const isLabel = obj.is10PercentOff ? DISCOUNT_LABEL_MARKUP : '';
      const iconName =
        !!basket && basket.some(el => el._id === obj._id) ? 'check' : 'basket';
      return `<li class="basic-item" id="${obj._id}">${isLabel}
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
                  <use href="${iconUrl}#icon-${iconName}"></use>
                </svg>
              </button>
            </div>
          </li>`;
    })
    .join('');
  if (
    !refs.pagesWrapper.style.display ||
    refs.pagesWrapper.style.display === 'none'
  ) {
    refs.pagesWrapper.style.display = 'flex';
  }
  if (totalPages === 1) refs.pagesWrapper.style.display = 'none';
  renderNumberSlider(totalPages, page);
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
  const basket = JSON.parse(localStorage.getItem(storageKeys.basket));
  refs.popularList.innerHTML = objsArray
    .map(obj => {
      const isLabel = obj.is10PercentOff
        ? DISCOUNT_LABEL_MARKUP_FOR_POPULAR
        : '';
      const iconName =
        !!basket && basket.some(el => el._id === obj._id) ? 'check' : 'basket';
      return `<li class="popular-item" id="${obj._id}">${isLabel}
            <div class="popular-image-wrapper">
              <img src="${obj.img}" alt="${obj.name}" />
            </div>
            <div class="popular-info-wrapper">
              <div class="popular-name-wrapper">
                <h3 class="popular-name">${obj.name}</h3>
                <button class="popular-item-btn" type="button" aria-label="add to basket" id="${obj._id}">
                  <svg class="popular-item-btn-icon" width="12" height="12">
                    <use href="${iconUrl}#icon-${iconName}"></use>
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
          </li>`;
    })
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
  const basket = JSON.parse(localStorage.getItem(storageKeys.basket));
  let arrTwo = objsArray.slice(0, 2);
  refs.discountList.innerHTML = arrTwo
    .map(obj => {
      const iconName =
        !!basket && basket.some(el => el._id === obj._id) ? 'check' : 'basket';
      return `<li class="discount-item" id="${obj._id}">
            ${DISCOUNT_LABEL_MARKUP}
            <div class="discount-image-wrapper">
              <img src="${obj.img}" alt="${obj.name}" />
            </div>
            <div class="discount-info-wrapper">
              <h3 class="discount-item-name">${obj.name}</h3>
              <span class="discount-item-price">$${obj.price}</span>
              <button class="basic-btn" type="button" aria-label="icon-basket" id="${obj._id}">
                <svg class="basic-btn-icon" width="18" height="18">
                  <use href="${iconUrl}#icon-${iconName}"></use>
                </svg>
              </button>
            </div>
          </li>`;
    })
    .join('');
}

//---------------------------------------------------------------------------------------------------------------------

function getAxiosOptions() {
  return JSON.parse(localStorage.getItem(storageKeys.axiosOptions));
}
function setAxiosOptions(obj) {
  localStorage.setItem(storageKeys.axiosOptions, JSON.stringify(obj));
}

//---------------------------------------------------------------------------------------------------------------------

export {
  getBasicProducts,
  getLimit,
  getAxiosOptions,
  setAxiosOptions,
  storageKeys,
  refs,
};
