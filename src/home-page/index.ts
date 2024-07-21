/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import './style/index.scss';
import 'locomotive-scroll/locomotive-scroll.css';

//Smooth Scroll Plugin
import LocomotiveScroll from 'locomotive-scroll';

import { siteEffects } from './utils/site-effect';

// Locomotive Scroll Instance
const locomotiveScroll = new LocomotiveScroll({
  lenisOptions: {
    lerp: 0.1,
    duration: 0.7,
    wheelMultiplier: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  },
});

siteEffects();
