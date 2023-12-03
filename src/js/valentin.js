// import imgUrl from '../images/icons.svg';
// import axios from 'axios';
// import Notiflix from 'notiflix';

// const modal = document.querySelector('.backdrop');
// const modalWindow = document.querySelector('.modal_window');
// const productList = document.querySelector('.basic-list');
// const popularList = document.querySelector('.popular-list');
// const discountList = document.querySelector('.discount-list');
// const cartCountItem = document.querySelector('.quantity-in-cart-header');

// async function responseById(id) {
//   try {
//     const response = await axios.get(
//       `https://food-boutique.b.goit.study/api/products/${id}`
//     );

//     // Записати дані в локальне сховище
//     // localStorage.setItem(
//     //   'productsById',
//     //   JSON.stringify(response.data.results)
//     // );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// productList.addEventListener('click', handleItemClick);
// popularList.addEventListener('click', handleItemClick);
// discountList.addEventListener('click', handleItemClick);
// productList.addEventListener('click', onclickAddOne);
// popularList.addEventListener('click', onclickAddOne);
// discountList.addEventListener('click', onclickAddOne);

// document.addEventListener('DOMContentLoaded', () => {
//   const cartItems = JSON.parse(localStorage.getItem('BASKET')) || [];
//   updateCartCount(cartItems.length);
// });

// async function onclickAddOne(event) {
//   if (!event.target.closest('.basic-btn, .popular-item-btn')) {
//     return;
//   }
//   const clickedProduct =
//     event.target.closest('.basic-item') ||
//     event.target.closest('.popular-item') ||
//     event.target.closest('.discount-item');
//   if (!clickedProduct) return;
//   const productId = clickedProduct.id;
//   // console.log(productId);

//   try {
//     const product = await getProductById(productId);
//     product.amount = 1;

//     if (product) {
//       const cartItems = JSON.parse(localStorage.getItem('BASKET')) || [];

//       const isProductInCart = cartItems.some(item => item._id === product._id);

//       if (!isProductInCart) {
//         cartItems.push(product);

//         localStorage.setItem('BASKET', JSON.stringify(cartItems));
//         updateCartCount(cartItems.length);

//         const addButton = clickedProduct.querySelector(
//           '.basic-btn, .popular-item-btn'
//         );
//         const mainAddButton = clickedProduct.querySelector(
//           '.basic-btn-icon, .popular-item-btn-icon'
//         );
//         mainAddButton.innerHTML = `<use href="${imgUrl}#icon-check"></use>`;

//         addButton.disabled = true;
//         addButton.removeEventListener('click', onclickAddOne);
//       } else {
//         // console.log('Product is already in the basket');
//       }
//     } else {
//       // console.error('Unable to find product with ID', productId);
//     }
//   } catch (error) {
//     // console.error('Error fetching product by ID', error);
//   }
// }

// async function getProductById(productId) {
//   try {
//     const productData = await responseById(productId);

//     if (productData) {
//       const product = {
//         _id: productData._id,
//         name: productData.name,
//         category: productData.category,
//         size: productData.size,
//         img: productData.img,
//         price: productData.price,
//         is10PercentOff: productData.is10PercentOff,
//       };

//       return product;
//     } else {
//       // console.error('Unable to find product with ID', productId);
//       return null;
//     }
//   } catch (error) {
//     // console.error('Error fetching product by ID', error);
//     throw error;
//   }
// }

// async function handleItemClick(event) {
//   const clickedProduct =
//     event.target.closest('.basic-item') ||
//     event.target.closest('.popular-item') ||
//     event.target.closest('.discount-item');
//   if (!clickedProduct) return;

//   const isButtonClicked = event.target.closest('button');
//   if (!isButtonClicked) {
//     const productId = clickedProduct.id;
//     try {
//       const selectedProduct = await responseById(productId);
//       // console.log(selectedProduct);

//       if (selectedProduct) {
//         renderModalData(selectedProduct);

//         modal.style.display = 'block';
//         modal.addEventListener('click', closeOnOutsideClick);
//         document.addEventListener('keydown', closeOnEsc);
//         const addedButton = document.querySelector('.added_button');
//         const modalAddButton = document.querySelector('.add_button');

