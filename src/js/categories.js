import { BookApi } from './book-api';
import { showError } from './notification';
import { templateListCategories } from './template-functions';

const bookApi = new BookApi();
const categoriesList = document.querySelector('.sidebar-categories-name');
const scrollingLine = document.querySelector('.scrolling-line');

async function renderCategories() {
  try {
    const categoryList = await bookApi.getCategoryList();

    categoriesList.insertAdjacentHTML(
      'beforeend',
      templateListCategories(categoryList)
    );
  } catch (error) {
    showError(error.message);
  }
}

renderCategories();
