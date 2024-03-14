import { templateTopBooks } from './template-functions';
import { templateFullCategory } from './template-functions';
import { updateShoppingList } from './local-storage-books';
import { onModalShow } from './pop-up';
import { BookApi } from './book-api';

import { auth, getData, initListenersForAuth } from './authorization';
initListenersForAuth();

const booksApi = new BookApi();
const booksWrap = document.querySelector('.books-wrapper');

function renderBooks(booksData) {
  const markup = templateTopBooks(booksData);
  booksWrap.insertAdjacentHTML('beforeend', markup);
}

// get top books
async function getTopBooksFromApi() {
  try {
    const data = await booksApi.getTopBooks();
    renderBooks(data);
  } catch (err) {
    console.log(err);
  }
}

getTopBooksFromApi();

// get books by category
let categoryTitle;

function setActiveCategory(categoryTitle) {
  const categoriesList = document.querySelectorAll(
    '.sidebar-categories-name a'
  );
  const category =
    categoryTitle === 'all-categories' ? 'all-categories' : categoryTitle;

  for (let i = 0; i < categoriesList.length; i++) {
    categoriesList[i].classList.remove('active');
  }
  document
    .querySelector(`[data-category="${category}"]`)
    .classList.add('active');
}

function renderCategoryBooks(booksData) {
  const markup = templateFullCategory(booksData, categoryTitle);
  booksWrap.innerHTML = markup;
}

async function getCategoryBooks(target) {
  try {
    categoryTitle = target.dataset.category;
    setActiveCategory(categoryTitle);

    if (categoryTitle === 'all-categories') {
      booksWrap.innerHTML = '';

      const data = await booksApi.getTopBooks();
      renderBooks(data);
    } else {
      const data = await booksApi.getBooksByCategory(categoryTitle);
      renderCategoryBooks(data);
    }
  } catch (err) {
    console.log(err);
  }
}

// get book by id
async function checkBookStatus(currentId) {
  const shoppingList = await getData();

  return shoppingList.find(({ _id }) => _id === currentId) || false;
}

async function getShoppingBtnData(currentId) {
  // const status = await checkBookStatus(currentId);
  const status = !auth.currentUser ? false : await checkBookStatus(currentId);

  if (status) {
    return {
      btnText: 'Remove from the shopping list',
      btnClass: 'modal-add-btn added',
    };
  }

  return {
    btnText: 'Add to shopping list',
    btnClass: 'modal-add-btn',
  };
}

let bookData;
export async function getBookById(target) {
  try {
    const bookId = target.closest('.book-item').dataset.bookId;
    bookData = await booksApi.getBookById(bookId);

    const btnData = await getShoppingBtnData(bookId);
    onModalShow(bookData, bookId, btnData);
  } catch (err) {
    console.log(err);
  }
}

// add event listener
document.addEventListener('click', e => {
  const target = e.target;

  // show books from the selected category
  if (target.hasAttribute('data-category')) {
    e.preventDefault();
    getCategoryBooks(target);
  }

  // show book info in popup
  if (target.closest('.book-item')) {
    getBookById(target);
  }

  // book add to/remove from the shopping list
  if (target.classList.contains('modal-add-btn')) {
    updateShoppingList(e, bookData);
  }
});
