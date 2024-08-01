import { burgerBtn } from './header';

const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.js-mobile-menu-close');
const navLink = document.querySelectorAll('.js-mobile-menu-link');

burgerBtn.addEventListener('click', burgerBtnHandler);
closeBtn.addEventListener('click', closeBtnHandler);
navLink.forEach(link => link.addEventListener('click', closeMobMenu));

function burgerBtnHandler() {
  mobileMenu.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

function closeBtnHandler() {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

function closeMobMenu() {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

export { burgerBtnHandler, closeBtnHandler, closeMobMenu };
