import {
  getBasicProducts,
  getAxiosOptions,
  setAxiosOptions,
  storageKeys,
} from './oleksii.js';
// const ollProducts = [
//   {
//     _id: '640c2dd963a319ea671e3814',
//     name: 'Almonds',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png',
//     category: 'Pantry_Items',
//     price: 8.99,
//     size: '16 oz bag',
//     is10PercentOff: false,
//     popularity: 552,
//   },
//   {
//     _id: '640c2dd963a319ea671e385e',
//     name: 'Ancho Chillies',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png',
//     category: 'Pantry_Items',
//     price: 4.99,
//     size: '100g',
//     is10PercentOff: false,
//     popularity: 632,
//   },
// ];
// function writeLocalStorage() {
//   localStorage.setItem('ollProducts', JSON.stringify(ollProducts));
// }
// writeLocalStorage();

// import axios from 'axios';

let pageOfRender = 1;
// let limitPage = 9;
let totalPages = 60;

const pagesBtnLeft = document.querySelector('.pages-btn-left');
const pagesBtnRight = document.querySelector('.pages-btn-right');
const numberOfPage = document.querySelector('.pages-list');
pagesBtnLeft.addEventListener('click', onClickLeft);
pagesBtnRight.addEventListener('click', onClickRight);
numberOfPage.addEventListener('click', onClickNumber);

function onClickLeft(e) {
  const modifOptions = getAxiosOptions();
  if (modifOptions.page === 1) return;
  modifOptions.page--;
  console.log(modifOptions.page);
  setAxiosOptions(modifOptions);
  getBasicProducts();
}

function onClickRight(e) {
  const modifOptions = getAxiosOptions();
  if (modifOptions.page >= localStorage.getItem(storageKeys.totalPages)) return;
  modifOptions.page++;
  setAxiosOptions(modifOptions);
  getBasicProducts();
}

function onClickNumber(e) {
  const number = Number(e.target.textContent);
  if (!number) return;
  const modifOptions = getAxiosOptions();
  modifOptions.page = number;
  setAxiosOptions(modifOptions);
  getBasicProducts();
}
//----------------------------------------------- MAIN RESPONSE

// async function mainResponse() {
//   try {
//     const response = await axios.get(
//       `https://food-boutique.b.goit.study/api/products?page=${pageOfRender}&limit=${limitPage}`
//     );
//     // console.log(response);
//     // renderMainCards(response.data.results);
//     // totalPages = response.data.totalPages;
//     renderNumberSlider(totalPages);
//   } catch (error) {
//     console.error(error);
//   }
// }
// mainResponse();
// console.log(totalPages);
// --------------------------------------------------DISCOUNT RESPONSE
// async function responseDiscount() {
//   try {
//     const response = await axios.get(
//       'https://food-boutique.b.goit.study/api/products/discount'
//     );
//     // console.log(response);
//     function getRandomNumber() {
//       return Math.floor(Math.random() * 9);
//     }
//     const randomNumber = getRandomNumber();

//     const end = randomNumber + 2;

//     const array = response.data.slice(randomNumber, end);
//     renderDiscountProducts(array);
//   } catch (error) {
//     console.error(error);
//   }
// }
// responseDiscount();
//---------------------------------------------POPULAR PRODUCTS
// async function responsePopular() {
//   try {
//     const response = await axios.get(
//       'https://food-boutique.b.goit.study/api/products/popular?limit=5'
//     );
//     // console.log(response.data[0]._id);
//     // renderPopularProducts(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// responsePopular();

// const listOfMainProducts = document.querySelector('.basic-list');

// const savedSettings = localStorage.getItem('ollProducts');
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings);

//----------------------------------------------RENDER MAIN CARDS-------------------------------------------------//

// function renderMainCards(datas) {
//   const murcap = datas
//     .map(
//       item =>
//         `<li class="basic-item" id="${item._id}">
//             <div class="basic-image-wrapper">
//               <img
//                 src="${item.img}"
//                 alt="${item.name}"
//               />
//             </div>
//             <h3 class="basic-name">${item.name}</h3>
//             <div class="basic-info-wrapper">
//               <p class="basic-info">
//                 Category:<span class="category">${item.category}</span>Size:<span
//                   class="size"
//                   >${item.size}</span
//                 >
//               </p>
//               <p class="basic-info">
//                 Popularity:<span class="popularity">${item.popularity}</span>
//               </p>
//             </div>
//             <div class="basic-last-info">
//               <span class="basic-price">$${item.price}</span>
//               <button class="basic-btn" type="button" id="${item._id}">
//                 <svg class="basic-btn-icon" width="18" height="18">
//                   <use href="./images/icons.svg#icon-basket"></use>
//                 </svg>
//               </button>
//             </div>
//           </li>`
//     )
//     .join('');
// console.log(murcap);

//   listOfMainProducts.innerHTML = murcap;
// }
// renderMainCards(parsedSettings);

