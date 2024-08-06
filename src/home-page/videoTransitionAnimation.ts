/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { getPlayer } from './videoPlayer';

export function initializeVideoTransitionAnimation() {
  let videoStartedOnce = false;
  let animationActive = false;

  const swiperMulti = new Swiper('.swiper-container.is-portfolio', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    freeMode: false,
    lazy: true,
    disableOnInteraction: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: '#right-button',
      prevEl: '#left-button',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 56,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });

  // Adiciona o evento para atualizar o rótulo e a cor do cartão ativo
  swiperMulti.on('activeIndexChange', function (e) {
    const cardLabel = e.slides[e.activeIndex].getAttribute('CardLabel');
    const cardColor = e.slides[e.activeIndex].getAttribute('CardColor');
    const activeCardLabel = document.querySelector('.active-card-label');
    if (activeCardLabel) {
      activeCardLabel.textContent = cardLabel;
      activeCardLabel.style.color = cardColor;
    }
  });
  const tl = gsap.timeline({
    paused: true,
    defaults: { ease: 'power1.inOut', duration: 1.8 },
    onComplete: () => {
      gsap.set('.your-button', { opacity: 0, visibility: 'hidden' });
      const player = getPlayer();
      if (player && typeof player.play === 'function') {
        player.play();
        applyPlayingState();
        videoStartedOnce = true;
        animationActive = true;
        updateButtonText();
      } else {
        console.warn('Player de vídeo não está pronto ou não tem método play');
      }
    },
  });

  tl.fromTo(
    '.your-div',
    { height: () => getComputedStyle(document.querySelector('.your-div')).height },
    { height: '100%', onStart: advanceSwiperSlides }
  );
  tl.fromTo('.your-image', { scale: 1.8 }, { scale: 1 }, '<');

  function advanceSwiperSlides() {
    swiperMulti.slideNext();
    swiperMulti.slideNext();
  }

  function handleButtonClick() {
    if (!animationActive) {
      tl.timeScale(1).play();
    }
  }

  function updateButtonText() {
    $('.your-button').attr('data-cursor-text', 'Clique');
  }

  $('.your-button').on('click', () => {
    if (videoStartedOnce) {
      handleButtonClick();
    }
  });

  $('.your-button').on('mousedown touchstart', () => {
    if (!videoStartedOnce) {
      handleButtonClick();
    }
  });

  $('.your-button').on('mouseup touchend', () => {
    if (tl.progress() < 1 && !animationActive && !videoStartedOnce) {
      tl.timeScale(2).reverse();
    }
  });

  function applyPlayingState() {
    $('.nav_logo').addClass('hide');
    $('.close-icon').addClass('playing');
    $('.nav_component').addClass('dark');
    $('.menu_link').addClass('white');
    $('.effect_visual_inner').css('opacity', '0');
    $('.effect_visual_inner').css('display', 'none');
  }

  function applyPausedState() {
    $('.nav_logo').removeClass('hide');
    $('.close-icon').removeClass('playing');
    $('.nav_component').removeClass('dark');
    $('.menu_link').removeClass('white');
    $('.effect_visual_inner').css('opacity', '1');
    $('.effect_visual_inner').css('display', 'flex');
    gsap.set('.your-button', { opacity: 1, visibility: 'visible' });

    if (videoStartedOnce) {
      $('.play_status').text('Continuar assistindo');
    }
  }

  function reverseAnimation() {
    tl.timeScale(2).reverse();
    const player = getPlayer();
    if (player && typeof player.pause === 'function') {
      player.pause();
    }
    applyPausedState();
    animationActive = false;
  }

  $('.close-icon').on('click', () => {
    if (animationActive) {
      reverseAnimation();
    }
  });

  const player = getPlayer();
  player.on('pause', () => {});

  player.on('play', () => {
    if (animationActive) {
      applyPlayingState();
    }
  });

  $(document).ready(() => {
    $('.effect_visual_inner').css('opacity', '1');
    $('.effect_visual_inner').css('display', 'flex');
  });
}
