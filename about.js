const menuButton = document.querySelector('.menu');
const navLinks = document.querySelector('header .links');

menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('mobile-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('mobile-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
