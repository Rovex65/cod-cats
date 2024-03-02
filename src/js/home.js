import { getTemplateTopBooks } from './template-api';
import { BookApi } from './book-api';

const booksApi = new BookApi();
const booksWrap = document.querySelector('.books-wrapper');

function renderBooks(booksWrap, booksData) {
  const markup = getTemplateTopBooks(booksData);
  booksWrap.insertAdjacentHTML('beforeend', markup);
}

// get books
export async function getTopBooksFromApi() {
  try {
    const data = await booksApi.getTopBooks();
    console.log(data);
    renderBooks(booksWrap, data);
  } catch (err) {
    console.log(err);
  }
}

getTopBooksFromApi();
