const categoriesList = document.querySelector('.sidebar-categories-name');
const categoryItems = document.querySelectorAll('.sb-category-item');

const booksByCategory = {
    'Combined Print and E-book Fiction': [],
    'Combined Print & E-book Nonfiction': [],
    'Hardcover fiction': [],
    'Hardcover nonfiction': [],
    'Paperback trade fiction': [],
    'Paperback nonfiction': [],
    'Advice, how-to & Miscellaneous': [],
    'Children’s middle grade hardcover': []
};


    categoryItems.forEach (function (item) {
    const categoryText = item.querySelector('a').textContent;
    console.log(categoryText);

});

