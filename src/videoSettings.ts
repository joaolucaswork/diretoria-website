/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function videoSettings() {
  const swiperMulti = new Swiper('.swiper-container.is-portfolio', {
    modules: [Navigation],
    slidesPerView: 'auto',
    autoHeight: true,
    followFinger: true,
    freeMode: false,
    lazy: true,
    keyboard: { enabled: true, onlyInViewport: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 0 },
      1024: { slidesPerView: 1, spaceBetween: 56 },
      1440: { slidesPerView: 1, spaceBetween: 32 },
    },
  });
}
