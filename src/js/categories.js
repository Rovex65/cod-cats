import { BookApi } from 'https://books-backend.p.goit.global/api-docs/'; 

const bookApi = new BookApi();
const categoriesList = document.querySelector('.sidebar-categories-name');
const scrollingLine = document.querySelector('.scrolling-line');

async function renderCategories() {
  try {
        const categoryList = await bookApi.getCategoryList();
      
      categoriesList.innerHTML = categoryList.map(category =>
          templateNameCategory(category))
            .join('');
            
        const categoryItems = document.querySelectorAll('.sb-category-item');
        categoryItems.forEach(item => {
      item.addEventListener('click', async () => {
          const categoryName = item.querySelector('a').textContent;
          const books = await bookApi.getBooksByCategory(categoryName);
          console.log(`Books in category ${categoryName}:`, books);
      });
    });
  } catch (error) {
    console.error('Error fetching category list:', error.message);
  }
}

function templateNameCategory(category) {
  return `<li class="sb-category-item">
            <a href="#" data-category="${category}">${category}</a>
          </li>`;
}

renderCategories();