import { addData, getData } from './authorization';

export async function updateShoppingList(e, bookData) {
  const target = e.target;
  const shoppingList = await getData();

  target.classList.toggle('added');

  if (target.classList.contains('added')) {
    addToShopList(target, shoppingList, bookData);
    return;
  }
  removeFromShopList(target, shoppingList);
}

function addToShopList(target, shoppingList, bookData) {
  const bookObj = createBookObject(bookData);
  const newListObj = createFullObject(shoppingList);

  newListObj[bookObj._id] = bookObj;

  addData(newListObj);
  target.textContent = 'Remove from the shopping list';
}

function createBookObject(bookData) {
  const { _id, list_name, author, book_image, buy_links, description, title } =
    bookData;

  return {
    _id,
    book_image,
    title,
    list_name,
    description,
    author,
    buy_links,
  };
}

function createFullObject(booksArr) {
  const newData = {};

  booksArr.forEach(item => {
    newData[item._id] = createBookObject(item);
  });

  return newData;
}

// remove from SL
export function removeFromShopList(target, shoppingList) {
  const idToDelete =
    target.dataset.id || target.closest('.delete-icon').dataset.id;
  const newList = shoppingList.filter(({ _id }) => _id !== idToDelete);
  const newListObj = createFullObject(newList);

  addData(newListObj);
  target.textContent = 'Add to shopping list';
}
