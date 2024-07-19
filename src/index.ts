/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import './styles/index.css';
import '../node_modules/plyr/dist/plyr.css';
import '../node_modules/locomotive-scroll/dist/locomotive-scroll.css';

//Smooth Scroll Plugin
import LocomotiveScroll from 'locomotive-scroll';

import { cursoModules } from '$utils/curso-modules';
//TS Files
import { pageEffects } from '$utils/page-effects';
import { videoManager } from '$utils/video-manager';

// Locomotive Scroll Instance
const locomotiveScroll = new LocomotiveScroll({
  lenisOptions: {
    lerp: 0.1,
    duration: 0.7,
    wheelMultiplier: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  },
});

// Add event listener to the div to play the video

//TS Files
pageEffects();
videoManager();
cursoModules();
