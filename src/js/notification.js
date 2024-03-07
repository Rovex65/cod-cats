import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showError(message) {
  iziToast.error({
    pauseOnHover: false,
    position: 'topRight',
    message,
  });
}
