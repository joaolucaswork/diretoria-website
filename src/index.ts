import './styles/index.scss';

import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { initializeformCode } from './formCode';
import { initializeMarqueeAnimation } from './iconsRotacao';
import { initializeScrollEffect } from './missaoAnimation';
import { initializedragEffect } from './priceAnimation';
import { videoSettings } from './videoSettings';

initializeformCode();
videoSettings();
initializeMarqueeAnimation();
initializeScrollEffect();
initializedragEffect();
