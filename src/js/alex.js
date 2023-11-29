import axios from 'axios';
import Swal from 'sweetalert2';
const footerSubscriptionForm = document.querySelector('.footer-email-form');
footerSubscriptionForm.addEventListener('submit', onFooterFormSubmit);

function onFooterFormSubmit(event) {
  event.preventDefault();
  const clientEmail = footerSubscriptionForm.elements[0].value;

  axios
    .post('https://food-boutique.b.goit.study/api/subscription', {
      email: clientEmail,
    })
    .then(response => {
      const message = response.data.message;
      Swal.fire({
        color: '#586f1f',
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 2000,
      });
    })
    .catch(error => {
      if (error.request.status === 400) {
        Swal.fire({
          color: '#586f1f',
          position: 'top-end',
          icon: 'error',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        return;
      } else if (error.request.status === 409) {
        Swal.fire({
          color: '#586f1f',
          position: 'top-end',
          icon: 'info',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    })
    .finally(event => (footerSubscriptionForm.elements[0].value = ''));
}
