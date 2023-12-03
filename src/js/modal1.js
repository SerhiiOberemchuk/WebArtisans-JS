import imgUrl from '../images/icons.svg';
import axios from 'axios';

const modal = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.modal_window');
const productContainer = document.querySelector('.js-product-container');

productContainer.addEventListener('click', openModalWindow);

async function openModalWindow(event) {
  const targetListItem = event.target.closest(
    '.basic-item, .popular-item, .discount-item'
  );
  const targetButton = event.target.closest('.basic-btn, .popular-item-btn');

  if (!(targetListItem && !targetButton)) {
    return;
  }
  const productId = targetListItem.id;
  const productModal = await getProductInfo(productId);

  renderModalData(productModal);
  modal.style.display = 'block';

  modal.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModal);

  const btnAddProductToBasket = document.querySelector('.add_button');
  btnAddProductToBasket.addEventListener('click', () => {
    addProdToBasket(productModal);
  });
}
async function getProductInfo(id) {
  try {
    const response = await axios.get(
      `https://food-boutique.b.goit.study/api/products/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
function closeModal(event) {
  if (
    !event.target.closest('.modal_window') ||
    event.target.closest('.close_button')
  ) {
    modal.style.display = 'none';
    document.removeEventListener('keydown', closeModal);
  } else if (event.key === 'Escape') {
    modal.style.display = 'none';
    document.removeEventListener('keydown', closeModal);
  }
}
function renderModalData(product) {
  const amount = product.amount || 0;
  const markup = `<button class="close_button" type="button" aria-label="Close">
      <svg class="close-btn-icon" width="24" height="24">
        <use href="${imgUrl}#icon-close"></use>
      </svg>
    </button>
    <div class="item_image">
    <img src="${product.img}" alt="${product.name}" /></div>
    <div class="item_description">
      <h2 class="item_name">${product.name}</h2>
      <ul class="product_params">
        <li class="item_params">
          <p>Category: <span class="params_type">${product.category}</span></p>
        </li>
        <li class="item_params">
          <p>Size:  <span class="params_type">${product.size}</span></p>
        </li>
        <li class="item_params">
          <p>Popularity:  <span class="params_type">${product.popularity}</span></p>
        </li>
      </ul>
      <p class="description">${product.desc}</p>
    </div>
    
                    <div class="price-amount-modal">
                    <p class="item-price-modal" id="${product._id}price">$${product.price}</p>
                    <div class="amount-item-modal">
                      <button type="button" class="button-item-minus" id="${product._id}">
                        <svg class="minus-icon">
                          <use href="${imgUrl}#icon-minus"></use>
                        </svg>
                      </button>
                      <span class="amount-number" id="${product._id}amount">${amount}</span>
                      <button type="button" class="button-item-plus" id="${product._id}">
                        <svg class="plus-icon">
                          <use href="${imgUrl}#icon-plus"></use>
                        </svg>
                      </button>
                    </div>
                 </div>
    <button class="added_button" type="submit" aria-label="Item added to cart">
      Added to
      <svg width="18" height="18" class="icon-cart">
        <use href="${imgUrl}#icon-basket"></use>
      </svg>
    </button>
    <button
      class="add_button"
      type="submit"
      id="${product._id}"
      aria-label="Add item to cart"
    >
      Add to
      <svg width="18" height="18" class="icon-cart">
        <use href="${imgUrl}#icon-basket"></use>
      </svg>
    </button>`;
  modalWindow.innerHTML = markup;
}
function addProdToBasket(object) {
  const oldBasket = JSON.parse(localStorage.getItem('BASKET')) || [];
  if (!oldBasket) {
    object.amount = 1;
    localStorage.setItem('BASKET', JSON.stringify([object]));
    addCheckedIcon(object._id);
    return;
  }
  const hasObjInBasket = oldBasket.some(item => item._id === object._id);
  if (!hasObjInBasket) {
    object.amount = 1;
    oldBasket.push(object);
    localStorage.setItem('BASKET', JSON.stringify(oldBasket));
    addCheckedIcon(object._id);
  }
  // addCheckedIcon(object._id);
}
function addCheckedIcon(idButton) {
  if (productContainer) {
    const buttons = productContainer.querySelectorAll(
      '.basic-btn, .popular-item-btn'
    );
    buttons.forEach(button => {
      if (button.id === idButton) {
        // console.log(button);
        button.querySelector(
          'svg'
        ).innerHTML = `<use href="${imgUrl}#icon-check"></use>`;
      }
    });
  } else {
    console.error('Product container not found.');
  }
}
productContainer.addEventListener('click', clickIconBasket);
function clickIconBasket(event) {
  if (
    !(
      event.target.classList.contains('basic-btn') ||
      event.target.classList.contains('popular-item-btn')
    )
  ) {
    return;
  }
  const id = event.target.id;
  const classParent = event.target.parentElement.classList.value;

  addProdToBasket(getInfoFromLocalstorage(classParent, id));
  addCheckedIcon(id);
}
function getInfoFromLocalstorage(nameParent, idButton) {
  let arrProducts;
  switch (nameParent) {
    case 'basic-last-info':
      arrProducts = JSON.parse(localStorage.getItem('basic-wrapper'));
      console.log(arrProducts);
      break;
    case 'popular-name-wrapper':
      arrProducts = JSON.parse(localStorage.getItem('popular-wrapper'));
      console.log(arrProducts);
      break;
    case 'discount-info-wrapper':
      arrProducts = JSON.parse(localStorage.getItem('discount-wrapper'));
      console.log(arrProducts);
      break;
    default:
      console.log('Invalid local type');
  }
  const objProduct = arrProducts.find(obj => obj._id === idButton);
  return objProduct;
}
