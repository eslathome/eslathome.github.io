// script.js

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.transform = 'scale(1.05)';
      section.style.boxShadow = '0 0 25px #00e5c4';
    });
    section.addEventListener('mouseleave', () => {
      section.style.transform = 'scale(1)';
      section.style.boxShadow = '';
    });
  });
});
