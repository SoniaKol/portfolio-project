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
});

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.swiper-button-next',
  },
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
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
