// Добавить в html <span class="loader"></span>
const loader = document.querySelector('.home-loader');

export function showLoader() {
  loader.classList.remove('hidden');
}

export function closeLoader() {
  loader.classList.add('hidden');
}
