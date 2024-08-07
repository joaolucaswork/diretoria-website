/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
let { Dragdealer } = require('dragdealer');

import gsap from 'gsap';

export function initializedragEffect() {
  // Verifica se a largura da tela é maior que 1024px
  if (window.innerWidth > 1024) {
    // Import GSAP (make sure you've included it in your project)
    // Note: Flip plugin is no longer needed

    const cmsItem = $('.position_item');
    const cmsItemLength = cmsItem.length;
    let dragdealer; // Declare dragdealer variable to store the instance

    function changeColor(item) {
      const myColor = item.find('.color').css('background-color');
      $('.handle_fill').css('border-color', myColor);
      $('.handle_back').css('background-color', myColor);
    }

    function updateActiveState(activeItem) {
      // Remove 'active' class from all CMS items and their contact links
      cmsItem.removeClass('active').find('.link_contato').removeClass('active');

      // Add 'active' class to the new active item
      activeItem.addClass('active');

      // Add 'active' class to the contact link of the active item
      activeItem.find('.link_contato').addClass('active');

      changeColor(activeItem);
    }

    changeColor(cmsItem.eq(0));
    updateActiveState(cmsItem.eq(0));

    let lastValue = parseFloat(cmsItem.eq(0).find('.position_salary').text());
    let targetValue = lastValue;
    let animationFrameId = null;

    function smoothInterpolation(target, current, factor = 0.1) {
      return current + (target - current) * factor;
    }

    function animate() {
      lastValue = smoothInterpolation(targetValue, lastValue);
      $('.handle_count').text(lastValue.toFixed(1));

      if (Math.abs(targetValue - lastValue) > 0.1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        lastValue = targetValue;
        $('.handle_count').text(targetValue.toFixed(1));
        animationFrameId = null;
      }
    }

    dragdealer = new Dragdealer('drag-steps', {
      steps: cmsItemLength,
      speed: 0.2,
      loose: false,
      slide: true,
      animationCallback: function (x, y) {
        const exactIndex = x * (cmsItemLength - 1);
        const lowerIndex = Math.floor(exactIndex);
        const upperIndex = Math.ceil(exactIndex);

        if (lowerIndex === upperIndex) {
          targetValue = parseFloat(cmsItem.eq(lowerIndex).find('.position_salary').text());
        } else {
          const lowerValue = parseFloat(cmsItem.eq(lowerIndex).find('.position_salary').text());
          const upperValue = parseFloat(cmsItem.eq(upperIndex).find('.position_salary').text());
          const progress = exactIndex - lowerIndex;
          targetValue = lowerValue + (upperValue - lowerValue) * progress;
        }

        if (!animationFrameId) {
          animate();
        }

        // Update active state
        const activeItemIndex = Math.round(exactIndex);
        updateActiveState(cmsItem.eq(activeItemIndex));
      },
      callback: function (x, y) {
        cmsItem.each(function (index) {
          const currentDecimal = $(this).index() / (cmsItemLength - 1);
          if (x == currentDecimal) {
            updateActiveState($(this));

            const fixedValue = parseFloat($(this).find('.position_salary').text());
            targetValue = fixedValue;
            lastValue = fixedValue;
            $('.handle_count').text(fixedValue.toFixed(1));
          }
        });
      },
      dragStopCallback(x, y) {
        $('.handle_fill').addClass('release');
      },
    });

    $('.handle').on('mousedown touchstart', function () {
      $('.handle_fill').removeClass('release');
    });

    $('.handle').on('mouseup touchend', function () {
      $('.handle_fill').addClass('release');
    });

    // New function to handle mouseover events on CMS items
    cmsItem.on('mouseenter', function () {
      const index = $(this).index();
      const position = index / (cmsItemLength - 1);
      dragdealer.setValue(position);
    });

    // New function to handle mouseout events on CMS items
    cmsItem.on('mouseleave', function () {
      // Do nothing here, as per the requirement to keep the slider at its current position
    });
  }
}
