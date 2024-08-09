/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { gsap } from 'gsap';
<<<<<<< HEAD:src/videoTransitionAnimation.ts
=======
import { ScrollTrigger } from 'gsap/ScrollTrigger';
>>>>>>> parent of 94d9152 (Clean things):src/home-page/videoTransitionAnimation.ts

import { getPlayer } from './videoPlayer';

export function initializeVideoTransitionAnimation() {
  let videoStartedOnce = false;
  let animationActive = false;

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
      } else {
        console.warn('Player de vídeo não está pronto ou não tem método play');
      }
    },
  });

  tl.fromTo(
    '.your-div',
    { height: () => getComputedStyle(document.querySelector('.your-div')).height },
    { height: '100%' }
  );
  tl.fromTo('.your-image', { scale: 1.8 }, { scale: 1 }, '<');

  function handleButtonClick() {
    if (!animationActive) {
      tl.timeScale(1).play();
    } else {
      reverseAnimation();
    }
  }

  $('.your-button').on('click', () => {
    handleButtonClick();
  });

  function applyPlayingState() {
    $('.nav_logo').addClass('hide');
    $('.nav_component').addClass('dark');
    $('.menu_link').addClass('white');
    $('.effect_visual_inner').css('opacity', '0');
    $('.effect_visual_inner').css('display', 'none');
  }

  function applyPausedState() {
    $('.nav_logo').removeClass('hide');
    $('.nav_component').removeClass('dark');
    $('.menu_link').removeClass('white');
    $('.effect_visual_inner').css('opacity', '1');
    $('.effect_visual_inner').css('display', 'flex');
    gsap.set('.your-button', { opacity: 1, visibility: 'visible' });
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
