/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import MouseFollower from 'mouse-follower';

export function initializeglobalCode() {
  const locomotiveScroll = new LocomotiveScroll();

  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower();
}
