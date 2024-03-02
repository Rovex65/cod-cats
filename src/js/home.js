import { templateTopBooks } from './template-functions';
import { templateFullCategory } from './template-functions';
import { templatePopUpBook } from './template-functions';
// import { getShoppingList } from './local-storage';
import { BookApi } from './book-api';

const booksApi = new BookApi();
const booksWrap = document.querySelector('.books-wrapper');
const mainWrap = document.querySelector('.main-page');
const popUp = document.querySelector('.pop-up .modal');

function renderBooks(booksData) {
  const markup = templateTopBooks(booksData);
  booksWrap.insertAdjacentHTML('beforeend', markup);
}

// get top books
async function getTopBooksFromApi() {
  try {
    const data = await booksApi.getTopBooks();
    console.log(data);
    renderBooks(data);
  } catch (err) {
    console.log(err);
  }
}

getTopBooksFromApi();

// get books by category
let categoryTitle;

function renderCategoryBooks(booksData) {
  const markup = templateFullCategory(booksData, categoryTitle);
  booksWrap.innerHTML = markup;
}

async function getCategoryBooks(target) {
  try {
    categoryTitle = target.dataset.category;

    if (categoryTitle === 'all-categories') {
      const data = await booksApi.getTopBooks();
      renderBooks(data);

      return;
    }

    const data = await booksApi.getBooksByCategory(categoryTitle);
    renderCategoryBooks(data);
  } catch (err) {
    console.log(err);
  }
}

// get book by id
function checkBookStatus(currentId) {
  const shoppingList = getShoppingList();

  return shoppingList.find(({ bookId }) => bookId === currentId) || false;
}

function getShoppingBtnData(currentId) {
  const status = checkBookStatus(currentId);

  if (status) {
    return {
      btnText: 'Remove from the shopping list',
      btnClass: 'added',
    };
  }

  return {
    btnText: 'Add to shopping list',
    btnClass: '',
  };
}

function renderPopUp(bookData, currentId) {
  const btnData = getShoppingBtnData(currentId);
  const markup = templatePopUpBook(bookData, btnData);
  popUp.innerHTML = markup;
}

async function getBookById(target) {
  try {
    const bookId = target.closest('.book-item').dataset.bookId;
    const data = await booksApi.getBookById(bookId);

    renderPopUp(data, bookId);
  } catch (err) {
    console.log(err);
  }
}

// add event listener
mainWrap.addEventListener('click', e => {
  const target = e.target;

  if (target.hasAttribute('data-category')) {
    getCategoryBooks(target);
    return;
  }

  if (target.closest('[data-book]')) {
    getBookById(target);
  }
});
