/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sticksy from 'sticksy';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function initializeScrollEffect() {
  // Função para verificar se o dispositivo é móvel
  function isMobile() {
    return window.innerWidth < 768;
  }

  // Só execute o código se não for um dispositivo móvel
  if (!isMobile()) {
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

    // Configuração do ScrollTrigger para os itens de texto
    const textItems = document.querySelectorAll('.text_item');
    const textElementsItems = document.querySelectorAll('.text_elements_item');

    textItems.forEach((textItem, index) => {
      const linkItem = document.querySelector(`.link_ref_item[href="#${textItem.id}"]`);
      const textElementItem = textElementsItems[index];

      ScrollTrigger.create({
        trigger: textItem,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => updateState(textItem, linkItem, textElementItem, true),
        onEnterBack: () => updateState(textItem, linkItem, textElementItem, true),
        onLeave: () => updateState(textItem, linkItem, textElementItem, false),
        onLeaveBack: () => updateState(textItem, linkItem, textElementItem, false),
      });
    });

    function updateState(textItem, linkItem, textElementItem, isActive) {
      if (isActive) {
        textItem.classList.add('active');
        linkItem.classList.add('current');
        if (textElementItem) {
          textElementItem.classList.add('active');
        }
      } else {
        textItem.classList.remove('active');
        linkItem.classList.remove('current');
        if (textElementItem) {
          textElementItem.classList.remove('active');
        }
      }
    }

    // Configuração da marquee sincronizada com o scroll
    $('.marquee_about').each(function () {
      const track = $(this).find('.marquee_track_about');
      const items = $(this).find('.marquee_item_about');

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'expo.inOut', duration: 1 },
      });

      items.each((index, item) => {
        if (index < items.length - 1) {
          tl.to(track, { yPercent: (index + 1) * -100 }, index);
        }
      });

      textItems.forEach((textItem, index) => {
        ScrollTrigger.create({
          trigger: textItem,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            tl.tweenTo(index);
          },
          onEnterBack: () => {
            tl.tweenTo(index);
          },
        });
      });
    });

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
}
