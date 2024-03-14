import './header';
import './support-ukraine';
import './switch-theme';
import { initListenersForAuth } from './authorization';
import { handleDeleteButtonClick } from './shop-list-functions';

const listElem = document.querySelector('.shopping-list');

initListenersForAuth();

listElem.addEventListener('click', handleDeleteButtonClick);
