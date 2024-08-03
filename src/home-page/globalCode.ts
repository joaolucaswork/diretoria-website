/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import 'locomotive-scroll/locomotive-scroll.css';

import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import MouseFollower from 'mouse-follower';

export function initializeGlobal() {
  // Locomotive Scroll
  const locomotiveScroll = new LocomotiveScroll({});

  //Mouse Plugin
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower({});

  const el = document.querySelectorAll('.your-button');

  new WordPlay({
    className: 'h1-main-home',
    mode: 'letter',
    offset: 100,
    speed: 0.7,
    delay: 0.025,
  });
}
