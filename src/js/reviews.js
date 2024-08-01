import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard, Navigation, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import '../css/reviews.css';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const ENDPOINT = 'reviews';
axios.defaults.baseURL = BASE_URL;
const reviewsList = document.querySelector('.js-reviews-list');

const reviewsSwiper = new Swiper('.reviews-swiper', {
  modules: [Navigation, Keyboard, Mousewheel, Autoplay],
  navigation: {
    nextEl: '.reviews-btn-next',
    prevEl: '.reviews-btn-prev',
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
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

function markUp(arr) {
  const markup = arr
    .map(
      ({
        author,
        avatar_url,
        review,
      }) => ` <li class="reviews-item swiper-slide">
          <img src="${avatar_url}" alt="${author} photo" class="reviews-item-img" />
          <h3 class="reviews-item-title">${author}</h3>
          <p class="reviews-item-text">${review}</p>
        </li>`
    )
    .join('');
  reviewsList.insertAdjacentHTML('beforeend', markup);
}

async function getReviews() {
  const reviews = (await axios.get(ENDPOINT)).data;
  markUp(reviews);
}

getReviews();
