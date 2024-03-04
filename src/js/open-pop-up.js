import { getBookById } from './home';

const booksWrap = document.querySelector('.books-wrapper');

booksWrap.addEventListener('click', e => {
  const target = e.target;

  // show book info in popup
  if (target.closest('.book-item')) {
    getBookById(target);
  }
});
