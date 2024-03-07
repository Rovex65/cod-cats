import { fonds } from './array-of-funds';
let offset = 0;
const supportList = document.querySelector('.support-ukraine-list');
const sliderLine = document.querySelector('.slider-liner-su');
const sliderBtn = document.querySelector('.support-ukraine-btn');
// sliderBtn.addEventListener('click', sliderBtnHandler);

renderFonds(fonds);

function renderFonds(fonds) {
  supportList.innerHTML = fonds
    .map((fond, index) => templateFond(fond, index + 1))
    .join('');
}

function templateFond({ title, url, img, img2x }, index) {
  return `<li class="list-unit slider-item">
	<a href="${url}" class="list-unit-link" target="_blank"><span class="span-list-unit">${String(
    index
  ).padStart(2, '0')}</span>
	<img class="img-list-unit"
		src="${img}"
		srcset="${img} 1x, ${img2x} 2x"
		alt="${title}"
	></img></a>
</li>`;
}

// function sliderBtnHandler() {
//   offset += 157;
//   if (offset > 500) {
//     offset = 0;
//   }
//   sliderLine.style.top = -offset + 'px';
// }

const arrowBtn = document.querySelector('.support-ukraine-btn');
const sliderContainer = document.querySelector(
  '.support-ukraine .slider-container'
);

arrowBtn.addEventListener('click', () => {
  sliderContainer.classList.toggle('show-all');
});
