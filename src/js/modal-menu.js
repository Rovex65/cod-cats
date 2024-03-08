import iconClose from '../img/icons.svg#icon-close';
import iconMenu from '../img/icons.svg#icon-menu';

const burgerToggle = document.getElementById('burgerToggle');
const burgerMenu = document.getElementById('burgerMenu');
const header = document.querySelector('header');
const body = document.querySelector('body');

burgerToggle.addEventListener('click', function () {
  burgerMenu.classList.toggle('burger-menu-show');

  if (burgerMenu.classList.contains('burger-menu-show')) {
    burgerToggle.innerHTML = `
        <svg width="18" height="18" stroke="#000">
          <use href="${iconClose}"></use>
        </svg>`;
    body.classList.add('modal-is-open');
    window.addEventListener('resize', checkNoScrollBody);
  } else {
    burgerToggle.innerHTML = `
        <svg width="28" height="28">
          <use href="${iconMenu}"></use>
        </svg>`;
    body.classList.remove('modal-is-open');
    window.removeEventListener('resize', checkNoScrollBody);
  }
});

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.burger-menu-nav-link');

let foundActiveLink = false;

navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (activePage.endsWith(href.slice(2))) {
    link.classList.add('burger-menu-nav-link-active');
    foundActiveLink = true;
  }
});

if (!foundActiveLink) {
  navLinks[0].classList.add('burger-menu-nav-link-active');
}

function checkNoScrollBody(e) {
  if (window.innerWidth >= 768) {
    body.classList.remove('modal-is-open');
    burgerMenu.classList.toggle('burger-menu-show');
    burgerToggle.innerHTML = `
        <svg width="28" height="28">
          <use href="${iconMenu}"></use>
        </svg>`;
    window.removeEventListener('resize', checkNoScrollBody);
  } else {
    body.classList.add('modal-is-open');
  }
}
