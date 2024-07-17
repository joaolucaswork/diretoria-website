/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger, CustomEase);

export const cursoModules = () => {
  function animateStarColors() {
    const stars = document.querySelectorAll('.star_icon');
    const sectionLearning = document.querySelector('.section_learning');

    if (!sectionLearning || stars.length === 0) return;

    // Definir o estado inicial das estrelas
    gsap.set(stars, {
      fill: 'currentColor',
      rotation: 0,
      transformOrigin: 'center center',
    });

    ScrollTrigger.create({
      trigger: sectionLearning,
      start: 'top 30%',
      onEnter: () => animateStars(),
      onLeaveBack: () => resetStars(),
      markers: true, // Remova isso em produção
    });

    function animateStars() {
      stars.forEach((star, index) => {
        gsap.to(star, {
          fill: '#ffe100',
          rotation: 15,
          duration: 0.3,
          delay: index * 0.2,
          ease: 'power1.inOut',
          onComplete: () => {
            gsap.to(star, {
              fill: 'currentColor',
              rotation: 0,
              duration: 0.6,
              ease: 'power1.inOut',
            });
          },
        });
      });
    }

    function resetStars() {
      gsap.to(stars, {
        fill: 'currentColor',
        rotation: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: 'power1.inOut',
      });
    }
  }

  document.addEventListener('DOMContentLoaded', animateStarColors);

  const playButton = document.querySelector('.play-video.full');
  const circle = playButton.querySelector('circle');
  const triangle = document.getElementById('triangle');

  // Set up initial states
  gsap.set(triangle, { scale: 0, opacity: 0, display: 'block' });

  // Create the hover animation
  const hoverAnimation = gsap
    .timeline({ paused: true })
    .to(circle, { scale: 0, opacity: 0, duration: 0.3, ease: 'power2.inOut' })
    .to(triangle, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.inOut' }, '-=0.3');

  // Add event listeners
  playButton.addEventListener('mouseenter', () => hoverAnimation.play());
  playButton.addEventListener('mouseleave', () => hoverAnimation.reverse());

  $(document).ready(function () {
    $('.lucas_jpg').hover(
      function () {
        $('.brand_text').addClass('active');
        $(this).addClass('disabled');
        $('.image.is-2').addClass('active');
      },
      function () {
        $('.brand_text').removeClass('active');
        $(this).removeClass('disabled');
        $('.image.is-2').removeClass('active');
      }
    );
  });
};
