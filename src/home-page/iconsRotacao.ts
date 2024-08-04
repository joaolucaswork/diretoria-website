/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

//import { gsap } from 'gsap';

export function initializeMarqueeAnimation() {
  $('.marquee').each(function () {
    const track = $(this).find('.marquee_track');
    const items = $(this).find('.marquee_item');
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'expo.inOut', duration: 1, delay: 1 },
    });

    items.each((index, item) => {
      tl.to(track, { yPercent: (index + 1) * -100 });
    });

    items.first().clone().appendTo(track);
  });
}
