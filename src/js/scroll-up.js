const scrollUpBtn = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollUpBtn.style.display = 'block';
  } else {
    scrollUpBtn.style.display = 'none';
  }
});

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
