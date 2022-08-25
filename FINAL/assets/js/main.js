"use strict"

const stores = "/stores";
const games = "/games";
const platforms = "/platforms"; // две страницы(&page=1)
const url = "https://api.rawg.io/api";
const apiKey = 'key=3d770078d0d8493a8de967ae4f287969';

let marketType = $('#type').val();


$(function () {

  //=====================поиск игры в сторонних магазине (start)
  // $('#search').change(() => {

  //   async function allGames() {
  //     const respGames = await fetch(`${url}${games}?${apiKey}&search=${$('#search').val()}&search_exact=true`)
  //     const respGamesJson = await respGames.json()
  //     let findGames = respGamesJson.results;
  //     let gameList = `<div class="game__list"></div>`
  //     $('.search').append(gameList)

  //     for (let i = 0; i <= findGames.length - 1; i++) {
  //       $('.game__list').append(`<div class="game__list-el">
  //       <div class="game__list-el_bg"><img class="el__bg-img"  src="${findGames[i].background_image}"></div><span class="game__list-el_name"">${findGames[i].name}</span> </div>`)
  //       $('.game__list').css('dislay","flex')


  //       $('.game__list-el').on('click', function (event) {

  //         $('.searchStoreType').html("")
  //         $('#search').val($(event.target).text())
  //         $('.game__list').css("display", "none")

  //         if ($(event.target).text() == findGames[i].name) {

  //           async function findMarket() {
  //             const respStores = await fetch(`${url}${games}/${findGames[i].id}/stores?${apiKey}`)
  //             const respStoresJson = await respStores.json()

  //             if (respStoresJson.results.length > 0) {
  //               for (let g = 0; g < respStoresJson.results.length; g++) {

  //                 async function findMarketId() {
  //                   const respMarket = await fetch(`${url}${stores}?${apiKey}`)
  //                   const respMarketJson = await respMarket.json()
  //                   let results = respMarketJson.results

  //                   for (let n = 0; n < results.length - 1; n++) {

  //                     if (parseInt(respStoresJson.results[g].store_id) === parseInt(results[n].id)) {
  //                       $('.searchStoreType').append(`<option class="searchStoreType__option" value="${results[n].name}">${results[n].name}</option>`)
  //                       $('#type').change(() => {
  //                         console.log($('#type').val())
  //                         console.log(results[n])
  //                         if (results[n].name == $('#type').val()) {
  //                           console.log(results[n].name)
  //                           console.log(`${respStoresJson.results[g].url}`)

  //                           $('#searchButton').attr('href', `${respStoresJson.results[g].url}`) //Добавляем поисковую ссылку
  //                         }
  //                       })
  //                     }
  //                   }
  //                 }
  //                 findMarketId()
  //               }
  //             } else {
  //               alert('no game links')
  //             }
  //           }
  //           findMarket()
  //         }
  //       })
  //     }
  //   }
  //   allGames();
  // })
  //=====================поиск игры в сторонних магазине (end)

  //=====================рандомные номер от 1 до 100 (start)
  let x = Math.floor((Math.random() * 100) + 1);
  //=====================рандомные номер от 1 до 100 (end)

  //=====================рандомный слайдер (start)

  
  async function sliderGames() {
    let sliderItemsID = [326243,27976,647552,494384, 463723,29238, 437059,  490752]
    const respSAdd = await fetch(`${url}${games}?${apiKey}&search=god of war&search_exact=true`)
      const respAddJson = await respSAdd.json()

      console.log(respAddJson)
    for (let id = 0; id < sliderItemsID.length; id++) {
      const respSlider = await fetch(`${url}${games}/${sliderItemsID[id]}?${apiKey}`)
      const respSlderJson = await respSlider.json()

      // console.log(respSlderJson.background_image)
      $('.main__slider-top').append(`
        <div class="main__slider-el slider__el" style="background-image: url(${respSlderJson.background_image})">
          <h2 class="slider__el-name">${respSlderJson.name}</h2> 
        </div>`)
        $('.main__slider-bottom').append(`
        <div class="bottom__slider">
          <h2 class="bottom__slider-name">${respSlderJson.name}</h2>
        </div>`)

        

    }
    $('.main__slider-top').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      infinite: true,
      speed:1000,
    });
    
    $('.main__slider-bottom').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      infinite: true,
      speed:1000,
    });


  }

  sliderGames()
 
  //=====================рандомный слайдер (end)

  // async function allStores(){
  //   const respStores = await fetch(`${url}${stores}?${apiKey}`)
  //   const respStoresJson = await respStores.json()
  //   // console.log('allStores:',respStoresJson)

  //   for(let i = 0; i<respStoresJson.results.length; i++){
  //     // console.log(respStoresJson.results[i].name)
  //     $('.searchStoreType').append(`<option class="searchStoreType__option" value="${respStoresJson.results[i].name}">${respStoresJson.results[i].name}</option>`)
  //   }
  // }
  // allStores();

  // async function allPlatforms(){
  //   const respPlatforms = await fetch(`${url}${platforms}?${apiKey}&page=1`)
  //   const respPlatformsJson = await respPlatforms.json()
  //   console.log('allPlatforms:',respPlatformsJson)
  // }
  // allPlatforms();



  // $('#search').change( () => {    // TO do: сделай чтобы при написании названия в список добавлялись только магазины в которых продается игра, а при выборе магазина изменялась ссылка на кнопке.
  //   // console.log($('#type').val())
  //   // console.log($('#search').val())
  //   let gameName = $('#search').val(); 
  //   // console.log(gameName);
  //   if(gameName !== '' && gameName !== 'undefined'){
  //     async function searchGame(){
  //       const respGame = await fetch(`${url}${games}?${apiKey}`)
  //       const respGameJson = await respGame.json()
  //       // console.log('GamesBy Search:',respGameJson)
  //       if(respGameJson.count > 20){
  //         let totalPages = Math.ceil(respGameJson.count/20) // Кол-во страниц с округлением
  //         //============================================= 
  //         // console.log('GamesBy Search:', totalPages , 'pages by 20 games')
  //         for(let i=1; i <= 500; i++){

  //           const respGame = await fetch(`${url}${games}?${apiKey}&page=${i}`)
  //           const respGameJson = await respGame.json()
  //           for( let k=1;k<respGameJson.results.length; k++){
  //             // console.log(respGameJson.results[k].name)
  //             if(respGameJson.results[k].name == gameName){
  //               // console.log(respGameJson.results[k]);
  //               // console.log(respGameJson.results[k].id) // Нашел Id игры
  //               //=============================================================================
  //               const respStores = await fetch(`${url}${games}/${respGameJson.results[k].id}/stores?${apiKey}`)
  //               const respStoresJson = await respStores.json()
  //               // console.log(respStoresJson.results.name) 
  //               for(let g = 0; g< respStoresJson.results.length; g++){

  //                 console.log(respStoresJson.results[g].url) //Нашли ссылки на магазины с игрой
  // }
  //                 //============================================================================


  //                 async function findMarketId(){
  //                   const respMarket = await fetch(`${url}${stores}?${apiKey}`)
  //                   const respMarketJson =  await respMarket.json()
  //                   let results = respMarketJson.results

  //                   for(let n = 0; n < results.length; n++){

  //                     if(respStoresJson.results[g].store_id == results[n].id){
  //                       $('.searchStoreType').append(`<option class="searchStoreType__option" value="${results[n].name}">${results[n].name}</option>`)




  //                       $('#type').change( () => {
  //                         console.log(results[n].name)
  //                         if(results[n].name == gameName){
  //                           console.log(results[n].name)
  //                           console.log(`${respStoresJson.results[g].url}`)

  //                           $('#searchButton').attr('href',`${respStoresJson.results[g].url}`)
  //                           //Добавляем поисковую ссылку
  //                         }



  //                       })


  //                     }


  //                   }
  //                 }
  //                 findMarketId()
  //               }

  //             }

  //           }

  //         }
  //       }else{
  //         console.log('GamesBy Search:', respGameJson.count)

  //       }

  //     }

  //     searchGame();
  //   }


  // })


})
// //HEADER


// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
//   window.addEventListener('scroll', animOnScroll);

//   function animOnScroll() {
//     for (let index = 0; index < animItems.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 1.5;

//       let animItemPoint = window.innerHeight + animItemHeight / animStart;
//       if (animItemHeight > window.innerHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
//         animItem.classList.add("_active");
//       } else {
//         animItem.classList.remove('_active')
//       }
//     }
//   }

//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return {
//       top: rect.top + scrollTop,
//       left: rect.left + scrollLeft
//     }
//   }

//   setTimeout(() => {
//     animOnScroll()
//   }, 300)

// }

// $(function () {

//   $('.header').slick({
//     dots: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: true,
//     autoplay: true,
//     arrows: false,
//     autoplaySpeed: 3000,
//     speed: 3000,
//   })

//   // $('.main').slick({
//   //   dots: true,
//   //   vertical: true,
//   //   slidesToShow: 7,
//   //   slidesToScroll: 1,
//   //   autoHeight: true,
//   //   slidesPerView: 'auto',
//   //   infinite: true,
//   //   slidesPerGroup: 1,
//   //   pagination:{
//   //     clickable: true,
//   //   }
//   //   // slidesToShow: 5,
//   //   // slidesToScroll: 1,
//   //   // arrow:false,
//   // })

//   //SLIDER
//   $('.body__slider').slick({
//     dots: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     accessibility: true,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     speed: 2000,


