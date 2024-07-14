// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';
import { Observer } from 'gsap/Observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Typed from 'typed.js';

gsap.registerPlugin(Flip, ScrollTrigger, Observer, TextPlugin, CustomEase);

export const pageEffects = () => {
  const typed = new Typed('#textElement', {
    strings: ['Assistir Showreel.', 'Entre no ritmo.', 'Sinta essa vibe', 'Diretoria MH'],
    typeSpeed: 10,
    backSpeed: 20,
    loop: true,
    showCursor: false,
  });
};
