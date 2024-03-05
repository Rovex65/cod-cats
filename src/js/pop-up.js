import * as basicLightbox from 'basiclightbox';

import { templatePopUpBook } from './template-functions';

const body = document.querySelector('body')

export function onModalShow(bookData, bookId, btnData) {
  const modal = basicLightbox.create(templatePopUpBook(bookData, bookId, btnData), {
    onShow: modal => {
      body.classList.add('modal-is-open');
      document.addEventListener('keydown', onModalClose);
      modal.element().querySelector('.modal-btn').onclick = modal.close;
    },
    onClose: modal => {
      body.classList.remove('modal-is-open');
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
