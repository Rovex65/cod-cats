import { templateShopListBooks } from './template-functions';
import image from '../img/bcg-img-shop-list.png'

const listElem = document.querySelector(".shopping-list");

const storedValue = localStorage.getItem("saved-books");
    if (storedValue === null || storedValue === undefined) {
        renderEmptyPage();
    } else {
        renderCartItems();
    }

listElem.addEventListener('click', handleDeleteButtonClick);

function handleDeleteButtonClick(event) {
  if (event.target.classList.contains('delete-icon') || event.target.classList.contains('svg-icon')) {
    const card = event.target.closest('.shop-list-book-card');
    if (card) {
      card.remove();
      
      const cart = JSON.parse(localStorage.getItem("saved-books")) || [];
      
      const index = cart.findIndex(item => item.title === card.querySelector('.shop-list-book-title').textContent);
      
      if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem("saved-books", JSON.stringify(cart));
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
  const cartItems = JSON.parse(localStorage.getItem("saved-books")) || [];
  const renderedHTML = templateShopListBooks(cartItems);
  listElem.insertAdjacentHTML("beforeend", renderedHTML);
  updateMargin()
}

function renderEmptyPage() {
  const emptyMarkup = `
    <p class="text-shopping">
    This page is empty, add some books and proceed to order.
    </p>
    <img src=${image} alt="" class="img-shopping" />
  `
  listElem.insertAdjacentHTML("beforeend", emptyMarkup);
}