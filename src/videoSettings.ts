/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// import Swiper and modules styles
import 'swiper/css';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { defineCustomElement, MediaPlayButtonElement } from 'vidstack/elements';
import { VidstackPlayer } from 'vidstack/global/player';

export function videoSettings() {
  defineCustomElement(MediaPlayButtonElement);

  const swiperMulti = new Swiper('.swiper-container.is-portfolio', {
    modules: [Navigation],
    slidesPerView: 3,
    slidesPerGroup: 1,
    grabCursor: false,
    a11y: false,
    autoHeight: false,
    allowTouchMove: true,
    followFinger: true,
    freeMode: false,
    lazy: true,
    keyboard: { enabled: true, onlyInViewport: true },
    navigation: {
      nextEl: '#right-button',
      prevEl: '#left-button',
    },

    breakpoints: {
      0: {
        /* when window >=0px - webflow mobile landscape/portriat */ slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 28,
      },
      480: {
        /* when window >=0px - webflow mobile landscape/portriat */ slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 28,
        allowTouchMove: true,
      },
      767: {
        /* when window >= 767px - webflow tablet */ slidesPerView: 3,
        slidesPerGroup: 1,
        allowTouchMove: true,
        spaceBetween: 28,
      },
      992: {
        /* when window >= 988px - webflow desktop */ slidesPerView: 3,
        slidesPerGroup: 1,
        allowTouchMove: false,
        spaceBetween: 28,
      },
    },
  });
  const video = document.querySelector('video');
  const videoVisual = document.querySelector('.video_visual');
  const leftHomeHero = document.querySelector('.left_home_hero');
  const playButton = document.querySelector('#play');

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  function toggleFullScreen(exit) {
    if (
      document.fullscreenElement &&
      (video.ended || video.duration - video.currentTime <= 9.5) &&
      exit
    ) {
      document.exitFullscreen();
    }
  }

  function updateUI(isPlaying) {
    document.body.style.overflow = isPlaying ? 'hidden' : '';
    document.body.setAttribute('element-theme', isPlaying ? '1' : '2');
    if (!isMobile) {
      videoVisual.classList.toggle('full', isPlaying);
      leftHomeHero.classList.toggle('video_play', isPlaying);
    }

    // Update button text
    playButton.textContent = isPlaying ? '⏸ Pausar' : '▶ Assistir';
  }

  function setupVideoControls() {
    if (!video || !videoVisual || !leftHomeHero || !playButton) return;

    let hasReached35Seconds = false;
    let isPlaying = false;

    video.addEventListener('play', () => {
      if (!hasReached35Seconds) {
        isPlaying = true;
        updateUI(isPlaying);
      }
    });

    video.addEventListener('pause', () => {
      isPlaying = false;
      updateUI(isPlaying);
    });

    video.addEventListener('ended', () => {
      isPlaying = false;
      updateUI(isPlaying);
      video.currentTime = 0;
      hasReached35Seconds = false;
    });

    video.addEventListener('timeupdate', () => {
      toggleFullScreen(true);
      if (video.currentTime >= 36 && !hasReached35Seconds) {
        hasReached35Seconds = true;
        isPlaying = false;
        updateUI(isPlaying);
      }
    });

    document.addEventListener('fullscreenchange', () => toggleFullScreen(false));

    playButton.addEventListener('click', () => {
      if (!hasReached35Seconds) {
        if (isPlaying) {
          video.pause();
        } else {
          video.play();
        }
        isPlaying = !isPlaying;
        updateUI(isPlaying);
      }
    });
  }

  setupVideoControls();
}
