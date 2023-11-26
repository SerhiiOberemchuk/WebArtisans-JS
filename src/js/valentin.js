const modal = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.modal-window');
const productItems = document.querySelectorAll('.basic-item');
const popularItems = document.querySelectorAll('.popular-item');
const discountItem = document.querySelectorAll('.discount-item');
const closeModalButton = document.querySelector('.close_button');

productItems.forEach(product => {
  product.addEventListener('click', openModal);
});
popularItems.forEach(product => {
  product.addEventListener('click', openModal);
});
discountItem.forEach(product => {
  product.addEventListener('click', openModal);
});

function openModal() {
  //   const productId = event.currentTarget.dataset.productId;
  //   const selectedItem = items.find(item => item.id === parseInt(productId, 10));
  //   renderModal(selectedItem);

  modal.addEventListener('click', closeOnOutsideClick);
  document.addEventListener('keydown', closeOnEsc);
  modal.style.display = 'block';
}

// function renderModal(item) {
//   const itemNameElement = document.querySelector('.item_name');
//   const itemDescriptionElement = document.querySelector('.description');
//   const itemPriceElement = document.querySelector('.item_price');

//   itemNameElement.textContent = item.name;
//   itemDescriptionElement.textContent = item.description;
//   itemPriceElement.textContent = `$${item.price.toFixed(2)}`;
// }

closeModalButton.addEventListener('click', closeModal);

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
