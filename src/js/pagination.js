import { templateShopListBooks } from './template-functions';
import image from '../img/bcg-img-shop-list.png';
import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';

const listElem = document.querySelector(".shopping-list");
const paginationContainer = document.querySelector(".pagination-container");
const itemsPerPage = 3; 
let currentPage = 1;

document.addEventListener("DOMContentLoaded", function () {
  initShoppingList();
  initPagination();
  updateShoppingList(currentPage);
});

listElem.addEventListener('click', handleDeleteButtonClick);

function handleDeleteButtonClick(event) {
  if (event.target.classList.contains('delete-icon') || event.target.classList.contains('svg-icon')) {
    const card = event.target.closest('.shop-list-book-card');
    if (card) {
      const cart = JSON.parse(localStorage.getItem("shoppingList")) || [];
      const index = cart.findIndex(item => item.title === card.querySelector('.shop-list-book-title').textContent);

      if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem("shoppingList", JSON.stringify(cart));
        
        updatePagination();

        const startIdx = (currentPage - 1) * itemsPerPage;
        const endIdx = startIdx + itemsPerPage;

        if (index >= startIdx && index < endIdx) {
          updateShoppingList(currentPage);
        } else {
          updateShoppingList(currentPage);
        }
      }
    }
  }
}



function updateMargin() {
  const items = listElem.querySelectorAll(".shop-list-book-card");
  const titleElem = document.querySelector(".title-shopping"); 

  if (items.length !== 0) {
    titleElem.classList.add('not-empty-cart');
  }
}

function renderCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("shoppingList")) || [];
  const renderedHTML = templateShopListBooks(cartItems);
  listElem.innerHTML = renderedHTML;
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
  listElem.innerHTML = emptyMarkup;
}

function initShoppingList() {
  const storedValue = localStorage.getItem("shoppingList");
  if (storedValue === null || storedValue === undefined) {
    renderEmptyPage();
  } else {
    renderCartItems();
  }
}

function initPagination() {
  const cartItems = JSON.parse(localStorage.getItem("shoppingList")) || [];
  const totalItems = cartItems.length;

  const paginationOptions = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: 3,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
    template: {
     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
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
          '</a>'
    }
  };

  const pagination = new Pagination(paginationContainer, paginationOptions);

  pagination.on('afterMove', function (event) {
    currentPage = event.page;
    updateShoppingList(currentPage);
  });
}

function updateShoppingList(page) {
  const cartItems = JSON.parse(localStorage.getItem("shoppingList")) || [];
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



function updatePagination() {
  const cartItems = JSON.parse(localStorage.getItem("shoppingList")) || [];
  const totalItems = cartItems.length;

  const paginationOptions = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: 3,
    centerAlign: true,
    page: currentPage,
  };

  if (cartItems.length === 0) {
    paginationContainer.innerHTML = '';
  } else {
    const pagination = new Pagination(paginationContainer, paginationOptions);

    pagination.on('afterMove', function (event) {
      currentPage = event.page;
      updateShoppingList(currentPage);
    });
  }
}


