import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css/navigation';
import '../css/about-me-accordion.css';
import '../css/about-me-swiper.css';

new Accordion('.accordion-container', {
  openOnInit: [0],
  elementClass: 'about-me-item',
  triggerClass: 'about-me-list-btn',
  panelClass: 'about-me-list-panel',
});

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.swiper-button-next',
  },
  loop: true,
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  speed: 700,
  mousewheel: {
    enabled: true,
  },
});
