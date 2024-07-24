import { burgerBtn } from './header.js';

const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.js-mobile-menu-close');

burgerBtn.addEventListener('click', burgerBtnHandler);
closeBtn.addEventListener('click', closeBtnHandler);

function burgerBtnHandler() {
  mobileMenu.classList.add('is-open');
}

function closeBtnHandler() {
  mobileMenu.classList.remove('is-open');
}
