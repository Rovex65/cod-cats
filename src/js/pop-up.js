import * as basicLightbox from 'basiclightbox';

export function onModalShow({
  book_image,
  title,
  list_name,
  description,
  author,
  buy_links,
}) {
  const modal = basicLightbox.create(
    `<div class="modal">
      <button type="button" class="modal-btn">
        <svg class="modal-btn-icon" width="18" height="18">
          <use href="../img/icons.svg#icon-close"></use>
        </svg>
      </button>
      <div class="modal-wrap">
        <img src="" class="modal-image" />
        <div class="modal-book-wrap">
          <h2 class="modal-book-title">HELLO BEAUTIFUL</h2>
          <p class="modal-book-author">Ann Napolitano</p>
          <p class="modal-book-descr">
            In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark
            past resurfaces as he gets to the know the family of his college
            sweetheart.
          </p>
          <div class="modal-logos-wrap">
            <img src="../img/amazon.png" alt="" class="modal-shop-list-amazon" />
            <img src="../img/book-1x.png" alt="" class="modal-shop-list-apple" />
          </div>
        </div>
      </div>
      <div class="modal-btn-add">
        <button type="submit" class="modal-add-btn">Add to shopping list</button>
        <p class="modal-btn-text">
          Сongratulations! You have added the book to the shopping list. To
          delete, press the button “Remove from the shopping list”.
        </p>
      </div>
    </div>
  `,
    {
      onShow: modal => {
        document.addEventListener('keydown', onModalClose);
      },
      onclose: modal => {
        document.removeEventListener('keydown', onModalClose);
      },
    }
  );
  modal.show();

  function onModalClose(e) {
    if (e.key === 'Escape') {
      modal.close();
    }
  }
}
