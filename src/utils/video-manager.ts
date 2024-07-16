// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Plyr from 'plyr';

export const videoManager = () => {
  let player = null;

  // Função para inicializar Plyr
  const initializePlyr = () => {
    player = new Plyr('#player', {
      controls: [],
      loop: { active: true },
      keyboard: { global: true },
      tooltips: { controls: true, seek: true },
    });

    // Slider de volume
    const volumeSlider = document.querySelector('.volume-slider');
    const volumeIcons = document.querySelector('.icon-change');

    const updateVolumeIcons = () => {
      const soundEnable = document.querySelector('.sound_enable');
      const soundMute = document.querySelector('.sound_mute');
      const { volume } = player;
      const isMuted = player.muted;

      if (isMuted || volume === 0) {
        soundEnable.style.display = 'none';
        soundMute.style.display = 'flex';
        volumeIcons.style.opacity = '0.5';
      } else {
        soundEnable.style.display = 'flex';
        soundMute.style.display = 'none';
        volumeIcons.style.opacity = '1';
      }
    };

    volumeSlider.addEventListener('input', () => {
      const volume = parseFloat(volumeSlider.value);
      player.volume = volume;
      player.muted = volume === 0;
      updateVolumeIcons();
    });

    // Atualiza a posição do slider de volume com base no volume do Plyr
    player.on('volumechange', () => {
      volumeSlider.value = player.muted ? 0 : player.volume;
      updateVolumeIcons();
    });

    // Atualiza a interface do usuário com base no estado de reprodução
    const updateUIOnPlayState = (isPlaying) => {
      const elementsToToggle = [
        ['.form_overlay', 'hide-overlay'],
        ['.background_video_wrapper', 'full-opacity'],
        ['.lines_visual', 'hide_lines'],
        ['.player_asset', 'hide-text'],
        ['.visual_left', 'hide-text'],
        ['.heading_visual', 'hide-video'],
        ['.custom-play-min', 'hide', !isPlaying],
        ['.controls', 'playing'],
      ];
      elementsToToggle.forEach(([selector, className, condition = isPlaying]) => {
        document
          .querySelectorAll(selector)
          .forEach((element) => element.classList.toggle(className, condition));
      });
    };

    // Alterna reprodução/pausa e atualiza a interface visual
    document.querySelectorAll('.play-video.full').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        player.togglePlay();
        updateUIOnPlayState(player.playing);
        trigger.classList.toggle('hide_video_play', player.playing);
      });
    });

    // Manipula eventos do player
    player.on('play', () => updateUIOnPlayState(true));
    player.on('pause', () => updateUIOnPlayState(false));

    // Função para alternar o som do Plyr e a visibilidade dos ícones
    const toggleMute = () => {
      player.muted = !player.muted;
      if (!player.muted && player.volume === 0) {
        player.volume = 0.5; // Define um volume padrão se estiver em 0
      }
      updateVolumeIcons();
    };

    // Adiciona evento para alternar o som
    volumeIcons.addEventListener('click', toggleMute);

    // Atualiza ícones de reprodução com base no estado de reprodução do Plyr
    const updatePlayIcons = () => {
      const playIcon = document.querySelector('.play_min_control');
      const pauseIcon = document.querySelector('.pause_state');
      const minIcon = document.querySelector('.minimizar');
      const maxIcon = document.querySelector('.maximizar');
      const isPlaying = player.playing;
      playIcon.style.display = isPlaying ? 'none' : 'flex';
      pauseIcon.style.display = isPlaying ? 'flex' : 'none';
      minIcon.style.display = isPlaying ? 'none' : 'block';
      maxIcon.style.display = isPlaying ? 'block' : 'none';
    };

    // Adiciona eventos ao Plyr para quando o estado de reprodução muda
    player.on('play', updatePlayIcons);
    player.on('pause', updatePlayIcons);

    // Define o estado inicial dos ícones quando o documento é carregado
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.play_min_control').style.display = 'none';
      updatePlayIcons();
      updateVolumeIcons();
    });
  };

  // Inicializa o Plyr ao carregar a página
  document.addEventListener('DOMContentLoaded', initializePlyr);
};
