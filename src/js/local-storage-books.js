export function updateShoppingList(e) {
  const target = e.target;
  const shoppingList = getShoppingList();
  const button = target.closest('[data-add]');

  if (button) {
    button.classList.toggle('added');

    if (button.classList.contains('added')) {
      addToShopList(target, shoppingList);
      return;
    }

    removeFromShopList(target, shoppingList);
  }
}

export function getShoppingList() {
  return JSON.parse(localStorage.getItem('shoppingList')) || [];
}

function addToShopList(target, shoppingList) {
  const bookObj = createBookObject(target);
  shoppingList.push(bookObj);

  setShoppingList(shoppingList, bookObj);
  target.textContent = 'Remove from the shopping list';
}

function createBookObject(target) {
  const bookId = '643282b2e85766588626a0fc';
  const image = target.closest().dataset.image;
  const title = target.closest().dataset.title;
  const category = target.closest().dataset.category;
  const description = target.closest().dataset.description;
  const author = target.closest().dataset.author;
  const buyLinks = [
    {
      name: 'Amazon',
      url: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20',
    },
    {
      name: 'Apple Books',
      url: 'https://goto.applebooks.apple/9780735211292?at=10lIEQ',
    },
  ];

  return {
    bookId,
    image,
    title,
    category,
    author,
    description,
    buyLinks,
  };
}

function setShoppingList(shoppingList) {
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

// remove from SL
function removeFromShopList(target, shoppingList) {
  shoppingList.filter(({ bookId }) => bookId !== target.dataset.id);

  setShoppingList(shoppingList);
  target.textContent = 'Add to shopping list';
}
