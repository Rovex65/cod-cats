export function initBurgerMenu() {
  const burgerToggle = document.getElementById('burgerToggle');
  const burgerMenu = document.getElementById('burgerMenu');
  const header = document.querySelector('header');

  burgerToggle.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger-menu-show');

    if (burgerMenu.classList.contains('burger-menu-show')) {
      burgerToggle.innerHTML = `
        <svg width="18" height="18" stroke="#000">
          <use href="../img/icons.svg#icon-close"></use>
        </svg>`;
      header.classList.add('overflow-hidden');
      document.body.classList.add('burger-menu-show'); 
    } else {
      burgerToggle.innerHTML = `
        <svg width="28" height="28">
          <use href="../img/icons.svg#icon-menu"></use>
        </svg>`;
      header.classList.remove('overflow-hidden');
      document.body.classList.remove('burger-menu-show'); 
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initBurgerMenu();
});

const home = document.getElementById('home');
const shoppingList = document.getElementById('shopping-list');

home.classList.add('active');

const handleClick = event => {
  if (event.target === home) {
    home.classList.add('active');
    shoppingList.classList.remove('active');
  } else if (event.target === shoppingList) {
    home.classList.remove('active');
    shoppingList.classList.add('active');
  }
};