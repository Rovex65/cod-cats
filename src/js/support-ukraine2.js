import { fonds } from './array-of-funds';

const supportListModal = document.querySelector('.support-ukraine-list');
let offset = 0;
const sliderLineModal = document.querySelector('.slider-liner-su');
const sliderBtnModal = document.querySelector('.support-ukraine-btn');
sliderBtnModal.addEventListener('click', sliderBtnHandlerModal);

createMarkupForSupportUkModal(fonds);