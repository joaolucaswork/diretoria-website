/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import 'locomotive-scroll/locomotive-scroll.css';

import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import MouseFollower from 'mouse-follower';
import sticksy from 'sticksy';

export function initializeGlobal() {
  // Locomotive Scroll
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      lerp: 0.1,
      duration: 0.7,
      wheelMultiplier: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    },
  });

  //Mouse Plugin
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower({});

  const el = document.querySelectorAll('.h1-main-home');
  el.forEach(function (element) {
    element.addEventListener('mouseenter', () => {
      cursor.setImg;
    });

    element.addEventListener('mouseleave', () => {
      cursor.removeImg();
    });
  });

  new WordPlay({
    className: 'h1-main-home',
    mode: 'letter',
    offset: 100,
    speed: 0.7,
    delay: 0.025,
  });
}
