import axios from 'axios';

const footerSubscriptionForm = document.querySelector('.footer-email-form');
footerSubscriptionForm.addEventListener('submit', onFooterFormSubmit);

function onFooterFormSubmit(event) {
  event.preventDefault();
  console.log(footerSubscriptionForm.elements[0].value);
  axios.post('https://food-boutique.b.goit.study/api/subscription', {
    email: footerSubscriptionForm.elements[0].value,
  });
}
