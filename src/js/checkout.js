import axios from 'axios';

const nameBAScet = 'BASKET';

// get items
function getCartItems() {
  return JSON.parse(localStorage.getItem(`${nameBAScet}`)) || [];
}

// async function handleCheckout() {
//   try {
//     const userEmailElement = document.querySelector('#user-email');

//     // check if Element isnuye
//     if (!userEmailElement || !userEmailElement.value) {
//       alert('Write your Email.');
//       return;
//     }

//     const userEmail = userEmailElement.value;
//     const cartItems = getCartItems();

//     if (!cartItems || cartItems.length === 0) {
//       alert('Your cart is empty. Add some items before checking out.');
//       return;
//     }

//     const orderData = {
//       email: userEmail,
//       products: cartItems.map(item => ({
//         productId: item._id,
//         amount: item.quantity,
//       })),
//     };

//     // send to the server
//     const response = await axios.post('https://food-boutique.b.goit.study/api/orders', orderData);

//     alert('Order created successfully!');
//     // clear
//     localStorage.removeItem(`${nameBAScet}`);

//     updateCartUI();
//   } catch (error) {
//     console.error('Error creating order:', error);

//     alert(error.response.data.message || 'Error creating order. Please try again.');
//   }
// }
// async function handleCheckout() {
//   try {
//     const userEmailElement = document.querySelector('#user-email');

//     // check if Element isnuye
//     if (!userEmailElement || !userEmailElement.value) {
//       alert('Write your Email.');
//       return;
//     }

//     const userEmail = userEmailElement.value;
//     const cartItems = getCartItems();

//     if (!cartItems || cartItems.length === 0) {
//       alert('Your cart is empty. Add some items before checking out.');
//       return;
//     }

//     const orderData = {
//   email: userEmail,
//   products: cartItems.map(item => ({
//     productId: item._id,
//     amount: item.amount, // add amount to the product object
//   })),
// };

//     // send to the server
//     const response = await axios.post('https://food-boutique.b.goit.study/api/orders', orderData);

//     // show modal window if order created successfully
//     if (response.status === 200) {
//       alert('Order created successfully!');
//       // clear
//       localStorage.removeItem(`${nameBAScet}`);
//       updateCartUI();

//       // show modal window
//       const modal = document.querySelector('.backdrop');
//       modal.style.display = 'block';
//     }
//   } catch (error) {
//     console.error('Error creating order:', error);

//     alert(error.response.data.message || 'Error creating order. Please try again.');
//   }
// }
async function handleCheckout() {
  try {
    const userEmailElement = document.querySelector('#user-email');

    // check if Element isnuye
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
        amount: item.quantity,
      })),
    };

    // send to the server
    const response = await axios.post('https://food-boutique.b.goit.study/api/orders', orderData);

    alert('Order created successfully!');
    // clear
    localStorage.removeItem(`${nameBAScet}`);

    updateCartUI();
  } catch (error) {
    console.error('Error creating order:', error);

    alert(error.response.data.message || 'Error creating order. Please try again.');
  }
}

document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);

function updateCartUI() {
  // your code for updating the cart UI
}