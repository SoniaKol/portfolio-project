const colorBtn = {
  darkRed: document.querySelector('.dark-red'),
  green: document.querySelector('.green'),
  blue: document.querySelector('.blue'),
  red: document.querySelector('.red'),
  darkGreen: document.querySelector('.dark-green'),
  orange: document.querySelector('.orange'),
};
const elements = {
  colorNav: document.querySelector('.color-nav'),
  headerBtn: document.querySelector('.header-link'),
  headerNavItem: document.querySelectorAll('.header-nav-item'),
  hero: document.querySelector('.hero'),
  mobileMenu: document.querySelector('.mobile-menu'),
  mobileMenuBtn: document.querySelector('.mobile-menu-order'),
  mobileMenuItem: document.querySelectorAll('.mobile-menu-item'),
  amAccent: document.querySelector('.about-me-accent'),
  amSkills: document.querySelectorAll('.about-me-skills-div'),
  benefitsIcon: document.querySelectorAll('.benefits-item-icon-container'),
  projects: document.querySelectorAll('.projects-item-link'),
  covers: document.querySelector('.covers-container'),
  footerAccent: document.querySelector('.footer-title-accent'),
  footerBtn: document.querySelector('.footer-form-button'),
};

let currentColor = {
  colorNav: 'color-nav-dark-red',
  headerBtn: 'header-link-dark-red',
  headerNavItem: 'header-nav-item-dark-red',
  hero: 'hero-dark-red',
  mobileMenu: 'mobile-menu-dark-red',
  mobileMenuBtn: 'mobile-menu-order-dark-red',
  mobileMenuItem: 'mobile-menu-item-dark-red',
  amAccent: 'about-me-accent-dark-red',
  amSkills: 'about-me-skills-div-dark-red',
  benefitsIcon: 'benefits-item-icon-container-dark-red',
  projects: 'projects-item-link-dark-red',
  covers: 'covers-dark-red',
  footerAccent: 'footer-title-accent-dark-red',
  footerBtn: 'footer-form-button-dark-red',
};

colorBtn.darkRed.addEventListener('click', darkRedThemeHandler);
colorBtn.green.addEventListener('click', greenThemeHandler);
colorBtn.blue.addEventListener('click', blueThemeHandler);
colorBtn.red.addEventListener('click', redThemeHandler);
colorBtn.darkGreen.addEventListener('click', darkGreenThemeHandler);
colorBtn.orange.addEventListener('click', orangeThemeHandler);

function darkRedThemeHandler() {
  const darkRedColorTheme = {
    colorNav: 'color-nav-dark-red',
    headerBtn: 'header-link-dark-red',
    headerNavItem: 'header-nav-item-dark-red',
    hero: 'hero-dark-red',
    mobileMenu: 'mobile-menu-dark-red',
    mobileMenuBtn: 'mobile-menu-order-dark-red',
    mobileMenuItem: 'mobile-menu-item-dark-red',
    amAccent: 'about-me-accent-dark-red',
    amSkills: 'about-me-skills-div-dark-red',
    benefitsIcon: 'benefits-item-icon-container-dark-red',
    projects: 'projects-item-link-dark-red',
    covers: 'covers-dark-red',
    footerAccent: 'footer-title-accent-dark-red',
    footerBtn: 'footer-form-button-dark-red',
  };

  changeColor(darkRedColorTheme);
}

function greenThemeHandler() {
  const greenColorTheme = {
    headerBtn: 'header-link-green',
    headerNavItem: 'header-nav-item-green',
    hero: 'hero-green',
    colorNav: 'color-nav-green',
    mobileMenu: 'mobile-menu-green',
    mobileMenuBtn: 'mobile-menu-order-green',
    mobileMenuItem: 'mobile-menu-item-green',
    amAccent: 'about-me-accent-green',
    amSkills: 'about-me-skills-div-green',
    benefitsIcon: 'benefits-item-icon-container-green',
    projects: 'projects-item-link-green',
    covers: 'covers-green',
    footerAccent: 'footer-title-accent-green',
    footerBtn: 'footer-form-button-green',
  };

  changeColor(greenColorTheme);
}

function blueThemeHandler() {
  const blueColorTheme = {
    headerBtn: 'header-link-blue',
    headerNavItem: 'header-nav-item-blue',
    hero: 'hero-blue',
    colorNav: 'color-nav-blue',
    mobileMenu: 'mobile-menu-blue',
    mobileMenuBtn: 'mobile-menu-order-blue',
    mobileMenuItem: 'mobile-menu-item-blue',
    amAccent: 'about-me-accent-blue',
    amSkills: 'about-me-skills-div-blue',
    benefitsIcon: 'benefits-item-icon-container-blue',
    projects: 'projects-item-link-blue',
    covers: 'covers-blue',
    footerAccent: 'footer-title-accent-blue',
    footerBtn: 'footer-form-button-blue',
  };

  changeColor(blueColorTheme);
}

