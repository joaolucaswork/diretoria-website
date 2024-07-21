/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import 'plyr/dist/plyr.css';

import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Plyr from 'plyr';
import SplitType from 'split-type';

gsap.registerPlugin(Flip, ScrollTrigger, CustomEase);

export const siteEffects = () => {
  // Variável global para o player Plyr
  let player;

  // Função utilitária para análise de atributos
  function attr(defaultVal, attrVal) {
    if (typeof attrVal !== 'string' || attrVal.trim() === '') return defaultVal;
    if (attrVal === 'true' && typeof defaultVal === 'boolean') return true;
    if (attrVal === 'false' && typeof defaultVal === 'boolean') return false;
    if (isNaN(attrVal) && typeof defaultVal === 'string') return attrVal;
    if (!isNaN(attrVal) && typeof defaultVal === 'number') return +attrVal;
    return defaultVal;
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Inicialização do Plyr
    player = new Plyr('#player', {
      clickToPlay: false,
      controls: [],
      loop: { active: true },
    });

    // Animação do Marquee
    $('.marquee').each(function () {
      const track = $(this).find('.marquee_track');
      const items = $(this).find('.marquee_item');
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: 'expo.inOut', duration: 1, delay: 1 },
      });

      items.each((index, item) => {
        tl.to(track, { yPercent: (index + 1) * -100 });
      });

      items.first().clone().appendTo(track);
    });

    // Divisão de texto
    new SplitType('[text-split]', { types: 'words,chars', tagName: 'span' });

    // Efeito de hover escalonado
    $("[hoverstagger='link']").each(function () {
      const text1 = $(this).find("[hoverstagger='text']").eq(0);
      const text2 = $(this).find("[hoverstagger='text']").eq(1);
      const duration = attr(0.3, $(this).attr('hoverstagger-duration'));
      const staggerDuration = duration * 0.6666666667;

      const tl = gsap.timeline({ paused: true });
      tl.to(text1.find('.char'), {
        yPercent: -100,
        duration,
        stagger: { amount: staggerDuration },
      });
      tl.from(
        text2.find('.char'),
        {
          yPercent: 100,
          duration,
          stagger: { amount: staggerDuration },
        },
        0
      );

      $(this).on('mouseenter', () => tl.restart());
    });

    // Intersection Observer para classes de botão e seção
    const observerOptions = { threshold: 0 };

    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.button_main').forEach((btn) => btn.classList.add('scroll'));
          document
            .querySelectorAll('.section_main_hero')
            .forEach((section) => section.classList.remove('scroll'));
        }
      });
    }, observerOptions);

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelectorAll('.button_main')
            .forEach((btn) => btn.classList.remove('scroll'));
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section_contato').forEach((el) => contactObserver.observe(el));
    document.querySelectorAll('.section_main_hero').forEach((el) => heroObserver.observe(el));

    // Scroll Flip
    gsap.registerPlugin(ScrollTrigger, Flip);
    ScrollTrigger.normalizeScroll(true);

    $("[tr-scrollflip-element='component']").each(function (index) {
      const componentEl = $(this);
      const originEl = componentEl.find("[tr-scrollflip-element='origin']");
      const targetEl = componentEl.find("[tr-scrollflip-element='target']");
      const scrubStartEl = componentEl.find('[tr-scrollflip-scrubstart]');
      const scrubEndEl = componentEl.find('[tr-scrollflip-scrubend]');

      const settings = {
        start: attr('top top', scrubStartEl.attr('tr-scrollflip-scrubstart')),
        end: attr('bottom bottom', scrubEndEl.attr('tr-scrollflip-scrubend')),
        staggerSpeed: attr(0, componentEl.attr('tr-scrollflip-staggerspeed')),
        staggerDirection: attr('start', componentEl.attr('tr-scrollflip-staggerdirection')),
        scale: attr(false, componentEl.attr('tr-scrollflip-scale')),
        breakpoint: attr(0, componentEl.attr('tr-scrollflip-breakpoint')),
      };

      originEl.each((i, el) => {
        const flipId = `${index}-${i}`;
        $(el).attr('data-flip-id', flipId);
        targetEl.eq(i).attr('data-flip-id', flipId);
      });

      function createTimeline() {
        $('body').addClass('scrollflip-relative');
        gsap.matchMedia().add(`(min-width: ${settings.breakpoint}px)`, () => {
          const state = Flip.getState(originEl);
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: scrubStartEl,
              endTrigger: scrubEndEl,
              start: settings.start,
              end: settings.end,
              scrub: true,
            },
          });
          timeline.add(
            Flip.from(state, {
              targets: targetEl,
              scale: settings.scale,
              stagger: { amount: settings.staggerSpeed, from: settings.staggerDirection },
            })
          );
        });
        $('body').removeClass('scrollflip-relative');
      }

      createTimeline();
      window.addEventListener('resize', gsap.debounce(createTimeline, 250));
    });

    // Novo efeito com reprodução de vídeo
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: 'power1.inOut', duration: 1.8 },
      onComplete: () => {
        gsap.set('.your-button', { opacity: 0, visibility: 'hidden' });

        // Reproduzir o vídeo
        if (player && typeof player.play === 'function') {
          player.play();
          // Adicionar classes quando o vídeo está tocando
          $('.nav_logo').addClass('hide');
          $('.close-icon').addClass('playing');
        } else {
          console.warn('Player de vídeo não está pronto ou não tem método play');
        }
      },
    });

    tl.fromTo('.your-div', { height: '25%' }, { height: '100%' });
    tl.fromTo('.your-image', { scale: 1.8 }, { scale: 1 }, '<');

    $('.your-button').on('mousedown touchstart', () => tl.timeScale(1).play());
    $('.your-button').on('mouseup touchend', () => {
      if (tl.progress() < 1) {
        reverseAnimation();
      }
    });

    // Função para reverter a animação e parar o vídeo
    function reverseAnimation() {
      tl.timeScale(2).reverse();

      // Pausar o vídeo se a animação for revertida
      if (player && typeof player.pause === 'function') {
        player.pause();
      }

      // Remover classes quando o vídeo é pausado
      $('.nav_logo').removeClass('hide');
      $('.close-icon').removeClass('playing');

      // Fazer o botão reaparecer
      gsap.set('.your-button', { opacity: 1, visibility: 'visible' });
    }

    // Adicionar evento de clique ao close-icon
    $('.close-icon').on('click', () => {
      if (tl.progress() === 1) {
        reverseAnimation();
      }
    });

    // Atualizar o estado das classes quando o vídeo é pausado ou terminado
    player.on('pause ended', () => {
      $('.nav_logo').removeClass('hide');
      $('.close-icon').removeClass('playing');
      // Fazer o botão reaparecer quando o vídeo é pausado ou termina
      gsap.set('.your-button', { opacity: 1, visibility: 'visible' });
    });
  });
};
