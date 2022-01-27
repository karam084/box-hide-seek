const closeMenu = document.querySelectorAll('ul.mobile-menu-toggle > li');

closeMenu.forEach((element) => {
  element.addEventListener('click', () => {
    const overlay = document.querySelector('.menu-overlay');
    overlay.classList.toggle('hide-menu');

    const hamburgerMenu = document.querySelector('button > .mobile-menu');
    hamburgerMenu.classList.toggle('hide-hamburger');
  });
});
