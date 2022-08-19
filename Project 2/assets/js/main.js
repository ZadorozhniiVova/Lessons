"use strict"


$(function(){

  $('.main__container-slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true
  })

  let slider = $('.main__container-slider')

  function createCard(img,title,text,logo,name,date){
    $(`<div class="slider__item"></div>`).appendTo($('.main__container-slider'));
    $(`<img class="slider__item-img" src=${img}>`).appendTo($('.slider__item'))

  }
  createCard("./assets/img/kittensmall.png",'KITTY', '')






  // // SLIDER

  //   $(".top-slider").slick({
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     dotsClass: 'slick-dots top-dots',
  //   }),
    

  //   $('.left').click(function(){
  //     $('.products__slider').slick('slickPrev');
  //   })
    
  //   $('.right').click(function(){
  //     $('.products__slider').slick('slickNext');
  //   })

  //   $('.left__partners').click(function(){
  //     $('.partners__slider').slick('slickPrev');
  //   })
    
  //   $('.right__partners').click(function(){
  //     $('.partners__slider').slick('slickNext');
  //   })



})
    
