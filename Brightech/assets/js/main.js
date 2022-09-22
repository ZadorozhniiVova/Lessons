"use strict"

var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  spaceBetween: 20,
  grabCursor: true,
  rewind: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    600: {
        slidesPerView: 2,
    },
    968: {
        slidesPerView: 3,
    },
    // 1440: {
    //     slidesPerView: 3,
    // },
    
  },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
