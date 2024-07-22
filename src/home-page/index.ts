import 'plyr/dist/plyr.css';
import '../styles/index.scss';

import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { initializeGlobal } from './globalCode';
import { initializeHoverStaggerEffect } from './hoverStaggerEffect';
import { initializeIntersectionObservers } from './intersectionObservers';
import { initializeMarqueeAnimation } from './marqueeAnimation';
import { initializeScrollEffect } from './scrollEffect';
import { initializeScrollFlipAnimation } from './scrollFlipAnimation';
import { initializeTextSplitting } from './textSplitting';
import { initializeVideoPlayer } from './videoPlayer';
import { initializeVideoTransitionAnimation } from './videoTransitionAnimation';

gsap.registerPlugin(Flip, ScrollTrigger, CustomEase);

initializeVideoPlayer();
initializeMarqueeAnimation();
initializeTextSplitting();
initializeHoverStaggerEffect();
initializeIntersectionObservers();
initializeScrollFlipAnimation();
initializeVideoTransitionAnimation();
initializeGlobal();
initializeScrollEffect();
