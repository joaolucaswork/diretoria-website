import 'plyr/dist/plyr.css';
import '../styles/index.scss';

import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { initializeGlobal } from './globalCode';
import { initializeScrollFlipAnimation } from './heroAnimation';
import { initializeMarqueeAnimation } from './iconsRotacao';
import { initializeHoverStaggerEffect } from './linkAnimation';
import { initializeScrollEffect } from './missaoAnimation';
import { initializedragEffect } from './priceAnimation';
import { initializeTextSplitting } from './textSplitting';
import { initializeVideoPlayer } from './videoPlayer';
import { initializeVideoTransitionAnimation } from './videoTransitionAnimation';

gsap.registerPlugin(Flip, ScrollTrigger, CustomEase);

initializeVideoPlayer();
initializeMarqueeAnimation();
initializeTextSplitting();
initializeHoverStaggerEffect();
initializeScrollFlipAnimation();
initializeVideoTransitionAnimation();
initializeGlobal();
initializeScrollEffect();
initializedragEffect();
