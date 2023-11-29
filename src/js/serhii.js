import {
  getBasicProducts,
  getAxiosOptions,
  setAxiosOptions,
  storageKeys,
  refs,
} from './oleksii.js';

refs.pagesBtnLeft.addEventListener('click', onClickLeft);
refs.pagesBtnRight.addEventListener('click', onClickRight);
refs.pagesList.addEventListener('click', onClickNumber);

function onClickLeft() {
  if (refs.loaderSymbol.style.display === 'none') {
    refs.basicList.innerHTML = '';
    refs.loaderSymbol.style.display = 'absolute';
  }
  const modifOptions = getAxiosOptions();
  if (modifOptions.page === 1) return;
  modifOptions.page--;
  console.log(modifOptions.page);
  setAxiosOptions(modifOptions);
  getBasicProducts();
}

function onClickRight() {
  refs.basicList.innerHTML = '';
  refs.loaderSymbol.style.display = 'absolute';
  const modifOptions = getAxiosOptions();
  console.dir(modifOptions);
  if (modifOptions.page >= localStorage.getItem(storageKeys.totalPages)) return;
  modifOptions.page++;
  console.dir(modifOptions);
  setAxiosOptions(modifOptions);
  getBasicProducts();
}

function onClickNumber(e) {
  const number = +e.target.textContent;
  if (Number.isNaN(number)) return;
  if (refs.loaderSymbol.style.display === 'none') {
    refs.basicList.innerHTML = '';
    refs.loaderSymbol.style.display = 'absolute';
  }
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
    refs.pagesList.innerHTML = markup;
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
      refs.pagesList.innerHTML = markup;
    } else if (currentPage > 2) {
      const numToDel = totalPages - 2;
      pagesNumbersArray.splice(1, numToDel, '...', currentPage, '...');
      const markup = pagesNumbersArray
        .map(item => {
          if (!+item) return `<li class="pages-item" disabled>${item}</li>`;
          return `<li class="pages-item is-hover">${item}</li>`;
        })
        .join('');
      refs.pagesList.innerHTML = markup;
    }
  }

  if (currentPage !== 1 && refs.pagesBtnLeft.hasAttribute('disabled')) {
    refs.pagesBtnLeft.disabled = false;
    refs.pagesBtnLeft.classList.add('is-hover');
  }
  if (
    currentPage !== totalPages &&
    refs.pagesBtnRight.hasAttribute('disabled')
  ) {
    refs.pagesBtnRight.disabled = false;
    refs.pagesBtnRight.classList.add('is-hover');
  }
  if (currentPage === 1 && !refs.pagesBtnLeft.hasAttribute('disabled')) {
    refs.pagesBtnLeft.disabled = true;
    refs.pagesBtnLeft.classList.remove('is-hover');
  }
  if (
    currentPage === totalPages &&
    !refs.pagesBtnRight.hasAttribute('disabled')
  ) {
    refs.pagesBtnRight.disabled = true;
    refs.pagesBtnRight.classList.remove('is-hover');
  }

  for (let i = 0; i < refs.pagesList.children.length; i++) {
    if (refs.pagesList.children[i].textContent == currentPage) {
      refs.pagesList.children[i].classList.add('current-pages-item');
    } else {
      refs.pagesList.children[i].classList.remove('current-pages-item');
    }
  }
}

export { renderNumberSlider };
