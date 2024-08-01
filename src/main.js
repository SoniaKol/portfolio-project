import 'modern-normalize/modern-normalize.css';
import { aboutMeAcc, aboutMeSwiper } from './js/about-me';
import { faqAcc } from './js/faq';
import {
  menuBtnHandler,
  closeMenuHandler,
  closeMenuOnScrollHandler,
} from './js/header';
import {
  burgerBtnHandler,
  closeBtnHandler,
  closeMobMenu,
} from './js/mobile-menu';
import { projectSwiper } from './js/projects';
import { reviewsSwiper, getReviews } from './js/reviews';

getReviews();
