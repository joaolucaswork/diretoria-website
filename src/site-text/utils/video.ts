// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

import Plyr from 'plyr';

export const videoWaves = () => {
  const players = Array.from(document.querySelectorAll('.video_play')).map(
    (video) => new Plyr(video, { controls: [] })
  );
  const playButtons = document.querySelectorAll('.play_button');
  const videoWrappers = document.querySelectorAll('.video_wrapper');
  const videosListWrapper = document.querySelector('.videos_list_wrapper');

  const flipState = Flip.getState(videoWrappers);

  let currentPlayingVideoContainer = null;

  players.forEach((player, index) => {
    const button = playButtons[index];
    const caption = button.querySelector('.play_button_caption');
    const wrapper = videoWrappers[index];
    const videoContainer = wrapper.querySelector('.video_container');

    button.addEventListener('click', () => {
      if (player.playing) {
        player.pause();
        caption.textContent = 'play';
        button.classList.remove('active');
        gsap.to(videoContainer, { scale: 1, duration: 0.1 });
      } else {
        players.forEach((p, i) => {
          if (p !== player) {
            if (p.playing) {
              p.pause();
              const otherButton = playButtons[i];
              otherButton.querySelector('.play_button_caption').textContent = 'play';
              otherButton.classList.remove('active');
              videoWrappers[i].classList.add('disabled');
            }
          }
        });

        if (currentPlayingVideoContainer) {
          gsap.to(currentPlayingVideoContainer, { scale: 1, duration: 0.1 });
        }

        player.play();
        caption.textContent = 'pause';
        button.classList.add('active');
        wrapper.classList.remove('disabled');

        videosListWrapper.insertBefore(
          wrapper,
          videosListWrapper.children[Math.floor(videoWrappers.length / 2)]
        );

        gsap.to(videoContainer, { scale: 1.1, duration: 0.1 });

        currentPlayingVideoContainer = videoContainer;
      }
    });
  });
};
