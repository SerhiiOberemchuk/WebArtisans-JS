import axios from 'axios';
import { onclickClearOll } from './andrii.js';
const nameBasket = 'BASKET';

// get element
function getCartItems() {
  return JSON.parse(localStorage.getItem(`${nameBasket}`)) || [];
}
// make order
async function handleCheckout() {
  try {
    const userEmailElement = document.querySelector('#user-email');

    if (!userEmailElement || !userEmailElement.value) {
      alert('Write your Email.');
      return;
    }

    const userEmail = userEmailElement.value;
    const cartItems = getCartItems();

    if (!cartItems || cartItems.length === 0) {
      alert('Your cart is empty. Add some items before checking out.');
      return;
    }

    const orderData = {
      email: userEmail,
      products: cartItems.map(item => ({
        productId: item._id,
        amount: item.amount,
      })),
    };

    const response = await axios.post('https://food-boutique.b.goit.study/api/orders', orderData);

    if (response.status === 201) {
      localStorage.removeItem(`${nameBasket}`);

      const modal = document.querySelector('.backdrop');
      modal.style.display = 'block';

      const closeModalBtn = document.querySelector('.close_button');
      if (closeModalBtn) {
        closeModalBtn.addEventListener('click', handleCloseModal);
      }
    } else {
      console.error('Unsuccessful order creation. Response:', response);
      alert('Error creating order. Please try again.');
    }
  } catch (error) {
    console.error('Error creating order:', error);
    alert(error.response.data.message || 'Error creating order. Please try again.');
  }
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

document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);
