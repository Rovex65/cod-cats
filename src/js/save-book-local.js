import { BookApi } from './book-api';

const bookApi = new BookApi();

async function setTestBooksToLocal(category) {
  const books = await bookApi.getBooksByCategory(category);
  console.log(books);
  localStorage.setItem('saved-books', JSON.stringify(books));
}

setTestBooksToLocal('Audio Fiction');
