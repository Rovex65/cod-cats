// Добавить в html <span class="loader"></span>
const loader = document.querySelector('.loader');

function showLoader() {
  loader.classList.remove('hidden');
}

function closeLoader() {
  loader.classList.add('hidden');
}
