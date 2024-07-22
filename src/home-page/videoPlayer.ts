/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Plyr from 'plyr';

let player;

export function initializeVideoPlayer() {
  player = new Plyr('#player', {
    clickToPlay: false,
    controls: [],
    loop: { active: true },
  });

  return player;
}

export function getPlayer() {
  return player;
}
