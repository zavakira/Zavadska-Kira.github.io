const aboutBg = document.querySelector('.about-bg');
const aboutCard = document.querySelector('.about-card');

window.addEventListener('scroll', () => {
  const rect = aboutCard.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const scrolled = (windowHeight - rect.top) / (windowHeight + rect.height);
  const offset = (scrolled - 0.5) * 700;

  aboutBg.style.transform = `translateY(${offset}px)`;
});


const heroPhotos = document.querySelectorAll('.hero-photo');
const heroSection = document.querySelector('.hero');

// додаємо hidden при завантаженні
heroPhotos.forEach(photo => photo.classList.add('hidden'));

// через маленьку затримку прибираємо hidden — фото влітають
setTimeout(() => {
  heroPhotos.forEach((photo, i) => {
    const isBalcon = photo.classList.contains('hero_balcon');
    const isBlue = photo.classList.contains('hero_blue');
    const delay = isBalcon ? 800 : isBlue ? 700 : i * 150;
    setTimeout(() => {
      photo.classList.remove('hidden');
    }, delay);
  });
}, 300);

// при скролі
function animateHeroScroll() {
  const rect = heroSection.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, -rect.top / window.innerHeight));

  if (progress > 0.3) {
    heroPhotos.forEach(photo => photo.classList.add('hidden'));
  } else {
    heroPhotos.forEach(photo => photo.classList.remove('hidden'));
  }
}

window.addEventListener('scroll', animateHeroScroll);
const routesDecorations = document.querySelectorAll('.routes-shoes, .routes-coctail');

routesDecorations.forEach(el => el.classList.add('hidden'));

const routesHeader = document.querySelector('.routes-header');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      routesDecorations.forEach((el, i) => {
        setTimeout(() => {
          el.classList.remove('hidden');
        }, i * 200);
      });
    } else {
      routesDecorations.forEach(el => el.classList.add('hidden'));
    }
  });
}, { threshold: 0.7 });

observer.observe(routesHeader);

const routeImages = document.querySelectorAll('.route-place-img');

routeImages.forEach(img => {
    img.classList.add('img-hidden');
});

const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('img-hidden');
            imgObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

routeImages.forEach(img => imgObserver.observe(img));



const footerHorse = document.querySelector('.footer-horse');

if (footerHorse) {
    footerHorse.classList.add('horse-hidden');

    const horseObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerHorse.classList.remove('horse-hidden');
            } else {
                footerHorse.classList.add('horse-hidden');
            }
        });
    }, { threshold: 0.3 });

    horseObserver.observe(footerHorse);
}