//----------------------------------------------RENDER POPULAR LIST-------------------------------------------------//

// const popularList = document.querySelector('.popular-list');
// function renderPopularProducts(datas) {
//   const murcap = datas
//     .map(
//       item => ` <li class="popular-item" id="${item._id}">
//             <div class="popular-image-wrapper">
//               <img src="${item.img}" alt="${item.name}" />
//             </div>
//             <div class="popular-info-wrapper">
//               <div class="popular-name-wrapper">
//                 <h3 class="popular-name">${item.name}</h3>
//                 <button class="popular-item-btn" type="button" aria-label="add to basket" id="${item._id}">
//                   <svg class="popular-item-btn-icon" width="12" height="12">
//                     <use href="./images/icons.svg#icon-basket"></use>
//                   </svg>
//                 </button>
//               </div>
//               <p class="popular-info">
//                 Category:<span class="category">${item.category}</span>
//               </p>
//               <p class="popular-info">
//                 Size:<span class="size">${item.size}</span>Popularity:<span class="popularity">${item.popularity}</span>
//               </p>
//             </div>
//           </li>`
//     )
//     .join('');

//   popularList.innerHTML = murcap;
// }
// renderPopularProducts(parsedSettings);
//----------------------------------------------RENDER DISCOUNT CARDS-------------------------------------------------//

// const discountListProduct = document.querySelector('.discount-list');
// function renderDiscountProducts(datas) {
//   const murcap = datas
//     .map(
//       item => `<li class="discount-item" id="${item._id}">
//             <div class="discount-label">
//             <img src="./images/discount.jpg" alt="discount label" class="discount-img">
//             </div>
//             <div class="discount-image-wrapper">
//               <img src="${item.img}" alt="${item.name}" />
//             </div>
//             <div class="discount-info-wrapper">
//               <h3 class="discount-item-name">${item.name}</h3>
//               <span class="discount-item-price">$${item.price}</span>
//               <button class="basic-btn" type="button" aria-label="icon-basket" id="${item._id}">
//                 <svg class="basic-btn-icon" width="18" height="18">
//                   <use href="./images/icons.svg#icon-basket"></use>
//                 </svg>
//               </button>
//             </div>
//           </li>`
//     )
//     .join('');
//   discountListProduct.innerHTML = murcap;
// }

// renderDiscountProducts(parsedSettings);

//-----------------------------------------------------------PAGINATION----------------------------------------//
// const numberOfPage = document.querySelector('.pages-list');
function renderNumberSlider(totalPages, pageOfRender) {
  console.log(totalPages, pageOfRender);
  let pagesNumbersArray = [];
  for (let index = 1; index <= totalPages; index++) {
    pagesNumbersArray.push(index);
  }

  if (totalPages <= 5) {
    const markup = pagesNumbersArray
      .map(item => `<li class="pages-item">${item}</li>`)
      .join('');
    numberOfPage.innerHTML = markup;
  } else if (totalPages > 5) {
    if (pageOfRender <= 2 || pageOfRender > totalPages - 2) {
      const numToDel = totalPages - 4;
      pagesNumbersArray.splice(
        2,
        numToDel,
        '<li class="pages-item-points">...</li>'
      );
      // console.log('MY LOG: ', pagesNumbersArray);
      const markup = pagesNumbersArray
        .map(item => `<li class="pages-item">${item}</li>`)
        .join('');
      numberOfPage.innerHTML = markup;
    } else if (pageOfRender > 2) {
      const numToDel = totalPages - 2;
      // const murcapIncide = `${pageOfRender - 1},${pageOfRender},${
      //   pageOfRender + 1
      // },`;
      pagesNumbersArray.splice(1, numToDel, '...', pageOfRender, '...');
      const markup = pagesNumbersArray
        .map(item => `<li class="pages-item">${item}</li>`)
        .join('');
      numberOfPage.innerHTML = markup;
    }
  }

  //disabling buttons when on 1st and last page
  if (pageOfRender === 1) {
    pagesBtnLeft.setAttribute('disabled', 'true');
  } else if (pageOfRender === totalPages) {
    pagesBtnRight.setAttribute('disabled', 'true');
  } else {
    pagesBtnLeft.removeAttribute('disabled');
    pagesBtnRight.removeAttribute('disabled');
  }

  // console.log(numberOfPage.children);

  for (let i = 0; i < numberOfPage.children.length; i++) {
    if (numberOfPage.children[i].textContent == pageOfRender) {
      numberOfPage.children[i].classList.add('current-pages-item');
    } else {
      numberOfPage.children[i].classList.remove('current-pages-item');
    }
  }
  // console.log(pagNum);
}
// renderNumberSlider(totalPages);

//----------------------------------------------EXPORT------------------------------------------------------
// export { renderMainCards, renderPopularProducts, renderDiscountProducts };
export { renderNumberSlider };
