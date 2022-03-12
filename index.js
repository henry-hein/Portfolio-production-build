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

// SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active');
    }
  })
}