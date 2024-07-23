/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sticksy from 'sticksy';

export function initializeScrollEffect() {
  // Configuração do Sticksy
  const stickyConfig = {
    topSpacing: 90,
    listen: true,
  };
  const stickyEl = new Sticksy('.visual_text_left_elements', stickyConfig);

  // Seleciona todos os elementos com a classe "text_elements_item"
  const items = document.querySelectorAll('.text_elements_item');
  const section = document.querySelector('.section_about');

  // Função para verificar se um elemento está visível na viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Função para atualizar as cores dos elementos
  function updateColors() {
    const sectionRect = section.getBoundingClientRect();
    const sectionHeight = sectionRect.height;
    const scrollProgress = Math.max(
      0,
      Math.min(1, -sectionRect.top / (sectionHeight - window.innerHeight))
    );

    items.forEach((item, index) => {
      const itemProgress = (index + 1) / items.length;
      if (scrollProgress > itemProgress) {
        item.style.backgroundColor = 'black';
        item.style.color = 'white';
      } else {
        item.style.backgroundColor = 'transparent';
        item.style.color = 'black';
      }
    });
  }

  // Adiciona o evento de scroll
  window.addEventListener('scroll', updateColors);

  // Chama a função inicialmente para configurar as cores corretas
  updateColors();
}
