import amazon from '../img/amazon.png'

function templateBook({ author, book_image, title, _id }) {
  return `<li class="book-item" data-book-id="${_id}">
              <div class="book-cover">
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

function templateShopListBook({ image, title, category, description, author, buyLinks }) {
  return `<li class="shop-list-book-card">
  <img src="${image}" class="shop-list-book-image">
  <div class="shop-list-book-info">
      <div class="shop-list-card-header">
          <div class="shop-list-book-title-container">
              <p class="shop-list-book-title">${title}</p>
              <p class="shop-list-book-genre">${category}</p>
          </div>
          <button type='button' class="delete-icon">
              <svg class="svg-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </button>
      </div>
      <p class="shop-list-book-description">${description}</p>
      <div class="shop-list-product-footer">
          <p class="shop-list-book-author">${author}</p>
          <div class="shop-list-book-stores">
              <a href="${buyLinks[0].url}" target="_blank"><img src="${amazon}" class="shop-list-amazon"></a>
              <a href="${buyLinks[1].url}}" target="_blank"><img src="/img/book-2x.png" class="shop-list-apple"></a>
          </div>
      </div>
  </div>
</li>`;
}

function temlpateTopBooksCategory({ list_name, books }) {
  const categoryBooks = books.map(templateBook).join('');

  return `<section class="books-category">
              <h3 class="category-title">${list_name}</h3>
              <ul class="books-list">${categoryBooks}</ul>
              <button type="button" class="button" data-category="${list_name}">See more</button>
          </section>`;
}

export function templateTopBooks(bookData) {
  const titleHtml = '<h1 class="main-title">Best Sellers <span>Books</span></h1>';
  return titleHtml + bookData.map(temlpateTopBooksCategory).join('');
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
          <section class="books-category single">
            <ul class="books-list">${booksHtml}</ul>
          </section>`;
}

export function templateListCategories(bookData) {
  return bookData.map(templateNameCategory).join();
}

export function templatePopUpBook({ author, book_image, buy_links, description, title }, id, btnData) {
  return `<div class="modal">
      <button type="button" class="modal-btn">
        <svg class="modal-btn-icon" width="18" height="18">
          <use href="/img/icons.svg#icon-close"></use>
        </svg>
      </button>
      <div class="modal-wrap">
        <img src="${book_image}" class="modal-image" />
        <div class="modal-book-wrap">
          <h2 class="modal-book-title">${title}</h2>
          <p class="modal-book-author">${author}</p>
          <p class="modal-book-descr">
            ${description}
          </p>
          <div class="modal-logos-wrap">
            <a href="${buy_links[0].url}" target="blank"><img src="${amazon}" alt="logo amazon" class="modal-shop-list-amazon" /></a>
            <a href="${buy_links[1].url}" target="blank"><img src="/img/book-1x.png" alt="logo apple" class="modal-shop-list-apple" /></a>
          </div>
        </div>
      </div>
      <div class="modal-btn-add">
        <button type="button" class="${btnData.btnClass}" data-id="${id}">${btnData.btnText}</button>
        <p class="modal-btn-text">
          Сongratulations! You have added the book to the shopping list. To
          delete, press the button “Remove from the shopping list”.
        </p>
      </div>
    </div>`;
}

export function templateShopListBooks(bookData) {
  return bookData.map(templateShopListBook).join('');
}
