import { templateShopListBooks } from './template-functions';
import image from '../img/bcg-img-shop-list.png';
import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';
import { getData } from './authorization';
import { removeFromShopList } from './local-storage-books';

const listElem = document.querySelector('.shopping-list');
const paginationContainer = document.querySelector('.pagination-container');
const itemsPerPage = 3;
let currentPage = 1;

async function handleDeleteButtonClick(event) {
  if (event.target.closest('.delete-icon')) {
    const card = event.target.closest('.shop-list-book-card');
    if (card) {
      const cart = await getData();
      const index = cart.findIndex(
        item =>
          item.title === card.querySelector('.shop-list-book-title').textContent
      );

      if (index !== -1) {
        cart.splice(index, 1);
        removeFromShopList(event.target, cart);

        const totalItems = cart.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        if (totalItems > 0 && currentPage > totalPages) {
          currentPage = totalPages;
        }

        // Оновлюємо пагінацію та список
        updateShoppingList(currentPage, cart);
        updatePagination(cart);

        const listElem = document.querySelector('.shopping-list');
        if (listElem.querySelectorAll('.shop-list-book-card').length === 0) {
          renderEmptyPage();
          hidePagination();
        }
      }
    }
  }
}

function renderEmptyPage() {
  const emptyMarkup = `
      <p class="text-shopping">
        This page is empty, add some books and proceed to order.
      </p>
      <img src=${image} alt="" class="img-shopping" />
    `;
  listElem.innerHTML = emptyMarkup;
  hidePagination();
}

function renderCartItems(data) {
  const totalItems = data.length;

  const renderedHTML = templateShopListBooks(data);
  listElem.innerHTML = renderedHTML;
  updateMargin();

  if (totalItems > itemsPerPage) {
    updatePagination(data);
  } else {
    hidePagination();
  }
}

function updateShoppingList(page, cartItems) {
  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const pageItems = cartItems.slice(startIdx, endIdx);

  listElem.innerHTML = '';

  const renderedHTML = templateShopListBooks(pageItems);
  listElem.innerHTML = renderedHTML;

  updateMargin();

  if (cartItems.length === 0) {
    renderEmptyPage();
  }
}

async function paginationAfterMove(event) {
  const cartItems = await getData();
  currentPage = event.page;

  updateShoppingList(currentPage, cartItems);
  updatePagination(cartItems);
}

function initPagination(cartItems) {
  const totalItems = cartItems.length;

  const paginationOptions = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: 3,
    centerAlign: false,
    page: currentPage,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-page-btn-moveButton">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-page-btn-disabledMoveButton tui-is-disabled">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-page-btn-moreButton tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination(paginationContainer, paginationOptions);

  pagination.on('afterMove', function (event) {
    paginationAfterMove(event);
  });
}

function updatePagination(cartItems) {
  const totalItems = cartItems.length;
  const paginationContainer = document.querySelector('.pagination-container');

  if (totalItems > itemsPerPage) {
    const paginationOptions = {
      totalItems: totalItems,
      itemsPerPage: itemsPerPage,
      visiblePages: 3,
      centerAlign: true,
      page: currentPage,
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage:
          '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-page-btn-moveButton">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-page-btn-disabledMoveButton tui-is-disabled">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-page-btn-moreButton tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    };

    const existingPagination =
      paginationContainer.querySelector('.tui-pagination');
    if (existingPagination) {
      existingPagination.remove();
    }

    const pagination = new Pagination(paginationContainer, paginationOptions);

    pagination.on('afterMove', function (event) {
      paginationAfterMove(event);
    });
  } else {
    hidePagination();
  }
}

function hidePagination() {
  const paginationContainer = document.querySelector('.pagination-container');
  if (paginationContainer) {
    paginationContainer.style.display = 'none';
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

export {
  handleDeleteButtonClick,
  renderEmptyPage,
  renderCartItems,
  initPagination,
  updateShoppingList,
};
