const menuBtn = document.getElementById('toggleMenu');

const menu = document.getElementById('menu-mobile');
const menuItems = document.querySelectorAll('.menu-mobile a');

menuBtn.addEventListener('click', (e) => {
  e.preventDefault();

  menu.classList.toggle('show-on-mobile');
});

const hideMenuMobile = () => {
  menu.classList.remove('show-on-mobile');
};

menuItems.forEach((item) => item.addEventListener('click', hideMenuMobile));
