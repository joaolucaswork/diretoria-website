export function initializeIntersectionObservers() {
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
        document.querySelectorAll('.button_main').forEach((btn) => btn.classList.remove('scroll'));
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section_contato').forEach((el) => contactObserver.observe(el));
  document.querySelectorAll('.section_main_hero').forEach((el) => heroObserver.observe(el));
}
