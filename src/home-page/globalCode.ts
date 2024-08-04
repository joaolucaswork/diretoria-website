/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

//import gsap from 'gsap';

export function initializeGlobal() {
  new WordPlay({
    className: 'h1-main-home',
    mode: 'letter',
    offset: 100,
    speed: 0.7,
    delay: 0.025,
  });
}
