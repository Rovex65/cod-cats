import { templateShopListBooks } from './template-functions';
import image from '../img/bcg-img-shop-list.png';

import './header';
import './switch-theme';

const listElem = document.querySelector('.shopping-list');

const storedValue = localStorage.getItem('saved-books');
if (!storedValue || JSON.parse(storedValue).length === 0) {
  renderEmptyPage();
} else {
  renderCartItems();
}

listElem.addEventListener('click', handleDeleteButtonClick);

function handleDeleteButtonClick(event) {
  if (
    event.target.classList.contains('delete-icon') ||
    event.target.classList.contains('svg-icon') ||
    event.target.closest('.delete-icon') ||
    event.target.closest('.svg-icon')
  ) {
    const card = event.target.closest('.shop-list-book-card');
    if (card) {
      card.remove();

      const cart = JSON.parse(localStorage.getItem('saved-books')) || [];

      const index = cart.findIndex(
        item =>
          item.title === card.querySelector('.shop-list-book-title').textContent
      );

      if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem('saved-books', JSON.stringify(cart));
      }

        const startIdx = (currentPage - 1) * itemsPerPage;
        const endIdx = startIdx + itemsPerPage;

      const listElem = document.querySelector('.shopping-list');
      if (listElem.querySelectorAll('.shop-list-book-card').length === 0) {
        renderEmptyPage();
      }
    }
  }
}



function updateMargin() {
  const items = listElem.querySelectorAll('.shop-list-book-card');
  const titleElem = document.querySelector('.title-shopping');

  if (items.length === 0) {
    titleElem.classList.add('empty-cart');
    titleElem.classList.remove('not-empty-cart');
  } else {
    titleElem.classList.remove('empty-cart');
    titleElem.classList.add('not-empty-cart');
  }
}

function renderCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('saved-books')) || [];
  const renderedHTML = templateShopListBooks(cartItems);
  listElem.insertAdjacentHTML('beforeend', renderedHTML);
  updateMargin();
  initPagination();
  updatePagination();
}

function renderEmptyPage() {
  const emptyMarkup = `
    <p class="text-shopping">
      This page is empty, add some books and proceed to order.
    </p>
    <img src=${image} alt="" class="img-shopping" />
  `;
  listElem.insertAdjacentHTML('beforeend', emptyMarkup);
}
