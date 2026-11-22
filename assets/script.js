const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

nav.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Hello Ramayani Tourism, I am ${data.get('name')}. Phone: ${data.get('phone')}. Travel enquiry: ${data.get('message')}`;
  window.open(`https://wa.me/919929349088?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
