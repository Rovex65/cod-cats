export function updateShoppingList(e, bookData) {
  const target = e.target;
  const shoppingList = getShoppingList();

  target.classList.toggle('added');

  if (target.classList.contains('added')) {
    addToShopList(target, shoppingList, bookData);
    return;
  }
  removeFromShopList(target, shoppingList);
}

export function getShoppingList() {
  return JSON.parse(localStorage.getItem('shoppingList')) || [];
}

function addToShopList(target, shoppingList, bookData) {
  const bookObj = createBookObject(bookData);
  shoppingList.push(bookObj);

  setShoppingList(shoppingList, bookObj);
  target.textContent = 'Remove from the shopping list';
}

function createBookObject(bookData) {
  const { _id, list_name, author, book_image, buy_links, description, title } =
    bookData;

  return {
    bookId: _id,
    image: book_image,
    title,
    category: list_name,
    description,
    author,
    buyLinks: buy_links,
  };
}

function setShoppingList(shoppingList) {
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

// remove from SL
function removeFromShopList(target, shoppingList) {
  const newList = shoppingList.filter(
    ({ bookId }) => bookId !== target.dataset.id
  );

  setShoppingList(newList);
  target.textContent = 'Add to shopping list';
}
