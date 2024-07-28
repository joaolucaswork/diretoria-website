/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sticksy from 'sticksy';

export function initializeScrollEffect() {
  // Configuração do Sticksy
  const stickyConfig = {
    topSpacing: 40,
    listen: true,
  };
  const stickyEl = new Sticksy('.visual_text_left_elements', stickyConfig);

  stickyEl.onStateChanged = function (state) {
    if (state === 'fixed') {
      stickyEl.nodeRef.classList.add('widget--sticky');
    } else {
      stickyEl.nodeRef.classList.remove('widget--sticky');
    }
  };

  // CONFIGURAÇÃO DE SCROLL ANCORA
  // Certifique-se de incluir os scripts do GSAP e ScrollTrigger antes deste código
  // <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
  // <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>

  // Registra o plugin ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Seleciona todos os elementos com a classe "text_item"
  const textItems = document.querySelectorAll('.text_item');

  textItems.forEach((textItem, index) => {
    const linkItem = document.querySelector(`.link_ref_item[href="#${textItem.id}"]`);

    ScrollTrigger.create({
      trigger: textItem,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => updateState(textItem, linkItem, true),
      onEnterBack: () => updateState(textItem, linkItem, true),
      onLeave: () => updateState(textItem, linkItem, false),
      onLeaveBack: () => updateState(textItem, linkItem, false),
    });
  });

  function updateState(textItem, linkItem, isActive) {
    if (isActive) {
      textItem.classList.add('active');
      linkItem.classList.add('current');
    } else {
      textItem.classList.remove('active');
      linkItem.classList.remove('current');
    }
  }

  // Adiciona comportamento de rolagem suave aos links de âncora
  document.querySelectorAll('.link_ref_item').forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        gsap.to(window, { duration: 1, scrollTo: targetElement, ease: 'power2.inOut' });
      }
    });
  });
}
