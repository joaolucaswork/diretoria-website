/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// import { gsap } from 'gsap';
// import { Flip } from 'gsap/Flip';
//import { ScrollTrigger } from 'gsap/ScrollTrigger';

//import { attr } from './utils';

export function initializeScrollFlipAnimation() {
  /*
  gsap.registerPlugin(ScrollTrigger, Flip);
  ScrollTrigger.normalizeScroll(true);

  $("[tr-scrollflip-element='component']").each(function (index) {
    const componentEl = $(this);
    const originEl = componentEl.find("[tr-scrollflip-element='origin']");
    const targetEl = componentEl.find("[tr-scrollflip-element='target']");
    const scrubStartEl = componentEl.find('[tr-scrollflip-scrubstart]');
    const scrubEndEl = componentEl.find('[tr-scrollflip-scrubend]');

    const settings = {
      start: attr('top top', scrubStartEl.attr('tr-scrollflip-scrubstart')),
      end: attr('bottom bottom', scrubEndEl.attr('tr-scrollflip-scrubend')),
      staggerSpeed: attr(0, componentEl.attr('tr-scrollflip-staggerspeed')),
      staggerDirection: attr('start', componentEl.attr('tr-scrollflip-staggerdirection')),
      scale: attr(false, componentEl.attr('tr-scrollflip-scale')),
      breakpoint: attr(0, componentEl.attr('tr-scrollflip-breakpoint')),
    };

    originEl.each((i, el) => {
      const flipId = `${index}-${i}`;
      $(el).attr('data-flip-id', flipId);
      targetEl.eq(i).attr('data-flip-id', flipId);
    });

    function createTimeline() {
      $('body').addClass('scrollflip-relative');
      gsap.matchMedia().add(`(min-width: ${settings.breakpoint}px)`, () => {
        const state = Flip.getState(originEl);
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: scrubStartEl,
            endTrigger: scrubEndEl,
            start: settings.start,
            end: settings.end,
            scrub: true,
          },
        });
        timeline.add(
          Flip.from(state, {
            targets: targetEl,
            scale: settings.scale,
            stagger: { amount: settings.staggerSpeed, from: settings.staggerDirection },
          })
        );
      });
      $('body').removeClass('scrollflip-relative');
    }

    createTimeline();
    window.addEventListener('resize', gsap.debounce(createTimeline, 250));
  });
  */
}
