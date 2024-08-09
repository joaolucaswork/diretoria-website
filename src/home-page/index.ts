import 'plyr/dist/plyr.css';
import '../styles/index.scss';

import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { initializeCarroselVideo } from './carroselVideo';
import { initializeformCode } from './formCode';
import { initializeglobalCode } from './globalCode';
import { initializeMarqueeAnimation } from './iconsRotacao';
import { initializeScrollEffect } from './missaoAnimation';
import { initializedragEffect } from './priceAnimation';
import { initializeVideoPlayer } from './videoPlayer';
import { initializeVideoTransitionAnimation } from './videoTransitionAnimation';

gsap.registerPlugin(Flip, ScrollTrigger, CustomEase);

initializeVideoPlayer();
initializeformCode();
initializeMarqueeAnimation();
initializeVideoTransitionAnimation();
initializeglobalCode();
initializeScrollEffect();
initializedragEffect();
initializeCarroselVideo();