//         if (selectedProduct) {
//           const cartItems = JSON.parse(localStorage.getItem('BASKET')) || [];

//           const isProductInCart = cartItems.some(
//             item => item._id === selectedProduct._id
//           );
//           if (!isProductInCart) {
//             modalAddButton.style.display = 'block';
//             addedButton.style.display = 'none';
//           } else {
//             modalAddButton.style.display = 'none';
//             addedButton.style.display = 'block';
//           }
//         }

//         modalAddButton.addEventListener('click', () =>
//           addToBasket(selectedProduct)
//         );
//       }

//       async function addToBasket(product) {
//         try {
//           const modalProduct = await getProductById(productId);

//           if (modalProduct) {
//             const cartItems = JSON.parse(localStorage.getItem('BASKET')) || [];

//             const isProductInCart = cartItems.some(
//               item => item._id === modalProduct._id
//             );

//             if (!isProductInCart) {
//               product.amount = 1;
//               cartItems.push(product);

//               localStorage.setItem('BASKET', JSON.stringify(cartItems));
//               // console.log('product added to basket', product);
//               // console.log(cartItems);
//               const addedButton = document.querySelector('.added_button');
//               const addButton = document.querySelector('.add_button');
//               const mainAddButton = clickedProduct.querySelector(
//                 '.basic-btn-icon, .popular-item-btn-icon'
//               );
//               if (addButton) {
//                 addButton.style.display = 'none';
//                 addedButton.style.display = 'block';
//                 // `<svg width="18" height="18" class="basic-btn-icon">
//                 //                   <use href="${imgUrl}#icon-check"></use>
//                 //                 </svg>`;
//                 mainAddButton.innerHTML = `<use href="${imgUrl}#icon-check"></use>`;
//               }

//               updateCartCount(cartItems.length);
//             } else {
//               // console.log('Product is already in the basket');
//             }
//           } else {
//             // console.error('Unable to find product with ID', productId);
//           }
//         } catch (error) {
//           // console.error('Error fetching product by ID', error);
//         }
//       }

//       const closeModalButton = document.querySelector('.close_button');
//       closeModalButton.addEventListener('click', closeModal);
//     } catch (error) {
//       // console.log(error);
//     }
//   }
// }

// function updateCartCount(count) {
//   cartCountItem.textContent = count;
// }

// function renderModalData(product) {
//   const markup = `<button class="close_button" type="button" aria-label="Close">
//       <svg class="close-btn-icon" width="24" height="24">
//         <use href="${imgUrl}#icon-close"></use>
//       </svg>
//     </button>
//     <div class="item_image">
//     <img src="${product.img}" alt="${product.name}" /></div>
//     <div class="item_description">
//       <h2 class="item_name">${product.name}</h2>
//       <ul class="product_params">
//         <li class="item_params">
//           <p>Category: <span class="params_type">${product.category}</span></p>
//         </li>
//         <li class="item_params">
//           <p>Size:  <span class="params_type">${product.size}</span></p>
//         </li>
//         <li class="item_params">
//           <p>Popularity:  <span class="params_type">${product.popularity}</span></p>
//         </li>
//       </ul>
//       <p class="description">${product.desc}</p>
//     </div>
//     <p class="item_price">$${product.price}</p>
//     <button class="added_button" type="submit" aria-label="Item added to cart">
//       Added to
//       <svg width="18" height="18" class="icon-cart">
//         <use href="${imgUrl}#icon-basket"></use>
//       </svg>
//     </button>
//     <button
//       class="add_button"
//       type="submit"
//       id="${product._id}"
//       aria-label="Add item to cart"
//     >
//       Add to
//       <svg width="18" height="18" class="icon-cart">
//         <use href="${imgUrl}#icon-basket"></use>
//       </svg>
//     </button>`;
//   modalWindow.innerHTML = markup;
// }

// function closeOnOutsideClick(event) {
//   if (event.target === modal) {
//     closeModal();
//   }
// }
// function closeOnEsc(event) {
//   if (event.key === 'Escape') {
//     closeModal();
//   }
// }

// function closeModal() {
//   modal.style.display = 'none';
//   modal.removeEventListener('click', closeOnOutsideClick);
//   document.removeEventListener('keydown', closeOnEsc);
// }
