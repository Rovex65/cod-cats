import * as basicLightbox from 'basiclightbox';

const container = document.querySelector(".gallery");

  function newGallery() {
    const result = images
    .map(({ preview, original, description }) => {
        return `
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
`;
    })
    .join("");

    return result;
}
container.innerHTML = newGallery();

container.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) return;
    const source = e.target.dataset.source;
    onModalShow(source);
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target === e.currentTarget) return;
  const source = e.target.dataset.source;
  onModalShow(source);
});

export function onModalShow(source) {
    const modal = basicLightbox.create(`<img src="${source}"/>`, {
        onShow: (modal) => {
            document.addEventListener("keydown", onModalClose);
        },
        onclose: (modal) => {
            document.removeEventListener("keydown", onModalClose);
        },
    });

    modal.show();

  function onModalClose(e) {
    if (e.key === "Escape") {
          modal.close();
        }
  }

  function onModalClose(e) {
    if (e.key === "closeModal") {
        modal.close();
      }
  }
}