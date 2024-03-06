import { BookApi } from './book-api';

const bookApi = new BookApi();
const categoriesList = document.querySelector('.sidebar-categories-name');
const scrollingLine = document.querySelector('.scrolling-line');
const booksWrap = document.querySelector('.books-wrapper');
const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.remove('hidden');
}

export function closeLoader() {
  loader.classList.add('hidden');
}

async function renderCategories() {
  try {
    showLoader(); 

    const categoryList = await bookApi.getCategoryList();

    categoriesList.innerHTML = categoryList
      .map(category => templateNameCategory(category))
      .join('');

    hideLoader(); 
  } catch (error) {
    hideLoader(); 
    console.error('Error fetching category list:', error.message);
  }
}

function templateNameCategory({ list_name: category }) {
  return `<li class="sb-category-item">
            <a href="#" data-category="${category}">${category}</a>
          </li>`;
}


renderCategories();