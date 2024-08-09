/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

//import Plyr from 'plyr';

let player;

export function initializeVideoPlayer() {
  player = new Plyr('.video_bg-plyr', {
    controls: ['volume', 'fullscreen', 'play-large', 'play'],
    loop: { active: false },
  });

  return player;
}

export function getPlayer() {
  return player;
}
