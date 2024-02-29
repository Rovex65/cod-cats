import { fonds } from './array-of-funds';
let offset = 0;
const supportList = document.querySelector('.support-ukraine-list');
const sliderLine = document.querySelector('.slider-liner-su');
const sliderBtn = document.querySelector('.support-ukraine-btn');
sliderBtn.addEventListener('click', sliderBtnHandler);

createMarkupForSupportUk(fonds);