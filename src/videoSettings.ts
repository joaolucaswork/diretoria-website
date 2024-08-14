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
    autoHeight: false,
    followFinger: true,
    freeMode: false,
    lazy: false,
    keyboard: { enabled: true, onlyInViewport: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 0, allowTouchMove: true },
      1024: { slidesPerView: 1, spaceBetween: 56, allowTouchMove: false },
      1440: { slidesPerView: 3, spaceBetween: 32, allowTouchMove: false },
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
