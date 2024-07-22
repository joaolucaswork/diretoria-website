/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { gsap } from 'gsap';

import { getPlayer } from './videoPlayer';

export function initializeVideoTransitionAnimation() {
  const tl = gsap.timeline({
    paused: true,
    defaults: { ease: 'power1.inOut', duration: 1.8 },
    onComplete: () => {
      gsap.set('.your-button', { opacity: 0, visibility: 'hidden' });

      const player = getPlayer();
      if (player && typeof player.play === 'function') {
        player.play();
        $('.nav_logo').addClass('hide');
        $('.close-icon').addClass('playing');
      } else {
        console.warn('Player de vídeo não está pronto ou não tem método play');
      }
    },
  });

  tl.fromTo('.your-div', { height: '25%' }, { height: '100%' });
  tl.fromTo('.your-image', { scale: 1.8 }, { scale: 1 }, '<');

  $('.your-button').on('mousedown touchstart', () => tl.timeScale(1).play());
  $('.your-button').on('mouseup touchend', () => {
    if (tl.progress() < 1) {
      reverseAnimation();
    }
  });

  function reverseAnimation() {
    tl.timeScale(2).reverse();

    const player = getPlayer();
    if (player && typeof player.pause === 'function') {
      player.pause();
    }

    $('.nav_logo').removeClass('hide');
    $('.close-icon').removeClass('playing');

    gsap.set('.your-button', { opacity: 1, visibility: 'visible' });
  }

  $('.close-icon').on('click', () => {
    if (tl.progress() === 1) {
      reverseAnimation();
    }
  });

  const player = getPlayer();
  player.on('pause ended', () => {
    $('.nav_logo').removeClass('hide');
    $('.close-icon').removeClass('playing');
    gsap.set('.your-button', { opacity: 1, visibility: 'visible' });
  });
}
