let navMain = document.querySelector('.main-header__navigation-mobile');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header__navigation-mobile--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__navigation-mobile--closed')) {
    navMain.classList.remove('main-header__navigation-mobile--closed');
    navMain.classList.add('main-header__navigation-mobile--opened');
  } else {
    navMain.classList.add('main-header__navigation-mobile--closed');
    navMain.classList.remove('main-header__navigation-mobile--opened');
  }
});
