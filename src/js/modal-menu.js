const burgerMenuButton = document.querySelector('.header-burger-menu');
const modalMenu = document.querySelector('.header-modal-menu');
const burgerIcon = document.querySelector('.header-burger-menu svg');

burgerMenuButton.addEventListener('click', function() {
  modalMenu.classList.toggle('active');

  if (modalMenu.classList.contains('active')) {
    burgerIcon.innerHTML = `
      <use href="../img/icons.svg#icon-close"></use>
    `;
  } else {
    burgerIcon.innerHTML = `
      <use href="../img/icons.svg#icon-menu"></use>
    `;
  }
});

burgerIcon.addEventListener('click', function() {
  modalMenu.classList.remove('hidden');
});