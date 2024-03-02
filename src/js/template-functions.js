function templateBook({ author, book_image, title, _id }) {
  return `<li class="book-item" data-book-id="${_id}">
              <div class="book-cover" data-book>
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
              <button type="button" class="button" data-category="${list_name}">See more</button>
          </section>`;
}

export function templateTopBooks(bookData) {
  return bookData.map(temlpateTopBooksCategory).join('');
}

function templateTitleHtml(categoryTitle) {
  const titleWords = categoryTitle.trim().split(' ');
  const lastWord = titleWords.splice(titleWords.length - 1).join('');
  return `<h1 class="main-title">
          ${titleWords.join(' ')} <span>${lastWord}</span>
        </h1>`;
}

export function templateFullCategory(booksData, categoryTitle) {
  const titleHtml = templateTitleHtml(categoryTitle);
  const booksHtml = booksData.map(templateBook).join('');
  return `${titleHtml}
          <section class="books-category">
            <ul class="books-list">${booksHtml}</ul>
          </section>`;
}

export function templateListCategories(bookData) {
  return bookData.map(templateNameCategory).join();
}

export function templatePopUpBook(book, btnData) {
  const { _id, list_name, author, book_image, buy_links, description, title } =
    book;
  const { btnText, btnClass } = btnData;
  return ''; // return pop up markup
}

export function templateShopListBooks(bookData) {
  return bookData.map(templateShopListBook).join();
}
