import { burgerBtn, allPage } from './header';

const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.js-mobile-menu-close');

burgerBtn.addEventListener('click', burgerBtnHandler);
closeBtn.addEventListener('click', closeBtnHandler);

function burgerBtnHandler() {
  mobileMenu.classList.add('is-open');
  allPage.classList.add('no-scroll');
}

function closeBtnHandler() {
  mobileMenu.classList.remove('is-open');
  allPage.classList.remove('no-scroll');
}

export { burgerBtnHandler, closeBtnHandler };
