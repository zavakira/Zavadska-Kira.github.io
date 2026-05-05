const aboutBg = document.querySelector('.about-bg');
const aboutCard = document.querySelector('.about-card');

window.addEventListener('scroll', () => {
  const rect = aboutCard.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const scrolled = (windowHeight - rect.top) / (windowHeight + rect.height);
  const offset = (scrolled - 0.5) * 700;

  aboutBg.style.transform = `translateY(${offset}px)`;
});