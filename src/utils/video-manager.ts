// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Plyr from 'plyr';

export const videoManager = () => {
  let player = null; // Declare player variable

  // Function to initialize Plyr
  const initializePlyr = () => {
    player = new Plyr('#player', {
      controls: [],
      loop: { active: true },
      keyboard: { global: true },
      tooltips: { controls: true, seek: true },
    });

    // Slider de volume
    const volumeSlider = document.querySelector('.volume-slider');
    volumeSlider.addEventListener('input', function () {
      player.volume = parseFloat(this.value);
    });

    // Atualiza a posição do slider de volume com base no volume do Plyr
    player.on('volumechange', () => {
      volumeSlider.value = player.volume;
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
      trigger.addEventListener('click', function () {
        player.togglePlay();
        updateUIOnPlayState(player.playing);
        this.classList.toggle('hide_video_play', player.playing);
      });
    });

    // Manipula eventos do player
    player.on('play', () => updateUIOnPlayState(true));
    player.on('pause', () => updateUIOnPlayState(false));

    // Função para alternar o som do Plyr e a visibilidade dos ícones
    const toggleMute = () => {
      player.muted = !player.muted;
      document.querySelector('.sound_enable').style.display = player.muted ? 'none' : 'block';
      document.querySelector('.sound_mute').style.display = player.muted ? 'block' : 'none';
    };

    // Exemplo de uso
    document.querySelector('.icon-change').addEventListener('click', toggleMute);

    // Define o estado inicial dos ícones
    toggleMute();

    // Função para atualizar os ícones de reprodução com base no estado de reprodução do Plyr
    const updatePlayIcons = () => {
      const playIcon = document.querySelector('.play_state');
      const pauseIcon = document.querySelector('.pause_state');
      const minIcon = document.querySelector('.minimizar');
      const maxIcon = document.querySelector('.maximizar');

      if (player.playing) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        minIcon.style.display = 'none';
        maxIcon.style.display = 'block';
      } else {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        maxIcon.style.display = 'none';
        minIcon.style.display = 'block';
      }
    };

    // Adiciona eventos ao Plyr para quando o estado de reprodução muda
    player.on('play', updatePlayIcons);
    player.on('pause', updatePlayIcons);

    // Define o estado inicial dos ícones quando o documento é carregado
    document.addEventListener('DOMContentLoaded', updatePlayIcons);
  };

  // Initialize Plyr on page load
  document.addEventListener('DOMContentLoaded', initializePlyr);
};
