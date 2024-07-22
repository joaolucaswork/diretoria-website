/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { gsap } from 'gsap';

import { attr } from './utils';

export function initializeHoverStaggerEffect() {
  $("[hoverstagger='link']").each(function () {
    const text1 = $(this).find("[hoverstagger='text']").eq(0);
    const text2 = $(this).find("[hoverstagger='text']").eq(1);
    const duration = attr(0.3, $(this).attr('hoverstagger-duration'));
    const staggerDuration = duration * 0.6666666667;

    const tl = gsap.timeline({ paused: true });
    tl.to(text1.find('.char'), {
      yPercent: -100,
      duration,
      stagger: { amount: staggerDuration },
    });
    tl.from(
      text2.find('.char'),
      {
        yPercent: 100,
        duration,
        stagger: { amount: staggerDuration },
      },
      0
    );

    $(this).on('mouseenter', () => tl.restart());
  });
}
