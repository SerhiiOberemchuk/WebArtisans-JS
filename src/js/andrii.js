const cartItems = document.querySelectorAll('.scroll-item');
const deleteAllButton = document.querySelector('.cart-button');
const checkoutForm = document.querySelector('.cart-form');
const emailInput = document.getElementById('user-email');

// Функція для видалення одного продукту з кошика
function removeFromCart(itemId) {
  const itemToRemove = document.querySelector(`[aria-label="${itemId}"]`);

  itemToRemove.remove();

  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  const updatedCart = cartItems.filter(item => item.id !== itemId);

  localStorage.setItem('cartItems', JSON.stringify(updatedCart));
}

// Обробник подій для видалення продукту з кошика при кліку на кнопці
cartItems.forEach(item => {
  const deleteButton = item.querySelector('.scroll-top-button');
  deleteButton.addEventListener('click', function (event) {
    const itemId = event.currentTarget.getAttribute('aria-label');
    removeFromCart(itemId);
  });
});

// Функція для видалення всього кошика
function deleteAllItems() {
  // Виконати логіку очищення кошика у DOM та localStorage
}

// Обробник події для кнопки видалення всього кошика
deleteAllButton.addEventListener('click', function () {
  deleteAllItems();
});

// Обробник події для оформлення замовлення (валідація та відправка форми)
checkoutForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const userEmail = emailInput.value;
  // Виконати логіку валідації email і відправки замовлення
});
