document.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    header.style.backgroundColor = '#606b74';
    header.style.height = '105px';
    header.style.opacity = '0.8';
    header.style.transform = 'translateY(-30%)';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.height = '105px';
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var mobileMenu = document.getElementById('mobile-menu');
  var menuList = document.querySelector('.menu__list');
  var menuItems = document.querySelectorAll('.menu__item');

  mobileMenu.addEventListener('click', function () {
    menuList.classList.toggle('show');
  });

  // Close the menu when a menu item is clicked
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      menuList.classList.remove('show');
    });
  });
});

const slider = document.querySelector('.photo__slider');
let counter = 0;

function nextSlide() {
  counter = (counter + 1) % 4;
  updateSlider();
}

function updateSlider() {
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = 'translateX(' + -counter * 100 + '%)';
}