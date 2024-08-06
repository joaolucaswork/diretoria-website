/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import MouseFollower from 'mouse-follower';
import SplitType from 'split-type';

export function initializeglobalCode() {
  const locomotiveScroll = new LocomotiveScroll();

  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower();

  // Inicializa o SplitType
  new SplitType('[text-split]', { types: 'words,chars', tagName: 'span' });

  // Função principal
  $("[hoverstagger='link']").each(function () {
    const text1 = $(this).find("[hoverstagger='text']").eq(0);
    const text2 = $(this).find("[hoverstagger='text']").eq(1);

    // Função attr incorporada
    const attr = function (defaultVal, attrVal) {
      if (typeof attrVal !== 'string' || attrVal.trim() === '') return defaultVal;
      if (attrVal === 'true' && typeof defaultVal === 'boolean') return true;
      if (attrVal === 'false' && typeof defaultVal === 'boolean') return false;
      if (isNaN(attrVal) && typeof defaultVal === 'string') return attrVal;
      if (!isNaN(attrVal) && typeof defaultVal === 'number') return +attrVal;
      return defaultVal;
    };

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
