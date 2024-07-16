/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import sticksy from 'sticksy';
import Typed from 'typed.js';

export const pageEffects = () => {
  // Configuração do Typed.js
  const typedConfig = {
    strings: ['Assistir Showreel.', 'Entre no ritmo.', 'Sinta essa vibe', 'Diretoria MH'],
    typeSpeed: 10,
    backSpeed: 20,
    loop: true,
    showCursor: false,
  };

  const typed = new Typed('#textElement', typedConfig);

  // Configuração do Sticksy
  const stickyConfig = { topSpacing: 40 };
  const stickyEl = new Sticksy('.js-sticky-widget', stickyConfig);

  // Função para alternar classes de efeito
  const toggleEffectClass = (add) => {
    const method = add ? 'add' : 'remove';
    const selectors = [
      '.unit_lens_inner.xsmall',
      '.unit_lens_inner.small',
      '.unit_lens_inner.xmedium',
      '.unit_lens_inner.medium',
      '.lens_center_visual',
    ];

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.classList[method](selector.includes('lens_center_visual') ? 'active' : 'effect');
      });
    });
  };

  // Callback para mudanças de estado do Sticksy
  stickyEl.onStateChanged = (state) => {
    toggleEffectClass(state === 'fixed');
  };
};
