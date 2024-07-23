/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import dragdealer from 'dragdealer';

export function initializedragEffect() {
  const cmsItem = $('.position_item');
  const cmsItemLength = cmsItem.length;

  function changeColor(item) {
    const myColor = item.find('.color').css('background-color');
    $('.handle_fill').css('border-color', myColor);
    $('.handle_back').css('background-color', myColor);
  }
  changeColor(cmsItem.eq(0));
  cmsItem.eq(0).addClass('active');

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

  new Dragdealer('drag-steps', {
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

      // Atualiza a cor e o item ativo
      cmsItem.removeClass('active');
      const activeItemIndex = Math.round(exactIndex);
      const activeItem = cmsItem.eq(activeItemIndex);
      activeItem.addClass('active');
      changeColor(activeItem);
    },
    callback: function (x, y) {
      cmsItem.each(function (index) {
        const currentDecimal = $(this).index() / (cmsItemLength - 1);
        if (x == currentDecimal) {
          cmsItem.removeClass('active');
          $(this).addClass('active');
          changeColor($(this));

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
}
