// For Nav
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});
// for Home
const scrollElements = document.querySelectorAll('.intro, .bridge-box, .bridge-facts li');

function elementInView(el, offset = 100) {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop < window.innerHeight - offset;
}

function displayScrollElement(el) {
  el.classList.add('reveal-visible');
}

function handleScrollAnimation() {
  scrollElements.forEach(el => {
    if (elementInView(el)) {
      displayScrollElement(el);
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// for about us animation
const boxes = document.querySelectorAll('.text-box');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

boxes.forEach(box => observer.observe(box));
// Contact Page Scroll Animation
const contactScrollElements = document.querySelectorAll('.contact-hero, .contact-form');

function elementInView(el, offset = 100) {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop < window.innerHeight - offset;
}

function displayScrollElement(el) {
  el.classList.add('reveal-visible');
}

function handleContactScrollAnimation() {
  contactScrollElements.forEach(el => {
    if (elementInView(el)) {
      displayScrollElement(el);
    }
  });
}

// Event listeners
window.addEventListener('scroll', handleContactScrollAnimation);
window.addEventListener('load', handleContactScrollAnimation);

