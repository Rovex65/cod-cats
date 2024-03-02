function templateBook({ author, book_image, title, _id }) {
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

function templateNameCategory() {
  return ''; // return <li> with name of category
}

function templateShopListBook() {
  return ''; // return markup card of book
}

function temlpateTopBooksCategory({ list_name, books }) {
  console.log(list_name, books);
  const categoryBooks = books.map(templateBook).join('');

  return `<section class="books-category">
              <h3 class="category-title">${list_name}</h3>
              <ul class="books-list">${categoryBooks}</ul>
              <button type="button" class="button" data-js-category="${list_name}">See more</button>
          </section>`;
}

export function getTemplateTopBooks(bookData) {
  return bookData.map(temlpateTopBooksCategory).join('');
}

export function getTemplateFullCategory(bookData) {
  return '';
}
export function getTemplateListCategories(bookData) {
  return bookData.map(templateNameCategory).join();
}

export function getTemplatePopUpBook(book) {
  return ''; // return pop up markup
}

export function getTemplateShopListBooks(bookData) {
  return bookData.map(templateShopListBook).join();
}
