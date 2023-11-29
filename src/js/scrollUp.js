document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Показати або приховати кнопку при прокрутці
  window.addEventListener('scroll', function () {
    if (
      document.body.scrollTop > window.innerHeight / 2 ||
      document.documentElement.scrollTop > window.innerHeight / 2
    ) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Прокрутка сторінки до верху при кліку на кнопку
  scrollToTopBtn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
