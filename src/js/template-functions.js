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

function templateShopListBook(book) {
  const { book_image, title, list_name, description, author, buy_links, _id } = book;

  return `<div class="shop-list-book-card">
  <img src="${book_image}" class="shop-list-book-image">
  <div class="shop-list-book-info">
      <div class="shop-list-card-header">
          <div class="shop-list-book-title-container">
              <p class="shop-list-book-title">${title}</p>
              <p class="shop-list-book-genre">${list_name}</p>
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
              <a href="${buy_links.find(link => link.name === 'Amazon').url}" target="_blank"><img src="./img/amazon-2x.png" class="shop-list-amazon"></a>
              <a href="${buy_links.find(link => link.name === 'Apple Books').url}" target="_blank"><img src="./img/book-2x.png" class="shop-list-apple"></a>
          </div>
      </div>
  </div>
</div>`;
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

export function templateTopBooks(bookData) {
  return bookData.map(temlpateTopBooksCategory).join('');
}

export function templateFullCategory(bookData) {
  return '';
}
export function templateListCategories(bookData) {
  return bookData.map(templateNameCategory).join();
}

export function templatePopUpBook(book) {
  return ''; // return pop up markup
}

export function templateShopListBooks(bookData) {
  return bookData.map(templateShopListBook).join();
}
