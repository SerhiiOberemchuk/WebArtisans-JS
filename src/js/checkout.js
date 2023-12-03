import axios from 'axios';
import { onclickClearOll } from './andrii.js';
import Swal from 'sweetalert2';
const nameBasket = 'BASKET';

// get element
function getCartItems() {
  return JSON.parse(localStorage.getItem(`${nameBasket}`)) || [];
}
// make order
async function handleCheckout() {
  const userEmailElement = document.querySelector('#user-email');

  if (!userEmailElement || !userEmailElement.value) {
    Swal.fire({
      title: 'Write your Email!',
      icon: 'warning',
      iconColor: `#6D8434`,
      showConfirmButton: false,
      timer: 2000,
    });
    return;
  }

  const userEmail = userEmailElement.value;
  const cartItems = getCartItems();

  const orderData = {
    email: userEmail,
    products: cartItems.map(item => ({
      productId: item._id,
      amount: item.amount,
    })),
  };

  const response = await axios
    .post('https://food-boutique.b.goit.study/api/orders', orderData)
    .then(response => {
      if (response.status === 201) {
        localStorage.removeItem(`${nameBasket}`);

        const modal = document.querySelector('.backdrop');
        modal.style.display = 'block';

        const closeModalBtn = document.querySelector('.close_button');
        if (closeModalBtn) {
          closeModalBtn.addEventListener('click', handleCloseModal);
        }
      }
    })
    .catch(error => {
      Swal.fire({
        color: `#6d8434`,
        // position: 'top-end',
        icon: 'info',
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
    });
}
// update cart

// close modal
function handleCloseModal() {
  const modal = document.querySelector('.backdrop');
  modal.style.display = 'none';
  onclickClearOll();
  clearCartHTML();
  showEmptyCart();
}
// clear cart
function clearCartHTML() {
  const cartList = document.querySelector('.scrollbar');
  cartList.innerHTML = '';
}

function showEmptyCart() {
  const emptyCartElement = document.querySelector('.empty-yellow-cart');
  if (emptyCartElement) {
    emptyCartElement.style.display = 'block';
  }
}

document
  .getElementById('checkoutBtn')
  .addEventListener('click', handleCheckout);