//   })

//   $('.left__arrow').click(function () {
//     $('.body__slider').slick('slickPrev');
//   })

//   $('.right__arrow').click(function () {
//     $('.body__slider').slick('slickNext');
//   })



//   $('.grid__img').on('click', function (event) {
//     let target = event.target;
//     let targetSrc = $(target).parent().next().attr('src');


//     if (targetSrc !== undefined) {
//       let modal = `<div class="modal__body"><img src='${targetSrc}' class="modal__img"></div>`
//       $('.galery').append(modal)

//       let closeBtn = `<svg class="modalClose" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" fill="white"/></svg>`;
//       $('.modal__body').append(closeBtn);

//     } else {
//       let modal = `<div class="modal__body" ><img src='${$(event.target).next().attr('src')}' class="modal__img"></div>`
//       $('.galery').append(modal)

//       let closeBtn = `<svg class="modalClose" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" fill="white"/></svg>`;
//       $('.modal__body').append(closeBtn);


//     }
//     $('.modalClose').on('click', () => {
//       $(".modal__body").remove()
//     })
//   });

//   $(document).mouseup(function (e) {
//     var container = $(".modal__body");
//     if (container.has(e.target).length === 0) {
//       container.hide();
//     }
//   });

//   $('.trade__right-psn').on('click', () => {
//     console.log('click')
//     map.setOptions({
//       center: {
//         lat: 40.71275611373065,
//         lng: -74.01338425969676
//       },
//       zoom: 15,
//     });
//   })


//   $('.commerce__left-psn').on('click', () => {
//     console.log('click')
//     map.setOptions({
//       center: {
//         lat: 22.28453280051697,
//         lng: 114.17380099077697
//       },
//       zoom: 15,
//     });
//   })


// })







// /////footer

// const btnForm = $('#btnForm')
// const modalForm = $('.form')
// const closeBtn = $('.btn-primary')

// modalForm.slideUp()

// $(btnForm).on('click', function () {
//   console.log("click")
//   modalForm.slideToggle()
//   btnForm.slideToggle()
// });






// ///validation
// $("#myForm").validate({
//   rules: {
//     email: {
//       required: true,
//       email: true
//     },
//     name: {
//       required: true,
//       minlength: 5
//     }


//   },
//   messages: {
//     email: {
//       required: "Поле email обязательно для заполнения",
//     },
//     name: {
//       required: "Поле имя обязательно для заполнения",
//       minlength: jQuery.validator.format("Длина имени должна быть больше 5-ти символов")
//     }
//   },
//   submitHandler: function () {
//     btnForm.slideToggle()
//     modalForm.slideToggle()

//   }


// });

// //GOOGLE MAPS
// var map;

// function initMap() {
//   const icons = {
//     pin: {
//       icon: "assets/img/pin.png",
//       size: 16
//     },
//   };

