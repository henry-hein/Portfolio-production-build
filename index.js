// MENU SHOW & HIDE
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// SHOW
toggleMenu.addEventListener('click', () => {
  navMenu.classList.add('show');
})

// HIDE
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
})

// CLOSE MENU
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('show');
}))