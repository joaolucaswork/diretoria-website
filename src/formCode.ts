/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export function initializeformCode() {
  // Campos UTM
  window.onload = () =>
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach(
      (field) =>
        (document.getElementById(field).value =
          new URLSearchParams(location.search).get(field.toLowerCase()) || '')
    );

  // Mascara telefone
  document.querySelector('[data-js="input"]').oninput = (e) =>
    (e.target.value = e.target.value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1'));
}