//   map = new google.maps.Map(
//     document.getElementById('map'), {
//       mapTypeId: google.maps.MapTypeId.ROADMAP,
//       scrollwheel: false,
//       center: {
//         lat: 40.677866870260345,
//         lng: -73.90085692117088
//       },
//       zoom: 13.5,
//       disableDefaultUI: true,
//       styles: [{
//           "elementType": "geometry",
//           "stylers": [{
//             "color": "#f5f5f5"
//           }]
//         },
//         {
//           "elementType": "labels.icon",
//           "stylers": [{
//             "visibility": "off"
//           }]
//         },
//         {
//           "elementType": "labels.text.fill",
//           "stylers": [{
//             "color": "#616161"
//           }]
//         },
//         {
//           "elementType": "labels.text.stroke",
//           "stylers": [{
//             "color": "#f5f5f5"
//           }]
//         },
//         {
//           "featureType": "administrative.land_parcel",
//           "elementType": "labels.text.fill",
//           "stylers": [{
//             "color": "#bdbdbd"
//           }]
//         },
//         {
//           "featureType": "poi",
//           "elementType": "geometry",
//           "stylers": [{
//             "color": "#eeeeee"
//           }]
//         },
//         {
//           "featureType": "poi",
//           "elementType": "labels.text.fill",
//           "stylers": [{
//             "color": "#757575"
//           }]
//         },
//         {
//           "featureType": "poi.park",
//           "elementType": "geometry",
//           "stylers": [{
//             "color": "#e5e5e5"
//           }]
//         },
//         {
//           "featureType": "poi.park",
//           "elementType": "labels.text.fill",
//           "stylers": [{
//             "color": "#9e9e9e"
//           }]
//         },
//         {
//           "featureType": "road",
//           "elementType": "geometry",
//           "stylers": [{
//             "color": "#ffffff"
//           }]
//         },
//         {
//           "featureType": "road.arterial",
//           "elementType": "labels.text.fill",
//           "stylers": [{
//             "color": "#757575"
//           }]
//         },
//         {
//           "featureType": "road.highway",
//           "elementType": "geometry",
//           "stylers": [{
//             "color": "#dadada"
//           }]
//         },
//         {
//           "featureType": "road.highway",
//           "elementType": "labels.text.fill",
//           "stylers": [{
//             "color": "#616161"
//           }]
//         },
//         {
//           "featureType": "road.local",
//           "elementType": "labels.text.fill",
//           "stylers": [{
//             "color": "#9e9e9e"
//           }]
//         },
//         {
//           "featureType": "transit.line",
//           "elementType": "geometry",
//           "stylers": [{
//             "color": "#e5e5e5"
//           }]
//         },
//         {
//           "featureType": "transit.station",
//           "elementType": "geometry",
//           "stylers": [{
//             "color": "#eeeeee"
//           }]
//         },
//         {
//           "featureType": "water",
//           "elementType": "geometry",
//           "stylers": [{
//             "color": "#c9c9c9"
//           }]
//         },
//         {
//           "featureType": "water",
//           "elementType": "labels.text.fill",
//           "stylers": [{
//             "color": "#9e9e9e"
//           }]
//         }
//       ],
//     }
//   );


//   let infowindowNY = new google.maps.InfoWindow({
//     content: `<div class="info__window">
//     <img class="info__img" src="https://lh5.googleusercontent.com/p/AF1QipO6RCMKBDZdcZ8VZtW4qqtc2Og615KSrg2ckJwE=w408-h501-k-no">
//     <p class="info__text">World Trade Center</p>
//     </div>`,
//   });

//   const markerBr = new google.maps.Marker({
//     position: {
//       lat: 40.677866870260345,
//       lng: -73.90085692117088
//     },
//     map,
//     title: `BROOKLYN`,
//     icon: icons.pin.icon
//   });
//   const markerNY = new google.maps.Marker({
//     position: {
//       lat: 40.71275611373065,
//       lng: -74.01338425969676
//     },
//     map,
//     title: `World Trade Center`,
//     icon: icons.pin.icon
//   });
//   markerNY.addListener('click', () => {
//     infowindowNY.open({
//       anchor: markerNY,
//       map,
//       shouldFocus: false,
//     });
//   })

//   let infowindowHK = new google.maps.InfoWindow({
//     content: `<div class="info__window">
//     <img class="info__img" src="https://lh5.googleusercontent.com/p/AF1QipPOAdQyvfwTu0f1lTz-9tw14HXOirS7llFxZPn-=w408-h306-k-no">
//     <p class="info__text">Hong Kong</p>
//     </div>`,
//   });

//   const markerHK = new google.maps.Marker({
//     position: {
//       lat: 22.28453280051697,
//       lng: 114.17380099077697
//     },
//     map,
//     title: `Hong Kong`,
//     icon: icons.pin.icon
//   });
//   markerHK.addListener('click', () => {
//     infowindowHK.open({
//       anchor: markerHK,
//       map,
//       shouldFocus: false,
//     });
//   })



// }


// initMap()