/* =============================================
   RASP Automação — Scroll Animations
   Parallax, Reveal, Entry Effects
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  initParallax();
});

/* Subtle Parallax on Hero */
function initParallax() {
  const heroBg = document.querySelector('.hero-bg img');
  if (!heroBg) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const heroHeight = document.querySelector('.hero')?.offsetHeight || 0;

        if (scrolled < heroHeight) {
          heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
        }

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}
