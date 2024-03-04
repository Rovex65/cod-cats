import { templateTopBooks } from './template-functions';
import { templateFullCategory } from './template-functions';
import { templatePopUpBook } from './template-functions';
// import { getShoppingList } from './local-storage';
// import { updateShoppingList } from './local-storage';
import { onModalShow } from './pop-up';
import { BookApi } from './book-api';

const booksApi = new BookApi();
const booksWrap = document.querySelector('.books-wrapper');
const mainWrap = document.querySelector('.main-page');
const popUpBookInfo = document.querySelector('.pop-up .modal-wrap');
const popUpAddBtn = document.querySelector('.pop-up .modal-add-btn');

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
function checkBookStatus(currentId) {
  const shoppingList = getShoppingList();

  return shoppingList.find(({ bookId }) => bookId === currentId) || false;
}

function getShoppingBtnData(currentId) {
  const status = checkBookStatus(currentId);

  if (status) {
    return {
      btnText: 'Remove from the shopping list',
      btnClass: ['modal-add-btn', 'added'],
    };
  }

  return {
    btnText: 'Add to shopping list',
    btnClass: ['modal-add-btn'],
  };
}

function updateAddBtn({ _id }, { btnText, btnClass }) {
  popUpAddBtn.textContent = btnText;
  popUpAddBtn.setAttribute('data-id', _id);
  popUpAddBtn.classList.add(...btnClass);
}

function renderPopUp(bookData, currentId) {
  const btnData = getShoppingBtnData(currentId);
  const markup = templatePopUpBook(bookData);

  popUpBookInfo.innerHTML = markup;
  updateAddBtn(bookData, btnData);
}

let bookData;
export async function getBookById(target) {
  try {
    const bookId = target.closest('.book-item').dataset.bookId;
    bookData = await booksApi.getBookById(bookId);
    // renderPopUp(bookData, bookId);
    onModalShow(bookData, bookId);
  } catch (err) {
    console.log(err);
  }
}

// add event listeners
mainWrap.addEventListener('click', e => {
  const target = e.target;

  // show books from the selected category
  if (target.hasAttribute('data-category')) {
    e.preventDefault();
    getCategoryBooks(target);
  }
});

// book add to/remove from the shopping list
popUpAddBtn.addEventListener('click', e => {
  updateShoppingList(e, bookData);
});

booksWrap.addEventListener('click', e => {
  const target = e.target;

  // show book info in popup
  if (target.closest('.book-item')) {
    getBookById(target);
  }
});
