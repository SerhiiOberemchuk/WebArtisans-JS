import axios from 'axios';

const modal = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.modal_window');
const productList = document.querySelector('.basic-list');
const popularList = document.querySelector('.popular-list');
const discountList = document.querySelector('.discount-list');

async function responseById(id) {
  try {
    const response = await axios.get(
      `https://food-boutique.b.goit.study/api/products/${id}`
    );

    // Записати дані в локальне сховище
    // localStorage.setItem(
    //   'productsById',
    //   JSON.stringify(response.data.results)
    // );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

productList.addEventListener('click', handleItemClick);
popularList.addEventListener('click', handleItemClick);
discountList.addEventListener('click', handleItemClick);

async function handleItemClick(event) {
  const clickedProduct =
    event.target.closest('.basic-item') ||
    event.target.closest('.popular-item') ||
    event.target.closest('.discount-item');
  if (!clickedProduct) return;

  const productId = clickedProduct.id;
  try {
    const selectedProduct = await responseById(productId);
    // console.log(selectedProduct);

    if (selectedProduct) {
      renderModalData(selectedProduct);

      modal.style.display = 'block';
      modal.addEventListener('click', closeOnOutsideClick);
      document.addEventListener('keydown', closeOnEsc);

      const closeModalButton = document.querySelector('.close_button');
      closeModalButton.addEventListener('click', closeModal);
    }
  } catch (error) {
    console.log(error);
  }
}
function renderModalData(product) {
  const markup = `<button class="close_button" type="button" aria-label="Close">
      <svg class="close-btn-icon" width="24" height="24">
        <use href="./images/icons.svg#icon-close"></use>
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
    <p class="item_price">$${product.price}</p>
    <button class="added_button" type="submit" aria-label="Item added to cart">
      Added to
      <svg width="18" height="18" class="icon-cart">
        <use href="./images/icons.svg#icon-basket"></use>
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
        <use href="./images/icons.svg#icon-basket"></use>
      </svg>
    </button>`;
  modalWindow.innerHTML = markup;
}

function closeOnOutsideClick(event) {
  if (event.target === modal) {
    closeModal();
  }
}
function closeOnEsc(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  modal.style.display = 'none';
  modal.removeEventListener('click', closeOnOutsideClick);
  document.removeEventListener('keydown', closeOnEsc);
}

productList.addEventListener('click', handleButtonClick);

async function handleButtonClick(event) {
  const clickedProduct =
    event.target.closest('.basic-item') ||
    event.target.closest('.popular-item') ||
    event.target.closest('.discount-item');
  if (!clickedProduct) return;

  const productId = clickedProduct.id;
  console.log(productId);
  const addButton = clickedProduct.querySelector('.basic-btn');
  addButton.addEventListener('click', function () {
    addToCart(productId);
  });
  console.log(addButton);
}

function addToCart(product) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  cartItems.push(product);

  let localCart = localStorage.setItem('cart', JSON.stringify(cartItems));
  console.log(localCart);
  console.log('product added to cart', product);
}
