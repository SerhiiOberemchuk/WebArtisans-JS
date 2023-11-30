import {
  getBasicProducts,
  getAxiosOptions,
  setAxiosOptions,
  storageKeys,
} from './oleksii.js';

const pagesList = document.querySelector('.pages-list');
const pagesBtnLeft = document.querySelector('.pages-btn-left');
const pagesBtnRight = document.querySelector('.pages-btn-right');

pagesList.addEventListener('click', onClickNumber);
pagesBtnLeft.addEventListener('click', onClickLeft);
pagesBtnRight.addEventListener('click', onClickRight);

function onClickLeft() {
  // if (refs.loaderSymbol.style.display === 'none') {
  //   refs.basicList.innerHTML = '';
  //   refs.loaderSymbol.style.display = 'block';
  //   refs.divForLoader.style.display = 'block';
  // }
  const modifOptions = getAxiosOptions();
  if (modifOptions.page === 1) return;
  modifOptions.page--;
  setAxiosOptions(modifOptions);
  getBasicProducts();
}

function onClickRight() {
  // refs.basicList.innerHTML = '';
  // refs.loaderSymbol.style.display = 'block';
  // refs.divForLoader.style.display = 'block';
  const modifOptions = getAxiosOptions();
  if (modifOptions.page >= localStorage.getItem(storageKeys.totalPages)) return;
  modifOptions.page++;
  setAxiosOptions(modifOptions);
  getBasicProducts();
}

function onClickNumber(e) {
  const number = +e.target.textContent;
  if (Number.isNaN(number)) return;
  // if (refs.loaderSymbol.style.display === 'none') {
  //   refs.basicList.innerHTML = '';
  //   refs.loaderSymbol.style.display = 'block';
  //   refs.divForLoader.style.display = 'block';
  // }
  const modifOptions = getAxiosOptions();
  modifOptions.page = number;
  setAxiosOptions(modifOptions);
  getBasicProducts();
}

// ======================     PAGINATION     =======================================

function renderNumberSlider(totalPages, currentPage) {
  let pagesNumbersArray = [];
  for (let index = 1; index <= totalPages; index++) {
    pagesNumbersArray.push(index);
  }

  if (totalPages <= 5) {
    const markup = pagesNumbersArray
      .map(item => `<li class="pages-item is-hover">${item}</li>`)
      .join('');
    pagesList.innerHTML = markup;
  } else if (totalPages > 5) {
    if (currentPage <= 2 || currentPage > totalPages - 2) {
      const numToDel = totalPages - 4;
      pagesNumbersArray.splice(2, numToDel, '...');
      const markup = pagesNumbersArray
        .map(item => {
          if (!+item) return `<li class="pages-item" disabled>${item}</li>`;
          return `<li class="pages-item is-hover">${item}</li>`;
        })
        .join('');
      pagesList.innerHTML = markup;
    } else if (currentPage > 2) {
      const numToDel = totalPages - 2;
      pagesNumbersArray.splice(1, numToDel, '...', currentPage, '...');
      const markup = pagesNumbersArray
        .map(item => {
          if (!+item) return `<li class="pages-item" disabled>${item}</li>`;
          return `<li class="pages-item is-hover">${item}</li>`;
        })
        .join('');
      pagesList.innerHTML = markup;
    }
  }

  if (currentPage !== 1 && pagesBtnLeft.hasAttribute('disabled')) {
    pagesBtnLeft.disabled = false;
    pagesBtnLeft.classList.add('is-hover');
  }
  if (currentPage !== totalPages && pagesBtnRight.hasAttribute('disabled')) {
    pagesBtnRight.disabled = false;
    pagesBtnRight.classList.add('is-hover');
  }
  if (currentPage === 1 && !pagesBtnLeft.hasAttribute('disabled')) {
    pagesBtnLeft.disabled = true;
    pagesBtnLeft.classList.remove('is-hover');
  }
  if (currentPage === totalPages && !pagesBtnRight.hasAttribute('disabled')) {
    pagesBtnRight.disabled = true;
    pagesBtnRight.classList.remove('is-hover');
  }

  for (let i = 0; i < pagesList.children.length; i++) {
    if (pagesList.children[i].textContent == currentPage) {
      pagesList.children[i].classList.add('current-pages-item');
    } else {
      pagesList.children[i].classList.remove('current-pages-item');
    }
  }
}

export { renderNumberSlider };
