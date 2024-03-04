import * as basicLightbox from 'basiclightbox';

import { templatePopUpBook } from './template-functions';

export function onModalShow(bookData, bookId) {
  const modal = basicLightbox.create(templatePopUpBook(bookData, bookId), {
    onShow: modal => {
      document.addEventListener('keydown', onModalClose);
      modal.element().querySelector('.modal-btn').onclick = modal.close;
    },
    onclose: modal => {
      document.removeEventListener('keydown', onModalClose);
    },
  });
  modal.show();

  function onModalClose(e) {
    if (e.key === 'Escape') {
      modal.close();
    }
  }
}
