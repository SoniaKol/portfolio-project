const menuBtn = document.querySelector('.js-header-menu-btn');
const navList = document.querySelector('.js-header-nav-list');
const burgerBtn = document.querySelector('.js-burger-menu');

let IS_OPEN = false;

menuBtn.addEventListener('click', menuBtnHandler);
document.body.addEventListener('click', closeMenuHandler);
document.addEventListener('scroll', closeMenuOnScrollHandler);

function menuBtnHandler() {
  if (!IS_OPEN) {
    navList.classList.add('is-open');
    IS_OPEN = true;
    return;
  }

  if (IS_OPEN) {
    navList.classList.remove('is-open');
    IS_OPEN = false;
    return;
  }
}

function closeMenuHandler(evt) {
  if (evt.target !== menuBtn && IS_OPEN === true) {
    navList.classList.remove('is-open');
    IS_OPEN = false;
    return;
  }
}

function closeMenuOnScrollHandler() {
  if (IS_OPEN) {
    navList.classList.remove('is-open');
    IS_OPEN = false;
    return;
  }
}

export {
  burgerBtn,
  menuBtnHandler,
  closeMenuHandler,
  closeMenuOnScrollHandler,
};
