/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Swiper from 'swiper';

export function videoSettings() {
  defineCustomElements();

  const swiperMulti = new Swiper('.swiper-container.is-portfolio', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    followFinger: true,
    freeMode: false,
    lazy: true,
    keyboard: { enabled: true, onlyInViewport: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 20 },
      1024: { slidesPerView: 2, spaceBetween: 56 },
      1440: { slidesPerView: 3, spaceBetween: 32 },
    },
  });
}
