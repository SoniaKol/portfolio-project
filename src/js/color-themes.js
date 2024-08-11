import { colorBtn, elements, colors } from './color-themes-data';

let currentColor = colors.darkRedColorTheme;
const KEY = 'color-theme';

colorBtn.darkRed.addEventListener('click', () => {
  changeColor(colors.darkRedColorTheme);
  currentColor = colors.darkRedColorTheme;
});
colorBtn.green.addEventListener('click', () => {
  changeColor(colors.greenColorTheme);
  currentColor = colors.greenColorTheme;
});
colorBtn.blue.addEventListener('click', () => {
  changeColor(colors.blueColorTheme);
  currentColor = colors.blueColorTheme;
});
colorBtn.red.addEventListener('click', () => {
  changeColor(colors.redColorTheme);
  currentColor = colors.redColorTheme;
});
colorBtn.darkGreen.addEventListener('click', () => {
  changeColor(colors.darkGreenColorTheme);
  currentColor = colors.darkGreenColorTheme;
});
colorBtn.orange.addEventListener('click', () => {
  changeColor(colors.orangeColorTheme);
  currentColor = colors.orangeColorTheme;
});

function changeColor(colorObj) {
  localStorage.setItem(KEY, JSON.stringify(colorObj));
  elements.headerBtn.classList.remove(currentColor.headerBtn);
  elements.headerBtn.classList.add(colorObj.headerBtn);

  elements.headerNavItem.forEach(item => {
    item.classList.remove(currentColor.headerNavItem);
    item.classList.add(colorObj.headerNavItem);
  });

  elements.hero.classList.remove(currentColor.hero);
  elements.hero.classList.add(colorObj.hero);

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
}

export { changeColor, currentColor, KEY };
