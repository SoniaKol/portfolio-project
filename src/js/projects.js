import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard, Navigation, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import '../css/projects.css';

const projectSwiper = new Swiper('.projects-swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Keyboard, Mousewheel, Autoplay],
  navigation: {
    nextEl: '.projects-btn-next',
    prevEl: '.projects-btn-prev',
  },
  // autoplay: {
  //   delay: 5000,
  // },
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

export { projectSwiper };
