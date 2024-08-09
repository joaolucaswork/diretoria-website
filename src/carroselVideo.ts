/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Plyr from 'plyr';

export function initializeCarroselVideo() {
  interface PlyrInstance extends Plyr {
    elements: {
      controls: HTMLElement;
    };
  }

  const players: PlyrInstance[] = Array.from(document.querySelectorAll('video')).map(
    (video: HTMLVideoElement) => {
      const player: PlyrInstance = new Plyr(video, {
        clickToPlay: true,
        controls: ['volume', 'fullscreen', 'play-large', 'play', 'pip'],
        loop: { active: true },
        hideControls: true,
        controlsTimeout: 2000,
        tooltips: { controls: false, seek: false },
      }) as PlyrInstance;

      if (player.elements.controls) {
        player.elements.controls.style.display = 'none';

        player.on('play', () => {
          player.elements.controls.style.display = 'flex';
          players.forEach((p) => p !== player && p.pause());
        });

        const hideControls = (): void => {
          player.elements.controls.style.display = 'none';
        };

        player.on('pause', hideControls);
        player.on('ended', hideControls);
      }

      return player;
    }
  );
}
