// BookApi class
import { BookApi } from './book-api';

const booksApi = new BookApi();
const booksWrap = document.querySelector('.books-wrapper');

// render functions
function bookTemplate({ author, book_image, title, _id }) {
  return `<li class="book-item" data-book-id="${_id}">
              <div class="book-cover" data-js-book>
                  <img src="${book_image}" alt="book cover" />
                  <div class="quick-view">Quick view</div>
              </div>
              <div class="book-info">
                  <p class="book-title">${title}</p>
                  <p class="book-author">${author}</p>
              </div>
          </li>`;
}

function categoryTemplate({ books, list_name }) {
  const categoryBooks = books.map(bookTemplate).join('');

  return `<section class="books-category">
              <h3 class="category-title">${list_name}</h3>
              <ul class="books-list">${categoryBooks}</ul>
              <button type="button" class="button" data-js-category="${list_name}">See more</button>
          </section>`;
}

function fullTemplate(booksData) {
  return booksData.map(categoryTemplate).join('');
}

function renderBooks(booksWrap, booksData) {
  const markup = fullTemplate(booksData);
  booksWrap.insertAdjacentHTML('beforeend', markup);
}

// get books
export async function getBooksFromApi() {
  try {
    const data = await booksApi.getTopBooks();

    renderBooks(booksWrap, data);
  } catch (err) {
    console.log(err);
  }
}