function redThemeHandler() {
  const redColorTheme = {
    headerBtn: 'header-link-red',
    headerNavItem: 'header-nav-item-red',
    hero: 'hero-red',
    colorNav: 'color-nav-red',
    mobileMenu: 'mobile-menu-red',
    mobileMenuBtn: 'mobile-menu-order-red',
    mobileMenuItem: 'mobile-menu-item-red',
    amAccent: 'about-me-accent-red',
    amSkills: 'about-me-skills-div-red',
    benefitsIcon: 'benefits-item-icon-container-red',
    projects: 'projects-item-link-red',
    covers: 'covers-red',
    footerAccent: 'footer-title-accent-red',
    footerBtn: 'footer-form-button-red',
  };

  changeColor(redColorTheme);
}

function darkGreenThemeHandler() {
  const darkGreenColorTheme = {
    colorNav: 'color-nav-dark-green',
    headerBtn: 'header-link-dark-green',
    headerNavItem: 'header-nav-item-dark-green',
    hero: 'hero-dark-green',
    mobileMenu: 'mobile-menu-dark-green',
    mobileMenuBtn: 'mobile-menu-order-dark-green',
    mobileMenuItem: 'mobile-menu-item-dark-green',
    amAccent: 'about-me-accent-dark-green',
    amSkills: 'about-me-skills-div-dark-green',
    benefitsIcon: 'benefits-item-icon-container-dark-green',
    projects: 'projects-item-link-dark-green',
    covers: 'covers-dark-green',
    footerAccent: 'footer-title-accent-dark-green',
    footerBtn: 'footer-form-button-dark-green',
  };

  changeColor(darkGreenColorTheme);
}

function orangeThemeHandler() {
  const orangeColorTheme = {
    headerBtn: 'header-link-orange',
    headerNavItem: 'header-nav-item-orange',
    hero: 'hero-orange',
    colorNav: 'color-nav-orange',
    mobileMenu: 'mobile-menu-orange',
    mobileMenuBtn: 'mobile-menu-order-orange',
    mobileMenuItem: 'mobile-menu-item-orange',
    amAccent: 'about-me-accent-orange',
    amSkills: 'about-me-skills-div-orange',
    benefitsIcon: 'benefits-item-icon-container-orange',
    projects: 'projects-item-link-orange',
    covers: 'covers-orange',
    footerAccent: 'footer-title-accent-orange',
    footerBtn: 'footer-form-button-orange',
  };

  changeColor(orangeColorTheme);
}

function changeColor(colorObj) {
  elements.headerBtn.classList.remove(currentColor.headerBtn);
  elements.headerBtn.classList.add(colorObj.headerBtn);

  elements.headerNavItem.forEach(item => {
    item.classList.remove(currentColor.headerNavItem);
    item.classList.add(colorObj.headerNavItem);
  });

  elements.hero.classList.remove(currentColor.hero);
  elements.hero.classList.add(colorObj.hero);

  elements.colorNav.classList.remove(currentColor.colorNav);
  elements.colorNav.classList.add(colorObj.colorNav);

  elements.mobileMenu.classList.remove(currentColor.mobileMenu);
  elements.mobileMenu.classList.add(colorObj.mobileMenu);

  elements.mobileMenuBtn.classList.remove(currentColor.mobileMenuBtn);
  elements.mobileMenuBtn.classList.add(colorObj.mobileMenuBtn);

  elements.mobileMenuItem.forEach(item => {
    item.classList.remove(currentColor.mobileMenuItem);
    item.classList.add(colorObj.mobileMenuItem);
  });

  elements.amAccent.classList.remove(currentColor.amAccent);
  elements.amAccent.classList.add(colorObj.amAccent);

  elements.amSkills.forEach(item => {
    item.classList.remove(currentColor.amSkills);
    item.classList.add(colorObj.amSkills);
  });

  elements.benefitsIcon.forEach(item => {
    item.classList.remove(currentColor.benefitsIcon);
    item.classList.add(colorObj.benefitsIcon);
  });

  elements.projects.forEach(item => {
    item.classList.remove(currentColor.projects);
    item.classList.add(colorObj.projects);
  });

  elements.covers.classList.remove(currentColor.covers);
  elements.covers.classList.add(colorObj.covers);

  elements.footerAccent.classList.remove(currentColor.footerAccent);
  elements.footerAccent.classList.add(colorObj.footerAccent);

  elements.footerBtn.classList.remove(currentColor.footerBtn);
  elements.footerBtn.classList.add(colorObj.footerBtn);

  currentColor = {
    headerBtn: colorObj.headerBtn,
    headerNavItem: colorObj.headerNavItem,
    hero: colorObj.hero,
    colorNav: colorObj.colorNav,
    mobileMenu: colorObj.mobileMenu,
    mobileMenuBtn: colorObj.mobileMenuBtn,
    mobileMenuItem: colorObj.mobileMenuItem,
    amAccent: colorObj.amAccent,
    amSkills: colorObj.amSkills,
    benefitsIcon: colorObj.benefitsIcon,
    projects: colorObj.projects,
    covers: colorObj.covers,
    footerAccent: colorObj.footerAccent,
    footerBtn: colorObj.footerBtn,
  };
}
