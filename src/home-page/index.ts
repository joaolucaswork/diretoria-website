//mport 'plyr/dist/plyr.css';
import '../styles/index.scss';

// import Swiper and modules styles
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { initializeformCode } from './formCode';
import { initializeMarqueeAnimation } from './iconsRotacao';
import { initializedragEffect } from './priceAnimation';

gsap.registerPlugin(Flip, ScrollTrigger, CustomEase);

initializeformCode();
initializeMarqueeAnimation();
initializedragEffect();
