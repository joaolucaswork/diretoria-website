/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { getPlayer } from './videoPlayer';

export function initializeVideoTransitionAnimation() {
  let videoStartedOnce = false;

  function disableScroll() {
    $('body').css('overflow', 'hidden');
  }

  function enableScroll() {
    $('body').css('overflow', '');
  }

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
        $('.nav_component').addClass('dark'); // Adicionando a classe 'dark' ao nav_component
        $('.menu_link').addClass('white');
        $('.effect_visual_inner').css('opacity', '0'); // Reduzir opacidade para 0
        $('.effect_visual_inner').css('display', 'none'); // Reduzir opacidade para 0
        videoStartedOnce = true;
        disableScroll();
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
    $('.nav_component').removeClass('dark'); // Removendo a classe 'dark' do nav_component
    $('.menu_link').removeClass('white');
    $('.effect_visual_inner').css('opacity', '1'); // Restaurar opacidade para 100%
    gsap.set('.your-button', { opacity: 1, visibility: 'visible' });

    if (videoStartedOnce) {
      $('.play_status').text('Continuar assistindo');
    }
    enableScroll();
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
    $('.nav_component').removeClass('dark'); // Removendo a classe 'dark' do nav_component
    $('menu_link').removeClass('white'); // Removendo a classe 'dark' do menu_link
    $('.effect_visual_inner').css('opacity', '1'); // Restaurar opacidade para 100%
    $('.effect_visual_inner').css('display', 'flex'); // Restaurar opacidade para 100%
    gsap.set('.your-button', { opacity: 1, visibility: 'visible' });

    if (videoStartedOnce) {
      $('.play_status').text('Continuar assistindo');
    }
    enableScroll();
  });

  // Garantir que a opacidade inicial seja 100%
  $(document).ready(() => {
    $('.effect_visual_inner').css('opacity', '1');
    $('.effect_visual_inner').css('display', 'flex');
  });
}
